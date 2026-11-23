import React from 'react';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { ROOMS } from '@/data/rooms';

interface JsonLdProps {
  type: 'Hotel' | 'BreadcrumbList' | 'FAQPage';
  data?: any;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  let schema: any = {};

  if (type === 'Hotel') {
    schema = {
      '@context': 'https://schema.org',
      '@type': ['Hotel', 'LodgingBusiness'],
      name: HOTEL_INFO.fullName,
      alternateName: 'The Aurum Hotel Kashmir',
      description:
        'The Aurum Luxury Collection by Stay Pattern is a 4-star boutique hotel in 23A Brein Hills, Astanpora, Srinagar, Jammu & Kashmir, offering luxury cottages, Dal View chalets, dining, and warm Kashmiri hospitality.',
      url: 'https://aurumhotelskashmir.com',
      image: [
        '/images/hero/aurum-estate-brein-hills.png',
        '/images/rooms/sunset-chalet-master.png',
        '/images/rooms/luxury-cottage-bedroom.png',
      ],
      starRating: {
        '@type': 'Rating',
        ratingValue: '4',
      },
      priceRange: '₹₹₹',
      telephone: HOTEL_INFO.contact.phone,
      email: HOTEL_INFO.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '23A, Brein Hills, Astanpora',
        addressLocality: 'Srinagar',
        addressRegion: 'Jammu and Kashmir',
        postalCode: '191121',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '34.0955',
        longitude: '74.8722',
      },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'On-site Restaurant', value: true },
        { '@type': 'LocationFeatureSpecification', name: '24-hour Room Service', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Dal Lake View Chalets', value: true },
      ],
      checkinTime: '14:00',
      checkoutTime: '12:00',
      containsPlace: ROOMS.map((r) => ({
        '@type': 'HotelRoom',
        name: r.name,
        description: r.shortDescription,
        occupancy: {
          '@type': 'QuantitativeValue',
          maxValue: r.maxGuests,
        },
        bed: {
          '@type': 'BedDetails',
          numberOfBeds: 1,
          typeOfBed: r.bedType,
        },
      })),
    };
  } else if (type === 'BreadcrumbList') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.map((item: { name: string; url: string }, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  } else if (type === 'FAQPage') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: (data || []).map((faq: { question: string; answer: string }) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
