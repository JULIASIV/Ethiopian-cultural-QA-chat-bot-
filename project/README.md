# Ethiopian Heritage Bot 🇪🇹

An AI-powered cultural chatbot that helps tourists discover Ethiopia's rich heritage, attractions, and traditions.

## Features

- **Comprehensive Cultural Knowledge**: Detailed information about Ethiopian culture, attractions, and customs
- **Tourist-Focused**: Designed specifically for visitors to Ethiopia
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Zero-Config Deployment**: Ready to deploy on Netlify with no setup required
- **Offline-Ready**: Works without external API dependencies

## Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/ethiopian-heritage-bot)

## What the Bot Can Help With

- **Tourist Attractions**: Lalibela rock churches, Axum obelisks, Simien Mountains, Danakil Depression
- **Cultural Events**: Timket (Ethiopian Epiphany), Meskel, traditional festivals
- **Food & Cuisine**: Injera, coffee ceremony, Doro Wat, traditional dishes
- **Travel Information**: Hotels, transportation, weather, safety tips
- **Cultural Insights**: Traditions, customs, languages, and local etiquette

## Local Development

```bash
# Install dependencies
npm install

# Start development server (includes Netlify Functions)
npm run dev

# Build for production
npm run build
```

**Note**: The `npm run dev` command uses `netlify dev` which automatically starts both the Vite development server and the Netlify Functions locally.

## Technology Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Netlify Functions (Serverless)
- **Icons**: Lucide React
- **Deployment**: Netlify

## Project Structure

```
├── src/
│   ├── App.tsx          # Main React component
│   ├── main.tsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── netlify/
│   └── functions/
│       └── chat.js      # Serverless function for chat API
├── netlify.toml         # Netlify configuration
└── package.json         # Dependencies and scripts
```

## Contributing

Feel free to contribute by:
- Adding more cultural information to the knowledge base
- Improving the UI/UX design
- Enhancing the chat responses
- Adding new features

## License

MIT License - feel free to use this project for your own purposes.

---

**Made with ❤️ for Ethiopian tourism and cultural preservation**