'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Camera,
  Sparkles,
  Mountain,
  Home,
  UtensilsCrossed,
  Compass,
  Maximize2,
  LayoutGrid,
  Columns3,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowDown,
  ArrowUpRight,
  Calendar,
  MapPin,
  Users,
  Eye,
  X,
} from 'lucide-react';
import {
  GALLERY_ITEMS,
  GALLERY_CATEGORIES,
  GalleryCategory,
  GalleryItem,
} from '@/data/gallery';
import { ROOMS } from '@/data/rooms';
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

const DISCOVERY_MEDIA: Record<string, string> = {
  '/rooms': '/images/gallery/aurum-chalet-timber-bedroom-suite.jpg',
  '/facilities': '/images/gallery/kashmiri-dining-hall-khatamband.jpg',
  '/contact': '/images/hero/aurum-contact-hero-desktop.jpg',
  '/experiences': '/images/hero/aurum-experiences-hero-desktop.jpg',
};

const INITIAL_ALL_COUNT = 18;

export default function GalleryPageContent() {
  const { openBooking } = useBooking();
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const archiveRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const filmstripRef = useRef<HTMLDivElement | null>(null);

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All Photos');
  const [viewMode, setViewMode] = useState<'mosaic' | 'grid'>('mosaic');
  const [expandedAll, setExpandedAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallaxY = useTransform(heroScroll, [0, 1], [0, 22]);

  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Photo Gallery', url: 'https://aurumhotelskashmir.com/gallery' },
  ];

  const {
    props: { srcSet: desktopHeroSrcSet },
  } = getImageProps({
    alt: 'Illuminated glass-fronted A-frame chalets and stone courtyard at twilight against the Zabarwan mountains at The Aurum Srinagar',
    width: 2560,
    height: 1437,
    sizes: '100vw',
    quality: 96,
    priority: true,
    src: '/images/hero/aurum-gallery-hero-desktop.jpg',
  });

  const {
    props: { srcSet: mobileHeroSrcSet, ...heroImgRest },
  } = getImageProps({
    alt: 'Illuminated glass-fronted A-frame chalets and stone walkway at blue hour at The Aurum Srinagar',
    width: 1200,
    height: 1600,
    sizes: '100vw',
    quality: 96,
    priority: true,
    src: '/images/hero/aurum-gallery-hero-mobile.jpg',
  });

  const filteredItems =
    activeCategory === 'All Photos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const isCapped = activeCategory === 'All Photos' && !expandedAll;
  const visibleItems = isCapped
    ? filteredItems.slice(0, INITIAL_ALL_COUNT)
    : filteredItems;
  const remainingCount = filteredItems.length - visibleItems.length;

  const getCategoryCount = (cat: GalleryCategory) =>
    cat === 'All Photos'
      ? GALLERY_ITEMS.length
      : GALLERY_ITEMS.filter((i) => i.category === cat).length;

  const handleSelectCategory = (cat: GalleryCategory) => {
    setActiveCategory(cat);
  };

  const openPhotoLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((fi) => fi.id === item.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const jumpToCategoryFromResidence = (cat: GalleryCategory) => {
    setActiveCategory(cat);
    archiveRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

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

  useEffect(() => {
    if (lightboxIndex === null || !filmstripRef.current) return;
    const activeBtn = filmstripRef.current.querySelector<HTMLButtonElement>(
      `[data-lb-idx="${lightboxIndex}"]`
    );
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [lightboxIndex]);

  const activeLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const discoveryLinks = INTERNAL_LINKS['/gallery'] || [];

  return (
    <div className="gal-luxury-page">
      {/* ========================================================
          SECTION 01 — CINEMATIC BLUE-HOUR SANCTUARY HERO
          ======================================================== */}
      <section ref={heroRef} className="page-hero page-hero--tall gal-hero-cinematic">
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
              alt="Illuminated glass-fronted A-frame chalets and stone courtyard at twilight against the Zabarwan mountains at The Aurum Srinagar"
              className="page-hero-img page-hero-img--art gal-hero-zoom"
              style={heroImgRest.style}
            />
          </picture>
        </motion.div>

        <div className="page-hero-scrim gal-hero-scrim" aria-hidden="true" />
        <div className="page-hero-gold-edge" aria-hidden="true" />

        <WinterEnvironment intensity="subtle" fog={false} snowZIndex={3} />

        <div className="page-hero-inner gal-hero-content">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
          >
            <Breadcrumbs items={breadcrumbs} />
          </motion.div>

          <motion.div
            className="rooms-hero-loc-pill"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease: luxuryEase }}
          >
            <Camera style={{ width: 13, height: 13 }} />
            <span>Verified Estate Archive · Brein Hills, Srinagar</span>
          </motion.div>

          <motion.span
            className="eyebrow eyebrow-wide page-hero-eyebrow"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: luxuryEase }}
          >
            CURATED VISUAL LOOKBOOK
          </motion.span>

          <motion.h1
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: luxuryEase }}
          >
            The Aurum in <span className="italic-serif text-gold">Frame</span>
          </motion.h1>

          <motion.p
            className="page-hero-subtitle"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: luxuryEase }}
          >
            Authentic photographs of our glass-fronted A-frame chalets, cedar-panelled
            cottages, Khatamband dining hall, and golden-hour vistas over Dal Lake.
          </motion.p>

          <motion.div
            className="rooms-hero-actions gal-hero-actions"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32, ease: luxuryEase }}
          >
            <a href="#gallery-archive" className="btn btn-gold">
              <span>Browse Collection</span>
              <ArrowDown style={{ width: 15, height: 15 }} />
            </a>
            <button
              type="button"
              onClick={() => openBooking()}
              className="btn btn-line-white"
            >
              <Calendar style={{ width: 15, height: 15 }} />
              <span>Book Your Stay</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02 — CURATED PHOTOGRAPHY HIGHLIGHTS RIBBON
          ======================================================== */}
      <section className="exp-highlights-ribbon" aria-label="Gallery Highlights">
        <div className="wrap">
          <div className="exp-highlights-grid">
            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <Camera style={{ width: 19, height: 19 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">Authentic Archive</span>
                <strong>{GALLERY_ITEMS.length} Verified Frames</strong>
                <p>Genuine property &amp; valley views</p>
              </div>
            </div>

            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <Home style={{ width: 19, height: 19 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">Timber Craft</span>
                <strong>Chalets &amp; Cottages</strong>
                <p>Cedar interiors &amp; glass A-frames</p>
              </div>
            </div>

            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <Mountain style={{ width: 19, height: 19 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">Golden &amp; Blue Hour</span>
                <strong>Dal &amp; Zabarwan Vistas</strong>
                <p>Sunset terrace &amp; dusk courtyard</p>
              </div>
            </div>

            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <UtensilsCrossed style={{ width: 19, height: 19 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">Kashmiri Heritage</span>
                <strong>Khatamband &amp; Wazwan</strong>
                <p>Handcrafted dining &amp; gardens</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03 — INTERACTIVE VISUAL ARCHIVE & MOSAIC
          ======================================================== */}
      <section
        ref={archiveRef}
        id="gallery-archive"
        className="gal-archive-section"
      >
        <div className="wrap">
          <FadeIn direction="up">
            <div className="gal-archive-head">
              <span className="eyebrow eyebrow-wide">
                <Sparkles style={{ width: 13, height: 13, display: 'inline', marginRight: 6 }} />
                Visual Sanctuary Archive
              </span>
              <h2>
                Explore Every Corner of{' '}
                <span className="italic-serif text-gold">The Aurum</span>
              </h2>
              <p>
                Filter by chalet interiors, hillside exteriors, culinary spaces, or nearby
                Srinagar landmarks — click any photograph to inspect in full resolution.
              </p>
            </div>
          </FadeIn>

          {/* Filter Pills + Desktop View Switcher */}
          <div className="gal-toolbar">
            <div
              className="gal-filter-rail"
              role="tablist"
              aria-label="Filter photographs by category"
            >
              {GALLERY_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelectCategory(cat)}
                    className={`gal-filter-pill${isSelected ? ' is-active' : ''}`}
                  >
                    <span>{cat}</span>
                    <span className="gal-filter-count">{getCategoryCount(cat)}</span>
                  </button>
                );
              })}
            </div>

            <div className="gal-view-toggle" aria-label="Gallery layout mode">
              <button
                type="button"
                onClick={() => setViewMode('mosaic')}
                aria-pressed={viewMode === 'mosaic'}
                className={`gal-view-btn${viewMode === 'mosaic' ? ' is-active' : ''}`}
                title="Editorial Mosaic Layout"
              >
                <Columns3 style={{ width: 15, height: 15 }} />
                <span>Editorial</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-pressed={viewMode === 'grid'}
                className={`gal-view-btn${viewMode === 'grid' ? ' is-active' : ''}`}
                title="Uniform 3-Column Grid"
              >
                <LayoutGrid style={{ width: 15, height: 15 }} />
                <span>Grid</span>
              </button>
            </div>
          </div>

          {/* Curated Bento / 2-Col Mobile Grid */}
          <motion.div
            key={`${activeCategory}-${viewMode}`}
            className={`gal-cards-grid${
              viewMode === 'mosaic' ? ' gal-cards-grid--mosaic' : ' gal-cards-grid--uniform'
            }`}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: luxuryEase }}
          >
            {visibleItems.map((item, idx) => {
              const total = visibleItems.length;
              let wideSet: number[] = [];
              if (viewMode === 'mosaic') {
                if (total >= 36) wideSet = [0, 6, 10, 18, 24, 32];
                else if (total === 18) wideSet = [0, 6, 10];
                else if (total % 3 === 0 && total >= 12) wideSet = [0, 5, 9];
                else if (total === 6) wideSet = [0, 3, 4];
                else if (total % 3 === 2) wideSet = [0];
                else if (total % 3 === 1 && total >= 7) wideSet = [0, 5];
              }
              const isMosaicWide = wideSet.includes(idx);

              return (
                <article
                  key={item.id}
                  className={`gal-card${isMosaicWide ? ' gal-card--wide' : ''}`}
                  onClick={() => openPhotoLightbox(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openPhotoLightbox(item);
                    }
                  }}
                  aria-label={`View full size: ${item.title}`}
                >
                  <div className="gal-card-media">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={isMosaicWide ? 1100 : 720}
                      height={isMosaicWide ? 660 : 540}
                      quality={90}
                      sizes={
                        isMosaicWide
                          ? '(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 66vw'
                          : '(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw'
                      }
                      className="gal-card-img"
                    />
                    <div className="gal-card-scrim" aria-hidden="true" />

                    <div className="gal-card-top">
                      <span className="gal-card-cat">{item.category}</span>
                      <span className="gal-card-zoom" aria-hidden="true">
                        <Maximize2 style={{ width: 12, height: 12 }} />
                      </span>
                    </div>

                    <div className="gal-card-overlay-copy">
                      {item.locationTag && (
                        <span className="gal-card-loc">
                          <MapPin style={{ width: 11, height: 11 }} />
                          {item.locationTag}
                        </span>
                      )}
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>

                  {/* Mobile Compact Caption Bar (visible on mobile 2-col grid) */}
                  <div className="gal-card-mobile-caption">
                    {item.locationTag && (
                      <span className="gal-card-mobile-loc">{item.locationTag}</span>
                    )}
                    <h3>{item.title}</h3>
                  </div>
                </article>
              );
            })}
          </motion.div>

          {/* Show All / Show Less Toggle for All Photos */}
          {activeCategory === 'All Photos' && filteredItems.length > INITIAL_ALL_COUNT && (
            <div className="gal-load-more-wrap">
              <div className="gal-progress-meta">
                Showing <strong>{visibleItems.length}</strong> of{' '}
                <strong>{filteredItems.length}</strong> verified photographs
              </div>
              <button
                type="button"
                onClick={() => setExpandedAll((prev) => !prev)}
                className="btn btn-outline-navy gal-load-more-btn"
              >
                {expandedAll ? (
                  <>
                    <span>Show Curated Selection ({INITIAL_ALL_COUNT})</span>
                    <ChevronUp style={{ width: 16, height: 16 }} />
                  </>
                ) : (
                  <>
                    <span>Explore All {filteredItems.length} Photographs (+{remainingCount} More)</span>
                    <ChevronDown style={{ width: 16, height: 16 }} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          SECTION 04 — FROM FRAME TO STAY: SIGNATURE SANCTUARIES
          ======================================================== */}
      <section className="gal-residences-section">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="gal-residences-head">
              <div>
                <span className="eyebrow eyebrow-wide" style={{ color: 'var(--gold-soft)' }}>
                  From Frame to Sanctuary
                </span>
                <h2>
                  Step Inside Our{' '}
                  <span className="italic-serif" style={{ color: 'var(--gold-soft)' }}>
                    Handcrafted Residences
                  </span>
                </h2>
              </div>
              <p>
                Every suite and chalet pictured in our archive is crafted with authentic
                Kashmiri timber, climate-controlled heating &amp; AC, and attentive mountain
                hospitality.
              </p>
            </div>
          </FadeIn>

          <div className="gal-residences-grid">
            {ROOMS.map((room, index) => {
              const targetGalleryCat: GalleryCategory =
                room.category === 'Cottage' ? 'Rooms' : 'Chalets';
              return (
                <div key={room.id} className="gal-res-card">
                  <div className="gal-res-media">
                    <Image
                      src={room.images[0]?.src || '/images/rooms/elegant-chalet-dal-view.jpg'}
                      alt={room.name}
                      width={680}
                      height={460}
                      quality={88}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="gal-res-img"
                    />
                    <span className="gal-res-badge">
                      0{index + 1} · {room.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => jumpToCategoryFromResidence(targetGalleryCat)}
                      className="gal-res-filter-chip"
                    >
                      <Eye style={{ width: 12, height: 12 }} />
                      <span>{targetGalleryCat} Photos</span>
                    </button>
                  </div>

                  <div className="gal-res-body">
                    <div>
                      <div className="gal-res-specs">
                        <span>
                          <Users style={{ width: 12, height: 12 }} /> Up to {room.maxGuests} Guests
                        </span>
                        <span>·</span>
                        <span>{room.view}</span>
                      </div>
                      <h3>
                        <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
                      </h3>
                      <p>{room.shortDescription}</p>
                    </div>

                    <div className="gal-res-actions">
                      <Link
                        href={`/rooms/${room.slug}`}
                        className="btn btn-outline-white btn-sm"
                      >
                        <span>Suite Details</span>
                        <ArrowUpRight style={{ width: 14, height: 14 }} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => openBooking(room.name)}
                        className="btn btn-gold btn-sm"
                      >
                        <span>Reserve Suite</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05 — CONTINUE EXPLORING THE AURUM
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
                Continue Planning Your <span className="italic-serif text-gold">Escape</span>
              </h2>
              <p>
                Compare suite floorplans, review our verified dining and comfort amenities,
                or speak directly with our 24/7 Brein Hills reservations desk.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal className="rooms-discover-grid" staggerChildren={0.08}>
            {discoveryLinks.map((link) => {
              const thumb =
                DISCOVERY_MEDIA[link.href] ||
                '/images/gallery/aurum-sunset-deck-srinagar-panorama.jpg';
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
          SECTION 06 — PHOTOGRAPHY & ESTATE AESTHETICS FAQ
          ======================================================== */}
      <FAQSection
        page="gallery"
        title="Photography & Estate Aesthetics FAQ"
        subtitle="Answers regarding our authentic property photography, seasonal views, and chalet vistas."
      />

      {/* ========================================================
          SECTION 07 — SUNSET TERRACE RESERVATIONS CTA
          ======================================================== */}
      <CTASection variant="gallery" onOpenBooking={() => openBooking()} />

      {/* ========================================================
          FULLSCREEN EDITORIAL LIGHTBOX WITH THUMBNAIL FILMSTRIP
          ======================================================== */}
      <AnimatePresence>
        {activeLightboxItem && lightboxIndex !== null && (
          <motion.div
            className="rsuite-lightbox gal-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activeLightboxItem.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
              touchStartY.current = e.touches[0].clientY;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null || touchStartY.current === null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              const dy = e.changedTouches[0].clientY - touchStartY.current;
              if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy) * 1.2) {
                if (dx < 0) nextLightbox();
                else prevLightbox();
              }
              touchStartX.current = null;
              touchStartY.current = null;
            }}
          >
            <div className="rsuite-lightbox-topbar">
              <div className="rsuite-lightbox-meta">
                <span className="rsuite-lightbox-kicker">
                  {activeLightboxItem.category}
                  {activeLightboxItem.locationTag
                    ? ` · ${activeLightboxItem.locationTag}`
                    : ''}
                </span>
                <strong>{activeLightboxItem.title}</strong>
              </div>

              <div className="rsuite-lightbox-actions">
                <button
                  type="button"
                  onClick={() => {
                    closeLightbox();
                    openBooking();
                  }}
                  className="gal-lb-book-btn"
                >
                  <Calendar style={{ width: 13, height: 13 }} />
                  <span>Book Stay</span>
                </button>
                <span className="rsuite-lightbox-counter">
                  {String(lightboxIndex + 1).padStart(2, '0')} /{' '}
                  {String(filteredItems.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  className="rsuite-lightbox-close"
                  onClick={closeLightbox}
                  aria-label="Close photo viewer"
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
                aria-label="Previous photograph"
              >
                <ChevronLeft style={{ width: 24, height: 24 }} />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLightboxItem.id}
                  className="rsuite-lightbox-img-wrap"
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.24, ease: luxuryEase }}
                >
                  <Image
                    src={activeLightboxItem.src}
                    alt={activeLightboxItem.title}
                    width={1800}
                    height={1200}
                    quality={95}
                    sizes="95vw"
                    className="rsuite-lightbox-img"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                className="rsuite-lightbox-arrow rsuite-lightbox-arrow--next"
                onClick={nextLightbox}
                aria-label="Next photograph"
              >
                <ChevronRight style={{ width: 24, height: 24 }} />
              </button>
            </div>

            <div className="gal-lightbox-bottom">
              <p className="gal-lightbox-desc">{activeLightboxItem.description}</p>
              <div className="gal-lightbox-strip" ref={filmstripRef}>
                {filteredItems.map((thumbItem, tIdx) => (
                  <button
                    key={thumbItem.id}
                    type="button"
                    data-lb-idx={tIdx}
                    onClick={() => setLightboxIndex(tIdx)}
                    aria-label={`Jump to photo ${tIdx + 1}: ${thumbItem.title}`}
                    className={`gal-lb-thumb${tIdx === lightboxIndex ? ' is-active' : ''}`}
                  >
                    <Image
                      src={thumbItem.src}
                      alt={thumbItem.title}
                      width={112}
                      height={76}
                      quality={75}
                      className="gal-lb-thumb-img"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
