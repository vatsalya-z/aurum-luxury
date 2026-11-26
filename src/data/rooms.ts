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
        src: '/images/rooms/luxury-cottage-bathroom.png',
        alt: 'Luxury Bedroom Cottage master king bed with channel-tufted headboard and warm wood flooring at The Aurum Srinagar',
        caption: 'Master king bedroom featuring bespoke wainscoting, plush linens, and garden-facing armchair',
      },
      {
        src: '/images/rooms/luxury-cottage-vanity.png',
        alt: 'Luxury Bedroom Cottage arched garden window seating nook and tea station',
        caption: 'Sunlit arched window sitting nook with velvet armchairs and in-room refreshment console',
      },
      {
        src: '/images/rooms/luxury-cottage-interior.png',
        alt: 'Luxury Bedroom Cottage spacious interior layout with wardrobe and entertainment console',
        caption: 'Spacious cottage layout with coffered ceiling, wardrobe, and climate control',
      },
      {
        src: '/images/rooms/luxury-cottage-seating.png',
        alt: 'Luxury Bedroom Cottage travertine marble ensuite bathroom with frameless glass rain shower',
        caption: 'Designer travertine ensuite bathroom with 24-hour hot rain shower and backlit mirror',
      },
      {
        src: '/images/rooms/luxury-cottage-bedroom.png',
        alt: 'Illuminated evening courtyard and hillside cottages against the Zabarwan mountains',
        caption: 'Tranquil Brein Hills courtyard illuminated against the misty Zabarwan pine slopes',
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
        src: '/images/rooms/elegant-chalet-lounge.png',
        alt: 'Elegant Chalet – Dal View vaulted pine A-frame master suite with open balcony doors overlooking Dal Lake',
        caption: 'Soaring Kashmiri pine A-frame master bedroom opening directly onto Dal Lake and valley vistas',
      },
      {
        src: '/images/rooms/elegant-chalet-timber-craft.png',
        alt: 'Elegant Chalet – Dal View king bed and panoramic picture window framing Dal Lake and Brein Hills',
        caption: 'Elevated panoramic window framing shimmering Dal Lake and emerald Brein Hills slopes',
      },
      {
        src: '/images/rooms/elegant-chalet-balcony.png',
        alt: 'Elegant Chalet herringbone cedar bedroom opening to private sunlit mountain balcony',
        caption: 'Herringbone cedar woodwork and private balcony doors facing the mountain ridge',
      },
      {
        src: '/images/gallery/aurum-chalet-timber-bedroom-suite.jpg',
        alt: 'Handcrafted aromatic pine chalet interior with apex skylight and lounge chair',
        caption: 'Warm natural pine cladding, skylight apex, and tranquil reading corner',
      },
      {
        src: '/images/gallery/aurum-chalet-loft-bedroom.jpg',
        alt: 'Elegant Chalet vaulted timber bedroom with channel-tufted king bed and herringbone accent wall',
        caption: 'Vaulted timber ceiling with bespoke herringbone woodwork and plush king bedding',
      },
      {
        src: '/images/rooms/elegant-chalet-bathroom.png',
        alt: 'Elegant Chalet contemporary marble ensuite bathroom with glass shower enclosure',
        caption: 'Contemporary marble ensuite bathroom with glass rain shower and fine toiletries',
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
        src: '/images/rooms/sunset-chalet-emerald-suite.jpg',
        alt: 'Sunset View Chalet – Dal View master bedroom suite with tufted emerald headboard, coffered ceiling, and panoramic balcony',
        caption: 'Signature Master Chalet Suite with coffered cedar timbers, private lounge, and panoramic balcony',
      },
      {
        src: '/images/facilities/breakfast-dining-spread.png',
        alt: 'Sunset View Chalet coffered suite living area and panoramic glass wall overlooking Dal Lake',
        caption: 'Private lounge parlor and panoramic glass wall framing shimmering Dal Lake vistas',
      },
      {
        src: '/images/rooms/sunset-chalet-lounge.png',
        alt: 'Sunset View Chalet soaring A-frame floor-to-ceiling glass doors opening onto the sunset viewing deck and Dal Lake',
        caption: 'Floor-to-ceiling A-frame glass facade opening seamlessly onto the western sunset terrace',
      },
      {
        src: '/images/rooms/sunset-chalet-terrace.png',
        alt: 'Sunset View Chalet expansive private veranda and landscaped hillside sunset terrace',
        caption: 'Expansive west-facing viewing veranda overlooking landscaped gardens and the Srinagar valley',
      },
      {
        src: '/images/rooms/sunset-chalet-bathroom.png',
        alt: 'Sunset View Chalet A-frame upper observation loft with Kashmiri carpet overlooking Dal Lake',
        caption: 'Upper A-frame observation loft dressed with artisanal Kashmiri carpet facing Dal Lake',
      },
      {
        src: '/images/rooms/sunset-chalet-coffee-bar.png',
        alt: 'Sunset View Chalet bespoke timber loft staircase, coffee bar, and emerald king bed',
        caption: 'Handcrafted duplex timber staircase, minibar & artisan coffee station',
      },
      {
        src: '/images/gallery/aurum-sunset-chalet-balcony-view.jpg',
        alt: 'Sunset View Chalet sunlit coffered suite and floor-to-ceiling glass balcony doors',
        caption: 'Sunlit perspective across the master suite toward the private valley balcony',
      },
    ],
  },
];
