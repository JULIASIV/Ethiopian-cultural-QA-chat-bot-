// Cultural data function
function getCulturalInfo(query) {
  const lowerQuery = query.toLowerCase();
  
  // Tourist Attractions & Historical Sites
  if (lowerQuery.includes('lalibela')) {
    return `Lalibela is a UNESCO World Heritage site in Ethiopia famous for its eleven medieval monolithic cave churches carved out of a single rock in the 12th century. These churches were built as a 'New Jerusalem' and are still active places of Christian worship and pilgrimage. The craftsmanship is incredible, and some churches are connected by a network of underground tunnels and passages. Best visited during Timket (Ethiopian Epiphany) for the most spectacular experience.`;
  }
  
  if (lowerQuery.includes('axum') || lowerQuery.includes('aksum')) {
    return `Axum (Aksum) is one of Ethiopia's most important historical sites and former capital of the ancient Axumite Empire. It's famous for its towering obelisks (stelae), some reaching over 20 meters high, and is believed to house the original Ark of the Covenant in the Church of Our Lady Mary of Zion. The city is a UNESCO World Heritage site and offers incredible insights into Ethiopia's ancient civilization.`;
  }
  
  if (lowerQuery.includes('simien') || lowerQuery.includes('national park')) {
    return `The Simien Mountains National Park is a UNESCO World Heritage site known for its dramatic landscapes, deep valleys, and unique wildlife. You can see the endemic Gelada baboons, Ethiopian wolves, and Walia ibex. The park offers excellent trekking opportunities with breathtaking views. Other notable parks include Bale Mountains National Park and Omo National Park, each offering unique ecosystems and wildlife experiences.`;
  }
  
  if (lowerQuery.includes('danakil') || lowerQuery.includes('depression')) {
    return `The Danakil Depression is one of the most extraordinary places on Earth - a geological wonder featuring active volcanoes, salt flats, sulfur springs, and colorful mineral deposits. It's one of the lowest and hottest places on the planet. The Erta Ale volcano and Dallol hydrothermal field create an otherworldly landscape that attracts adventurous travelers from around the globe.`;
  }

  // Festivals & Cultural Events
  if (lowerQuery.includes('timket') || lowerQuery.includes('timkat') || lowerQuery.includes('epiphany')) {
    return `Timket (Ethiopian Epiphany) is one of the greatest and most colorful festivals in the Ethiopian Orthodox Tewahedo Church, celebrated on January 19th every year. The festival commemorates the baptism of Jesus Christ in the Jordan River. Celebrations involve vibrant processions where replicas of the Ark of the Covenant (Tabots) are paraded to bodies of water. People dress in traditional white clothing, and there are prayers, feasts, and joyful singing. It's a deeply spiritual and visually stunning event!`;
  }
  
  if (lowerQuery.includes('meskel') || lowerQuery.includes('festival')) {
    return `Meskel is a major Ethiopian Orthodox festival celebrating the finding of the True Cross. Celebrated in September, it features the lighting of a large bonfire called 'Demera' in Meskel Square in Addis Ababa. The festival includes traditional dancing, singing, and colorful processions. Other important festivals include Genna (Ethiopian Christmas), Fasika (Easter), and various regional cultural festivals throughout the year.`;
  }

  // Food & Cuisine
  if (lowerQuery.includes('injera') || lowerQuery.includes('food') || lowerQuery.includes('cuisine')) {
    return `Injera is Ethiopia's national dish - a unique, spongy, and slightly sour flatbread made from teff flour, a tiny iron-rich grain native to the Ethiopian highlands. Injera serves as both plate and utensil, with various stews (wats) served on top. Popular dishes include Doro Wat (spicy chicken stew), Kitfo (Ethiopian steak tartare), and various vegetarian options perfect for fasting periods. Ethiopian cuisine is known for its complex spice blends, especially berbere.`;
  }
  
  if (lowerQuery.includes('coffee') || lowerQuery.includes('bunna') || lowerQuery.includes('ceremony')) {
    return `Coffee (bunna in Amharic) is central to Ethiopian culture - Ethiopia is the birthplace of coffee! The traditional coffee ceremony is a vital social ritual involving roasting green coffee beans, grinding them, and brewing in a special clay pot called a 'jebena'. Coffee is served in three rounds: Abol, Tona, and Baraka, each with progressively weaker strength and spiritual significance. It's a major social event for building community and showing respect to guests.`;
  }

  // Accommodation & Hotels
  if (lowerQuery.includes('hotel') || lowerQuery.includes('accommodation') || lowerQuery.includes('stay') || lowerQuery.includes('lodge')) {
    return `Ethiopia offers diverse accommodation options for tourists: luxury hotels like the Sheraton Addis and Radisson Blu in Addis Ababa, eco-lodges in the Simien Mountains, traditional tukuls (round huts) for authentic experiences, and community-based tourism lodges. Popular areas include Addis Ababa for business hotels, Lalibela for heritage lodges, Bahir Dar near Lake Tana, and Gondar for historical exploration. Book in advance during festival seasons!`;
  }

  // Weather & Climate
  if (lowerQuery.includes('weather') || lowerQuery.includes('climate') || lowerQuery.includes('season') || lowerQuery.includes('rain')) {
    return `Ethiopia has a diverse climate due to its varied topography. The dry season (October to May) is ideal for tourism with clear skies and comfortable temperatures. The rainy season (June to September) brings lush landscapes but can make some roads difficult. Highland areas like Addis Ababa enjoy mild temperatures year-round (15-25°C), while lowland areas like the Danakil Depression are extremely hot. Pack layers as temperatures vary greatly with altitude!`;
  }

  // Transportation
  if (lowerQuery.includes('transport') || lowerQuery.includes('travel') || lowerQuery.includes('flight') || lowerQuery.includes('bus')) {
    return `Ethiopian Airlines is the national carrier with excellent connections to Addis Ababa's Bole International Airport. Domestic flights connect major tourist destinations. For ground transport, buses are affordable but can be crowded - luxury buses serve major routes. Car rental with driver is recommended for flexibility. Bajaj (three-wheelers) and taxis are common in cities. For remote areas like Danakil, organized tours with 4WD vehicles are essential.`;
  }

  // Safety & Travel Tips
  if (lowerQuery.includes('safe') || lowerQuery.includes('safety') || lowerQuery.includes('tip') || lowerQuery.includes('advice')) {
    return `Ethiopia is generally safe for tourists, especially in main tourist areas. Basic precautions include avoiding isolated areas at night, keeping valuables secure, and staying hydrated at high altitudes. Respect local customs - dress modestly when visiting religious sites. The Ethiopian calendar has 13 months, so dates may differ. Tipping is appreciated but not mandatory. Always carry cash as card acceptance is limited outside major cities.`;
  }

  // Languages
  if (lowerQuery.includes('language') || lowerQuery.includes('amharic') || lowerQuery.includes('speak')) {
    return `Ethiopia has over 80 languages! Amharic is the federal working language, written in the unique Ge'ez script. English is widely spoken in tourist areas and by educated populations. Other major languages include Oromo, Tigrinya, and Somali. Learning basic Amharic phrases like "Selam" (hello), "Ameseginalehu" (thank you), and "Dehna neh?" (how are you?) will be greatly appreciated by locals!`;
  }

  // Currency & Money
  if (lowerQuery.includes('money') || lowerQuery.includes('currency') || lowerQuery.includes('birr') || lowerQuery.includes('cost')) {
    return `The Ethiopian Birr (ETB) is the official currency. US dollars and euros can be exchanged at banks and authorized dealers. Credit cards are accepted in major hotels and restaurants in Addis Ababa, but cash is king elsewhere. ATMs are available in cities but may not always work with foreign cards. Budget travelers can expect to spend $20-40/day, while mid-range travelers might spend $50-100/day including accommodation.`;
  }

  return "No specific information found for that topic. The AI will answer based on its general knowledge.";
}

// Generate response without external AI dependency
function generateResponse(context, question) {
  if (context.includes("No specific information found")) {
    return `Welcome to Ethiopia! 🇪🇹 While I don't have specific details about "${question}" in my current knowledge base, I'd be happy to share what I know about Ethiopian culture and tourism.

Ethiopia is a land of ancient history, diverse cultures, and breathtaking landscapes. We have incredible historical sites like Lalibela's rock-hewn churches and the ancient obelisks of Axum, stunning national parks like the Simien Mountains with their unique wildlife, geological wonders like the Danakil Depression, and rich cultural traditions including our world-famous coffee ceremony.

Some popular topics I can help you with:
• **Historical Sites**: Lalibela, Axum, Gondar castles
• **Natural Wonders**: Simien Mountains, Danakil Depression, Rift Valley lakes
• **Cultural Experiences**: Coffee ceremony, traditional festivals like Timket and Meskel
• **Cuisine**: Injera, Doro Wat, and our unique spice blends
• **Travel Tips**: Best times to visit, transportation, accommodation options
• **Languages**: Amharic phrases and communication tips
• **Currency**: Ethiopian Birr and money matters

What specific aspect of Ethiopian culture or tourism would you like to explore?`;
  }

  return `${context}

I hope this helps you discover the beauty of Ethiopia! Feel free to ask me about anything else - from our delicious cuisine to our stunning national parks, vibrant festivals, or historical sites. I'm here to make your Ethiopian journey unforgettable! 🇪🇹

**Quick Tips for Your Visit:**
• Best time to visit: October to May (dry season)
• Don't miss: Coffee ceremony experience
• Must-see: Lalibela churches, especially during Timket festival
• Try: Injera with Doro Wat and traditional honey wine (tej)
• Learn: Basic Amharic greetings - locals love it!`;
}

export const handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { message } = JSON.parse(event.body || '{}');
    
    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Valid message is required' }),
      };
    }

    // Validate message length
    if (message.length > 500) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message too long. Please keep it under 500 characters.' }),
      };
    }

    // Get cultural information from our knowledge base
    const culturalInfo = getCulturalInfo(message.trim());
    
    // Generate response using our built-in knowledge
    const response = generateResponse(culturalInfo, message.trim());
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response }),
    };
  } catch (error) {
    console.error('Error processing chat:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'I apologize, but I\'m having trouble processing your request right now. Please try again in a moment. In the meantime, feel free to ask me about Ethiopian culture, tourist attractions, food, or travel tips!' 
      }),
    };
  }
};