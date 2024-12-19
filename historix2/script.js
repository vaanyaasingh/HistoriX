// Declare map globally so it can be accessed from other functions
let map;

document.addEventListener('DOMContentLoaded', function() {
    // Historical Eras Data
    const historicalEras = {
        '-2500': { title: 'Indus Valley Civilization', description: 'Advanced urban civilization with sophisticated city planning, drainage systems, and early writing systems in Mohenjo-daro and Harappa.' },
        '-1000': { title: 'Vedic Period', description: 'Emergence of Vedic culture, composition of Vedas, and development of early Hindu philosophical traditions.' },
        '0': { title: 'Satavahana Dynasty', description: 'Powerful dynasty controlling trade routes, promoting Buddhism and Sanskrit literature.' },
        '320': { title: 'Gupta Golden Age', description: 'Classical period of remarkable achievements in art, science, mathematics, and literature.' },
        '1500': { title: 'Mughal Imperial Zenith', description: 'Peak of Mughal power, architectural wonders like the Taj Mahal, and cultural synthesis of Persian and Indian traditions.' },
        '1947': { title: 'Indian Independence', description: 'End of British colonial rule, partition of India and Pakistan, and emergence of modern nation-states.' },
        '2024': { title: 'Contemporary India', description: 'Emerging global power, technological innovation, complex social transformations, and cultural diversity.' }
    };

    // Map Initialization
    function initializeMap() {
        map = L.map('map-container').setView([20.5937, 78.9629], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Call the marker initialization
        initializeHistoricalMarkers();
    }

    // Historical Sites Data
    const historicalSites = [
        {
            name: "Harappa",
            coordinates: [29.3697, 70.9510],
            era: "Indus Valley Civilization",
            period: "2600-1900 BCE",
            description: "One of the largest and most sophisticated urban settlements of the ancient Indus Valley Civilization.",
            significance: "Demonstrates advanced urban planning, drainage systems, and social organization.",
            artifacts: ["Sophisticated brick structures", "Complex water management", "Standardized weights and measures"]
        },
        {
            name: "Nalanda University",
            coordinates: [25.1338, 85.4421],
            era: "Medieval India",
            period: "5th-12th Century CE",
            description: "One of the world's oldest international universities, a major Buddhist center of learning.",
            significance: "Attracted scholars from across Asia, advanced learning in philosophy, mathematics, and astronomy.",
            artifacts: ["Ancient library ruins", "Buddhist monastery remains", "Intricate stone carvings"]
        },
        {
            name: "Hampi",
            coordinates: [15.3350, 76.4600],
            era: "Vijayanagar Empire",
            period: "14th-16th Century CE",
            description: "Magnificent capital of the Vijayanagar Empire, showcasing architectural splendor.",
            significance: "Represents the pinnacle of South Indian temple architecture and imperial grandeur.",
            artifacts: ["Vittala Temple", "Stone chariot", "Royal enclosures", "Bazaar streets"]
        },
        {
            name: "Taj Mahal",
            coordinates: [27.1751, 78.0421],
            era: "Mughal Period",
            period: "1632-1653 CE",
            description: "Iconic marble mausoleum built by Shah Jahan for his beloved wife Mumtaz Mahal.",
            significance: "UNESCO World Heritage site, symbol of Mughal architectural and artistic excellence.",
            artifacts: ["Intricate marble inlay work", "Symmetrical gardens", "Calligraphic inscriptions"]
        },
        {
            name: "Ajanta Caves",
            coordinates: [20.5469, 75.7042],
            era: "Classical India",
            period: "2nd Century BCE - 6th Century CE",
            description: "Buddhist rock-cut cave monuments with elaborate paintings and sculptures.",
            significance: "Remarkable example of ancient Indian art and Buddhist religious expression.",
            artifacts: ["Detailed wall paintings", "Buddha sculptures", "Narrative murals"]
        },
        {
            name: "Red Fort, Delhi",
            coordinates: [28.6562, 77.2410],
            era: "Mughal Empire",
            period: "17th Century CE",
            description: "Main residence of Mughal Emperors, symbol of India's imperial past.",
            significance: "Site of significant historical events, including India's independence proclamation.",
            artifacts: ["Diwan-i-Aam", "Diwan-i-Khas", "Intricate marble decorations"]
        },
        {
            name: "Khajuraho Temples",
            coordinates: [24.8318, 80.8654],
            era: "Chandela Dynasty",
            period: "950-1050 CE",
            description: "Group of Hindu and Jain temples known for intricate and sometimes explicit sculptural art.",
            significance: "Exceptional example of medieval Indian temple architecture and artistic expression.",
            artifacts: ["Intricate stone carvings", "Temples depicting human emotions", "Architectural complexity"]
        },
        {
            name: "Sanchi Stupa",
            coordinates: [23.4864, 77.7394],
            era: "Mauryan Empire",
            period: "3rd Century BCE",
            description: "Buddhist monument commissioned by Emperor Ashoka, representing early Buddhist architecture.",
            significance: "Preserved example of early Buddhist art and Emperor Ashoka's architectural patronage.",
            artifacts: ["Great Stupa", "Ornate gateways", "Buddhist narrative reliefs"]
        }
    ];
    function createDetailedMarker(site) {
        const marker = L.marker(site.coordinates)
            .addTo(map)
            .bindPopup(`
                <div>
                    <h3>${site.name}</h3>
                    <p><strong>Era:</strong> ${site.era}</p>
                    <p><strong>Period:</strong> ${site.period}</p>
                    <p>${site.description}</p>
                    <button onclick="showFullDetails('${site.name}')">Explore More</button>
                </div>
            `, {
                maxWidth: 300,
                className: 'custom-popup'
            });
        return marker;
    }

    function initializeHistoricalMarkers() {
        historicalSites.forEach(site => createDetailedMarker(site));
    }

    function showFullDetails(siteName) {
        const site = historicalSites.find(s => s.name === siteName);
        if (site) {
            alert(`More details about ${site.name}`);
        }
    }

    // Timeline Interaction
    const timelineSlider = document.getElementById('timeline-slider');
    const selectedYearDisplay = document.getElementById('selected-year');
    const eraTitle = document.getElementById('era-title');
    const eraDescription = document.getElementById('era-description');

    timelineSlider.addEventListener('input', function() {
        const selectedYear = parseInt(this.value);
        selectedYearDisplay.textContent = `Selected Year: ${selectedYear}`;

        const era = Object.entries(historicalEras)
            .reverse()
            .find(([year]) => selectedYear >= parseInt(year))[1];

        eraTitle.textContent = era.title;
        eraDescription.textContent = era.description;
    });

    // AI Chat Simulation
    const chatInput = document.getElementById('ai-chat-input');
    const sendButton = document.getElementById('send-chat');
    const chatMessages = document.getElementById('chat-messages');

    function addMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', type);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function simulateAIResponse(userMessage) {
        const responses = {
            'when': 'Historical events depend on the specific context. Can you be more specific?',
            'who': 'Many significant figures have shaped human history. Which era or region are you interested in?',
            'why': 'Understanding historical motivations requires deep contextual analysis.',
            'default': 'Fascinating question! Let me help you explore the historical context.'
        };

        const responseKey = Object.keys(responses).find(key => 
            userMessage.toLowerCase().includes(key)
        ) || 'default';

        return responses[responseKey];
    }

    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        addMessage(userMessage, 'user');
        chatInput.value = '';

        setTimeout(() => {
            const aiResponse = simulateAIResponse(userMessage);
            addMessage(aiResponse, 'ai');
        }, 500);
    }

    // Trigger initial timeline setup
    timelineSlider.dispatchEvent(new Event('input'));

    // Call the function to initialize the map
    initializeMap();
});