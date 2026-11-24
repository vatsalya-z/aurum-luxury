export interface GalleryItem {
  id: string;
  category: 'Exterior' | 'Rooms' | 'Chalets' | 'Restaurant' | 'Property' | 'Surroundings';
  title: string;
  description: string;
  src: string;
  thumbnail?: string;
  width?: number;
  height?: number;
}

export const GALLERY_CATEGORIES = [
  'All Photos',
  'Exterior',
  'Rooms',
  'Chalets',
  'Restaurant',
  'Property',
  'Surroundings',
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-prop-panorama',
    category: 'Property',
    title: 'The Aurum Twilight Panorama & Zabarwan Mountain Backdrop',
    description: 'Illuminated hillside stone terraces, manicured emerald lawns, and glowing A-frame chalets framed by the Himalayan mountains at dusk.',
    src: '/images/gallery/aurum-twilight-panorama.jpg',
  },
  {
    id: 'gal-chalet-1',
    category: 'Chalets',
    title: 'Sunset View Chalet – Dal View',
    description: 'Breathtaking golden hour sunset reflection across Dal Lake from the private chalet deck.',
    src: '/images/rooms/sunset-chalet-dal-view.jpg',
  },
  {
    id: 'gal-chalet-aframe-twilight',
    category: 'Chalets',
    title: 'A-Frame Chalet Row at Twilight',
    description: 'Charming glass-fronted A-frame chalets with warm interior illumination, stone walkways, and serene mountain horizons.',
    src: '/images/gallery/aurum-aframe-chalets-twilight.jpg',
  },
  {
    id: 'gal-chalet-master-vaulted',
    category: 'Chalets',
    title: 'A-Frame Master Chalet Bedroom with Balcony',
    description: 'Vaulted cedar timber ceilings, plush king bed, handcrafted wood panelling, and glass doors opening out to Dal Lake vistas.',
    src: '/images/gallery/aframe-chalet-master-bedroom.jpg',
  },
  {
    id: 'gal-chalet-3',
    category: 'Chalets',
    title: 'Elegant Chalet Bedroom & Balcony',
    description: 'Master cedar bedroom suite opening out to panoramic Dal Lake vistas and private Zabarwan mountain views.',
    src: '/images/rooms/elegant-chalet-dal-view.jpg',
  },
  {
    id: 'gal-ext-cottage-villa',
    category: 'Exterior',
    title: 'The Aurum Hillside Cottage Villa',
    description: 'Traditional Kashmiri brick-and-timber cottage architecture surrounded by lush fruit orchards and mist-veiled Brein hills.',
    src: '/images/gallery/aurum-luxury-cottage-exterior.jpg',
  },
  {
    id: 'gal-rooms-1',
    category: 'Rooms',
    title: 'Luxury Bedroom Cottage Interior',
    description: 'Bespoke wooden panelling and plush king-size bed in our cottage accommodation.',
    src: '/images/rooms/luxury-cottage-bedroom.png',
  },
  {
    id: 'gal-rooms-cottage-suite',
    category: 'Rooms',
    title: 'Luxury Bedroom Cottage Suite',
    description: 'Elegantly furnished cottage bedroom with king bed, individual climate control, flat-screen television, minibar, and en-suite amenities.',
    src: '/images/gallery/luxury-cottage-bedroom-interior.jpg',
  },
  {
    id: 'gal-prop-courtyard-dusk',
    category: 'Property',
    title: 'Hillside Courtyard & Flower Gardens',
    description: 'Stone-paved pathways and seasonal mountain flower gardens fronting the boutique chalets in Brein Hills.',
    src: '/images/gallery/aurum-courtyard-chalets-dusk.jpg',
  },
  {
    id: 'gal-chalet-veranda-facade',
    category: 'Chalets',
    title: 'Chalet Veranda & Glass Facade',
    description: 'Private entrance terrace with handcrafted wrought iron railings and panoramic glass curtains looking into the timber bedroom suite.',
    src: '/images/gallery/chalet-veranda-entrance.jpg',
  },
  {
    id: 'gal-chalet-2',
    category: 'Chalets',
    title: 'Sunset View Chalet Viewing Terrace',
    description: 'Private viewing deck with sweeping mountain and lake vistas.',
    src: '/images/rooms/sunset-chalet-terrace.png',
  },
  {
    id: 'gal-chalet-4',
    category: 'Chalets',
    title: 'Chalet Panoramic Seating Lounge',
    description: 'Natural woodwork and comfortable seating framing the Srinagar sky.',
    src: '/images/rooms/elegant-chalet-lounge.png',
  },
  {
    id: 'gal-rooms-2',
    category: 'Rooms',
    title: 'Luxury Cottage Seating & Warmth',
    description: 'Cozy living corner crafted with traditional Kashmiri craftsmanship.',
    src: '/images/rooms/luxury-cottage-seating.png',
  },
  {
    id: 'gal-rooms-3',
    category: 'Rooms',
    title: 'Cottage Dressing & Luggage Area',
    description: 'Spacious layout with built-in wardrobes and personalized amenities.',
    src: '/images/rooms/luxury-cottage-interior.png',
  },
  {
    id: 'gal-rooms-4',
    category: 'Rooms',
    title: 'Luxury Ensuite Rain Shower',
    description: 'Pristine modern bathroom fittings with hot water 24 hours a day.',
    src: '/images/rooms/luxury-cottage-bathroom.png',
  },
  {
    id: 'gal-ext-1',
    category: 'Exterior',
    title: 'The Aurum Luxury Collection Property Exterior',
    description: 'Boutique architectural facade set against the dramatic slopes of Brein Hills, Astanpora.',
    src: '/images/hero/aurum-estate-brein-hills.png',
  },
  {
    id: 'gal-rest-khatamband-hall',
    category: 'Restaurant',
    title: 'Traditional Kashmiri Dining Hall',
    description: 'Authentic woodwork and intricate Khatamband geometric wood ceiling art in the on-site dining space.',
    src: '/images/gallery/kashmiri-dining-hall-khatamband.jpg',
  },
  {
    id: 'gal-rest-evening-lounge',
    category: 'Restaurant',
    title: 'Indoor Restaurant & Evening Lounge',
    description: 'Spacious contemporary dining area with ambient pendant lighting and warm Kashmiri hospitality.',
    src: '/images/gallery/aurum-restaurant-lounge.jpg',
  },
  {
    id: 'gal-restaurant-1',
    category: 'Restaurant',
    title: 'The Aurum Dining Hall & Wazwan Cuisine',
    description: 'Warm ambient dining space serving traditional Kashmiri specialties and global flavors.',
    src: '/images/facilities/dining-hall-wazwan.png',
  },
  {
    id: 'gal-rest-buffet-spread',
    category: 'Restaurant',
    title: 'Gourmet Breakfast & Wazwan Buffet',
    description: 'Freshly prepared morning breakfast buffet and traditional multi-course dining arrangements.',
    src: '/images/gallery/aurum-buffet-dining-spread.jpg',
  },
  {
    id: 'gal-restaurant-2',
    category: 'Restaurant',
    title: 'Breakfast & Gourmet Dining Setup',
    description: 'Freshly prepared morning spreads and customized dining arrangements.',
    src: '/images/facilities/breakfast-dining-spread.png',
  },
  {
    id: 'gal-property-1',
    category: 'Property',
    title: 'Central Courtyard & Hillside Walkway',
    description: 'Gentle landscaped paths connecting cottages and chalets across the Brein hillside.',
    src: '/images/gallery/courtyard-hillside-walkway.png',
  },
  {
    id: 'gal-property-2',
    category: 'Property',
    title: 'Evening Illumination at The Aurum',
    description: 'Atmospheric exterior lighting creating an enchanting mountain ambiance at dusk.',
    src: '/images/gallery/evening-property-illumination.png',
  },
  {
    id: 'gal-surr-dal-lake-aerial',
    category: 'Surroundings',
    title: 'Dal Lake Floating Market & Shikara Gathering',
    description: 'Vibrant aerial view of traditional Shikara boats gathering in the morning mist on Dal Lake.',
    src: '/images/gallery/dal-lake-floating-market-aerial.jpg',
  },
  {
    id: 'gal-surr-tulip-garden',
    category: 'Surroundings',
    title: 'Indira Gandhi Memorial Tulip Garden',
    description: 'Spectacular spring bloom of colorful tulips and water fountains against the dramatic Zabarwan mountain range.',
    src: '/images/gallery/srinagar-tulip-garden-zabarwan.jpg',
  },
  {
    id: 'gal-surr-pari-mahal',
    category: 'Surroundings',
    title: 'Pari Mahal Historic Mountain Terraces',
    description: 'Six-tiered Mughal stone palace and reflective pool overlooking Srinagar and Dal Lake.',
    src: '/images/gallery/pari-mahal-historic-terraces.jpg',
  },
  {
    id: 'gal-surr-hari-parbat',
    category: 'Surroundings',
    title: 'Hari Parbat Fort View',
    description: 'Historic 18th-century citadel crowning the hill with panoramic views across the valley of Kashmir.',
    src: '/images/gallery/hari-parbat-fort-aerial.jpg',
  },
  {
    id: 'gal-chalet-5',
    category: 'Chalets',
    title: 'Sunset View Chalet Private Balcony',
    description: 'Unobstructed panorama across Srinagar valley as twilight descends.',
    src: '/images/rooms/sunset-chalet-panoramic-view.png',
  },
  {
    id: 'gal-surroundings-2',
    category: 'Surroundings',
    title: 'Zabarwan Mountain Ridges & Pine Slopes',
    description: 'Majestic Himalayan foothills surrounding Astanpora and Brein Hills.',
    src: '/images/gallery/zabarwan-pine-slopes.webp',
  },
];
