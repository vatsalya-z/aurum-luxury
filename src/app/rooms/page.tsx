import React from 'react';
import { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { KEYWORD_MAP } from '@/data/seo/keywordMap';
import RoomsPageContent from '@/components/RoomsPageContent';

export const metadata: Metadata = buildPageMetadata({
  title: 'Rooms & Luxury Chalets | The Aurum Luxury Collection Srinagar',
  description:
    'Explore handcrafted timber cottages and panoramic Dal View chalets in Brein Hills Srinagar with climate control, mountain balconies, and authentic Kashmiri hospitality.',
  path: '/rooms',
  keywords: KEYWORD_MAP.rooms.secondaryKeywords,
  image: '/images/rooms/elegant-chalet-dal-view.jpg',
});

export default function RoomsPage() {
  return <RoomsPageContent />;
}
