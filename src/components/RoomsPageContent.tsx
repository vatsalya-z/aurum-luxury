'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ROOMS } from '@/data/rooms';
import RoomCard from '@/components/RoomCard';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
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
      {/* Page Banner with Slow Zoom */}
      <section className="banner" style={{ overflow: 'hidden' }}>
        <motion.img
          src="/images/rooms/elegant-chalet-dal-view.jpg"
          alt="Luxury Chalets and Master Bedroom Suites overlooking Dal Lake at The Aurum Srinagar"
          className="banner-bg"
          initial={reducedMotion ? {} : { scale: 1 }}
          animate={reducedMotion ? {} : { scale: 1.05 }}
          transition={{ duration: 7, ease: 'easeOut' }}
        />
        <FadeIn direction="up" className="wrap">
          <Breadcrumbs items={breadcrumbs} />
          <h1>Rooms & Luxury Chalets</h1>
          <p>
            Surround yourself with the natural splendour of Kashmir. Each cottage and chalet
            features handcrafted timber finishes, climate control, and tranquil mountain or Dal Lake vistas.
          </p>
        </FadeIn>
      </section>

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
            <motion.div
              style={{
                marginTop: 64,
                padding: '36px 32px',
                borderRadius: 'var(--radius)',
                background: 'var(--beige)',
                border: '1px solid var(--line)',
              }}
              whileHover={reducedMotion ? {} : { y: -3 }}
              transition={{ duration: 0.3 }}
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
            </motion.div>
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
