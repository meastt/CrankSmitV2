// pages/v2/index.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function V2Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [hasAccess, setHasAccess] = useState(false);

  const handleEarlyAccess = async (e) => {
    e.preventDefault();
    // For now, just grant access - you can add email verification later
    localStorage.setItem('cranksmith_v2_access', 'true');
    setHasAccess(true);
  };

  return (
    <>
      <Head>
        <title>CrankSmith V2 - Next Generation Bike Configuration</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        {/* V2 Development Warning */}
        <div className="bg-yellow-500 text-black text-center py-3 text-sm font-medium">
          🚧 V2 Development Build - Experimental Features Ahead! 
          <Link href="/" className="underline ml-2 font-bold">
            ← Back to stable version
          </Link>
        </div>

        <main className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                 style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border-subtle)' }}>
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Version 2.0 Alpha
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              The Complete Drivetrain Builder
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Beyond simple calculations. Full compatibility checking, weight tracking, 
              and intelligent recommendations for your entire drivetrain.
            </p>
          </div>

          {/* What's New Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                   style={{ background: 'var(--accent-blue)', color: 'white' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Full Compatibility Checks
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Rear derailleur capacity, max cog limits, and brand compatibility all verified automatically
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                   style={{ background: 'var(--accent-performance)', color: 'white' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Complete Weight Analysis
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Track weights for crankset, cassette, rear derailleur, chain, and more
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                   style={{ background: 'var(--accent-orange)', color: 'white' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Smart Recommendations
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                AI-powered suggestions based on your riding style, terrain, and compatibility requirements
              </p>
            </div>
          </div>

          {/* Access Gate */}
          {!hasAccess ? (
            <div className="max-w-md mx-auto">
              <div className="card">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Join V2 Testing
                </h2>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Help shape the future of CrankSmith. Get early access to new features and provide feedback.
                </p>
                
                <form onSubmit={handleEarlyAccess} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="input-field"
                    required
                  />
                  <button type="submit" className="btn-primary w-full">
                    Get V2 Access
                  </button>
                </form>
                
                <p className="text-sm text-center mt-4" style={{ color: 'var(--text-tertiary)' }}>
                  Or use the direct link from your V2 invite email
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <Link href="/v2/builder" className="btn-primary text-lg px-8">
                Launch Drivetrain Builder →
              </Link>
            </div>
          )}

          {/* Feature Preview */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
              Coming in V2
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4 p-4 rounded-lg" style={{ background: 'var(--surface-elevated)' }}>
                <div className="text-2xl">⚙️</div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                    Bottom Bracket Compatibility
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    DUB, GXP, Hollowtech II - know what fits your frame
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg" style={{ background: 'var(--surface-elevated)' }}>
                <div className="text-2xl">⛓️</div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                    Chain Length Calculator
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    Get the exact number of links needed for your setup
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg" style={{ background: 'var(--surface-elevated)' }}>
                <div className="text-2xl">🔄</div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                    Shifter Compatibility
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    Match shifters with derailleurs, including Di2 and AXS
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg" style={{ background: 'var(--surface-elevated)' }}>
                <div className="text-2xl">📊</div>
                <div>
                  <h4 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                    Gear Ratio Visualization
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    See gear spacing and identify gaps in your range
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}