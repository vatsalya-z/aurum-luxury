import React from 'react';
import { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import RelatedPages from '@/components/seo/RelatedPages';
import JsonLd from '@/components/JsonLd';
import { GALLERY_ITEMS } from '@/data/gallery';
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
      <JsonLd type="Gallery" data={GALLERY_ITEMS} />
      <PageHero
        size="tall"
        image="/images/hero/aurum-estate-brein-hills.png"
        alt="The Aurum Luxury Collection Exterior Srinagar"
        breadcrumbs={breadcrumbs}
        eyebrow="CURATED PHOTOGRAPHY"
        title="Photo"
        titleHighlight="Gallery"
        subtitle="Experience The Aurum Luxury Collection through authentic property photography. Explore our handcrafted cottages, panoramic chalets, dining hall, and surrounding Himalayan vistas."
        ctaLabel="Explore Collection"
        ctaHref="#gallery"
        scrollHint={true}
        desktopPosition="center 45%"
        mobilePosition="center 35%"
      />

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
