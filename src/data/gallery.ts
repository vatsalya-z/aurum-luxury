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
    id: 'gal-ext-1',
    category: 'Exterior',
    title: 'The Aurum Luxury Collection Property Exterior',
    description: 'Boutique architectural facade set against the dramatic slopes of Brein Hills, Astanpora.',
    src: '/images/hero/aurum-estate-brein-hills.png',
  },
  {
    id: 'gal-chalet-1',
    category: 'Chalets',
    title: 'Sunset View Chalet – Dal View',
    description: 'Floor-to-ceiling panoramic glass facing the sunset horizon over Dal Lake.',
    src: '/images/rooms/sunset-chalet-master.png',
  },
  {
    id: 'gal-chalet-2',
    category: 'Chalets',
    title: 'Sunset View Chalet Viewing Terrace',
    description: 'Private viewing deck with sweeping mountain and lake vistas.',
    src: '/images/rooms/sunset-chalet-terrace.png',
  },
  {
    id: 'gal-chalet-3',
    category: 'Chalets',
    title: 'Elegant Chalet Bedroom & Balcony',
    description: 'Spacious pine chalet bedroom opening out to Dal Lake valley scenery.',
    src: '/images/rooms/elegant-chalet-bedroom.png',
  },
  {
    id: 'gal-chalet-4',
    category: 'Chalets',
    title: 'Chalet Panoramic Seating Lounge',
    description: 'Natural woodwork and comfortable seating framing the Srinagar sky.',
    src: '/images/rooms/elegant-chalet-lounge.png',
  },
  {
    id: 'gal-rooms-1',
    category: 'Rooms',
    title: 'Luxury Bedroom Cottage Interior',
    description: 'Bespoke wooden panelling and plush king-size bed in our cottage accommodation.',
    src: '/images/rooms/luxury-cottage-bedroom.png',
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
    id: 'gal-restaurant-1',
    category: 'Restaurant',
    title: 'The Aurum Dining Hall & Wazwan Cuisine',
    description: 'Warm ambient dining space serving traditional Kashmiri specialties and global flavors.',
    src: '/images/facilities/dining-hall-wazwan.png',
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
    id: 'gal-surroundings-1',
    category: 'Surroundings',
    title: 'Dal Lake Reflections at Sunset',
    description: 'The golden hour over Dal Lake, just minutes away from The Aurum.',
    src: '/images/gallery/dal-lake-sunset-view.webp',
  },
  {
    id: 'gal-surroundings-2',
    category: 'Surroundings',
    title: 'Zabarwan Mountain Ridges & Pine Slopes',
    description: 'Majestic Himalayan foothills surrounding Astanpora and Brein Hills.',
    src: '/images/gallery/zabarwan-pine-slopes.webp',
  },
  {
    id: 'gal-chalet-5',
    category: 'Chalets',
    title: 'Sunset View Chalet Private Balcony',
    description: 'Unobstructed panorama across Srinagar valley as twilight descends.',
    src: '/images/rooms/sunset-chalet-panoramic-view.png',
  },
  {
    id: 'gal-rooms-4',
    category: 'Rooms',
    title: 'Luxury Ensuite Rain Shower',
    description: 'Pristine modern bathroom fittings with hot water 24 hours a day.',
    src: '/images/rooms/luxury-cottage-bathroom.png',
  },
];
