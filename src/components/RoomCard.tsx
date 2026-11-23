'use client';

import React from 'react';
import Link from 'next/link';
import { Users, Bed, Mountain, Eye, Calendar, Utensils, ArrowRight } from 'lucide-react';
import { Room } from '@/data/rooms';
import { useBooking } from './ClientLayout';

interface RoomCardProps {
  room: Room;
  onEnquire?: (roomName: string) => void;
}

export default function RoomCard({ room, onEnquire }: RoomCardProps) {
  const { openBooking } = useBooking();
  const primaryImage = room.images[0];

  const handleEnquire = () => {
    if (onEnquire) {
      onEnquire(room.name);
    } else {
      openBooking(room.name);
    }
  };

  return (
    <article className="room-card-shawinn" aria-label={room.name}>
      {/* Tall Image Frame with Hover Zoom */}
      <div className="card-img-wrap">
        <img
          src={primaryImage.src}
          alt={primaryImage.alt}
          loading="lazy"
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

        {/* Available Meal Plans Tags */}
        <div style={{ marginBottom: 20 }}>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            <Utensils style={{ width: 13, height: 13, color: 'var(--gold)' }} />
            <span>Supported Meal Plans:</span>
          </span>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {room.mealPlans.map((mp) => (
              <span
                key={mp.id}
                style={{
                  fontSize: '0.7rem',
                  background: 'var(--gold-tint)',
                  color: 'var(--navy-2)',
                  padding: '4px 9px',
                  borderRadius: 3,
                  border: '1px solid var(--gold-soft)',
                  fontWeight: 600,
                }}
              >
                {mp.name}
              </span>
            ))}
          </div>
        </div>

        {/* Rate & Dual Action Buttons */}
        <div style={{ paddingTop: 18, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', display: 'block' }}>
              Tariff
            </span>
            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--navy)' }}>
              {room.rateDisplay}
            </span>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <Link href={`/rooms/${room.slug}`} className="btn btn-outline-navy btn-sm" style={{ padding: '0.6rem 1rem' }}>
              <Eye style={{ width: 13, height: 13 }} />
              <span>Details</span>
            </Link>
            <button
              onClick={handleEnquire}
              className="btn btn-gold btn-sm"
              style={{ padding: '0.6rem 1.2rem' }}
            >
              <Calendar style={{ width: 13, height: 13 }} />
              <span>Enquire</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
