'use client';

import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { REVIEWS_DATA } from '@/data/reviews';
import FadeIn from './animations/FadeIn';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-ivory relative overflow-hidden" style={{ backgroundColor: 'var(--white)' }}>
      <div className="forest-pattern absolute bottom-0 left-0 w-full h-80 opacity-5 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Shawinn-style Header */}
        <FadeIn direction="up">
          <div className="head">
            <span className="eyebrow eyebrow-wide">
              Guest Sentiment
            </span>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Trusted by <span className="italic font-medium text-gold">Discerning Guests</span>
            </h2>
            <p>
              We take pride in warm Kashmir hospitality and memorable stays. Read verified guest reviews
              directly on our official Google listing or share your feedback following your visit.
            </p>
          </div>
        </FadeIn>

        {/* If genuine reviews are present in data */}
        {REVIEWS_DATA.verifiedReviews.length > 0 && (
          <ScrollReveal className="grid g3" style={{ marginBottom: 40 }} staggerChildren={0.15}>
            {REVIEWS_DATA.verifiedReviews.map((rev) => (
              <ScrollRevealItem key={rev.id}>
                <blockquote
                  className="review-quote-card"
                  style={{
                    background: '#fff',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    padding: 28,
                    boxShadow: 'var(--shadow)',
                  }}
                >
                  <div style={{ color: '#fbbc04', display: 'flex', gap: 3, marginBottom: 12 }}>
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} style={{ width: 16, height: 16, fill: 'currentColor' }} />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.96rem', fontStyle: 'italic', marginBottom: 16 }}>
                    "{rev.text}"
                  </p>
                  <cite style={{ display: 'block', fontSize: '0.84rem', color: 'var(--navy)', fontStyle: 'normal', fontWeight: 600 }}>
                    {rev.author} <span style={{ color: 'var(--muted)', fontWeight: 400 }}>· {rev.date} · {rev.source}</span>
                  </cite>
                </blockquote>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        )}

        {/* Official Google Reviews Badge & Rating Box (Shawinn Style) */}
        <FadeIn direction="up">
          <div className="review-box">
          <div className="g-badge">
            <svg style={{ width: 34, height: 34 }} viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span style={{ fontSize: '1.35rem', fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--navy)' }}>
              Google Reviews
            </span>
          </div>

          <div className="g-score">{REVIEWS_DATA.rating}</div>
          <div className="stars">★★★★★</div>
          <div className="meta-count">
            Based on <strong>{REVIEWS_DATA.totalReviews} verified guest reviews</strong> on Google Hotels
          </div>

          <p>
            {REVIEWS_DATA.reviewSnippet} We invite you to explore every authentic review on our official Google profile,
            or share your feedback following your stay in Brein Hills.
          </p>

          <div className="actions">
            <a
              href={REVIEWS_DATA.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-navy"
            >
              <span>Read Google Reviews</span>
              <ExternalLink style={{ width: 14, height: 14 }} />
            </a>
            <a
              href={REVIEWS_DATA.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line"
            >
              <span>Write a Review</span>
            </a>
          </div>
        </div>
      </FadeIn>
      </div>
    </section>
  );
}
