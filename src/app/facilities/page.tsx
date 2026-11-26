import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import FacilitiesSection from '@/components/FacilitiesSection';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
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
      <PageHero
        size="standard"
        image="/images/facilities/dining-hall-wazwan.png"
        alt="Dining Hall at The Aurum Luxury Collection Srinagar"
        breadcrumbs={breadcrumbs}
        eyebrow="VERIFIED AMENITIES"
        title="Hotel Facilities &"
        titleHighlight="Amenities"
        subtitle="Thoughtfully curated hospitality services designed to provide effortless comfort, exquisite dining, and personalized care during your Kashmir holiday."
        desktopPosition="center center"
        mobilePosition="center 35%"
      />

      {/* Facilities Grid */}
      <FacilitiesSection darkVariant={false} showFilters={true} redirectToFacilities={false} />

      {/* Policy Transparency Notice */}
      <section className="section alt">
        <FadeIn direction="up" className="wrap">
          <div
            style={{
              background: 'linear-gradient(145deg, #0e1e38 0%, #162b4d 100%)',
              border: '1px solid rgba(198, 168, 105, 0.35)',
              borderRadius: 18,
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: 'var(--shadow-lg)',
              color: '#fff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(198, 168, 105, 0.16)',
                  border: '1px solid rgba(198, 168, 105, 0.4)',
                  color: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck style={{ width: 22, height: 22 }} />
              </div>
              <div>
                <span className="eyebrow" style={{ marginBottom: 2, display: 'block', letterSpacing: '0.24em' }}>
                  Service Transparency
                </span>
                <h2 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', color: '#fff', margin: 0 }}>
                  Our Commitment to Verified Services
                </h2>
              </div>
            </div>
            <p style={{ color: '#cbd5e1', lineHeight: 1.72, marginBottom: 24, fontSize: '0.96rem' }}>
              At The Aurum Luxury Collection, every facility listed is fully operational and maintained to premier boutique standards.
              In maintaining an authentic, quiet mountain sanctuary in Brein Hills, we do not operate a commercial gym, swimming pool,
              or spa. Our dedicated team is committed to personal hospitality, exceptional regional dining, and peaceful scenic stays.
            </p>
            <div className="actions" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              <Link href="/rooms" className="btn btn-gold btn-sm">
                View Rooms & Suites
              </Link>
              <Link href="/contact" className="btn btn-outline-white btn-sm">
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
