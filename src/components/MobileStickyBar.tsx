'use client';

import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MobileStickyBarProps {
  onOpenBooking?: () => void;
}

export default function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  const reducedMotion = useReducedMotion();
  const waMsg = encodeURIComponent(
    'Hello, I would like to enquire about staying at The Aurum Luxury Collection in Srinagar. Please share room availability and tariff.'
  );

  return (
    <nav className="mobile-sticky-bar" aria-label="Quick mobile booking actions">
      {/* Button 1: Call */}
      <motion.a
        href={`tel:${HOTEL_INFO.contact.phone}`}
        className="mobile-bar-btn mobile-bar-call"
        aria-label="Call Reservations Desk"
        whileTap={reducedMotion ? {} : { scale: 0.94 }}
      >
        <Phone style={{ width: 14, height: 14, color: 'var(--gold)' }} />
        <span>Call</span>
      </motion.a>

      {/* Button 2: WhatsApp */}
      <motion.a
        href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bar-btn mobile-bar-wa"
        aria-label="Chat on WhatsApp"
        whileTap={reducedMotion ? {} : { scale: 0.94 }}
      >
        <FaWhatsapp style={{ width: 16, height: 16, color: '#25D366' }} />
        <span>WhatsApp</span>
      </motion.a>

      {/* Button 3: Book Now */}
      <motion.button
        type="button"
        onClick={() => onOpenBooking && onOpenBooking()}
        className="mobile-bar-btn mobile-bar-book"
        aria-label="Book Your Stay"
        whileTap={reducedMotion ? {} : { scale: 0.94 }}
      >
        <Calendar style={{ width: 15, height: 15, color: 'var(--navy)' }} />
        <span>Book Now</span>
      </motion.button>
    </nav>
  );
}

