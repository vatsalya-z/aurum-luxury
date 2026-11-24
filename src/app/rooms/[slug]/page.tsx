import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ROOMS, Room } from '@/data/rooms';
import BookingForm from '@/components/BookingForm';
import RoomCard from '@/components/RoomCard';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedPages from '@/components/seo/RelatedPages';
import FadeIn from '@/components/animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from '@/components/animations/ScrollReveal';
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
        <FadeIn direction="up" className="wrap">
          <Breadcrumbs items={breadcrumbs} />
          {room.slug === 'sunset-view-chalet-dal-view' && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 18px',
                borderRadius: '30px',
                background: 'rgba(198, 168, 105, 0.22)',
                border: '1px solid rgba(198, 168, 105, 0.65)',
                color: '#f5ecd8',
                fontSize: '0.8rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: 16,
                backdropFilter: 'blur(8px)',
              }}
            >
              <span>Signature West-Facing Dal Lake Chalet</span>
            </div>
          )}
          {room.slug === 'elegant-chalet-dal-view' && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 18px',
                borderRadius: '30px',
                background: 'rgba(198, 168, 105, 0.22)',
                border: '1px solid rgba(198, 168, 105, 0.65)',
                color: '#f5ecd8',
                fontSize: '0.8rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: 16,
                backdropFilter: 'blur(8px)',
              }}
            >
              <span>Panoramic Dal View Chalet</span>
            </div>
          )}
          <h1>{room.name}</h1>
          <p>{room.tagline}</p>
        </FadeIn>
      </section>

      {/* Main Details Section */}
      <section className="section room-detail-section">
        <div className="wrap">
          <div className="room-detail-split">
            {/* Left Column: Gallery & Content */}
            <div className="room-detail-left">
              {/* Interactive Room Photo Gallery */}
              <RoomGalleryClient images={room.images} roomName={room.name} />

              {/* Quick Specs Bar */}
              <FadeIn direction="up" delay={0.1}>
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
              </FadeIn>

              {/* Exclusive Dal Lake Sunset View Spotlight */}
              {room.slug === 'sunset-view-chalet-dal-view' && (
                <div
                  style={{
                    margin: '36px 0',
                    padding: '30px',
                    borderRadius: 'var(--radius)',
                    background: 'linear-gradient(145deg, #0e1e38 0%, #162847 100%)',
                    color: '#fff',
                    border: '1px solid rgba(198, 168, 105, 0.35)',
                    boxShadow: '0 12px 36px rgba(10, 22, 40, 0.18)',
                  }}
                >
                  <div style={{ marginBottom: 12 }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        fontWeight: 700,
                      }}
                    >
                      Signature Dal Lake Panorama
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), 'Playfair Display', Georgia, serif",
                      fontSize: '1.85rem',
                      color: '#ffffff',
                      margin: '0 0 14px 0',
                      lineHeight: 1.25,
                      fontWeight: 500,
                    }}
                  >
                    Sunset View Chalet – Dal View Experience
                  </h3>

                  <p
                    style={{
                      color: '#d0d8e4',
                      fontSize: '0.96rem',
                      lineHeight: 1.7,
                      marginBottom: 22,
                    }}
                  >
                    Positioned on the premier upper tier along the Brein hillside in Astanpora, this signature chalet commands an unobstructed western vista directly across Dal Lake. As dusk approaches, the peaceful waters transform into a glowing mirror of amber, rose, and violet, framing the timeless silhouettes of drifting shikaras, distant houseboats, and the majestic Zabarwan mountain ranges.
                  </p>

                  {/* Feature Image with Overlay Badge */}
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      aspectRatio: '16/9',
                      border: '1px solid rgba(198, 168, 105, 0.3)',
                      marginBottom: 24,
                    }}
                  >
                    <img
                      src="/images/rooms/sunset-chalet-dal-view.jpg"
                      alt="Panoramic golden hour sunset over Dal Lake with Shikaras and Zabarwan mountains from Sunset View Chalet"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 12,
                        left: 14,
                        right: 14,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 8,
                        padding: '10px 14px',
                        background: 'rgba(10, 22, 40, 0.88)',
                        borderRadius: 'var(--radius-sm)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '0.82rem', color: '#f5f0e8', fontWeight: 600 }}>
                          Western Horizon Vista: Dal Lake & Zabarwan Mountain Range
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: 'var(--gold)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: 700,
                        }}
                      >
                        Sunset View Chalet Exclusive
                      </span>
                    </div>
                  </div>

                  {/* 4 Feature Points Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <strong style={{ fontSize: '0.88rem', color: '#fff', display: 'block', marginBottom: 6 }}>
                        Prime West Orientation
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#b9c6d6', lineHeight: 1.5 }}>
                        Direct line of sight across the Dal Lake basin, capturing the sun descending toward Hari Parbat.
                      </p>
                    </div>

                    <div
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <strong style={{ fontSize: '0.88rem', color: '#fff', display: 'block', marginBottom: 6 }}>
                        Private Viewing Deck
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#b9c6d6', lineHeight: 1.5 }}>
                        Spacious deodar timber terrace furnished with deep cushioned loungers for twilight observation.
                      </p>
                    </div>

                    <div
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <strong style={{ fontSize: '0.88rem', color: '#fff', display: 'block', marginBottom: 6 }}>
                        Sunset Kahwa Ritual
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#b9c6d6', lineHeight: 1.5 }}>
                        Freshly brewed Kashmiri saffron Kahwa served during golden hour directly on your private balcony.
                      </p>
                    </div>

                    <div
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <strong style={{ fontSize: '0.88rem', color: '#fff', display: 'block', marginBottom: 6 }}>
                        Golden Hour Twilight
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#b9c6d6', lineHeight: 1.5 }}>
                        Optimal viewing between 5:30 PM & 6:45 PM as reflections turn from fiery amber to evening violet.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Exclusive Dal Lake View Spotlight for Elegant Chalet */}
              {room.slug === 'elegant-chalet-dal-view' && (
                <div
                  style={{
                    margin: '36px 0',
                    padding: '30px',
                    borderRadius: 'var(--radius)',
                    background: 'linear-gradient(145deg, #0e1e38 0%, #162847 100%)',
                    color: '#fff',
                    border: '1px solid rgba(198, 168, 105, 0.35)',
                    boxShadow: '0 12px 36px rgba(10, 22, 40, 0.18)',
                  }}
                >
                  <div style={{ marginBottom: 12 }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        fontWeight: 700,
                      }}
                    >
                      Panoramic Chalet Architecture
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), 'Playfair Display', Georgia, serif",
                      fontSize: '1.85rem',
                      color: '#ffffff',
                      margin: '0 0 14px 0',
                      lineHeight: 1.25,
                      fontWeight: 500,
                    }}
                  >
                    The Elegant Chalet – Dal View Experience
                  </h3>

                  <p
                    style={{
                      color: '#d0d8e4',
                      fontSize: '0.96rem',
                      lineHeight: 1.7,
                      marginBottom: 22,
                    }}
                  >
                    Crafted with natural Himalayan cedar and pine timbers, this elevated residence brings Srinagar’s legendary landscapes directly into your bedroom. Broad panoramic windows frame the shimmering expanse of Dal Lake and the Zabarwan mountains, while a private viewing terrace allows you to wake up to morning alpine mist drifting across the calm water.
                  </p>

                  {/* Feature Image with Overlay Badge */}
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      aspectRatio: '16/9',
                      border: '1px solid rgba(198, 168, 105, 0.3)',
                      marginBottom: 24,
                    }}
                  >
                    <img
                      src="/images/rooms/elegant-chalet-dal-view.jpg"
                      alt="Elegant Chalet Dal View master suite with vaulted cedar ceiling and panoramic Dal Lake views"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 12,
                        left: 14,
                        right: 14,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 8,
                        padding: '10px 14px',
                        background: 'rgba(10, 22, 40, 0.88)',
                        borderRadius: 'var(--radius-sm)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '0.82rem', color: '#f5f0e8', fontWeight: 600 }}>
                          Panoramic Window Portal: Dal Lake Basin & Mountain Ridges
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: 'var(--gold)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: 700,
                        }}
                      >
                        Elevated Hillside Chalet
                      </span>
                    </div>
                  </div>

                  {/* 4 Feature Points Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <strong style={{ fontSize: '0.88rem', color: '#fff', display: 'block', marginBottom: 6 }}>
                        Elevated Ridge Vantage
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#b9c6d6', lineHeight: 1.5 }}>
                        High-altitude positioning offering expansive vistas across the entire Dal Lake valley basin.
                      </p>
                    </div>

                    <div
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <strong style={{ fontSize: '0.88rem', color: '#fff', display: 'block', marginBottom: 6 }}>
                        Private View Balcony
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#b9c6d6', lineHeight: 1.5 }}>
                        Step directly from the bedroom onto a private cedar balcony gazing across the lake waters.
                      </p>
                    </div>

                    <div
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <strong style={{ fontSize: '0.88rem', color: '#fff', display: 'block', marginBottom: 6 }}>
                        Morning Lake Tea
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#b9c6d6', lineHeight: 1.5 }}>
                        Enjoy artisanal coffee or traditional Kashmiri Kahwa in the comfort of your sunlit parlor.
                      </p>
                    </div>

                    <div
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <strong style={{ fontSize: '0.88rem', color: '#fff', display: 'block', marginBottom: 6 }}>
                        Cedar & Walnut Craft
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#b9c6d6', lineHeight: 1.5 }}>
                        Vaulted ceilings with pine beams, artisanal walnut details, and climate-controlled underfloor heating.
                      </p>
                    </div>
                  </div>
                </div>
              )}

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
                      <span style={{ color: 'var(--gold)', fontSize: '0.85rem', lineHeight: 1, flexShrink: 0 }}>✦</span>
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
                      <span style={{ color: 'var(--gold)', fontSize: '0.75rem', lineHeight: 1 }}>✦</span>
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Direct Booking Widget (Sticky while scrolling left content, moves when left content ends) */}
            <aside className="room-detail-sidebar" id="booking">
              <div className="room-sticky-booking-wrapper">
                <div className="room-booking-card">
                  <div className="room-booking-header">
                    <span className="room-booking-eyebrow">
                      Direct Reservation Desk
                    </span>
                    <h3 className="room-booking-title">
                      Reserve {room.name}
                    </h3>
                    <p className="room-booking-subtitle">
                      Select your travel dates for immediate assistance via WhatsApp.
                    </p>
                  </div>

                  <BookingForm initialRoom={room.name} isInline={true} />
                </div>

                <div className="room-guarantee-box">
                  <p>
                    <strong>Best Rate Guarantee:</strong> Direct bookings via our website or concierge desk receive complimentary local travel guidance.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          {/* Similar Room Recommendations */}
          <div style={{ marginTop: 80, borderTop: '1px solid var(--line)', paddingTop: 60 }}>
            <FadeIn direction="up">
              <div className="head start">
                <span className="eyebrow">Other Living Options</span>
                <h2>You May Also Like</h2>
                <p>Explore other room and chalet configurations at The Aurum Luxury Collection.</p>
              </div>
            </FadeIn>

            <ScrollReveal className="similar-rooms-grid" staggerChildren={0.15}>
              {similarRooms.map((sr) => (
                <ScrollRevealItem key={sr.id} direction="up" distance={24}>
                  <RoomCard room={sr} />
                </ScrollRevealItem>
              ))}
            </ScrollReveal>
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
