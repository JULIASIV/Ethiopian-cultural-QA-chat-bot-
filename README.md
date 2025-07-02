# Ethiopian Heritage Bot 🇪🇹

An AI-powered cultural chatbot that helps tourists discover Ethiopia's rich heritage, attractions, and traditions.

## Features

- **AI-Powered Responses**: Uses Google Gemini AI for intelligent, contextual answers
- **Cultural Knowledge Base**: Comprehensive information about Ethiopian culture, attractions, and customs
- **Tourist-Focused**: Designed specifically for visitors to Ethiopia
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Easy Deployment**: Ready to deploy on Netlify with zero configuration

## Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/ethiopian-heritage-bot)

## Setup Instructions

### 1. Get Google Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the API key

### 2. Deploy to Netlify
1. Fork this repository
2. Connect your GitHub account to Netlify
3. Create a new site from your forked repository
4. Add environment variable:
   - Key: `GOOGLE_API_KEY`
   - Value: Your Google Gemini API key

### 3. That's it! 🎉
Your Ethiopian Heritage Bot is now live and ready to help tourists!

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env` file in the root directory:

```
GOOGLE_API_KEY=your_google_gemini_api_key_here
```

## What the Bot Can Help With

- **Tourist Attractions**: Lalibela, Axum, Simien Mountains, Danakil Depression
- **Cultural Events**: Timket, Meskel, traditional festivals
- **Food & Cuisine**: Injera, coffee ceremony, traditional dishes
- **Travel Information**: Hotels, transportation, weather, safety tips
- **Cultural Insights**: Traditions, customs, languages, and more

## Technology Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **AI**: Google Gemini Pro
- **Deployment**: Netlify Functions (Serverless)
- **Icons**: Lucide React

## Contributing

Feel free to contribute by adding more cultural information, improving the UI, or enhancing the AI responses!

## License

MIT License - feel free to use this project for your own purposes.