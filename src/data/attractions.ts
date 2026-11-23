export interface Attraction {
  id: string;
  name: string;
  category: string;
  distance: string;
  travelTime: string;
  description: string;
  highlight: string;
  image: string;
  alt: string;
}

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'dal-lake',
    name: 'Dal Lake',
    category: 'Natural Wonder',
    distance: '4.5 km',
    travelTime: '12 min drive',
    description: 'The iconic jewel of Srinagar. Experience tranquil Shikara rides, vibrant floating vegetable markets, and traditional wooden houseboats framed by snow-dusted mountains.',
    highlight: 'Sunset Shikara cruises & floating flower bazaars',
    image: '/images/destinations/dal-lake-shikara.jpg',
    alt: 'Traditional Shikara boats resting peacefully on the glassy waters of Dal Lake Srinagar',
  },
  {
    id: 'tulip-garden',
    name: 'Indira Gandhi Memorial Tulip Garden',
    category: 'Botanical Garden',
    distance: '6.0 km',
    travelTime: '15 min drive',
    description: 'Asia’s largest tulip garden, nestled in the foothills of the Zabarwan range. Spanning over 30 hectares with millions of blooming tulips in vivid spectral bands during spring.',
    highlight: 'Over 60 varieties of blooming tulips against mountain backdrops',
    image: '/images/destinations/tulip-garden-srinagar.jpg',
    alt: 'Expansive field of vibrant red and yellow tulips blooming in Srinagar',
  },
  {
    id: 'pari-mahal',
    name: 'Pari Mahal (The Fairies’ Abode)',
    category: 'Historical Monument',
    distance: '8.5 km',
    travelTime: '20 min drive',
    description: 'A seven-terraced Mughal garden and architectural marvel perched high above Dal Lake. Built by Prince Dara Shikoh in the mid-1600s, offering breathtaking panoramic vistas of Srinagar.',
    highlight: 'Panoramic cliffside sunset viewpoint overlooking the entire lake valley',
    image: '/images/destinations/pari-mahal-srinagar.jpg',
    alt: 'Terraced stone arches and gardens of Pari Mahal overlooking the Srinagar valley',
  },
  {
    id: 'nishat-garden',
    name: 'Nishat Garden (Garden of Bliss)',
    category: 'Mughal Heritage',
    distance: '5.2 km',
    travelTime: '14 min drive',
    description: 'The second largest Mughal garden in Kashmir valley, laid out in 1633 by Asif Khan. Features 12 magnificent stepped terraces, historic chinar trees, and cascading mountain water fountains.',
    highlight: 'Century-old grand chinar trees and cascading fountain channels',
    image: '/images/destinations/nishat-garden-srinagar.jpg',
    alt: 'Verdant green lawns and historic water channels of Nishat Garden',
  },
  {
    id: 'shalimar-garden',
    name: 'Shalimar Garden (Abode of Love)',
    category: 'Mughal Heritage',
    distance: '8.0 km',
    travelTime: '20 min drive',
    description: 'Built by Mughal Emperor Jahangir for his beloved Empress Nur Jahan in 1619. Renowned for its black marble pavilion, carved water chutes, and serene royal walkways.',
    highlight: 'The Black Marble Pavilion surrounded by natural mountain streams',
    image: '/images/destinations/shalimar-garden-srinagar.jpg',
    alt: 'Lush terraced fountains and historic trees at Shalimar Bagh Srinagar',
  },
  {
    id: 'botanical-garden',
    name: 'Jawaharlal Nehru Memorial Botanical Garden',
    category: 'Nature & Walking Trails',
    distance: '6.5 km',
    travelTime: '16 min drive',
    description: 'Spread over 80 hectares near the foothills of the Zabarwan Mountains, this tranquil botanical park features rare Himalayan flora, reflective ponds, and quiet shaded walking trails.',
    highlight: 'Peaceful lakeside walking circuits and curated rare Himalayan plants',
    image: '/images/destinations/botanical-garden-srinagar.jpg',
    alt: 'Tall evergreen pine trees and manicured gardens in Srinagar',
  },
  {
    id: 'hari-parbat',
    name: 'Hari Parbat Fort',
    category: 'Historic Citadel',
    distance: '11.0 km',
    travelTime: '28 min drive',
    description: 'A historic fortress atop Hari Parbat hill, constructed under Afghan governor Atta Mohammad Khan in the 18th century, with historical ramparts dating back to Emperor Akbar.',
    highlight: 'Historic mountain fortress with commanding 360-degree city views',
    image: '/images/destinations/hari-parbat-fort.jpg',
    alt: 'Ancient stone fort ramparts atop high hill in Kashmir',
  },
];
