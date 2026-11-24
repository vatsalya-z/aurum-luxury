'use client';

import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FloatingActionsProps {
  onOpenBooking?: () => void;
}

export default function FloatingActions({ onOpenBooking }: FloatingActionsProps) {
  const reducedMotion = useReducedMotion();
  const waMsg = encodeURIComponent(
    'Hello, I would like to enquire about staying at The Aurum Luxury Collection by Stay Pattern in Srinagar. Please share availability and current rates.'
  );

  return (
    <aside className="float-actions" aria-label="Quick contact options">
      <motion.a
        href={`tel:${HOTEL_INFO.contact.phone}`}
        className="float-btn float-phone"
        aria-label="Call Reservations Desk"
        title="Call Hotel"
        whileHover={reducedMotion ? {} : { scale: 1.12, y: -3 }}
        whileTap={reducedMotion ? {} : { scale: 0.92 }}
        transition={{ duration: 0.2 }}
      >
        <FaPhoneAlt style={{ width: 18, height: 18 }} />
      </motion.a>

      <motion.a
        href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-wa"
        aria-label="Enquire on WhatsApp"
        title="Chat on WhatsApp"
        whileHover={reducedMotion ? {} : { scale: 1.12, y: -3 }}
        whileTap={reducedMotion ? {} : { scale: 0.92 }}
        transition={{ duration: 0.2 }}
      >
        <FaWhatsapp style={{ width: 22, height: 22 }} />
      </motion.a>
    </aside>
  );
}
