'use client';

import React from 'react';
import { Calendar } from 'lucide-react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { HOTEL_INFO } from '@/data/hotelInfo';

interface MobileStickyBarProps {
  onOpenBooking?: () => void;
}

export default function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  const waMsg = encodeURIComponent(
    'Hello, I would like to enquire about staying at The Aurum Luxury Collection in Srinagar. Please share room availability and tariff.'
  );

  return (
    <nav className="mobile-sticky-bar" aria-label="Quick mobile booking actions">
      {/* Button 1: Call Us */}
      <a
        href={`tel:${HOTEL_INFO.contact.phone}`}
        className="mobile-bar-btn mobile-bar-call"
        aria-label="Call Reservations Desk"
      >
        <FaPhoneAlt style={{ width: 15, height: 15 }} />
        <span>Call Us</span>
      </a>

      {/* Button 2: WhatsApp */}
      <a
        href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bar-btn mobile-bar-wa"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp style={{ width: 17, height: 17 }} />
        <span>WhatsApp</span>
      </a>

      {/* Button 3: Book Now */}
      <button
        type="button"
        onClick={() => onOpenBooking && onOpenBooking()}
        className="mobile-bar-btn mobile-bar-book"
        aria-label="Book Your Stay"
      >
        <Calendar style={{ width: 17, height: 17 }} />
        <span>Book Now</span>
      </button>
    </nav>
  );
}
