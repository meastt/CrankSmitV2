// calculate.js
import { componentDatabaseV2 } from 'lib/components';

export default async function handler(req, res) {
  const { bikeType, currentSetup, proposedSetup } = req.body;
  
  // V2 calculation logic with RD checks
  const currentRD = componentDatabaseV2.rearDerailleurs.find(rd => rd.id === currentSetup.rearDerailleur?.id);
  const proposedRD = componentDatabaseV2.rearDerailleurs.find(rd => rd.id === proposedSetup.rearDerailleur?.id);
  
  // Run compatibility checks
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
  
  // Calculate total weights including RD
  const currentTotalWeight = 
    currentSetup.crankset.weight + 
    currentSetup.cassette.weight + 
    currentRD.weight +
    257; // chain weight estimate
    
  const proposedTotalWeight = 
    proposedSetup.crankset.weight + 
    proposedSetup.cassette.weight + 
    proposedRD.weight +
    257;
  
  // Return enhanced results
  res.status(200).json({
    current: {
      ...existingCalculations,
      totalWeight: currentTotalWeight,
      compatibility: currentCompatibility
    },
    proposed: {
      ...existingCalculations,
      totalWeight: proposedTotalWeight,
      compatibility: proposedCompatibility
    },
    comparison: {
      weightChange: proposedTotalWeight - currentTotalWeight,
      // ... other comparisons
    }
  });
}