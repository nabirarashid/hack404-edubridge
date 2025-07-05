# EduBridge Backend

A Node.js backend API for EduBridge - an educational platform that helps students track their learning progress and get AI-powered coaching insights.

## Features

- **Help Request Management**: Students can submit help requests with topics and details
- **Progress Tracking**: Store and retrieve student help requests
- **AI-Powered Summaries**: Generate progress summaries using Google's Gemini AI
- **MongoDB Integration**: Persistent data storage with MongoDB

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (via Mongoose)
- **Google Generative AI** - AI-powered summaries
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## API Endpoints

### POST /help-request

Submit a new help request

```json
{
  "studentId": "student123",
  "topic": "Algebra",
  "details": "Need help with quadratic equations"
}
```

### GET /help-request/:studentId

Get all help requests for a specific student

### POST /summarize

Generate an AI-powered progress summary

```json
{
  "studentId": "student123"
}
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```
   GEMINI_API_KEY=your_gemini_api_key
   MONGODB_URI=your_mongodb_connection_string
   PORT=4000
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Environment Variables

- `GEMINI_API_KEY` - Google Gemini API key for AI features
- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 4000)

## License

MIT
