'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { ATTRACTIONS } from '@/data/attractions';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ExperiencesProps {
  showImages?: boolean;
}

export default function Experiences({ showImages = true }: ExperiencesProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section id="experiences" className="section-padding bg-ivory relative overflow-hidden" style={{ backgroundColor: 'var(--white)' }}>
      <div className="forest-pattern absolute bottom-0 left-0 w-full h-80 opacity-5 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Shawinn-style Header (Bottom-to-Top Reveal) */}
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

        {/* 3-Column Luxury Cards with Staggered Entrance */}
        <ScrollReveal className="grid g3" staggerChildren={0.12}>
          {ATTRACTIONS.map((item) => (
            <ScrollRevealItem key={item.id} direction="up" distance={28} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <motion.article
                className="card"
                aria-label={item.name}
                whileHover={reducedMotion ? {} : { y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                {showImages && (
                  <div className="card-img" style={{ height: 260, overflow: 'hidden', position: 'relative' }}>
                    <motion.img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      whileHover={reducedMotion ? {} : { scale: 1.08 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

                <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {!showImages && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
                      <span
                        style={{
                          display: 'inline-block',
                          background: 'var(--navy)',
                          color: 'var(--gold-soft)',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          padding: '5px 12px',
                          borderRadius: 8,
                        }}
                      >
                        {item.category}
                      </span>
                      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        <span
                          style={{
                            background: 'rgba(14, 30, 56, 0.05)',
                            color: 'var(--navy)',
                            padding: '5px 10px',
                            fontSize: '0.74rem',
                            borderRadius: 8,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            fontWeight: 600,
                            border: '1px solid rgba(14, 30, 56, 0.08)',
                          }}
                        >
                          <MapPin style={{ width: 13, height: 13, color: 'var(--gold)' }} />
                          {item.distance}
                        </span>
                      </div>
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.35rem', marginBottom: 12, lineHeight: 1.3 }}>{item.name}</h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.65, marginBottom: 20, flex: 1 }}>
                    {item.description}
                  </p>

                  <div className="card-footer" style={{ marginTop: 'auto' }}>
                    <motion.div
                      whileHover={reducedMotion ? {} : { scale: 1.03 }}
                      whileTap={reducedMotion ? {} : { scale: 0.97 }}
                    >
                      <Link
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ' Srinagar')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-navy btn-sm"
                      >
                        <span>Directions</span>
                        <ExternalLink style={{ width: 13, height: 13 }} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        {/* Bottom Concierge Assistance */}
        <FadeIn direction="up" delay={0.2}>
          <div style={{ marginTop: 56, textAlign: 'center' }}>
            <p style={{ fontSize: '0.94rem', color: 'var(--muted)', marginBottom: 20 }}>
              Planning daily excursions or private Shikara rides? Our front desk concierge is delighted to assist.
            </p>
            <motion.div
              style={{ display: 'inline-block' }}
              whileHover={reducedMotion ? {} : { scale: 1.04 }}
              whileTap={reducedMotion ? {} : { scale: 0.96 }}
            >
              <Link href="/contact" className="btn btn-navy">
                <span>Speak with Concierge</span>
                <ArrowRight style={{ width: 14, height: 14 }} />
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
