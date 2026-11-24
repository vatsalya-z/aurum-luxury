import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { HOTEL_INFO } from '@/data/hotelInfo';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import FadeIn from '@/components/animations/FadeIn';

import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedPages from '@/components/seo/RelatedPages';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { KEYWORD_MAP } from '@/data/seo/keywordMap';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Us & Location | The Aurum Luxury Collection Srinagar',
  description:
    'Contact The Aurum Luxury Collection in 23A Brein Hills, Astanpora, Srinagar. Find directions, phone numbers, WhatsApp desk, and send direct stay enquiries.',
  path: '/contact',
  keywords: KEYWORD_MAP.contact.secondaryKeywords,
  image: '/images/hero/aurum-estate-brein-hills.png',
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://aurumhotelskashmir.com' },
    { name: 'Contact Us', url: 'https://aurumhotelskashmir.com/contact' },
  ];

  return (
    <>
      <section className="banner">
        <img
          src="/images/hero/aurum-estate-brein-hills.png"
          alt="The Aurum Luxury Collection Srinagar"
          className="banner-bg"
        />
        <FadeIn direction="up" className="wrap">
          <Breadcrumbs items={breadcrumbs} />
          <h1>Contact & Location</h1>
          <p>
            We are here to assist with your room selections, travel arrangements,
            and any questions regarding your upcoming visit to Srinagar.
          </p>
        </FadeIn>
      </section>

      <section className="section" id="booking">
        <div className="wrap">
          <div className="contact-page-split">
            {/* Left Column: Direct Booking & Enquiry Form (Slide from Left) */}
            <FadeIn direction="right">
              <div
                style={{
                  background: '#fff',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow)',
                  padding: '36px 32px',
                }}
              >
                <span className="eyebrow">Direct Reservations</span>
                <h2 style={{ fontSize: '1.75rem', marginBottom: 10 }}>Send a Stay Enquiry</h2>
                <p style={{ marginBottom: 28 }}>
                  Fill in your preferred dates and requirements. Our reservations desk will reply promptly
                  with current rate options and room availability.
                </p>

                <BookingForm isInline={true} />
              </div>
            </FadeIn>

            {/* Right Column: Contact Details & Quick Links (Slide from Right) */}
            <FadeIn direction="left">
              <div>
                <div
                  style={{
                    background: 'var(--beige)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    padding: '32px 28px',
                    marginBottom: 28,
                  }}
                >
                  <span className="eyebrow">Hotel Coordinates</span>
                  <h3 style={{ marginBottom: 18, fontSize: '1.35rem' }}>{HOTEL_INFO.fullName}</h3>

                  <div className="contact-coords-grid">
                    <div style={{ display: 'flex', gap: 12 }}>
                      <MapPin style={{ width: 20, height: 20, color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--navy)' }}>
                          Physical Address
                        </strong>
                        <span style={{ fontSize: '0.94rem', color: 'var(--char)' }}>
                          {HOTEL_INFO.address.full}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 12 }}>
                      <Clock style={{ width: 20, height: 20, color: 'var(--gold)', flexShrink: 0 }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--navy)' }}>
                          Standard Hours
                        </strong>
                        <span style={{ fontSize: '0.94rem', color: 'var(--char)' }}>
                          Check-in: {HOTEL_INFO.checkIn} · Check-out: {HOTEL_INFO.checkOut}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 12 }}>
                      <Phone style={{ width: 20, height: 20, color: 'var(--gold)', flexShrink: 0 }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--navy)' }}>
                          Reservations Telephone
                        </strong>
                        <a href={`tel:${HOTEL_INFO.contact.phone}`} style={{ fontSize: '0.94rem', color: 'var(--navy)', fontWeight: 600 }}>
                          {HOTEL_INFO.contact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 12 }}>
                      <FaWhatsapp style={{ width: 20, height: 20, color: '#25D366', flexShrink: 0 }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--navy)' }}>
                          WhatsApp Desk
                        </strong>
                        <a
                          href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello, I would like to enquire about staying at The Aurum Luxury Collection Srinagar.')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: '0.94rem', color: 'var(--navy)', fontWeight: 600 }}
                        >
                          {HOTEL_INFO.contact.whatsappDisplay}
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 12 }}>
                      <Mail style={{ width: 20, height: 20, color: 'var(--gold)', flexShrink: 0 }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--navy)' }}>
                          Email Correspondence
                        </strong>
                        <span style={{ fontSize: '0.94rem', color: 'var(--char)' }}>
                          {HOTEL_INFO.contact.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                    <a
                      href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello, I would like to enquire about staying at The Aurum Luxury Collection Srinagar.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-wa btn-sm"
                    >
                      <FaWhatsapp style={{ width: 16, height: 16 }} />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href={HOTEL_INFO.urls.googleMapsDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-navy btn-sm"
                    >
                      <ExternalLink style={{ width: 14, height: 14 }} />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>

                {/* Google Hotels Reference */}
                <div
                  style={{
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    padding: '24px 28px',
                    boxShadow: 'var(--shadow)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <strong style={{ fontSize: '1rem', color: 'var(--navy)' }}>Google Hotels Listing</strong>
                    <span style={{ fontSize: '0.82rem', background: '#e8f0fe', color: '#1a73e8', padding: '3px 8px', borderRadius: 3, fontWeight: 600 }}>
                      4.8 ★ (32 reviews)
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: 16 }}>
                    View verified hotel profile, amenities, guest photos, and authentic reviews on Google Travel.
                  </p>
                  <a
                    href={HOTEL_INFO.urls.googleHotels}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-line btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>Open Google Listing</span>
                    <ExternalLink style={{ width: 12, height: 12 }} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Embedded Google Map */}
          <FadeIn direction="up">
            <div style={{ marginTop: 64 }}>
              <div className="head start" style={{ marginBottom: 24 }}>
                <span className="eyebrow">Interactive Map</span>
                <h2>Finding The Aurum in Srinagar</h2>
              </div>
              <div className="map-frame" style={{ minHeight: 460 }}>
                <iframe
                  src={HOTEL_INFO.urls.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Internal Linking Silo */}
      <RelatedPages
        currentPath="/contact"
        title="Explore The Aurum Retreat"
        subtitle="Discover our rooms, verified facilities, and curated Srinagar sightseeing spots."
      />

      <FAQSection
        page="contact"
        title="Location & Reservation Assistance FAQ"
        subtitle="Answers about reaching Brein Hills, Google Maps directions, and 24/7 concierge contact."
      />

      <CTASection variant="contact" />
    </>
  );
}
