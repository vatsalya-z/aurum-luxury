import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { HOTEL_INFO } from '@/data/hotelInfo';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedPages from '@/components/seo/RelatedPages';
import FAQSection from '@/components/FAQSection';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy | The Aurum Luxury Collection Srinagar',
  description:
    'Privacy policy, guest data handling practices, and reservation privacy guidelines for The Aurum Luxury Collection by Stay Pattern in Srinagar, Kashmir.',
  path: '/privacy-policy',
  keywords: ['The Aurum privacy policy', 'guest data protection Kashmir hotel'],
  image: '/images/hero/aurum-luxury-estate-hero.jpg',
});

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Privacy Policy', url: 'https://aurumhotelskashmir.com/privacy-policy' },
  ];

  return (
    <>
      <section className="banner">
        <img
          src="/images/hero/aurum-luxury-estate-hero.jpg"
          alt="The Aurum Luxury Collection Srinagar"
          className="banner-bg"
        />
        <div className="wrap">
          <Breadcrumbs items={breadcrumbs} />
          <h1>Privacy Policy</h1>
          <p>How we safeguard guest privacy and handle reservation information.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 840 }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: 16 }}>Our Commitment to Guest Privacy</h2>
          <p style={{ marginBottom: 24 }}>
            The Aurum Luxury Collection by Stay Pattern ("we", "our", or "the hotel") values your trust and is committed to protecting the privacy of our guests. This Privacy Policy details the types of personal information collected through our website, booking forms, and reservation communications, and how that information is utilized and secured.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>1. Information Collected</h3>
          <p style={{ marginBottom: 20 }}>
            When you submit a stay inquiry or make a booking request through our website, we may collect:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: 24, marginBottom: 24, color: 'var(--muted)', lineHeight: 1.8 }}>
            <li>Contact details: Full name, telephone/WhatsApp number, and email address.</li>
            <li>Stay requirements: Intended arrival and departure dates, guest count (adults and children), preferred accommodation category, and meal plan.</li>
            <li>Special requests: Flight arrival times, dietary preferences, or accessibility accommodations.</li>
          </ul>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>2. Use of Information</h3>
          <p style={{ marginBottom: 20 }}>
            Guest information is used strictly to process reservation inquiries, communicate room availability, coordinate airport transfers, and personalize your hospitality experience during your stay in Srinagar.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>3. Data Protection & Non-Disclosure</h3>
          <p style={{ marginBottom: 20 }}>
            We do not sell, rent, or trade guest personal information with third-party marketing companies. Data is shared exclusively with authorized hotel staff and verified operational partners (such as private transfer drivers) strictly to fulfill your requested travel arrangements.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>4. Contact Concerning Privacy</h3>
          <p style={{ marginBottom: 24 }}>
            For questions or requests regarding your personal information, please reach out directly to our privacy desk at{' '}
            <a href={`mailto:${HOTEL_INFO.contact.email}`} style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>
              {HOTEL_INFO.contact.email}
            </a>.
          </p>
        </div>
      </section>

      <FAQSection
        page="policies"
        title="Privacy & Data Guidelines FAQ"
        subtitle="Common questions regarding guest information security and booking communications."
      />

      <RelatedPages
        currentPath="/contact"
        title="Explore The Aurum"
        subtitle="Review our guest terms, rooms, or connect directly with our reservations team."
      />
    </>
  );
}
