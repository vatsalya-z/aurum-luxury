import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedPages from '@/components/seo/RelatedPages';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { KEYWORD_MAP } from '@/data/seo/keywordMap';

export const metadata: Metadata = buildPageMetadata({
  title: 'Photo Gallery | The Aurum Luxury Collection Srinagar',
  description:
    'Browse verified property photographs of The Aurum Luxury Collection: handcrafted luxury cottages, panoramic Dal View chalets, dining hall, and Brein Hills views.',
  path: '/gallery',
  keywords: KEYWORD_MAP.gallery.secondaryKeywords,
  image: '/images/hero/aurum-estate-brein-hills.png',
});

export default function GalleryPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Photo Gallery', url: 'https://aurumhotelskashmir.com/gallery' },
  ];

  return (
    <>
      <section className="banner banner-full-height gallery-hero">
        <img
          src="/images/hero/aurum-estate-brein-hills.png"
          alt="The Aurum Luxury Collection Exterior Srinagar"
          className="banner-bg"
        />
        <div className="banner-overlay" />
        <div className="wrap">
          <Breadcrumbs items={breadcrumbs} />
          <h1>Photo Gallery</h1>
          <p>
            Experience The Aurum Luxury Collection through authentic property photography.
            Explore our handcrafted cottages, panoramic chalets, dining hall, and surrounding Himalayan vistas.
          </p>
          <div className="gallery-hero-scroll">
            <a href="#gallery" className="btn btn-outline-white btn-sm" aria-label="Explore Photographs">
              <span>Explore Collection</span>
              <span className="scroll-arrow-down" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <Gallery showHeading={false} showFilters={true} redirectToGallery={false} showAllInitial={true} />

      {/* Internal Linking Silo */}
      <RelatedPages
        currentPath="/gallery"
        title="Explore Rooms & Services"
        subtitle="Compare our accommodation layouts and discover our Kashmiri hospitality services."
      />

      <FAQSection
        page="gallery"
        title="Photography & Estate Aesthetics FAQ"
        subtitle="Frequently asked questions about our property photography, seasonal appearances, and views."
      />

      <CTASection variant="gallery" />
    </>
  );
}
