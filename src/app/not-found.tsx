import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Home, Compass, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { HOTEL_INFO } from '@/data/hotelInfo';

export const metadata: Metadata = {
  title: 'Page Not Found (404) | The Aurum Luxury Collection',
  description:
    'The requested page could not be found. Explore our luxury cottages, Dal View chalets, facilities, or contact our reservations desk.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <PageHero
      size="tall"
      image="/images/hero/aurum-luxury-estate-hero.jpg"
      alt="The Aurum Luxury Collection Estate"
      eyebrow="ERROR 404 — PAGE NOT LOCATED"
      title="Your Path Took an"
      titleHighlight="Unexpected Turn"
      subtitle="The page you are looking for may have been relocated, updated, or does not exist. Let us guide you back to our serene hillside retreat in Brein Hills, Srinagar."
      desktopPosition="center 45%"
      mobilePosition="center 40%"
    >
      <div
        className="actions"
        style={{
          display: 'flex',
          gap: 14,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 32,
          marginTop: 8,
        }}
      >
        <Link href="/" className="btn btn-gold">
          <Home style={{ width: 16, height: 16 }} />
          <span>Return to Home</span>
        </Link>
        <Link href="/rooms" className="btn btn-outline-white">
          <Compass style={{ width: 16, height: 16 }} />
          <span>Explore Rooms & Chalets</span>
        </Link>
        <Link href="/contact" className="btn btn-outline-white">
          <Phone style={{ width: 16, height: 16 }} />
          <span>Contact Reservations</span>
        </Link>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.16)',
          paddingTop: 18,
          fontSize: '0.88rem',
          color: '#cbd5e1',
          width: '100%',
          maxWidth: 520,
        }}
      >
        <span>Need immediate assistance? Speak with our 24/7 concierge at </span>
        <a href={`tel:${HOTEL_INFO.contact.phone}`} style={{ color: 'var(--gold)', fontWeight: 700 }}>
          {HOTEL_INFO.contact.phoneDisplay}
        </a>
      </div>
    </PageHero>
  );
}
