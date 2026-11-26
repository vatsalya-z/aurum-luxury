import React from 'react';
import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { HOTEL_INFO } from '@/data/hotelInfo';
import BookingForm from '@/components/BookingForm';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/animations/FadeIn';
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
      <PageHero
        size="standard"
        image="/images/hero/aurum-estate-brein-hills.png"
        alt="The Aurum Luxury Collection Srinagar"
        breadcrumbs={breadcrumbs}
        eyebrow="DIRECT CONCIERGE"
        title="Contact &"
        titleHighlight="Location"
        subtitle="We are here to assist with your room selections, travel arrangements, and any questions regarding your upcoming visit to Srinagar."
        desktopPosition="center 45%"
        mobilePosition="center 35%"
      />

      <section className="section" id="booking">
        <div className="wrap">
          <div className="contact-page-split">
            {/* Left Column: Direct Booking & Enquiry Form */}
            <FadeIn direction="right">
              <div
                style={{
                  background: '#fff',
                  border: '1px solid rgba(198, 168, 105, 0.35)',
                  borderRadius: 18,
                  boxShadow: 'var(--shadow-lg)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    background: 'linear-gradient(135deg, #0a1628 0%, #162b4d 100%)',
                    padding: '22px 26px',
                    borderBottom: '1px solid rgba(198, 168, 105, 0.28)',
                    color: '#fff',
                  }}
                >
                  <span className="eyebrow" style={{ marginBottom: 6, display: 'block', letterSpacing: '0.26em' }}>
                    Direct Reservations
                  </span>
                  <h2 style={{ fontSize: 'clamp(1.45rem, 2.8vw, 1.85rem)', color: '#fff', marginBottom: 6 }}>
                    Send a Stay Enquiry
                  </h2>
                  <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.55 }}>
                    Fill in your preferred dates and requirements. Our reservations desk replies promptly with current rates and availability.
                  </p>
                </div>

                <div style={{ padding: 'clamp(20px, 3vw, 28px)' }}>
                  <BookingForm isInline={true} />
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Contact Details & Google Hotels Card */}
            <FadeIn direction="left">
              <div>
                <div
                  style={{
                    background: 'linear-gradient(145deg, #0e1e38 0%, #162b4d 100%)',
                    border: '1px solid rgba(198, 168, 105, 0.35)',
                    borderRadius: 18,
                    padding: 'clamp(22px, 3.5vw, 32px)',
                    marginBottom: 24,
                    color: '#fff',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  <span className="eyebrow" style={{ marginBottom: 6, display: 'block', letterSpacing: '0.26em' }}>
                    Hotel Coordinates
                  </span>
                  <h3 style={{ marginBottom: 20, fontSize: '1.35rem', color: '#fff' }}>{HOTEL_INFO.fullName}</h3>

                  <div className="contact-coords-grid">
                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          background: 'rgba(198, 168, 105, 0.16)',
                          border: '1px solid rgba(198, 168, 105, 0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: 'var(--gold)',
                        }}
                      >
                        <MapPin style={{ width: 18, height: 18 }} />
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-soft)' }}>
                          Physical Address
                        </strong>
                        <span style={{ fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                          {HOTEL_INFO.address.full}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          background: 'rgba(198, 168, 105, 0.16)',
                          border: '1px solid rgba(198, 168, 105, 0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: 'var(--gold)',
                        }}
                      >
                        <Clock style={{ width: 18, height: 18 }} />
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-soft)' }}>
                          Standard Hours
                        </strong>
                        <span style={{ fontSize: '0.92rem', color: '#e2e8f0' }}>
                          Check-in: {HOTEL_INFO.checkIn} · Check-out: {HOTEL_INFO.checkOut}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          background: 'rgba(198, 168, 105, 0.16)',
                          border: '1px solid rgba(198, 168, 105, 0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: 'var(--gold)',
                        }}
                      >
                        <Phone style={{ width: 18, height: 18 }} />
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-soft)' }}>
                          Reservations Telephone
                        </strong>
                        <a href={`tel:${HOTEL_INFO.contact.phone}`} style={{ fontSize: '0.96rem', color: '#fff', fontWeight: 600 }}>
                          {HOTEL_INFO.contact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          background: 'rgba(37, 211, 102, 0.16)',
                          border: '1px solid rgba(37, 211, 102, 0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#25D366',
                        }}
                      >
                        <FaWhatsapp style={{ width: 19, height: 19 }} />
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-soft)' }}>
                          WhatsApp Desk
                        </strong>
                        <a
                          href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello, I would like to enquire about staying at The Aurum Luxury Collection Srinagar.')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: '0.96rem', color: '#fff', fontWeight: 600 }}
                        >
                          {HOTEL_INFO.contact.whatsappDisplay}
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          background: 'rgba(198, 168, 105, 0.16)',
                          border: '1px solid rgba(198, 168, 105, 0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: 'var(--gold)',
                        }}
                      >
                        <Mail style={{ width: 18, height: 18 }} />
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-soft)' }}>
                          Email Correspondence
                        </strong>
                        <a href={`mailto:${HOTEL_INFO.contact.email}`} style={{ fontSize: '0.92rem', color: '#e2e8f0' }}>
                          {HOTEL_INFO.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="location-cta-buttons" style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
                    <a
                      href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello, I would like to enquire about staying at The Aurum Luxury Collection Srinagar.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-wa btn-sm"
                      style={{ flex: 1 }}
                    >
                      <FaWhatsapp style={{ width: 16, height: 16 }} />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href={HOTEL_INFO.urls.googleMapsDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold btn-sm"
                      style={{ flex: 1 }}
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
                    border: '1px solid rgba(198, 168, 105, 0.35)',
                    borderRadius: 18,
                    padding: '24px 26px',
                    boxShadow: 'var(--shadow)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, gap: 10, flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--navy)', fontFamily: 'var(--serif)' }}>
                      Google Hotels Listing
                    </strong>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        background: 'rgba(198, 168, 105, 0.16)',
                        color: 'var(--navy)',
                        border: '1px solid rgba(198, 168, 105, 0.4)',
                        padding: '4px 10px',
                        borderRadius: 999,
                        fontWeight: 700,
                      }}
                    >
                      4.8 ★ (32 reviews)
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: 16, lineHeight: 1.55 }}>
                    View verified hotel profile, amenities, guest photos, and authentic reviews on Google Travel.
                  </p>
                  <a
                    href={HOTEL_INFO.urls.googleHotels}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-navy btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>Open Google Listing</span>
                    <ExternalLink style={{ width: 13, height: 13 }} />
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
