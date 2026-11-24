'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';

interface HeroProps {
  onOpenBooking?: () => void;
}

const HERO_SLIDES = [
  {
    image: '/images/rooms/elegant-chalet-dal-view.jpg',
    alt: 'Master luxury chalet bedroom suite overlooking Dal Lake at The Aurum Luxury Collection',
    eyebrow: 'WELCOME TO THE AURUM LUXURY COLLECTION',
    headingPrefix: 'Experience the Art of ',
    headingHighlight: 'Luxury in Kashmir',
    subtitle: 'Discover an exceptional stay surrounded by the timeless beauty of Kashmir. Experience refined accommodation, beautiful views and warm hospitality at The Aurum Luxury Collection.',
  },
  {
    image: '/images/rooms/sunset-chalet-dal-view.jpg',
    alt: 'Sunset View Chalet overlooking Dal Lake Srinagar at golden hour',
    eyebrow: 'SIGNATURE DAL VIEW CHALETS',
    headingPrefix: 'Golden Hour Splendour ',
    headingHighlight: 'Above Dal Lake',
    subtitle: 'Perched on the serene slopes of Brein Hills, enjoy panoramic vistas of Dal Lake and the Zabarwan mountain ranges from your private terrace.',
  },
  {
    image: '/images/gallery/aframe-chalet-master-bedroom.jpg',
    alt: 'Warm handcrafted timber interior of Aurum A-Frame Master Chalet',
    eyebrow: 'HANDCRAFTED TIMBER SANCTUARY',
    headingPrefix: 'Timeless Warmth & ',
    headingHighlight: 'Bespoke Comfort',
    subtitle: 'Step into generous rooms dressed with Kashmiri deodar wood, plush bedding, modern climate control, and intuitive hospitality designed around your peace.',
  },
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const reducedMotion = useReducedMotion();

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = HERO_SLIDES[current];

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Hotel highlights">
      {HERO_SLIDES.map((s, index) => {
        const isActive = index === current;
        return (
          <div
            key={index}
            className={`slide ${isActive ? 'is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${HERO_SLIDES.length}`}
            aria-hidden={!isActive}
          >
            {isActive ? (
              <motion.img
                src={s.image}
                alt={s.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                initial={reducedMotion ? {} : { scale: 1 }}
                animate={reducedMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 7, ease: 'easeOut' }}
              />
            ) : (
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
              />
            )}
          </div>
        );
      })}

      <div className="hero-overlay" />

      {/* Hero Body Content with Staggered Framer Motion Animations */}
      <div className="hero-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? {} : { opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: luxuryEase }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Eyebrow */}
            <motion.span
              className="eyebrow eyebrow-wide"
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            >
              {slide.eyebrow}
            </motion.span>

            {/* Title */}
            <motion.h1
              className="hero-title"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            >
              {slide.headingPrefix}
              <span className="italic font-medium text-gold relative px-2">
                {slide.headingHighlight}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: luxuryEase }}
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: 0,
                    width: '100%',
                    height: 1,
                    background: 'rgba(198, 168, 105, 0.4)',
                    transformOrigin: 'left',
                  }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="hero-subtitle"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: luxuryEase }}
            >
              {slide.subtitle}
            </motion.p>

            {/* Hero CTA Actions */}
            <motion.div
              className="hero-actions"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: luxuryEase }}
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

      {/* Slider Controls with Hover Scale */}
      <motion.button
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
        onClick={nextSlide}
        className="lb-btn lb-next"
        aria-label="Next slide"
        style={{ right: 24, zIndex: 15 }}
        whileHover={reducedMotion ? {} : { scale: 1.12 }}
        whileTap={reducedMotion ? {} : { scale: 0.92 }}
      >
        <ChevronRight style={{ width: 22, height: 22 }} />
      </motion.button>

      {/* Hero Bullet Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 15,
          display: 'flex',
          gap: 10,
        }}
      >
        {HERO_SLIDES.map((_, idx) => (
          <motion.button
            key={idx}
            aria-selected={idx === current}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            whileHover={reducedMotion ? {} : { scale: 1.25 }}
            whileTap={reducedMotion ? {} : { scale: 0.9 }}
            style={{
              width: idx === current ? 32 : 10,
              height: 10,
              borderRadius: idx === current ? 5 : '50%',
              background: idx === current ? 'var(--gold)' : 'rgba(255, 255, 255, 0.35)',
              transition: 'all 0.35s ease',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </section>
  );
}
