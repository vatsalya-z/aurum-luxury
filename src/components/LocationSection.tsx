'use client';

import React from 'react';
import { MapPin, Mail, ExternalLink } from 'lucide-react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HOTEL_INFO } from '@/data/hotelInfo';
import BookingForm from './BookingForm';
import FadeIn from './animations/FadeIn';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function LocationSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="section-padding bg-pine-luxury relative overflow-hidden" style={{ backgroundColor: 'var(--navy)', paddingTop: 'clamp(48px, 7vw, 76px)', paddingBottom: 'clamp(48px, 7vw, 76px)' }}>
      <div className="forest-pattern absolute inset-0 opacity-10 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Centered Section Header: Bottom-to-Top Reveal */}
        <FadeIn direction="up">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 36px' }}>
            <span className="eyebrow eyebrow-wide">
              Get in Touch
            </span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: 12 }}>
              Plan Your <span className="italic font-medium text-gold">Escape</span>
            </h2>
            <p style={{ color: '#c4cddc', fontSize: '1rem', margin: '0 auto', maxWidth: 580, lineHeight: 1.6 }}>
              Our dedicated reservations team in Brein Hills is available around the clock to help tailor
              your stay, coordinate airport transfers, and verify seasonal availability.
            </p>
          </div>
        </FadeIn>

        {/* Shawinn-style Contact & Enquiry Split Grid */}
        <div className="contact-split-shawinn" style={{ alignItems: 'stretch', gap: 24 }}>
          {/* Left Column: Direct Coordinates & Contact Cards (Slide from Left) */}
          <FadeIn
            direction="right"
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              margin: 0,
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow-lg)',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  background: 'var(--navy-2)',
                  color: '#fff',
                  padding: '16px 24px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-soft)',
                    fontWeight: 700,
                  }}
                >
                  Direct Coordinates
                </span>
                <h3 style={{ color: '#fff', fontSize: '1.35rem', marginTop: 2, marginBottom: 2 }}>
                  Contact Information
                </h3>
                <p style={{ color: '#c4cddc', fontSize: '0.84rem', margin: 0 }}>
                  Direct assistance for room availability, airport pickups & itineraries.
                </p>
              </div>

              <div
                style={{
                  padding: '20px 24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {/* Card 1: Call */}
                  <motion.div
                    className="contact-card-box"
                    style={{ padding: '12px 16px', gap: 14 }}
                    whileHover={reducedMotion ? {} : { x: 4, background: 'rgba(255, 255, 255, 0.06)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="icon-frame" style={{ width: 42, height: 42 }}>
                      <FaPhoneAlt style={{ width: 16, height: 16 }} />
                    </div>
                    <div>
                      <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: 2 }}>Call Reservations</h4>
                      <p style={{ color: 'var(--gold-soft)', fontSize: '0.9rem', margin: 0, fontWeight: 600 }}>
                        <a href={`tel:${HOTEL_INFO.contact.phone}`}>{HOTEL_INFO.contact.phoneDisplay}</a>
                      </p>
                      <span style={{ fontSize: '0.75rem', color: '#8c97ab' }}>Daily assistance 24/7</span>
                    </div>
                  </motion.div>

                  {/* Card 2: Email */}
                  <motion.div
                    className="contact-card-box"
                    style={{ padding: '12px 16px', gap: 14 }}
                    whileHover={reducedMotion ? {} : { x: 4, background: 'rgba(255, 255, 255, 0.06)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="icon-frame" style={{ width: 42, height: 42 }}>
                      <Mail style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: 2 }}>Email Us</h4>
                      <p style={{ color: 'var(--gold-soft)', fontSize: '0.9rem', margin: 0 }}>
                        <a href={`mailto:${HOTEL_INFO.contact.email}`}>{HOTEL_INFO.contact.email}</a>
                      </p>
                      <span style={{ fontSize: '0.75rem', color: '#8c97ab' }}>Responses within 2 hours</span>
                    </div>
                  </motion.div>

                  {/* Card 3: Physical Address */}
                  <motion.div
                    className="contact-card-box"
                    style={{ padding: '12px 16px', gap: 14 }}
                    whileHover={reducedMotion ? {} : { x: 4, background: 'rgba(255, 255, 255, 0.06)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="icon-frame" style={{ width: 42, height: 42 }}>
                      <MapPin style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: 2 }}>Visit Us</h4>
                      <p style={{ color: '#c4cddc', fontSize: '0.88rem', margin: 0, lineHeight: 1.4 }}>
                        {HOTEL_INFO.address.full}
                      </p>
                      <span style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>Check-in: 2:00 PM · Check-out: 12:00 PM</span>
                    </div>
                  </motion.div>
                </div>

                <div className="location-cta-buttons" style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                  <motion.a
                    href={HOTEL_INFO.urls.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm"
                    style={{ flex: 1, minWidth: 140, justifyContent: 'center', height: 40, minHeight: 40 }}
                    whileHover={reducedMotion ? {} : { scale: 1.03 }}
                    whileTap={reducedMotion ? {} : { scale: 0.97 }}
                  >
                    <ExternalLink style={{ width: 13, height: 13 }} />
                    <span>Directions</span>
                  </motion.a>

                  <motion.a
                    href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello, I am enquiring about location and directions to The Aurum Luxury Collection in Brein Hills Srinagar.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-wa btn-sm"
                    style={{ flex: 1, minWidth: 140, justifyContent: 'center', height: 40, minHeight: 40 }}
                    whileHover={reducedMotion ? {} : { scale: 1.03 }}
                    whileTap={reducedMotion ? {} : { scale: 0.97 }}
                  >
                    <FaWhatsapp style={{ width: 15, height: 15 }} />
                    <span>WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Direct Reservation Inquiry Form (Slide from Right) */}
          <FadeIn
            direction="left"
            className="rd-card"
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              margin: 0,
            }}
          >
            <div className="rd-gold-bar" aria-hidden="true" />
            <div className="rd-header">
              <div>
                <span className="rd-eyebrow">
                  ✦ Direct Reservation Desk
                </span>
                <h3>Reservation Inquiry</h3>
                <p>Direct rate quotes with complimentary itinerary assistance.</p>
              </div>
              <span className="rd-badge">Best Rate</span>
            </div>

            <div className="rd-body">
              <BookingForm isInline={true} />
            </div>
          </FadeIn>
        </div>

        {/* Embedded Map Block with Bottom-to-Top Reveal */}
        <FadeIn direction="up" style={{ marginTop: 44 }}>
          <div className="location-map-header" style={{ textAlign: 'center', marginBottom: 16 }}>
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>Interactive Map</span>
            <h3 style={{ color: '#fff', fontSize: '1.45rem', margin: '4px 0 0' }}>
              Prime Location in Brein Hills
            </h3>
          </div>

          <div className="map-frame" style={{ minHeight: 380, height: 380, overflow: 'hidden' }}>
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

          {/* Action Button Placed Below the Map */}
          <div style={{ textAlign: 'center', marginTop: 18 }}>
            <motion.a
              href={HOTEL_INFO.urls.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-sm"
              whileHover={reducedMotion ? {} : { scale: 1.04 }}
              whileTap={reducedMotion ? {} : { scale: 0.96 }}
              style={{
                fontSize: '0.88rem',
                padding: '10px 22px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <span>Open in Google Maps</span>
              <ExternalLink style={{ width: 15, height: 15 }} />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
