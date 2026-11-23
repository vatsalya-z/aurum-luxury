export interface Facility {
  name: string;
  description: string;
  icon: string;
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
        verified: true,
      },
      {
        name: 'In-Room Coffee Maker',
        description: 'Complimentary tea and artisan coffee making setup refreshed daily.',
        icon: 'coffee',
        verified: true,
      },
      {
        name: 'Minibar Refreshments',
        description: 'In-room refrigeration stocked with cold beverages and light snacks.',
        icon: 'refrigerator',
        verified: true,
      },
      {
        name: 'Private Luxury Bathrooms',
        description: 'Ensuite bathrooms with 24-hour hot water, rain showers, and premium bath amenities.',
        icon: 'bath',
        verified: true,
      },
      {
        name: 'Daily Housekeeping',
        description: 'Meticulous daily cleaning and evening linen freshening service.',
        icon: 'sparkles',
        verified: true,
      },
      {
        name: 'Free High-Speed Wi-Fi',
        description: 'Seamless wireless internet coverage across all guest rooms and social areas.',
        icon: 'wifi',
        verified: true,
      },
    ],
  },
  {
    id: 'food-dining',
    title: 'Food & Dining',
    subtitle: 'Authentic Kashmiri wazwan specialties, North Indian cuisine, and global favorites.',
    items: [
      {
        name: 'On-Site Restaurant',
        description: 'Warm indoor dining room serving traditional Kashmiri specialties, Indian, and continental options.',
        icon: 'utensils',
        verified: true,
      },
      {
        name: 'Complimentary Breakfast',
        description: 'Gourmet morning spread included with designated CP & MAP accommodation packages.',
        icon: 'egg-fried',
        verified: true,
        notes: 'Included on eligible meal plans',
      },
      {
        name: '24-Hour Room Service',
        description: 'Prompt in-room dining delivered fresh to your cottage or chalet terrace.',
        icon: 'bell',
        verified: true,
      },
      {
        name: 'Buffet Dining',
        description: 'Diverse buffet displays arranged for breakfast and group dining occasions.',
        icon: 'soup',
        verified: true,
      },
      {
        name: 'Halal & Pure Vegetarian Options',
        description: 'Dedicated vegetarian and halal preparations prepared by our culinary team.',
        icon: 'leaf',
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
        verified: true,
      },
      {
        name: 'Concierge Assistance',
        description: 'Expert local recommendations, Shikara boat bookings, and itinerary planning.',
        icon: 'map-pin',
        verified: true,
      },
      {
        name: 'Baggage Storage',
        description: 'Secure luggage hold for early arrivals or late flights after check-out.',
        icon: 'briefcase',
        verified: true,
      },
      {
        name: 'Laundry & Pressing Service',
        description: 'Professional laundry and steam pressing services for guest garments.',
        icon: 'shirt',
        verified: true,
      },
      {
        name: 'Doctor on Call',
        description: 'Immediate medical practitioner contact available whenever required.',
        icon: 'activity',
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
        description: 'Complimentary private parking for guest vehicles within the property perimeter.',
        icon: 'car',
        verified: true,
      },
      {
        name: 'Airport Shuttle',
        description: 'Convenient transfers between Sheikh ul-Alam International Airport and the hotel.',
        icon: 'plane',
        verified: true,
        notes: 'Additional charge applies',
      },
      {
        name: 'Private Car Rental',
        description: 'Chauffeured car hire arrangements for day trips to Gulmarg, Pahalgam, and Sonamarg.',
        icon: 'navigation',
        verified: true,
      },
      {
        name: 'Local Area Shuttle',
        description: 'Local point-to-point transit assistance to Dal Lake ghats and Boulevard road.',
        icon: 'compass',
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
        description: 'Family-friendly amenities and open garden spaces for children to play safely.',
        icon: 'smile',
        verified: true,
      },
      {
        name: 'Indoor Game Room',
        description: 'Cozy indoor recreation space equipped with board games and entertainment.',
        icon: 'gamepad-2',
        verified: true,
      },
      {
        name: 'Boutique Shopping',
        description: 'Handpicked authentic Kashmiri Pashmina shawls, saffron, dry fruits, and walnut woodwork.',
        icon: 'shopping-bag',
        verified: true,
      },
    ],
  },
];
