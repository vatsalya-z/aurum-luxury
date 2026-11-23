import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import FacilitiesSection from '@/components/FacilitiesSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Facilities & Verified Amenities | The Aurum Luxury Collection Srinagar',
  description:
    'Discover our verified hotel amenities in Brein Hills Srinagar: on-site restaurant, 24-hr room service, free high-speed Wi-Fi, private parking, climate control, and concierge.',
};

export default function FacilitiesPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Facilities', url: 'https://aurumhotelskashmir.com/facilities' },
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" data={breadcrumbs} />

      <section className="banner">
        <img
          src="/images/facilities/dining-hall-wazwan.png"
          alt="Dining Hall at The Aurum Srinagar"
          className="banner-bg"
        />
        <div className="banner-overlay" />
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Facilities</span>
          </nav>
          <h1>Hotel Facilities & Amenities</h1>
          <p>
            Thoughtfully curated hospitality services designed to provide effortless comfort,
            exquisite dining, and personalized care during your Kashmir holiday.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <FacilitiesSection darkVariant={false} showFilters={true} redirectToFacilities={false} />

      {/* Policy Transparency Notice */}
      <section className="section alt">
        <div className="wrap">
          <div
            style={{
              background: '#fff',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              padding: '36px 32px',
              boxShadow: 'var(--shadow)',
            }}
          >
            <span className="eyebrow">Verified Property Information</span>
            <h2 style={{ fontSize: '1.65rem', marginBottom: 16 }}>
              Hospitality Standards & Property Policies
            </h2>
            <div className="policy-grid">
              <div>
                <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: 6 }}>
                  Verified On-Site Services
                </strong>
                <p style={{ fontSize: '0.9rem' }}>
                  All published facilities—including our multi-cuisine restaurant, 24-hr reception, free Wi-Fi, secure parking, and concierge assistance—are operating and verified per official hotel documentation.
                </p>
              </div>
              <div>
                <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: 6 }}>
                  Facility Notes
                </strong>
                <p style={{ fontSize: '0.9rem' }}>
                  Please note that in keeping with our mountain sanctuary setting, swimming pools, full-service spas, and fitness gym centres are not featured on the property.
                </p>
              </div>
              <div>
                <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: 6 }}>
                  Airport & Valley Transfers
                </strong>
                <p style={{ fontSize: '0.9rem' }}>
                  Pickups and drops to Sheikh ul-Alam International Airport Srinagar (SXR) or private day excursions can be reserved in advance through our concierge desk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <CTASection variant="facilities" />
    </>
  );
}
