'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { useBooking } from './ClientLayout';
import FadeIn from './animations/FadeIn';

interface CTASectionProps {
  onOpenBooking?: () => void;
}

export default function CTASection({ onOpenBooking }: CTASectionProps) {
  const { openBooking } = useBooking();

  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      openBooking();
    }
  };

  return (
    <section className="cta">
      <img
        src="/images/gallery/aurum-kashmir-sunset-cta.jpg"
        alt="The Aurum Luxury Collection Brein Hills Srinagar panoramic sunset"
        className="cta-bg"
        loading="lazy"
      />
      <div className="cta-overlay" />

      <FadeIn direction="up" className="wrap">
        <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>
          RESERVE YOUR STAY
        </span>
        <h2>{HOTEL_INFO.taglines.ctaHeading}</h2>
        <p>{HOTEL_INFO.taglines.ctaSubtitle}</p>

        <div className="actions">
          <button
            onClick={handleBooking}
            className="btn btn-gold btn-lg"
          >
            <Calendar style={{ width: 16, height: 16 }} />
            <span>Book Your Stay</span>
          </button>

          <Link href="/rooms" className="btn btn-line-white btn-lg">
            <span>Explore Rooms</span>
            <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
