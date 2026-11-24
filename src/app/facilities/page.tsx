import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import FacilitiesSection from '@/components/FacilitiesSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedPages from '@/components/seo/RelatedPages';
import FadeIn from '@/components/animations/FadeIn';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { KEYWORD_MAP } from '@/data/seo/keywordMap';

export const metadata: Metadata = buildPageMetadata({
  title: 'Facilities & Verified Amenities | The Aurum Luxury Collection Srinagar',
  description:
    'Discover verified hotel amenities in Brein Hills Srinagar: on-site Kashmiri Wazwan restaurant, 24-hr room service, free high-speed Wi-Fi, private parking, and climate control.',
  path: '/facilities',
  keywords: KEYWORD_MAP.facilities.secondaryKeywords,
  image: '/images/facilities/dining-hall-wazwan.png',
});

export default function FacilitiesPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Facilities & Amenities', url: 'https://aurumhotelskashmir.com/facilities' },
  ];

  return (
    <>
      <section className="banner">
        <img
          src="/images/facilities/dining-hall-wazwan.png"
          alt="Dining Hall at The Aurum Luxury Collection Srinagar"
          className="banner-bg"
        />
        <FadeIn direction="up" className="wrap">
          <Breadcrumbs items={breadcrumbs} />
          <h1>Hotel Facilities & Amenities</h1>
          <p>
            Thoughtfully curated hospitality services designed to provide effortless comfort,
            exquisite dining, and personalized care during your Kashmir holiday.
          </p>
        </FadeIn>
      </section>

      {/* Facilities Grid */}
      <FacilitiesSection darkVariant={false} showFilters={true} redirectToFacilities={false} />

      {/* Policy Transparency Notice */}
      <section className="section alt">
        <FadeIn direction="up" className="wrap">
          <div
            style={{
              background: '#fff',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              padding: '36px 32px',
              boxShadow: 'var(--shadow)',
            }}
          >
            <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: 12 }}>
              Our Commitment to Verified Services
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>
              At The Aurum Luxury Collection, every facility listed is fully operational and maintained to premier boutique standards.
              In maintaining an authentic, quiet mountain sanctuary in Brein Hills, we do not operate a commercial gym, swimming pool,
              or spa. Our dedicated team is committed to personal hospitality, exceptional regional dining, and peaceful scenic stays.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/rooms" className="btn btn-gold btn-sm">
                View Rooms & Suites
              </Link>
              <Link href="/contact" className="btn btn-line btn-sm">
                Contact Concierge Desk
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Internal Linking Silo */}
      <RelatedPages
        currentPath="/facilities"
        title="Explore Experiences & Accommodations"
        subtitle="Discover nearby Srinagar attractions and explore our handcrafted cottages."
      />

      <FAQSection
        page="facilities"
        title="Hotel Facilities & Amenities FAQ"
        subtitle="Details about on-site dining, Wi-Fi, private parking, and concierge services."
      />

      <CTASection variant="facilities" />
    </>
  );
}
