'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, ZoomIn, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryCategory } from '@/data/gallery';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';

interface GalleryProps {
  initialCategory?: GalleryCategory;
  showHeading?: boolean;
  initialLimit?: number;
  redirectToGallery?: boolean;
  showAllInitial?: boolean;
  showFilters?: boolean;
}

export default function Gallery({
  initialCategory = 'All Photos',
  showHeading = true,
  initialLimit = 6,
  redirectToGallery = true,
  showAllInitial = false,
  showFilters = false,
}: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>(initialCategory);
  const [showAll, setShowAll] = useState<boolean>(showAllInitial);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const filteredItems = selectedCategory === 'All Photos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, initialLimit);
  const hasMore = filteredItems.length > initialLimit;

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const showNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [activeLightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [activeLightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      <div className="forest-pattern absolute inset-0 opacity-10 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {showHeading && (
          <FadeIn direction="up">
            <div className="head" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span
                className="eyebrow eyebrow-wide"
                style={{
                  color: 'var(--gold)',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Photo Gallery
              </span>
              <h2 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontFamily: 'var(--serif)', fontWeight: 400, margin: '0 0 16px' }}>
                Capturing <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Memories</span>
              </h2>
              <p style={{ color: '#c4cddc', maxWidth: '680px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
                Explore authentic views of our Brein Hills estate, handcrafted wooden cottages,
                panoramic Dal View chalets, dining spaces, and the surrounding Kashmir valley.
              </p>
            </div>
          </FadeIn>
        )}

        {/* Category Filters (when enabled) */}
        {showFilters && (
          <FadeIn direction="up" delay={0.1}>
            <div className="filters" style={{ marginBottom: 36, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10 }}>
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    borderRadius: 20,
                    border: selectedCategory === cat ? '1px solid var(--gold)' : '1px solid rgba(255, 255, 255, 0.2)',
                    background: selectedCategory === cat ? 'var(--gold)' : 'rgba(255, 255, 255, 0.05)',
                    color: selectedCategory === cat ? 'var(--navy)' : '#fff',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Photos Grid - Staggered entrance and image zoom hover */}
        <ScrollReveal className="gal" staggerChildren={0.06}>
          {displayedItems.map((item) => {
            const fullIndex = filteredItems.findIndex((fi) => fi.id === item.id);
            return (
              <ScrollRevealItem key={item.id} direction="scale" duration={0.6}>
                <motion.figure
                  onClick={() => openLightbox(fullIndex >= 0 ? fullIndex : 0)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(fullIndex >= 0 ? fullIndex : 0);
                    }
                  }}
                  aria-label={`Open photo: ${item.title}`}
                  whileHover={reducedMotion ? {} : { scale: 1.02, y: -4 }}
                  transition={{ duration: 0.35, ease: luxuryEase }}
                  style={{ overflow: 'hidden', cursor: 'pointer' }}
                >
                  <motion.img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    whileHover={reducedMotion ? {} : { scale: 1.08 }}
                    transition={{ duration: 0.7, ease: luxuryEase }}
                  />
                  <figcaption>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: 'var(--gold)',
                        fontWeight: 600,
                        marginBottom: '6px',
                        display: 'block',
                      }}
                    >
                      {item.category}
                    </span>
                    <strong style={{ fontSize: '1.05rem', color: '#fff', fontFamily: 'var(--serif)', lineHeight: 1.3 }}>
                      {item.title}
                    </strong>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '10px', color: 'var(--gold-soft)', fontSize: '0.8rem' }}>
                      <ZoomIn style={{ width: 14, height: 14 }} /> Click to expand
                    </div>
                  </figcaption>
                </motion.figure>
              </ScrollRevealItem>
            );
          })}
        </ScrollReveal>

        {/* Centered Button below Section */}
        {redirectToGallery ? (
          <FadeIn direction="up" delay={0.15}>
            <div
              style={{
                textAlign: 'center',
                marginTop: '44px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}
            >
              <motion.div
                whileHover={reducedMotion ? {} : { scale: 1.04 }}
                whileTap={reducedMotion ? {} : { scale: 0.96 }}
              >
                <Link
                  href="/gallery"
                  className="btn btn-outline-gold"
                  style={{
                    padding: '0.95rem 2.8rem',
                    fontSize: '0.82rem',
                    letterSpacing: '0.22em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  <span>View All Photos ({GALLERY_ITEMS.length})</span>
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </motion.div>
              <span style={{ fontSize: '0.82rem', color: '#9ba8bc', letterSpacing: '0.05em' }}>
                Showing {displayedItems.length} of {GALLERY_ITEMS.length} authentic property photographs · Click to view full gallery
              </span>
            </div>
          </FadeIn>
        ) : hasMore && (
          <FadeIn direction="up" delay={0.15}>
            <div
              style={{
                textAlign: 'center',
                marginTop: '44px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}
            >
              <motion.button
                type="button"
                className="btn btn-outline-gold"
                onClick={() => setShowAll((prev) => !prev)}
                aria-expanded={showAll}
                whileHover={reducedMotion ? {} : { scale: 1.04 }}
                whileTap={reducedMotion ? {} : { scale: 0.96 }}
                style={{
                  padding: '0.95rem 2.5rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.22em',
                  cursor: 'pointer',
                }}
              >
                {showAll ? (
                  <>
                    Show Less Photos <ChevronUp style={{ width: 16, height: 16, marginLeft: 6 }} />
                  </>
                ) : (
                  <>
                    View All Photos ({filteredItems.length - initialLimit} More) <ChevronDown style={{ width: 16, height: 16, marginLeft: 6 }} />
                  </>
                )}
              </motion.button>
              <span style={{ fontSize: '0.82rem', color: '#9ba8bc', letterSpacing: '0.05em' }}>
                Showing {displayedItems.length} of {filteredItems.length} authentic property photographs
              </span>
            </div>
          </FadeIn>
        )}

        {/* Lightbox Modal with Touch Swipe & Framer Motion AnimatePresence */}
        <AnimatePresence>
          {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
            <motion.div
              className="lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Image viewer"
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
                if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) {
                  if (dx < 0) showNext();
                  else showPrev();
                }
                touchStartX.current = null;
                touchStartY.current = null;
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 'max(18px, env(safe-area-inset-top, 18px))',
                  left: 18,
                  padding: '6px 14px',
                  borderRadius: 999,
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(198, 168, 105, 0.4)',
                  color: 'var(--gold-soft)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                }}
              >
                {activeLightboxIndex + 1} / {filteredItems.length}
              </div>

              <motion.button
                type="button"
                className="lb-btn lb-close"
                aria-label="Close image viewer"
                onClick={closeLightbox}
                whileHover={reducedMotion ? {} : { scale: 1.15, rotate: 90 }}
                whileTap={reducedMotion ? {} : { scale: 0.9 }}
              >
                <X style={{ width: 22, height: 22 }} />
              </motion.button>

              <motion.button
                className="lb-btn lb-prev"
                aria-label="Previous photograph"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                whileHover={reducedMotion ? {} : { scale: 1.15 }}
                whileTap={reducedMotion ? {} : { scale: 0.9 }}
              >
                <ChevronLeft style={{ width: 26, height: 26 }} />
              </motion.button>

              <motion.div
                className="lightbox-content"
                initial={reducedMotion ? { opacity: 0 } : { scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={reducedMotion ? { opacity: 0 } : { scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.35, ease: luxuryEase }}
              >
                <img
                  src={filteredItems[activeLightboxIndex].src}
                  alt={filteredItems[activeLightboxIndex].title}
                />
                <div className="lightbox-caption">
                  {filteredItems[activeLightboxIndex].title}
                  <span>
                    {filteredItems[activeLightboxIndex].category} · Photo {activeLightboxIndex + 1} of {filteredItems.length}
                  </span>
                  <p style={{ fontSize: '0.9rem', color: '#d6dbe6', marginTop: 6, fontWeight: 400 }}>
                    {filteredItems[activeLightboxIndex].description}
                  </p>
                </div>
              </motion.div>

              <motion.button
                className="lb-btn lb-next"
                aria-label="Next photograph"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                whileHover={reducedMotion ? {} : { scale: 1.15 }}
                whileTap={reducedMotion ? {} : { scale: 0.9 }}
              >
                <ChevronRight style={{ width: 26, height: 26 }} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
