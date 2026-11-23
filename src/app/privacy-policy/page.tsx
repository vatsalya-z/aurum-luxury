import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { HOTEL_INFO } from '@/data/hotelInfo';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Aurum Luxury Collection Srinagar',
  description: 'Privacy policy and guest data handling practices for The Aurum Luxury Collection by Stay Pattern.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="banner">
        <img
          src="/images/hero/aurum-luxury-estate-hero.jpg"
          alt="The Aurum Luxury Collection Srinagar"
          className="banner-bg"
        />
        <div className="banner-overlay" />
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Privacy Policy</span>
          </nav>
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
            Your information is used strictly for hospitality purposes:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: 24, marginBottom: 24, color: 'var(--muted)', lineHeight: 1.8 }}>
            <li>Processing room availability checks, rate quotations, and booking confirmations.</li>
            <li>Direct communication via telephone, email, or WhatsApp regarding your stay.</li>
            <li>Arranging verified concierge services such as airport transfers or local tours upon request.</li>
            <li>Compliance with local regulatory lodging registration requirements in Srinagar, Jammu & Kashmir.</li>
          </ul>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>3. Data Protection</h3>
          <p style={{ marginBottom: 24 }}>
            We implement industry-standard physical, electronic, and administrative safeguards to secure personal information against unauthorized access, loss, or disclosure. We do not sell, rent, or trade your personal information to third parties.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>4. Contact Concerning Privacy</h3>
          <p style={{ marginBottom: 24 }}>
            If you have questions regarding this policy or wish to review, update, or request the deletion of your personal contact records, please contact our administration at:
            <br />
            <strong>Email:</strong> {HOTEL_INFO.contact.email}
            <br />
            <strong>Postal:</strong> {HOTEL_INFO.address.full}
          </p>
        </div>
      </section>
    </>
  );
}
