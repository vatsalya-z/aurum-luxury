import { HOTEL_INFO } from '@/data/hotelInfo';
import { ROOMS, Room } from '@/data/rooms';
import { SITE_URL, getCanonicalUrl } from './canonical';

/**
 * Builds comprehensive Schema.org JSON-LD for The Aurum Luxury Collection.
 * Adheres strictly to Schema.org Hotel, LodgingBusiness, and LocalBusiness specifications.
 */

export function generateHotelSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Hotel', 'LodgingBusiness', 'LocalBusiness'],
    '@id': `${SITE_URL}/#hotel`,
    name: HOTEL_INFO.fullName,
    alternateName: ['The Aurum', 'The Aurum Hotel Kashmir', 'The Aurum Luxury Collection'],
    description:
      'The Aurum Luxury Collection by Stay Pattern is a 4-star boutique hotel in 23A Brein Hills, Astanpora, Srinagar, Jammu & Kashmir, offering luxury cottages, Dal View chalets, dining, and warm Kashmiri hospitality.',
    url: SITE_URL,
    logo: `${SITE_URL}/images/hero/aurum-estate-brein-hills.png`,
    image: [
      `${SITE_URL}/images/hero/aurum-estate-brein-hills.png`,
      `${SITE_URL}/images/rooms/sunset-chalet-master.png`,
      `${SITE_URL}/images/rooms/luxury-cottage-bedroom.png`,
      `${SITE_URL}/images/facilities/dining-hall-wazwan.png`,
    ],
    starRating: {
      '@type': 'Rating',
      ratingValue: '4',
      bestRating: '5',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: HOTEL_INFO.googleRating.toString(),
      reviewCount: HOTEL_INFO.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking',
    telephone: HOTEL_INFO.contact.phone,
    email: HOTEL_INFO.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: HOTEL_INFO.address.line1,
      addressLocality: HOTEL_INFO.address.city,
      addressRegion: HOTEL_INFO.address.state,
      postalCode: HOTEL_INFO.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0941256,
      longitude: 74.9056223,
    },
    hasMap: HOTEL_INFO.urls.googleMapsDirections,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    checkinTime: '14:00',
    checkoutTime: '12:00',
    parentOrganization: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Stay Pattern',
      url: 'https://www.staypattern.com',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free High-Speed Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Complimentary Private Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Individual Climate Control Heating & Cooling', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'On-site Kashmiri Restaurant', value: true },
      { '@type': 'LocationFeatureSpecification', name: '24-hour Room Service', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Dal Lake & Mountain View Balconies', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Handcrafted Timber Woodwork', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Concierge Desk & Excursion Arrangements', value: true },
    ],
    containsPlace: ROOMS.map((r) => ({
      '@type': 'HotelRoom',
      '@id': `${SITE_URL}/rooms/${r.slug}#room`,
      name: r.name,
      description: r.shortDescription,
      occupancy: {
        '@type': 'QuantitativeValue',
        maxValue: r.maxGuests,
        unitText: 'Guests',
      },
      bed: {
        '@type': 'BedDetails',
        numberOfBeds: 1,
        typeOfBed: r.bedType,
      },
      amenityFeature: r.amenities.slice(0, 8).map((a) => ({
        '@type': 'LocationFeatureSpecification',
        name: a,
        value: true,
      })),
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: HOTEL_INFO.fullName,
    description: 'Official website of The Aurum Luxury Collection by Stay Pattern, Srinagar, Kashmir.',
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: HOTEL_INFO.fullName,
      logo: `${SITE_URL}/images/hero/aurum-estate-brein-hills.png`,
    },
    inLanguage: 'en-IN',
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: HOTEL_INFO.fullName,
    alternateName: 'Stay Pattern Kashmir',
    url: SITE_URL,
    logo: `${SITE_URL}/images/hero/aurum-estate-brein-hills.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: HOTEL_INFO.contact.phone,
        contactType: 'reservations',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi', 'ks'],
      },
    ],
    sameAs: [
      HOTEL_INFO.urls.googleHotels,
      HOTEL_INFO.urls.stayPatternListing,
      HOTEL_INFO.urls.agodaListing,
      HOTEL_INFO.urls.makeMyTripListing,
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : getCanonicalUrl(item.url),
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function generateRoomSchema(room: Room) {
  const roomUrl = `${SITE_URL}/rooms/${room.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': ['HotelRoom', 'Product'],
    '@id': `${roomUrl}#room`,
    name: `${room.name} - The Aurum Luxury Collection`,
    description: room.shortDescription,
    url: roomUrl,
    image: room.images.map((img) => `${SITE_URL}${img.src}`),
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: room.maxGuests,
      unitText: 'Guests',
    },
    bed: {
      '@type': 'BedDetails',
      numberOfBeds: 1,
      typeOfBed: room.bedType,
    },
    amenityFeature: room.amenities.map((a) => ({
      '@type': 'LocationFeatureSpecification',
      name: a.name,
      value: true,
    })),
    offers: {
      '@type': 'Offer',
      url: `${roomUrl}#booking`,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'INR',
        unitCode: 'DAY',
      },
      seller: {
        '@type': 'Hotel',
        name: HOTEL_INFO.fullName,
        url: SITE_URL,
      },
    },
  };
}
