'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Utensils, ShieldCheck } from 'lucide-react';
import { ROOMS } from '@/data/rooms';
import RoomCard from '@/components/RoomCard';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import RelatedPages from '@/components/seo/RelatedPages';
import FadeIn from '@/components/animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from '@/components/animations/ScrollReveal';
import { useBooking } from '@/components/ClientLayout';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function RoomsPageContent() {
  const { openBooking } = useBooking();
  const reducedMotion = useReducedMotion();

  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Rooms & Suites', url: 'https://aurumhotelskashmir.com/rooms' },
  ];

  return (
    <>
      <PageHero
        size="tall"
        image="/images/rooms/elegant-chalet-dal-view.jpg"
        alt="Luxury Chalets and Master Bedroom Suites overlooking Dal Lake at The Aurum Srinagar"
        breadcrumbs={breadcrumbs}
        eyebrow="ELITE RESIDENCES"
        title="Rooms &"
        titleHighlight="Luxury Chalets"
        subtitle="Surround yourself with the natural splendour of Kashmir. Each cottage and chalet features handcrafted timber finishes, climate control, and tranquil mountain or Dal Lake vistas."
        desktopPosition="center center"
        mobilePosition="center 40%"
      />

      {/* Rooms Listing Section */}
      <section className="section">
        <div className="wrap">
          {/* Section Header: Bottom-to-Top Reveal */}
          <FadeIn direction="up">
            <div className="head">
              <span className="eyebrow">Distinctive Living Spaces</span>
              <h2>Select Your Preferred Accommodation</h2>
              <p>
                Whether you desire the cozy forest shelter of our Luxury Cottage or elevated panoramic horizons
                from our Dal View Chalets, every stay includes authentic hospitality and tailored meal options.
              </p>
            </div>
          </FadeIn>

          {/* Staggered Rooms Grid */}
          <ScrollReveal className="rooms-grid" staggerChildren={0.15}>
            {ROOMS.map((room) => (
              <ScrollRevealItem key={room.id} direction="up" distance={30} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <RoomCard
                  room={room}
                  onEnquire={(name) => openBooking(name)}
                />
              </ScrollRevealItem>
            ))}
          </ScrollReveal>

          {/* Accommodation Highlights & Policy Card */}
          <FadeIn direction="up" delay={0.15}>
            <div
              style={{
                marginTop: 56,
                padding: 'clamp(24px, 4vw, 40px)',
                borderRadius: 18,
                background: 'linear-gradient(145deg, #0e1e38 0%, #162b4d 100%)',
                border: '1px solid rgba(198, 168, 105, 0.35)',
                boxShadow: 'var(--shadow-lg)',
                color: '#fff',
              }}
            >
              <span className="eyebrow" style={{ marginBottom: 6, display: 'block', letterSpacing: '0.24em' }}>
                Direct Stay Privileges
              </span>
              <h3 style={{ fontSize: 'clamp(1.35rem, 2.8vw, 1.75rem)', marginBottom: 8, color: '#fff' }}>
                Booking Guidelines & Complimentary Perks
              </h3>
              <div className="policy-grid">
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 14,
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: 'rgba(198, 168, 105, 0.16)',
                        color: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Clock style={{ width: 17, height: 17 }} />
                    </div>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>Standard Timings</strong>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>
                    Check-in from 2:00 PM. Check-out until 12:00 PM. Early check-in or late checkout is subject to cottage availability.
                  </p>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 14,
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: 'rgba(198, 168, 105, 0.16)',
                        color: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Utensils style={{ width: 17, height: 17 }} />
                    </div>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>Flexible Meal Packages</strong>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>
                    Choose from Room Only (EP), Room + Breakfast (CP), or Room + Breakfast + 1 Meal (MAP) freshly prepared in our kitchen.
                  </p>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 14,
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: 'rgba(198, 168, 105, 0.16)',
                        color: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <ShieldCheck style={{ width: 17, height: 17 }} />
                    </div>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>Direct Booking Promise</strong>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>
                    Enquire directly through our website or WhatsApp desk for current promotional seasonal rates with no hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
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
