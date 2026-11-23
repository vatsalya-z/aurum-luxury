'use client';

import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { HOTEL_INFO } from '@/data/hotelInfo';

interface FloatingActionsProps {
  onOpenBooking?: () => void;
}

export default function FloatingActions({ onOpenBooking }: FloatingActionsProps) {
  const waMsg = encodeURIComponent(
    'Hello, I would like to enquire about staying at The Aurum Luxury Collection by Stay Pattern in Srinagar. Please share availability and current rates.'
  );

  return (
    <aside className="float-actions" aria-label="Quick contact options">
      <a
        href={`tel:${HOTEL_INFO.contact.phone}`}
        className="float-btn float-phone"
        aria-label="Call Reservations Desk"
        title="Call Hotel"
      >
        <FaPhoneAlt style={{ width: 18, height: 18 }} />
      </a>

      <a
        href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-wa"
        aria-label="Enquire on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp style={{ width: 22, height: 22 }} />
      </a>
    </aside>
  );
}
