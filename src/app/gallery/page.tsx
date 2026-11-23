import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Photo Gallery | The Aurum Luxury Collection Srinagar',
  description:
    'Browse verified property photographs of The Aurum Luxury Collection: luxury cottages, Dal View chalets, dining hall, and panoramic Brein Hills views.',
};

export default function GalleryPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Photo Gallery', url: 'https://aurumhotelskashmir.com/gallery' },
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" data={breadcrumbs} />

      <section className="banner">
        <img
          src="/images/hero/aurum-estate-brein-hills.png"
          alt="The Aurum Luxury Collection Exterior Srinagar"
          className="banner-bg"
        />
        <div className="banner-overlay" />
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Gallery</span>
          </nav>
          <h1>Photo Gallery</h1>
          <p>
            Experience The Aurum Luxury Collection through authentic property photography.
            Explore our handcrafted cottages, panoramic chalets, dining hall, and surrounding Himalayan vistas.
          </p>
        </div>
      </section>

      <Gallery showHeading={false} showFilters={true} redirectToGallery={false} showAllInitial={true} />

      <CTASection />
    </>
  );
}
