'use client';

import React, { useRef, useState } from 'react';
import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Sparkles,
  Thermometer,
  UtensilsCrossed,
  Clock,
  Car,
  ShieldCheck,
  CheckCircle2,
  Compass,
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Calendar,
  Coffee,
  Wifi,
  Droplets,
  Briefcase,
  Shirt,
  HeartPulse,
  Plane,
  MapPin,
  Smile,
  Gamepad2,
  ShoppingBag,
  BellRing,
  Leaf,
  Soup,
  EggFried,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FACILITY_CATEGORIES } from '@/data/facilities';
import { ROOM_MEAL_PLANS } from '@/data/rooms';
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

const CULINARY_SLIDES = [
  {
    src: '/images/facilities/royal-wazwan-trami-dining.jpg',
    badge: 'SIGNATURE KASHMIRI WAZWAN',
    caption:
      'Authentic multi-course Kashmiri Wazwan served with steaming saffron-almond Kahwa from an engraved copper Samovar.',
  },
  {
    src: '/images/gallery/kashmiri-dining-hall-khatamband.jpg',
    badge: 'KHATAMBAND DINING HALL',
    caption:
      'Handcrafted walnut woodwork and geometric Khatamband ceiling artistry inside our warm indoor dining room.',
  },
  {
    src: '/images/gallery/aurum-buffet-dining-spread.jpg',
    badge: 'MORNING GOURMET SPREAD',
    caption:
      'Freshly prepared morning breakfast buffet featuring Kashmiri bakery breads, orchard fruits, and hot classics.',
  },
  {
    src: '/images/gallery/aurum-al-fresco-terrace-dinner.jpg',
    badge: 'AL FRESCO TERRACE DINING',
    caption:
      'Private evening dining under the Himalayan sky overlooking glittering Srinagar city and Dal Lake lights.',
  },
];

const STAY_STANDARDS = [
  {
    code: '01 · ARRIVAL & CHECK-IN',
    title: `From ${HOTEL_INFO.checkIn}`,
    meta: 'Early Luggage Hold Available',
    detail:
      'Warm Kashmiri Kahwa welcome upon arrival, express registration, and secure baggage storage for early flights.',
  },
  {
    code: '02 · DEPARTURE & CHECK-OUT',
    title: `Until ${HOTEL_INFO.checkOut}`,
    meta: 'Seamless Concierge Billing',
    detail:
      'Flexible post-checkout luggage storage and onward airport or sightseeing cab coordination via our front desk.',
  },
  {
    code: '03 · AIRPORT & VALLEY CABS',
    title: '16 km · SXR Airport',
    meta: 'Pre-Arranged Private Transfers',
    detail:
      'Dedicated sanitized sedans and SUVs for Srinagar Airport pickups, Dal Lake ghats, and Gulmarg/Pahalgam day trips.',
  },
  {
    code: '04 · MOUNTAIN RELIABILITY',
    title: '24/7 Power & Heating',
    meta: 'All-Season Guest Comfort',
    detail:
      'Individual room heating & AC, 24-hour hot rain showers, power backup, and complimentary high-speed Wi-Fi.',
  },
];

const DISCOVERY_MEDIA: Record<string, string> = {
  '/rooms': '/images/gallery/aurum-sunset-chalet-emerald-suite.jpg',
  '/experiences': '/images/hero/aurum-experiences-hero-desktop.jpg',
  '/gallery': '/images/gallery/aurum-aframe-chalets-courtyard-dusk.jpg',
  '/contact': '/images/facilities/front-desk-concierge.jpg',
};

const INITIAL_AMENITY_LIMIT = 12;

function renderAmenityIcon(iconName: string) {
  const props = { style: { width: 16, height: 16 } };
  switch (iconName) {
    case 'thermometer':
      return <Thermometer {...props} />;
    case 'coffee':
      return <Coffee {...props} />;
    case 'refrigerator':
      return <Sparkles {...props} />;
    case 'bath':
      return <Droplets {...props} />;
    case 'sparkles':
      return <Sparkles {...props} />;
    case 'wifi':
      return <Wifi {...props} />;
    case 'utensils':
      return <UtensilsCrossed {...props} />;
    case 'egg-fried':
      return <EggFried {...props} />;
    case 'bell':
      return <BellRing {...props} />;
    case 'soup':
      return <Soup {...props} />;
    case 'leaf':
      return <Leaf {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'map-pin':
      return <MapPin {...props} />;
    case 'briefcase':
      return <Briefcase {...props} />;
    case 'shirt':
      return <Shirt {...props} />;
    case 'activity':
      return <HeartPulse {...props} />;
    case 'car':
      return <Car {...props} />;
    case 'plane':
      return <Plane {...props} />;
    case 'navigation':
      return <Car {...props} />;
    case 'compass':
      return <Compass {...props} />;
    case 'smile':
      return <Smile {...props} />;
    case 'gamepad-2':
      return <Gamepad2 {...props} />;
    case 'shopping-bag':
      return <ShoppingBag {...props} />;
    default:
      return <CheckCircle2 {...props} />;
  }
}

export default function FacilitiesPageContent() {
  const { openBooking } = useBooking();
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);

  const [culinaryIdx, setCulinaryIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedAll, setExpandedAll] = useState(false);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallaxY = useTransform(heroScroll, [0, 1], [0, 22]);

  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Facilities & Amenities', url: 'https://aurumhotelskashmir.com/facilities' },
  ];

  const {
    props: { srcSet: desktopHeroSrcSet },
  } = getImageProps({
    alt: 'Handcrafted Kashmiri walnut Khatamband lounge, copper Samovar Kahwa service, and panoramic Dal Lake mountain views at The Aurum Srinagar',
    width: 2560,
    height: 1440,
    sizes: '100vw',
    quality: 96,
    priority: true,
    src: '/images/hero/aurum-facilities-hero-desktop.jpg',
  });

  const {
    props: { srcSet: mobileHeroSrcSet, ...heroImgRest },
  } = getImageProps({
    alt: 'Handcrafted Kashmiri Khatamband hospitality lounge and Dal Lake mountain vista at The Aurum Srinagar',
    width: 1200,
    height: 1500,
    sizes: '100vw',
    quality: 96,
    priority: true,
    src: '/images/hero/aurum-facilities-hero-mobile.jpg',
  });

  const allFacilities = FACILITY_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      categoryId: cat.id,
      categoryTitle: cat.title,
    }))
  );

  const filteredFacilities =
    activeTab === 'all'
      ? allFacilities
      : allFacilities.filter((item) => item.categoryId === activeTab);

  const isCapped = activeTab === 'all' && !expandedAll;
  const visibleFacilities = isCapped
    ? filteredFacilities.slice(0, INITIAL_AMENITY_LIMIT)
    : filteredFacilities;
  const remainingCount = filteredFacilities.length - visibleFacilities.length;

  const currentCulinary = CULINARY_SLIDES[culinaryIdx] || CULINARY_SLIDES[0];

  const diningWaUrl = `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hello, I would like to enquire about Wazwan dining, pure vegetarian / halal meal plans, and amenities at The Aurum Luxury Collection.'
  )}`;

  const discoveryLinks = INTERNAL_LINKS['/facilities'] || [];

  return (
    <div className="fac-luxury-page">
      {/* ========================================================
          SECTION 01 — CINEMATIC KHATAMBAND HOSPITALITY HERO
          ======================================================== */}
      <section ref={heroRef} className="page-hero page-hero--tall fac-hero-cinematic">
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
              alt="Handcrafted Kashmiri walnut Khatamband lounge, copper Samovar Kahwa service, and panoramic Dal Lake mountain views at The Aurum Srinagar"
              className="page-hero-img page-hero-img--art fac-hero-zoom"
              style={heroImgRest.style}
            />
          </picture>
        </motion.div>

        <div className="page-hero-scrim fac-hero-scrim" aria-hidden="true" />
        <div className="page-hero-gold-edge" aria-hidden="true" />

        <WinterEnvironment intensity="subtle" fog={false} snowZIndex={3} />

        <div className="page-hero-inner fac-hero-content">
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
            <ShieldCheck style={{ width: 13, height: 13 }} />
            <span>{allFacilities.length} Verified Amenities · Brein Hills, Srinagar</span>
          </motion.div>

          <motion.span
            className="eyebrow eyebrow-wide page-hero-eyebrow"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: luxuryEase }}
          >
            BESPOKE HOSPITALITY &amp; DINING
          </motion.span>

          <motion.h1
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: luxuryEase }}
          >
            Exceptional Comforts &amp;{' '}
            <span className="italic-serif text-gold">Hospitality</span>
          </motion.h1>

          <motion.p
            className="page-hero-subtitle"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: luxuryEase }}
          >
            All-season climate-controlled suites, authentic Kashmiri Wazwan &amp; saffron
            Kahwa dining, complimentary gated parking, and 24-hour concierge care.
          </motion.p>

          <motion.div
            className="rooms-hero-actions fac-hero-actions"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32, ease: luxuryEase }}
          >
            <a href="#amenities-directory" className="btn btn-gold">
              <span>Explore Amenities</span>
              <ArrowDown style={{ width: 15, height: 15 }} />
            </a>
            <a href="#dining" className="btn btn-line-white">
              <UtensilsCrossed style={{ width: 15, height: 15 }} />
              <span>Dining &amp; Meal Plans</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02 — SIGNATURE HOSPITALITY PILLARS RIBBON
          ======================================================== */}
      <section className="exp-highlights-ribbon" aria-label="Key Hotel Comforts">
        <div className="wrap">
          <div className="exp-highlights-grid">
            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <Thermometer style={{ width: 19, height: 19 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">All-Season Climate</span>
                <strong>Heating &amp; AC Suites</strong>
                <p>24-hr hot showers &amp; cozy warmth</p>
              </div>
            </div>

            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <UtensilsCrossed style={{ width: 19, height: 19 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">Culinary Heritage</span>
                <strong>Wazwan &amp; Kahwa</strong>
                <p>Halal, Pure Veg &amp; CP/MAP plans</p>
              </div>
            </div>

            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <Clock style={{ width: 19, height: 19 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">Round-the-Clock</span>
                <strong>24/7 Front Desk</strong>
                <p>In-room dining &amp; travel desk</p>
              </div>
            </div>

            <div className="exp-highlight-tile">
              <div className="exp-highlight-ico">
                <Car style={{ width: 19, height: 19 }} />
              </div>
              <div>
                <span className="exp-highlight-kicker">Effortless Arrival</span>
                <strong>Free Gated Parking</strong>
                <p>High-speed Wi-Fi &amp; airport cabs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03 — ROYAL KASHMIRI DINING & MEAL PLANS SHOWCASE
          ======================================================== */}
      <section id="dining" className="fac-culinary-section">
        <div className="wrap">
          <div className="fac-culinary-grid">
            {/* Left Column: Interactive Culinary Photo Stage */}
            <FadeIn direction="up" className="fac-culinary-media-col">
              <div className="fac-culinary-stage">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCulinary.src}
                    className="fac-culinary-frame"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0.25, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.35, ease: luxuryEase }}
                  >
                    <Image
                      src={currentCulinary.src}
                      alt={currentCulinary.caption}
                      width={960}
                      height={680}
                      quality={92}
                      sizes="(max-width: 1024px) 100vw, 52vw"
                      className="fac-culinary-img"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="fac-culinary-scrim" aria-hidden="true" />

                <div className="fac-culinary-top">
                  <span className="rsuite-badge-pill">{currentCulinary.badge}</span>
                  <span className="fac-hours-pill">
                    <Clock style={{ width: 12, height: 12 }} />
                    7:30 AM – 10:30 PM · 24/7 Room Service
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setCulinaryIdx(
                      (prev) => (prev - 1 + CULINARY_SLIDES.length) % CULINARY_SLIDES.length
                    )
                  }
                  className="rsuite-nav-btn rsuite-nav-btn--prev"
                  aria-label="Previous dining photograph"
                >
                  <ChevronLeft style={{ width: 18, height: 18 }} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setCulinaryIdx((prev) => (prev + 1) % CULINARY_SLIDES.length)
                  }
                  className="rsuite-nav-btn rsuite-nav-btn--next"
                  aria-label="Next dining photograph"
                >
                  <ChevronRight style={{ width: 18, height: 18 }} />
                </button>

                <p className="fac-culinary-caption">{currentCulinary.caption}</p>
              </div>

              <div className="fac-culinary-thumbs">
                {CULINARY_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setCulinaryIdx(idx)}
                    aria-label={`View ${slide.badge}`}
                    className={`fac-culinary-thumb${idx === culinaryIdx ? ' is-active' : ''}`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.badge}
                      width={180}
                      height={116}
                      quality={80}
                      className="fac-culinary-thumb-img"
                    />
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Right Column: Culinary Narrative & Curated Meal Plans */}
            <FadeIn direction="up" delay={0.08} className="fac-culinary-info-col">
              <span className="eyebrow eyebrow-wide">
                <UtensilsCrossed
                  style={{ width: 13, height: 13, display: 'inline', marginRight: 6 }}
                />
                The Aurum Kitchen &amp; Table
              </span>
              <h2>
                Authentic Kashmiri Wazwan &amp;{' '}
                <span className="italic-serif text-gold">Curated Meal Plans</span>
              </h2>
              <p className="fac-culinary-lead">
                Dine beneath intricately carved Khatamband ceilings or request private
                terrace service overlooking Brein Hills. Our kitchen prepares aromatic
                slow-cooked Kashmiri delicacies, comforting North Indian favourites, and
                continental classics using fresh valley produce.
              </p>

              <div className="fac-dietary-chips">
                <span>
                  <CheckCircle2 style={{ width: 13, height: 13 }} /> 100% Halal Meats
                </span>
                <span>
                  <Leaf style={{ width: 13, height: 13 }} /> Pure Vegetarian Options
                </span>
                <span>
                  <Coffee style={{ width: 13, height: 13 }} /> Traditional Saffron Kahwa
                </span>
              </div>

              <div className="fac-mealplans-list">
                {ROOM_MEAL_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className={`fac-mealplan-card${
                      plan.badge ? ' fac-mealplan-card--featured' : ''
                    }`}
                  >
                    <div className="fac-mealplan-top">
                      <strong>{plan.name}</strong>
                      {plan.badge && (
                        <span className="fac-mealplan-badge">{plan.badge}</span>
                      )}
                    </div>
                    <p>{plan.description}</p>
                  </div>
                ))}
              </div>

              <div className="fac-culinary-actions">
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="btn btn-gold"
                >
                  <Calendar style={{ width: 15, height: 15 }} />
                  <span>Book Stay &amp; Meal Plan</span>
                </button>
                <a
                  href={diningWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-navy"
                >
                  <FaWhatsapp style={{ width: 16, height: 16 }} />
                  <span>Custom Dining Query</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04 — COMPLETE VERIFIED AMENITIES DIRECTORY
          ======================================================== */}
      <section id="amenities-directory" className="fac-directory-section">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="fac-directory-head">
              <span className="eyebrow eyebrow-wide">
                <Sparkles style={{ width: 13, height: 13, display: 'inline', marginRight: 6 }} />
                Complete Property Directory
              </span>
              <h2>
                Verified Hotel <span className="italic-serif text-gold">Amenities</span>
              </h2>
              <p>
                Every amenity below is inspected, operational, and maintained across our
                Brein Hills cottages, chalets, and dining spaces.
              </p>
            </div>
          </FadeIn>

          {/* Horizontally Scrollable Category Filter Rail */}
          <div className="fac-filter-wrap">
            <div
              className="gal-filter-rail fac-filter-rail"
              role="tablist"
              aria-label="Filter hotel amenities by category"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'all'}
                onClick={() => setActiveTab('all')}
                className={`gal-filter-pill${activeTab === 'all' ? ' is-active' : ''}`}
              >
                <span>All Amenities</span>
                <span className="gal-filter-count">{allFacilities.length}</span>
              </button>

              {FACILITY_CATEGORIES.map((cat) => {
                const isSelected = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveTab(cat.id)}
                    className={`gal-filter-pill${isSelected ? ' is-active' : ''}`}
                  >
                    <span>{cat.title}</span>
                    <span className="gal-filter-count">{cat.items.length}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Desktop / Sleek 2-Column Mobile Grid */}
          <motion.div
            key={activeTab}
            className="fac-amenities-grid"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: luxuryEase }}
          >
            {visibleFacilities.map((item) => (
              <article key={`${item.categoryId}-${item.name}`} className="fac-amenity-card">
                <div className="fac-amenity-media">
                  <Image
                    src={item.image}
                    alt={`${item.name} at The Aurum Luxury Collection Srinagar`}
                    width={640}
                    height={420}
                    quality={88}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="fac-amenity-img"
                  />
                  <div className="fac-amenity-scrim" aria-hidden="true" />
                  <span className="fac-amenity-cat">{item.categoryTitle}</span>
                  <span className="fac-amenity-verified">
                    <CheckCircle2 style={{ width: 11, height: 11 }} />
                    <span>Verified</span>
                  </span>
                  <span className="fac-amenity-ico" aria-hidden="true">
                    {renderAmenityIcon(item.icon)}
                  </span>
                </div>

                <div className="fac-amenity-body">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  {item.notes && <span className="fac-amenity-note">* {item.notes}</span>}
                </div>
              </article>
            ))}
          </motion.div>

          {/* Show All / Show Less Toggle */}
          {activeTab === 'all' && filteredFacilities.length > INITIAL_AMENITY_LIMIT && (
            <div className="gal-load-more-wrap">
              <div className="gal-progress-meta">
                Showing <strong>{visibleFacilities.length}</strong> of{' '}
                <strong>{filteredFacilities.length}</strong> verified property amenities
              </div>
              <button
                type="button"
                onClick={() => setExpandedAll((prev) => !prev)}
                className="btn btn-outline-navy gal-load-more-btn"
              >
                {expandedAll ? (
                  <>
                    <span>Show Signature Highlights ({INITIAL_AMENITY_LIMIT})</span>
                    <ChevronUp style={{ width: 16, height: 16 }} />
                  </>
                ) : (
                  <>
                    <span>
                      View All {filteredFacilities.length} Verified Amenities (+{remainingCount}{' '}
                      More)
                    </span>
                    <ChevronDown style={{ width: 16, height: 16 }} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          SECTION 05 — STAY STANDARDS & BOUTIQUE SERVICE TRANSPARENCY
          ======================================================== */}
      <section className="exp-valley-section fac-standards-section">
        <div className="wrap">
          <FadeIn direction="up">
            <div className="exp-valley-head">
              <div>
                <span className="eyebrow eyebrow-wide" style={{ color: 'var(--gold-soft)' }}>
                  Guest Care &amp; Arrival Timings
                </span>
                <h2>
                  Seamless Stay{' '}
                  <span className="italic-serif" style={{ color: 'var(--gold-soft)' }}>
                    Standards &amp; Policies
                  </span>
                </h2>
              </div>
              <p>
                Designed around quiet mountain privacy, reliable winter-and-summer utilities,
                and transparent Kashmiri hospitality from arrival to departure.
              </p>
            </div>
          </FadeIn>

          <div className="exp-valley-grid">
            {STAY_STANDARDS.map((std) => (
              <div key={std.code} className="exp-valley-card">
                <span className="exp-valley-code">{std.code}</span>
                <h3>{std.title}</h3>
                <span className="exp-valley-dist">
                  <CheckCircle2 style={{ width: 12, height: 12 }} />
                  {std.meta}
                </span>
                <p>{std.detail}</p>
              </div>
            ))}
          </div>

          <FadeIn direction="up" delay={0.1}>
            <div className="exp-concierge-banner">
              <div className="exp-concierge-banner-media">
                <Image
                  src="/images/facilities/front-desk-concierge.jpg"
                  alt="24-hour reception and concierge desk at The Aurum Luxury Collection Srinagar"
                  width={680}
                  height={460}
                  quality={88}
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="exp-concierge-banner-img"
                />
              </div>
              <div className="exp-concierge-banner-body">
                <span className="eyebrow" style={{ color: 'var(--gold-soft)', marginBottom: 4 }}>
                  <ShieldCheck
                    style={{ width: 13, height: 13, display: 'inline', marginRight: 5 }}
                  />
                  Boutique Service Transparency
                </span>
                <h3>Our Commitment to Verified Mountain Hospitality</h3>
                <p>
                  Every amenity listed on this page is genuinely operational at our Brein
                  Hills estate. To preserve an intimate, peaceful Himalayan chalet sanctuary,
                  we do not operate a commercial swimming pool, gym, or nightclub — focusing
                  instead on bespoke timber comfort, authentic Wazwan dining, and 24/7
                  personal care.
                </p>
                <div className="exp-concierge-banner-btns">
                  <Link href="/rooms" className="btn btn-gold btn-sm">
                    <span>Explore Rooms &amp; Chalets</span>
                  </Link>
                  <a
                    href={diningWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-wa btn-sm"
                  >
                    <FaWhatsapp style={{ width: 15, height: 15 }} />
                    <span>24/7 Concierge Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          SECTION 06 — CONTINUE EXPLORING THE AURUM
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
                Explore Residences &amp;{' '}
                <span className="italic-serif text-gold">Experiences</span>
              </h2>
              <p>
                Pair our verified amenities and Kashmiri dining with panoramic Dal View
                chalets and curated Srinagar sightseeing itineraries.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal
            className="rooms-discover-grid fac-discover-grid"
            staggerChildren={0.08}
          >
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
                        sizes="(max-width: 768px) 50vw, 25vw"
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
          SECTION 07 — HOTEL FACILITIES FAQ & ROYAL WAZWAN CTA
          ======================================================== */}
      <FAQSection
        page="facilities"
        title="Hotel Facilities & Amenities FAQ"
        subtitle="Helpful details regarding on-site Wazwan dining, heating & AC, Wi-Fi, private parking, and airport transfers."
      />

      <CTASection variant="facilities" onOpenBooking={() => openBooking()} />
    </div>
  );
}
