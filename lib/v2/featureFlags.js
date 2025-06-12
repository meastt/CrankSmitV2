// lib/featureFlags.js
export const features = {
    v2: {
      enabled: process.env.NEXT_PUBLIC_ENABLE_V2 === 'true',
      rearDerailleur: process.env.NEXT_PUBLIC_ENABLE_RD === 'true',
      fullDrivetrain: process.env.NEXT_PUBLIC_ENABLE_FULL_DRIVETRAIN === 'true',
      advancedCompatibility: process.env.NEXT_PUBLIC_ENABLE_ADVANCED_COMPAT === 'true'
    }
  };
  
  // Usage in components
  import { features } from '../lib/featureFlags';
  
  {features.v2.rearDerailleur && (
    <RearDerailleurSelector />
  )}