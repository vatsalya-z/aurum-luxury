export interface Facility {
  name: string;
  description: string;
  icon: string;
  image: string;
  verified: boolean;
  notes?: string;
}

export interface FacilityCategory {
  id: string;
  title: string;
  subtitle: string;
  items: Facility[];
}

export const FACILITY_CATEGORIES: FacilityCategory[] = [
  {
    id: 'room-comfort',
    title: 'Room Comfort',
    subtitle: 'Thoughtful features crafted for pure rest and relaxation in the mountains.',
    items: [
      {
        name: 'Air Conditioning & Climate Control',
        description: 'Individual heating and air conditioning units ensure year-round climate perfection.',
        icon: 'thermometer',
        image: '/images/facilities/room-climate-control-ac.jpg',
        verified: true,
      },
      {
        name: 'In-Room Coffee Maker',
        description: 'Complimentary tea and artisan coffee making setup refreshed daily.',
        icon: 'coffee',
        image: '/images/facilities/in-room-coffee-tea-maker.jpg',
        verified: true,
      },
      {
        name: 'Minibar Refreshments',
        description: 'In-room refrigeration stocked with chilled beverages, mineral water, and light refreshments.',
        icon: 'refrigerator',
        image: '/images/facilities/minibar-refreshments.jpg',
        verified: true,
      },
      {
        name: 'Private Luxury Bathrooms',
        description: 'Ensuite bathrooms with 24-hour hot water, glass rain showers, and backlit vanity mirrors.',
        icon: 'bath',
        image: '/images/facilities/private-luxury-bathroom.jpg',
        verified: true,
      },
      {
        name: 'Daily Housekeeping',
        description: 'Meticulous daily cleaning, crisp white bed linens, and fresh bath towel service.',
        icon: 'sparkles',
        image: '/images/facilities/daily-housekeeping-linen.jpg',
        verified: true,
      },
      {
        name: 'Free High-Speed Wi-Fi',
        description: 'Seamless wireless internet coverage across all guest rooms and social areas.',
        icon: 'wifi',
        image: '/images/facilities/high-speed-wifi-lounge.jpg',
        verified: true,
      },
    ],
  },
  {
    id: 'food-dining',
    title: 'Food & Dining',
    subtitle: 'Authentic Kashmiri Wazwan specialties, North Indian cuisine, and global favorites.',
    items: [
      {
        name: 'On-Site Restaurant',
        description: 'Warm Khatamband wood-crafted dining room serving Kashmiri specialties, Indian, and continental options.',
        icon: 'utensils',
        image: '/images/gallery/kashmiri-dining-hall-khatamband.jpg',
        verified: true,
      },
      {
        name: 'Complimentary Breakfast',
        description: 'Gourmet morning spread included with designated CP & MAP accommodation packages.',
        icon: 'egg-fried',
        image: '/images/facilities/complimentary-morning-breakfast.jpg',
        verified: true,
        notes: 'Included on eligible meal plans',
      },
      {
        name: '24-Hour Room Service',
        description: 'Prompt in-room dining tray delivered fresh to your cottage or chalet suite.',
        icon: 'bell',
        image: '/images/facilities/room-service-dining.jpg',
        verified: true,
      },
      {
        name: 'Buffet Dining',
        description: 'Diverse hot buffet displays arranged for morning breakfast and group dining occasions.',
        icon: 'soup',
        image: '/images/gallery/aurum-buffet-dining-spread.jpg',
        verified: true,
      },
      {
        name: 'Halal & Pure Vegetarian Options',
        description: 'Dedicated pure vegetarian dishes and 100% halal preparations crafted by our culinary team.',
        icon: 'leaf',
        image: '/images/facilities/halal-vegetarian-cuisine.jpg',
        verified: true,
      },
    ],
  },
  {
    id: 'guest-services',
    title: 'Guest Services',
    subtitle: 'Warm and proactive Kashmir hospitality ensuring every need is met seamlessly.',
    items: [
      {
        name: '24-Hour Front Desk',
        description: 'Reception team ready around the clock for late check-ins, queries, and assistance.',
        icon: 'clock',
        image: '/images/facilities/front-desk-concierge.jpg',
        verified: true,
      },
      {
        name: 'Concierge Assistance',
        description: 'Expert local recommendations, Shikara boat bookings, and personalized itinerary planning.',
        icon: 'map-pin',
        image: '/images/experience/srinagar-attractions-itinerary-guide.jpg',
        verified: true,
      },
      {
        name: 'Baggage Storage',
        description: 'Secure luggage hold for early arrivals or late flights after check-out.',
        icon: 'briefcase',
        image: '/images/facilities/baggage-luggage-storage.jpg',
        verified: true,
      },
      {
        name: 'Laundry & Pressing Service',
        description: 'Professional garment care, washing, and crisp steam pressing services.',
        icon: 'shirt',
        image: '/images/facilities/laundry-pressing-service.jpg',
        verified: true,
      },
      {
        name: 'Doctor on Call',
        description: 'Prompt medical practitioner consultation and emergency healthcare assistance when required.',
        icon: 'activity',
        image: '/images/facilities/doctor-on-call-medical.jpg',
        verified: true,
      },
    ],
  },
  {
    id: 'transportation',
    title: 'Transportation',
    subtitle: 'Smooth arrivals, seamless airport transfers, and private valley exploration.',
    items: [
      {
        name: 'Free On-Site Parking',
        description: 'Complimentary private parking for guest vehicles within the gated estate perimeter.',
        icon: 'car',
        image: '/images/facilities/estate-private-parking.jpg',
        verified: true,
      },
      {
        name: 'Airport Shuttle',
        description: 'Convenient chauffeured transfers between Sheikh ul-Alam International Airport and the estate.',
        icon: 'plane',
        image: '/images/facilities/jk-tourist-cab-kashmir.jpg',
        verified: true,
        notes: 'Pre-arranged via concierge desk',
      },
      {
        name: 'Private Car Rental',
        description: 'Chauffeured SUVs arranged for scenic day trips to Gulmarg, Pahalgam, and Sonamarg.',
        icon: 'navigation',
        image: '/images/facilities/private-car-rental-kashmir.jpg',
        verified: true,
      },
      {
        name: 'Local Area Shuttle',
        description: 'Comfortable passenger transit assistance to Dal Lake ghats, Mughal Gardens, and Boulevard Road.',
        icon: 'compass',
        image: '/images/facilities/local-area-shuttle.jpg',
        verified: true,
      },
    ],
  },
  {
    id: 'family-activities',
    title: 'Family & Activities',
    subtitle: 'Engaging recreation and curated Kashmiri experiences for all generations.',
    items: [
      {
        name: 'Children’s Activities',
        description: 'Family-friendly outdoor recreation and safe green garden spaces for children to play.',
        icon: 'smile',
        image: '/images/facilities/childrens-garden-activities.jpg',
        verified: true,
      },
      {
        name: 'Indoor Game Room',
        description: 'Cozy indoor recreation setup featuring classic wooden chess and family board games.',
        icon: 'gamepad-2',
        image: '/images/facilities/indoor-board-games-room.jpg',
        verified: true,
      },
      {
        name: 'Boutique Shopping',
        description: 'Handpicked authentic Kashmiri Pashmina shawls, Sozni embroidery, saffron, and walnut crafts.',
        icon: 'shopping-bag',
        image: '/images/facilities/kashmiri-boutique-shopping.jpg',
        verified: true,
      },
    ],
  },
];
