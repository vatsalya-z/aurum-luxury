import React from 'react';
import { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { KEYWORD_MAP } from '@/data/seo/keywordMap';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = buildPageMetadata({
  title: 'The Aurum Luxury Collection | Luxury Boutique Hotel in Srinagar',
  description:
    'Experience refined luxury in Brein Hills, Astanpora, Srinagar. Handcrafted timber cottages, panoramic Dal View chalets, dining, and warm Kashmir hospitality.',
  path: '/',
  keywords: KEYWORD_MAP.home.secondaryKeywords,
  image: '/images/hero/aurum-estate-brein-hills.png',
});

export default function HomePage() {
  return <HomePageClient />;
}
