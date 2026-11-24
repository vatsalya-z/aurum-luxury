export interface TopicCluster {
  id: string;
  pillarTopic: string;
  pillarPage: string;
  description: string;
  subtopics: {
    title: string;
    path: string;
    keywords: string[];
    role: 'Pillar' | 'Sub-Page' | 'Commercial Target' | 'Trust Signal';
  }[];
}

export const CONTENT_CLUSTERS: TopicCluster[] = [
  {
    id: 'luxury-accommodation',
    pillarTopic: 'Handcrafted Luxury Living in Srinagar',
    pillarPage: '/rooms',
    description: 'Boutique mountain timber chalets and cottages overlooking Dal Lake and the Zabarwan range.',
    subtopics: [
      {
        title: 'Rooms & Luxury Chalets Overview',
        path: '/rooms',
        keywords: ['luxury chalets Srinagar', 'Dal View chalets', 'cottage stay Kashmir'],
        role: 'Pillar',
      },
      {
        title: 'Luxury Bedroom Cottage',
        path: '/rooms/luxury-bedroom-cottage',
        keywords: ['luxury bedroom cottage', 'handcrafted wooden cottage Srinagar'],
        role: 'Commercial Target',
      },
      {
        title: 'Elegant Chalet Dal View',
        path: '/rooms/elegant-chalet-dal-view',
        keywords: ['Dal view chalet Srinagar', 'private balcony chalet Dal Lake'],
        role: 'Commercial Target',
      },
      {
        title: 'Sunset View Chalet Dal View',
        path: '/rooms/sunset-view-chalet-dal-view',
        keywords: ['sunset view chalet Dal Lake', 'master chalet Srinagar'],
        role: 'Commercial Target',
      },
      {
        title: 'Authentic Photo Gallery',
        path: '/gallery',
        keywords: ['The Aurum luxury collection photos', 'cottage interior pictures'],
        role: 'Trust Signal',
      },
    ],
  },
  {
    id: 'location-and-excursions',
    pillarTopic: 'Brein Hills & Kashmir Experiences',
    pillarPage: '/experiences',
    description: 'Tranquil hillside positioning in Astanpora with swift access to Dal Lake and Mughal heritage monuments.',
    subtopics: [
      {
        title: 'Curated Srinagar Experiences & Sights',
        path: '/experiences',
        keywords: ['places to visit near Brein Hills', 'Mughal Gardens Srinagar distance', 'Dal Lake Shikara'],
        role: 'Pillar',
      },
      {
        title: 'Location Coordinates & Getting Here',
        path: '/contact',
        keywords: ['The Aurum Srinagar location', '23A Brein Hills Astanpora directions', 'airport transfer Srinagar'],
        role: 'Sub-Page',
      },
      {
        title: 'Hillside Views & Surroundings Gallery',
        path: '/gallery',
        keywords: ['Brein hills mountain views', 'Dal lake sunset photography'],
        role: 'Trust Signal',
      },
    ],
  },
  {
    id: 'hospitality-and-dining',
    pillarTopic: 'Kashmiri Hospitality & Verified Comforts',
    pillarPage: '/facilities',
    description: 'On-site Kashmiri Wazwan dining, climate-controlled comfort, vehicle parking, and attentive concierge service.',
    subtopics: [
      {
        title: 'Hotel Facilities & Verified Amenities',
        path: '/facilities',
        keywords: ['hotel amenities Srinagar', 'on-site restaurant Srinagar', 'heated hotel rooms Kashmir'],
        role: 'Pillar',
      },
      {
        title: 'Direct Reservation & Concierge Desk',
        path: '/contact',
        keywords: ['The Aurum contact desk', 'WhatsApp enquiry Kashmir hotel'],
        role: 'Commercial Target',
      },
      {
        title: 'Guest Lodging Terms & Policies',
        path: '/terms-conditions',
        keywords: ['check in check out timings Srinagar', 'guest policies Kashmir hotel'],
        role: 'Trust Signal',
      },
    ],
  },
];
