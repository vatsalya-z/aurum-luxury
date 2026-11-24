'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SiTripadvisor } from 'react-icons/si';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { TRIPADVISOR_REVIEWS, TRIPADVISOR_SUMMARY, Review } from '@/data/reviews';
import FadeIn from './animations/FadeIn';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Reviews() {
  const reviews: Review[] = TRIPADVISOR_REVIEWS;
  const summary = TRIPADVISOR_SUMMARY;
  const reducedMotion = useReducedMotion();

  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  // Mouse drag-to-scroll state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  // Toggle card text expansion
  const toggleExpand = (idx: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  // Scroll by card offset
  const scrollByCard = useCallback((direction: -1 | 1) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card = container.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    container.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth',
    });
  }, []);

  // Scroll directly to a specific card index
  const scrollToIndex = useCallback((index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card = container.children[index] as HTMLElement | null;
    if (card) {
      const targetLeft = card.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      });
    }
  }, []);

  // Update active dot and start/end boundaries on scroll
  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    const card = container.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    const newActiveIndex = Math.min(
      reviews.length - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setActiveIndex(newActiveIndex);

    setIsAtStart(scrollLeft <= 10);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 15);
  }, [reviews.length]);

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      container.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);

  // Gentle Autoplay (every 5.5s, pauses on hover, focus, touch, or reduced motion)
  useEffect(() => {
    if (reducedMotion || isPaused) return;

    const timer = setInterval(() => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollByCard(1);
      }
    }, 5500);

    return () => clearInterval(timer);
  }, [reducedMotion, isPaused, scrollByCard]);

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - sliderRef.current.offsetLeft;
    startScrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.2;
    sliderRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByCard(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByCard(1);
    }
  };

  return (
    <section
      id="reviews"
      className="section-padding bg-ivory relative overflow-hidden guest-sentiment-section"
      style={{ backgroundColor: 'var(--white)' }}
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStartCapture={() => setIsPaused(true)}
      onTouchEndCapture={() => setIsPaused(false)}
    >
      <div className="forest-pattern absolute bottom-0 left-0 w-full h-80 opacity-5 pointer-events-none" />

      <div className="container relative" style={{ zIndex: 10 }}>
        {/* Section Header (Centered) */}
        <FadeIn direction="up">
          <div className="head" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 36px' }}>
            <span className="eyebrow eyebrow-wide">
              Guest Sentiment
            </span>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', margin: '8px 0 14px', textAlign: 'center' }}>
              Trusted by <span className="italic font-medium text-gold">Discerning Guests</span>
            </h2>
            <p style={{ margin: '0 auto', textAlign: 'center', maxWidth: 640 }}>
              We take pride in warm Kashmir hospitality and memorable stays. Read verified guest reviews
              from Tripadvisor and Google, or share your feedback following your visit to Brein Hills.
            </p>
          </div>
        </FadeIn>


        {/* 4. Review Cards Horizontal Slider */}
        <div className="guest-sentiment-slider-wrap" style={{ marginTop: 36, marginBottom: 28 }}>
          <div
            ref={sliderRef}
            className="guest-sentiment-slider"
            role="region"
            aria-roledescription="carousel"
            aria-label="Guest Reviews Carousel"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            {reviews.map((rev, index) => {
              const isFirst = index === 0;
              const isExpanded = expandedCards[index] || false;
              const initialLetter = rev.name.charAt(0).toUpperCase();
              const isLongText = rev.text.length > 175;

              return (
                <article
                  key={index}
                  className={`guest-sentiment-card ${isFirst ? 'featured-review' : ''}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Review ${index + 1} of ${reviews.length}`}
                >
                  <div className="card-inner-top">
                    {/* Header: Avatar, Name & Date */}
                    <div className="card-guest-header">
                      <div className="guest-avatar-bubble" aria-hidden="true">
                        {initialLetter}
                      </div>
                      <div className="guest-info-meta">
                        <strong className="guest-name">{rev.name}</strong>
                        <span className="guest-stay-meta">
                          Stay: {rev.date} · {rev.tripType}
                        </span>
                      </div>
                      <div className="quote-mark-badge" aria-hidden="true">
                        <FaQuoteLeft style={{ width: 14, height: 14, color: 'var(--gold)', opacity: 0.8 }} />
                      </div>
                    </div>

                    {/* Tripadvisor Bubbles Rating */}
                    <div
                      className="card-rating-row"
                      aria-label="Rated 5 out of 5 on Tripadvisor"
                    >
                      <div className="ta-bubbles-row">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="ta-bubble filled" />
                        ))}
                      </div>
                      <span className="card-rating-text">5.0 / 5</span>
                      {isFirst && (
                        <span className="featured-pill-tag">Featured Story</span>
                      )}
                    </div>

                    {/* Review Title */}
                    <h3 className="card-review-title">
                      {rev.title}
                    </h3>

                    {/* Review Body (Clamped with Toggle) */}
                    <p className={`card-review-body ${isExpanded ? 'expanded' : 'clamped'}`}>
                      "{rev.text}"
                    </p>

                    {isLongText && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(index);
                        }}
                        className="toggle-expand-btn"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? 'Show Less' : 'Read Full Review'}
                      </button>
                    )}
                  </div>

                  {/* Card Footer: Verified Tripadvisor Badge */}
                  <div className="card-inner-footer">
                    <div className="ta-attribution-badge">
                      <SiTripadvisor style={{ color: '#00AA6C', width: 17, height: 17 }} />
                      <span>Tripadvisor</span>
                    </div>
                    <span className="verified-stay-pill">Verified Stay</span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Centered Controls: Prev Arrow, Pagination Dots, Next Arrow */}
          <div className="slider-controls-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 24 }}>
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={isAtStart}
              className="slider-arrow-btn"
              aria-label="Previous review"
            >
              <FaChevronLeft style={{ width: 14, height: 14 }} />
            </button>

            {/* Pagination Dots */}
            <div
              className="slider-pagination-dots"
              role="tablist"
              aria-label="Review pagination"
              style={{ margin: 0 }}
            >
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Scroll to review ${i + 1}`}
                  aria-selected={i === activeIndex}
                  role="tab"
                  className={`pagination-dot ${i === activeIndex ? 'active' : ''}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={isAtEnd}
              className="slider-arrow-btn"
              aria-label="Next review"
            >
              <FaChevronRight style={{ width: 14, height: 14 }} />
            </button>
          </div>
        </div>

        {/* 5. Footer Link Button (Tripadvisor Source Portal) */}
       
      </div>

      {/* Scoped CSS strictly scoped to .guest-sentiment-section */}
      <style jsx>{`
        .guest-sentiment-section {
          background-color: var(--white);
        }

        .tripadvisor-summary-card {
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          box-shadow: 0 4px 24px rgba(10, 22, 40, 0.05);
          padding: 32px 32px;
          margin-bottom: 24px;
        }

        .summary-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--line);
        }

        .rating-brand-lockup {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .ta-icon-bubble {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(0, 170, 108, 0.08);
          border: 1px solid rgba(0, 170, 108, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .overall-score-big {
          font-family: var(--font-cormorant), 'Playfair Display', Georgia, serif;
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          font-weight: 700;
          color: var(--navy);
          line-height: 1;
        }

        .ta-bubbles-row {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .ta-bubble {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: inline-block;
          background: #e2e6e9;
        }

        .ta-bubble.filled {
          background: #00AA6C;
          border: 1px solid #00935d;
        }

        .verified-reviews-caption {
          font-size: 0.86rem;
          color: var(--muted);
          display: block;
          margin-top: 4px;
        }

        .rank-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          background: rgba(198, 168, 105, 0.1);
          border: 1px solid rgba(198, 168, 105, 0.4);
          color: var(--navy);
          font-size: 0.84rem;
          font-weight: 600;
        }

        .category-scores-section {
          padding: 24px 0 20px;
          border-bottom: 1px solid var(--line);
        }

        .category-scores-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px 36px;
        }

        @media (max-width: 768px) {
          .category-scores-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px 20px;
          }
        }

        .category-score-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .category-score-labels {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }

        .cat-name {
          color: var(--navy);
          font-weight: 600;
        }

        .cat-score {
          color: #00AA6C;
          font-weight: 700;
          font-size: 0.88rem;
        }

        .progress-bar-track {
          width: 100%;
          height: 5px;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #00AA6C, #008f5a);
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }

        .highlight-chips-container {
          padding-top: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .highlight-chips-title {
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--muted);
          font-weight: 600;
        }

        .highlight-chips-list {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .highlight-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 9999px;
          background: var(--beige);
          border: 1px solid var(--line);
          font-size: 0.8rem;
          color: var(--navy);
          font-weight: 500;
        }

        /* Slider Styles */
        .guest-sentiment-slider-wrap {
          position: relative;
          width: 100%;
        }

        .guest-sentiment-slider {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 16px 8px 32px 8px;
          cursor: grab;
          align-items: stretch;
        }

        .guest-sentiment-slider:active {
          cursor: grabbing;
        }

        .guest-sentiment-slider::-webkit-scrollbar {
          display: none;
        }

        .guest-sentiment-card {
          scroll-snap-align: start;
          flex-shrink: 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
          border: 1px solid rgba(198, 168, 105, 0.28);
          border-radius: 16px;
          padding: 28px 24px 22px;
          box-shadow: 0 6px 24px rgba(10, 22, 40, 0.06);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.35s ease;
          position: relative;
          cursor: pointer;
        }

        .guest-sentiment-card:hover {
          transform: translateY(-8px);
          border-color: rgba(198, 168, 105, 0.7);
          box-shadow: 0 22px 48px rgba(10, 22, 40, 0.14), 0 8px 24px rgba(198, 168, 105, 0.22);
        }

        @media (min-width: 1024px) {
          .guest-sentiment-card {
            flex: 0 0 calc((100% - 48px) / 3);
            width: calc((100% - 48px) / 3);
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .guest-sentiment-card {
            flex: 0 0 calc((100% - 24px) / 2);
            width: calc((100% - 24px) / 2);
          }
        }

        @media (max-width: 639px) {
          .guest-sentiment-slider {
            gap: 16px;
            padding: 12px 16px 28px 16px;
            scroll-snap-type: x mandatory;
            scroll-padding: 0 16px;
          }
          .guest-sentiment-card {
            flex: 0 0 86%;
            width: 86%;
            scroll-snap-align: center;
            padding: 24px 20px 20px;
            border-radius: 14px;
          }
          .slider-controls-row {
            margin-top: 16px !important;
            gap: 12px !important;
          }
        }

        .guest-sentiment-card.featured-review {
          border-color: rgba(198, 168, 105, 0.55);
          background: linear-gradient(180deg, #ffffff 0%, rgba(247, 245, 240, 0.75) 100%);
          box-shadow: 0 8px 28px rgba(198, 168, 105, 0.18);
        }

        .guest-sentiment-card.featured-review:hover {
          transform: translateY(-8px);
          border-color: var(--gold);
          box-shadow: 0 24px 50px rgba(198, 168, 105, 0.3), 0 8px 22px rgba(10, 22, 40, 0.12);
        }

        .card-inner-top {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-guest-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .guest-avatar-bubble {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #0a1628;
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.05rem;
          border: 1.5px solid rgba(198, 168, 105, 0.5);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
        }

        .quote-mark-badge {
          margin-left: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(198, 168, 105, 0.12);
        }

        .guest-info-meta {
          display: flex;
          flex-direction: column;
        }

        .guest-name {
          font-size: 0.98rem;
          color: var(--navy);
          font-weight: 700;
          line-height: 1.25;
        }

        .guest-stay-meta {
          font-size: 0.78rem;
          color: var(--muted);
          margin-top: 2px;
        }

        .card-rating-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .ta-bubbles-row {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .ta-bubble {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: inline-block;
          background: #00AA6C;
          border: 1px solid #00AA6C;
        }

        .card-rating-text {
          font-size: 0.8rem;
          font-weight: 700;
          color: #00AA6C;
        }

        .featured-pill-tag {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: rgba(198, 168, 105, 0.22);
          color: var(--gold-dark);
          padding: 3px 10px;
          border-radius: 9999px;
          font-weight: 700;
          margin-left: auto;
          border: 1px solid rgba(198, 168, 105, 0.35);
        }

        .card-review-title {
          font-family: var(--serif);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--navy);
          line-height: 1.35;
          margin: 0 0 10px 0;
          min-height: 2.8rem;
          display: flex;
          align-items: flex-start;
        }

        .card-review-body {
          font-size: 0.9rem;
          line-height: 1.68;
          color: #3b495d;
          margin: 0 0 12px 0;
          font-style: italic;
          flex: 1;
        }

        .card-review-body.clamped {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-review-body.expanded {
          display: block;
        }

        .toggle-expand-btn {
          background: none;
          border: none;
          padding: 4px 0;
          color: var(--gold-dark);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
          align-self: flex-start;
          transition: color 0.2s ease;
          margin-bottom: 6px;
        }

        .toggle-expand-btn:hover {
          color: var(--navy);
        }

        .card-inner-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--line);
          padding-top: 14px;
          margin-top: 16px;
        }

        .ta-attribution-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--muted);
          font-weight: 600;
        }

        .verified-stay-pill {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 2px 8px;
          border-radius: 4px;
          background: rgba(0, 170, 108, 0.1);
          color: #00AA6C;
        }

        .slider-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--line);
          background: #ffffff;
          color: var(--navy);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(10, 22, 40, 0.08);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.25s ease,
                      color 0.25s ease,
                      border-color 0.25s ease;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }

        .slider-arrow-btn:hover:not(:disabled) {
          background: var(--gold);
          color: #ffffff;
          border-color: var(--gold);
          transform: scale(1.08) translateY(-1px);
          box-shadow: 0 8px 20px rgba(198, 168, 105, 0.35);
        }

        .slider-arrow-btn:active:not(:disabled) {
          transform: scale(0.94);
          transition-duration: 0.1s;
        }

        .slider-arrow-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
          box-shadow: none;
        }

        @media (max-width: 639px) {
          .slider-controls-row {
            display: flex !important;
            justify-content: center !important;
            gap: 12px !important;
            margin-top: 14px !important;
          }
          .slider-arrow-btn {
            width: 38px !important;
            height: 38px !important;
          }
          .tripadvisor-summary-card {
            padding: 24px 20px;
          }
          .overall-score-big {
            font-size: 2.2rem;
          }
        }

        /* Pagination Dots */
        .slider-pagination-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
        }

        .pagination-dot {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: var(--line);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .pagination-dot.active {
          width: 24px;
          background: var(--gold);
        }
      `}</style>
    </section>
  );
}
