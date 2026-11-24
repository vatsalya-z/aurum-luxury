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
    const size = 20;
    switch (iconName) {
      case 'thermometer': return <FaTemperatureHigh size={size} />;
      case 'coffee': return <FaMugHot size={size} />;
      case 'refrigerator': return <BiFridge size={22} />;
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
    <section id="amenities" className={`section-padding ${darkVariant ? 'bg-pine-luxury' : 'bg-ivory'}`} style={{ backgroundColor: darkVariant ? 'var(--navy)' : 'var(--beige)' }}>
      <div className="forest-pattern absolute inset-0 opacity-5 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Section Header (Shawinn Style - Bottom-to-Top Reveal) */}
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
          <h2 style={{ color: darkVariant ? '#fff' : 'var(--navy)', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontFamily: 'var(--serif)', fontWeight: 400, margin: '0 0 16px' }}>
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

        {/* Unified Staggered Grid Format */}
        <ScrollReveal className="grid g3" staggerChildren={0.08}>
          {displayedItems.map((item, idx) => (
            <ScrollRevealItem
              key={idx}
              direction="up"
              distance={24}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <motion.div
                className={darkVariant ? 'feature' : 'feature-light'}
                whileHover={reducedMotion ? {} : { y: -5, scale: 1.01 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div
                      className="ico"
                      style={{
                        margin: 0,
                        width: 46,
                        height: 46,
                        borderRadius: 10,
                        background: darkVariant
                          ? 'linear-gradient(135deg, rgba(198, 168, 105, 0.22), rgba(198, 168, 105, 0.08))'
                          : 'linear-gradient(135deg, rgba(198, 168, 105, 0.18), rgba(198, 168, 105, 0.06))',
                        border: '1px solid rgba(198, 168, 105, 0.35)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gold)',
                        flexShrink: 0,
                      }}
                    >
                      {getIcon(item.icon)}
                    </div>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        padding: '3px 8px',
                        borderRadius: 4,
                        background: darkVariant ? 'rgba(198, 168, 105, 0.15)' : 'var(--beige)',
                        color: darkVariant ? 'var(--gold-soft)' : 'var(--navy)',
                        fontWeight: 600,
                        border: darkVariant ? '1px solid rgba(198, 168, 105, 0.3)' : '1px solid var(--line)',
                      }}
                    >
                      {item.categoryTitle}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: 8, color: darkVariant ? '#fff' : 'var(--navy)', fontFamily: 'var(--serif)' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: darkVariant ? '#b9c2d3' : 'var(--muted)', margin: 0 }}>
                    {item.description}
                  </p>
                </div>

                {item.notes && (
                  <span
                    style={{
                      display: 'inline-block',
                      marginTop: 12,
                      fontSize: '0.72rem',
                      color: 'var(--gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 700,
                    }}
                  >
                    * {item.notes}
                  </span>
                )}
              </motion.div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        {/* Centered Action Button below Grid */}
        {redirectToFacilities ? (
          <FadeIn direction="up" delay={0.15}>
            <div
              style={{
                textAlign: 'center',
                marginTop: 44,
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
                    padding: '0.95rem 2.8rem',
                    fontSize: '0.82rem',
                    letterSpacing: '0.22em',
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
              <span style={{ fontSize: '0.82rem', color: darkVariant ? '#9ba8bc' : 'var(--muted)', letterSpacing: '0.05em' }}>
                Showing {displayedItems.length} of {allItems.length} verified amenities · Click to explore full directory
              </span>
            </div>
          </FadeIn>
        ) : hasMore && (
          <FadeIn direction="up" delay={0.15}>
            <div
              style={{
                textAlign: 'center',
                marginTop: 44,
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
                  padding: '0.95rem 2.5rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.22em',
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
              <span style={{ fontSize: '0.82rem', color: darkVariant ? '#9ba8bc' : 'var(--muted)', letterSpacing: '0.05em' }}>
                Showing {displayedItems.length} of {baseItems.length} verified amenities
              </span>
            </div>
          </FadeIn>
        )}

        {/* Bottom Concierge Callout (Shawinn Style) with Scroll Reveal */}
        <FadeIn direction="up" delay={0.2}>
          <div
            style={{
              marginTop: 60,
              padding: '24px 32px',
              borderRadius: 'var(--radius)',
              background: darkVariant ? 'rgba(255, 255, 255, 0.05)' : '#fff',
              border: darkVariant ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid var(--line)',
              boxShadow: 'var(--shadow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
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
