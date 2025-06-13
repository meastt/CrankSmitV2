export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    // Import both the database and compatibility rules
    const { componentDatabaseV2, compatibilityRules } = require('../../lib/v2/components.js');
    
    // Get test components for validation
    const testCrankset = componentDatabaseV2.cranksets.find(c => c.id === "shimano-105-r7000");
    const testCassette = componentDatabaseV2.cassettes.find(c => c.id === "shimano-105-11-28");
    const testDerailleur = componentDatabaseV2.rearDerailleurs.find(rd => rd.id === "shimano-105-r7000");
    
    // Run compatibility check
    const compatibilityCheck = compatibilityRules.validateDrivetrain(
      testCrankset,
      testCassette,
      testDerailleur
    );
    
    res.status(200).json({ 
      message: 'Compatibility check completed',
      testSetup: {
        crankset: testCrankset?.model || 'Not found',
        cassette: testCassette?.model || 'Not found',
        derailleur: testDerailleur?.model || 'Not found'
      },
      compatibility: compatibilityCheck,
      databaseStats: {
        cranksetsCount: componentDatabaseV2.cranksets.length,
        cassettesCount: componentDatabaseV2.cassettes.length,
        rearDerailleursCount: componentDatabaseV2.rearDerailleurs.length
      }
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Calculation failed',
      details: error.message 
    });
  }
}