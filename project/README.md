# Ethiopian Heritage Bot 🇪🇹

An AI-powered cultural chatbot that helps tourists discover Ethiopia's rich heritage, attractions, and traditions.

## Features

- **Comprehensive Cultural Knowledge**: Detailed information about Ethiopian culture, attractions, and customs
- **Tourist-Focused**: Designed specifically for visitors to Ethiopia
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Zero-Config Deployment**: Ready to deploy on Netlify with no setup required
- **Offline-Ready**: Works without external API dependencies
- **Interactive UI**: Beautiful, modern interface with quick action buttons
- **Markdown Link Support**: Clickable links in bot responses

## Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/ethiopian-heritage-bot)

## What the Bot Can Help With

- **Tourist Attractions**: Lalibela rock churches, Axum obelisks, Simien Mountains, Danakil Depression
- **Cultural Events**: Timket (Ethiopian Epiphany), Meskel, traditional festivals
- **Food & Cuisine**: Injera, coffee ceremony, Doro Wat, traditional dishes
- **Travel Information**: Hotels, transportation, weather, safety tips
- **Cultural Insights**: Traditions, customs, languages, and local etiquette
- **Languages**: Amharic phrases and communication tips
- **Currency**: Ethiopian Birr and money matters

## Local Development

```bash
# Install dependencies
npm install

# Start development server (Vite only)
npm run dev

# Start with Netlify Functions (for full functionality)
npm run netlify

# Build for production
npm run build

# Preview production build
npm run preview
```

**Note**: 
- Use `npm run dev` for frontend development only
- Use `npm run netlify` to test with Netlify Functions locally
- The chat functionality requires Netlify Functions to work properly

## Technology Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Netlify Functions (Serverless)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## Project Structure

```
├── src/
│   ├── App.tsx          # Main React component with chat interface
│   ├── main.tsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── netlify/
│   └── functions/
│       └── chat.js      # Serverless function for chat API
├── netlify.toml         # Netlify configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Key Features

### Chat Interface
- Real-time messaging with typing indicators
- Message timestamps
- Responsive design for mobile and desktop
- Character limit (500 characters)
- Enter key support for sending messages

### Cultural Knowledge Base
The bot includes comprehensive information about:
- Historical sites and attractions
- Traditional festivals and celebrations
- Ethiopian cuisine and coffee culture
- Travel tips and safety information
- Accommodation options
- Transportation methods
- Weather and climate information
- Languages and communication
- Currency and costs

### Quick Actions
Pre-defined buttons for common tourist questions:
- Tourist Attractions
- Coffee Culture
- Lalibela Churches
- Festivals
- Travel Tips

## Performance Optimizations

- Optimized bundle size with Vite
- Lazy loading of components
- Efficient state management
- Smooth scrolling animations
- Responsive images and icons

## Security Features

- Content Security Policy headers
- XSS protection
- Frame options security
- Input validation and sanitization
- Rate limiting considerations

## Contributing

Feel free to contribute by:
- Adding more cultural information to the knowledge base
- Improving the UI/UX design
- Enhancing the chat responses
- Adding new features
- Fixing bugs or performance issues

## Deployment

The project is configured for easy deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

The Netlify configuration handles:
- Automatic builds
- Function deployment
- Redirects for API routes
- Security headers
- Caching optimization

## License

MIT License - feel free to use this project for your own purposes.

---

**Made with ❤️ for Ethiopian tourism and cultural preservation**