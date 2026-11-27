'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  MapPin,
  Clock,
  Compass,
  Sparkles,
  ExternalLink,
  ArrowDown,
  ArrowUpRight,
  Mountain,
  Flower2,
  Waves,
  Landmark,
  Car,
  Camera,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { EXTENDED_EXPERIENCES, Attraction } from '@/data/attractions';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { INTERNAL_LINKS } from '@/data/seo/internalLinkMap';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from '@/components/animations/ScrollReveal';
import WinterEnvironment from '@/components/animations/WinterEnvironment';
import { useBooking } from '@/components/ClientLayout';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from '@/components/animations/variants';

type SightFilter = 'All Landmarks' | 'Lakes & Nature' | 'Mughal & Heritage' | 'Valley Day Trips';

const SIGHT_FILTERS: SightFilter[] = [
  'All Landmarks',
  'Lakes & Nature',
  'Mughal & Heritage',
  'Valley Day Trips',
];

const DISCOVERY_MEDIA: Record<string, string> = {
  '/rooms': '/images/rooms/elegant-chalet-lounge.png',
  '/facilities': '/images/gallery/evening-property-illumination.png',
  '/contact': '/images/hero/aurum-contact-hero-desktop.jpg',
};

const VALLEY_EXCURSIONS = [
  {
    code: '01 · ALPINE MEADOWS',
    title: 'Gulmarg & Gondola',
    distance: '54 km from Estate',
    detail: 'High-altitude pine meadows, world-renowned Gondola cable car, and winter powder skiing.',
  },
  {
    code: '02 · GLACIER VALLEY',
    title: 'Sonamarg & Thajiwas',
    distance: '84 km from Estate',
    detail: 'The Meadow of Gold framed by Sindh River rapids and snow-clad Thajiwas Glacier trails.',
  },
  {
    code: '03 · PINE RIVERSIDE',
    title: 'Pahalgam & Betaab',
    distance: '92 km from Estate',
    detail: 'Lush Lidder Valley pine forests, Betaab Valley vistas, and serene Aru mountain hamlets.',
  },
  {
    code: '04 · HERITAGE CRAFTS',
    title: 'Old City & Polo View',
    distance: '20–25 min Drive',
    detail: 'Authentic Kashmiri Pashmina, hand-knotted silk carpets, walnut woodwork, and saffron.',
  },
];

interface FlatSightPhoto {
  src: string;
  caption: string;
  landmarkName: string;
  distance: string;
  category: string;
}

export default function ExperiencesPageContent() {
  const { openBooking } = useBooking();
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);

  const [activeFilter, setActiveFilter] = useState<SightFilter>('All Landmarks');
  const [cardPhotoIndices, setCardPhotoIndices] = useState<Record<string, number>>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallaxY = useTransform(heroScroll, [0, 1], [0, 52]);

  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Experiences & Sights', url: 'https://aurumhotelskashmir.com/experiences' },
  ];

  const {
    props: { srcSet: desktopHeroSrcSet },
  } = getImageProps({
    alt: 'Traditional Kashmiri cedarwood Shikara gliding across tranquil Dal Lake toward the Zabarwan mountains in Srinagar',
    width: 2560,
    height: 1200,
    sizes: '100vw',
    quality: 94,
    priority: true,
    src: '/images/hero/aurum-experiences-hero-desktop.jpg',
  });

  const {
    props: { srcSet: mobileHeroSrcSet, ...heroImgRest },
  } = getImageProps({
    alt: 'Traditional Kashmiri cedarwood Shikara gliding across tranquil Dal Lake toward the Zabarwan mountains in Srinagar',
    width: 1200,
    height: 1500,
    sizes: '100vw',
    quality: 94,
    priority: true,
    src: '/images/hero/aurum-experiences-hero-mobile.jpg',
  });

  const filteredAttractions = EXTENDED_EXPERIENCES.filter((item) => {
    if (activeFilter === 'All Landmarks') return true;
    return item.filterGroup === activeFilter;
  });

  const allLightboxPhotos: FlatSightPhoto[] = filteredAttractions.flatMap((item) => {
    const list =
      item.gallery && item.gallery.length > 0
        ? item.gallery
        : [{ src: item.image, caption: item.name }];
    return list.map((g) => ({
      src: g.src,
      caption: g.caption,
      landmarkName: item.name,
      distance: `${item.distance} · ${item.travelTime}`,
      category: item.category,
    }));
  });

  const openLandmarkLightbox = (item: Attraction, subIdx: number) => {
    const targetSrc =
      item.gallery && item.gallery[subIdx] ? item.gallery[subIdx].src : item.image;
    const foundIdx = allLightboxPhotos.findIndex(
      (p) => p.landmarkName === item.name && p.src === targetSrc
    );
    setLightboxIndex(foundIdx >= 0 ? foundIdx : 0);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % allLightboxPhotos.length
    );
  }, [allLightboxPhotos.length]);
  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + allLightboxPhotos.length) % allLightboxPhotos.length
    );
  }, [allLightboxPhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextLightbox();
      else if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  const activeLightboxItem =
    lightboxIndex !== null ? allLightboxPhotos[lightboxIndex] : null;

  const discoveryLinks = INTERNAL_LINKS['/experiences'] || [];
  const conciergeWaUrl = `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hello, I would like assistance planning Srinagar sightseeing, Shikara rides, or Kashmir day excursions during my stay at The Aurum.'
  )}`;

  const getCountForTab = (tab: SightFilter) =>
    tab === 'All Landmarks'
      ? EXTENDED_EXPERIENCES.length
      : EXTENDED_EXPERIENCES.filter((i) => i.filterGroup === tab).length;

  return (
    <div className="exp-luxury-page">
      {/* ========================================================
          SECTION 01 — CINEMATIC SRINAGAR ESCAPES HERO
          ======================================================== */}
      <section ref={heroRef} className="page-hero page-hero--tall exp-hero-cinematic">
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
              alt="Traditional Kashmiri cedarwood Shikara gliding across tranquil Dal Lake toward the Zabarwan mountains in Srinagar"
              className="page-hero-img page-hero-img--art exp-hero-zoom"
              style={heroImgRest.style}
            />
          </picture>
        </motion.div>

        <div className="page-hero-scrim exp-hero-scrim" aria-hidden="true" />
        <div className="page-hero-gold-edge" aria-hidden="true" />

        <WinterEnvironment
          intensity="subtle"
          fog={false}
          frostGlow={false}
          snowZIndex={3}
        />

        <div className="wrap page-hero-content exp-hero-content">
          <Breadcrumbs items={breadcrumbs} />

          <motion.div
            className="rooms-hero-loc-pill"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.05, ease: luxuryEase }}
          >
            <MapPin style={{ width: 12, height: 12, color: 'var(--gold)' }} />
            <span>4.5 km from Dal Lake · Brein Hills Sanctuary</span>
          </motion.div>

          <motion.span
            className="eyebrow eyebrow-wide page-hero-eyebrow"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: luxuryEase }}
          >
            SRINAGAR ESCAPES &amp; HERITAGE
          </motion.span>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.16, ease: luxuryEase }}
          >
            Discover the Beauty of{' '}
            <span className="italic-serif" style={{ fontWeight: 500 }}>
              Srinagar
            </span>
          </motion.h1>

          <motion.p
            className="page-hero-subtitle"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.24, ease: luxuryEase }}
          >
            Perched peacefully in Brein Hills, Astanpora — placing you minutes from Dal Lake
            Shikara cruises, royal Mughal gardens, and Zabarwan mountain trails.
          </motion.p>

          <motion.div
            className="rooms-hero-actions"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.32, ease: luxuryEase }}
          >
            <a href="#destinations" className="btn btn-gold btn-sm">
              <span>Explore Sights</span>
              <ArrowDown style={{ width: 14, height: 14 }} />
            </a>
            <a
              href={conciergeWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-sm"
            >
              <FaWhatsapp style={{ width: 15, height: 15 }} />
              <span>Concierge Desk</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02 — VALLEY PROXIMITY HIGHLIGHTS RIBBON (4-COL / 2x2 MOBILE)
          ======================================================== */}
      <section className="exp-highlights-ribbon" aria-label="Srinagar Sightseeing Highlights">
        <div className="wrap">
          <div className="exp-highlights-grid">
            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <Waves style={{ width: 17, height: 17 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">4.5 km · 12 Min</span>
                <strong>Dal Lake Shikaras</strong>
                <p>Sunrise lotus rides &amp; Char Chinar</p>
              </div>
            </div>

            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <Landmark style={{ width: 17, height: 17 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">5.2–8.5 km Circuit</span>
                <strong>Royal Mughal Gardens</strong>
                <p>Nishat, Chashme Shahi, Shalimar &amp; Pari Mahal</p>
              </div>
            </div>

            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <Flower2 style={{ width: 17, height: 17 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">6.0 km · 15 Min</span>
                <strong>Asia&apos;s Largest Tulip Park</strong>
                <p>Zabarwan foothills spring bloom</p>
              </div>
            </div>

            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <Mountain style={{ width: 17, height: 17 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">Private Travel Desk</span>
                <strong>Alpine Day Trips</strong>
                <p>Gulmarg, Sonamarg &amp; Pahalgam cabs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03 — CELEBRATED SRINAGAR & KASHMIR DESTINATIONS (12 SIGHTS + MULTI-PHOTO)
          ======================================================== */}
      <section id="destinations" className="exp-collection-section">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="exp-collection-head">
              <span className="eyebrow eyebrow-wide">
                <Camera style={{ width: 13, height: 13, display: 'inline', marginRight: 6 }} />
                12 Curated Landmarks · {allLightboxPhotos.length} High-Resolution Views
              </span>
              <h2>
                Iconic Landmarks &amp; <span className="italic-serif text-gold">Imperial Gardens</span>
              </h2>
              <p>
                Explore Srinagar’s lakeside sanctuaries, 17th-century Mughal gardens, hilltop
                fortresses, and classic Himalayan valley day trips — click any photograph to view
                in full screen.
              </p>

              <div
                className="rooms-gallery-filters exp-filter-bar"
                role="tablist"
                aria-label="Filter Srinagar and Kashmir destinations"
              >
                {SIGHT_FILTERS.map((tab) => {
                  const isActive = activeFilter === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => {
                        setActiveFilter(tab);
                        setLightboxIndex(null);
                      }}
                      className={`rooms-filter-pill ${isActive ? 'is-active' : ''}`}
                    >
                      <span>{tab}</span>
                      <span className="rooms-filter-count">{getCountForTab(tab)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          <motion.div layout className="exp-sights-grid">
            {filteredAttractions.map((item, idx) => {
              const isFeatured = activeFilter === 'All Landmarks' && idx === 0;
              const galleryList =
                item.gallery && item.gallery.length > 0
                  ? item.gallery
                  : [{ src: item.image, caption: item.name }];
              const activePhotoIdx = cardPhotoIndices[item.id] ?? 0;
              const safePhotoIdx = activePhotoIdx < galleryList.length ? activePhotoIdx : 0;
              const currentPhoto = galleryList[safePhotoIdx];

              const itemWaUrl = `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(
                `Hello, I would like concierge assistance visiting ${item.name} (${item.distance}) during my stay at The Aurum.`
              )}`;

              return (
                <motion.article
                  layout
                  key={item.id}
                  className={`exp-sight-card ${isFeatured ? 'exp-sight-card--featured' : ''}`}
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.05, ease: luxuryEase }}
                >
                  <div className="exp-sight-media-col">
                    <div
                      className="exp-sight-media"
                      onClick={() => openLandmarkLightbox(item, safePhotoIdx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openLandmarkLightbox(item, safePhotoIdx);
                        }
                      }}
                      aria-label={`Enlarge ${item.name} photograph`}
                    >
                      <Image
                        src={currentPhoto.src}
                        alt={`${item.name} — ${currentPhoto.caption}`}
                        width={1280}
                        height={854}
                        quality={90}
                        sizes={
                          isFeatured
                            ? '(max-width: 1024px) 100vw, 60vw'
                            : '(max-width: 768px) 100vw, 33vw'
                        }
                        className="exp-sight-img"
                      />
                      <div className="exp-sight-scrim" aria-hidden="true" />

                      <span className="exp-sight-cat-pill">{item.category}</span>

                      <span className="exp-sight-zoom-btn" aria-hidden="true">
                        {galleryList.length > 1 && (
                          <span className="exp-photo-count">
                            {safePhotoIdx + 1}/{galleryList.length}
                          </span>
                        )}
                        <Maximize2 style={{ width: 13, height: 13 }} />
                      </span>

                      <div className="exp-sight-geo-row">
                        <span className="exp-geo-chip exp-geo-chip--gold">
                          <MapPin style={{ width: 11, height: 11 }} />
                          {item.distance}
                        </span>
                        <span className="exp-geo-chip">
                          <Clock style={{ width: 11, height: 11 }} />
                          {item.travelTime}
                        </span>
                      </div>
                    </div>

                    {galleryList.length > 1 && (
                      <div className="exp-sight-thumbs" aria-label={`${item.name} photo views`}>
                        {galleryList.map((g, gIdx) => (
                          <button
                            key={g.src}
                            type="button"
                            onClick={() =>
                              setCardPhotoIndices((prev) => ({ ...prev, [item.id]: gIdx }))
                            }
                            className={`exp-sight-thumb-btn ${
                              safePhotoIdx === gIdx ? 'is-active' : ''
                            }`}
                            aria-label={`View ${g.caption}`}
                          >
                            <Image
                              src={g.src}
                              alt={g.caption}
                              width={180}
                              height={120}
                              quality={75}
                              sizes="90px"
                              className="exp-sight-thumb-img"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="exp-sight-body">
                    <div className="exp-sight-copy">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>

                    {item.highlight && (
                      <div className="exp-sight-highlight">
                        <Sparkles style={{ width: 14, height: 14 }} />
                        <span>{item.highlight}</span>
                      </div>
                    )}

                    <div className="exp-sight-actions">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          item.name + ' Kashmir'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-navy btn-sm"
                      >
                        <span>Directions</span>
                        <ExternalLink style={{ width: 13, height: 13 }} />
                      </a>
                      <a
                        href={itemWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold btn-sm"
                      >
                        <span>Plan Visit</span>
                        <ArrowUpRight style={{ width: 14, height: 14 }} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04 — BEYOND SRINAGAR: VALLEY DAY EXCURSIONS & CRAFTS
          ======================================================== */}
      <section className="exp-valley-section">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="exp-valley-head">
              <div>
                <span className="eyebrow eyebrow-wide" style={{ color: 'var(--gold-soft)' }}>
                  Concierge Travel Desk
                </span>
                <h2>
                  Full-Day Kashmir{' '}
                  <span className="italic-serif" style={{ color: 'var(--gold-soft)' }}>
                    Valley Excursions
                  </span>
                </h2>
              </div>
              <p>
                Our front desk schedules private, sanitized tourist vehicles with experienced
                local mountain drivers for day trips and artisanal heritage trails.
              </p>
            </div>
          </FadeIn>

          <div className="exp-valley-grid">
            {VALLEY_EXCURSIONS.map((exc) => (
              <div key={exc.title} className="exp-valley-card">
                <span className="exp-valley-code">{exc.code}</span>
                <h3>{exc.title}</h3>
                <span className="exp-valley-dist">
                  <Car style={{ width: 12, height: 12 }} />
                  {exc.distance}
                </span>
                <p>{exc.detail}</p>
              </div>
            ))}
          </div>

          <FadeIn direction="up" delay={0.1}>
            <div className="exp-concierge-banner">
              <div className="exp-concierge-banner-media">
                <Image
                  src="/images/experience/srinagar-attractions-itinerary-guide.jpg"
                  alt="The Aurum concierge helping guests plan a bespoke Kashmir sightseeing itinerary"
                  width={600}
                  height={448}
                  quality={88}
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="exp-concierge-banner-img"
                />
              </div>
              <div className="exp-concierge-banner-body">
                <span className="eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: 4 }}>
                  Tailored Sightseeing Assistance
                </span>
                <h3>Custom Multi-Day Kashmir Itineraries</h3>
                <p>
                  Whether arranging an early-morning Shikara to the floating market, avoiding peak
                  Tulip Garden traffic, or booking a private Gulmarg excursion cab — our 24/7 desk
                  coordinates every detail.
                </p>
                <div className="exp-concierge-banner-btns">
                  <button
                    type="button"
                    onClick={() => openBooking()}
                    className="btn btn-gold btn-sm"
                  >
                    <span>Book Stay &amp; Itinerary</span>
                  </button>
                  <a
                    href={conciergeWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-wa btn-sm"
                  >
                    <FaWhatsapp style={{ width: 15, height: 15 }} />
                    <span>Message Travel Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          SECTION 05 — CONTINUE PLANNING YOUR SRINAGAR JOURNEY
          ======================================================== */}
      <section className="rooms-discover-section">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="rooms-discover-head">
              <span className="eyebrow eyebrow-wide">
                <Compass style={{ width: 14, height: 14, display: 'inline', marginRight: 6 }} />
                The Aurum Sanctuary
              </span>
              <h2>
                Continue Planning Your <span className="italic-serif text-gold">Journey</span>
              </h2>
              <p>
                Pair unforgettable Kashmir sightseeing with handcrafted pine chalets, authentic
                Wazwan dining, and serene Brein Hills views.
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
          SECTION 06 — SRINAGAR SIGHTSEEING & EXCURSIONS FAQ
          ======================================================== */}
      <FAQSection
        page="experiences"
        title="Srinagar Sightseeing & Excursions FAQ"
        subtitle="Helpful answers about visiting Dal Lake, Mughal Gardens, Tulip season, and Kashmir day trips."
      />

      {/* ========================================================
          SECTION 07 — BEGIN YOUR SRINAGAR ADVENTURE WITH US CTA
          ======================================================== */}
      <CTASection variant="experiences" onOpenBooking={() => openBooking()} />

      {/* ─── Fullscreen Sightseeing Lightbox ─── */}
      <AnimatePresence>
        {activeLightboxItem && lightboxIndex !== null && (
          <motion.div
            className="rsuite-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activeLightboxItem.landmarkName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            <div className="rsuite-lightbox-topbar">
              <div className="rsuite-lightbox-meta">
                <span className="rsuite-lightbox-kicker">
                  {activeLightboxItem.category} · {activeLightboxItem.distance}
                </span>
                <strong>{activeLightboxItem.landmarkName}</strong>
              </div>

              <div className="rsuite-lightbox-actions">
                <span className="rsuite-lightbox-counter">
                  {String(lightboxIndex + 1).padStart(2, '0')} /{' '}
                  {String(allLightboxPhotos.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  className="rsuite-lightbox-close"
                  onClick={closeLightbox}
                  aria-label="Close sightseeing lightbox"
                >
                  <X style={{ width: 20, height: 20 }} />
                </button>
              </div>
            </div>

            <div className="rsuite-lightbox-stage">
              <button
                type="button"
                className="rsuite-lightbox-arrow rsuite-lightbox-arrow--prev"
                onClick={prevLightbox}
                aria-label="Previous destination photo"
              >
                <ChevronLeft style={{ width: 24, height: 24 }} />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLightboxItem.src}
                  className="rsuite-lightbox-img-wrap"
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.26, ease: luxuryEase }}
                >
                  <Image
                    src={activeLightboxItem.src}
                    alt={activeLightboxItem.caption}
                    width={1600}
                    height={1066}
                    quality={94}
                    sizes="95vw"
                    className="rsuite-lightbox-img"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                className="rsuite-lightbox-arrow rsuite-lightbox-arrow--next"
                onClick={nextLightbox}
                aria-label="Next destination photo"
              >
                <ChevronRight style={{ width: 24, height: 24 }} />
              </button>
            </div>

            <div className="rsuite-lightbox-footer">
              <p>{activeLightboxItem.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
