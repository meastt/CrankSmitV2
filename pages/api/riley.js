// pages/api/v2/riley.js

// Simple in-memory rate limiting store
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // 10 requests per minute

// Response cache
const responseCache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Structured logging
const log = {
  info: (message, data = {}) => {
    console.log(JSON.stringify({
      level: 'info',
      timestamp: new Date().toISOString(),
      message,
      ...data
    }));
  },
  error: (message, error = null, data = {}) => {
    console.error(JSON.stringify({
      level: 'error',
      timestamp: new Date().toISOString(),
      message,
      error: error?.message || error,
      stack: error?.stack,
      ...data
    }));
  }
};

const V2_RILEY_SYSTEM_PROMPT = `
You are Riley, a master bike mechanic with 20+ years of experience, now with enhanced V2 capabilities focusing on complete drivetrain compatibility and optimization.

ENHANCED V2 EXPERTISE:
- Rear derailleur capacity calculations and limits
- Complete drivetrain compatibility (crankset, cassette, RD, chain, shifters)
- Electronic vs mechanical shifting considerations
- Clutch-type derailleurs for chain retention
- Direct mount vs standard derailleur hangers
- Chain length calculations
- Bottom bracket standards and compatibility
- Cable pull ratios and shifter/derailleur matching

COMPATIBILITY RULES YOU KNOW:
- Shimano road and MTB have different cable pull ratios (cannot mix)
- SRAM uses 1:1 actuation ratio across their line
- Max cog size must not exceed RD specification
- Total capacity = (big ring - small ring) + (big cog - small cog)
- Electronic groups (Di2, AXS) need matched components
- GRX can work with road cassettes but prefers its own
- MTB derailleurs can work for "mullet" gravel builds

FORMATTING:
- Use <br><br> between sections for readability
- Keep responses focused and actionable
- Include specific model recommendations when relevant
- Mention weight differences when significant

Remember: You're helping cyclists build working drivetrains, not just fast ones. Compatibility comes first, then optimization.
`;

export default async function handler(req, res) {
  const requestId = Math.random().toString(36).substring(7);
  log.info('Incoming request', { requestId, method: req.method });

  if (req.method !== 'POST') {
    log.info('Method not allowed', { requestId, method: req.method });
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  // Clean up old entries
  for (const [key, timestamp] of rateLimitStore.entries()) {
    if (timestamp < windowStart) {
      rateLimitStore.delete(key);
    }
  }
  
  // Count requests in current window
  const requestCount = Array.from(rateLimitStore.values())
    .filter(timestamp => timestamp > windowStart)
    .length;
  
  if (requestCount >= MAX_REQUESTS) {
    log.info('Rate limit exceeded', { requestId, ip, requestCount });
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.',
      timestamp: new Date().toISOString(),
      version: 'v2'
    });
  }
  
  // Add current request to rate limit store
  rateLimitStore.set(`${ip}-${now}`, now);

  // Check for required environment variable
  if (!process.env.ANTHROPIC_API_KEY) {
    log.error('Missing API key', null, { requestId });
    return res.status(500).json({
      success: false,
      error: 'Server configuration error',
      timestamp: new Date().toISOString(),
      version: 'v2'
    });
  }

  // Check request size (limit to 1MB)
  const contentLength = parseInt(req.headers['content-length'] || '0');
  if (contentLength > 1024 * 1024) {
    log.info('Request too large', { requestId, contentLength });
    return res.status(413).json({
      success: false,
      error: 'Request too large',
      timestamp: new Date().toISOString(),
      version: 'v2'
    });
  }

  try {
    const { prompt, context } = req.body;
    
    // Validate required fields
    if (!prompt) {
      log.info('Missing required field', { requestId, field: 'prompt' });
      return res.status(400).json({
        success: false,
        error: 'Missing required field: prompt',
        timestamp: new Date().toISOString(),
        version: 'v2'
      });
    }

    // Check cache
    const cacheKey = `${prompt}-${context || ''}`;
    const cachedResponse = responseCache.get(cacheKey);
    if (cachedResponse && (now - cachedResponse.timestamp < CACHE_TTL)) {
      log.info('Cache hit', { requestId, cacheKey });
      return res.status(200).json(cachedResponse.data);
    }

    // Build enhanced context for V2
    const v2Context = `
${context || ''}

V2 SPECIFIC CONTEXT:
The user is using the V2 drivetrain builder which includes:
- Full rear derailleur specifications and compatibility checking
- Weight tracking for all components including RD
- Compatibility warnings for mismatched components
- Electronic/mechanical shifting considerations
- Clutch vs non-clutch derailleur options
`;

    const fullPrompt = `${V2_RILEY_SYSTEM_PROMPT}

CURRENT CONTEXT: ${v2Context}

USER QUESTION: ${prompt}

Please respond as Riley with V2 drivetrain expertise:`;

    log.info('Calling Anthropic API', { requestId, promptLength: prompt.length });
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: fullPrompt
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      log.error('Anthropic API error', new Error(`API Error: ${response.status} - ${errorText}`), { requestId });
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const responseData = {
      success: true,
      response: data.content[0].text,
      timestamp: new Date().toISOString(),
      version: 'v2'
    };
    
    // Cache the response
    responseCache.set(cacheKey, {
      data: responseData,
      timestamp: now
    });

    // Clean up old cache entries
    for (const [key, value] of responseCache.entries()) {
      if (now - value.timestamp > CACHE_TTL) {
        responseCache.delete(key);
      }
    }

    log.info('Request completed successfully', { requestId });
    res.status(200).json(responseData);

  } catch (error) {
    log.error('Request failed', error, { requestId });
    res.status(500).json({
      success: false,
      error: error.message || 'Internal server error',
      timestamp: new Date().toISOString(),
      version: 'v2'
    });
  }
}