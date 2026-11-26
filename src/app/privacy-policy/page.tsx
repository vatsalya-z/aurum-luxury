import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Lock } from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelInfo';
import PageHero from '@/components/PageHero';
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
      <PageHero
        size="compact"
        image="/images/hero/aurum-luxury-estate-hero.jpg"
        alt="The Aurum Luxury Collection Srinagar"
        breadcrumbs={breadcrumbs}
        eyebrow="GUEST PRIVACY"
        title="Privacy"
        titleHighlight="Policy"
        subtitle="How we safeguard guest privacy and handle reservation information."
        desktopPosition="center 45%"
        mobilePosition="center 40%"
      />

      <section className="section">
        <FadeIn direction="up" className="wrap" style={{ maxWidth: 880 }}>
          <div className="policy-doc-card">
            <div className="policy-summary-strip">
              <div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gold-dark)', fontWeight: 700, display: 'block' }}>
                  Property
                </span>
                <strong style={{ color: 'var(--navy)', fontSize: '0.94rem' }}>{HOTEL_INFO.brand}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gold-dark)', fontWeight: 700, display: 'block' }}>
                  Data Protection
                </span>
                <strong style={{ color: 'var(--navy)', fontSize: '0.94rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Lock style={{ width: 14, height: 14, color: 'var(--gold-dark)' }} />
                  Direct Reservation Confidentiality
                </strong>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gold-dark)', fontWeight: 700, display: 'block' }}>
                  Concierge Desk
                </span>
                <Link href="/contact" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.94rem', textDecoration: 'underline' }}>
                  {HOTEL_INFO.contact.email}
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <ShieldCheck style={{ width: 22, height: 22, color: 'var(--gold-dark)' }} />
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', margin: 0 }}>Our Commitment to Guest Privacy</h2>
            </div>

            <p style={{ marginBottom: 24, fontSize: '0.98rem', lineHeight: 1.75 }}>
              The Aurum Luxury Collection by Stay Pattern ("we", "our", or "the hotel") values your trust and is committed to protecting the privacy of our guests. This Privacy Policy details the types of personal information collected through our website, booking forms, and reservation communications, and how that information is utilized and secured.
            </p>

            <div className="policy-clause">
              <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>1. Information Collected</h3>
              <p style={{ marginBottom: 14, fontSize: '0.94rem' }}>
                When you submit a stay inquiry or make a booking request through our website, we may collect:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: 20, margin: 0, color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.94rem' }}>
                <li>Contact details: Full name, telephone/WhatsApp number, and email address.</li>
                <li>Stay requirements: Intended arrival and departure dates, guest count (adults and children), preferred accommodation category, and meal plan.</li>
                <li>Special requests: Flight arrival times, dietary preferences, or accessibility accommodations.</li>
              </ul>
            </div>

            <div className="policy-clause" style={{ marginBottom: 0 }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>2. Use of Information</h3>
              <p style={{ margin: 0, fontSize: '0.94rem' }}>
                Guest information is used strictly to process reservation inquiries, communicate room availability, coordinate airport transfers, and personalize your hospitality experience during your stay in Srinagar.
              </p>
            </div>
          </div>
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
