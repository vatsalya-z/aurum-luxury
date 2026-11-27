'use client';

import React, { useRef } from 'react';
import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Compass,
  Car,
  Plane,
  ShieldCheck,
  Sparkles,
  ArrowDown,
  ArrowUpRight,
  Star,
  Navigation,
  CheckCircle2,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { INTERNAL_LINKS } from '@/data/seo/internalLinkMap';
import BookingForm from '@/components/BookingForm';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from '@/components/animations/ScrollReveal';
import WinterEnvironment from '@/components/animations/WinterEnvironment';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from '@/components/animations/variants';

const DISCOVERY_MEDIA: Record<string, string> = {
  '/rooms': '/images/rooms/elegant-chalet-lounge.png',
  '/facilities': '/images/gallery/evening-property-illumination.png',
  '/experiences': '/images/experience/srinagar-attractions-itinerary-guide.jpg',
};

const LANDMARK_DISTANCES = [
  {
    name: 'Dal Lake Boulevard',
    distance: '4.5 km',
    drive: '12 min drive',
    tag: 'Iconic Lakefront',
  },
  {
    name: 'Nishat Mughal Garden',
    distance: '5.2 km',
    drive: '14 min drive',
    tag: 'Mughal Heritage',
  },
  {
    name: 'Indira Gandhi Tulip Garden',
    distance: '6.0 km',
    drive: '15 min drive',
    tag: 'Zabarwan Foothills',
  },
  {
    name: 'Botanical Garden',
    distance: '6.5 km',
    drive: '16 min drive',
    tag: 'Lakeside Trails',
  },
  {
    name: 'Shalimar Bagh',
    distance: '8.0 km',
    drive: '20 min drive',
    tag: 'Royal Pavilion',
  },
  {
    name: 'Pari Mahal Viewpoint',
    distance: '8.5 km',
    drive: '20 min drive',
    tag: 'Sunset Panorama',
  },
];

export default function ContactPageContent() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallaxY = useTransform(heroScroll, [0, 1], [0, 52]);

  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Contact Us', url: 'https://aurumhotelskashmir.com/contact' },
  ];

  const {
    props: { srcSet: desktopHeroSrcSet },
  } = getImageProps({
    alt: 'Illuminated A-frame mountain chalets and stone courtyard at The Aurum Luxury Collection in Brein Hills, Srinagar',
    width: 2560,
    height: 1200,
    sizes: '100vw',
    quality: 94,
    priority: true,
    src: '/images/hero/aurum-contact-hero-desktop.jpg',
  });

  const {
    props: { srcSet: mobileHeroSrcSet, ...heroImgRest },
  } = getImageProps({
    alt: 'Illuminated A-frame mountain chalets and stone courtyard at The Aurum Luxury Collection in Brein Hills, Srinagar',
    width: 1200,
    height: 1500,
    sizes: '100vw',
    quality: 94,
    priority: true,
    src: '/images/hero/aurum-contact-hero-mobile.jpg',
  });

  const discoveryLinks = INTERNAL_LINKS['/contact'] || [];
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hello, I would like to enquire about staying at The Aurum Luxury Collection Srinagar.'
  )}`;
  const airportPickupWhatsappUrl = `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hello, I would like to enquire about chauffeured Srinagar Airport (SXR) pickup and room availability at The Aurum.'
  )}`;

  return (
    <div className="contact-luxury-page">
      {/* ========================================================
          SECTION 01 — CINEMATIC ARRIVAL & CONCIERGE HERO
          ======================================================== */}
      <section ref={heroRef} className="page-hero page-hero--tall contact-hero-cinematic">
        <motion.div
          className="page-hero-media"
          style={{
            y: reducedMotion ? 0 : heroParallaxY,
            willChange: reducedMotion ? 'auto' : 'transform',
          }}
        >
          <picture className="page-hero-picture">
            <source media="(min-width: 769px)" srcSet={desktopHeroSrcSet} sizes="100vw" />
            <source media="(max-width: 768px)" srcSet={mobileHeroSrcSet} sizes="100vw" />
            <img
              {...heroImgRest}
              alt="Illuminated A-frame mountain chalets and stone courtyard at The Aurum Luxury Collection in Brein Hills, Srinagar"
              className="page-hero-img page-hero-img--art contact-hero-zoom"
              style={heroImgRest.style}
            />
          </picture>
        </motion.div>

        <div className="page-hero-scrim contact-hero-scrim" aria-hidden="true" />
        <div className="page-hero-gold-edge" aria-hidden="true" />

        <WinterEnvironment
          intensity="subtle"
          fog={false}
          frostGlow={false}
          snowZIndex={3}
        />

        <div className="wrap page-hero-content contact-hero-content">
          <Breadcrumbs items={breadcrumbs} />

          <motion.div
            className="rooms-hero-loc-pill"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.05, ease: luxuryEase }}
          >
            <MapPin style={{ width: 12, height: 12, color: 'var(--gold)' }} />
            <span>23A Brein Hills · Astanpora · 24/7 Desk</span>
          </motion.div>

          <motion.span
            className="eyebrow eyebrow-wide page-hero-eyebrow"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: luxuryEase }}
          >
            DIRECT CONCIERGE &amp; ARRIVALS
          </motion.span>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.16, ease: luxuryEase }}
          >
            Contact &amp;{' '}
            <span className="italic-serif" style={{ fontWeight: 500 }}>
              Location
            </span>
          </motion.h1>

          <motion.p
            className="page-hero-subtitle"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.24, ease: luxuryEase }}
          >
            Connect directly with our Brein Hills reservations desk for bespoke chalet rates,
            chauffeured airport transfers, and Srinagar travel guidance.
          </motion.p>

          <motion.div
            className="rooms-hero-actions"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.32, ease: luxuryEase }}
          >
            <a href="#booking" className="btn btn-gold btn-sm">
              <span>Send Stay Enquiry</span>
              <ArrowDown style={{ width: 14, height: 14 }} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-sm"
            >
              <FaWhatsapp style={{ width: 15, height: 15 }} />
              <span>WhatsApp Desk</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02 — INSTANT CONCIERGE CHANNELS RIBBON (4-COL / 2x2 MOBILE)
          ======================================================== */}
      <section className="contact-channels-section" aria-label="Direct Contact Channels">
        <div className="wrap">
          <div className="contact-channels-grid">
            <a href={`tel:${HOTEL_INFO.contact.phone}`} className="contact-channel-card">
              <div className="contact-channel-icon">
                <Phone style={{ width: 17, height: 17 }} />
              </div>
              <div className="contact-channel-body">
                <span className="contact-channel-kicker">Reservations Line</span>
                <strong>{HOTEL_INFO.contact.phoneDisplay}</strong>
                <span className="contact-channel-meta">24/7 On-Site Desk · Tap to Call</span>
              </div>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card contact-channel-card--wa"
            >
              <div className="contact-channel-icon contact-channel-icon--wa">
                <FaWhatsapp style={{ width: 18, height: 18 }} />
              </div>
              <div className="contact-channel-body">
                <span className="contact-channel-kicker">WhatsApp Concierge</span>
                <strong>{HOTEL_INFO.contact.whatsappDisplay}</strong>
                <span className="contact-channel-meta">Instant Tariffs &amp; Video Tours</span>
              </div>
            </a>

            <a href={`mailto:${HOTEL_INFO.contact.email}`} className="contact-channel-card">
              <div className="contact-channel-icon">
                <Mail style={{ width: 17, height: 17 }} />
              </div>
              <div className="contact-channel-body">
                <span className="contact-channel-kicker">Email Correspondence</span>
                <strong>{HOTEL_INFO.contact.email}</strong>
                <span className="contact-channel-meta">Replies Within 2 Hours</span>
              </div>
            </a>

            <a
              href={HOTEL_INFO.urls.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <div className="contact-channel-icon">
                <Clock style={{ width: 17, height: 17 }} />
              </div>
              <div className="contact-channel-body">
                <span className="contact-channel-kicker">Estate Timings</span>
                <strong>
                  In {HOTEL_INFO.checkIn} · Out {HOTEL_INFO.checkOut}
                </strong>
                <span className="contact-channel-meta">23A Brein Hills · Open GPS</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03 — BESPOKE RESERVATION SUITE & ESTATE COORDINATES
          ======================================================== */}
      <section className="contact-main-section" id="booking">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="contact-section-intro">
              <span className="eyebrow eyebrow-wide">
                <Sparkles style={{ width: 13, height: 13, display: 'inline', marginRight: 6 }} />
                Private Reservations &amp; Concierge
              </span>
              <h2>
                Plan Your <span className="italic-serif text-gold">Kashmir Stay</span> With Us
              </h2>
              <p>
                Share your preferred travel dates, cottage or chalet choice, and special requests —
                our team responds directly with tailored seasonal rates.
              </p>
            </div>
          </FadeIn>

          <div className="contact-luxury-split">
            {/* Left Column: Signature Reservation Desk Card */}
            <FadeIn direction="right" className="contact-form-col">
              <div className="rd-card contact-rd-shell">
                <div className="rd-gold-bar" aria-hidden="true" />
                <div className="rd-header">
                  <div>
                    <span className="rd-eyebrow">✦ Direct Reservation Desk</span>
                    <h3>Send a Stay Enquiry</h3>
                    <p>
                      Fill in your dates and guest count for prompt availability and direct tariffs.
                    </p>
                  </div>
                  <span className="rd-badge">Direct Rate</span>
                </div>

                <div className="rd-body">
                  <BookingForm isInline={true} />

                  <div className="contact-form-assurances">
                    <span>
                      <CheckCircle2 style={{ width: 13, height: 13 }} />
                      Flexible Flight/Weather Rescheduling
                    </span>
                    <span>
                      <ShieldCheck style={{ width: 13, height: 13 }} />
                      100% Guest Privacy Guaranteed
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Estate Arrival Showcase + Verified Google Profile */}
            <FadeIn direction="left" className="contact-details-col">
              <div className="contact-estate-card">
                <div className="contact-estate-media">
                  <Image
                    src="/images/facilities/estate-private-parking.jpg"
                    alt="Gated cobblestone driveway and private parking court at The Aurum Luxury Collection Brein Hills"
                    width={960}
                    height={540}
                    quality={88}
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="contact-estate-img"
                  />
                  <div className="contact-estate-media-badge">
                    <Car style={{ width: 12, height: 12 }} />
                    <span>Gated Estate · Free Private Parking</span>
                  </div>
                </div>

                <div className="contact-estate-body">
                  <span className="eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: 4 }}>
                    Hotel Coordinates
                  </span>
                  <h3>{HOTEL_INFO.fullName}</h3>

                  <div className="contact-coord-list">
                    <div className="contact-coord-row">
                      <div className="contact-coord-ico">
                        <MapPin style={{ width: 16, height: 16 }} />
                      </div>
                      <div>
                        <strong>Physical Address</strong>
                        <p>{HOTEL_INFO.address.full}</p>
                        <span className="contact-gps-tag">
                          GPS: 34.0941256° N, 74.9056223° E
                        </span>
                      </div>
                    </div>

                    <div className="contact-coord-row">
                      <div className="contact-coord-ico">
                        <Plane style={{ width: 16, height: 16 }} />
                      </div>
                      <div>
                        <strong>Airport &amp; Boulevard Access</strong>
                        <p>
                          40–50 min (22 km) from Srinagar Int&apos;l Airport (SXR) via Boulevard Rd
                          &amp; Brein Hill Rd. Chauffeured pickup available on request.
                        </p>
                      </div>
                    </div>

                    <div className="contact-coord-row">
                      <div className="contact-coord-ico">
                        <Clock style={{ width: 16, height: 16 }} />
                      </div>
                      <div>
                        <strong>Check-In &amp; Concierge Hours</strong>
                        <p>
                          Check-in: {HOTEL_INFO.checkIn} · Check-out: {HOTEL_INFO.checkOut} · 24/7
                          On-Site Manager for late arrivals
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-estate-actions">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-wa btn-sm"
                    >
                      <FaWhatsapp style={{ width: 15, height: 15 }} />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href={HOTEL_INFO.urls.googleMapsDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold btn-sm"
                    >
                      <Navigation style={{ width: 14, height: 14 }} />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Google Travel Rating Card */}
              <div className="contact-google-card">
                <div className="contact-google-top">
                  <div>
                    <span className="contact-google-kicker">Verified Hospitality Profile</span>
                    <strong>Google Hotels Listing</strong>
                  </div>
                  <div className="contact-rating-pill" aria-label="Rated 4.8 out of 5 stars">
                    <Star style={{ width: 13, height: 13, fill: 'currentColor' }} />
                    <span>
                      {HOTEL_INFO.googleRating} ★ ({HOTEL_INFO.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <p>
                  Inspect our verified Brein Hills pin, guest photographs, property amenities, and
                  authentic traveler reviews on Google Travel.
                </p>

                <a
                  href={HOTEL_INFO.urls.googleHotels}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-navy btn-sm contact-google-btn"
                >
                  <span>Open Verified Google Listing</span>
                  <ExternalLink style={{ width: 13, height: 13 }} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04 — INTERACTIVE GPS MAP & SRINAGAR PROXIMITY LEDGER
          ======================================================== */}
      <section className="contact-map-showcase">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="contact-map-head">
              <div>
                <span className="eyebrow eyebrow-wide" style={{ color: 'var(--gold-soft)' }}>
                  GPS &amp; Valley Connectivity
                </span>
                <h2>
                  Finding The Aurum in{' '}
                  <span className="italic-serif" style={{ color: 'var(--gold-soft)' }}>
                    Srinagar
                  </span>
                </h2>
              </div>
              <p>
                Set peacefully above Boulevard Road in Astanpora, Brein Hills — secluded from city
                traffic yet minutes from Dal Lake and historic Mughal gardens.
              </p>
            </div>
          </FadeIn>

          <div className="contact-map-grid">
            {/* Interactive Google Map Console */}
            <FadeIn direction="right" className="contact-map-console">
              <div className="contact-map-topbar">
                <div className="contact-map-pin-label">
                  <span className="contact-live-dot" aria-hidden="true" />
                  <span>23A, Brein Hills, Astanpora · 191121</span>
                </div>
                <a
                  href={HOTEL_INFO.urls.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-open-link"
                >
                  <span>Open GPS</span>
                  <ExternalLink style={{ width: 12, height: 12 }} />
                </a>
              </div>

              <div className="contact-map-iframe-wrap">
                <iframe
                  src={HOTEL_INFO.urls.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Aurum Luxury Collection by Stay Pattern — Google Maps Location"
                />
              </div>
            </FadeIn>

            {/* Verified Proximity & Drive-Time Ledger */}
            <FadeIn direction="left" className="contact-proximity-panel">
              <div className="contact-proximity-header">
                <span className="contact-subkicker">Verified Drive Times</span>
                <h3>Landmarks From Our Gate</h3>
              </div>

              <div className="contact-distance-grid">
                {LANDMARK_DISTANCES.map((item) => (
                  <div key={item.name} className="contact-distance-item">
                    <span className="contact-distance-tag">{item.tag}</span>
                    <strong>{item.name}</strong>
                    <div className="contact-distance-meta">
                      <span>{item.distance}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.drive}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-airport-strip">
                <div className="contact-airport-info">
                  <div className="contact-airport-ico">
                    <Plane style={{ width: 16, height: 16 }} />
                  </div>
                  <div>
                    <strong>Srinagar Int&apos;l Airport (SXR) · 22 km</strong>
                    <span>40–50 min drive · Chauffeured pickup on request</span>
                  </div>
                </div>
                <a
                  href={airportPickupWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm"
                >
                  <span>Arrange Pickup</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05 — EXPLORE THE AURUM RETREAT (EDITORIAL CARDS)
          ======================================================== */}
      <section className="rooms-discover-section">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="rooms-discover-head">
              <span className="eyebrow eyebrow-wide">
                <Compass style={{ width: 14, height: 14, display: 'inline', marginRight: 6 }} />
                Continue Exploring
              </span>
              <h2>
                Explore The Aurum <span className="italic-serif text-gold">Retreat</span>
              </h2>
              <p>
                Discover our handcrafted cottages &amp; chalets, verified amenities, and curated
                Srinagar sightseeing spots before your arrival.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal className="rooms-discover-grid" staggerChildren={0.08}>
            {discoveryLinks.map((link) => {
              const thumb =
                DISCOVERY_MEDIA[link.href] ||
                '/images/gallery/aurum-hillside-sanctuary-dal-lake.jpg';
              return (
                <ScrollRevealItem key={link.href} direction="up" distance={22}>
                  <Link href={link.href} className="rooms-discover-card">
                    <div className="rooms-discover-thumb">
                      <Image
                        src={thumb}
                        alt={link.title}
                        width={640}
                        height={420}
                        quality={86}
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="rooms-discover-img"
                      />
                      <span className="rooms-discover-cat">{link.category}</span>
                    </div>
                    <div className="rooms-discover-body">
                      <div>
                        <h3>{link.title}</h3>
                        <p>{link.description}</p>
                      </div>
                      <span className="rooms-discover-cta">
                        <span>Explore</span>
                        <ArrowUpRight style={{ width: 15, height: 15 }} />
                      </span>
                    </div>
                  </Link>
                </ScrollRevealItem>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          SECTION 06 — LOCATION & RESERVATION ASSISTANCE FAQ
          ======================================================== */}
      <FAQSection
        page="contact"
        title="Location & Reservation Assistance FAQ"
        subtitle="Answers about reaching Brein Hills, Google Maps directions, airport transfers, and 24/7 concierge contact."
      />

      {/* ========================================================
          SECTION 07 — PERSONALIZED CONCIERGE DESK CTA
          ======================================================== */}
      <CTASection variant="contact" />
    </div>
  );
}
