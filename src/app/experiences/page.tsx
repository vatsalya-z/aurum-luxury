import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Experiences from '@/components/Experiences';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Srinagar Experiences & Sights | The Aurum Luxury Collection',
  description:
    'Discover celebrated attractions near The Aurum in Brein Hills Srinagar: Dal Lake, Tulip Garden, Pari Mahal, Nishat Bagh, Shalimar Bagh, and Hari Parbat Fort.',
};

export default function ExperiencesPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Experiences & Sights', url: 'https://aurumhotelskashmir.com/experiences' },
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" data={breadcrumbs} />

      <section className="banner">
        <img
          src="/images/gallery/dal-lake-sunset-view.webp"
          alt="Dal Lake Srinagar Shikara Boats"
          className="banner-bg"
        />
        <div className="banner-overlay" />
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Experiences</span>
          </nav>
          <h1>Discover the Beauty of Srinagar</h1>
          <p>
            Situated on the slopes of Brein Hills, Astanpora, The Aurum provides a peaceful mountain retreat
            while placing you minutes from Kashmir’s most enchanting historical and natural destinations.
          </p>
        </div>
      </section>

      <Experiences />

      <FAQSection />

      <CTASection variant="experiences" />
    </>
  );
}
