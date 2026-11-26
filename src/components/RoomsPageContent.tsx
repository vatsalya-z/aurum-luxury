'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Clock,
  Utensils,
  ShieldCheck,
  Calendar,
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Wifi,
  Flame,
  Car,
  Coffee,
  Compass,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Camera,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ROOMS, ROOM_MEAL_PLANS } from '@/data/rooms';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { INTERNAL_LINKS } from '@/data/seo/internalLinkMap';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RoomShowcaseSuite from '@/components/RoomShowcaseSuite';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from '@/components/animations/ScrollReveal';
import WinterEnvironment from '@/components/animations/WinterEnvironment';
import { useBooking } from '@/components/ClientLayout';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from '@/components/animations/variants';

const DISCOVERY_MEDIA: Record<string, string> = {
  '/rooms/luxury-bedroom-cottage': '/images/rooms/luxury-cottage-bathroom.png',
  '/rooms/elegant-chalet-dal-view': '/images/rooms/elegant-chalet-lounge.png',
  '/rooms/sunset-view-chalet-dal-view': '/images/rooms/sunset-chalet-emerald-suite.jpg',
  '/facilities': '/images/gallery/evening-property-illumination.png',
  '/contact': '/images/gallery/aurum-hillside-sanctuary-dal-lake.jpg',
};

const STORY_CHAPTERS = [
  {
    id: 'sunset-terrace',
    kicker: '01 · Panoramic Horizon',
    title: 'Elevated Above Shimmering Dal Lake',
    description:
      'Golden sunset reflections across shimmering Dal Lake, traditional Shikaras, and misty Zabarwan peaks.',
    image: '/images/rooms/sunset-chalet-panoramic-view.png',
    alt: 'Golden sunset reflections over shimmering Dal Lake with a traditional Kashmiri Shikara and Zabarwan mountains',
    spanClass: 'rstory-card--wide',
  },
  {
    id: 'observation-loft',
    kicker: '02 · Artisanal Heritage',
    title: 'A-Frame Lofts & Kashmiri Carpets',
    description:
      'Soaring pine A-frame apexes dressed with handwoven Kashmiri carpets facing Zabarwan peaks.',
    image: '/images/rooms/sunset-chalet-bathroom.png',
    alt: 'Handwoven Kashmiri carpet in A-frame upper observation loft overlooking Dal Lake',
    spanClass: 'rstory-card--tall',
  },
  {
    id: 'estate-architecture',
    kicker: '03 · Hillside Estate',
    title: 'Terraced Lawns & Chalet Enclave',
    description:
      'Manicured stone gardens and signature timber chalets nestled on emerald Brein Hills slopes.',
    image: '/images/facilities/dining-hall-wazwan.png',
    alt: 'Daylight architectural panorama of The Aurum terraced lawns and A-frame chalets in Brein Hills',
    spanClass: 'rstory-card--standard',
  },
  {
    id: 'wazwan-hospitality',
    kicker: '04 · Culinary Warmth',
    title: 'Boutique Dining & Gourmet Breakfasts',
    description:
      'Freshly prepared Kashmiri specialties, lavish morning spreads, and warm saffron Kahwa.',
    image: '/images/gallery/evening-property-illumination.png',
    alt: 'Boutique dining lounge and gourmet buffet spread at The Aurum Luxury Collection Srinagar',
    spanClass: 'rstory-card--standard',
  },
];

type GalleryCategory = 'All' | 'Suites & Bedrooms' | 'Views & Balconies' | 'Hotel & Estate' | 'Bath & Dining';

interface EstatePhotoItem {
  src: string;
  title: string;
  subtitle: string;
  category: Exclude<GalleryCategory, 'All'>;
  featured?: boolean;
}

const ESTATE_PHOTO_SHOWCASE: EstatePhotoItem[] = [
  {
    src: '/images/rooms/elegant-chalet-lounge.png',
    title: 'Elegant Chalet – Dal View Suite',
    subtitle: 'Soaring pine A-frame ceiling & open balcony doors to Dal Lake',
    category: 'Suites & Bedrooms',
    featured: true,
  },
  {
    src: '/images/rooms/luxury-cottage-bedroom.png',
    title: 'Twilight A-Frame Chalet Courtyard',
    subtitle: 'Illuminated hillside chalets against misty Zabarwan peaks',
    category: 'Hotel & Estate',
    featured: true,
  },
  {
    src: '/images/rooms/sunset-chalet-emerald-suite.jpg',
    title: 'Sunset View Emerald Master Suite',
    subtitle: 'Coffered cedar timbers, velvet king bed & panoramic glass wall',
    category: 'Suites & Bedrooms',
  },
  {
    src: '/images/facilities/breakfast-dining-spread.png',
    title: 'Dal-Facing Chalet Parlor & Lounge',
    subtitle: 'Timber slat divider & floor-to-ceiling valley panorama',
    category: 'Views & Balconies',
  },
  {
    src: '/images/rooms/luxury-cottage-bathroom.png',
    title: 'Luxury Bedroom Cottage Master Bed',
    subtitle: 'Channel-tufted headboard, wainscoting & warm wood floors',
    category: 'Suites & Bedrooms',
  },
  {
    src: '/images/rooms/elegant-chalet-timber-craft.png',
    title: 'Elevated Dal Lake Picture Window',
    subtitle: 'Framing Dal Lake waters and emerald Brein Hills slopes',
    category: 'Views & Balconies',
  },
  {
    src: '/images/facilities/dining-hall-wazwan.png',
    title: 'The Aurum Terraced Hillside Estate',
    subtitle: 'Manicured lawns, stone walkways & A-frame mountain enclave',
    category: 'Hotel & Estate',
    featured: true,
  },
  {
    src: '/images/rooms/sunset-chalet-lounge.png',
    title: 'Floor-to-Ceiling Sunset Deck Doors',
    subtitle: 'Draped A-frame glass opening onto the western terrace',
    category: 'Views & Balconies',
  },
  {
    src: '/images/gallery/aurum-chalet-timber-bedroom-suite.jpg',
    title: 'Aromatic Pine Skylight Bedroom',
    subtitle: 'Handcrafted mountain pine cladding & triangular skylight',
    category: 'Suites & Bedrooms',
  },
  {
    src: '/images/gallery/aurum-chalet-loft-bedroom.jpg',
    title: 'Vaulted Herringbone Chalet Suite',
    subtitle: 'Bespoke herringbone timber joinery & plush king bedding',
    category: 'Suites & Bedrooms',
  },
  {
    src: '/images/rooms/elegant-chalet-balcony.png',
    title: 'Sunlit Chalet & Mountain Balcony',
    subtitle: 'Private balcony doorway opening to crisp Himalayan air',
    category: 'Views & Balconies',
  },
  {
    src: '/images/rooms/luxury-cottage-vanity.png',
    title: 'Arched Garden-View Sitting Nook',
    subtitle: 'Plush velvet armchairs & in-room tea refreshment console',
    category: 'Suites & Bedrooms',
  },
  {
    src: '/images/gallery/aurum-twilight-panorama.jpg',
    title: 'Evening Illumination Across the Lawns',
    subtitle: 'Warm architectural lighting across terraced stone gardens',
    category: 'Hotel & Estate',
  },
  {
    src: '/images/gallery/aurum-hillside-flower-promenade.jpg',
    title: 'Blooming Hillside Chalet Promenade',
    subtitle: 'Seasonal Kashmiri garden blooms beneath Zabarwan peaks',
    category: 'Hotel & Estate',
  },
  {
    src: '/images/gallery/evening-property-illumination.png',
    title: 'Boutique Restaurant & Buffet Lounge',
    subtitle: 'Freshly prepared Kashmiri Wazwan & gourmet breakfasts',
    category: 'Bath & Dining',
  },
  {
    src: '/images/rooms/luxury-cottage-seating.png',
    title: 'Travertine Marble Rain-Shower Suite',
    subtitle: 'Frameless glass rain shower, backlit mirror & 24-hr hot water',
    category: 'Bath & Dining',
  },
];

const GALLERY_FILTERS: GalleryCategory[] = [
  'All',
  'Suites & Bedrooms',
  'Views & Balconies',
  'Hotel & Estate',
  'Bath & Dining',
];

const COMPLIMENTARY_INCLUSIONS = [
  { icon: Flame, label: 'All-Season Heating & AC', detail: 'Individual climate control in every residence' },
  { icon: Wifi, label: 'High-Speed Wi-Fi', detail: 'Complimentary across rooms, chalets & terrace' },
  { icon: Coffee, label: 'In-Room Tea & Coffee', detail: 'Electric kettle & replenishment daily' },
  { icon: Car, label: 'Private Estate Parking', detail: 'Secure on-site parking at 23A Brein Hills' },
];

export default function RoomsPageContent() {
  const { openBooking } = useBooking();
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const storyRef = useRef<HTMLElement | null>(null);

  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [galleryLightboxIdx, setGalleryLightboxIdx] = useState<number | null>(null);

  const filteredPhotos =
    activeFilter === 'All'
      ? ESTATE_PHOTO_SHOWCASE
      : ESTATE_PHOTO_SHOWCASE.filter((p) => p.category === activeFilter);

  const closeGalleryLightbox = useCallback(() => setGalleryLightboxIdx(null), []);
  const nextGalleryPhoto = useCallback(() => {
    setGalleryLightboxIdx((prev) =>
      prev === null ? null : (prev + 1) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);
  const prevGalleryPhoto = useCallback(() => {
    setGalleryLightboxIdx((prev) =>
      prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);

  useEffect(() => {
    if (galleryLightboxIdx === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeGalleryLightbox();
      else if (e.key === 'ArrowRight') nextGalleryPhoto();
      else if (e.key === 'ArrowLeft') prevGalleryPhoto();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [galleryLightboxIdx, closeGalleryLightbox, nextGalleryPhoto, prevGalleryPhoto]);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallaxY = useTransform(heroScroll, [0, 1], [0, 56]);

  const { scrollYProgress: storyScroll } = useScroll({
    target: storyRef,
    offset: ['start end', 'end start'],
  });
  const storyFloatY = useTransform(storyScroll, [0, 1], [20, -20]);

  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Rooms & Suites', url: 'https://aurumhotelskashmir.com/rooms' },
  ];

  const {
    props: { srcSet: desktopHeroSrcSet },
  } = getImageProps({
    alt: 'Vaulted Kashmiri pine chalet master suite opening onto panoramic Dal Lake vistas at The Aurum Srinagar',
    width: 2560,
    height: 1200,
    sizes: '100vw',
    quality: 94,
    priority: true,
    src: '/images/hero/aurum-rooms-hero-desktop.jpg',
  });

  const {
    props: { srcSet: mobileHeroSrcSet, ...heroImgRest },
  } = getImageProps({
    alt: 'Vaulted Kashmiri pine chalet master suite opening onto panoramic Dal Lake vistas at The Aurum Srinagar',
    width: 1200,
    height: 1500,
    sizes: '100vw',
    quality: 94,
    priority: true,
    src: '/images/hero/aurum-rooms-hero-mobile.jpg',
  });

  const discoveryLinks = INTERNAL_LINKS['/rooms'] || [];
  const activeModalPhoto =
    galleryLightboxIdx !== null ? filteredPhotos[galleryLightboxIdx] : null;

  return (
    <div className="rooms-luxury-page">
      {/* ========================================================
          SECTION 01 — CINEMATIC ACCOMMODATION HERO
          ======================================================== */}
      <section ref={heroRef} className="page-hero page-hero--tall rooms-hero-cinematic">
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
              alt="Vaulted Kashmiri pine chalet master suite opening onto panoramic Dal Lake vistas at The Aurum Srinagar"
              className="page-hero-img page-hero-img--art rooms-hero-zoom"
              style={heroImgRest.style}
            />
          </picture>
        </motion.div>

        <div className="page-hero-scrim rooms-hero-scrim" aria-hidden="true" />
        <div className="page-hero-gold-edge" aria-hidden="true" />

        <WinterEnvironment
          intensity="subtle"
          fog={true}
          fogPosition="bottom"
          fogIntensity="subtle"
          frostGlow={false}
          fogZIndex={2}
          snowZIndex={3}
        />

        <div className="wrap page-hero-content rooms-hero-content">
          <Breadcrumbs items={breadcrumbs} />

          <motion.div
            className="rooms-hero-loc-pill"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.05, ease: luxuryEase }}
          >
            <MapPin style={{ width: 12, height: 12, color: 'var(--gold)' }} />
            <span>23A Brein Hills · Astanpora · Dal View</span>
          </motion.div>

          <motion.span
            className="eyebrow eyebrow-wide page-hero-eyebrow"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: luxuryEase }}
          >
            ELITE RESIDENCES
          </motion.span>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.16, ease: luxuryEase }}
          >
            Rooms &amp;{' '}
            <span className="italic-serif" style={{ fontWeight: 500 }}>
              Luxury Chalets
            </span>
          </motion.h1>

          <motion.p
            className="page-hero-subtitle"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.24, ease: luxuryEase }}
          >
            Surround yourself with the natural splendour of Kashmir. Each cottage and chalet features
            handcrafted timber finishes, climate control, and tranquil mountain or Dal Lake vistas.
          </motion.p>

          <motion.div
            className="rooms-hero-actions"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.32, ease: luxuryEase }}
          >
            <a href="#collection" className="btn btn-gold btn-sm">
              <span>Explore Residences</span>
              <ArrowDown style={{ width: 14, height: 14 }} />
            </a>
            <button
              type="button"
              onClick={() => openBooking()}
              className="btn btn-outline-white btn-sm"
            >
              <Calendar style={{ width: 14, height: 14 }} />
              <span>Book Direct</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02 — EDITORIAL ACCOMMODATION INTRODUCTION
          ======================================================== */}
      <section id="collection" className="rooms-intro-section">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="rooms-intro-header">
              <span className="eyebrow eyebrow-wide">Distinctive Living Spaces</span>
              <h2>
                Select Your Preferred{' '}
                <span className="italic-serif text-gold">Accommodation</span>
              </h2>
              <div className="rooms-gold-ornament" aria-hidden="true">
                <span className="rooms-ornament-line" />
                <Sparkles style={{ width: 14, height: 14, color: 'var(--gold)' }} />
                <span className="rooms-ornament-line" />
              </div>
              <p>
                Whether you desire the cozy forest shelter of our Luxury Cottage or elevated panoramic
                horizons from our Dal View Chalets, every stay includes authentic hospitality and
                tailored meal options.
              </p>
            </div>
          </FadeIn>

          {/* Architectural Quick-Jump Residence Index */}
          <FadeIn direction="up" delay={0.1}>
            <nav className="rooms-index-bar" aria-label="Jump to residence">
              {ROOMS.map((room, idx) => (
                <a
                  key={room.id}
                  href={`#residence-${room.slug}`}
                  className="rooms-index-item"
                >
                  <span className="rooms-index-num">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="rooms-index-text">
                    <strong>{room.name}</strong>
                    <span>
                      {room.sizeSqFt ? `${room.sizeSqFt} sq. ft. · ` : ''}
                      {room.view}
                    </span>
                  </div>
                  <ArrowDown className="rooms-index-arrow" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </FadeIn>

          {/* ========================================================
              SECTION 03 — ELITE ACCOMMODATION COLLECTION (4+ VISIBLE PHOTOS PER SUITE)
              ======================================================== */}
          <div className="rooms-suites-stack">
            {ROOMS.map((room, idx) => (
              <RoomShowcaseSuite
                key={room.id}
                room={room}
                index={idx}
                onEnquire={(name) => openBooking(name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03B — COMPLETE ROOMS & HOTEL PHOTOGRAPHIC SHOWCASE (16 PHOTOS)
          ======================================================== */}
      <section className="rooms-gallery-showcase" id="estate-gallery">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="rooms-gallery-head">
              <span className="eyebrow eyebrow-wide">
                <Camera style={{ width: 14, height: 14, display: 'inline', marginRight: 6 }} />
                Inside Our Suites &amp; Hillside Estate
              </span>
              <h2>
                Explore Every Corner of{' '}
                <span className="italic-serif text-gold">The Aurum</span>
              </h2>
              <p>
                Browse authentic high-resolution photographs across our handcrafted cottages, Dal-facing
                A-frame chalets, terraced mountain lawns, dining lounge, and marble bathrooms.
              </p>

              {/* Category Filter Pills */}
              <div className="rooms-gallery-filters" role="tablist" aria-label="Filter hotel and room photos">
                {GALLERY_FILTERS.map((cat) => {
                  const isActive = activeFilter === cat;
                  const count =
                    cat === 'All'
                      ? ESTATE_PHOTO_SHOWCASE.length
                      : ESTATE_PHOTO_SHOWCASE.filter((p) => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => {
                        setActiveFilter(cat);
                        setGalleryLightboxIdx(null);
                      }}
                      className={`rooms-filter-pill ${isActive ? 'is-active' : ''}`}
                    >
                      <span>{cat}</span>
                      <span className="rooms-filter-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          <motion.div layout className="rooms-photo-mosaic">
            {filteredPhotos.map((photo, idx) => (
              <motion.button
                layout
                key={photo.src}
                type="button"
                className={`rooms-mosaic-card ${
                  activeFilter === 'All' && photo.featured ? 'rooms-mosaic-card--wide' : ''
                }`}
                onClick={() => setGalleryLightboxIdx(idx)}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: (idx % 4) * 0.05, ease: luxuryEase }}
                aria-label={`Enlarge ${photo.title}`}
              >
                <Image
                  src={photo.src}
                  alt={`${photo.title} — ${photo.subtitle}`}
                  width={900}
                  height={675}
                  quality={88}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="rooms-mosaic-card-img"
                />
                <div className="rooms-mosaic-card-scrim" aria-hidden="true" />
                <span className="rooms-mosaic-zoom" aria-hidden="true">
                  <Maximize2 style={{ width: 13, height: 13 }} />
                </span>
                <div className="rooms-mosaic-meta">
                  <span className="rooms-mosaic-cat">{photo.category}</span>
                  <strong>{photo.title}</strong>
                  <p>{photo.subtitle}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04 — ROOM EXPERIENCE VISUAL STORYTELLING
          ======================================================== */}
      <section ref={storyRef} className="rooms-story-section">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="rooms-story-head">
              <div>
                <span className="eyebrow eyebrow-wide" style={{ color: 'var(--gold-soft)' }}>
                  Architectural Storytelling
                </span>
                <h2>
                  Crafted in Deodar,{' '}
                  <span className="italic-serif" style={{ color: 'var(--gold-soft)' }}>
                    Framed by Dal Lake
                  </span>
                </h2>
              </div>
              <p>
                Every space at The Aurum is shaped around Kashmir’s natural elements — warm native
                cedar, expansive mountain glass, and quiet elevated terraces above the city bustle.
              </p>
            </div>
          </FadeIn>

          <motion.div
            className="rstory-bento"
            style={{ y: reducedMotion ? 0 : storyFloatY }}
          >
            {STORY_CHAPTERS.map((ch, idx) => (
              <motion.article
                key={ch.id}
                className={`rstory-card ${ch.spanClass}`}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.65, delay: idx * 0.08, ease: luxuryEase }}
              >
                <div className="rstory-media">
                  <Image
                    src={ch.image}
                    alt={ch.alt}
                    width={1448}
                    height={1086}
                    quality={90}
                    sizes="50vw"
                    className="rstory-img"
                  />
                  <div className="rstory-scrim" aria-hidden="true" />
                </div>

                <div className="rstory-caption">
                  <span className="rstory-kicker">{ch.kicker}</span>
                  <h3>{ch.title}</h3>
                  <p>{ch.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05 — BOOKING GUIDELINES & COMPLIMENTARY PERKS
          ======================================================== */}
      <section className="rooms-guidelines-section">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="rooms-guidelines-shell">
              <div className="rooms-guidelines-top">
                <div>
                  <span className="eyebrow eyebrow-wide" style={{ color: 'var(--gold-soft)' }}>
                    Direct Stay Privileges
                  </span>
                  <h3>Booking Guidelines &amp; Complimentary Perks</h3>
                  <p>
                    Transparent house policies, flexible dining plans, and assured direct-reservation
                    care from our Brein Hills concierge team.
                  </p>
                </div>

                <a
                  href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(
                    'Hello, I would like to enquire about room availability and current direct rates at The Aurum Luxury Collection.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa btn-sm"
                >
                  <FaWhatsapp style={{ width: 16, height: 16 }} />
                  <span>WhatsApp Desk</span>
                </a>
              </div>

              {/* 3 Core Guidelines */}
              <div className="rooms-policy-trio">
                <div className="rooms-policy-card">
                  <div className="rooms-policy-icon">
                    <Clock style={{ width: 18, height: 18 }} />
                  </div>
                  <strong>Standard Timings</strong>
                  <p>
                    Check-in from <strong>2:00 PM</strong> · Check-out until <strong>12:00 PM</strong>.
                    Early check-in or late checkout is gladly accommodated subject to cottage availability.
                  </p>
                </div>

                <div className="rooms-policy-card">
                  <div className="rooms-policy-icon">
                    <Utensils style={{ width: 18, height: 18 }} />
                  </div>
                  <strong>Flexible Meal Packages</strong>
                  <p>
                    Choose from <strong>Room Only (EP)</strong>, <strong>Room + Breakfast (CP)</strong>,
                    or <strong>Room + Breakfast + 1 Meal (MAP)</strong> freshly prepared in our kitchen.
                  </p>
                </div>

                <div className="rooms-policy-card">
                  <div className="rooms-policy-icon">
                    <ShieldCheck style={{ width: 18, height: 18 }} />
                  </div>
                  <strong>Direct Booking Promise</strong>
                  <p>
                    Enquire directly through our website or WhatsApp desk for current promotional
                    seasonal rates with zero hidden booking fees.
                  </p>
                </div>
              </div>

              {/* Meal Plans Breakdown + Complimentary Inclusions */}
              <div className="rooms-perks-bottom">
                <div className="rooms-mealplans-strip">
                  <span className="rooms-substrip-label">Available Dining Plans</span>
                  <div className="rooms-mealplans-grid">
                    {ROOM_MEAL_PLANS.map((mp) => (
                      <div key={mp.id} className="rooms-mp-item">
                        <div className="rooms-mp-head">
                          <strong>{mp.name}</strong>
                          {mp.badge && <span className="rooms-mp-badge">{mp.badge}</span>}
                        </div>
                        <p>{mp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rooms-inclusions-strip">
                  <span className="rooms-substrip-label">Complimentary With Every Residence</span>
                  <div className="rooms-inclusions-grid">
                    {COMPLIMENTARY_INCLUSIONS.map((inc) => {
                      const IconComp = inc.icon;
                      return (
                        <div key={inc.label} className="rooms-inc-item">
                          <div className="rooms-inc-icon">
                            <IconComp style={{ width: 16, height: 16 }} />
                          </div>
                          <div>
                            <strong>{inc.label}</strong>
                            <span>{inc.detail}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          SECTION 06 — ENHANCE YOUR STAY (CURATED DISCOVERY)
          ======================================================== */}
      <section className="rooms-discover-section">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="rooms-discover-head">
              <span className="eyebrow eyebrow-wide">
                <Compass style={{ width: 14, height: 14, display: 'inline', marginRight: 6 }} />
                Curated Discovery
              </span>
              <h2>
                Enhance Your <span className="italic-serif text-gold">Stay</span>
              </h2>
              <p>
                Explore individual residence profiles, on-site Kashmiri dining, and direct reservation
                assistance.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal className="rooms-discover-grid" staggerChildren={0.08}>
            {discoveryLinks.map((link) => {
              const thumb =
                DISCOVERY_MEDIA[link.href] || '/images/gallery/aurum-hillside-sanctuary-dal-lake.jpg';
              return (
                <ScrollRevealItem key={link.href} direction="up" distance={22}>
                  <Link href={link.href} className="rooms-discover-card">
                    <div className="rooms-discover-thumb">
                      <Image
                        src={thumb}
                        alt={link.title}
                        width={640}
                        height={420}
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 33vw"
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
          SECTION 07 — ROOMS & LUXURY CHALETS FAQ
          ======================================================== */}
      <FAQSection
        page="rooms"
        title="Rooms & Luxury Chalets FAQ"
        subtitle="Everything you need to know about our luxury cottages, Dal View chalets, and bedding options."
      />

      {/* ========================================================
          SECTION 08 — CINEMATIC FINAL BOOKING CTA
          ======================================================== */}
      <CTASection variant="rooms" onOpenBooking={() => openBooking()} />

      {/* ─── Estate Gallery Fullscreen Lightbox ─── */}
      <AnimatePresence>
        {activeModalPhoto && galleryLightboxIdx !== null && (
          <motion.div
            className="rsuite-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activeModalPhoto.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeGalleryLightbox();
            }}
          >
            <div className="rsuite-lightbox-topbar">
              <div className="rsuite-lightbox-meta">
                <span className="rsuite-lightbox-kicker">{activeModalPhoto.category}</span>
                <strong>{activeModalPhoto.title}</strong>
              </div>

              <div className="rsuite-lightbox-actions">
                <span className="rsuite-lightbox-counter">
                  {String(galleryLightboxIdx + 1).padStart(2, '0')} /{' '}
                  {String(filteredPhotos.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  className="btn btn-gold btn-sm"
                  onClick={() => {
                    closeGalleryLightbox();
                    openBooking();
                  }}
                >
                  <span>Book Stay</span>
                </button>
                <button
                  type="button"
                  className="rsuite-lightbox-close"
                  onClick={closeGalleryLightbox}
                  aria-label="Close photo lightbox"
                >
                  <X style={{ width: 20, height: 20 }} />
                </button>
              </div>
            </div>

            <div className="rsuite-lightbox-stage">
              <button
                type="button"
                className="rsuite-lightbox-arrow rsuite-lightbox-arrow--prev"
                onClick={prevGalleryPhoto}
                aria-label="Previous photo"
              >
                <ChevronLeft style={{ width: 24, height: 24 }} />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModalPhoto.src}
                  className="rsuite-lightbox-img-wrap"
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.28, ease: luxuryEase }}
                >
                  <Image
                    src={activeModalPhoto.src}
                    alt={activeModalPhoto.title}
                    width={1448}
                    height={1086}
                    quality={95}
                    sizes="95vw"
                    className="rsuite-lightbox-img"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                className="rsuite-lightbox-arrow rsuite-lightbox-arrow--next"
                onClick={nextGalleryPhoto}
                aria-label="Next photo"
              >
                <ChevronRight style={{ width: 24, height: 24 }} />
              </button>
            </div>

            <div className="rsuite-lightbox-footer">
              <p>{activeModalPhoto.subtitle}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
