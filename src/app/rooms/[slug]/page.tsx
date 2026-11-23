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

  return {
    title: `${room.name} | The Aurum Luxury Collection Srinagar`,
    description: room.shortDescription,
    openGraph: {
      title: `${room.name} | The Aurum Luxury Collection`,
      description: room.shortDescription,
      images: [{ url: room.images[0].src }],
    },
  };
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
      <JsonLd type="BreadcrumbList" data={breadcrumbs} />

      {/* Banner */}
      <section className="banner">
        <img
          src={room.images[0].src}
          alt={room.name}
          className="banner-bg"
        />
        <div className="banner-overlay" />
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/rooms">Rooms & Suites</Link>
            <span className="sep">/</span>
            <span>{room.name}</span>
          </nav>
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
                    Outlook & View
                  </span>
                  <strong style={{ fontSize: '1rem', color: 'var(--navy)' }}>
                    {room.view}
                  </strong>
                </div>
                {room.sizeSqFt && (
                  <div>
                    <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', letterSpacing: '0.06em' }}>
                      Floor Space
                    </span>
                    <strong style={{ fontSize: '1rem', color: 'var(--navy)' }}>
                      ≈ {room.sizeSqFt} sq. ft
                    </strong>
                  </div>
                )}
              </div>

              {/* Full Description */}
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: '1.85rem', marginBottom: 16 }}>
                  About This Accommodation
                </h2>
                {room.fullDescription.map((p, idx) => (
                  <p key={idx} style={{ marginBottom: 16 }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Key Highlights */}
              <div style={{ marginBottom: 40 }}>
                <h3 style={{ fontSize: '1.45rem', marginBottom: 16 }}>
                  Signature Features
                </h3>
                <ul className="ticks" style={{ margin: 0 }}>
                  {room.highlights.map((h, idx) => (
                    <li key={idx}>
                      <Check />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* In-Room Amenities Grid */}
              <div style={{ marginBottom: 40 }}>
                <h3 style={{ fontSize: '1.45rem', marginBottom: 16 }}>
                  Room Facilities & Amenities
                </h3>
                <div className="room-amenities-grid">
                  {room.amenities.map((a, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '10px 14px',
                        background: '#fff',
                        border: '1px solid var(--line)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.92rem',
                        fontWeight: 500,
                        color: 'var(--navy)',
                      }}
                    >
                      <Sparkles style={{ width: 16, height: 16, color: 'var(--gold)' }} />
                      <span>{a.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Meal Plans */}
              <div style={{ marginBottom: 40 }}>
                <h3 style={{ fontSize: '1.45rem', marginBottom: 16 }}>
                  Available Meal Plan Options
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {room.mealPlans.map((mp) => (
                    <div
                      key={mp.id}
                      style={{
                        padding: '18px 20px',
                        borderRadius: 'var(--radius-sm)',
                        background: '#fff',
                        border: '1px solid var(--line)',
                        borderLeft: '4px solid var(--gold)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                        <strong style={{ fontSize: '1.05rem', color: 'var(--navy)' }}>
                          {mp.name}
                        </strong>
                        {mp.badge && (
                          <span
                            style={{
                              fontSize: '0.72rem',
                              background: 'var(--gold)',
                              color: 'var(--navy-3)',
                              padding: '2px 8px',
                              borderRadius: 3,
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                            }}
                          >
                            {mp.badge}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted)', margin: 0 }}>
                        {mp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Direct Booking Form */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-lg)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ background: 'var(--navy)', color: '#fff', padding: '24px 28px' }}>
                  <span style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-soft)' }}>
                    Direct Enquiry
                  </span>
                  <h3 style={{ color: '#fff', fontSize: '1.4rem', marginTop: 4 }}>
                    Reserve {room.name}
                  </h3>
                  <p style={{ color: '#d6dbe6', fontSize: '0.86rem', marginTop: 4 }}>
                    {room.rateDisplay} · No advance payment required for inquiry
                  </p>
                </div>

                <div style={{ padding: '24px 28px' }}>
                  <BookingForm initialRoom={room.name} isInline={true} />
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
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

      <FAQSection />

      <CTASection variant="room-detail" roomName={room.name} bgImage={room.images[0]?.src} />
    </>
  );
}
