'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaTemperatureHigh, FaMugHot, FaShower, FaWifi,
  FaUtensils, FaEgg, FaBellConcierge, FaBowlFood, FaLeaf,
  FaClock, FaMapLocationDot, FaSuitcaseRolling, FaShirt,
  FaKitMedical, FaSquareParking, FaPlaneDeparture, FaCarSide,
  FaVanShuttle, FaChildren, FaGamepad, FaBagShopping,
  FaCircleCheck, FaArrowRight, FaChevronDown, FaChevronUp
} from 'react-icons/fa6';
import { BiFridge } from 'react-icons/bi';
import { HiSparkles } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { FACILITY_CATEGORIES } from '@/data/facilities';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';

interface FacilitiesSectionProps {
  darkVariant?: boolean;
  initialLimit?: number;
  showFilters?: boolean;
  redirectToFacilities?: boolean;
}

export default function FacilitiesSection({
  darkVariant = false,
  initialLimit = 6,
  showFilters = false,
  redirectToFacilities = true,
}: FacilitiesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);
  const reducedMotion = useReducedMotion();

  const getIcon = (iconName: string) => {
    const size = 16;
    switch (iconName) {
      case 'thermometer': return <FaTemperatureHigh size={size} />;
      case 'coffee': return <FaMugHot size={size} />;
      case 'refrigerator': return <BiFridge size={18} />;
      case 'bath': return <FaShower size={size} />;
      case 'sparkles': return <HiSparkles size={size} />;
      case 'wifi': return <FaWifi size={size} />;
      case 'utensils': return <FaUtensils size={size} />;
      case 'egg-fried': return <FaEgg size={size} />;
      case 'bell': return <FaBellConcierge size={size} />;
      case 'soup': return <FaBowlFood size={size} />;
      case 'leaf': return <FaLeaf size={size} />;
      case 'clock': return <FaClock size={size} />;
      case 'map-pin': return <FaMapLocationDot size={size} />;
      case 'briefcase': return <FaSuitcaseRolling size={size} />;
      case 'shirt': return <FaShirt size={size} />;
      case 'activity': return <FaKitMedical size={size} />;
      case 'car': return <FaSquareParking size={size} />;
      case 'plane': return <FaPlaneDeparture size={size} />;
      case 'navigation': return <FaCarSide size={size} />;
      case 'compass': return <FaVanShuttle size={size} />;
      case 'smile': return <FaChildren size={size} />;
      case 'gamepad-2': return <FaGamepad size={size} />;
      case 'shopping-bag': return <FaBagShopping size={size} />;
      default: return <FaCircleCheck size={size} />;
    }
  };

  // Flatten items with category title
  const allItems = FACILITY_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, categoryId: cat.id, categoryTitle: cat.title }))
  );

  const premierHighlights = [
    allItems.find((i) => i.name.includes('Air Conditioning')) || allItems[0],
    allItems.find((i) => i.name.includes('Restaurant')) || allItems[1],
    allItems.find((i) => i.name.includes('Wi-Fi')) || allItems[2],
    allItems.find((i) => i.name.includes('Front Desk')) || allItems[3],
    allItems.find((i) => i.name.includes('Parking')) || allItems[4],
    allItems.find((i) => i.name.includes('Room Service')) || allItems[5],
  ].filter(Boolean);

  const categoryItems = (FACILITY_CATEGORIES.find((c) => c.id === activeTab)?.items || []).map((item) => {
    const cat = FACILITY_CATEGORIES.find((c) => c.id === activeTab);
    return { ...item, categoryId: cat?.id || '', categoryTitle: cat?.title || '' };
  });

  const baseItems = showFilters
    ? (activeTab === 'all' ? allItems : categoryItems)
    : premierHighlights;

  const displayedItems = showAll ? (showFilters ? baseItems : allItems) : baseItems.slice(0, initialLimit);
  const hasMore = (showFilters ? baseItems.length : allItems.length) > initialLimit;

  return (
    <section
      id="amenities"
      className={`section-padding ${darkVariant ? 'bg-pine-luxury' : 'bg-ivory'} relative overflow-hidden`}
      style={{ backgroundColor: darkVariant ? 'var(--navy)' : 'var(--ivory, #F8F5EF)' }}
    >
      <div className="forest-pattern absolute inset-0 opacity-5 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Section Header */}
        <FadeIn direction="up" className="head" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span
            className="eyebrow eyebrow-wide"
            style={{
              color: 'var(--gold)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              fontWeight: 600,
              display: 'block',
              marginBottom: 8,
            }}
          >
            Verified Amenities
          </span>
          <h2 style={{ color: darkVariant ? '#fff' : 'var(--navy)', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontFamily: 'var(--serif)', fontWeight: 400, margin: '0 0 14px' }}>
            Exceptional <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Comforts</span>
          </h2>
          <p style={{ color: darkVariant ? '#c4cddc' : 'var(--muted)', maxWidth: 680, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Curated hospitality features crafted to guarantee pure rest, authentic dining, and seamless travel in Srinagar.
          </p>
        </FadeIn>

        {/* Filter Tabs - Shown only when showFilters is true */}
        {showFilters && (
          <FadeIn direction="up" delay={0.1}>
            <div className="filters" style={{ marginBottom: 36 }}>
              <button
                type="button"
                aria-pressed={activeTab === 'all'}
                onClick={() => {
                  setActiveTab('all');
                  setShowAll(false);
                }}
              >
                All Amenities
              </button>
              {FACILITY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={activeTab === cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setShowAll(false);
                  }}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Photographic Luxury Amenities Grid (3-col Desktop, 2-col Mobile Grid) */}
        <ScrollReveal className="comforts-grid" staggerChildren={0.07}>
          {displayedItems.map((item, idx) => (
            <ScrollRevealItem
              key={`${item.name}-${idx}`}
              direction="up"
              distance={20}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <motion.article
                className={`comfort-card ${darkVariant ? 'comfort-card--dark' : 'comfort-card--light'}`}
                whileHover={reducedMotion ? {} : { y: -6 }}
                whileTap={reducedMotion ? {} : { scale: 0.985 }}
                transition={{ duration: 0.35, ease: luxuryEase }}
              >
                {/* Context-Matched Amenity Photograph */}
                <div className="comfort-card-media">
                  <motion.img
                    src={item.image}
                    alt={`${item.name} at The Aurum Luxury Collection Srinagar`}
                    loading="lazy"
                    whileHover={reducedMotion ? {} : { scale: 1.07 }}
                    transition={{ duration: 0.75, ease: luxuryEase }}
                  />
                  <div className="comfort-card-scrim" aria-hidden="true" />
                  <span className="comfort-card-category">{item.categoryTitle}</span>
                  <span className="comfort-card-icon-badge" aria-hidden="true">
                    {getIcon(item.icon)}
                  </span>
                </div>

                {/* Editorial Card Body */}
                <div className="comfort-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  {item.notes && (
                    <span className="comfort-card-note">* {item.notes}</span>
                  )}
                </div>
              </motion.article>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        {/* Centered Action Button below Grid */}
        {redirectToFacilities ? (
          <FadeIn direction="up" delay={0.15}>
            <div
              style={{
                textAlign: 'center',
                marginTop: 40,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
              }}
            >
              <motion.div
                whileHover={reducedMotion ? {} : { scale: 1.04 }}
                whileTap={reducedMotion ? {} : { scale: 0.96 }}
              >
                <Link
                  href="/facilities"
                  className={darkVariant ? 'btn btn-outline-gold' : 'btn btn-outline-navy'}
                  style={{
                    padding: '0.9rem 2.4rem',
                    fontSize: '0.8rem',
                    letterSpacing: '0.2em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  <span>View All Amenities ({allItems.length})</span>
                  <FaArrowRight style={{ width: 14, height: 14 }} />
                </Link>
              </motion.div>
              <span style={{ fontSize: '0.82rem', color: darkVariant ? '#9ba8bc' : 'var(--muted)', letterSpacing: '0.04em' }}>
                Showing {displayedItems.length} of {allItems.length} verified amenities · Click to explore full directory
              </span>
            </div>
          </FadeIn>
        ) : hasMore && (
          <FadeIn direction="up" delay={0.15}>
            <div
              style={{
                textAlign: 'center',
                marginTop: 40,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
              }}
            >
              <motion.button
                type="button"
                className={darkVariant ? 'btn btn-outline-gold' : 'btn btn-outline-navy'}
                onClick={() => setShowAll((prev) => !prev)}
                aria-expanded={showAll}
                whileHover={reducedMotion ? {} : { scale: 1.04 }}
                whileTap={reducedMotion ? {} : { scale: 0.96 }}
                style={{
                  padding: '0.9rem 2.4rem',
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  cursor: 'pointer',
                }}
              >
                {showAll ? (
                  <>
                    Show Less Amenities <FaChevronUp style={{ width: 14, height: 14, marginLeft: 6 }} />
                  </>
                ) : (
                  <>
                    View All Amenities ({baseItems.length - initialLimit} More) <FaChevronDown style={{ width: 14, height: 14, marginLeft: 6 }} />
                  </>
                )}
              </motion.button>
              <span style={{ fontSize: '0.82rem', color: darkVariant ? '#9ba8bc' : 'var(--muted)', letterSpacing: '0.04em' }}>
                Showing {displayedItems.length} of {baseItems.length} verified amenities
              </span>
            </div>
          </FadeIn>
        )}

        {/* Bottom Concierge Callout */}
        <FadeIn direction="up" delay={0.2}>
          <div
            style={{
              marginTop: 52,
              padding: '24px 28px',
              borderRadius: 'var(--radius)',
              background: darkVariant ? 'rgba(255, 255, 255, 0.05)' : '#fff',
              border: darkVariant ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(201, 164, 92, 0.28)',
              boxShadow: 'var(--shadow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 18,
            }}
          >
            <div>
              <strong style={{ color: darkVariant ? '#fff' : 'var(--navy)', display: 'block', fontSize: '1.05rem', marginBottom: 4 }}>
                Custom Travel or Dining Requirements?
              </strong>
              <span style={{ fontSize: '0.9rem', color: darkVariant ? '#b9c2d3' : 'var(--muted)' }}>
                Our 24-hour concierge desk assists with private Shikara rides, Srinagar airport transfers, and customized wazwan menus.
              </span>
            </div>
            <motion.div
              whileHover={reducedMotion ? {} : { scale: 1.03 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
            >
              <Link href="/contact" className="btn btn-gold btn-sm">
                <span>Speak with Concierge</span>
                <FaArrowRight style={{ width: 13, height: 13 }} />
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
