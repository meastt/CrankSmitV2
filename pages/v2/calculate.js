// pages/api/v2-calculate.js
import { componentDatabaseV2 } from '../../lib/v2/components';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { bikeType, currentSetup, proposedSetup } = req.body;
  
  // Basic validation
  if (!currentSetup?.rearDerailleur || !proposedSetup?.rearDerailleur) {
    return res.status(400).json({ error: 'Rear derailleur required for V2 calculations' });
  }
  
  // V2 calculation logic with RD checks
  const currentRD = componentDatabaseV2.rearDerailleurs.find(rd => rd.id === currentSetup.rearDerailleur?.id);
  const proposedRD = componentDatabaseV2.rearDerailleurs.find(rd => rd.id === proposedSetup.rearDerailleur?.id);
  
  if (!currentRD || !proposedRD) {
    return res.status(400).json({ error: 'Invalid rear derailleur selection' });
  }
  
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
    (currentSetup.crankset?.weight || 0) + 
    (currentSetup.cassette?.weight || 0) + 
    (currentRD?.weight || 0) +
    257; // chain weight estimate
    
  const proposedTotalWeight = 
    (proposedSetup.crankset?.weight || 0) + 
    (proposedSetup.cassette?.weight || 0) + 
    (proposedRD?.weight || 0) +
    257;
  
  // Return enhanced results
  res.status(200).json({
    current: {
      totalWeight: currentTotalWeight,
      compatibility: currentCompatibility,
      components: {
        crankset: currentSetup.crankset,
        cassette: currentSetup.cassette,
        rearDerailleur: currentRD
      }
    },
    proposed: {
      totalWeight: proposedTotalWeight,
      compatibility: proposedCompatibility,
      components: {
        crankset: proposedSetup.crankset,
        cassette: proposedSetup.cassette,
        rearDerailleur: proposedRD
      }
    },
    comparison: {
      weightChange: proposedTotalWeight - currentTotalWeight,
      rdWeightChange: (proposedRD?.weight || 0) - (currentRD?.weight || 0)
    }
  });
}