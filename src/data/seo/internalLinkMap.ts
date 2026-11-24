export interface InternalLinkItem {
  title: string;
  href: string;
  description: string;
  category: 'Residences' | 'Facilities' | 'Experiences' | 'Information';
}

export const INTERNAL_LINKS: Record<string, InternalLinkItem[]> = {
  '/': [
    {
      title: 'Rooms & Luxury Chalets',
      href: '/rooms',
      description: 'Handcrafted timber cottages and Dal View chalets with mountain balconies.',
      category: 'Residences',
    },
    {
      title: 'Verified Facilities',
      href: '/facilities',
      description: 'On-site dining, climate control heating, high-speed Wi-Fi, and private parking.',
      category: 'Facilities',
    },
    {
      title: 'Srinagar Sights & Escapes',
      href: '/experiences',
      description: 'Explore nearby Dal Lake, Nishat Bagh, Pari Mahal, and Shikara excursions.',
      category: 'Experiences',
    },
    {
      title: 'Property Photo Gallery',
      href: '/gallery',
      description: 'View authentic photographs of our cottages, dining hall, and panoramic views.',
      category: 'Information',
    },
    {
      title: 'Contact & Directions',
      href: '/contact',
      description: 'Direct WhatsApp desk, phone numbers, and Google Maps GPS navigation.',
      category: 'Information',
    },
  ],
  '/rooms': [
    {
      title: 'Luxury Bedroom Cottage',
      href: '/rooms/luxury-bedroom-cottage',
      description: 'Intimate forest and hillside shelter with rich wood finishes.',
      category: 'Residences',
    },
    {
      title: 'Elegant Chalet Dal View',
      href: '/rooms/elegant-chalet-dal-view',
      description: 'Elevated luxury chalet with private balcony overlooking Dal Lake.',
      category: 'Residences',
    },
    {
      title: 'Sunset View Chalet Dal View',
      href: '/rooms/sunset-view-chalet-dal-view',
      description: 'Top-tier master chalet featuring golden hour lake and mountain panoramas.',
      category: 'Residences',
    },
    {
      title: 'Hotel Dining & Amenities',
      href: '/facilities',
      description: 'Learn about our dining packages, room service, and climate control.',
      category: 'Facilities',
    },
    {
      title: 'Check Rates & Availability',
      href: '/contact',
      description: 'Inquire directly with our concierge desk for best seasonal tariffs.',
      category: 'Information',
    },
  ],
  '/facilities': [
    {
      title: 'Rooms & Suites',
      href: '/rooms',
      description: 'Pair exceptional amenities with our handcrafted cottages and chalets.',
      category: 'Residences',
    },
    {
      title: 'Curated Experiences',
      href: '/experiences',
      description: 'Discover historical Mughal gardens and Dal Lake adventures nearby.',
      category: 'Experiences',
    },
    {
      title: 'Photo Gallery',
      href: '/gallery',
      description: 'See verified pictures of our dining hall, property grounds, and chalets.',
      category: 'Information',
    },
    {
      title: 'Enquire for Bookings',
      href: '/contact',
      description: 'Speak with our reservations team for custom dining or event arrangements.',
      category: 'Information',
    },
  ],
  '/experiences': [
    {
      title: 'Our Chalets & Cottages',
      href: '/rooms',
      description: 'Relax in peaceful luxury after a day of sightseeing in Srinagar.',
      category: 'Residences',
    },
    {
      title: 'Dining & Comforts',
      href: '/facilities',
      description: 'Warm Wazwan meals and climate-controlled rooms await your return.',
      category: 'Facilities',
    },
    {
      title: 'Location & Map',
      href: '/contact',
      description: 'Inspect our proximity to Dal Lake and obtain exact GPS driving directions.',
      category: 'Information',
    },
  ],
  '/gallery': [
    {
      title: 'View Room Options',
      href: '/rooms',
      description: 'Compare layouts and features of each cottage and chalet.',
      category: 'Residences',
    },
    {
      title: 'Facilities Overview',
      href: '/facilities',
      description: 'Detailed specifications for parking, heating, Wi-Fi, and dining.',
      category: 'Facilities',
    },
    {
      title: 'Reserve Your Dates',
      href: '/contact',
      description: 'Confirm current rates directly through our reservation desk.',
      category: 'Information',
    },
  ],
  '/contact': [
    {
      title: 'Explore Accommodations',
      href: '/rooms',
      description: 'Select your preferred cottage or chalet before sending your query.',
      category: 'Residences',
    },
    {
      title: 'View Facilities',
      href: '/facilities',
      description: 'Everything provided during your stay at The Aurum.',
      category: 'Facilities',
    },
    {
      title: 'Srinagar Attractions Guide',
      href: '/experiences',
      description: 'Plan your itinerary with distances from our Brein Hills retreat.',
      category: 'Experiences',
    },
  ],
};
