'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { ROOMS } from '@/data/rooms';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="forest-pattern absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        <ScrollReveal className="cols" staggerChildren={0.1}>
          {/* Column 1: Brand Logo & Mission (Footer About Us) */}
          <ScrollRevealItem className="footer-about">
            <Link href="/" className="brand" style={{ marginBottom: 20 }}>
              <span className="brand-mark">A</span>
              <div className="brand-info">
                <span className="brand-title">THE AURUM</span>
                <span className="brand-sub">by Stay Pattern</span>
              </div>
            </Link>

            <p style={{ marginTop: 20, color: '#b9c2d3', fontSize: '0.94rem', lineHeight: 1.75, maxWidth: 360 }}>
              An ultra-luxury hillside retreat in Brein Hills, Astanpora, Srinagar, offering
              handcrafted wooden cottages, panoramic Dal View chalets, and authentic Kashmiri hospitality.
            </p>

            <div style={{ marginTop: 20 }}>
              <a
                href={HOTEL_INFO.urls.googleHotels}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'var(--gold)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                <span>Google Hotels Rating: {HOTEL_INFO.googleRating} ★ (32 reviews)</span>
                <ArrowUpRight style={{ width: 14, height: 14 }} />
              </a>
            </div>
          </ScrollRevealItem>

          {/* Column 2: Quick Links */}
          <ScrollRevealItem>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/rooms">Rooms & Suites</Link></li>
              <li><Link href="/facilities">Exceptional Comforts</Link></li>
              <li><Link href="/gallery">Capturing Memories</Link></li>
            </ul>
          </ScrollRevealItem>

          {/* Column 3: Discover & Experiences */}
          <ScrollRevealItem>
            <h4>Discover</h4>
            <ul>
              <li><Link href="/experiences">Srinagar Escapes</Link></li>
              <li><Link href="/#reviews">Guest Reviews</Link></li>
              <li><Link href="/#faq">Frequently Asked Questions</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/contact#booking">Direct Stay Enquiry</Link></li>
            </ul>
          </ScrollRevealItem>

          {/* Column 4: Elite Residences */}
          <ScrollRevealItem>
            <h4>Accommodations</h4>
            <ul>
              {ROOMS.map((room) => (
                <li key={room.id}>
                  <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
                </li>
              ))}
              <li><Link href="/rooms">All Chalets & Cottages</Link></li>
            </ul>
          </ScrollRevealItem>

          {/* Column 5: Coordinates & Reservation Desk */}
          <ScrollRevealItem>
            <h4>Coordinates</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: '0.92rem', color: '#b9c2d3' }}>
              <div style={{ display: 'flex', gap: 10 }}>
                <MapPin style={{ width: 18, height: 18, color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
                <span>{HOTEL_INFO.address.full}</span>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <FaPhoneAlt style={{ width: 16, height: 16, color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
                <a href={`tel:${HOTEL_INFO.contact.phone}`} style={{ color: '#fff', fontWeight: 600 }}>
                  {HOTEL_INFO.contact.phoneDisplay}
                </a>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <Mail style={{ width: 18, height: 18, color: 'var(--gold)', flexShrink: 0 }} />
                <span>{HOTEL_INFO.contact.email}</span>
              </div>
              <div style={{ marginTop: 8 }}>
                <a
                  href={HOTEL_INFO.urls.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--gold)', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.84rem', fontWeight: 600 }}
                >
                  <span>Directions on Google Maps</span>
                  <ArrowUpRight style={{ width: 13, height: 13 }} />
                </a>
              </div>
            </div>
          </ScrollRevealItem>
        </ScrollReveal>

        {/* Footer Bottom */}
        <FadeIn direction="up" delay={0.2}>
          <div className="footer-bottom">
            <div>
              <p style={{ margin: 0 }}>
                © {currentYear} {HOTEL_INFO.fullName}. Managed by Stay Pattern. All rights reserved.
              </p>
              <p style={{ margin: '6px 0 0', fontSize: '0.85rem', color: '#38bdf8' }}>
                Design And Developed By -{' '}
                <a
                  href="https://www.zoomdigital.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#38bdf8',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  Zoom Digital
                </a>
              </p>
            </div>
            <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/privacy-policy" style={{ color: '#8c97ab' }}>Privacy Policy</Link>
              <Link href="/terms-conditions" style={{ color: '#8c97ab' }}>Terms & Conditions</Link>
              <Link href="/sitemap.xml" style={{ color: '#8c97ab' }}>XML Sitemap</Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
