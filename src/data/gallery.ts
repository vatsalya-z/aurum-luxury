export interface GalleryItem {
  id: string;
  category: 'Exterior' | 'Rooms' | 'Chalets' | 'Restaurant' | 'Property' | 'Surroundings';
  title: string;
  description: string;
  src: string;
  thumbnail?: string;
  width?: number;
  height?: number;
  featured?: boolean;
  locationTag?: string;
}

export const GALLERY_CATEGORIES = [
  'All Photos',
  'Chalets',
  'Rooms',
  'Exterior',
  'Property',
  'Restaurant',
  'Surroundings',
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-chalet-courtyard-dusk-wide',
    category: 'Chalets',
    title: 'Illuminated A-Frame Chalets & Evening Terrace Lounge',
    description:
      'Golden glowing glass facades and intimate curved rattan lounge seating framed by the deep twilight Zabarwan mountain ridge.',
    src: '/images/gallery/aurum-aframe-chalets-courtyard-dusk.jpg',
    featured: true,
    locationTag: 'Brein Hills Courtyard',
  },
  {
    id: 'gal-prop-sunset-deck-panorama',
    category: 'Property',
    title: 'Panoramic Sunset Deck & Srinagar City Vista',
    description:
      'Open-air wicker lounge terrace overlooking pine-clad slopes, glowing Srinagar city lights, and distant Dal Lake reflections at golden hour.',
    src: '/images/gallery/aurum-sunset-deck-srinagar-panorama.jpg',
    locationTag: 'Sunset Viewing Deck',
  },
  {
    id: 'gal-chalet-timber-suite',
    category: 'Chalets',
    title: 'Cedar Timber A-Frame Bedroom Suite',
    description:
      'Warm natural Kashmiri cedar wood-panelled walls, vaulted pitched ceiling, plush king bedding, and panoramic French doors.',
    src: '/images/gallery/aurum-chalet-timber-bedroom-suite.jpg',
    locationTag: 'Elegant Chalet',
  },
  {
    id: 'gal-chalet-emerald-suite',
    category: 'Chalets',
    title: 'Sunset View Chalet Master Emerald Suite',
    description:
      'Opulent king bedroom with tufted emerald velvet headboard, coffered cedar beams, private lounge, and balcony facing Dal Lake.',
    src: '/images/gallery/aurum-sunset-chalet-emerald-suite.jpg',
    featured: true,
    locationTag: 'Sunset View Chalet',
  },
  {
    id: 'gal-rest-khatamband-hall',
    category: 'Restaurant',
    title: 'Traditional Kashmiri Khatamband Dining Hall',
    description:
      'Authentic regional walnut woodwork and intricate Khatamband geometric ceiling artistry inside our on-site restaurant.',
    src: '/images/gallery/kashmiri-dining-hall-khatamband.jpg',
    locationTag: 'On-Site Restaurant',
  },
  {
    id: 'gal-rooms-cottage-master-wide',
    category: 'Rooms',
    title: 'Luxury Cottage Master Suite with Valley Window',
    description:
      'Expansive cottage bedroom suite with bespoke wall panelling, king bed, arched bay window facing the Brein hillside, and minibar.',
    src: '/images/gallery/aurum-luxury-cottage-master-suite.jpg',
    locationTag: 'Luxury Cottage',
  },
  {
    id: 'gal-chalet-mountain-panorama',
    category: 'Exterior',
    title: 'A-Frame Chalet Row & Himalayan Mountain Skyline',
    description:
      'Architectural row of pitch-roof chalets, stone terraces, manicured seasonal flowerbeds, and dramatic Zabarwan foothills.',
    src: '/images/gallery/aurum-aframe-chalets-mountain-panorama.jpg',
    featured: true,
    locationTag: 'Estate Facade',
  },
  {
    id: 'gal-chalet-1',
    category: 'Chalets',
    title: 'Sunset View Chalet – Golden Hour Dal View',
    description:
      'Breathtaking golden-hour reflection across Dal Lake captured directly from the private Sunset View Chalet deck.',
    src: '/images/rooms/sunset-chalet-dal-view.jpg',
    locationTag: 'Private Balcony',
  },
  {
    id: 'gal-chalet-3',
    category: 'Chalets',
    title: 'Elegant Chalet Bedroom & Lake Balcony',
    description:
      'Master cedar bedroom suite opening straight out onto panoramic Dal Lake vistas and misty Zabarwan mountain ridges.',
    src: '/images/rooms/elegant-chalet-dal-view.jpg',
    locationTag: 'Dal View Suite',
  },
  {
    id: 'gal-ext-misty-peaks',
    category: 'Exterior',
    title: 'The Aurum Chalets Beneath Misty Zabarwan Clouds',
    description:
      'Warm interior chalet illumination contrasting against dramatic monsoon and winter mist drifting across the Brein Hills.',
    src: '/images/hero/aurum-hero-1-desktop.jpg',
    featured: true,
    locationTag: 'Astanpora Sanctuary',
  },
  {
    id: 'gal-chalet-emerald-balcony-view',
    category: 'Chalets',
    title: 'Sunset Chalet Panoramic View from Bed',
    description:
      'Serene morning and sunset vistas across Dal Lake directly from the plush master bed through floor-to-ceiling glass doors.',
    src: '/images/gallery/aurum-sunset-chalet-balcony-view.jpg',
    locationTag: 'Sunset View Chalet',
  },
  {
    id: 'gal-chalet-loft-bedroom',
    category: 'Chalets',
    title: 'Elegant Chalet Vaulted Loft Suite',
    description:
      'Architectural A-frame ceilings, exposed cedar rafters, king bed, individual climate control, and artisanal Kashmiri rug.',
    src: '/images/gallery/aurum-chalet-loft-bedroom.jpg',
    locationTag: 'Upper Chalet',
  },
  {
    id: 'gal-prop-illuminated-walkway',
    category: 'Exterior',
    title: 'Illuminated Hillside Stone Walkway & Chalet Ascent',
    description:
      'Hand-laid stone stairway and warm lantern lighting ascending toward the glowing A-frame chalets at blue hour.',
    src: '/images/gallery/aurum-illuminated-chalet-walkway.jpg',
    locationTag: 'Evening Promenade',
  },
  {
    id: 'gal-prop-flower-promenade',
    category: 'Exterior',
    title: 'Hillside Seasonal Flower Garden Promenade',
    description:
      'Vibrant mountain blooms bordering stone-paved walkways along the chalets against the Zabarwan peaks.',
    src: '/images/gallery/aurum-hillside-flower-promenade.jpg',
    locationTag: 'Estate Gardens',
  },
  {
    id: 'gal-ext-cottage-villa',
    category: 'Exterior',
    title: 'Traditional Kashmiri Hillside Cottage Villa',
    description:
      'Classic Kashmiri brick-and-timber cottage architecture surrounded by fruit orchards and lush Brein hills.',
    src: '/images/gallery/aurum-luxury-cottage-exterior.jpg',
    locationTag: 'Cottage Wing',
  },
  {
    id: 'gal-rooms-1',
    category: 'Rooms',
    title: 'Luxury Bedroom Cottage Handcrafted Interior',
    description:
      'Bespoke wooden panelling, warm ambient lighting, and plush king-size bed inside our hillside cottage.',
    src: '/images/rooms/luxury-cottage-bedroom.png',
    featured: true,
    locationTag: 'Luxury Cottage',
  },
  {
    id: 'gal-rooms-2',
    category: 'Rooms',
    title: 'Luxury Cottage Fireside Seating Nook',
    description:
      'Intimate living corner crafted with regional Kashmiri woodwork and plush upholstered seating.',
    src: '/images/rooms/luxury-cottage-seating.png',
    locationTag: 'Cottage Lounge',
  },
  {
    id: 'gal-rooms-3',
    category: 'Rooms',
    title: 'Cottage Dressing & Wardrobe Alcove',
    description:
      'Spacious suite layout featuring built-in timber wardrobes, luggage bench, and curated guest amenities.',
    src: '/images/rooms/luxury-cottage-interior.png',
    locationTag: 'Luxury Cottage',
  },
  {
    id: 'gal-rooms-4',
    category: 'Rooms',
    title: 'Designer Ensuite Marble & Rain Shower',
    description:
      'Pristine modern bathroom fittings with 24-hour hot water, backlit vanity mirror, and premium toiletries.',
    src: '/images/rooms/luxury-cottage-bathroom.png',
    locationTag: 'Ensuite Bath',
  },
  {
    id: 'gal-rooms-vanity',
    category: 'Rooms',
    title: 'Bespoke Stone Vanity & Bath Suite',
    description:
      'Contemporary stonework vanity counter and refined fixtures designed for effortless mountain comfort.',
    src: '/images/rooms/luxury-cottage-vanity.png',
    locationTag: 'Suite Bath',
  },
  {
    id: 'gal-chalet-2',
    category: 'Chalets',
    title: 'Sunset View Chalet Private Viewing Terrace',
    description:
      'Elevated private timber deck offering sweeping views across the Zabarwan foothills and Dal Lake.',
    src: '/images/rooms/sunset-chalet-terrace.png',
    locationTag: 'Private Terrace',
  },
  {
    id: 'gal-chalet-4',
    category: 'Chalets',
    title: 'Chalet Panoramic Window Lounge',
    description:
      'Natural cedar woodwork and relaxing armchair corner framing the Srinagar valley sky.',
    src: '/images/rooms/elegant-chalet-lounge.png',
    locationTag: 'Chalet Lounge',
  },
  {
    id: 'gal-chalet-master-vaulted',
    category: 'Chalets',
    title: 'A-Frame Master Suite & Balcony Doors',
    description:
      'Vaulted cedar ceilings, king bed, and full-height glass doors opening out to fresh mountain air.',
    src: '/images/gallery/aframe-chalet-master-bedroom.jpg',
    locationTag: 'A-Frame Suite',
  },
  {
    id: 'gal-chalet-aframe-twilight',
    category: 'Chalets',
    title: 'A-Frame Chalet Sanctuary at Dusk',
    description:
      'Warm amber interior glow across our row of glass-fronted chalets as twilight settles over Brein.',
    src: '/images/gallery/aurum-aframe-chalets-twilight.jpg',
    locationTag: 'Chalets Row',
  },
  {
    id: 'gal-rest-al-fresco-dinner',
    category: 'Restaurant',
    title: 'Al Fresco Terrace Dining Under the Stars',
    description:
      'Curated evening dining table on the open-air terrace surrounded by cool pine air and glittering valley lights.',
    src: '/images/gallery/aurum-al-fresco-terrace-dinner.jpg',
    featured: true,
    locationTag: 'Terrace Dining',
  },
  {
    id: 'gal-restaurant-1',
    category: 'Restaurant',
    title: 'The Aurum Dining Hall & Authentic Wazwan',
    description:
      'Warm ambient restaurant serving traditional Kashmiri Wazwan specialties alongside Indian and continental favourites.',
    src: '/images/facilities/dining-hall-wazwan.png',
    locationTag: 'Wazwan Kitchen',
  },
  {
    id: 'gal-rest-evening-lounge',
    category: 'Restaurant',
    title: 'Indoor Restaurant & Evening Lounge',
    description:
      'Contemporary dining room bathed in warm pendant lighting with attentive Kashmiri table service.',
    src: '/images/gallery/aurum-restaurant-lounge.jpg',
    locationTag: 'Dining Lounge',
  },
  {
    id: 'gal-rest-buffet-spread',
    category: 'Restaurant',
    title: 'Morning Gourmet Breakfast & Wazwan Spread',
    description:
      'Freshly baked breads, seasonal Kashmir orchard fruits, Kahwa, and hot multi-course buffet selections.',
    src: '/images/gallery/aurum-buffet-dining-spread.jpg',
    locationTag: 'Breakfast Buffet',
  },
  {
    id: 'gal-restaurant-2',
    category: 'Restaurant',
    title: 'Bespoke Breakfast & Table Setting',
    description:
      'Freshly prepared morning spreads and personalized family dining arrangements.',
    src: '/images/facilities/breakfast-dining-spread.png',
    locationTag: 'Morning Service',
  },
  {
    id: 'gal-prop-courtyard-patio-twilight',
    category: 'Property',
    title: 'Central Courtyard Lounge Patio',
    description:
      'Stone-paved courtyard patio and outdoor lounge cushioned seating nestled amidst the quiet Brein hillside.',
    src: '/images/gallery/aurum-courtyard-patio-twilight.jpg',
    locationTag: 'Central Courtyard',
  },
  {
    id: 'gal-property-1',
    category: 'Property',
    title: 'Landscaped Hillside Walkway',
    description:
      'Gentle stone paths and manicured greenery connecting the cottages, chalets, and dining pavilion.',
    src: '/images/gallery/courtyard-hillside-walkway.png',
    locationTag: 'Estate Grounds',
  },
  {
    id: 'gal-property-2',
    category: 'Property',
    title: 'Evening Estate Illumination',
    description:
      'Atmospheric architectural lighting creating an inviting mountain sanctuary after sunset.',
    src: '/images/gallery/evening-property-illumination.png',
    locationTag: 'Dusk Ambience',
  },
  {
    id: 'gal-prop-concierge-desk',
    category: 'Property',
    title: '24/7 Reception & Concierge Desk',
    description:
      'Welcoming wood-crafted reception lobby assisting guests with check-ins, transfers, and sightseeing itineraries.',
    src: '/images/facilities/front-desk-concierge.jpg',
    locationTag: 'Reception Lobby',
  },
  {
    id: 'gal-prop-private-parking',
    category: 'Property',
    title: 'Gated On-Site Estate Parking',
    description:
      'Complimentary secure private parking court within the gated Brein Hills compound for guest and chauffeur vehicles.',
    src: '/images/facilities/estate-private-parking.jpg',
    locationTag: 'Gated Compound',
  },
  {
    id: 'gal-prop-courtyard-dusk',
    category: 'Property',
    title: 'Courtyard Gardens & Chalet Terraces',
    description:
      'Seasonal mountain flowerbeds fronting the boutique chalets in peaceful Brein Hills.',
    src: '/images/gallery/aurum-courtyard-chalets-dusk.jpg',
    locationTag: 'Flower Courtyard',
  },
  {
    id: 'gal-surr-dal-lake-serene',
    category: 'Surroundings',
    title: 'Snow-Capped Himalayan Peaks & Dal Lake Shikaras',
    description:
      'Majestic snow-clad mountain summits rising above tranquil Shikara boats gliding across Dal Lake, just 4.5 km away.',
    src: '/images/hero/aurum-experiences-hero-desktop.jpg',
    featured: true,
    locationTag: '4.5 km · Dal Lake',
  },
  {
    id: 'gal-surr-botanical-terraces',
    category: 'Surroundings',
    title: 'Jawaharlal Nehru Memorial Botanical Garden',
    description:
      'Vibrant terraced floral walkways and manicured botanical slopes at the foot of the Zabarwan hills.',
    src: '/images/experience/jawaharlal-nehru-botanical-garden-hd.jpg',
    locationTag: '4.2 km · Botanical Garden',
  },
  {
    id: 'gal-surr-botanical-fountains',
    category: 'Surroundings',
    title: 'Botanical Garden Lake & Twin Fountains',
    description:
      'Serene emerald lawns, blooming flowerbeds, and high water fountains reflecting willow trees.',
    src: '/images/experience/jawaharlal-nehru-botanical-garden-fountains-hd.jpg',
    locationTag: '4.2 km · Botanical Lake',
  },
  {
    id: 'gal-surr-tulip-garden',
    category: 'Surroundings',
    title: 'Indira Gandhi Memorial Tulip Garden',
    description:
      'Asia’s largest tulip sanctuary in dazzling spring bloom beneath the Zabarwan range, minutes from our estate.',
    src: '/images/experience/tulip-garden-srinagar.jpg',
    locationTag: '4.8 km · Tulip Garden',
  },
  {
    id: 'gal-surr-nishat-bagh',
    category: 'Surroundings',
    title: 'Nishat Bagh – Mughal Garden of Bliss',
    description:
      'Twelve-terraced royal Mughal garden cascading toward Dal Lake with centuries-old Chinar trees.',
    src: '/images/experience/nishat-garden-srinagar.jpg',
    locationTag: '3.2 km · Nishat Bagh',
  },
  {
    id: 'gal-surr-pari-mahal',
    category: 'Surroundings',
    title: 'Pari Mahal Historic Mountain Terraces',
    description:
      '17th-century six-tiered Mughal stone observatory and garden overlooking Srinagar and Dal Lake.',
    src: '/images/gallery/pari-mahal-historic-terraces.jpg',
    locationTag: '6.5 km · Pari Mahal',
  },
  {
    id: 'gal-surr-chashme-shahi',
    category: 'Surroundings',
    title: 'Chashme Shahi Royal Spring Pavilion',
    description:
      'Intimate hillside Mughal garden renowned for its pure natural mountain spring and arched stone pavilion.',
    src: '/images/experience/chashme-shahi-royal-spring.jpg',
    locationTag: '5.5 km · Royal Spring',
  },
  {
    id: 'gal-surr-hari-parbat',
    category: 'Surroundings',
    title: 'Hari Parbat Fort & Valley Panorama',
    description:
      'Historic 18th-century citadel crowning Sharika Peeth hill with sweeping views across the Kashmir valley.',
    src: '/images/experience/hari-parbat-fort-srinagar.jpg',
    locationTag: '11 km · Old Srinagar',
  },
  {
    id: 'gal-surr-night-valley-view',
    category: 'Surroundings',
    title: 'Srinagar Valley & Dal Lake Nocturnal Panorama',
    description:
      'Glittering night lights of Srinagar city and Dal Lake viewed from the elevated hillside slopes of Brein.',
    src: '/images/gallery/aurum-night-view-srinagar-valley.jpg',
    locationTag: 'View from Brein Hills',
  },
  {
    id: 'gal-surroundings-2',
    category: 'Surroundings',
    title: 'Zabarwan Pine Ridges & Forest Trails',
    description:
      'Evergreen Himalayan pine slopes directly sheltering Astanpora and The Aurum sanctuary.',
    src: '/images/gallery/zabarwan-pine-slopes.webp',
    locationTag: 'Zabarwan Foothills',
  },
];
