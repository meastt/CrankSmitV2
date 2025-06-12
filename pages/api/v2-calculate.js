// pages/api/v2-calculate.js
import { componentDatabaseV2 } from '../../lib/v2/components.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { bikeType, currentSetup, proposedSetup } = req.body;
    
    // Validate required fields
    if (!bikeType || !currentSetup || !proposedSetup) {
      return res.status(400).json({ 
        error: 'Missing required fields: bikeType, currentSetup, proposedSetup' 
      });
    }

    // Find rear derailleurs with error handling
    const currentRD = componentDatabaseV2.rearDerailleurs.find(rd => 
      rd.id === currentSetup.rearDerailleur?.id
    );
    const proposedRD = componentDatabaseV2.rearDerailleurs.find(rd => 
      rd.id === proposedSetup.rearDerailleur?.id
    );

    if (!currentRD || !proposedRD) {
      return res.status(400).json({ 
        error: 'Invalid rear derailleur selection',
        details: {
          currentRD: !!currentRD,
          proposedRD: !!proposedRD,
          requestedIds: {
            current: currentSetup.rearDerailleur?.id,
            proposed: proposedSetup.rearDerailleur?.id
          }
        }
      });
    }

    // Helper function to calculate gear ratios
    const calculateGearRatios = (crankset, cassette) => {
      const ratios = [];
      crankset.teeth.forEach(chainring => {
        cassette.teeth.forEach(cog => {
          ratios.push({
            chainring,
            cog,
            ratio: chainring / cog,
            gearInches: (chainring / cog) * 27, // 700c wheel
            development: (chainring / cog) * Math.PI * 2.1 // meters per pedal revolution
          });
        });
      });
      
      return ratios.sort((a, b) => a.ratio - b.ratio);
    };

    // Helper function to analyze gear spread
    const analyzeGearSpread = (gears) => {
      const ratios = gears.map(g => g.ratio);
      return {
        lowest: Math.min(...ratios),
        highest: Math.max(...ratios),
        spread: Math.max(...ratios) / Math.min(...ratios),
        averageStep: ratios.length > 1 ? 
          ratios.slice(1).reduce((sum, ratio, i) => sum + (ratio / ratios[i]), 0) / (ratios.length - 1) : 1,
        totalGears: ratios.length
      };
    };

    // Helper function to calculate system weight breakdown
    const calculateSystemWeight = (setup, rd) => ({
      crankset: setup.crankset.weight,
      cassette: setup.cassette.weight,
      rearDerailleur: rd.weight,
      chain: 257, // Standard chain weight estimate
      total: setup.crankset.weight + setup.cassette.weight + rd.weight + 257
    });

    // Run compatibility checks using your rules engine
    const currentCompatibility = componentDatabaseV2.compatibilityRules.checkRearDerailleur(
      currentRD, 
      currentSetup.cassette, 
      currentSetup.crankset
    );
    
    const proposedCompatibility = componentDatabaseV2.compatibilityRules.checkRearDerailleur(
      proposedRD, 
      proposedSetup.cassette, 
      proposedSetup.crankset
    );

    // Calculate gear analysis
    const currentGears = calculateGearRatios(currentSetup.crankset, currentSetup.cassette);
    const proposedGears = calculateGearRatios(proposedSetup.crankset, proposedSetup.cassette);
    
    const currentAnalysis = analyzeGearSpread(currentGears);
    const proposedAnalysis = analyzeGearSpread(proposedGears);

    // Calculate weights
    const currentWeights = calculateSystemWeight(currentSetup, currentRD);
    const proposedWeights = calculateSystemWeight(proposedSetup, proposedRD);

    // Chain length calculations
    const currentChainLength = componentDatabaseV2.compatibilityRules.calculateChainLength(
      currentSetup.crankset, 
      currentSetup.cassette
    );
    const proposedChainLength = componentDatabaseV2.compatibilityRules.calculateChainLength(
      proposedSetup.crankset, 
      proposedSetup.cassette
    );

    // Cost calculations (if price data available)
    const calculateCost = (setup, rd) => {
      const costs = {
        crankset: setup.crankset.price || 0,
        cassette: setup.cassette.price || 0,
        rearDerailleur: rd.price || 0
      };
      costs.total = costs.crankset + costs.cassette + costs.rearDerailleur;
      costs.hasAllPrices = costs.crankset > 0 && costs.cassette > 0 && costs.rearDerailleur > 0;
      return costs;
    };

    const currentCosts = calculateCost(currentSetup, currentRD);
    const proposedCosts = calculateCost(proposedSetup, proposedRD);

    // Generate intelligent recommendations
    const generateRecommendations = () => {
      const recommendations = [];

      // Compatibility-based recommendations
      if (proposedCompatibility.errors.length > 0) {
        recommendations.push({
          type: 'error',
          title: 'Compatibility Issues',
          message: 'This setup has compatibility issues that must be resolved.',
          details: proposedCompatibility.errors
        });
      }

      if (proposedCompatibility.warnings.length > 0) {
        recommendations.push({
          type: 'warning',
          title: 'Setup Considerations',
          message: 'This setup may work but consider these factors.',
          details: proposedCompatibility.warnings
        });
      }

      // Performance improvements
      if (proposedAnalysis.spread > currentAnalysis.spread * 1.15) {
        recommendations.push({
          type: 'info',
          title: 'Wider Gear Range',
          message: `Gear range increases from ${currentAnalysis.spread.toFixed(1)} to ${proposedAnalysis.spread.toFixed(1)} - better for varied terrain.`
        });
      }

      // Weight considerations
      const weightDiff = proposedWeights.total - currentWeights.total;
      if (Math.abs(weightDiff) > 50) {
        recommendations.push({
          type: weightDiff > 0 ? 'warning' : 'info',
          title: `Weight ${weightDiff > 0 ? 'Increase' : 'Savings'}`,
          message: `Setup ${weightDiff > 0 ? 'adds' : 'saves'} ${Math.abs(weightDiff)}g total weight.`
        });
      }

      // Electronic upgrades
      if (!currentRD.isElectronic && proposedRD.isElectronic) {
        recommendations.push({
          type: 'info',
          title: 'Electronic Shifting Upgrade',
          message: 'Moving to electronic shifting provides faster, more precise gear changes and programmable features.'
        });
      }

      // Wireless benefits
      if (!currentRD.isWireless && proposedRD.isWireless) {
        recommendations.push({
          type: 'info',
          title: 'Wireless Technology',
          message: 'Wireless shifting eliminates cables for cleaner bike appearance and easier maintenance.'
        });
      }

      return recommendations;
    };

    // Return comprehensive results
    res.status(200).json({
      current: {
        gears: currentGears,
        analysis: currentAnalysis,
        weights: currentWeights,
        compatibility: currentCompatibility,
        chainLength: currentChainLength,
        costs: currentCosts,
        components: {
          crankset: currentSetup.crankset,
          cassette: currentSetup.cassette,
          rearDerailleur: currentRD
        }
      },
      proposed: {
        gears: proposedGears,
        analysis: proposedAnalysis,
        weights: proposedWeights,
        compatibility: proposedCompatibility,
        chainLength: proposedChainLength,
        costs: proposedCosts,
        components: {
          crankset: proposedSetup.crankset,
          cassette: proposedSetup.cassette,
          rearDerailleur: proposedRD
        }
      },
      comparison: {
        weightChange: proposedWeights.total - currentWeights.total,
        weightBreakdown: {
          crankset: proposedWeights.crankset - currentWeights.crankset,
          cassette: proposedWeights.cassette - currentWeights.cassette,
          rearDerailleur: proposedWeights.rearDerailleur - currentWeights.rearDerailleur
        },
        gearChanges: {
          spreadChange: proposedAnalysis.spread - currentAnalysis.spread,
          lowestGearChange: proposedAnalysis.lowest - currentAnalysis.lowest,
          highestGearChange: proposedAnalysis.highest - currentAnalysis.highest,
          gearCountChange: proposedAnalysis.totalGears - currentAnalysis.totalGears
        },
        costChange: proposedCosts.hasAllPrices && currentCosts.hasAllPrices ? 
          proposedCosts.total - currentCosts.total : null,
        recommendations: generateRecommendations()
      },
      metadata: {
        calculatedAt: new Date().toISOString(),
        bikeType,
        version: '2.0',
        hasCompatibilityIssues: proposedCompatibility.errors.length > 0,
        hasWarnings: proposedCompatibility.warnings.length > 0
      }
    });

  } catch (error) {
    console.error('V2 Calculation error:', error);
    res.status(500).json({ 
      error: 'Internal server error during calculation',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}