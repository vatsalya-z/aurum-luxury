import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  Users, Bed, Mountain, Check, ArrowRight, ShieldCheck,
  Calendar, Utensils, Sparkles, Thermometer, Wifi, Coffee,
  Refrigerator, Bath, Bell, Tv
} from 'lucide-react';
import { ROOMS, Room } from '@/data/rooms';
import BookingForm from '@/components/BookingForm';
import RoomCard from '@/components/RoomCard';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedPages from '@/components/seo/RelatedPages';
import { buildPageMetadata } from '@/lib/seo/metadata';
import RoomGalleryClient from './RoomGalleryClient';

interface RoomPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ROOMS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const room = ROOMS.find((r) => r.slug === params.slug);
  if (!room) return { title: 'Room Not Found' };

  return buildPageMetadata({
    title: `${room.name} | The Aurum Luxury Collection Srinagar`,
    description: `${room.shortDescription} Handcrafted woodwork, individual climate control, and scenic vistas in Brein Hills, Srinagar.`,
    path: `/rooms/${room.slug}`,
    keywords: [
      room.name,
      `${room.name} Srinagar`,
      'Dal View Chalet Srinagar',
      'Brein Hills luxury stay',
      'Kashmir chalet booking',
    ],
    image: room.images[0]?.src || '/images/hero/aurum-estate-brein-hills.png',
  });
}

export default function RoomDetailPage({ params }: RoomPageProps) {
  const room = ROOMS.find((r) => r.slug === params.slug);
  if (!room) notFound();

  const similarRooms = ROOMS.filter((r) => r.slug !== room.slug);

  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Rooms & Suites', url: 'https://aurumhotelskashmir.com/rooms' },
    { name: room.name, url: `https://aurumhotelskashmir.com/rooms/${room.slug}` },
  ];

  return (
    <>
      {/* Schema.org HotelRoom and Offer Structured Data */}
      <JsonLd type="Room" data={room} />

      {/* Banner */}
      <section className="banner">
        <img
          src={room.images[0].src}
          alt={`${room.name} at The Aurum Luxury Collection Srinagar`}
          className="banner-bg"
        />
        <div className="banner-overlay" />
        <div className="wrap">
          <Breadcrumbs items={breadcrumbs} />
          <h1>{room.name}</h1>
          <p>{room.tagline}</p>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="section">
        <div className="wrap">
          <div className="room-detail-split">
            {/* Left Column: Gallery & Content */}
            <div>
              {/* Interactive Room Photo Gallery */}
              <RoomGalleryClient images={room.images} roomName={room.name} />

              {/* Quick Specs Bar */}
              <div className="room-specs-grid">
                <div>
                  <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', letterSpacing: '0.06em' }}>
                    Occupancy
                  </span>
                  <strong style={{ fontSize: '1rem', color: 'var(--navy)' }}>
                    Up to {room.maxGuests} Guests
                  </strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', letterSpacing: '0.06em' }}>
                    Bed Arrangement
                  </span>
                  <strong style={{ fontSize: '1rem', color: 'var(--navy)' }}>
                    {room.bedType}
                  </strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', letterSpacing: '0.06em' }}>
                    Balcony & View
                  </span>
                  <strong style={{ fontSize: '1rem', color: 'var(--navy)' }}>
                    {room.view}
                  </strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', letterSpacing: '0.06em' }}>
                    Accommodations
                  </span>
                  <strong style={{ fontSize: '1rem', color: 'var(--navy)' }}>
                    {room.category}
                  </strong>
                </div>
              </div>

              {/* Narrative Description */}
              <div style={{ marginTop: 40, lineHeight: 1.8, color: 'var(--muted)', fontSize: '1.02rem' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: 16 }}>
                  Residence Architecture & Character
                </h2>
                {room.fullDescription.map((paragraph, idx) => (
                  <p key={idx} style={{ marginBottom: 18 }}>{paragraph}</p>
                ))}
              </div>

              {/* Highlights List */}
              <div style={{ marginTop: 36 }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: 16 }}>
                  Key Highlights
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
                  {room.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.92rem', color: 'var(--navy)' }}>
                      <Check style={{ width: 16, height: 16, color: 'var(--gold)', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Amenities */}
              <div style={{ marginTop: 48 }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: 20 }}>
                  In-Room Amenities & Finishes
                </h3>
                <div className="amenities-grid-rich">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="amenity-chip">
                      <Sparkles style={{ width: 15, height: 15, color: 'var(--gold)' }} />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Direct Booking Widget */}
            <div id="booking">
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow)',
                  padding: '32px 28px',
                  position: 'sticky',
                  top: 100,
                }}
              >
                <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: 16, marginBottom: 24 }}>
                  <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    Direct Reservation Desk
                  </span>
                  <h3 style={{ fontSize: '1.5rem', margin: '4px 0 6px', color: 'var(--navy)' }}>
                    Reserve {room.name}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--muted)', margin: 0 }}>
                    Select your travel dates for immediate assistance via WhatsApp.
                  </p>
                </div>

                <BookingForm initialRoom={room.name} isInline={true} />
              </div>

              <div
                style={{
                  marginTop: 20,
                  padding: '16px 20px',
                  background: 'var(--beige)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <ShieldCheck style={{ width: 28, height: 28, color: 'var(--gold)', flexShrink: 0 }} />
                <p style={{ fontSize: '0.84rem', margin: 0, color: 'var(--navy)' }}>
                  <strong>Best Rate Guarantee:</strong> Direct bookings via our website or concierge desk receive complimentary local travel guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Similar Room Recommendations */}
          <div style={{ marginTop: 80, borderTop: '1px solid var(--line)', paddingTop: 60 }}>
            <div className="head start">
              <span className="eyebrow">Other Living Options</span>
              <h2>You May Also Like</h2>
              <p>Explore other room and chalet configurations at The Aurum Luxury Collection.</p>
            </div>

            <div className="similar-rooms-grid">
              {similarRooms.map((sr) => (
                <RoomCard key={sr.id} room={sr} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Silo */}
      <RelatedPages
        currentPath="/rooms"
        title="Continue Planning Your Srinagar Retreat"
        subtitle="Explore dining options, nearby attractions, and direct reservation assistance."
      />

      <FAQSection
        page="rooms"
        title="Residence Accommodation FAQ"
        subtitle="Helpful details regarding in-room comforts, climate control, and reservations."
      />

      <CTASection variant="room-detail" roomName={room.name} bgImage={room.images[0]?.src} />
    </>
  );
}
