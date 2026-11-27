import React from 'react';
import { Metadata } from 'next';
import ExperiencesPageContent from '@/components/ExperiencesPageContent';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { KEYWORD_MAP } from '@/data/seo/keywordMap';

export const metadata: Metadata = buildPageMetadata({
  title: 'Srinagar Experiences & Sights | The Aurum Luxury Collection',
  description:
    'Discover celebrated attractions near The Aurum in Brein Hills Srinagar: Dal Lake, Tulip Garden, Pari Mahal, Nishat Bagh, Shalimar Bagh, and Kashmir valley excursions.',
  path: '/experiences',
  keywords: KEYWORD_MAP.experiences.secondaryKeywords,
  image: '/images/hero/aurum-experiences-hero-desktop.jpg',
});

export default function ExperiencesPage() {
  return <ExperiencesPageContent />;
}
