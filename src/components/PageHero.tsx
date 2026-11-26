'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import Breadcrumbs, { BreadcrumbItem } from '@/components/seo/Breadcrumbs';
import FadeIn from '@/components/animations/FadeIn';

export interface PageHeroProps {
  image: string;
  alt: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: string;
  size?: 'tall' | 'standard' | 'compact';
  desktopPosition?: string;
  mobilePosition?: string;
  ctaLabel?: string;
  ctaHref?: string;
  scrollHint?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({
  image,
  alt,
  title,
  titleHighlight,
  subtitle,
  eyebrow,
  breadcrumbs,
  badge,
  size = 'standard',
  desktopPosition = 'center center',
  mobilePosition = 'center 35%',
  ctaLabel,
  ctaHref,
  scrollHint = false,
  children,
}: PageHeroProps) {
  const mediaStyle = {
    '--hero-pos-desktop': desktopPosition,
    '--hero-pos-mobile': mobilePosition,
  } as React.CSSProperties;

  return (
    <section className={`page-hero page-hero--${size}`}>
      <div className="page-hero-media" style={mediaStyle}>
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          quality={85}
          className="page-hero-img"
        />
      </div>

      <div className="page-hero-scrim" aria-hidden="true" />
      <div className="page-hero-gold-edge" aria-hidden="true" />

      <FadeIn direction="up" distance={20} className="wrap page-hero-content">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}

        {badge && (
          <div className="page-hero-badge">
            <span>{badge}</span>
          </div>
        )}

        {eyebrow && (
          <span
            className="eyebrow eyebrow-wide"
            style={{ marginBottom: 10, letterSpacing: '0.32em' }}
          >
            {eyebrow}
          </span>
        )}

        <h1>
          {title}
          {titleHighlight && (
            <>
              {' '}
              <span className="italic-serif" style={{ fontWeight: 500 }}>
                {titleHighlight}
              </span>
            </>
          )}
        </h1>

        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}

        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            className="btn btn-gold btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            <span>{ctaLabel}</span>
            {scrollHint && <ArrowDown style={{ width: 15, height: 15 }} />}
          </a>
        )}

        {children}
      </FadeIn>
    </section>
  );
}
