'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Thermometer, Coffee, Refrigerator, Bath, Sparkles, Wifi,
  Utensils, Egg, Bell, Soup, Leaf, Clock, MapPin, Briefcase,
  Shirt, Activity, Car, Plane, Navigation, Compass, Smile,
  Gamepad2, ShoppingBag, Check, ArrowRight, ChevronDown, ChevronUp
} from 'lucide-react';
import { FACILITY_CATEGORIES } from '@/data/facilities';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';

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

  const getIcon = (iconName: string) => {
    const props = { style: { width: 22, height: 22 } };
    switch (iconName) {
      case 'thermometer': return <Thermometer {...props} />;
      case 'coffee': return <Coffee {...props} />;
      case 'refrigerator': return <Refrigerator {...props} />;
      case 'bath': return <Bath {...props} />;
      case 'sparkles': return <Sparkles {...props} />;
      case 'wifi': return <Wifi {...props} />;
      case 'utensils': return <Utensils {...props} />;
      case 'egg-fried': return <Egg {...props} />;
      case 'bell': return <Bell {...props} />;
      case 'soup': return <Soup {...props} />;
      case 'leaf': return <Leaf {...props} />;
      case 'clock': return <Clock {...props} />;
      case 'map-pin': return <MapPin {...props} />;
      case 'briefcase': return <Briefcase {...props} />;
      case 'shirt': return <Shirt {...props} />;
      case 'activity': return <Activity {...props} />;
      case 'car': return <Car {...props} />;
      case 'plane': return <Plane {...props} />;
      case 'navigation': return <Navigation {...props} />;
      case 'compass': return <Compass {...props} />;
      case 'smile': return <Smile {...props} />;
      case 'gamepad-2': return <Gamepad2 {...props} />;
      case 'shopping-bag': return <ShoppingBag {...props} />;
      default: return <Check {...props} />;
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
        {/* Section Header (Shawinn Style) */}
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
        )}

        {/* Unified Grid Format */}
        <ScrollReveal className="grid g3" staggerChildren={0.08}>
          {displayedItems.map((item, idx) => (
            <ScrollRevealItem
              key={idx}
              className={darkVariant ? 'feature' : 'feature-light'}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div className="ico" style={{ margin: 0 }}>
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
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        {/* Centered Action Button below Grid */}
        {redirectToFacilities ? (
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
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <span style={{ fontSize: '0.82rem', color: darkVariant ? '#9ba8bc' : 'var(--muted)', letterSpacing: '0.05em' }}>
              Showing {displayedItems.length} of {allItems.length} verified amenities · Click to explore full directory
            </span>
          </div>
        ) : hasMore && (
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
            <button
              type="button"
              className={darkVariant ? 'btn btn-outline-gold' : 'btn btn-outline-navy'}
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              style={{
                padding: '0.95rem 2.5rem',
                fontSize: '0.82rem',
                letterSpacing: '0.22em',
                cursor: 'pointer',
              }}
            >
              {showAll ? (
                <>
                  Show Less Amenities <ChevronUp style={{ width: 16, height: 16, marginLeft: 6 }} />
                </>
              ) : (
                <>
                  View All Amenities ({baseItems.length - initialLimit} More) <ChevronDown style={{ width: 16, height: 16, marginLeft: 6 }} />
                </>
              )}
            </button>
            <span style={{ fontSize: '0.82rem', color: darkVariant ? '#9ba8bc' : 'var(--muted)', letterSpacing: '0.05em' }}>
              Showing {displayedItems.length} of {baseItems.length} verified amenities
            </span>
          </div>
        )}

        {/* Bottom Concierge Callout (Shawinn Style) */}
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
          <Link href="/contact" className="btn btn-gold btn-sm">
            <span>Speak with Concierge</span>
            <ArrowRight style={{ width: 14, height: 14 }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
