
const hotels = [
    {
      id: 1,
      name: "Hulcity Alex Park Motel",
      location: "Kampala",
      description: "A luxurious hotel located on the shores of Lake Victoria, offering breathtaking views and world-class amenities.",
      shortDescription: "Luxury on Lake Victoria's shores",
      price: "From $150 per night",
      rating: 4.8,
      images: [
        "/alexpark/bedAlex.jpg",
        "/alexpark/frontAlex.jpg",
        "/alexpark/sideAlex.jpg"
      ],
      amenities: ["Swimming Pool", "Spa", "Restaurant", "Free Wi-Fi", "Fitness Center", "Conference Rooms"],
      rooms: [
        { type: "Standard", price: 150, capacity: 2 },
        { type: "Deluxe", price: 220, capacity: 2 },
        { type: "Suite", price: 350, capacity: 4 }
      ]
    },
    {
      id: 2,
      name: "Hulcity Haks Motel",
      location: "Entebbe",
      description: "Conveniently located near Entebbe International Airport, this modern hotel offers comfort and convenience for travelers.",
      shortDescription: "Convenient comfort near the airport",
      price: "From $120 per night",
      rating: 4.5,
      images: [
        "/haks/receptionHaks.jpg",
        "/haks/bedHaks.jpg",
         "/haks/gateHaks.jpg"
      ],
      amenities: ["Airport Shuttle", "Restaurant", "Free Wi-Fi", "Business Center", "24-hour Front Desk"],
      rooms: [
        { type: "Standard", price: 120, capacity: 2 },
        { type: "Executive", price: 180, capacity: 2 },
        { type: "Family Room", price: 240, capacity: 4 }
      ]
    },
    {
      id: 3,
      name: "Hulcity Gold Hotel",
      location: "Jinja",
      description: "Nestled at the source of the Nile, this lodge offers adventure activities and serene natural surroundings.",
      shortDescription: "Adventure at the source of the Nile",
      price: "From $100 per night",
      rating: 4.6,
      images: [
        "/gold/dayGold.jpeg",
        "/gold/barGold.jpg",
        "/gold/bedGold.jpg",
      ],
      amenities: ["River Rafting", "Kayaking", "Restaurant", "Free Wi-Fi", "Tour Desk", "Garden"],
      rooms: [
        { type: "Standard", price: 100, capacity: 2 },
        { type: "Riverside", price: 160, capacity: 2 },
        { type: "Family Cabin", price: 220, capacity: 5 }
      ]
    },
    {
      id: 4,
      name: "Hulcity Silver Hotel",
      location: "Nansana",
      description: "A gateway to Uganda's wildlife parks, this safari-themed hotel offers authentic experiences and comfortable accommodations.",
      shortDescription: "Gateway to wildlife adventures",
      price: "From $130 per night",
      rating: 4.4,
      images: [
        "/silver/silver1.jpg",
        "/silver/entrySilver.jpg",
        "/silver/bedSilver.jpg"
      ],
      amenities: ["Safari Tours", "Restaurant", "Free Wi-Fi", "Swimming Pool", "Outdoor Seating", "Bar"],
      rooms: [
        { type: "Standard", price: 130, capacity: 2 },
        { type: "Safari Suite", price: 200, capacity: 2 },
        { type: "Family Suite", price: 280, capacity: 4 }
      ]
    },
    {
      id: 5,
      name: "Hulcity Valley Motel",
      location: "Fort Portal",
      description: "Set against the backdrop of the Rwenzori Mountains, this resort offers tranquility and stunning natural beauty.",
      shortDescription: "Tranquility in the Rwenzori foothills",
      price: "From $140 per night",
      rating: 4.7,
      images: [
        "/valley/receptionValley.jpg",
       "/valley/bedionValley.jpg",
        "/valley/sideValley.jpg",
      ],
      amenities: ["Mountain Views", "Hiking Trails", "Restaurant", "Free Wi-Fi", "Spa", "Garden"],
      rooms: [
        { type: "Mountain View", price: 140, capacity: 2 },
        { type: "Premium", price: 210, capacity: 2 },
        { type: "Chalet", price: 320, capacity: 4 }
      ]
    }
  ];

  export default hotels;
