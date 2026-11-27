import React from 'react';
import { Metadata } from 'next';
import FacilitiesPageContent from '@/components/FacilitiesPageContent';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { KEYWORD_MAP } from '@/data/seo/keywordMap';

export const metadata: Metadata = buildPageMetadata({
  title: 'Facilities, Dining & Verified Amenities | The Aurum Luxury Collection Srinagar',
  description:
    'Discover verified hotel amenities in Brein Hills Srinagar: authentic Kashmiri Wazwan restaurant, EP/CP/MAP meal plans, 24-hr room service, free Wi-Fi, gated parking, and climate control.',
  path: '/facilities',
  keywords: KEYWORD_MAP.facilities.secondaryKeywords,
  image: '/images/hero/aurum-facilities-hero-desktop.jpg',
});

export default function FacilitiesPage() {
  return <FacilitiesPageContent />;
}
