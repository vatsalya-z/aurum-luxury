'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ATTRACTIONS } from '@/data/attractions';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ExperiencesProps {
  showImages?: boolean;
  layout?: 'carousel-mobile' | 'stack-mobile';
}

export default function Experiences({
  showImages = true,
  layout = 'stack-mobile',
}: ExperiencesProps) {
  const reducedMotion = useReducedMotion();
  const mobileLayoutClass =
    layout === 'carousel-mobile' ? 'experiences-carousel-mobile' : 'experiences-stack-mobile';

  return (
    <section
      id="experiences"
      className="section-padding bg-ivory relative overflow-hidden"
      style={{ backgroundColor: 'var(--white)' }}
    >
      <div className="forest-pattern absolute bottom-0 left-0 w-full h-80 opacity-5 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Header */}
        <FadeIn direction="up">
          <div className="head" style={{ marginBottom: layout === 'carousel-mobile' ? 24 : undefined }}>
            <span className="eyebrow eyebrow-wide">Curated Srinagar Escapes</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
              Discover the Beauty of <span className="italic font-medium text-gold">Srinagar</span>
            </h2>
            <p>
              The Aurum Luxury Collection is located in Brein Hills, Astanpora, offering tranquil mountain seclusion
              while keeping you within effortless reach of Kashmir’s most renowned lakes and imperial gardens.
            </p>
          </div>
        </FadeIn>

        {layout === 'carousel-mobile' && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="swipe-hint-mobile">
              <span>Swipe to explore Srinagar</span>
              <ArrowRight style={{ width: 13, height: 13 }} />
            </span>
          </div>
        )}

        {/* 3-Column Luxury Cards (Carousel or Stack on Mobile) */}
        <ScrollReveal className={`grid g3 ${mobileLayoutClass}`} staggerChildren={0.1}>
          {ATTRACTIONS.map((item) => (
            <ScrollRevealItem
              key={item.id}
              direction="up"
              distance={24}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <motion.article
                className="card"
                aria-label={item.name}
                whileHover={reducedMotion ? {} : { y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                {showImages && (
                  <div className="card-img" style={{ height: 240, overflow: 'hidden', position: 'relative' }}>
                    <motion.img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      whileHover={reducedMotion ? {} : { scale: 1.07 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(10,22,40,0.12) 0%, transparent 45%, rgba(10,22,40,0.65) 100%)',
                        pointerEvents: 'none',
                      }}
                    />
                    <span className="card-badge">{item.category}</span>

                    <div className="card-geo-badges">
                      <span
                        style={{
                          background: 'rgba(14, 30, 56, 0.9)',
                          color: 'var(--gold-soft)',
                          padding: '4px 10px',
                          fontSize: '0.72rem',
                          borderRadius: 999,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                          border: '1px solid rgba(198, 168, 105, 0.4)',
                          backdropFilter: 'blur(6px)',
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
                          borderRadius: 999,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                          border: '1px solid rgba(255, 255, 255, 0.22)',
                          backdropFilter: 'blur(6px)',
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', gap: 10 }}>
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
                          borderRadius: 999,
                        }}
                      >
                        {item.category}
                      </span>
                      <span
                        style={{
                          background: 'rgba(14, 30, 56, 0.05)',
                          color: 'var(--navy)',
                          padding: '5px 10px',
                          fontSize: '0.74rem',
                          borderRadius: 999,
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
                  )}

                  <h3 style={{ fontSize: '1.3rem', marginBottom: 10, lineHeight: 1.3 }}>{item.name}</h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.62, marginBottom: 14, flex: 1 }}>
                    {item.description}
                  </p>

                  {item.highlight && (
                    <div
                      className="card-highlight-box"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        padding: '10px 12px',
                        borderRadius: 10,
                        background: 'var(--beige)',
                        border: '1px solid rgba(198, 168, 105, 0.28)',
                        fontSize: '0.8rem',
                        color: 'var(--navy)',
                        fontWeight: 500,
                        marginBottom: 18,
                        lineHeight: 1.45,
                      }}
                    >
                      <Sparkles style={{ width: 14, height: 14, color: 'var(--gold-dark)', flexShrink: 0, marginTop: 2 }} />
                      <span>{item.highlight}</span>
                    </div>
                  )}

                  <div className="card-footer" style={{ marginTop: 'auto' }}>
                    <motion.div
                      style={{ width: '100%' }}
                      whileHover={reducedMotion ? {} : { scale: 1.02 }}
                      whileTap={reducedMotion ? {} : { scale: 0.98 }}
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
        <FadeIn direction="up" delay={0.15}>
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <p style={{ fontSize: '0.94rem', color: 'var(--muted)', marginBottom: 18 }}>
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
