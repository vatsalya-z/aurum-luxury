'use client';

import React from 'react';
import Link from 'next/link';
import { Users, Bed, Mountain, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Room } from '@/data/rooms';
import { useBooking } from './ClientLayout';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';

interface RoomCardProps {
  room: Room;
  index?: number;
  isActive?: boolean;
  onEnquire?: (roomName: string) => void;
}

export default function RoomCard({ room, index = 0, isActive = false, onEnquire }: RoomCardProps) {
  const { openBooking } = useBooking();
  const reducedMotion = useReducedMotion();
  const primaryImage = room.images[0];

  const handleEnquire = () => {
    if (onEnquire) {
      onEnquire(room.name);
    } else {
      openBooking(room.name);
    }
  };

  return (
    <motion.article
      className={`room-card-shawinn room-card-editorial ${isActive ? 'is-mobile-active' : ''}`}
      aria-label={room.name}
      initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reducedMotion ? {} : { y: -7 }}
      whileTap={reducedMotion ? {} : { scale: 0.988 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: luxuryEase }}
    >
      {/* Top Champagne-Gold Architectural Accent */}
      <div className="room-card-gold-bar" aria-hidden="true" />

      {/* Clean Full-Bleed Landscape Image Frame */}
      <Link href={`/rooms/${room.slug}`} className="card-img-wrap" aria-label={`Explore ${room.name}`}>
        <motion.img
          src={primaryImage.src}
          alt={primaryImage.alt}
          loading="lazy"
          initial={reducedMotion ? false : { scale: 1.07 }}
          whileInView={reducedMotion ? undefined : { scale: 1 }}
          viewport={{ once: true }}
          whileHover={reducedMotion ? {} : { scale: 1.07 }}
          transition={{ duration: 0.85, ease: luxuryEase }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(11,25,48,0.1) 0%, transparent 45%, rgba(11,25,48,0.62) 100%)',
            pointerEvents: 'none',
          }}
        />
        {room.isPopular && (
          <span className="card-badge card-badge--luxe">
            <Sparkles style={{ width: 11, height: 11 }} />
            <span>Signature Stay</span>
          </span>
        )}
        <div className="room-card-img-meta">
          <span>{room.view}</span>
          {room.sizeSqFt ? <span>{room.sizeSqFt} sq ft</span> : null}
        </div>
      </Link>

      {/* Warm Ivory Editorial Card Content */}
      <div className="card-content">
        <div className="room-card-eyebrow">
          <span>✦</span>
          <span>{room.category} Residence</span>
        </div>

        <h3>
          <Link href={`/rooms/${room.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {room.name}
          </Link>
        </h3>

        <div className="room-specs-chips">
          <span className="room-spec-chip">
            <Users />
            <span>Up to {room.maxGuests} Guests</span>
          </span>
          <span className="room-spec-chip">
            <Bed />
            <span>{room.bedType}</span>
          </span>
          <span className="room-spec-chip room-spec-chip--hide-sm">
            <Mountain />
            <span>{room.view}</span>
          </span>
        </div>

        <p>{room.shortDescription}</p>

        <div className="room-card-footer">
          <div className="room-card-rate-block">
            <span className="room-card-rate">{room.rateDisplay}</span>
            <Link href={`/rooms/${room.slug}`} className="room-card-details-link">
              Explore Residence →
            </Link>
          </div>

          <motion.button
            type="button"
            onClick={handleEnquire}
            className="room-card-circle-cta"
            aria-label={`Reserve ${room.name}`}
            whileHover={reducedMotion ? {} : { scale: 1.1, rotate: -15 }}
            whileTap={reducedMotion ? {} : { scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
          >
            <ArrowRight style={{ width: 17, height: 17 }} />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
