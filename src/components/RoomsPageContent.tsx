'use client';

import React from 'react';
import { ROOMS } from '@/data/rooms';
import RoomCard from '@/components/RoomCard';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedPages from '@/components/seo/RelatedPages';
import { useBooking } from '@/components/ClientLayout';

export default function RoomsPageContent() {
  const { openBooking } = useBooking();

  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Rooms & Suites', url: 'https://aurumhotelskashmir.com/rooms' },
  ];

  return (
    <>
      {/* Page Banner */}
      <section className="banner">
        <img
          src="/images/rooms/elegant-chalet-dal-view.jpg"
          alt="Luxury Chalets and Master Bedroom Suites overlooking Dal Lake at The Aurum Srinagar"
          className="banner-bg"
        />
        <div className="wrap">
          <Breadcrumbs items={breadcrumbs} />
          <h1>Rooms & Luxury Chalets</h1>
          <p>
            Surround yourself with the natural splendour of Kashmir. Each cottage and chalet
            features handcrafted timber finishes, climate control, and tranquil mountain or Dal Lake vistas.
          </p>
        </div>
      </section>

      {/* Rooms Listing Section */}
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Distinctive Living Spaces</span>
            <h2>Select Your Preferred Accommodation</h2>
            <p>
              Whether you desire the cozy forest shelter of our Luxury Cottage or elevated panoramic horizons
              from our Dal View Chalets, every stay includes authentic hospitality and tailored meal options.
            </p>
          </div>

          <div className="rooms-grid">
            {ROOMS.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onEnquire={(name) => openBooking(name)}
              />
            ))}
          </div>

          {/* Accommodation Highlights & Policy Card */}
          <div
            style={{
              marginTop: 64,
              padding: '36px 32px',
              borderRadius: 'var(--radius)',
              background: 'var(--beige)',
              border: '1px solid var(--line)',
            }}
          >
            <h3 style={{ fontSize: '1.45rem', marginBottom: 14, color: 'var(--navy)' }}>
              Booking Guidelines & Complimentary Perks
            </h3>
            <div className="policy-grid">
              <div>
                <strong style={{ display: 'block', color: 'var(--navy)', marginBottom: 6 }}>
                  Standard Timings
                </strong>
                <p style={{ fontSize: '0.9rem' }}>
                  Check-in from 2:00 PM. Check-out until 12:00 PM. Early check-in or late checkout is subject to cottage availability.
                </p>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--navy)', marginBottom: 6 }}>
                  Flexible Meal Packages
                </strong>
                <p style={{ fontSize: '0.9rem' }}>
                  Choose from Room Only (EP), Room + Breakfast (CP), or Room + Breakfast + 1 Meal (MAP) freshly prepared in our kitchen.
                </p>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--navy)', marginBottom: 6 }}>
                  Direct Booking Promise
                </strong>
                <p style={{ fontSize: '0.9rem' }}>
                  Enquire directly through our website or WhatsApp desk for current promotional seasonal rates with no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Internal Linking */}
      <RelatedPages
        currentPath="/rooms"
        title="Enhance Your Stay"
        subtitle="Explore dining options, nearby attractions, and direct reservation assistance."
      />

      <FAQSection
        page="rooms"
        title="Rooms & Luxury Chalets FAQ"
        subtitle="Everything you need to know about our luxury cottages, Dal View chalets, and bedding options."
      />

      <CTASection variant="rooms" onOpenBooking={() => openBooking()} />
    </>
  );
}
