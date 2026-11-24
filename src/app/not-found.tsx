import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Home, Compass, Phone, ArrowRight } from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelInfo';

export const metadata: Metadata = {
  title: 'Page Not Found (404) | The Aurum Luxury Collection',
  description: 'The requested page could not be found. Explore our luxury cottages, Dal View chalets, facilities, or contact our reservations desk.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="banner banner-full-height" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <img
        src="/images/hero/aurum-luxury-estate-hero.jpg"
        alt="The Aurum Luxury Collection Estate"
        className="banner-bg"
      />
      <div className="wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: 680 }}>
        <span
          style={{
            display: 'inline-block',
            color: 'var(--gold)',
            fontSize: '0.82rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          Error 404 — Page Not Located
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: '#ffffff', marginBottom: 20 }}>
          Your Path Took an Unexpected Turn
        </h1>
        <p style={{ color: '#d0d8e8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 36 }}>
          The page you are looking for may have been relocated, updated, or does not exist.
          Let us guide you back to our serene hillside retreat in Brein Hills, Srinagar.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          <Link href="/" className="btn btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Home style={{ width: 16, height: 16 }} />
            <span>Return to Home</span>
          </Link>
          <Link href="/rooms" className="btn btn-outline-white" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Compass style={{ width: 16, height: 16 }} />
            <span>Explore Rooms & Chalets</span>
          </Link>
          <Link href="/contact" className="btn btn-outline-white" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Phone style={{ width: 16, height: 16 }} />
            <span>Contact Reservations</span>
          </Link>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: 24,
            fontSize: '0.9rem',
            color: '#a0aec0',
          }}
        >
          <span>Need immediate assistance? Speak with our 24/7 concierge at </span>
          <a href={`tel:${HOTEL_INFO.contact.phone}`} style={{ color: 'var(--gold)', fontWeight: 600 }}>
            {HOTEL_INFO.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
