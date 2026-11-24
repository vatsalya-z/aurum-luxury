export interface RoomMealPlan {
  id: string;
  name: string;
  description: string;
  badge?: string;
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'Cottage' | 'Chalet';
  maxGuests: number;
  bedrooms: number;
  bedType: string;
  view: string;
  sizeSqFt?: number;
  rateDisplay: string;
  isPopular?: boolean;
  shortDescription: string;
  fullDescription: string[];
  highlights: string[];
  amenities: {
    name: string;
    icon: string;
  }[];
  mealPlans: RoomMealPlan[];
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export const ROOM_MEAL_PLANS: RoomMealPlan[] = [
  {
    id: 'room-only',
    name: 'Room Only',
    description: 'European Plan (EP). Accommodation only, ideal for guests with early morning excursions.',
  },
  {
    id: 'room-breakfast',
    name: 'Room + Breakfast',
    description: 'Bed & Breakfast (CP). Includes daily freshly prepared gourmet breakfast at the hotel restaurant.',
    badge: 'Most Popular',
  },
  {
    id: 'room-breakfast-meal',
    name: 'Room + Breakfast + 1 Meal',
    description: 'Modified American Plan (MAP). Includes daily lavish breakfast plus your choice of either lunch or dinner.',
  },
];

export const ROOMS: Room[] = [
  {
    id: 'luxury-bedroom-cottage',
    slug: 'luxury-bedroom-cottage',
    name: 'Luxury Bedroom Cottage',
    tagline: 'Warm Wooden Sanctuary in the Brein Hills',
    category: 'Cottage',
    maxGuests: 3,
    bedrooms: 1,
    bedType: '1 King Bed',
    view: 'Pine Forest & Mountain Hillside',
    sizeSqFt: 380,
    rateDisplay: 'Contact us for current rates',
    isPopular: false,
    shortDescription: 'Nestled along the tranquil slopes of Brein Hills, this cottage combines handcrafted Kashmiri wood finishings with intimate, contemporary comfort.',
    fullDescription: [
      'The Luxury Bedroom Cottage offers a serene hideaway surrounded by the peaceful atmosphere of Brein Hills, Astanpora. Built with traditional regional timber accents and warm earthy textures, the interior creates an immediate sense of mountain sanctuary.',
      'Guests enjoy a plush king-size bed draped with premium linens, an ensuite designer bathroom with luxury fittings and hot water around the clock, a private sitting nook, and dedicated tea/coffee facilities.',
      'Whether returning from a day gliding across Dal Lake or strolling through Srinagar’s historic Mughal Gardens, the cottage provides a deeply restful atmosphere with attentive personalized hospitality.',
    ],
    highlights: [
      'Authentic Kashmiri timber architectural craftsmanship',
      'Plush King-sized bed with luxury down duvet & linens',
      'Quiet hillside position away from city bustle',
      'Ensuite bathroom with 24-hr hot shower & designer amenities',
      'High-speed Wi-Fi and climate control heating & AC',
    ],
    amenities: [
      { name: 'Air Conditioning & Heating', icon: 'thermometer' },
      { name: 'High-Speed Wi-Fi', icon: 'wifi' },
      { name: 'King Size Bed', icon: 'bed' },
      { name: 'Coffee / Tea Maker', icon: 'coffee' },
      { name: 'Minibar', icon: 'refrigerator' },
      { name: 'Private Ensuite Bathroom', icon: 'bath' },
      { name: 'Daily Housekeeping', icon: 'sparkles' },
      { name: 'Flat-screen TV', icon: 'tv' },
      { name: 'Safe Deposit Box', icon: 'shield' },
      { name: '24-Hour Room Service', icon: 'bell' },
    ],
    mealPlans: ROOM_MEAL_PLANS,
    images: [
      {
        src: '/images/rooms/luxury-cottage-bedroom.png',
        alt: 'Luxury Bedroom Cottage bedroom with handcrafted wood and king bed',
        caption: 'Bedroom interior featuring bespoke timber panelling and plush bedding',
      },
      {
        src: '/images/rooms/luxury-cottage-seating.png',
        alt: 'Luxury Bedroom Cottage seating area',
        caption: 'Cozy seating area with artisanal Kashmiri upholstery',
      },
      {
        src: '/images/rooms/luxury-cottage-interior.png',
        alt: 'Luxury Bedroom Cottage interior view',
        caption: 'Spacious cottage layout with gentle ambient lighting',
      },
      {
        src: '/images/rooms/luxury-cottage-vanity.png',
        alt: 'Luxury Bedroom Cottage vanity and wardrobe',
        caption: 'Built-in dressing vanity and ample luggage storage',
      },
      {
        src: '/images/rooms/luxury-cottage-bathroom.png',
        alt: 'Luxury Bedroom Cottage ensuite bathroom',
        caption: 'Modern luxury bathroom with hot rain shower',
      },
    ],
  },
  {
    id: 'elegant-chalet-dal-view',
    slug: 'elegant-chalet-dal-view',
    name: 'Elegant Chalet – Dal View',
    tagline: 'Panoramic Dal Lake & Valley Horizon',
    category: 'Chalet',
    maxGuests: 3,
    bedrooms: 1,
    bedType: '1 King Bed',
    view: 'Dal Lake & Valley Vista',
    sizeSqFt: 460,
    rateDisplay: 'Contact us for current rates',
    isPopular: true,
    shortDescription: 'Elevated wooden chalet crafted with natural cedar and pine, featuring generous panoramic windows overlooking Dal Lake and the Srinagar valley.',
    fullDescription: [
      'Perched higher along the Brein hillside, the Elegant Chalet – Dal View brings the iconic natural beauty of Srinagar directly into your living space. Broad windows open to reveal changing hues across the Dal Lake basin from sunrise to dusk.',
      'The chalet combines generous room proportions with refined architectural woodwork, a private view terrace, deep-cushioned armchairs, and an expansive bathroom equipped with fine toiletries.',
      'Ideal for couples and discerning travellers seeking an elevated retreat where morning mist over Dal Lake greets you directly from the warmth of your room.',
    ],
    highlights: [
      'Direct elevated panoramic views over Dal Lake',
      'Private scenic viewing terrace / balcony',
      'Vaulted pine-wood ceiling with mountain lodge charm',
      'Luxury king bedding and sitting parlor',
      'Complimentary gourmet breakfast included with CP & MAP plans',
    ],
    amenities: [
      { name: 'Panoramic Dal Lake View', icon: 'mountain' },
      { name: 'Private Balcony / Terrace', icon: 'sun' },
      { name: 'Air Conditioning & Heating', icon: 'thermometer' },
      { name: 'High-Speed Wi-Fi', icon: 'wifi' },
      { name: 'Coffee / Tea Station', icon: 'coffee' },
      { name: 'Minibar with Refreshments', icon: 'refrigerator' },
      { name: 'Ensuite Luxury Bathroom', icon: 'bath' },
      { name: 'Bathrobes & Premium Slippers', icon: 'sparkles' },
      { name: 'Daily Housekeeping', icon: 'shield' },
      { name: '24-Hour In-Room Dining', icon: 'bell' },
    ],
    mealPlans: ROOM_MEAL_PLANS,
    images: [
      {
        src: '/images/rooms/elegant-chalet-dal-view.jpg',
        alt: 'Elegant Chalet – Dal View master bedroom with vaulted cedar ceiling and panoramic Dal Lake views',
        caption: 'Master bedroom suite framing elevated panoramic vistas of Dal Lake and Zabarwan mountains',
      },
      {
        src: '/images/rooms/elegant-chalet-lounge.png',
        alt: 'Elegant Chalet panoramic windows and lounge seating',
        caption: 'Sunlit lounge nook with valley views',
      },
      {
        src: '/images/rooms/elegant-chalet-timber-craft.png',
        alt: 'Elegant Chalet wood craftsmanship and king bed',
        caption: 'Warm cedar paneling and bespoke Kashmiri furnishings',
      },
      {
        src: '/images/rooms/elegant-chalet-bathroom.png',
        alt: 'Elegant Chalet ensuite bathroom and fittings',
        caption: 'Contemporary ensuite bathroom with bespoke amenities',
      },
      {
        src: '/images/rooms/elegant-chalet-balcony.png',
        alt: 'Elegant Chalet private balcony view',
        caption: 'Private balcony gazing across Astanpora toward Dal Lake',
      },
    ],
  },
  {
    id: 'sunset-view-chalet-dal-view',
    slug: 'sunset-view-chalet-dal-view',
    name: 'Sunset View Chalet – Dal View',
    tagline: 'Signature Western Horizon & Golden Hour Dal Panorama',
    category: 'Chalet',
    maxGuests: 3,
    bedrooms: 1,
    bedType: '1 Master King Bed',
    view: 'Panoramic Golden Sunset & Dal Lake',
    sizeSqFt: 520,
    rateDisplay: 'Contact us for current rates',
    isPopular: true,
    shortDescription: 'The crown jewel of The Aurum Luxury Collection, oriented directly toward the western horizon for unforgettable golden sunsets glowing across Dal Lake.',
    fullDescription: [
      'The Sunset View Chalet – Dal View is the premier accommodation at The Aurum Luxury Collection, perched high along the Brein hillside in Astanpora. Oriented facing directly west across Dal Lake, this signature chalet frames Srinagar’s world-renowned golden hour in all its splendour.',
      'As twilight descends, watch the tranquil waters of Dal Lake transform into a glowing mirror of amber and rose, reflecting the silhouettes of gliding shikaras, traditional houseboats, and the majestic Zabarwan and Pir Panjal mountain ranges. Wide floor-to-ceiling glass doors open seamlessly to an expansive private timber viewing deck.',
      'Inside, rich deodar cedar timbers, handcrafted Kashmiri walnut furniture, bespoke handwoven fabrics, and a plush master king bed create an ambiance of refined mountain sanctuary. Complete with climate control heating, personalized host assistance, artisanal coffee facilities, and an evening sunset Kahwa ritual, every moment is curated for sublime luxury.',
    ],
    highlights: [
      'Unobstructed panoramic golden hour sunset vistas over Dal Lake',
      'Private west-facing timber viewing deck with luxury outdoor loungers',
      'Floor-to-ceiling panoramic glass framing the water and Zabarwan ranges',
      'Plush Master King bed with high thread-count luxury linens & down duvet',
      'Authentic evening Kashmiri saffron Kahwa service during sunset hour',
      'Bespoke host assistance, priority reservations & evening turndown service',
    ],
    amenities: [
      { name: 'Panoramic Dal Lake & Sunset View', icon: 'sunset' },
      { name: 'Expansive Private View Deck', icon: 'sun' },
      { name: 'Climate Control & Heating', icon: 'thermometer' },
      { name: 'High-Speed Wi-Fi', icon: 'wifi' },
      { name: 'Artisan Coffee & Sunset Kahwa', icon: 'coffee' },
      { name: 'Fully Stocked Minibar', icon: 'refrigerator' },
      { name: 'Marble Ensuite Bathroom with Rain Shower', icon: 'bath' },
      { name: 'Plush Robes & Luxury Kashmiri Toiletries', icon: 'sparkles' },
      { name: 'Personalized Concierge & Host Service', icon: 'bell' },
      { name: 'Evening Turndown Service', icon: 'shield' },
    ],
    mealPlans: ROOM_MEAL_PLANS,
    images: [
      {
        src: '/images/rooms/sunset-chalet-dal-view.jpg',
        alt: 'Sunset View Chalet – Dal View panoramic golden hour over Dal Lake with Shikaras and Zabarwan mountains',
        caption: 'Signature golden hour sunset vista over Dal Lake from Sunset View Chalet',
      },
      {
        src: '/images/rooms/sunset-chalet-master.png',
        alt: 'Sunset View Chalet Dal View bedroom facing golden western horizon',
        caption: 'Signature master bedroom with bespoke cedar woodwork and plush king bed',
      },
      {
        src: '/images/rooms/sunset-chalet-terrace.png',
        alt: 'Sunset View Chalet private viewing terrace',
        caption: 'Private viewing deck with sweeping vistas over Srinagar valley',
      },
      {
        src: '/images/rooms/sunset-chalet-panoramic-view.png',
        alt: 'Sunset View Chalet sunset horizon from private balcony',
        caption: 'Spectacular sunset reflection across Dal Lake waters',
      },
      {
        src: '/images/rooms/sunset-chalet-lounge.png',
        alt: 'Sunset View Chalet interior lounge and deodar timber walls',
        caption: 'Artisanal deodar woodwork and contemporary lounge seating',
      },
      {
        src: '/images/rooms/sunset-chalet-coffee-bar.png',
        alt: 'Sunset View Chalet dressing area and coffee bar',
        caption: 'Artisan coffee station and bespoke wardrobe',
      },
      {
        src: '/images/rooms/sunset-chalet-bathroom.png',
        alt: 'Sunset View Chalet luxury bathroom',
        caption: 'Ensuite luxury bathroom with premium fittings',
      },
    ],
  },
];
