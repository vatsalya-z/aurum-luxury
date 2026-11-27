export interface Attraction {
  id: string;
  name: string;
  category: string;
  filterGroup?: 'Lakes & Nature' | 'Mughal & Heritage' | 'Valley Day Trips';
  distance: string;
  travelTime: string;
  description: string;
  highlight: string;
  image: string;
  alt: string;
  gallery?: { src: string; caption: string }[];
}

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'dal-lake',
    name: 'Dal Lake & Floating Bazaars',
    category: 'Natural Wonder',
    filterGroup: 'Lakes & Nature',
    distance: '4.5 km',
    travelTime: '12 min drive',
    description:
      'The iconic jewel of Srinagar. Experience tranquil Shikara rides, vibrant floating vegetable markets, and traditional wooden houseboats framed by snow-dusted mountains.',
    highlight: 'Sunset Shikara cruises & floating flower bazaars',
    image: '/images/rooms/sunset-chalet-panoramic-view.png',
    alt: 'Traditional Shikara boat gliding across shimmering golden sunset reflections on Dal Lake Srinagar',
    gallery: [
      {
        src: '/images/rooms/sunset-chalet-panoramic-view.png',
        caption: 'Golden Sunset Reflections & Houseboats on Dal Lake',
      },
      {
        src: '/images/hero/aurum-experiences-hero-desktop.jpg',
        caption: 'Morning Shikara Cruise Past Floating Lotus Gardens',
      },
      {
        src: '/images/gallery/dal-lake-snow-mountains-shikara.jpg',
        caption: 'Snow-Crowned Pir Panjal Reflections Across Calm Waters',
      },
      {
        src: '/images/gallery/dal-lake-shikara-ghat-pier.jpg',
        caption: 'Traditional Carved Cedarwood Shikara Pier on Boulevard Road',
      },
    ],
  },
  {
    id: 'tulip-garden',
    name: 'Indira Gandhi Memorial Tulip Garden',
    category: 'Botanical Garden',
    filterGroup: 'Lakes & Nature',
    distance: '6.0 km',
    travelTime: '15 min drive',
    description:
      'Asia’s largest tulip garden, nestled in the foothills of the Zabarwan range. Spanning over 30 hectares with millions of blooming tulips in vivid spectral bands during spring.',
    highlight: 'Over 60 varieties of blooming tulips against mountain backdrops',
    image: '/images/experience/tulip-garden-srinagar.jpg',
    alt: 'Expansive field of vibrant red, yellow, and white tulips blooming in Srinagar',
    gallery: [
      {
        src: '/images/experience/tulip-garden-srinagar.jpg',
        caption: 'Spectral Bands of Blooming Spring Tulips in Srinagar',
      },
    ],
  },
  {
    id: 'pari-mahal',
    name: 'Pari Mahal (The Fairies’ Abode)',
    category: 'Historical Monument',
    filterGroup: 'Mughal & Heritage',
    distance: '8.5 km',
    travelTime: '20 min drive',
    description:
      'A seven-terraced Mughal garden and architectural marvel perched high above Dal Lake. Built by Prince Dara Shikoh in the mid-1600s, offering breathtaking panoramic vistas of Srinagar.',
    highlight: 'Panoramic cliffside sunset viewpoint overlooking the entire lake valley',
    image: '/images/gallery/pari-mahal-historic-terraces.jpg',
    alt: 'Historic stone arches, reflecting pool, and terraced gardens of Pari Mahal overlooking Srinagar',
    gallery: [
      {
        src: '/images/gallery/pari-mahal-historic-terraces.jpg',
        caption: 'Central Stone Archway, Reflecting Pool & Zabarwan Pines',
      },
      {
        src: '/images/experience/pari-mahal-srinagar.jpg',
        caption: 'Seven-Terraced Royal Mughal Masonry & Lawns',
      },
    ],
  },
  {
    id: 'nishat-garden',
    name: 'Nishat Garden (Garden of Bliss)',
    category: 'Mughal Heritage',
    filterGroup: 'Mughal & Heritage',
    distance: '5.2 km',
    travelTime: '14 min drive',
    description:
      'The second largest Mughal garden in Kashmir valley, laid out in 1633 by Asif Khan. Features 12 magnificent stepped terraces, historic chinar trees, and cascading mountain water fountains.',
    highlight: 'Century-old grand chinar trees and cascading fountain channels',
    image: '/images/experience/nishat-garden-srinagar.jpg',
    alt: 'Verdant green lawns and historic water channels of Nishat Garden backed by Zabarwan peaks',
    gallery: [
      {
        src: '/images/experience/nishat-garden-srinagar.jpg',
        caption: '12 Stepped Terraces & Central Fountain Axis at Nishat Bagh',
      },
      {
        src: '/images/cta/aurum-experiences-cta-bg.jpg',
        caption: 'Golden-Hour Panorama Across Royal Mughal Pavilions & Dal Valley',
      },
    ],
  },
  {
    id: 'shalimar-garden',
    name: 'Shalimar Garden (Abode of Love)',
    category: 'Mughal Heritage',
    filterGroup: 'Mughal & Heritage',
    distance: '8.0 km',
    travelTime: '20 min drive',
    description:
      'Built by Mughal Emperor Jahangir for his beloved Empress Nur Jahan in 1619. Renowned for its black marble pavilion, carved water chutes, and serene royal walkways.',
    highlight: 'The Black Marble Pavilion surrounded by natural mountain streams',
    image: '/images/experience/shalimar-garden-srinagar.jpg',
    alt: 'Lush terraced fountains and historic Chinar trees at Shalimar Bagh Srinagar',
    gallery: [
      {
        src: '/images/experience/shalimar-garden-srinagar.jpg',
        caption: 'Cascading Chini Khana Waterfalls & Royal Pavilion at Shalimar Bagh',
      },
    ],
  },
  {
    id: 'botanical-garden',
    name: 'Jawaharlal Nehru Botanical Garden',
    category: 'Nature & Walking Trails',
    filterGroup: 'Lakes & Nature',
    distance: '6.5 km',
    travelTime: '16 min drive',
    description:
      'Spread over 80 hectares near the foothills of the Zabarwan Mountains, this tranquil botanical park features rare Himalayan flora, reflective ponds, and quiet shaded walking trails.',
    highlight: 'Peaceful lakeside walking circuits and curated rare Himalayan plants',
    image: '/images/experience/jawaharlal-nehru-botanical-garden-hd.jpg',
    alt: 'Vibrant terraced floral walkways and manicured lawns at Jawaharlal Nehru Botanical Garden',
    gallery: [
      {
        src: '/images/experience/jawaharlal-nehru-botanical-garden-hd.jpg',
        caption: 'Terraced Floral Walkways & Sculpted Flowerbeds at Botanical Garden',
      },
      {
        src: '/images/experience/jawaharlal-nehru-botanical-garden-fountains-hd.jpg',
        caption: 'Reflective Lake Fountains & Manicured Floral Lawns at Botanical Garden',
      },
    ],
  },
];

export const EXTENDED_EXPERIENCES: Attraction[] = [
  ...ATTRACTIONS,
  {
    id: 'chashme-shahi',
    name: 'Chashme Shahi (The Royal Spring)',
    category: 'Mughal Heritage',
    filterGroup: 'Mughal & Heritage',
    distance: '7.2 km',
    travelTime: '15 min drive',
    description:
      'Commissioned in 1632 around a pure natural mountain spring on the Zabarwan slopes, featuring intimate terraced lawns, arched Mughal pavilions, and cool mineral waters.',
    highlight: 'Natural Himalayan freshwater spring & intimate three-tiered Mughal terraces',
    image: '/images/experience/chashme-shahi-royal-spring.jpg',
    alt: 'Chashme Shahi Mughal spring pavilion, stone pool, and Zabarwan pine slopes in Srinagar',
    gallery: [
      {
        src: '/images/experience/chashme-shahi-royal-spring.jpg',
        caption: 'Chashme Shahi Royal Spring Pavilion & Terraced Gardens',
      },
    ],
  },
  {
    id: 'char-chinar',
    name: 'Char Chinar Island (Rupa Lank)',
    category: 'Natural Wonder',
    filterGroup: 'Lakes & Nature',
    distance: '10.5 km',
    travelTime: '22 min drive + Shikara',
    description:
      'Set serenely in the heart of Dal Lake, this historic island is framed at all four corners by centuries-old Chinar trees that turn radiant gold and crimson in autumn.',
    highlight: 'Private Shikara excursion to Dal Lake’s most photographed island sanctuary',
    image: '/images/experience/char-chinar-dal-lake.jpg',
    alt: 'Four majestic Chinar trees on Char Chinar island mirrored in tranquil Dal Lake Srinagar',
    gallery: [
      {
        src: '/images/experience/char-chinar-dal-lake.jpg',
        caption: 'Char Chinar Island Mirrored in Calm Dal Lake Waters',
      },
      {
        src: '/images/gallery/dal-lake-panoramic-shikara-view.jpg',
        caption: 'Shikara Approach Across Open Dal Lake Expanse',
      },
    ],
  },
  {
    id: 'hari-parbat',
    name: 'Hari Parbat Fort (Koh-i-Maran)',
    category: 'Historical Monument',
    filterGroup: 'Mughal & Heritage',
    distance: '11.0 km',
    travelTime: '25 min drive',
    description:
      'Crowning Sharika Hill above Old Srinagar, this commanding 18th-century Durrani fortress and Mughal rampart wall offers sweeping 360-degree views across Dal Lake and Nigeen Lake.',
    highlight: 'Commanding hilltop ramparts & spring almond blossom orchards below',
    image: '/images/experience/hari-parbat-fort-srinagar.jpg',
    alt: 'Historic Hari Parbat stone fortress perched atop green Sharika Hill in Srinagar',
    gallery: [
      {
        src: '/images/experience/hari-parbat-fort-srinagar.jpg',
        caption: 'Hari Parbat Fortress Ramparts Above Blooming Almond Trees',
      },
    ],
  },
  {
    id: 'gulmarg-meadows',
    name: 'Gulmarg Meadows & Gondola',
    category: 'Alpine Excursion',
    filterGroup: 'Valley Day Trips',
    distance: '54 km',
    travelTime: 'Full-day trip',
    description:
      'Known as the Meadow of Flowers, Gulmarg pairs rolling emerald alpine pastures and silver fir forests with one of the world’s highest cable cars ascending Apharwat Peak.',
    highlight: 'Phase 1 & 2 Gondola cable car rides, snowfields & alpine golf meadows',
    image: '/images/experience/gulmarg-meadows-gondola.jpg',
    alt: 'Emerald Gulmarg alpine meadows, Himalayan fir trees, and Gondola ascending snow-capped Apharwat Peak',
    gallery: [
      {
        src: '/images/experience/gulmarg-meadows-gondola.jpg',
        caption: 'Gulmarg Alpine Meadows & Gondola Cable Car Toward Apharwat Peak',
      },
    ],
  },
  {
    id: 'sonamarg-glacier',
    name: 'Sonamarg & Thajiwas Glacier',
    category: 'Alpine Excursion',
    filterGroup: 'Valley Day Trips',
    distance: '84 km',
    travelTime: 'Full-day trip',
    description:
      'A dramatic Himalayan valley along the ancient Silk Route where golden meadows meet crystal Sindh River rapids and the towering snow-clad walls of Thajiwas Glacier.',
    highlight: 'Chauffeured scenic drive up Sindh Valley to glacier viewpoints',
    image: '/images/experience/sonamarg-thajiwas-glacier.jpg',
    alt: 'Grazing Kashmiri horse on green Sonamarg alpine meadow beneath snow-covered Thajiwas Glacier peaks',
    gallery: [
      {
        src: '/images/experience/sonamarg-thajiwas-glacier.jpg',
        caption: 'Sonamarg Emerald Pastures Beneath Snow-Crowned Thajiwas Glacier',
      },
    ],
  },
  {
    id: 'pahalgam-lidder',
    name: 'Pahalgam, Lidder & Betaab Valley',
    category: 'Alpine Excursion',
    filterGroup: 'Valley Day Trips',
    distance: '92 km',
    travelTime: 'Full-day trip',
    description:
      'Follow saffron fields at Pampore into deep deodar pine canyons carved by the glacial Lidder River, with idyllic picnic stops at Betaab Valley and Aru hamlet.',
    highlight: 'Glacial Lidder River boulders, pine forests & Pampore saffron fields en route',
    image: '/images/experience/pahalgam-lidder-valley.jpg',
    alt: 'Rushing glacial Lidder River boulders, pine trees, and snow-covered mountains in Pahalgam Kashmir',
    gallery: [
      {
        src: '/images/experience/pahalgam-lidder-valley.jpg',
        caption: 'Glacial Lidder River & Snow-Dusted Pine Ridges in Pahalgam',
      },
    ],
  },
];
