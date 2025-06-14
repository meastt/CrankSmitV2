// pages/api/feedback.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    try {
      const { email, feedback, type, page, userAgent, timestamp } = req.body;
  
      // Validate required fields
      if (!email || !feedback) {
        return res.status(400).json({ 
          error: 'Email and feedback are required' 
        });
      }
  
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: 'Please provide a valid email address' 
        });
      }
  
      // For now, just log to console (you can replace with database storage later)
      const feedbackData = {
        id: Date.now() + Math.random().toString(36).substr(2, 9),
        email,
        feedback,
        type: type || 'general',
        page: page || 'unknown',
        userAgent: userAgent || req.headers['user-agent'],
        timestamp: timestamp || new Date().toISOString(),
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
      };
  
      // Log feedback (replace with database save later)
      console.log('V2 FEEDBACK RECEIVED:', JSON.stringify(feedbackData, null, 2));
  
      // TODO: Save to database when you set one up
      // await saveFeedbackToDatabase(feedbackData);
  
      // TODO: Send email notification when you set up email
      // await sendFeedbackNotification(feedbackData);
  
      res.status(200).json({ 
        success: true,
        message: 'Thank you for your feedback! We\'ll review it and get back to you.',
        feedbackId: feedbackData.id
      });
  
    } catch (error) {
      console.error('Feedback submission error:', error);
      res.status(500).json({ 
        error: 'Failed to submit feedback. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }