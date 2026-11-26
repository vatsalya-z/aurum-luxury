'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { getImageProps } from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';
import WinterEnvironment from './animations/WinterEnvironment';

interface HeroProps {
  onOpenBooking?: () => void;
}

interface HeroSlide {
  id: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  desktopPosition: string;
  mobilePosition: string;
}

const SLIDE_DURATION_MS = 7000;

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'twilight-aframe-estate',
    desktopImage: '/images/hero/aurum-hero-1-desktop.jpg',
    mobileImage: '/images/hero/aurum-hero-1-mobile.jpg',
    alt: 'Illuminated A-frame wooden chalets at twilight nestled against the Zabarwan mountains at The Aurum by Stay Pattern, Brein Hills Srinagar',
    eyebrow: 'WELCOME TO THE AURUM BY STAY PATTERN',
    headingPrefix: 'Experience the Art of ',
    headingHighlight: 'Luxury in Kashmir',
    subtitle:
      'Signature A-frame timber chalets and peaceful hillside sanctuary in Brein Hills, Srinagar.',
    desktopPosition: 'center 42%',
    mobilePosition: 'center 38%',
  },
  {
    id: 'sunset-terrace-panorama',
    desktopImage: '/images/hero/aurum-hero-2-desktop.jpg',
    mobileImage: '/images/hero/aurum-hero-2-mobile.jpg',
    alt: 'Panoramic golden hour sunset over Dal Lake and Srinagar valley from the private hillside terrace at The Aurum',
    eyebrow: 'BREIN HILLS · PANORAMIC VALLEY HORIZON',
    headingPrefix: 'Golden Hour Splendour ',
    headingHighlight: 'Above Dal Lake',
    subtitle:
      'Sweeping sunset vistas across Dal Lake and the glittering Srinagar valley from our private terrace.',
    desktopPosition: 'center 46%',
    mobilePosition: 'center 42%',
  },
  {
    id: 'handcrafted-chalet-suite',
    desktopImage: '/images/hero/aurum-hero-3-desktop.jpg',
    mobileImage: '/images/hero/aurum-hero-3-mobile.jpg',
    alt: 'Authentic handcrafted timber A-frame chalet bedroom suite with emerald velvet headboard and open balcony doors overlooking Dal Lake',
    eyebrow: 'SIGNATURE DAL VIEW CHALETS',
    headingPrefix: 'Timeless Warmth & ',
    headingHighlight: 'Bespoke Comfort',
    subtitle:
      'Soaring Kashmiri pine interiors, plush emerald suites, and private balconies overlooking Dal Lake.',
    desktopPosition: 'center 46%',
    mobilePosition: 'center 44%',
  },
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [0, 54]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Autoplay timer resets whenever `current` changes (manual swipe, arrow, or dot click)
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, SLIDE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [current, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const slide = HERO_SLIDES[current];
  const slideNumber = String(current + 1).padStart(2, '0');
  const totalSlides = String(HERO_SLIDES.length).padStart(2, '0');

  return (
    <section
      ref={heroRef}
      className="hero"
      aria-roledescription="carousel"
      aria-label="Hotel highlights"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        className="hero-parallax-stage"
        style={{
          position: 'absolute',
          inset: '-5% 0',
          y: reducedMotion ? 0 : bgParallaxY,
          willChange: reducedMotion ? 'auto' : 'transform',
        }}
      >
        {HERO_SLIDES.map((s, index) => {
          const isActive = index === current;
          const posStyle = {
            '--hero-pos-desktop': s.desktopPosition,
            '--hero-pos-mobile': s.mobilePosition,
          } as React.CSSProperties;

          const loadProps = index === 0 ? { priority: true as const } : { loading: 'eager' as const };

          const {
            props: { srcSet: desktopSrcSet },
          } = getImageProps({
            alt: s.alt,
            width: 2560,
            height: 1440,
            sizes: '100vw',
            quality: 95,
            src: s.desktopImage,
            ...loadProps,
          });

          const {
            props: { srcSet: mobileSrcSet, ...imgRest },
          } = getImageProps({
            alt: s.alt,
            width: 1200,
            height: 1760,
            sizes: '100vw',
            quality: 95,
            src: s.mobileImage,
            ...loadProps,
          });

          return (
            <div
              key={s.id}
              className={`slide ${isActive ? 'is-active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${HERO_SLIDES.length}`}
              aria-hidden={!isActive}
              style={posStyle}
            >
              <picture className="hero-picture">
                <source media="(min-width: 769px)" srcSet={desktopSrcSet} sizes="100vw" />
                <source media="(max-width: 768px)" srcSet={mobileSrcSet} sizes="100vw" />
                <img
                  {...imgRest}
                  alt={s.alt}
                  className="hero-slide-img"
                  style={{
                    ...imgRest.style,
                    transform: !reducedMotion && isActive ? 'scale(1.035)' : 'scale(1)',
                    transition: 'transform 8s ease-out',
                  }}
                />
              </picture>
            </div>
          );
        })}
      </motion.div>

      <div className="hero-overlay" aria-hidden="true" />

      {/* Layered Kashmir Winter Snowfall & Subtle Himalayan Mist */}
      <WinterEnvironment
        intensity="hero"
        fog={true}
        fogPosition="horizon"
        fogIntensity="subtle"
        frostGlow={true}
        fogZIndex={4}
        snowZIndex={5}
      />

      {/* Hero Body Content */}
      <div className="hero-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? {} : { opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: luxuryEase }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <motion.span
              className="eyebrow eyebrow-wide"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06, ease: luxuryEase }}
            >
              {slide.eyebrow}
            </motion.span>

            <motion.h1
              className="hero-title"
              initial={reducedMotion ? false : { opacity: 0, clipPath: 'inset(0 0 100% 0)', y: 16 }}
              animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)', y: 0 }}
              transition={{ duration: 0.72, delay: 0.14, ease: luxuryEase }}
            >
              {slide.headingPrefix}
              <span className="italic-serif" style={{ fontWeight: 500 }}>
                {slide.headingHighlight}
              </span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: luxuryEase }}
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: luxuryEase }}
            >
              <motion.div
                whileHover={reducedMotion ? {} : { scale: 1.03 }}
                whileTap={reducedMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/rooms" className="btn btn-gold btn-lg">
                  <span>Explore Our Rooms</span>
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </motion.div>

              <motion.button
                type="button"
                onClick={() => onOpenBooking && onOpenBooking()}
                className="btn btn-outline-white btn-lg"
                whileHover={reducedMotion ? {} : { scale: 1.03 }}
                whileTap={reducedMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Calendar style={{ width: 16, height: 16 }} />
                <span>Book Your Stay</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop Slider Controls (hidden on mobile via CSS) */}
      <motion.button
        type="button"
        onClick={prevSlide}
        className="lb-btn lb-prev"
        aria-label="Previous slide"
        style={{ left: 24, zIndex: 15 }}
        whileHover={reducedMotion ? {} : { scale: 1.12 }}
        whileTap={reducedMotion ? {} : { scale: 0.92 }}
      >
        <ChevronLeft style={{ width: 22, height: 22 }} />
      </motion.button>

      <motion.button
        type="button"
        onClick={nextSlide}
        className="lb-btn lb-next"
        aria-label="Next slide"
        style={{ right: 24, zIndex: 15 }}
        whileHover={reducedMotion ? {} : { scale: 1.12 }}
        whileTap={reducedMotion ? {} : { scale: 0.92 }}
      >
        <ChevronRight style={{ width: 22, height: 22 }} />
      </motion.button>

      {/* Bottom Slide Counter & Animated Champagne-Gold Progress Indicators */}
      <div className="hero-bottom-controls">
        <div className="hero-slide-counter" aria-live="polite">
          <span className="hero-counter-current">{slideNumber}</span>
          <span className="hero-counter-sep">/</span>
          <span className="hero-counter-total">{totalSlides}</span>
        </div>

        <div className="hero-dots" role="tablist" aria-label="Hero slide indicators">
          {HERO_SLIDES.map((_, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrent(idx)}
                className={`hero-dot-pill ${isActive ? 'is-active' : ''}`}
              >
                {isActive && (
                  <motion.span
                    key={`progress-${current}`}
                    className="hero-dot-progress"
                    initial={reducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: reducedMotion ? 0 : SLIDE_DURATION_MS / 1000,
                      ease: 'linear',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
