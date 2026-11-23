'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { ATTRACTIONS } from '@/data/attractions';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';

interface ExperiencesProps {
  showImages?: boolean;
}

export default function Experiences({ showImages = true }: ExperiencesProps) {
  return (
    <section id="experiences" className="section-padding bg-ivory relative overflow-hidden" style={{ backgroundColor: 'var(--white)' }}>
      <div className="forest-pattern absolute bottom-0 left-0 w-full h-80 opacity-5 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Shawinn-style Header */}
        <FadeIn direction="up">
          <div className="head">
            <span className="eyebrow eyebrow-wide">
              Curated Srinagar Escapes
            </span>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Discover the Beauty of <span className="italic font-medium text-gold">Srinagar</span>
            </h2>
            <p>
              The Aurum Luxury Collection is located in Brein Hills, Astanpora, offering tranquil mountain seclusion
              while keeping you within effortless reach of Kashmir’s most renowned lakes and imperial gardens.
            </p>
          </div>
        </FadeIn>

        {/* 3-Column Luxury Cards */}
        <ScrollReveal className="grid g3" staggerChildren={0.12}>
          {ATTRACTIONS.map((item) => (
            <article key={item.id} className="card" aria-label={item.name}>
              {showImages && (
                <div className="card-img" style={{ height: 260 }}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span className="card-badge">{item.category}</span>

                  <div className="card-geo-badges">
                    <span
                      style={{
                        background: 'rgba(14, 30, 56, 0.9)',
                        color: 'var(--gold-soft)',
                        padding: '4px 10px',
                        fontSize: '0.72rem',
                        borderRadius: 3,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        border: '1px solid rgba(198, 168, 105, 0.35)',
                        backdropFilter: 'blur(4px)',
                        fontWeight: 600,
                      }}
                    >
                      <MapPin style={{ width: 12, height: 12, color: 'var(--gold)' }} />
                      {item.distance}
                    </span>
                    <span
                      style={{
                        background: 'rgba(14, 30, 56, 0.9)',
                        color: '#fff',
                        padding: '4px 10px',
                        fontSize: '0.72rem',
                        borderRadius: 3,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      <Clock style={{ width: 12, height: 12, color: 'var(--gold-soft)' }} />
                      {item.travelTime}
                    </span>
                  </div>
                </div>
              )}

              <div className="card-body">
                {!showImages && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        background: 'var(--navy)',
                        color: 'var(--gold-soft)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: 3,
                      }}
                    >
                      {item.category}
                    </span>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                      <span
                        style={{
                          background: 'rgba(14, 30, 56, 0.05)',
                          color: 'var(--navy)',
                          padding: '4px 8px',
                          fontSize: '0.72rem',
                          borderRadius: 3,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                          fontWeight: 600,
                        }}
                      >
                        <MapPin style={{ width: 12, height: 12, color: 'var(--gold)' }} />
                        {item.distance}
                      </span>
                      <span
                        style={{
                          background: 'rgba(14, 30, 56, 0.05)',
                          color: 'var(--muted)',
                          padding: '4px 8px',
                          fontSize: '0.72rem',
                          borderRadius: 3,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                        }}
                      >
                        <Clock style={{ width: 12, height: 12, color: 'var(--gold-soft)' }} />
                        {item.travelTime}
                      </span>
                    </div>
                  </div>
                )}
                <h3 style={{ fontSize: '1.3rem', marginBottom: 10 }}>{item.name}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, marginBottom: 18 }}>
                  {item.description}
                </p>

                <div
                  className="card-highlight-box"
                  style={{
                    padding: '10px 14px',
                    borderRadius: 4,
                    background: 'var(--beige)',
                    marginBottom: 18,
                    fontSize: '0.8rem',
                    color: 'var(--navy)',
                    borderLeft: '3px solid var(--gold)',
                  }}
                >
                  <strong>Must Experience: </strong>
                  <span>{item.highlight}</span>
                </div>

                <div className="card-footer">
                  <span style={{ fontSize: '0.78rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    From Brein Hills
                  </span>
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ' Srinagar')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-navy btn-sm"
                  >
                    <span>Directions</span>
                    <ExternalLink style={{ width: 12, height: 12 }} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>

        {/* Bottom Concierge Assistance */}
        <FadeIn direction="up" delay={0.2}>
          <div style={{ marginTop: 56, textAlign: 'center' }}>
            <p style={{ fontSize: '0.94rem', color: 'var(--muted)', marginBottom: 20 }}>
              Planning daily excursions or private Shikara rides? Our front desk concierge is delighted to assist.
            </p>
            <Link href="/contact" className="btn btn-navy">
              <span>Speak with Concierge</span>
              <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
