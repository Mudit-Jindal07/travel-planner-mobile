// sampleTrips.js — Hardcoded trip data (no backend needed)

const sampleTrips = [
  {
    id: '1',
    name: 'Paris Adventure',
    destination: 'Paris',
    days: 5,
    budget: 75000,
    interests: ['History', 'Food', 'Art'],
    itinerary: [
      {
        day: 1,
        title: 'Day 1 — Arrival & Eiffel Tower',
        activities: ['Check in to hotel', 'Visit the Eiffel Tower', 'Dinner at a local bistro'],
      },
      {
        day: 2,
        title: 'Day 2 — Museums',
        activities: ['Explore the Louvre Museum', 'Walk along the Seine River', 'Try croissants at a bakery'],
      },
      {
        day: 3,
        title: 'Day 3 — Montmartre',
        activities: ['Visit Sacré-Cœur', 'Explore Montmartre streets', 'Lunch at a café'],
      },
      {
        day: 4,
        title: 'Day 4 — Versailles',
        activities: ['Day trip to Palace of Versailles', 'Walk the palace gardens', 'Evening Seine cruise'],
      },
      {
        day: 5,
        title: 'Day 5 — Shopping & Departure',
        activities: ['Shop on Champs-Élysées', 'Visit Notre-Dame area', 'Head to airport'],
      },
    ],
    budgetBreakdown: {
      Accommodation: 26250,
      Food: 18750,
      Transport: 11250,
      Activities: 11250,
      Shopping: 7500,
    },
    packingList: [
      { item: 'Passport', packed: false },
      { item: 'Comfortable walking shoes', packed: false },
      { item: 'Power adapter (Type C/E)', packed: false },
      { item: 'Light jacket', packed: false },
      { item: 'Umbrella', packed: false },
      { item: 'Camera', packed: false },
      { item: 'Sunglasses', packed: false },
      { item: 'Reusable water bottle', packed: false },
      { item: 'Travel guidebook', packed: false },
      { item: 'Day backpack', packed: false },
    ],
  },
  {
    id: '2',
    name: 'Tokyo Exploration',
    destination: 'Tokyo',
    days: 4,
    budget: 60000,
    interests: ['Culture', 'Food', 'Technology'],
    itinerary: [
      {
        day: 1,
        title: 'Day 1 — Temples & Tradition',
        activities: ['Visit Senso-ji Temple', 'Explore Asakusa', 'Try ramen for dinner'],
      },
      {
        day: 2,
        title: 'Day 2 — Modern Tokyo',
        activities: ['See Shibuya Crossing', 'Explore Harajuku', 'Visit Akihabara'],
      },
      {
        day: 3,
        title: 'Day 3 — Nature & Shrines',
        activities: ['Walk through Meiji Shrine', 'Visit Ueno Park', 'Tsukiji Outer Market'],
      },
      {
        day: 4,
        title: 'Day 4 — Views & Departure',
        activities: ['Visit Tokyo Tower', 'Last-minute shopping', 'Head to airport'],
      },
    ],
    budgetBreakdown: {
      Accommodation: 18000,
      Food: 15000,
      Transport: 12000,
      Activities: 9000,
      Shopping: 6000,
    },
    packingList: [
      { item: 'Passport', packed: false },
      { item: 'Comfortable walking shoes', packed: false },
      { item: 'Power adapter (Type A/B)', packed: false },
      { item: 'Light rain jacket', packed: false },
      { item: 'Camera', packed: false },
      { item: 'Pocket Wi-Fi reservation', packed: false },
      { item: 'Reusable chopsticks', packed: false },
      { item: 'Small towel', packed: false },
    ],
  },
  {
    id: '3',
    name: 'Goa Getaway',
    destination: 'Goa',
    days: 3,
    budget: 25000,
    interests: ['Beaches', 'Food', 'Nature'],
    itinerary: [
      {
        day: 1,
        title: 'Day 1 — Beach Day',
        activities: ['Relax at Baga Beach', 'Try Goan fish curry', 'Sunset walk'],
      },
      {
        day: 2,
        title: 'Day 2 — Explore & History',
        activities: ['Visit Fort Aguada', 'Explore Old Goa churches', 'Anjuna Flea Market'],
      },
      {
        day: 3,
        title: 'Day 3 — Adventure & Departure',
        activities: ['Dolphin watching trip', 'Visit Palolem Beach', 'Head home'],
      },
    ],
    budgetBreakdown: {
      Accommodation: 7500,
      Food: 5000,
      Transport: 3750,
      Activities: 5000,
      Shopping: 3750,
    },
    packingList: [
      { item: 'Sunscreen', packed: false },
      { item: 'Swimsuit', packed: false },
      { item: 'Flip flops', packed: false },
      { item: 'Light cotton clothes', packed: false },
      { item: 'Sunglasses', packed: false },
      { item: 'Hat', packed: false },
      { item: 'Insect repellent', packed: false },
      { item: 'Camera', packed: false },
    ],
  },
];

export default sampleTrips;
