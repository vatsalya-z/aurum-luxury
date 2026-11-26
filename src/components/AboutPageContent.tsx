'use client';

import React from 'react';
import Link from 'next/link';
import {
  FaHandHoldingHeart,
  FaBed,
  FaCompass,
  FaMountainSun,
  FaAward,
  FaTree,
  FaUtensils,
  FaClock,
  FaShieldHalved,
  FaMapLocationDot,
  FaStar,
  FaArrowRight,
} from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { HOTEL_INFO } from '@/data/hotelInfo';
import PageHero from '@/components/PageHero';
import Reviews from '@/components/Reviews';
import FAQSection from '@/components/FAQSection';
import RelatedPages from '@/components/seo/RelatedPages';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function AboutPageContent() {
  const reducedMotion = useReducedMotion();

  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'About Us', url: 'https://aurumhotelskashmir.com/about' },
  ];

  // 5 Philosophy Pillars
  const philosophies = [
    {
      title: 'Thoughtful Hospitality',
      tagline: 'Authentic Mehman-Nawazi',
      desc: 'Rooted in the timeless Kashmiri tradition of genuine warmth — welcoming each guest not merely as a visitor, but as honored family.',
      icon: <FaHandHoldingHeart size={22} />,
    },
    {
      title: 'Comfort & Relaxation',
      tagline: 'Deep Mountain Sanctuary',
      desc: 'Restorative tranquility across pine-clad cottages, master king bedding, heated rooms, and peaceful hillside acoustics away from city rush.',
      icon: <FaBed size={22} />,
    },
    {
      title: 'Attention to Detail',
      tagline: 'Artisanal Craftsmanship',
      desc: 'From handcrafted Khatamband wood ceilings and bespoke walnut carvings to evening turn-down care and custom temperature preparation.',
      icon: <HiSparkles size={22} />,
    },
    {
      title: 'Personalized Guest Experience',
      tagline: 'Tailored Stays',
      desc: 'Dedicated host assistance, customized Kashmiri Wazwan dining, private Shikara rides timed away from crowds, and curated day trips.',
      icon: <FaCompass size={22} />,
    },
    {
      title: 'Memorable Stays',
      tagline: 'Moments to Cherish',
      desc: 'Designing memories that stay forever — watching golden sunset reflections across Dal Lake from your private terrace and quiet starry nights.',
      icon: <FaMountainSun size={22} />,
    },
  ];

  // 3 Stay Experience Showcase Cards
  const stayExperiences = [
    {
      category: 'Property Atmosphere',
      title: 'A-Frame & Pine Timber Architecture',
      desc: 'Distinctive A-frame wooden chalets and pine-clad cottages nestled among fragrant deodar trees, offering an authentic mountain-lodge aesthetic with private viewing decks.',
      image: '/images/gallery/chalet-veranda-entrance.jpg',
      alt: 'Chalet entrance veranda with panoramic glass facade at The Aurum Srinagar',
    },
    {
      category: 'Guest Comfort',
      title: 'Climate-Controlled Hillside Sanctuaries',
      desc: 'Individual split AC and heating, plush king-size beds dressed in high-thread-count linens, and modern ensuite bathrooms with rain showers and 24-hour hot water.',
      image: '/images/gallery/aframe-chalet-master-bedroom.jpg',
      alt: 'Vaulted cedar master bedroom at The Aurum Luxury Collection',
    },
    {
      category: 'Hospitality Experience',
      title: 'Authentic Wazwan & Kashmiri Dining',
      desc: 'Savor multi-course traditional Kashmiri Wazwan specialties, North Indian cuisine, pure vegetarian options, and freshly brewed saffron Kahwa in our warm dining lounge.',
      image: '/images/gallery/kashmiri-dining-hall-khatamband.jpg',
      alt: 'Kashmiri dining hall with handcrafted Khatamband ceiling at The Aurum',
    },
  ];

  // 4 Commitments to Guests
  const commitments = [
    {
      title: 'Guest Satisfaction',
      desc: 'Dedicated hosts ensure every dietary preference, room comfort requirement, and travel itinerary detail is anticipated and fulfilled.',
      icon: <FaHandHoldingHeart size={20} />,
    },
    {
      title: 'Rigorous Quality Standards',
      desc: 'Meticulous daily housekeeping, premium sanitized linens, pristine ensuite bathrooms, and 24-hour power backup for continuous comfort.',
      icon: <FaShieldHalved size={20} />,
    },
    {
      title: 'Restful, Comfortable Stays',
      desc: 'High-speed Wi-Fi, tranquil hillside acoustics away from city traffic, and individually controlled climate heating for cozy mountain nights.',
      icon: <FaBed size={20} />,
    },
    {
      title: 'Responsive Guest Support',
      desc: 'Round-the-clock front desk, immediate WhatsApp concierge assistance, and personalized guidance for airport transfers and excursions.',
      icon: <FaClock size={20} />,
    },
  ];

  // 6 Verified Reasons to Choose The Aurum
  const whyChooseUs = [
    {
      title: 'Panoramic Dal Lake Vistas',
      desc: 'Elevated Brein Hills vantage point framing signature sunset reflections, gliding shikaras, and distant snow peaks.',
      icon: <FaMountainSun size={22} />,
    },
    {
      title: 'Handcrafted Timber Architecture',
      desc: 'Authentic regional cedar and pine construction featuring traditional Kashmiri Khatamband geometric ceilings and walnut carvings.',
      icon: <FaTree size={22} />,
    },
    {
      title: 'Prime Proximity to Key Attractions',
      desc: 'Located just 10–15 minutes from Dal Lake, Nishat Bagh, Shalimar Bagh, Pari Mahal, and Indira Gandhi Memorial Tulip Garden.',
      icon: <FaMapLocationDot size={22} />,
    },
    {
      title: 'Gourmet Wazwan & Multi-Cuisine Dining',
      desc: 'Freshly prepared traditional Kashmiri specialties, Indian vegetarian fare, and lavish breakfasts in our warm dining lounge.',
      icon: <FaUtensils size={22} />,
    },
    {
      title: 'Attentive Host-Led Hospitality',
      desc: 'Bilal Bhai and our dedicated team providing warm, personalized care praised across guest reviews for making stays feel like home.',
      icon: <FaAward size={22} />,
    },
    {
      title: 'Verified Excellence (5.0★ TripAdvisor)',
      desc: 'Ranked #47 of 336 B&Bs/Inns in Srinagar with perfect 5.0 category ratings for Cleanliness, Rooms, Service, and Sleep Quality.',
      icon: <FaStar size={22} />,
    },
  ];

  // Destination Highlights
  const destinations = [
    { name: 'Dal Lake & Boulevard Ghats', time: '10 Mins', desc: 'Serene Shikara boat rides and waterside strolls' },
    { name: 'Nishat Bagh & Shalimar Garden', time: '12 Mins', desc: 'Historic terraced Mughal gardens along the lake' },
    { name: 'Indira Gandhi Tulip Garden', time: '12 Mins', desc: 'Asia’s largest tulip sanctuary backed by Zabarwan hills' },
    { name: 'Pari Mahal & Chashme Shahi', time: '15 Mins', desc: 'Astronomical observatory ruins & royal natural springs' },
    { name: 'Hari Parbat Fort & Old City', time: '20 Mins', desc: 'Historic 16th-century fortress and bustling bazaars' },
    { name: 'Srinagar Airport (SXR)', time: '45 Mins', desc: 'Convenient 22 km transit with airport pickup assistance' },
  ];

  return (
    <div className="about-page">
      <PageHero
        size="tall"
        image="/images/hero/aurum-luxury-estate-hero.jpg"
        alt="The Aurum Luxury Collection mountain estate in Brein Hills Srinagar"
        breadcrumbs={breadcrumbs}
        eyebrow="WELCOME TO THE AURUM LUXURY COLLECTION"
        title="Discover the Story Behind"
        titleHighlight="Aurum Luxury Collection"
        subtitle="Where thoughtful hospitality, memorable experiences, and the timeless beauty of Kashmir come together."
        ctaLabel="Explore Our Experience"
        ctaHref="#story"
        desktopPosition="center 45%"
        mobilePosition="center 40%"
      />

      {/* ========================================================
          SECTION 1: OUR STORY (Alternating Left & Right Reveals)
          ======================================================== */}
      <section id="story" className="section-padding bg-ivory" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          {/* Centered Section Header */}
          <FadeIn direction="up">
            <div className="head" style={{ maxWidth: 860, margin: '0 auto clamp(40px, 6vw, 68px)', textAlign: 'center' }}>
              <span className="eyebrow eyebrow-wide">OUR STORY & HERITAGE</span>
              <h2>
                An Intimate Hillside Sanctuary <br />
                <span className="italic font-medium text-gold relative px-2">Above Dal Lake</span>
              </h2>
              <p style={{ marginTop: 18, color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: 720, margin: '18px auto 0' }}>
                Conceived to offer discerning travellers a tranquil retreat where authentic Kashmiri craftsmanship unites with refined modern luxury.
              </p>
            </div>
          </FadeIn>

          {/* 2-Column Story Grid */}
          <div className="about-split about-pillars-grid">
            {/* Left Column: Story Narrative (Slide from Left) */}
            <FadeIn direction="right">
              <div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: 10,
                  }}
                >
                  Bespoke Mountain Retreat · Srinagar
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                    color: 'var(--navy)',
                    fontFamily: 'var(--serif)',
                    marginBottom: 20,
                    lineHeight: 1.25,
                  }}
                >
                  Crafted by Stay Pattern with Reverence for the Valley
                </h3>
                <p style={{ color: 'var(--char)', lineHeight: 1.75, fontSize: '1rem', marginBottom: 18 }}>
                  Located in <strong>23A Brein Hills, Astanpora, Srinagar</strong>, The Aurum Luxury Collection by Stay Pattern was created to fulfill a simple yet rare ambition: to build a retreat that captures the soul of traditional Kashmir while delivering the effortless comforts of modern luxury hospitality.
                </p>
                <p style={{ color: 'var(--char)', lineHeight: 1.75, fontSize: '1rem', marginBottom: 18 }}>
                  Perched on the serene slopes of Brein Hills, the property sits safely elevated above the noise and traffic of central Srinagar. Here, guests wake up to crisp Himalayan pine breezes, panoramic western horizons overlooking the shimmering waters of Dal Lake, and the majestic silhouette of the Zabarwan mountain range.
                </p>
                <p style={{ color: 'var(--char)', lineHeight: 1.75, fontSize: '1rem', marginBottom: 28 }}>
                  Every cottage and chalet was constructed using native Kashmiri timber — rich aromatic deodar cedar and mountain pine — styled with geometric Khatamband ceilings and bespoke walnut woodwork crafted by local artisans. It is a place where nature, heritage, and genuine care meet.
                </p>

                {/* Quick Info Badges */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: 16,
                    paddingTop: 16,
                    borderTop: '1px solid var(--line)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: '50%',
                        background: 'rgba(198, 168, 105, 0.15)',
                        color: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <FaTree size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--navy)' }}>Pine Hillside</strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>Astanpora, Brein Hills</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: '50%',
                        background: 'rgba(198, 168, 105, 0.15)',
                        color: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <FaAward size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--navy)' }}>Stay Pattern</strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>Bespoke Hospitality</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Framed Visual with Floating Highlight (Slide from Right) */}
            <FadeIn direction="left">
              <div
                className="about-img-frame"
                style={{
                  position: 'relative',
                  padding: 16,
                  background: '#fff',
                  border: '1px solid var(--beige-2)',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-lg)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: 'clamp(420px, 52vh, 620px)',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <motion.img
                    src="/images/gallery/aurum-courtyard-chalets-dusk.jpg"
                    alt="The Aurum Luxury Collection chalets at twilight in Brein Hills Srinagar"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    loading="lazy"
                    whileHover={reducedMotion ? {} : { scale: 1.06 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                {/* Floating Highlight Badge */}
                <motion.div
                  className="about-floating-card"
                  style={{
                    position: 'absolute',
                    bottom: 32,
                    right: 32,
                    background: 'rgba(14, 30, 56, 0.95)',
                    backdropFilter: 'blur(16px)',
                    padding: '24px 28px',
                    borderRadius: 'var(--radius)',
                    color: '#fff',
                    maxWidth: 300,
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
                  }}
                  whileHover={reducedMotion ? {} : { y: -4, scale: 1.02 }}
                >
                  <span
                    style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      fontWeight: 700,
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    ESTABLISHED RETREAT
                  </span>
                  <strong
                    style={{
                      display: 'block',
                      fontFamily: 'var(--serif)',
                      fontSize: '1.2rem',
                      color: '#fff',
                      marginBottom: 6,
                    }}
                  >
                    Brein Hills, Astanpora
                  </strong>
                  <p style={{ fontSize: '0.82rem', color: '#c4cddc', margin: 0, lineHeight: 1.5 }}>
                    Quiet alpine serenity with panoramic views across Dal Lake and the Zabarwan peaks.
                  </p>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: OUR PHILOSOPHY (Staggered Value Cards)
          ======================================================== */}
      <section className="section-padding bg-pine-luxury relative" style={{ backgroundColor: 'var(--navy)' }}>
        <div className="forest-pattern absolute inset-0 opacity-10 pointer-events-none" />

        <div className="container relative" style={{ zIndex: 10 }}>
          {/* Centered Section Header */}
          <FadeIn direction="up">
            <div className="head" style={{ maxWidth: 860, margin: '0 auto clamp(40px, 6vw, 68px)', textAlign: 'center' }}>
              <span className="eyebrow eyebrow-wide" style={{ color: 'var(--gold)' }}>
                GUIDING PRINCIPLES
              </span>
              <h2 style={{ color: '#fff' }}>
                The Pillars of Our <span className="italic font-medium text-gold relative px-2">Guest Experience</span>
              </h2>
              <p style={{ color: '#c4cddc', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: 720, margin: '18px auto 0' }}>
                Every touchpoint of your journey is shaped by warmth, attention to detail, and a reverence for Kashmir’s legendary hospitality tradition.
              </p>
            </div>
          </FadeIn>

          {/* 5 Philosophy Cards Staggered Grid */}
          <ScrollReveal
            className="philosophy-grid"
            staggerChildren={0.1}
          >
            {philosophies.map((item, idx) => (
              <ScrollRevealItem key={idx} direction="up" distance={24}>
                <motion.div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--radius)',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                  whileHover={reducedMotion ? {} : { y: -6, backgroundColor: 'rgba(255, 255, 255, 0.07)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 'var(--radius-sm)',
                        background: 'linear-gradient(135deg, rgba(198, 168, 105, 0.24), rgba(198, 168, 105, 0.08))',
                        border: '1px solid rgba(198, 168, 105, 0.35)',
                        color: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20,
                      }}
                    >
                      {item.icon}
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-soft)',
                        fontWeight: 700,
                        display: 'block',
                        marginBottom: 6,
                      }}
                    >
                      {item.tagline}
                    </span>

                    <h3
                      style={{
                        color: '#fff',
                        fontSize: '1.28rem',
                        fontFamily: 'var(--serif)',
                        marginBottom: 12,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p style={{ color: '#b9c2d3', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: THE STAY EXPERIENCE (Staggered Cards + Image Hover)
          ======================================================== */}
      <section className="section-padding bg-ivory" style={{ backgroundColor: 'var(--beige)' }}>
        <div className="container">
          {/* Centered Section Header */}
          <FadeIn direction="up">
            <div className="head" style={{ maxWidth: 860, margin: '0 auto clamp(40px, 6vw, 68px)', textAlign: 'center' }}>
              <span className="eyebrow eyebrow-wide">THE STAY EXPERIENCE</span>
              <h2>
                Crafted for Rest, Elegance & <span className="italic font-medium text-gold relative px-2">Rejuvenation</span>
              </h2>
              <p style={{ marginTop: 18, color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: 720, margin: '18px auto 0' }}>
                Four distinctive dimensions that make staying at The Aurum Luxury Collection an unforgettable Kashmir retreat.
              </p>
            </div>
          </FadeIn>

          {/* Showcase Cards Staggered Grid */}
          <ScrollReveal
            className="stay-exp-grid"
            staggerChildren={0.12}
          >
            {stayExperiences.map((exp, idx) => (
              <ScrollRevealItem key={idx} direction="up" distance={28} style={{ display: 'flex', flexDirection: 'column' }}>
                <motion.div
                  style={{
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                  whileHover={reducedMotion ? {} : { y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Card Visual with Zoom on Hover */}
                  <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
                    <motion.img
                      src={exp.image}
                      alt={exp.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                      loading="lazy"
                      whileHover={reducedMotion ? {} : { scale: 1.08 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        background: 'rgba(14, 30, 56, 0.88)',
                        color: 'var(--gold)',
                        padding: '5px 12px',
                        borderRadius: 4,
                        fontSize: '0.72rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        border: '1px solid rgba(198, 168, 105, 0.35)',
                      }}
                    >
                      {exp.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3
                        style={{
                          fontSize: '1.25rem',
                          color: 'var(--navy)',
                          fontFamily: 'var(--serif)',
                          marginBottom: 12,
                          lineHeight: 1.3,
                        }}
                      >
                        {exp.title}
                      </h3>
                      <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: OUR COMMITMENT TO GUESTS (Staggered Cards)
          ======================================================== */}
      <section className="section-padding bg-ivory" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          {/* Centered Section Header */}
          <FadeIn direction="up">
            <div className="head" style={{ maxWidth: 860, margin: '0 auto clamp(40px, 6vw, 68px)', textAlign: 'center' }}>
              <span className="eyebrow eyebrow-wide">OUR COMMITMENT</span>
              <h2>
                Uncompromising Standards of <span className="italic font-medium text-gold relative px-2">Hospitality</span>
              </h2>
              <p style={{ marginTop: 18, color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: 720, margin: '18px auto 0' }}>
                Clear, verified service commitments ensuring your Kashmir holiday is seamless, secure, and deeply restful.
              </p>
            </div>
          </FadeIn>

          {/* 4 Commitments Staggered Grid */}
          <ScrollReveal
            className="commitments-grid"
            staggerChildren={0.08}
          >
            {commitments.map((item, idx) => (
              <ScrollRevealItem key={idx} direction="up" distance={20}>
                <motion.div
                  style={{
                    background: 'var(--beige)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    padding: '30px 24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  whileHover={reducedMotion ? {} : { y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'rgba(198, 168, 105, 0.16)',
                      border: '1px solid rgba(198, 168, 105, 0.35)',
                      color: 'var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 18,
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.18rem',
                      color: 'var(--navy)',
                      fontFamily: 'var(--serif)',
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: WHY CHOOSE THE AURUM? (Staggered Advantages)
          ======================================================== */}
      <section className="section-padding bg-pine-luxury relative" style={{ backgroundColor: 'var(--navy)' }}>
        <div className="forest-pattern absolute inset-0 opacity-10 pointer-events-none" />

        <div className="container relative" style={{ zIndex: 10 }}>
          {/* Centered Section Header */}
          <FadeIn direction="up">
            <div className="head" style={{ maxWidth: 860, margin: '0 auto clamp(40px, 6vw, 68px)', textAlign: 'center' }}>
              <span className="eyebrow eyebrow-wide" style={{ color: 'var(--gold)' }}>
                WHY CHOOSE AURUM
              </span>
              <h2 style={{ color: '#fff' }}>
                Distinctive Advantages of Our <span className="italic font-medium text-gold relative px-2">Hillside Retreat</span>
              </h2>
              <p style={{ color: '#c4cddc', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: 720, margin: '18px auto 0' }}>
                Discover why discerning couples, families, and travelers choose our Brein Hills sanctuary for their Srinagar journey.
              </p>
            </div>
          </FadeIn>

          {/* 6 Advantage Cards Staggered Grid */}
          <ScrollReveal
            className="why-choose-grid"
            staggerChildren={0.08}
          >
            {whyChooseUs.map((benefit, idx) => (
              <ScrollRevealItem key={idx} direction="up" distance={24}>
                <motion.div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--radius)',
                    padding: '28px 24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  whileHover={reducedMotion ? {} : { y: -6, backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(198, 168, 105, 0.18)',
                      border: '1px solid rgba(198, 168, 105, 0.3)',
                      color: 'var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 16,
                    }}
                  >
                    {benefit.icon}
                  </div>

                  <h3
                    style={{
                      color: '#fff',
                      fontSize: '1.18rem',
                      fontFamily: 'var(--serif)',
                      marginBottom: 10,
                    }}
                  >
                    {benefit.title}
                  </h3>

                  <p style={{ color: '#b9c2d3', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    {benefit.desc}
                  </p>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: GUEST EXPERIENCES (Reusing Verified Reviews Slider)
          ======================================================== */}
      <Reviews />

      {/* ========================================================
          SECTION 7: LOCATION & DESTINATION (Sights Grid + Centered CTA)
          ======================================================== */}
      <section className="section-padding bg-ivory" style={{ backgroundColor: 'var(--beige)' }}>
        <div className="container">
          {/* Centered Section Header */}
          <FadeIn direction="up">
            <div className="head" style={{ maxWidth: 860, margin: '0 auto clamp(40px, 6vw, 68px)', textAlign: 'center' }}>
              <span className="eyebrow eyebrow-wide">SURROUNDING SPLENDOUR</span>
              <h2>
                At the Crossroads of Nature & <span className="italic font-medium text-gold relative px-2">Heritage</span>
              </h2>
              <p style={{ marginTop: 18, color: 'var(--muted)', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: 720, margin: '18px auto 0' }}>
                Nestled on the serene slopes of <strong>23A Brein Hills, Astanpora, Srinagar (191121)</strong>, The Aurum provides quiet alpine sanctuary minutes from Kashmir’s most celebrated treasures.
              </p>
            </div>
          </FadeIn>

          {/* Sights Distance Grid with Staggered Entrance */}
          <ScrollReveal
            className="destinations-grid"
            staggerChildren={0.06}
          >
            {destinations.map((dest, idx) => (
              <ScrollRevealItem key={idx} direction="up" distance={20}>
                <motion.div
                  style={{
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: 16,
                    padding: '22px 20px',
                    boxShadow: 'var(--shadow)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    height: '100%',
                  }}
                  whileHover={reducedMotion ? {} : { y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      background: 'rgba(198, 168, 105, 0.15)',
                      color: 'var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <FaMapLocationDot size={18} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 6, marginBottom: 6 }}>
                      <h4 style={{ color: 'var(--navy)', fontSize: '1.05rem', margin: 0 }}>{dest.name}</h4>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: 'var(--gold-dark)',
                          background: 'var(--beige)',
                          border: '1px solid rgba(198, 168, 105, 0.35)',
                          padding: '3px 9px',
                          borderRadius: 999,
                          letterSpacing: '0.04em',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {dest.time}
                      </span>
                    </div>
                    <p style={{ color: 'var(--muted)', fontSize: '0.86rem', margin: 0, lineHeight: 1.55 }}>
                      {dest.desc}
                    </p>
                  </div>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>

          {/* Centered Location CTA */}
          <FadeIn direction="up" delay={0.2}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                whileHover={reducedMotion ? {} : { scale: 1.04 }}
                whileTap={reducedMotion ? {} : { scale: 0.96 }}
              >
                <Link href="/contact" className="btn btn-navy">
                  <FaCompass size={14} />
                  <span>Get Directions & View Interactive Map</span>
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          AEO FAQ SECTION (Frequently Asked Questions & Schema)
          ======================================================== */}
      <FAQSection
        page="home"
        title="About The Aurum Luxury Collection FAQ"
        subtitle="Frequently asked questions about our heritage, mountain sanctuary, and hospitality in Brein Hills."
      />

      {/* ========================================================
          INTERNAL LINKING SILO (Related Pages Ribbon)
          ======================================================== */}
      <RelatedPages
        currentPath="/about"
        title="Continue Exploring The Aurum Luxury Collection"
        subtitle="Discover our handcrafted cottages, on-site dining amenities, and scenic Srinagar excursions."
      />
    </div>
  );
}
