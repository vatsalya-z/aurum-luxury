'use client';

import React from 'react';
import Link from 'next/link';
import { Users, Bed, Mountain, Eye, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Room } from '@/data/rooms';
import { useBooking } from './ClientLayout';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RoomCardProps {
  room: Room;
  onEnquire?: (roomName: string) => void;
}

export default function RoomCard({ room, onEnquire }: RoomCardProps) {
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
      className="room-card-shawinn"
      aria-label={room.name}
      whileHover={reducedMotion ? {} : { y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Tall Image Frame with Hover Zoom */}
      <div className="card-img-wrap" style={{ overflow: 'hidden', position: 'relative' }}>
        <motion.img
          src={primaryImage.src}
          alt={primaryImage.alt}
          loading="lazy"
          whileHover={reducedMotion ? {} : { scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        {room.isPopular && <span className="card-badge">Most Popular</span>}

        <span
          style={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            background: 'rgba(14, 30, 56, 0.9)',
            color: 'var(--gold-soft)',
            padding: '5px 12px',
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(198, 168, 105, 0.35)',
            backdropFilter: 'blur(6px)',
          }}
        >
          {room.category}
        </span>
      </div>

      {/* Card Content Body */}
      <div className="card-content">
        <h3>{room.name}</h3>

        {/* Specs Row */}
        <div className="room-specs-row">
          <span>
            <Users />
            <span>Up to {room.maxGuests} guests</span>
          </span>
          <span>
            <Bed />
            <span>{room.bedType}</span>
          </span>
          <span>
            <Mountain />
            <span>{room.view}</span>
          </span>
        </div>

        <p style={{ fontSize: '0.94rem', color: 'var(--muted)', marginBottom: 20, flex: 1, lineHeight: 1.6 }}>
          {room.shortDescription}
        </p>

        {/* Rate & Dual Action Buttons with hover scale */}
        <div className="room-card-footer" style={{ marginTop: 'auto', paddingTop: 18, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, width: '100%' }}>
          <div className="room-card-actions" style={{ display: 'flex', gap: 8, width: '100%' }}>
            <motion.div
              style={{ flex: 1, display: 'flex' }}
              whileHover={reducedMotion ? {} : { scale: 1.03 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
            >
              <Link href={`/rooms/${room.slug}`} className="btn btn-outline-navy btn-sm" style={{ padding: '0.6rem 1rem', width: '100%', justifyContent: 'center' }}>
                <Eye style={{ width: 15, height: 13 }} />
                <span>Details</span>
              </Link>
            </motion.div>

            <motion.button
              onClick={handleEnquire}
              className="btn btn-gold btn-sm"
              style={{ padding: '0.6rem 1.2rem', flex: 1, justifyContent: 'center' }}
              whileHover={reducedMotion ? {} : { scale: 1.03 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
            >
              <Calendar style={{ width: 15, height: 13 }} />
              <span>Enquire</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
