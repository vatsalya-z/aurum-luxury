'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { useBooking } from './ClientLayout';
import FadeIn from './animations/FadeIn';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';
import WinterEnvironment from './animations/WinterEnvironment';

export type CTAVariant =
  | 'home'
  | 'rooms'
  | 'room-detail'
  | 'gallery'
  | 'experiences'
  | 'facilities'
  | 'contact';

interface CTASectionProps {
  variant?: CTAVariant;
  roomName?: string;
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  bgImage?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  onOpenBooking?: () => void;
}

export default function CTASection({
  variant = 'home',
  roomName,
  eyebrow,
  heading,
  subtitle,
  bgImage,
  primaryBtnText,
  secondaryBtnText,
  secondaryBtnLink,
  onOpenBooking,
}: CTASectionProps) {
  const { openBooking } = useBooking();
  const reducedMotion = useReducedMotion();

  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      openBooking(roomName);
    }
  };

  // Preset Configurations for each page variant
  const presets: Record<CTAVariant, {
    eyebrow: string;
    heading: string;
    subtitle: string;
    bgImage: string;
    primaryText: string;
    secondaryText: string;
    secondaryLink: string;
    isSecondaryWhatsApp?: boolean;
  }> = {
    home: {
      eyebrow: 'RESERVE YOUR STAY',
      heading: HOTEL_INFO.taglines.ctaHeading,
      subtitle: HOTEL_INFO.taglines.ctaSubtitle,
      bgImage: '/images/cta/aurum-luxury-cta-bg.jpg',
      primaryText: 'Book Your Stay',
      secondaryText: 'Explore Rooms',
      secondaryLink: '/rooms',
    },
    rooms: {
      eyebrow: 'DIRECT RESERVATION BENEFITS',
      heading: 'Reserve Your Mountain Chalet With Direct Rates',
      subtitle: 'Complimentary gourmet breakfast, best seasonal rates, and personalized itinerary guidance when booking direct.',
      bgImage: '/images/gallery/aurum-hillside-sanctuary-dal-lake.jpg',
      primaryText: 'Check Direct Rates',
      secondaryText: 'Contact Concierge',
      secondaryLink: '/contact',
    },
    'room-detail': {
      eyebrow: 'BESPOKE MOUNTAIN LIVING',
      heading: roomName ? `Ready to Experience ${roomName}?` : 'Ready to Reserve Your Mountain Retreat?',
      subtitle: 'Handcrafted timber architecture, climate-controlled warmth, and breathtaking mountain vistas await. Secure your preferred dates directly.',
      bgImage: '/images/gallery/aurum-hillside-sanctuary-dal-lake.jpg',
      primaryText: roomName ? `Book ${roomName}` : 'Book This Room',
      secondaryText: 'View All Accommodations',
      secondaryLink: '/rooms',
    },
    gallery: {
      eyebrow: 'EXPERIENCE THE AURUM IN PERSON',
      heading: 'Turn Moments Into Lifelong Kashmiri Memories',
      subtitle: 'Step onto our sunset viewing terrace overlooking Dal Lake, unwind in cedar-crafted chalets, and savour authentic Brein Hills tranquility.',
      bgImage: '/images/cta/aurum-gallery-cta-bg.jpg',
      primaryText: 'Reserve Your Stay',
      secondaryText: 'Explore Chalets & Cottages',
      secondaryLink: '/rooms',
    },
    experiences: {
      eyebrow: 'CURATED VALLEY ITINERARIES',
      heading: 'Begin Your Srinagar Adventure With Us',
      subtitle: 'From private Dal Lake Shikara rides to Mughal heritage gardens and alpine excursions, our concierge arranges every detail.',
      bgImage: '/images/cta/aurum-experiences-cta-bg.jpg',
      primaryText: 'Plan With Concierge',
      secondaryText: 'Explore Chalets',
      secondaryLink: '/rooms',
    },
    facilities: {
      eyebrow: 'UNCOMPROMISING KASHMIRI HOSPITALITY',
      heading: 'Authentic Wazwan & Mountain Tranquility',
      subtitle: 'Indulge in royal copper-platter Wazwan, steaming saffron Kahwa, attentive 24-hour room service, and serene Brein Hills comfort.',
      bgImage: '/images/cta/aurum-facilities-cta-bg.jpg',
      primaryText: 'Book Stay & Dining',
      secondaryText: 'Chat on WhatsApp',
      secondaryLink: `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello, I would like to enquire about dining, meal plans, and facilities at The Aurum Luxury Collection.')}`,
      isSecondaryWhatsApp: true,
    },
    contact: {
      eyebrow: 'PERSONALIZED ASSISTANCE',
      heading: 'Have Questions About Your Visit to Srinagar?',
      subtitle: 'Our 24/7 front desk & reservations concierge assists with custom chalet bookings, airport transfers, and Kashmir itineraries.',
      bgImage: '/images/facilities/front-desk-concierge.jpg',
      primaryText: 'Submit Quick Enquiry',
      secondaryText: 'WhatsApp Helpdesk',
      secondaryLink: `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello, I am reaching out to The Aurum Luxury Collection reservations desk.')}`,
      isSecondaryWhatsApp: true,
    },
  };

  const current = presets[variant] || presets.home;

  const displayEyebrow = eyebrow || current.eyebrow;
  const displayHeading = heading || current.heading;
  const displaySubtitle = subtitle || current.subtitle;
  const displayBg = bgImage || current.bgImage;
  const displayPrimary = primaryBtnText || current.primaryText;
  const displaySecondary = secondaryBtnText || current.secondaryText;
  const displaySecondaryLink = secondaryBtnLink || current.secondaryLink;
  const isSecondaryWa = current.isSecondaryWhatsApp;

  return (
    <section className={`cta cta-${variant}`} style={{ overflow: 'hidden' }}>
      <motion.img
        src={displayBg}
        alt={`The Aurum Luxury Collection - ${displayHeading}`}
        className="cta-bg"
        loading="lazy"
        initial={reducedMotion ? {} : { scale: 1 }}
        whileInView={reducedMotion ? {} : { scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 7, ease: 'easeOut' }}
      />
      <div className="cta-overlay" />
      <WinterEnvironment
        intensity="subtle"
        fog={false}
        snowZIndex={3}
      />

      <FadeIn direction="up" className="wrap">
        <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>
          {displayEyebrow}
        </span>
        <h2>{displayHeading}</h2>
        <p>{displaySubtitle}</p>

        <div className="actions">
          <motion.button
            onClick={handleBooking}
            className="btn btn-gold btn-lg"
            whileHover={reducedMotion ? {} : { scale: 1.03 }}
            whileTap={reducedMotion ? {} : { scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <Calendar style={{ width: 16, height: 16 }} />
            <span>{displayPrimary}</span>
          </motion.button>

          {isSecondaryWa ? (
            <motion.a
              href={displaySecondaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-lg"
              whileHover={reducedMotion ? {} : { scale: 1.03 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <FaWhatsapp style={{ width: 17, height: 17 }} />
              <span>{displaySecondary}</span>
            </motion.a>
          ) : (
            <motion.div
              whileHover={reducedMotion ? {} : { scale: 1.03 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={displaySecondaryLink} className="btn btn-line-white btn-lg">
                <span>{displaySecondary}</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
            </motion.div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
