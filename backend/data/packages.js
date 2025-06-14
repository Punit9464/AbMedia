const packages = [
    {
        "topic": "Golden Temple Tour",
        "description": "Experience the spiritual tranquility of the Golden Temple, the holiest shrine of Sikhism, and immerse yourself in the rich history of Amritsar.",
        "imageUrl": "https://images.unsplash.com/photo-1579547633215-b541ae152b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHb2xdenxlbnwwfHx8fDE3MTc4NTMyOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "price": 12500,
        "itinerary": [
            "Day 1: Arrival in Amritsar, check-in, Golden Temple evening visit.",
            "Day 2: Jallianwala Bagh, Wagah Border Ceremony, local markets.",
            "Day 3: Departure from Amritsar."
        ],
        "duration": "3 Days / 2 Nights",
        "popular": true
    },
    {
        "topic": "Amazing Kerala Tour",
        "description": "Discover the serene backwaters, lush tea plantations, and pristine beaches of 'God's Own Country' with this unforgettable Kerala tour.",
        "imageUrl": "https://images.unsplash.com/photo-1616223293677-df3594b15093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrdyUyMHdhdGVycyUyMGJvYXQlMjBob3VzZXxlbnwwfHx8fDE3MTc4NTMyNTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "price": 22000,
        "itinerary": [
            "Day 1: Arrive in Cochin, transfer to Munnar.",
            "Day 2: Munnar sightseeing (tea gardens, waterfalls).",
            "Day 3: Transfer to Alleppey, houseboat backwater cruise.",
            "Day 4: Alleppey to Cochin, departure."
        ],
        "duration": "4 Days / 3 Nights",
        "popular": true
    },
    {
        "topic": "Kashmir Holiday Tour",
        "description": "Experience the unparalleled beauty of Kashmir, often called 'Paradise on Earth', with its snow-capped mountains, serene lakes, and vibrant culture.",
        "imageUrl": "https://images.unsplash.com/photo-1615632168516-724d9c490e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiaXJjaCUyMHdpbnRlcnxlbnwwfHx8fDE3MTc4NTMyNzZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "price": 28500,
        "itinerary": [
            "Day 1: Arrive in Srinagar, Dal Lake Shikara ride.",
            "Day 2: Gulmarg excursion (Gondola ride).",
            "Day 3: Pahalgam sightseeing (Betaab Valley).",
            "Day 4: Departure from Srinagar."
        ],
        "duration": "4 Days / 3 Nights",
        "popular": true
    },
    {
        "topic": "Rajasthan Desert Safari",
        "description": "Embark on an adventurous journey through the golden sands of Rajasthan, exploring majestic forts, vibrant cities, and enjoying thrilling desert safaris.",
        "imageUrl": "https://images.unsplash.com/photo-1614051016801-6c7104b28532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXZhJTIwbWFoYWwlMjBqYWlwZXIxfGVufDB8fHx8MTcxNzg1MzEzMnww&ixlib=rb-4.0.3&q=80&w=1080",
        "price": 18000,
        "itinerary": [
            "Day 1: Arrival in Jaipur, City Palace, Hawa Mahal.",
            "Day 2: Amer Fort, Jantar Mantar.",
            "Day 3: Transfer to Jodhpur, Mehrangarh Fort.",
            "Day 4: Departure from Jodhpur."
        ],
        "duration": "4 Days / 3 Nights",
        "popular": true
    },
    {
        "topic": "Goa Beach Retreat",
        "description": "Unwind on the pristine beaches of Goa, soak up the sun, enjoy vibrant nightlife, and indulge in delicious seafood.",
        "imageUrl": "https://images.unsplash.com/photo-1547844002-39edbf7e6f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnbyUyMGJlYWNoJTIwZHJvbmVzJTIwYmlnJTIwaG90ZWx8ZW58MHx8fHwxNzE3ODU1NDEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "price": 10500,
        "itinerary": [
            "Day 1: Arrive in Goa, leisure on North Goa beach.",
            "Day 2: South Goa tour, spice plantations.",
            "Day 3: Water sports or explore local markets.",
            "Day 4: Departure from Goa."
        ],
        "duration": "4 Days / 3 Nights",
        "popular": true
    },
    {
        "topic": "Nainital Lake Escape",
        "description": "Escape to the tranquil hills of Nainital, famous for its picturesque lake, charming boat rides, and panoramic mountain views.",
        "imageUrl": "https://images.unsplash.com/photo-1582236592209-64d8583d735f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYWluaXRhbCUyMGxha2V8ZW58MHx8fHwxNzE3ODU1NDk5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        "price": 9800, // Slightly below 10000, adjust if you want it strictly above min: 1000
        "itinerary": [
            "Day 1: Arrive in Nainital, check-in, Naini Lake boat ride.",
            "Day 2: Tiffin Top, Snow View Point, local zoo.",
            "Day 3: Bhimtal & Naukuchiatal excursion.",
            "Day 4: Departure from Nainital."
        ],
        "duration": "4 Days / 3 Nights",
        "popular": true
    },
    {
        "topic": "Shimla & Manali Duo",
        "description": "A classic North Indian hills combo: colonial charm of Shimla and adventurous beauty of Manali. Perfect for nature lovers and thrill-seekers.",
        "imageUrl": "https://images.unsplash.com/photo-1629853925501-a1e45758066f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaW1hY2hhbCUyMHByYWRlc2glMjBoaWxsc3xlbnwwfHx8fDE3MTgyNTk3NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "price": 25000,
        "itinerary": [
            "Day 1: Arrive Chandigarh, transfer to Shimla.",
            "Day 2: Shimla sightseeing (Mall Road, Ridge).",
            "Day 3: Transfer to Manali.",
            "Day 4: Manali local tour (Hadimba Temple, Vashisht).",
            "Day 5: Rohtang Pass / Solang Valley excursion.",
            "Day 6: Departure from Manali."
        ],
        "duration": "6 Days / 5 Nights",
        "popular": true
    },
    {
        "topic": "Spiritual Varanasi Tour",
        "description": "Witness the ancient spiritual rituals along the Ganges, explore historic temples, and experience the timeless aura of Varanasi, the holiest city of India.",
        "imageUrl": "https://images.unsplash.com/photo-1594957640243-7f2a74c20f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMGdhbmdlcyUyMGdoYXRzfGVufDB8fHx8MTcxODI1OTg3NHww&ixlib=rb-4.0.3&q=80&w=1080",
        "price": 14000,
        "itinerary": [
            "Day 1: Arrive Varanasi, Ganges Aarti ceremony.",
            "Day 2: Morning boat ride, Sarnath excursion.",
            "Day 3: Temple visits, local cuisine.",
            "Day 4: Departure."
        ],
        "duration": "4 Days / 3 Nights",
        "popular": true
    },
    {
        "topic": "Andaman Islands Escape",
        "description": "Relax on white sandy beaches, explore coral reefs, and enjoy water sports in the pristine Andaman Islands, a true tropical paradise.",
        "imageUrl": "https://images.unsplash.com/photo-1563911075-ec753b84f331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbmRhbWFuJTIwaXNsYW5kcyUyMGJlYWNofGVufDB8fHx8MTcxODI2MDAwNnww&ixlib=rb-4.0.3&q=80&w=1080",
        "price": 35000,
        "itinerary": [
            "Day 1: Arrive Port Blair, Corbyn's Cove, Cellular Jail.",
            "Day 2: Ross Island & North Bay Island.",
            "Day 3: Havelock Island, Radhanagar Beach.",
            "Day 4: Elephant Beach (snorkeling).",
            "Day 5: Departure from Port Blair."
        ],
        "duration": "5 Days / 4 Nights",
        "popular": true
    },
    {
        "topic": "Darjeeling & Sikkim Charm",
        "description": "Experience the majestic Himalayas, lush tea gardens, and vibrant Buddhist culture in the enchanting states of Darjeeling and Sikkim.",
        "imageUrl": "https://images.unsplash.com/photo-1620612458428-27b2d56a312d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXJqZWVsaW5nJTIwdGVhJTIwcGxhbnRhdGlvbnxlbnwwfHx8fDE3MTgyNjAwOTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "price": 23000,
        "itinerary": [
            "Day 1: Arrive Bagdogra, transfer to Darjeeling.",
            "Day 2: Tiger Hill sunrise, Ghoom Monastery, Tea Garden.",
            "Day 3: Transfer to Gangtok (Sikkim).",
            "Day 4: Tsomgo Lake & Baba Mandir.",
            "Day 5: Gangtok local sightseeing (Rumtek Monastery).",
            "Day 6: Departure."
        ],
        "duration": "6 Days / 5 Nights",
        "popular": false // Example of a non-popular one
    }
];

export default packages;