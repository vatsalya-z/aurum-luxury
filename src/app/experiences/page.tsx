import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Experiences from '@/components/Experiences';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedPages from '@/components/seo/RelatedPages';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { KEYWORD_MAP } from '@/data/seo/keywordMap';

export const metadata: Metadata = buildPageMetadata({
  title: 'Srinagar Experiences & Sights | The Aurum Luxury Collection',
  description:
    'Discover celebrated attractions near The Aurum in Brein Hills Srinagar: Dal Lake, Tulip Garden, Pari Mahal, Nishat Bagh, Shalimar Bagh, and Hari Parbat Fort.',
  path: '/experiences',
  keywords: KEYWORD_MAP.experiences.secondaryKeywords,
  image: '/images/destinations/dal-lake-srinagar.jpg',
});

export default function ExperiencesPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Experiences & Sights', url: 'https://aurumhotelskashmir.com/experiences' },
  ];

  return (
    <>
      <section className="banner">
        <img
          src="/images/gallery/aurum-luxury-cottage-exterior.jpg"
          alt="Dal Lake Srinagar Shikara Boats"
          className="banner-bg"
        />
        <div className="wrap">
          <Breadcrumbs items={breadcrumbs} />
          <h1>Discover the Beauty of Srinagar</h1>
          <p>
            Situated on the slopes of Brein Hills, Astanpora, The Aurum provides a peaceful mountain retreat
            while placing you minutes from Kashmir’s most enchanting historical and natural destinations.
          </p>
        </div>
      </section>

      <Experiences />

      {/* Internal Linking Silo */}
      <RelatedPages
        currentPath="/experiences"
        title="Continue Planning Your Srinagar Journey"
        subtitle="Explore our handcrafted residences, property amenities, and direct location details."
      />

      <FAQSection
        page="experiences"
        title="Srinagar Sightseeing & Excursions FAQ"
        subtitle="Helpful answers about visiting Dal Lake, Mughal Gardens, and Kashmir day trips."
      />

      <CTASection variant="experiences" />
    </>
  );
}
