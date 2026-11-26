'use client';

import React, { useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ROOMS } from '@/data/rooms';
import RoomCard from './RoomCard';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';

interface RoomsSectionProps {
  onEnquire?: (roomName?: string) => void;
  title?: string;
  subtitle?: string;
}

export default function RoomsSection({
  onEnquire,
  title = 'Elite',
  subtitle = 'Our thoughtfully designed residences blend Kashmiri craftsmanship with contemporary luxury and panoramic mountain views.',
}: RoomsSectionProps) {
  const reducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = useCallback((index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(ROOMS.length - 1, index));
    const grid = el.firstElementChild as HTMLElement | null;
    const card = grid?.children[clamped] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({
        left: card.offsetLeft - 16,
        behavior: 'smooth',
      });
    } else {
      const step = Math.max(el.clientWidth * 0.86, 280);
      el.scrollTo({
        left: clamped * step,
        behavior: 'smooth',
      });
    }
    setActiveIndex(clamped);
  }, []);

  const scrollTrack = (direction: 'prev' | 'next') => {
    const nextIdx =
      direction === 'next'
        ? (activeIndex + 1) % ROOMS.length
        : (activeIndex - 1 + ROOMS.length) % ROOMS.length;
    scrollToCard(nextIdx);
  };

  const handleTrackScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const grid = el.firstElementChild as HTMLElement | null;
    const firstCard = grid?.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : el.clientWidth * 0.86;
    if (cardWidth > 0) {
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(ROOMS.length - 1, idx)));
    }
  };

  const activeNum = String(activeIndex + 1).padStart(2, '0');
  const totalNum = String(ROOMS.length).padStart(2, '0');

  return (
    <section
      id="rooms"
      className="section-padding bg-pine-luxury relative overflow-hidden"
      style={{ backgroundColor: 'var(--navy)' }}
    >
      <div className="forest-pattern absolute inset-0 opacity-10 pointer-events-none" />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(201, 164, 92, 0.45), transparent)',
        }}
      />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Editorial Header Row */}
        <FadeIn direction="up">
          <div className="rooms-header-bar">
            <div className="rooms-header-copy">
              <span className="eyebrow eyebrow-wide">Accommodations</span>
              <h2>
                {title} <span className="italic font-medium text-gold">Residences</span>
              </h2>
              <motion.div
                className="rooms-header-gold-rule"
                initial={reducedMotion ? false : { scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: luxuryEase }}
              />
              <p>{subtitle}</p>
            </div>

            <div className="rooms-header-actions">
              <Link href="/rooms" className="rooms-view-all-link">
                <span>View All Residences</span>
                <ArrowRight style={{ width: 15, height: 15 }} />
              </Link>
              <div className="rooms-carousel-arrows" aria-label="Scroll residences">
                <motion.button
                  type="button"
                  className="rooms-arrow-btn"
                  onClick={() => scrollTrack('prev')}
                  aria-label="Previous residence"
                  whileHover={reducedMotion ? {} : { scale: 1.08 }}
                  whileTap={reducedMotion ? {} : { scale: 0.92 }}
                >
                  <ChevronLeft style={{ width: 17, height: 17 }} />
                </motion.button>
                <motion.button
                  type="button"
                  className="rooms-arrow-btn"
                  onClick={() => scrollTrack('next')}
                  aria-label="Next residence"
                  whileHover={reducedMotion ? {} : { scale: 1.08 }}
                  whileTap={reducedMotion ? {} : { scale: 0.92 }}
                >
                  <ChevronRight style={{ width: 17, height: 17 }} />
                </motion.button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 3-Column Desktop Grid / Touch-Friendly Mobile Snap Carousel */}
        <div ref={trackRef} className="rooms-track-shell" onScroll={handleTrackScroll}>
          <ScrollReveal className="rooms-grid" staggerChildren={0.14}>
            {ROOMS.map((room, idx) => (
              <ScrollRevealItem
                key={room.id}
                direction="up"
                distance={28}
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <RoomCard
                  room={room}
                  index={idx}
                  isActive={idx === activeIndex}
                  onEnquire={onEnquire}
                />
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>

        {/* Mobile Luxury Carousel Controls (Counter + Animated Gold Pills + Arrows) */}
        <div className="rooms-mobile-controls">
          <div className="rooms-mobile-counter" aria-live="polite">
            <span className="rooms-counter-current">{activeNum}</span>
            <span className="rooms-counter-sep">/</span>
            <span>{totalNum}</span>
          </div>

          <div className="rooms-mobile-dots" role="tablist" aria-label="Residence slides">
            {ROOMS.map((room, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={room.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`View ${room.name}`}
                  onClick={() => scrollToCard(idx)}
                  className={`rooms-mobile-dot ${active ? 'is-active' : ''}`}
                >
                  {active && (
                    <motion.span
                      layoutId={reducedMotion ? undefined : 'roomsActiveDot'}
                      className="rooms-mobile-dot-fill"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="rooms-mobile-arrows">
            <motion.button
              type="button"
              className="rooms-arrow-btn"
              onClick={() => scrollTrack('prev')}
              aria-label="Previous residence"
              whileTap={reducedMotion ? {} : { scale: 0.9 }}
            >
              <ChevronLeft style={{ width: 16, height: 16 }} />
            </motion.button>
            <motion.button
              type="button"
              className="rooms-arrow-btn"
              onClick={() => scrollTrack('next')}
              aria-label="Next residence"
              whileTap={reducedMotion ? {} : { scale: 0.9 }}
            >
              <ChevronRight style={{ width: 16, height: 16 }} />
            </motion.button>
          </div>
        </div>

        {/* Mobile View All Button + Direct Booking Notice */}
        <FadeIn direction="up" delay={0.15}>
          <div className="rooms-mobile-footer-cta">
            <motion.div
              style={{ display: 'inline-block' }}
              whileHover={reducedMotion ? {} : { scale: 1.03 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
            >
              <Link
                href="/rooms"
                className="btn btn-outline-gold"
                style={{ padding: '0.82rem 2.1rem', fontSize: '0.78rem', letterSpacing: '0.14em' }}
              >
                <span>View All Residences</span>
                <ArrowRight style={{ width: 14, height: 14 }} />
              </Link>
            </motion.div>
          </div>
          <div style={{ marginTop: 22, textAlign: 'center' }}>
            <p style={{ fontSize: '0.84rem', color: '#9ba6b8', margin: 0 }}>
              Direct bookings benefit from complimentary local itinerary guidance and prioritized check-in flexibility.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
