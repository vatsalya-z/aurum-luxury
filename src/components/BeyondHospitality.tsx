'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Utensils, Compass } from 'lucide-react';
import FadeIn from './animations/FadeIn';

export default function BeyondHospitality() {
  return (
    <section id="experience" className="section-padding bg-pine-luxury relative overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      <div className="forest-pattern absolute inset-0 opacity-10 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Section Head */}
        <FadeIn direction="up">
          <div className="head" style={{ maxWidth: 860 }}>
            <span className="eyebrow eyebrow-wide">
              Curated Living
            </span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Beyond <span className="italic font-medium text-gold">Hospitality</span>
            </h2>
            <p style={{ color: '#c4cddc' }}>
              A stay at The Aurum extends far beyond refined accommodations. Immerse yourself in authentic Kashmiri
              culinary traditions and curated valley expeditions designed to evoke wonder.
            </p>
          </div>
        </FadeIn>

        {/* 2-Card Visual Split Showcase (Shawinn Style) */}
        <div className="experience-split-showcase">
          {/* Card 1: Alpine Dining & Wazwan */}
          <FadeIn direction="right">
            <div className="showcase-card">
              <img
                src="/images/facilities/dining-hall-wazwan.png"
                alt="Wazwan Dining Hall at The Aurum Srinagar"
                loading="lazy"
              />
              <div className="showcase-overlay">
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: 8 }}>
                  Culinary Experience
                </span>
                <h3>Wazwan & Alpine Dining</h3>
                <p>
                  From fragrant traditional Rogan Josh and Gushtaba to continental breakfast spreads,
                  our dining hall celebrates local ingredients and culinary heritage.
                </p>
                <div>
                  <Link href="/facilities" className="btn btn-outline-white btn-sm">
                    <span>Explore Dining</span>
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Mountain & Lake Adventures */}
          <FadeIn direction="left">
            <div className="showcase-card">
              <img
                src="/images/gallery/dal-lake-sunset-view.webp"
                alt="Sunset Shikara ride on Dal Lake Srinagar"
                loading="lazy"
              />
              <div className="showcase-overlay">
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: 8 }}>
                  Valley Expeditions
                </span>
                <h3>Srinagar & Dal Lake Excursions</h3>
                <p>
                  Glide across Dal Lake on a handcrafted Shikara at sunset, explore centuries-old Mughal Gardens,
                  or wander through fragrant tulip terraces just minutes away.
                </p>
                <div>
                  <Link href="/experiences" className="btn btn-outline-white btn-sm">
                    <span>Discover Sights</span>
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
