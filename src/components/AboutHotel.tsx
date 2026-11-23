'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelInfo';
import FadeIn from './animations/FadeIn';

export default function AboutHotel() {
  const pillars = [
    {
      num: '01',
      title: 'Prime Proximity',
      desc: 'Set in Brein Hills, Astanpora, just 10–15 minutes from Dal Lake, Nishat Bagh, and Indira Gandhi Tulip Garden, offering effortless access to Srinagar’s treasures.',
      icon: <Compass style={{ width: 20, height: 20, color: 'var(--gold)' }} />,
    },
    {
      num: '02',
      title: 'Hillside Sanctuary',
      desc: 'Handcrafted wooden cottages and private pine chalets framing sweeping panoramas of Dal Lake and the Zabarwan mountain ranges.',
      icon: <Sparkles style={{ width: 20, height: 20, color: 'var(--gold)' }} />,
    },
    {
      num: '03',
      title: 'Verified Excellence',
      desc: 'Recognized with a 4.8 / 5 rating across 32 Google reviews, featuring 24-hour concierge care, multi-cuisine dining, and authentic Kashmiri hospitality.',
      icon: <ShieldCheck style={{ width: 20, height: 20, color: 'var(--gold)' }} />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-ivory relative overflow-hidden" style={{ backgroundColor: 'var(--white)' }}>
      <div className="forest-pattern absolute bottom-0 left-0 w-full h-80 opacity-5 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Centered Emblem & Title (Shawinn Style) */}
        <FadeIn direction="up">
          <div className="head" style={{ maxWidth: 940, marginBottom: 'clamp(50px, 8vw, 90px)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
              <span
                className="brand-mark"
                style={{
                  width: 60,
                  height: 60,
                  fontSize: '2rem',
                  border: '1px solid var(--gold)',
                  background: 'var(--navy)',
                  color: 'var(--gold)',
                }}
              >
                A
              </span>
            </div>

            <span className="eyebrow eyebrow-wide">
              Himalayan Heritage · Brein Hills
            </span>

            <h2>
              Where Modern Luxury <br />
              Meets <span className="italic font-medium text-gold relative px-2">Ancient Pine & Dal Lake</span>
            </h2>

            <p style={{ marginTop: 24, fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'var(--char)', opacity: 0.85, fontWeight: 300 }}>
              Located in 23A Brein Hills, Astanpora, Srinagar, The Aurum Luxury Collection by Stay Pattern
              is an intimate mountain sanctuary that harmoniously balances authentic Kashmiri woodwork with refined, world-class comforts.
            </p>
          </div>
        </FadeIn>

        {/* 2-Column Split: Framed Image with Floating Card + 3 Pillars (Shawinn Style) */}
        <div className="about-split">
          {/* Left Column: Framed Property Photo with Floating Badge */}
          <FadeIn direction="right">
            <div className="about-img-frame">
              <div className="img-inner">
                <img
                  src="/images/hero/aurum-estate-brein-hills.png"
                  alt="The Aurum Luxury Collection property nestled in Brein Hills Srinagar"
                  loading="lazy"
                />
              </div>

              {/* Floating Luxury Highlight Card (Shawinn Signature) */}
              <div className="about-floating-card">
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: 6, fontWeight: 700 }}>
                  Scenic Sanctuary
                </span>
                <strong style={{ display: 'block', fontSize: '1.25rem', fontFamily: 'var(--serif)', color: '#fff', marginBottom: 6, lineHeight: 1.2 }}>
                  Dal View & Brein Hills
                </strong>
                <p style={{ fontSize: '0.82rem', color: '#c4cddc', margin: 0, lineHeight: 1.5 }}>
                  Boutique timber cottages overlooking the shimmering waters of Dal Lake.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Narrative & Three Numbered Pillars */}
          <FadeIn direction="left">
            <div>
              <span className="eyebrow">
                {HOTEL_INFO.taglines.aboutEyebrow}
              </span>
              <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: 20, color: 'var(--navy)' }}>
                {HOTEL_INFO.taglines.aboutHeading}
              </h3>
              <p style={{ marginBottom: 32 }}>
                Surrounded by pine-draped slopes above Srinagar valley, The Aurum provides a peaceful retreat
                for couples, families, and travelers seeking an authentic connection with Kashmir. From evening
                wazwan dining in our on-site restaurant to watching twilight fall over Dal Lake from your private
                chalet balcony, every moment is crafted with grace and warmth.
              </p>

              <div className="about-pillars">
                {pillars.map((pillar) => (
                  <div key={pillar.num} className="about-pillar-item">
                    <div className="pillar-num">{pillar.num}</div>
                    <div className="pillar-content">
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        {pillar.icon}
                        <h4>{pillar.title}</h4>
                      </div>
                      <p>{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about-actions" style={{ marginTop: 44, display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <Link href="/rooms" className="btn btn-navy">
                  <span>View Accommodations</span>
                  <ArrowRight style={{ width: 14, height: 14 }} />
                </Link>
                <Link href="/facilities" className="btn btn-line">
                  <span>Verified Facilities</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
