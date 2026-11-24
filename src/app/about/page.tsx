import React from 'react';
import { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { KEYWORD_MAP } from '@/data/seo/keywordMap';
import AboutPageContent from '@/components/AboutPageContent';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Aurum Luxury Collection | Srinagar Kashmir Story',
  description:
    'Discover the story behind Aurum Luxury Collection by Stay Pattern in Brein Hills, Astanpora, Srinagar. Handcrafted timber cottages, panoramic Dal Lake views, and authentic Kashmiri hospitality.',
  path: '/about',
  keywords: KEYWORD_MAP.about?.secondaryKeywords || [
    'About The Aurum Luxury Collection',
    'luxury boutique hotel Brein Hills',
    'Stay Pattern Kashmir hospitality',
    'hillside retreat Dal Lake',
  ],
  image: '/images/hero/aurum-luxury-estate-hero.jpg',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd type="Hotel" />
      <AboutPageContent />
    </>
  );
}
