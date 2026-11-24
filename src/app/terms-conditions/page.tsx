import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { HOTEL_INFO } from '@/data/hotelInfo';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedPages from '@/components/seo/RelatedPages';
import FAQSection from '@/components/FAQSection';
import FadeIn from '@/components/animations/FadeIn';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms & Conditions | The Aurum Luxury Collection Srinagar',
  description:
    'Official reservation terms, check-in policies, and guest guidelines for The Aurum Luxury Collection by Stay Pattern in Brein Hills, Srinagar.',
  path: '/terms-conditions',
  keywords: ['The Aurum reservation terms', 'check in policy Srinagar hotel', 'guest guidelines Kashmir hotel'],
  image: '/images/hero/aurum-luxury-estate-hero.jpg',
});

export default function TermsConditionsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Terms & Conditions', url: 'https://aurumhotelskashmir.com/terms-conditions' },
  ];

  return (
    <>
      <section className="banner">
        <img
          src="/images/hero/aurum-luxury-estate-hero.jpg"
          alt="The Aurum Luxury Collection Srinagar"
          className="banner-bg"
        />
        <FadeIn direction="up" className="wrap">
          <Breadcrumbs items={breadcrumbs} />
          <h1>Terms & Conditions</h1>
          <p>Reservation guidelines, guest policies, and accommodation terms.</p>
        </FadeIn>
      </section>

      <section className="section">
        <FadeIn direction="up" className="wrap" style={{ maxWidth: 840 }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: 16 }}>Reservation & Stay Terms</h2>
          <p style={{ marginBottom: 24 }}>
            Welcome to The Aurum Luxury Collection by Stay Pattern. By making an inquiry or booking a stay at our property located at 23A, Brein Hills, Astanpora, Srinagar, Jammu & Kashmir, you agree to adhere to the following terms and lodging guidelines.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>1. Check-In & Check-Out Timings</h3>
          <p style={{ marginBottom: 20 }}>
            Standard check-in begins at <strong>{HOTEL_INFO.checkIn}</strong> and check-out is required by <strong>{HOTEL_INFO.checkOut}</strong>. Early check-in and late check-out requests are subject to cottage availability on the day of travel and may incur additional tariffs.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>2. Guest Identification</h3>
          <p style={{ marginBottom: 20 }}>
            Per Government of India and local Jammu & Kashmir hospitality guidelines, all domestic guests must present a valid government-issued photo identity document (Aadhaar card, Passport, Voter ID, or Driving License) upon check-in. Foreign nationals must present a valid Passport and Indian Visa / OCI card. PAN cards are not accepted as proof of identity.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>3. Occupancy & Children Policy</h3>
          <p style={{ marginBottom: 20 }}>
            Standard cottage occupancy is 2 adults. Extra adult or child accommodations are subject to room category capacity and extra bedding charges. Children under 5 years stay complimentary when sharing existing bedding.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>4. Direct Booking & Tariff Policies</h3>
          <p style={{ marginBottom: 24 }}>
            All rates confirmed directly via our reservation desk or WhatsApp desk represent our official promotional tariffs. Tariffs are quoted inclusive of applicable goods and services taxes (GST) unless explicitly noted otherwise.
          </p>
        </FadeIn>
      </section>

      <FAQSection
        page="policies"
        title="Reservation Guidelines & Lodging Terms FAQ"
        subtitle="Important information regarding check-in timings, identification, and booking terms."
      />

      <RelatedPages
        currentPath="/contact"
        title="Continue Exploring"
        subtitle="Review our privacy policy, explore rooms, or contact reservations directly."
      />
    </>
  );
}
