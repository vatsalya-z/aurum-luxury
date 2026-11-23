'use client';

import React from 'react';
import { MapPin, Mail, Clock, ExternalLink } from 'lucide-react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { HOTEL_INFO } from '@/data/hotelInfo';
import BookingForm from './BookingForm';
import FadeIn from './animations/FadeIn';

export default function LocationSection() {
  return (
    <section id="contact" className="section-padding bg-pine-luxury relative overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      <div className="forest-pattern absolute inset-0 opacity-10 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Shawinn-style Contact & Enquiry Split */}
        <div className="contact-split-shawinn">
          {/* Left Column: Direct Coordinates & Contact Cards */}
          <FadeIn direction="right">
            <span className="eyebrow eyebrow-wide">
              Get in Touch
            </span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: 20 }}>
              Plan Your <span className="italic font-medium text-gold">Escape</span>
            </h2>
            <p style={{ color: '#c4cddc', fontSize: '1.1rem', marginBottom: 40, maxWidth: 520 }}>
              Our dedicated reservations team in Brein Hills is available around the clock to help tailor
              your stay, coordinate airport transfers, and verify seasonal availability.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Card 1: Call */}
              <div className="contact-card-box">
                <div className="icon-frame">
                  <FaPhoneAlt style={{ width: 18, height: 18 }} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: 4 }}>Call Reservations</h4>
                  <p style={{ color: 'var(--gold-soft)', fontSize: '0.94rem', margin: 0, fontWeight: 600 }}>
                    <a href={`tel:${HOTEL_INFO.contact.phone}`}>{HOTEL_INFO.contact.phoneDisplay}</a>
                  </p>
                  <span style={{ fontSize: '0.78rem', color: '#8c97ab' }}>Daily assistance 24/7</span>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="contact-card-box">
                <div className="icon-frame">
                  <Mail style={{ width: 22, height: 22 }} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: 4 }}>Email Us</h4>
                  <p style={{ color: 'var(--gold-soft)', fontSize: '0.94rem', margin: 0 }}>
                    <a href={`mailto:${HOTEL_INFO.contact.email}`}>{HOTEL_INFO.contact.email}</a>
                  </p>
                  <span style={{ fontSize: '0.78rem', color: '#8c97ab' }}>Responses within 2 hours</span>
                </div>
              </div>

              {/* Card 3: Physical Address */}
              <div className="contact-card-box">
                <div className="icon-frame">
                  <MapPin style={{ width: 22, height: 22 }} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: 4 }}>Visit Us</h4>
                  <p style={{ color: '#c4cddc', fontSize: '0.94rem', margin: 0, lineHeight: 1.5 }}>
                    {HOTEL_INFO.address.full}
                  </p>
                  <span style={{ fontSize: '0.78rem', color: 'var(--gold)' }}>Check-in: 2:00 PM · Check-out: 12:00 PM</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
              <a
                href={HOTEL_INFO.urls.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-sm"
              >
                <ExternalLink style={{ width: 14, height: 14 }} />
                <span>Get Directions</span>
              </a>

              <a
                href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello, I am enquiring about location and directions to The Aurum Luxury Collection in Brein Hills Srinagar.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa btn-sm"
              >
                <FaWhatsapp style={{ width: 16, height: 16 }} />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </FadeIn>

          {/* Right Column: Direct Reservation Inquiry Form */}
          <FadeIn
            direction="left"
            style={{
              background: '#fff',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden',
            }}
          >
            <div style={{ background: 'var(--navy-2)', color: '#fff', padding: '28px 32px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-soft)', fontWeight: 700 }}>
                Direct Reservation Desk
              </span>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: 4 }}>
                Reservation Inquiry
              </h3>
              <p style={{ color: '#c4cddc', fontSize: '0.88rem', margin: 0 }}>
                Direct rate quotes with complimentary itinerary assistance.
              </p>
            </div>

            <div style={{ padding: '32px' }}>
              <BookingForm isInline={true} />
            </div>
          </FadeIn>
        </div>

        {/* Embedded Map Block (Shawinn "Prime Location") */}
        <FadeIn direction="up" style={{ marginTop: 80 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20, flexWrap: 'wrap', gap: 14 }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--gold)' }}>Interactive Map</span>
              <h3 style={{ color: '#fff', fontSize: '1.6rem', margin: 0 }}>
                Prime Location in Brein Hills
              </h3>
            </div>
            <a
              href={HOTEL_INFO.urls.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-lg"
              style={{
                fontSize: '0.95rem',
                padding: '14px 28px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <span>Open in Google Maps</span>
              <ExternalLink style={{ width: 18, height: 18 }} />
            </a>
          </div>

          <div className="map-frame" style={{ minHeight: 560 }}>
            <iframe
              src={HOTEL_INFO.urls.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Aurum Luxury Collection Google Map Location"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
