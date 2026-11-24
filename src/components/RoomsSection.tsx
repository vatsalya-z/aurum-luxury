'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ROOMS } from '@/data/rooms';
import RoomCard from './RoomCard';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';

interface RoomsSectionProps {
  onEnquire?: (roomName?: string) => void;
  title?: string;
  subtitle?: string;
}

export default function RoomsSection({
  onEnquire,
  title = 'Elite',
  subtitle = 'Experience the pinnacle of hillside luxury. Each cottage and chalet is crafted with native Kashmiri timbers, plush bedding, and serene views.',
}: RoomsSectionProps) {
  return (
    <section id="rooms" className="section-padding bg-pine-luxury relative overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      <div className="forest-pattern absolute inset-0 opacity-10 pointer-events-none" />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(198, 168, 105, 0.4), transparent)',
        }}
      />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Shawinn-style Section Header */}
        <FadeIn direction="up">
          <div
            className="rooms-header-flex"
            style={{
              textAlign: 'center',
              maxWidth: 780,
              margin: '0 auto clamp(40px, 6vw, 68px)',
            }}
          >
            <span className="eyebrow eyebrow-wide">
              Accommodations
            </span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', lineHeight: 0.9, letterSpacing: '-0.025em', marginBottom: 16 }}>
              {title} <span className="italic font-medium text-gold">Residences</span>
            </h2>
            <p style={{ color: '#c4cddc', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', fontWeight: 300, lineHeight: 1.7 }}>
              {subtitle}
            </p>
          </div>
        </FadeIn>

        {/* 3-Column Luxury Rooms Grid */}
        <ScrollReveal className="rooms-grid" staggerChildren={0.15}>
          {ROOMS.map((room) => (
            <ScrollRevealItem key={room.id} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <RoomCard
                room={room}
                onEnquire={onEnquire}
              />
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        {/* View All Rooms Button Below Section */}
        <FadeIn direction="up" delay={0.15}>
          <div style={{ marginTop: 44, textAlign: 'center' }}>
            <Link
              href="/rooms"
              className="btn btn-outline-gold"
              style={{ padding: '0.9rem 2.4rem', fontSize: '0.82rem', letterSpacing: '0.14em' }}
            >
              <span>View All Rooms</span>
              <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        </FadeIn>

        {/* Bottom Booking Notice */}
        <FadeIn direction="up" delay={0.2}>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', color: '#8c97ab' }}>
              Direct bookings benefit from complimentary local itinerary guidance and prioritized check-in flexibility.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
