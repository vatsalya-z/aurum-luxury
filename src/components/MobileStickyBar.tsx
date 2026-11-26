'use client';

import React from 'react';
import { Calendar, Phone, ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';

interface MobileStickyBarProps {
  onOpenBooking?: () => void;
}

export default function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  const reducedMotion = useReducedMotion();
  const waMsg = encodeURIComponent(
    'Hello, I would like to enquire about staying at The Aurum Luxury Collection in Srinagar. Please share room availability and tariff.'
  );

  return (
    <motion.nav
      className="mobile-sticky-bar"
      aria-label="Quick mobile booking and concierge actions"
      initial={reducedMotion ? false : { y: 28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: luxuryEase }}
    >
      {/* Top Micro Label: DIRECT • BEST RATE */}
      <div className="mobile-sticky-micro" aria-hidden="true">
        <span className="mobile-sticky-hairline mobile-sticky-hairline--left" />
        <span className="mobile-sticky-ornament">✦</span>
        <span className="mobile-sticky-micro-text">DIRECT • BEST RATE</span>
        <span className="mobile-sticky-ornament">✦</span>
        <span className="mobile-sticky-hairline mobile-sticky-hairline--right" />
      </div>

      {/* Main Action Row: BOOK YOUR STAY + WhatsApp + Call */}
      <div className="mobile-sticky-actions">
        {/* 1. Primary Champagne-Gold Booking CTA */}
        <motion.button
          type="button"
          onClick={() => onOpenBooking && onOpenBooking()}
          className="mobile-sticky-book-cta"
          aria-label="Book Your Stay — Direct Best Rate"
          whileHover={reducedMotion ? {} : { scale: 1.015 }}
          whileTap={reducedMotion ? {} : { scale: 0.975 }}
          transition={{ duration: 0.18 }}
        >
          <Calendar className="mobile-sticky-cta-icon" strokeWidth={2.1} aria-hidden="true" />
          <span className="mobile-sticky-cta-label">BOOK YOUR STAY</span>
          <ArrowUpRight className="mobile-sticky-cta-arrow" strokeWidth={2.2} aria-hidden="true" />
        </motion.button>

        {/* 2. Circular WhatsApp Action Button */}
        <motion.a
          href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-sticky-circle mobile-sticky-circle--wa"
          aria-label="Chat with Reservations on WhatsApp"
          whileHover={reducedMotion ? {} : { scale: 1.05 }}
          whileTap={reducedMotion ? {} : { scale: 0.93 }}
          transition={{ duration: 0.18 }}
        >
          <FaWhatsapp className="mobile-sticky-wa-icon" aria-hidden="true" />
        </motion.a>

        {/* 3. Circular Phone Call Action Button */}
        <motion.a
          href={`tel:${HOTEL_INFO.contact.phone}`}
          className="mobile-sticky-circle mobile-sticky-circle--call"
          aria-label={`Call Reservations Desk at ${HOTEL_INFO.contact.phoneDisplay}`}
          whileHover={reducedMotion ? {} : { scale: 1.05 }}
          whileTap={reducedMotion ? {} : { scale: 0.93 }}
          transition={{ duration: 0.18 }}
        >
          <Phone className="mobile-sticky-call-icon" strokeWidth={2} aria-hidden="true" />
        </motion.a>
      </div>
    </motion.nav>
  );
}
