'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaCompass, FaShieldHalved } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { HOTEL_INFO } from '@/data/hotelInfo';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';
import MountainParallax from './animations/MountainParallax';

export default function AboutHotel() {
  const reducedMotion = useReducedMotion();

  const pillars = [
    {
      num: '01',
      title: 'Prime Proximity',
      desc: 'Set in Brein Hills, Astanpora, just 10–15 minutes from Dal Lake, Nishat Bagh, and Indira Gandhi Tulip Garden.',
      icon: <FaCompass style={{ width: 16, height: 16, color: 'var(--gold)' }} />,
    },
    {
      num: '02',
      title: 'Hillside Sanctuary',
      desc: 'Handcrafted wooden cottages and private pine chalets framing sweeping panoramas of Dal Lake and Zabarwan.',
      icon: <HiSparkles style={{ width: 18, height: 18, color: 'var(--gold)' }} />,
    },
    {
      num: '03',
      title: 'Verified Excellence',
      desc: 'Recognized with a 4.8 / 5 rating across 32 Google reviews, 24-hour concierge care, and authentic Kashmiri dining.',
      icon: <FaShieldHalved style={{ width: 16, height: 16, color: 'var(--gold)' }} />,
    },
  ];

  return (
    <section
      id="about"
      className="section-padding about-editorial-section relative overflow-hidden"
      style={{ backgroundColor: 'var(--ivory)' }}
    >
      <div className="forest-pattern absolute bottom-0 left-0 w-full h-80 opacity-5 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Main Editorial Split: Copy Left (Desktop) / Centered Top (Mobile), Landscape Image Right */}
        <div className="about-editorial-grid">
          <FadeIn direction="up" className="about-editorial-copy">
            {/* Mobile Monogram Emblem (Visible in Mobile Reference Layout) */}
            <div className="about-mobile-emblem">
              <motion.span
                className="brand-mark brand-mark--luxe"
                whileHover={reducedMotion ? {} : { rotate: 4, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                A
              </motion.span>
            </div>

            <span className="eyebrow eyebrow-wide about-eyebrow">
              About the Hotel · Brein Hills Srinagar
            </span>

            <h2 className="about-heading">
              Where Modern Luxury <br className="about-heading-break" />
              Meets <span className="italic font-medium text-gold">Ancient Pine &amp; Dal Lake</span>
            </h2>

            <p className="about-lead">
              Located in 23A Brein Hills, Astanpora, Srinagar, The Aurum Luxury Collection by Stay Pattern
              is an intimate mountain sanctuary that harmoniously balances authentic Kashmiri woodwork with refined,
              world-class comforts.
            </p>

            <p className="about-secondary-copy">
              {HOTEL_INFO.taglines.aboutHeading}. From evening wazwan dining in our on-site restaurant to watching
              twilight fall over Dal Lake from your private chalet balcony, every moment is crafted with grace and warmth.
            </p>

            <div className="about-cta-wrap">
              <motion.div
                whileHover={reducedMotion ? {} : { scale: 1.03 }}
                whileTap={reducedMotion ? {} : { scale: 0.97 }}
                style={{ display: 'inline-block' }}
              >
                <Link href="/about" className="btn btn-gold about-story-btn">
                  <span>Discover Our Story</span>
                  <ArrowRight style={{ width: 15, height: 15 }} />
                </Link>
              </motion.div>
            </div>

            {/* Subtle Mountain Glyph Ornament (Approved Mobile Design) */}
            <div className="about-mountain-glyph" aria-hidden="true">
              <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L10.5 3L18 11L28 1L41 13" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1} className="about-editorial-media">
            <div className="about-img-frame about-img-frame--editorial winter-window-frame">
              <div className="img-inner">
                <MountainParallax offset={20} style={{ width: '100%', height: '100%' }}>
                  <motion.img
                    src="/images/hero/aurum-estate-brein-hills.png"
                    alt="The Aurum Luxury Collection property nestled in Brein Hills Srinagar overlooking Dal Lake"
                    loading="lazy"
                    whileHover={reducedMotion ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.8, ease: luxuryEase }}
                    style={{ width: '100%', height: '112%', marginTop: '-6%', objectFit: 'cover' }}
                  />
                </MountainParallax>
                <div className="about-media-scrim" aria-hidden="true" />
                <div className="about-media-caption">
                  <span>23A Brein Hills · Astanpora</span>
                  <strong>Dal Lake &amp; Zabarwan Views</strong>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Architectural 3-Pillar Strip */}
        <ScrollReveal className="about-pillars-grid" staggerChildren={0.12}>
          {pillars.map((pillar) => (
            <ScrollRevealItem key={pillar.num} direction="up" distance={18}>
              <motion.div
                className="about-pillar-card"
                whileHover={reducedMotion ? {} : { y: -4 }}
                transition={{ duration: 0.28, ease: luxuryEase }}
              >
                <div className="about-pillar-top">
                  <span className="pillar-num">{pillar.num}</span>
                  <span className="about-pillar-icon">{pillar.icon}</span>
                </div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
