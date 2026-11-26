'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { INTERNAL_LINKS } from '@/data/seo/internalLinkMap';
import FadeIn from '../animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from '../animations/ScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RelatedPagesProps {
  currentPath: string;
  title?: string;
  subtitle?: string;
  limit?: number;
}

export default function RelatedPages({
  currentPath,
  title = 'Continue Exploring The Aurum',
  subtitle = 'Discover more about our luxury chalets, dining experiences, and Kashmir retreats.',
  limit = 4,
}: RelatedPagesProps) {
  const reducedMotion = useReducedMotion();
  const links = (INTERNAL_LINKS[currentPath] || INTERNAL_LINKS['/'] || []).slice(0, limit);

  if (!links.length) return null;

  return (
    <section className="section alt" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <FadeIn direction="up">
          <div className="head" style={{ marginBottom: 36 }}>
            <span className="eyebrow">
              <Compass style={{ width: 14, height: 14, display: 'inline', marginRight: 6 }} />
              Curated Discovery
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)' }}>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </FadeIn>

        <ScrollReveal className="related-pages-grid" staggerChildren={0.08}>
          {links.map((link) => (
            <ScrollRevealItem key={link.href} direction="up" distance={20} style={{ display: 'flex', flexDirection: 'column' }}>
              <motion.div
                whileHover={reducedMotion ? {} : { y: -5 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <Link
                  href={link.href}
                  className="related-page-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '24px 22px',
                    background: '#ffffff',
                    border: '1px solid rgba(198, 168, 105, 0.28)',
                    borderTop: '3px solid var(--gold)',
                    borderRadius: 16,
                    boxShadow: 'var(--shadow)',
                    textDecoration: 'none',
                    height: '100%',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                        fontWeight: 700,
                        color: 'var(--gold-dark)',
                        background: 'var(--beige)',
                        padding: '3px 10px',
                        borderRadius: 999,
                        marginBottom: 10,
                      }}
                    >
                      {link.category}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.18rem',
                        color: 'var(--navy)',
                        marginBottom: 8,
                        fontWeight: 600,
                      }}
                    >
                      {link.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--muted)',
                        lineHeight: 1.55,
                        marginBottom: 16,
                      }}
                    >
                      {link.description}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      color: 'var(--navy)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                    }}
                  >
                    <span>Discover</span>
                    <ArrowRight style={{ width: 15, height: 15, color: 'var(--gold-dark)' }} />
                  </div>
                </Link>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
