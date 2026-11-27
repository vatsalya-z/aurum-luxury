import React from 'react';
import { Metadata } from 'next';
import GalleryPageContent from '@/components/GalleryPageContent';
import JsonLd from '@/components/JsonLd';
import { GALLERY_ITEMS } from '@/data/gallery';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { KEYWORD_MAP } from '@/data/seo/keywordMap';

export const metadata: Metadata = buildPageMetadata({
  title: 'Photo Gallery | The Aurum Luxury Collection Srinagar',
  description:
    'Browse verified property photographs of The Aurum Luxury Collection: glass-fronted A-frame chalets, handcrafted luxury cottages, Khatamband dining hall, and Dal Lake vistas.',
  path: '/gallery',
  keywords: KEYWORD_MAP.gallery.secondaryKeywords,
  image: '/images/hero/aurum-gallery-hero-desktop.jpg',
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd type="Gallery" data={GALLERY_ITEMS} />
      <GalleryPageContent />
    </>
  );
}
