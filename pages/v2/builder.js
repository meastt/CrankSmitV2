// builder.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DrivetrainBuilder from '../../components/v2/DrivetrainBuilder';
import { componentDatabaseV2 } from '../../lib/v2/components';
import { compareSetups } from '../../lib/calculations';

export default function V2Builder() {
  const router = useRouter();
  const [bikeType, setBikeType] = useState('');
  const [currentSetup, setCurrentSetup] = useState({
    wheel: '',
    tire: '',
    crankset: null,
    cassette: null,
    rearDerailleur: null
  });
  const [proposedSetup, setProposedSetup] = useState({
    wheel: '',
    tire: '',
    crankset: null,
    cassette: null,
    rearDerailleur: null
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Check access
  useEffect(() => {
    const hasAccess = localStorage.getItem('cranksmith_v2_access');
    if (!hasAccess) {
      router.push('/v2');
    }
  }, []);

  const handleCalculate = async () => {
    if (!bikeType || !currentSetup.crankset || !currentSetup.cassette || !currentSetup.rearDerailleur) {
      alert('Please complete all fields including rear derailleur');
      return;
    }

    setLoading(true);
    
    try {
      // Use existing calculation logic but add RD weight
      const basicResults = compareSetups(currentSetup, proposedSetup);
      
      // Add V2 enhancements
      const currentCompatibility = componentDatabaseV2.compatibilityRules.checkRearDerailleur(
        currentSetup.rearDerailleur,
        currentSetup.cassette,
        currentSetup.crankset
      );
      
      const proposedCompatibility = componentDatabaseV2.compatibilityRules.checkRearDerailleur(
        proposedSetup.rearDerailleur,
        proposedSetup.cassette,
        proposedSetup.crankset
      );
      
      // Enhanced weight calculations
      const currentTotalWeight = 
        currentSetup.crankset.weight + 
        currentSetup.cassette.weight + 
        currentSetup.rearDerailleur.weight + 
        257; // chain
        
      const proposedTotalWeight = 
        proposedSetup.crankset.weight + 
        proposedSetup.cassette.weight + 
        proposedSetup.rearDerailleur.weight + 
        257;
      
      setResults({
        ...basicResults,
        current: {
          ...basicResults.current,
          totalWeight: currentTotalWeight,
          compatibility: currentCompatibility,
          rearDerailleur: currentSetup.rearDerailleur
        },
        proposed: {
          ...basicResults.proposed,
          totalWeight: proposedTotalWeight,
          compatibility: proposedCompatibility,
          rearDerailleur: proposedSetup.rearDerailleur
        },
        comparison: {
          ...basicResults.comparison,
          rdWeightChange: proposedSetup.rearDerailleur.weight - currentSetup.rearDerailleur.weight,
          totalWeightChange: proposedTotalWeight - currentTotalWeight
        }
      });
      
    } catch (error) {
      console.error('Calculation error:', error);
      alert('Error calculating results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Drivetrain Builder V2 | CrankSmith</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        {/* V2 Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/v2" className="text-white/80 hover:text-white">
                  ← V2 Home
                </Link>
                <span className="text-white/50">|</span>
                <h1 className="text-lg font-semibold">Drivetrain Builder</h1>
              </div>
              <Link href="/" className="text-sm text-white/80 hover:text-white">
                Exit to V1 →
              </Link>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Bike Type Selection */}
          {!bikeType && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
                Choose Your Bike Type
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['road', 'gravel', 'mtb'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setBikeType(type)}
                    className="card hover:shadow-lg transition-all p-8 text-center group"
                  >
                    <div className="text-4xl mb-4">
                      {type === 'road' ? '🚴' : type === 'gravel' ? '🚵' : '⛰️'}
                    </div>
                    <h3 className="text-xl font-semibold capitalize mb-2" 
                        style={{ color: 'var(--text-primary)' }}>
                      {type}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                      {type === 'road' ? 'Speed & efficiency' : 
                       type === 'gravel' ? 'Adventure ready' : 
                       'Trail domination'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Main Builder Interface */}
          {bikeType && (
            <>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {bikeType.charAt(0).toUpperCase() + bikeType.slice(1)} Drivetrain Configuration
                  </h2>
                  <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
                    Build and compare complete drivetrain setups with full compatibility checking
                  </p>
                </div>
                
                <button
                  onClick={() => setBikeType('')}
                  className="px-4 py-2 rounded-lg transition-colors"
                  style={{ 
                    background: 'var(--surface-elevated)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  Change Bike Type
                </button>
              </div>

              <DrivetrainBuilder
                bikeType={bikeType}
                currentSetup={currentSetup}
                setCurrentSetup={setCurrentSetup}
                proposedSetup={proposedSetup}
                setProposedSetup={setProposedSetup}
              />

              {/* Calculate Button */}
              <div className="text-center mt-8">
                <button
                  onClick={handleCalculate}
                  disabled={loading}
                  className="btn-primary text-lg px-8 py-4"
                >
                  {loading ? 'Calculating...' : 'Analyze Drivetrain'}
                </button>
              </div>

              {/* Results Section */}
              {results && (
                <div className="mt-12 space-y-8">
                  <h3 className="text-2xl font-bold text-center" style={{ color: 'var(--text-primary)' }}>
                    Analysis Results
                  </h3>

                  {/* Compatibility Summary */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="card">
                      <h4 className="text-lg font-semibold mb-4">Current Setup Status</h4>
                      {results.current.compatibility.errors.length === 0 ? (
                        <div className="text-green-600 font-medium">✓ All components compatible</div>
                      ) : (
                        <div className="space-y-2">
                          {results.current.compatibility.errors.map((error, i) => (
                            <div key={i} className="text-red-600 text-sm">• {error}</div>
                          ))}
                        </div>
                      )}
                      {results.current.compatibility.warnings.map((warning, i) => (
                        <div key={i} className="text-yellow-600 text-sm mt-2">⚠ {warning}</div>
                      ))}
                    </div>

                    <div className="card">
                      <h4 className="text-lg font-semibold mb-4">Proposed Setup Status</h4>
                      {results.proposed.compatibility.errors.length === 0 ? (
                        <div className="text-green-600 font-medium">✓ All components compatible</div>
                      ) : (
                        <div className="space-y-2">
                          {results.proposed.compatibility.errors.map((error, i) => (
                            <div key={i} className="text-red-600 text-sm">• {error}</div>
                          ))}
                        </div>
                      )}
                      {results.proposed.compatibility.warnings.map((warning, i) => (
                        <div key={i} className="text-yellow-600 text-sm mt-2">⚠ {warning}</div>
                      ))}
                    </div>
                  </div>

                  {/* Weight Comparison */}
                  <div className="card">
                    <h4 className="text-lg font-semibold mb-4">Weight Analysis</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                          {results.comparison.rdWeightChange > 0 ? '+' : ''}{results.comparison.rdWeightChange}g
                        </div>
                        <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>RD Change</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                          {results.comparison.weightChange > 0 ? '+' : ''}{results.comparison.weightChange}g
                        </div>
                        <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Components</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                          {results.comparison.totalWeightChange > 0 ? '+' : ''}{results.comparison.totalWeightChange}g
                        </div>
                        <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Total Change</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: 'var(--accent-blue)' }}>
                          {results.proposed.totalWeight}g
                        </div>
                        <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Final Weight</div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="card">
                    <h4 className="text-lg font-semibold mb-4">Performance Impact</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Top Speed</div>
                        <div className="text-2xl font-bold">
                          {results.current.metrics.highSpeed} → {results.proposed.metrics.highSpeed} mph
                        </div>
                      </div>
                      <div>
                        <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Climbing Speed</div>
                        <div className="text-2xl font-bold">
                          {results.current.metrics.lowSpeed} → {results.proposed.metrics.lowSpeed} mph
                        </div>
                      </div>
                      <div>
                        <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Gear Range</div>
                        <div className="text-2xl font-bold">
                          {results.current.gearRange}% → {results.proposed.gearRange}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* V2 Bottom Line */}
                  <div className="p-8 rounded-xl" style={{ 
                    background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(88, 86, 214, 0.1) 100%)',
                    border: '1px solid var(--accent-blue)'
                  }}>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                      V2 Analysis Summary
                    </h3>
                    <div className="space-y-3" style={{ color: 'var(--text-secondary)' }}>
                      <p className="text-lg">
                        Your proposed setup {results.proposed.compatibility.errors.length === 0 ? 
                          'is fully compatible' : 'has compatibility issues that need addressing'}.
                      </p>
                      <p>
                        Total weight change: {results.comparison.totalWeightChange > 0 ? '+' : ''}{results.comparison.totalWeightChange}g
                        ({results.comparison.rdWeightChange}g from the rear derailleur alone).
                      </p>
                      {results.proposed.rearDerailleur.hasClutch && (
                        <p>✓ Your new derailleur includes a clutch mechanism for better chain retention.</p>
                      )}
                      {results.proposed.rearDerailleur.isElectronic && (
                        <p>⚡ Electronic shifting will provide precise, consistent performance.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </>
  );
}