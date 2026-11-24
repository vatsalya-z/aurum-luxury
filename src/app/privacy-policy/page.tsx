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
        <FadeIn direction="up" className="wrap">
          <Breadcrumbs items={breadcrumbs} />
          <h1>Privacy Policy</h1>
          <p>How we safeguard guest privacy and handle reservation information.</p>
        </FadeIn>
      </section>

      <section className="section">
        <FadeIn direction="up" className="wrap" style={{ maxWidth: 840 }}>
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
        </FadeIn>
      </section>

      <FAQSection
        page="policies"
        title="Privacy & Guest Data Security FAQ"
        subtitle="Frequently asked questions about guest data handling, WhatsApp confidentiality, and online forms."
      />

      <RelatedPages
        currentPath="/privacy-policy"
        title="Explore The Aurum Retreat"
        subtitle="Discover our rooms, verified facilities, and direct booking assistance."
      />
    </>
  );
}
