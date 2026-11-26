'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Utensils, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';
import WinterEnvironment from './animations/WinterEnvironment';

export default function BeyondHospitality() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="experience" className="beyond-editorial-section relative overflow-hidden">
      {/* Full-Bleed Panoramic Dal Lake Background */}
      <div className="beyond-bg-media" aria-hidden="true">
        <motion.img
          src="/images/destinations/dal-lake-shikara.jpg"
          alt="Shikara gliding across Dal Lake at golden hour in Srinagar"
          loading="lazy"
          initial={reducedMotion ? false : { scale: 1.04 }}
          whileInView={reducedMotion ? undefined : { scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: luxuryEase }}
        />
        <div className="beyond-bg-scrim" />
      </div>

      {/* Subtle Kashmir Winter Snowfall & Lake Mist */}
      <WinterEnvironment
        intensity="subtle"
        fog={true}
        fogPosition="bottom"
        fogIntensity="subtle"
        fogZIndex={3}
        snowZIndex={4}
      />

      <div className="container relative" style={{ zIndex: 10 }}>
        <div className="beyond-editorial-layout">
          {/* Left Editorial Storytelling Block */}
          <FadeIn direction="up" className="beyond-editorial-copy">
            <span className="eyebrow eyebrow-wide">Curated Living</span>
            <h2>
              Beyond <span className="italic font-medium text-gold">Hospitality</span>
            </h2>
            <p className="beyond-lead">
              Curated experiences that let you live the true spirit of Kashmir.
            </p>
            <p className="beyond-subcopy">
              A stay at The Aurum extends far beyond refined accommodations. Immerse yourself in authentic Kashmiri
              culinary traditions and curated valley expeditions designed to evoke wonder.
            </p>
            <div style={{ marginTop: 28 }}>
              <motion.div
                whileHover={reducedMotion ? {} : { scale: 1.03 }}
                whileTap={reducedMotion ? {} : { scale: 0.97 }}
                style={{ display: 'inline-block' }}
              >
                <Link href="/experiences" className="btn btn-gold">
                  <span>Explore Experiences</span>
                  <ArrowRight style={{ width: 15, height: 15 }} />
                </Link>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right Curated Pillar Cards (Preserving Dining & Valley Excursions Links) */}
          <div className="beyond-pillars-stack">
            <FadeIn direction="up" delay={0.1}>
              <motion.div
                className="beyond-pillar-glass"
                whileHover={reducedMotion ? {} : { y: -4 }}
                transition={{ duration: 0.3, ease: luxuryEase }}
              >
                <div className="beyond-pillar-thumb">
                  <img
                    src="/images/facilities/dining-hall-wazwan.png"
                    alt="Wazwan Dining Hall at The Aurum Srinagar"
                    loading="lazy"
                  />
                </div>
                <div className="beyond-pillar-body">
                  <span className="beyond-pillar-tag">
                    <Utensils style={{ width: 12, height: 12 }} />
                    <span>Culinary Experience</span>
                  </span>
                  <h3>Wazwan &amp; Alpine Dining</h3>
                  <p>
                    From fragrant traditional Rogan Josh and Gushtaba to continental breakfast spreads,
                    our dining hall celebrates Kashmiri heritage.
                  </p>
                  <Link href="/facilities" className="beyond-pillar-link">
                    <span>Explore Dining</span>
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <motion.div
                className="beyond-pillar-glass"
                whileHover={reducedMotion ? {} : { y: -4 }}
                transition={{ duration: 0.3, ease: luxuryEase }}
              >
                <div className="beyond-pillar-thumb">
                  <img
                    src="/images/gallery/dal-lake-panoramic-shikara-view.jpg"
                    alt="Dal Lake panoramic shikara view near Brein Hills Srinagar"
                    loading="lazy"
                  />
                </div>
                <div className="beyond-pillar-body">
                  <span className="beyond-pillar-tag">
                    <Compass style={{ width: 12, height: 12 }} />
                    <span>Valley Expeditions</span>
                  </span>
                  <h3>Srinagar &amp; Dal Lake Excursions</h3>
                  <p>
                    Glide across Dal Lake on a handcrafted Shikara at sunset, explore Mughal Gardens,
                    or wander through tulip terraces minutes away.
                  </p>
                  <Link href="/experiences" className="beyond-pillar-link">
                    <span>Discover Sights</span>
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
