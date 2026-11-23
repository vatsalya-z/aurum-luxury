import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { HOTEL_INFO } from '@/data/hotelInfo';

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Aurum Luxury Collection Srinagar',
  description: 'Reservation terms, check-in policies, and guest guidelines for The Aurum Luxury Collection by Stay Pattern.',
};

export default function TermsConditionsPage() {
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
            <span>Terms & Conditions</span>
          </nav>
          <h1>Terms & Conditions</h1>
          <p>Reservation guidelines, guest policies, and accommodation terms.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 840 }}>
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
            The standard maximum occupancy per room or chalet is 3 guests. Children under 5 years stay complimentary when sharing existing bedding with parents. Extra rollaway beds or bedding for additional occupants are subject to applicable extra-person tariffs.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>4. Meal Plans</h3>
          <p style={{ marginBottom: 20 }}>
            Meal plans booked (EP - Room Only, CP - Room + Breakfast, MAP - Room + Breakfast + 1 Meal) are applicable exclusively in our on-site restaurant or through room service in designated service hours.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: 32, marginBottom: 12 }}>5. Property Regulations</h3>
          <p style={{ marginBottom: 24 }}>
            In keeping with our peaceful mountain environment in Brein Hills, pets are not permitted on the premises. Loud music or outdoor noise after 10:00 PM is restricted to maintain a quiet atmosphere for all guests.
          </p>
        </div>
      </section>
    </>
  );
}
