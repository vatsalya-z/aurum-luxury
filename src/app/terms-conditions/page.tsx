import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Clock, FileText } from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelInfo';
import PageHero from '@/components/PageHero';
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
      <PageHero
        size="compact"
        image="/images/hero/aurum-luxury-estate-hero.jpg"
        alt="The Aurum Luxury Collection Srinagar"
        breadcrumbs={breadcrumbs}
        eyebrow="LODGING GUIDELINES"
        title="Terms &"
        titleHighlight="Conditions"
        subtitle="Reservation guidelines, guest policies, and accommodation terms."
        desktopPosition="center 45%"
        mobilePosition="center 40%"
      />

      <section className="section">
        <FadeIn direction="up" className="wrap" style={{ maxWidth: 880 }}>
          <div className="policy-doc-card">
            <div className="policy-summary-strip">
              <div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gold-dark)', fontWeight: 700, display: 'block' }}>
                  Check-In
                </span>
                <strong style={{ color: 'var(--navy)', fontSize: '0.96rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Clock style={{ width: 14, height: 14, color: 'var(--gold-dark)' }} />
                  {HOTEL_INFO.checkIn}
                </strong>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gold-dark)', fontWeight: 700, display: 'block' }}>
                  Check-Out
                </span>
                <strong style={{ color: 'var(--navy)', fontSize: '0.96rem' }}>{HOTEL_INFO.checkOut}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gold-dark)', fontWeight: 700, display: 'block' }}>
                  Reservations
                </span>
                <Link href="/contact" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.94rem', textDecoration: 'underline' }}>
                  {HOTEL_INFO.contact.phoneDisplay}
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <FileText style={{ width: 22, height: 22, color: 'var(--gold-dark)' }} />
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', margin: 0 }}>Reservation & Stay Terms</h2>
            </div>

            <p style={{ marginBottom: 24, fontSize: '0.98rem', lineHeight: 1.75 }}>
              Welcome to The Aurum Luxury Collection by Stay Pattern. By making an inquiry or booking a stay at our property located at 23A, Brein Hills, Astanpora, Srinagar, Jammu & Kashmir, you agree to adhere to the following terms and lodging guidelines.
            </p>

            <div className="policy-clause">
              <h3 style={{ fontSize: '1.22rem', marginBottom: 8 }}>1. Check-In & Check-Out Timings</h3>
              <p style={{ margin: 0, fontSize: '0.94rem' }}>
                Standard check-in begins at <strong>{HOTEL_INFO.checkIn}</strong> and check-out is required by <strong>{HOTEL_INFO.checkOut}</strong>. Early check-in and late check-out requests are subject to cottage availability on the day of travel and may incur additional tariffs.
              </p>
            </div>

            <div className="policy-clause">
              <h3 style={{ fontSize: '1.22rem', marginBottom: 8 }}>2. Guest Identification</h3>
              <p style={{ margin: 0, fontSize: '0.94rem' }}>
                Per Government of India and local Jammu & Kashmir hospitality guidelines, all domestic guests must present a valid government-issued photo identity document (Aadhaar card, Passport, Voter ID, or Driving License) upon check-in. Foreign nationals must present a valid Passport and Indian Visa / OCI card. PAN cards are not accepted as proof of identity.
              </p>
            </div>

            <div className="policy-clause">
              <h3 style={{ fontSize: '1.22rem', marginBottom: 8 }}>3. Occupancy & Children Policy</h3>
              <p style={{ margin: 0, fontSize: '0.94rem' }}>
                Standard cottage occupancy is 2 adults. Extra adult or child accommodations are subject to room category capacity and extra bedding charges. Children under 5 years stay complimentary when sharing existing bedding.
              </p>
            </div>

            <div className="policy-clause" style={{ marginBottom: 0 }}>
              <h3 style={{ fontSize: '1.22rem', marginBottom: 8 }}>4. Direct Booking & Tariff Policies</h3>
              <p style={{ margin: 0, fontSize: '0.94rem' }}>
                All rates confirmed directly via our reservation desk or WhatsApp desk represent our official promotional tariffs. Tariffs are quoted inclusive of applicable goods and services taxes (GST) unless explicitly noted otherwise.
              </p>
            </div>
          </div>
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
