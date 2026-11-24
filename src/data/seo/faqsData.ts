export interface FAQData {
  id: string;
  category: 'General' | 'Rooms' | 'Facilities' | 'Experiences' | 'Gallery' | 'Location' | 'Policies';
  question: string;
  answer: string;
}

export const PAGE_FAQS: Record<string, FAQData[]> = {
  home: [
    {
      id: 'home-1-location-hills',
      category: 'General',
      question: 'Where is The Aurum Luxury Collection located in Srinagar?',
      answer: 'The Aurum Luxury Collection is located at 23A, Brein Hills, Astanpora, Srinagar, Jammu & Kashmir 191121. The estate sits elevated on the gentle slopes of the Zabarwan range, offering peaceful mountain seclusion and panoramic Dal Lake views while remaining only a 10–12 minute drive from the Boulevard.',
    },
    {
      id: 'home-2-unique-features',
      category: 'General',
      question: 'What makes The Aurum’s chalets and cottages unique in Kashmir?',
      answer: 'Our accommodations are handcrafted using authentic Kashmiri deodar and pine timber architecture, combining rustic alpine charm with contemporary luxury. Guests enjoy individual climate-controlled heating/cooling, en-suite bathrooms, and private balconies framing Dal Lake and mountain horizons.',
    },
    {
      id: 'home-3-distance-attractions',
      category: 'General',
      question: 'How far is the hotel from Dal Lake, Mughal Gardens, and Srinagar Airport?',
      answer: 'The property is approximately 4.5 km from the main Boulevard of Dal Lake (10–12 minutes), 5.2 km from Nishat Bagh, 6 km from the Indira Gandhi Memorial Tulip Garden, 8.5 km from Pari Mahal, and 22 km (~45 minutes) from Sheikh ul-Alam International Airport Srinagar (SXR).',
    },
    {
      id: 'home-4-dining-options',
      category: 'General',
      question: 'What dining options and Kashmiri Wazwan preparations are available on-site?',
      answer: 'We feature an on-site dining hall offering authentic multi-course Kashmiri Wazwan (Rogan Josh, Gushtaba, Rista, Kashmiri Pulao), North Indian specialties, Continental options, and pure vegetarian dishes. 24-hour room service is also available directly to your cottage.',
    },
    {
      id: 'home-5-heating-cooling',
      category: 'General',
      question: 'Do the rooms have individual heating for winter and air-conditioning for summer?',
      answer: 'Yes, every luxury cottage and chalet is equipped with individual climate control heat pumps and air conditioning to ensure cozy warmth during snowfall in winter and cool comfort throughout sunny summer days.',
    },
    {
      id: 'home-6-direct-booking',
      category: 'General',
      question: 'How can I book directly with the hotel for the best seasonal tariffs?',
      answer: 'You can submit an enquiry directly through our website booking form, which connects immediately to our official WhatsApp reservation desk (+91 94190 00000). Direct bookings receive our best guaranteed seasonal tariffs with zero third-party OTA surcharges.',
    },
  ],

  rooms: [
    {
      id: 'rooms-1-cottage-vs-chalet',
      category: 'Rooms',
      question: 'What is the difference between the Luxury Cottage, Elegant Chalet, and Sunset View Chalet?',
      answer: 'The Luxury Bedroom Cottage offers a ground-level cozy forest and garden shelter with timber interiors. The Elegant Chalet is an elevated accommodation with a private balcony facing Dal Lake. The Sunset View Chalet is our premier top-tier master chalet featuring floor-to-ceiling windows and commanding golden hour sunset panoramas over Dal Lake.',
    },
    {
      id: 'rooms-2-private-balcony',
      category: 'Rooms',
      question: 'Do the chalets feature private balconies with direct views of Dal Lake?',
      answer: 'Yes, both the Elegant Chalet Dal View and the Sunset View Chalet feature private timber balconies specifically positioned to overlook the waters of Dal Lake and the surrounding Zabarwan hills.',
    },
    {
      id: 'rooms-3-max-occupancy',
      category: 'Rooms',
      question: 'What is the maximum guest capacity and extra bedding policy per room?',
      answer: 'Each cottage comfortably accommodates 2 adults and 1 child, or up to 3 adults with an extra comfortable rollaway bed arrangement. Children under 5 stay complimentary when sharing existing king-size bedding.',
    },
    {
      id: 'rooms-4-heating-hot-water',
      category: 'Rooms',
      question: 'Are the rooms equipped with heating, hot water, and climate control?',
      answer: 'Yes, all residences feature individual high-efficiency climate control heating, heavy thermal blankets, electric kettles, and continuous 24-hour hot water in all en-suite bathrooms.',
    },
    {
      id: 'rooms-5-meal-plans',
      category: 'Rooms',
      question: 'What meal plan packages are available with room reservations?',
      answer: 'Guests can choose from Room Only (European Plan - EP), Room + Breakfast (Bed & Breakfast - CP), or Room + Breakfast + 1 Major Meal (Modified American Plan - MAP) prepared fresh in our kitchen.',
    },
    {
      id: 'rooms-6-room-service',
      category: 'Rooms',
      question: 'Are daily housekeeping and in-room dining services provided?',
      answer: 'Yes, dedicated daily housekeeping is provided every morning, and 24-hour in-room dining allows you to enjoy meals, evening tea (Kahwa), and snacks in the comfort of your room or balcony.',
    },
  ],

  facilities: [
    {
      id: 'facilities-1-restaurant-menu',
      category: 'Facilities',
      question: 'Is there an on-site dining hall and what cuisines are served?',
      answer: 'Yes, our on-site dining hall serves freshly prepared meals daily. Guests can enjoy traditional Kashmiri Wazwan specialties, homestyle North Indian curries, fresh tandoor breads, pure vegetarian preparations, and continental breakfasts.',
    },
    {
      id: 'facilities-2-parking',
      category: 'Facilities',
      question: 'Is secure on-site vehicle parking available for private cars and taxis?',
      answer: 'Yes, The Aurum provides complimentary, secure private parking within the estate perimeter, suitable for personal SUVs, self-drive vehicles, and hired tourist taxis with 24/7 on-site security.',
    },
    {
      id: 'facilities-3-wifi-speed',
      category: 'Facilities',
      question: 'Is high-speed Wi-Fi accessible throughout the property and in guest rooms?',
      answer: 'Yes, complimentary high-speed optical fiber Wi-Fi covers all guest chalets, the dining hall, and outdoor garden seating areas, supporting remote work, video calls, and streaming.',
    },
    {
      id: 'facilities-4-airport-transfers',
      category: 'Facilities',
      question: 'Can the hotel arrange private airport transfers to and from Srinagar Airport (SXR)?',
      answer: 'Yes, our concierge arranges comfortable private airport transfers in sanitized, chauffeured vehicles between Sheikh ul-Alam International Airport (22 km) and the property for a nominal pre-arranged fee.',
    },
    {
      id: 'facilities-5-power-backup',
      category: 'Facilities',
      question: 'Does the property feature power backup for uninterrupted heating and electricity?',
      answer: 'Yes, The Aurum is equipped with robust heavy-duty generator power backup to guarantee continuous electricity, warm lighting, water heating, and room comfort even during unpredictable mountain weather.',
    },
    {
      id: 'facilities-6-no-pool-spa',
      category: 'Facilities',
      question: 'Are swimming pools, fitness gyms, or commercial spas available at The Aurum?',
      answer: 'In keeping with our intimate, quiet mountain sanctuary ethos in Brein Hills, we do not feature a swimming pool, fitness gym, or commercial spa. We dedicate our facilities to authentic chalet lodging, tranquil scenery, and personalized Kashmiri hospitality.',
    },
  ],

  experiences: [
    {
      id: 'experiences-1-dal-lake-shikara',
      category: 'Experiences',
      question: 'How close is The Aurum to Dal Lake and can Shikara boat rides be arranged?',
      answer: 'The Aurum is situated just 4.5 km from the main Boulevard of Dal Lake (~10 minutes by car). Our concierge team can arrange private Shikara rides at sunrise or sunset to the floating vegetable markets, Char Chinar, and quiet lotus gardens.',
    },
    {
      id: 'experiences-2-mughal-gardens',
      category: 'Experiences',
      question: 'What are the best Mughal Gardens nearby and what are their driving distances?',
      answer: 'The historic Mughal Gardens are situated within a short drive from Brein Hills: Nishat Bagh (5.2 km, ~12 mins), Indira Gandhi Memorial Tulip Garden (6 km, ~15 mins), Chashme Shahi (7.2 km, ~15 mins), and Shalimar Bagh (8.5 km, ~18 mins).',
    },
    {
      id: 'experiences-3-tulip-season',
      category: 'Experiences',
      question: 'When is the best time to visit the Indira Gandhi Memorial Tulip Garden from the hotel?',
      answer: 'The Tulip Garden blooms annually between late March and mid-April. Staying at The Aurum in Brein Hills places you just 6 km away, allowing you to arrive early in the morning before tourist traffic builds up along Boulevard Road.',
    },
    {
      id: 'experiences-4-day-trips',
      category: 'Experiences',
      question: 'Can the concierge desk arrange day excursions to Gulmarg, Pahalgam, and Sonamarg?',
      answer: 'Yes, our travel desk arranges full-day private excursions with experienced local mountain drivers to Gulmarg (54 km, Gondola rides & skiing), Pahalgam (92 km, Betaab Valley & Aru), and Sonamarg (84 km, Thajiwas Glacier).',
    },
    {
      id: 'experiences-5-local-crafts',
      category: 'Experiences',
      question: 'What local cultural and craft markets are located near Brein Hills and Srinagar?',
      answer: 'Lal Chowk, Polo View High Street, and the Old City (Zaina Kadal) are within a 20–25 minute drive, where you can explore authentic Pashmina shawls, hand-knotted Kashmiri silk carpets, carved walnut woodwork, paper-mâché, and saffron.',
    },
    {
      id: 'experiences-6-local-cabs',
      category: 'Experiences',
      question: 'Is local transport or private cab rental easily accessible from the property?',
      answer: 'Yes, private tourist cabs and sightseeing vehicles can be scheduled on-demand directly through our front desk for airport pickups, local garden tours, or customized multi-day itineraries across Jammu & Kashmir.',
    },
  ],

  gallery: [
    {
      id: 'gallery-1-authenticity',
      category: 'Gallery',
      question: 'Are the photographs shown in the gallery authentic and taken on-site at The Aurum?',
      answer: 'Yes, 100% of the photographs displayed in our gallery and room pages are genuine photographs of The Aurum Luxury Collection estate, our actual cottages, guest bedrooms, en-suite bathrooms, and the surrounding Brein Hills scenery.',
    },
    {
      id: 'gallery-2-actual-views',
      category: 'Gallery',
      question: 'Do the gallery photographs show the actual views from the Dal View Chalets?',
      answer: 'Yes, the lake and mountain photographs were captured directly from the private timber balconies and panoramic windows of our Elegant Chalet and Sunset View Chalet overlooking Dal Lake and the Zabarwan range.',
    },
    {
      id: 'gallery-3-photography-policy',
      category: 'Gallery',
      question: 'Can guests take personal photographs or drone shots on the property?',
      answer: 'Guests are warmly welcomed to take personal photos and vacation videos across the grounds. However, commercial shoots or drone flights require prior written coordination with management and compliance with local Srinagar district civil aviation regulations.',
    },
    {
      id: 'gallery-4-seasonal-appearance',
      category: 'Gallery',
      question: 'How does the property appearance change across seasons (Summer vs. Winter Snow)?',
      answer: 'In spring and summer (April–September), the estate is lush green with blooming flowers and vibrant Dal Lake reflections. In late autumn (October–November), the chinars turn golden bronze. In winter (December–February), the property transforms into a snow-covered wonderland.',
    },
    {
      id: 'gallery-5-walkthrough-videos',
      category: 'Gallery',
      question: 'Can I request additional photos or video walkthroughs of a specific cottage before booking?',
      answer: 'Yes, our reservations team will gladly share current smartphone video walkthroughs and additional detailed photos of any specific cottage or chalet via WhatsApp (+91 94190 00000) prior to your reservation.',
    },
    {
      id: 'gallery-6-dining-facilities-photos',
      category: 'Gallery',
      question: 'Are photographs of the dining hall, bathrooms, and room amenities up-to-date?',
      answer: 'Yes, all images reflect the current, active interior design and furnishings of our guest rooms, bathrooms, and dining hall.',
    },
  ],

  contact: [
    {
      id: 'contact-1-address-coords',
      category: 'Location',
      question: 'What is the exact physical address and GPS coordinates of The Aurum Luxury Collection?',
      answer: 'Our address is 23A, Brein Hills, Astanpora, Srinagar, Jammu and Kashmir 191121, India. GPS Coordinates: Latitude 34.0941256 N, Longitude 74.9056223 E.',
    },
    {
      id: 'contact-2-maps-navigation',
      category: 'Location',
      question: 'How do I navigate to the hotel using Google Maps or GPS?',
      answer: 'Search for "The Aurum Luxury Collection by Stay Pattern" on Google Maps or click the "Get Directions" buttons on our website. The route leads smoothly via Boulevard Road and Brein Hill road directly to our gated entrance.',
    },
    {
      id: 'contact-3-airport-route',
      category: 'Location',
      question: 'What is the fastest route from Sheikh ul-Alam International Airport Srinagar (SXR)?',
      answer: 'The drive typically takes 40–50 minutes (22 km) via Airport Road, Dalgate, and Boulevard Road toward Brein. Our concierge can schedule a direct chauffeured airport pickup upon request.',
    },
    {
      id: 'contact-4-fastest-contact',
      category: 'Location',
      question: 'What is the easiest way to contact the reservation desk for immediate assistance?',
      answer: 'Our WhatsApp desk at +91 94190 00000 operates 24/7 and is the fastest way to check real-time cottage availability, request tariffs, or get navigation assistance while en route.',
    },
    {
      id: 'contact-5-modify-enquiry',
      category: 'Location',
      question: 'Can I modify travel dates or special requests after sending an enquiry via WhatsApp?',
      answer: 'Yes, because our booking workflow connects directly to our reservations team on WhatsApp, you can easily message us to adjust your dates, guest count, or meal preferences at any time.',
    },
    {
      id: 'contact-6-desk-hours',
      category: 'Location',
      question: 'Are the front desk and concierge operational 24 hours a day?',
      answer: 'Yes, our on-site manager and concierge team are available 24/7 to welcome late-night arrivals, provide assistance, and handle in-room dining orders.',
    },
  ],

  policies: [
    {
      id: 'policies-1-timings',
      category: 'Policies',
      question: 'What are the check-in and check-out timings at The Aurum?',
      answer: 'Standard check-in begins at 2:00 PM and check-out is required by 12:00 PM. Early check-in or late checkout requests are accommodated whenever possible, subject to cottage availability on the travel date.',
    },
    {
      id: 'policies-2-id-proof',
      category: 'Policies',
      question: 'What valid government identity documents are required upon arrival?',
      answer: 'In compliance with Government of India and local J&K hospitality regulations, domestic guests must present a valid Aadhaar card, Passport, Voter ID, or Driving License. Foreign nationals must present an original Passport and Indian Visa / OCI card. PAN cards are not accepted as valid proof of identity.',
    },
    {
      id: 'policies-3-child-policy',
      category: 'Policies',
      question: 'What is the policy regarding children and infants sharing a cottage?',
      answer: 'Children under 5 years stay complimentary when sharing existing bedding with parents. For older children or additional adults, an extra rollaway bed can be added for a nominal tariff.',
    },
    {
      id: 'policies-4-rescheduling',
      category: 'Policies',
      question: 'Can reservations be rescheduled due to flight delays or road closures?',
      answer: 'Yes, we recognize that mountain travel and winter flight schedules can fluctuate. We offer flexible date rescheduling options whenever weather or flight disruptions occur, subject to advance notice.',
    },
    {
      id: 'policies-5-privacy-protection',
      category: 'Policies',
      question: 'How is guest contact and reservation information protected and kept private?',
      answer: 'We maintain strict privacy standards. Your phone number, email address, and stay details are never sold, rented, or distributed to third-party telemarketers. Information is used solely to facilitate your stay.',
    },
    {
      id: 'policies-6-pet-policy',
      category: 'Policies',
      question: 'Are pets permitted on the property premises?',
      answer: 'To preserve hypoallergenic comfort and a quiet sanctuary atmosphere for all guests, pets are generally not permitted inside the cottages and chalets. Please contact reservations prior to travel if you have specialized assistance animal requirements.',
    },
  ],
};

// Flattened list for global use or fallbacks
export const ALL_FAQS: FAQData[] = Object.values(PAGE_FAQS).flat();
