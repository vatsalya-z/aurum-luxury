'use client';

import React from 'react';
import { FaCompass, FaShieldHalved } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { HOTEL_INFO } from '@/data/hotelInfo';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function AboutHotel() {
  const reducedMotion = useReducedMotion();

  const pillars = [
    {
      num: '01',
      title: 'Prime Proximity',
      desc: 'Set in Brein Hills, Astanpora, just 10–15 minutes from Dal Lake, Nishat Bagh, and Indira Gandhi Tulip Garden, offering effortless access to Srinagar’s treasures.',
      icon: <FaCompass style={{ width: 18, height: 18, color: 'var(--gold)' }} />,
    },
    {
      num: '02',
      title: 'Hillside Sanctuary',
      desc: 'Handcrafted wooden cottages and private pine chalets framing sweeping panoramas of Dal Lake and the Zabarwan mountain ranges.',
      icon: <HiSparkles style={{ width: 20, height: 20, color: 'var(--gold)' }} />,
    },
    {
      num: '03',
      title: 'Verified Excellence',
      desc: 'Recognized with a 4.8 / 5 rating across 32 Google reviews, featuring 24-hour concierge care, multi-cuisine dining, and authentic Kashmiri hospitality.',
      icon: <FaShieldHalved style={{ width: 18, height: 18, color: 'var(--gold)' }} />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-ivory relative overflow-hidden" style={{ backgroundColor: 'var(--white)' }}>
      <div className="forest-pattern absolute bottom-0 left-0 w-full h-80 opacity-5 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Centered Emblem & Section Header (Bottom-to-Top Reveal) */}
        <FadeIn direction="up">
          <div className="head" style={{ maxWidth: 880, margin: '0 auto clamp(40px, 6vw, 68px)', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <motion.span
                className="brand-mark"
                style={{
                  width: 56,
                  height: 56,
                  fontSize: '1.8rem',
                  border: '1px solid var(--gold)',
                  background: 'var(--navy)',
                  color: 'var(--gold)',
                }}
                whileHover={reducedMotion ? {} : { rotate: 5, scale: 1.06 }}
                transition={{ duration: 0.3 }}
              >
                A
              </motion.span>
            </div>

            <span className="eyebrow eyebrow-wide" style={{ display: 'inline-block', marginBottom: 12 }}>
              About the Hotel · Brein Hills Srinagar
            </span>

            <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', marginBottom: 20, color: 'var(--navy)' }}>
              Where Modern Luxury <br />
              Meets <span className="italic font-medium text-gold relative px-2">Ancient Pine & Dal Lake</span>
            </h2>

            <p style={{ marginTop: 20, fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', color: 'var(--char)', opacity: 0.85, fontWeight: 300, lineHeight: 1.7, maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
              Located in 23A Brein Hills, Astanpora, Srinagar, The Aurum Luxury Collection by Stay Pattern
              is an intimate mountain sanctuary that harmoniously balances authentic Kashmiri woodwork with refined, world-class comforts.
            </p>
          </div>
        </FadeIn>

        <div className="about-split" style={{ alignItems: 'center', gap: 'clamp(36px, 5vw, 64px)' }}>
          {/* Left Column: Image with Floating Card (Slide from Left) */}
          <FadeIn
            direction="right"
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              margin: 0,
            }}
          >
            <div className="about-img-frame" style={{ width: '100%', margin: 0, overflow: 'hidden' }}>
              <div className="img-inner" style={{ overflow: 'hidden' }}>
                <motion.img
                  src="/images/hero/aurum-estate-brein-hills.png"
                  alt="The Aurum Luxury Collection property nestled in Brein Hills Srinagar"
                  loading="lazy"
                  whileHover={reducedMotion ? {} : { scale: 1.06 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Floating Luxury Card with subtle bounce/float */}
              <motion.div
                className="about-floating-card"
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                whileHover={reducedMotion ? {} : { y: -4, scale: 1.02 }}
              >
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: 6, fontWeight: 700 }}>
                  Scenic Sanctuary
                </span>
                <strong style={{ display: 'block', fontSize: '1.25rem', fontFamily: 'var(--serif)', color: '#fff', marginBottom: 6, lineHeight: 1.2 }}>
                  Dal View & Brein Hills
                </strong>
                <p style={{ fontSize: '0.82rem', color: '#c4cddc', margin: 0, lineHeight: 1.5 }}>
                  Boutique timber cottages overlooking the shimmering waters of Dal Lake.
                </p>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right Column: Narrative + Staggered Pillars (Slide from Right) */}
          <FadeIn
            direction="left"
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              margin: 0,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', marginBottom: 16, color: 'var(--navy)', fontFamily: 'var(--serif)', lineHeight: 1.25 }}>
                {HOTEL_INFO.taglines.aboutHeading}
              </h3>
              <p style={{ marginBottom: 28, fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--char)', opacity: 0.88 }}>
                Surrounded by pine-draped slopes above Srinagar valley, The Aurum provides a peaceful retreat
                for couples, families, and travelers seeking an authentic connection with Kashmir. From evening
                wazwan dining in our on-site restaurant to watching twilight fall over Dal Lake from your private
                chalet balcony, every moment is crafted with grace and warmth.
              </p>

              {/* Staggered Pillars Reveal */}
              <ScrollReveal className="about-pillars" staggerChildren={0.12} style={{ marginTop: 8 }}>
                {pillars.map((pillar) => (
                  <ScrollRevealItem key={pillar.num} direction="up" distance={20}>
                    <motion.div
                      className="about-pillar-item"
                      whileHover={reducedMotion ? {} : { x: 4 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="pillar-num">{pillar.num}</div>
                      <div className="pillar-content">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem' }}>{pillar.title}</h4>
                        </div>
                        <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{pillar.desc}</p>
                      </div>
                    </motion.div>
                  </ScrollRevealItem>
                ))}
              </ScrollReveal>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
