# CrankSmith V2

A next-generation bicycle drivetrain configuration and compatibility checker with AI-powered recommendations.

## Features

- Complete drivetrain compatibility checking
- Weight tracking for all components
- AI-powered recommendations via Riley (expert bike mechanic)
- Support for electronic and mechanical shifting
- Chain length calculations
- Bottom bracket compatibility
- Cable pull ratio matching

## Tech Stack

- Next.js
- React
- Anthropic Claude API
- Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your API keys:
   ```
   ANTHROPIC_API_KEY=your_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### `/api/riley`

Expert bike mechanic AI endpoint that provides drivetrain compatibility advice and recommendations.

**Method:** POST

**Request Body:**
```json
{
  "prompt": "Your question about drivetrain compatibility",
  "context": "Optional context about your current setup"
}
```

**Response:**
```json
{
  "success": true,
  "response": "Riley's expert advice...",
  "timestamp": "2024-03-21T12:00:00.000Z",
  "version": "v2"
}
```

## Development

This is a V2 development build with experimental features. The stable version is available at the main repository.

## License

MIT