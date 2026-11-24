'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelInfo';
import FadeIn from './animations/FadeIn';

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

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Hotel highlights">
      {HERO_SLIDES.map((slide, index) => {
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
            <img
              src={slide.image}
              alt={slide.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        );
      })}

      <div className="hero-overlay" />

      <FadeIn direction="up" className="hero-body">
        <span className="eyebrow eyebrow-wide">
          {HERO_SLIDES[current].eyebrow}
        </span>

        <h1 className="hero-title">
          {HERO_SLIDES[current].headingPrefix}
          <span className="italic font-medium text-gold relative px-2">
            {HERO_SLIDES[current].headingHighlight}
            <div
              style={{
                position: 'absolute',
                bottom: '-6px',
                left: 0,
                width: '100%',
                height: 1,
                background: 'rgba(198, 168, 105, 0.4)',
              }}
            />
          </span>
        </h1>

        <p className="hero-subtitle">
          {HERO_SLIDES[current].subtitle}
        </p>

        <div className="hero-actions">
          <Link href="/rooms" className="btn btn-gold btn-lg">
            <span>Explore Our Rooms</span>
            <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="btn btn-outline-white btn-lg"
          >
            <Calendar style={{ width: 16, height: 16 }} />
            <span>Book Your Stay</span>
          </button>
        </div>
      </FadeIn>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="lb-btn lb-prev"
        aria-label="Previous slide"
        style={{ left: 24, zIndex: 15 }}
      >
        <ChevronLeft style={{ width: 22, height: 22 }} />
      </button>

      <button
        onClick={nextSlide}
        className="lb-btn lb-next"
        aria-label="Next slide"
        style={{ right: 24, zIndex: 15 }}
      >
        <ChevronRight style={{ width: 22, height: 22 }} />
      </button>

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
          <button
            key={idx}
            aria-selected={idx === current}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
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
