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
      subtitle: 'Enjoy complimentary gourmet breakfast, best seasonal rates, and personalized itinerary guidance when booking directly with our reservations desk.',
      bgImage: '/images/rooms/sunset-chalet-master.png',
      primaryText: 'Check Rates & Availability',
      secondaryText: 'Contact Concierge',
      secondaryLink: '/contact',
    },
    'room-detail': {
      eyebrow: 'BESPOKE MOUNTAIN LIVING',
      heading: roomName ? `Ready to Experience ${roomName}?` : 'Ready to Reserve Your Mountain Retreat?',
      subtitle: 'Handcrafted timber architecture, climate-controlled warmth, and breathtaking mountain vistas await. Secure your preferred dates directly.',
      bgImage: '/images/rooms/sunset-chalet-master.png',
      primaryText: roomName ? `Book ${roomName}` : 'Book This Room',
      secondaryText: 'View All Accommodations',
      secondaryLink: '/rooms',
    },
    gallery: {
      eyebrow: 'EXPERIENCE THE AURUM LIVE',
      heading: 'Turn Moments Into Lifelong Kashmiri Memories',
      subtitle: 'From morning sunrise over Brein Hills to tranquil evening shikara reflections, experience authentic hospitality in the heart of Srinagar.',
      bgImage: '/images/cta/aurum-luxury-cta-bg.jpg',
      primaryText: 'Reserve Your Stay',
      secondaryText: 'Explore Accommodations',
      secondaryLink: '/rooms',
    },
    experiences: {
      eyebrow: 'CURATED VALLEY ITINERARIES',
      heading: 'Begin Your Srinagar Adventure With Us',
      subtitle: 'From private shikara sunset rides on Dal Lake to blooming tulip strolls and Mughal heritage trails, our concierge arranges every detail of your Kashmir journey.',
      bgImage: '/images/destinations/dal-lake-shikara.jpg',
      primaryText: 'Plan Trip With Concierge',
      secondaryText: 'Explore Living Spaces',
      secondaryLink: '/rooms',
    },
    facilities: {
      eyebrow: 'UNCOMPROMISING HOSPITALITY',
      heading: 'Authentic Wazwan & Mountain Tranquility',
      subtitle: 'Indulge in freshly prepared Kashmiri cuisine, attentive 24-hour service, and warm Himalayan hospitality tailored to your family’s comfort.',
      bgImage: '/images/facilities/dining-hall-wazwan.png',
      primaryText: 'Book Stay & Dining',
      secondaryText: 'Chat on WhatsApp',
      secondaryLink: `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello, I would like to enquire about dining and facilities at The Aurum Luxury Collection.')}`,
      isSecondaryWhatsApp: true,
    },
    contact: {
      eyebrow: 'PERSONALIZED ASSISTANCE',
      heading: 'Have Questions About Your Visit to Srinagar?',
      subtitle: 'Our reservations coordinators are available daily to assist with custom room bookings, airport transfers, and tailored sightseeing packages.',
      bgImage: '/images/hero/aurum-estate-brein-hills.png',
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
