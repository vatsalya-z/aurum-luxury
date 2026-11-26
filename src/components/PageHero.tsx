'use client';

import React from 'react';
import Image, { getImageProps } from 'next/image';
import { ArrowDown } from 'lucide-react';
import Breadcrumbs, { BreadcrumbItem } from '@/components/seo/Breadcrumbs';
import FadeIn from '@/components/animations/FadeIn';

export interface PageHeroProps {
  image: string;
  mobileImage?: string;
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
  mobileImage,
  alt,
  title,
  titleHighlight,
  subtitle,
  eyebrow,
  breadcrumbs,
  badge,
  size = 'standard',
  desktopPosition = 'center 22%',
  mobilePosition = 'center 20%',
  ctaLabel,
  ctaHref,
  scrollHint = false,
  children,
}: PageHeroProps) {
  const mediaStyle = {
    '--hero-pos-desktop': desktopPosition,
    '--hero-pos-mobile': mobilePosition,
  } as React.CSSProperties;

  let mediaNode: React.ReactNode;

  if (mobileImage) {
    const {
      props: { srcSet: desktopSrcSet },
    } = getImageProps({
      alt,
      width: 2560,
      height: 1200,
      sizes: '100vw',
      quality: 94,
      priority: true,
      src: image,
    });

    const {
      props: { srcSet: mobileSrcSet, ...imgRest },
    } = getImageProps({
      alt,
      width: 1200,
      height: 1500,
      sizes: '100vw',
      quality: 94,
      priority: true,
      src: mobileImage,
    });

    mediaNode = (
      <picture className="page-hero-picture">
        <source media="(min-width: 769px)" srcSet={desktopSrcSet} sizes="100vw" />
        <source media="(max-width: 768px)" srcSet={mobileSrcSet} sizes="100vw" />
        <img
          {...imgRest}
          alt={alt}
          className="page-hero-img page-hero-img--art"
          style={imgRest.style}
        />
      </picture>
    );
  } else {
    mediaNode = (
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        quality={92}
        className="page-hero-img"
      />
    );
  }

  return (
    <section className={`page-hero page-hero--${size}`}>
      <div className="page-hero-media" style={mediaStyle}>
        {mediaNode}
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
          <span className="eyebrow eyebrow-wide page-hero-eyebrow">
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
