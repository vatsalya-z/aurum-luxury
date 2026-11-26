'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  BedDouble,
  Mountain,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Sparkles,
  ArrowUpRight,
  Calendar,
  Images,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Room } from '@/data/rooms';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';

interface RoomShowcaseSuiteProps {
  room: Room;
  index: number;
  onEnquire: (roomName: string) => void;
}

export default function RoomShowcaseSuite({
  room,
  index,
  onEnquire,
}: RoomShowcaseSuiteProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const images = room.images;
  const total = images.length;
  const currentImg = images[activeIdx] || images[0];
  const isReversed = index % 2 === 1;
  const suiteNum = String(index + 1).padStart(2, '0');

  // 3 visible secondary mosaic tiles (always showing the next 3 distinct room photos!)
  const mosaicTiles = [1, 2, 3]
    .filter((offset) => offset < total)
    .map((offset) => {
      const idx = (activeIdx + offset) % total;
      return { img: images[idx], idx };
    });

  const nextImage = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  const prevImage = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, nextImage, prevImage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) nextImage();
      else prevImage();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const statusBadge =
    room.id === 'sunset-view-chalet-dal-view'
      ? 'Crown Jewel Residence'
      : room.isPopular
        ? 'Most Requested'
        : 'Hillside Sanctuary';

  return (
    <>
      <motion.article
        id={`residence-${room.slug}`}
        className={`rsuite ${isReversed ? 'rsuite--reversed' : ''}`}
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.72, ease: luxuryEase }}
      >
        {/* ─── Left / Alternating Multi-Photo Bento Gallery Column ─── */}
        <div className="rsuite-media-col">
          {/* Primary Hero Stage */}
          <div
            className="rsuite-stage"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImg.src}
                className="rsuite-stage-frame"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0.25, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? { opacity: 1 } : { opacity: 0.25 }}
                transition={{ duration: 0.42, ease: luxuryEase }}
                onClick={() => setLightboxOpen(true)}
                style={{ cursor: 'zoom-in' }}
              >
                <Image
                  src={currentImg.src}
                  alt={currentImg.alt}
                  width={1448}
                  height={1086}
                  quality={92}
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="rsuite-stage-img"
                />
              </motion.div>
            </AnimatePresence>

            <div className="rsuite-stage-scrim" aria-hidden="true" />

            {/* Top Badges */}
            <div className="rsuite-stage-top">
              <span className="rsuite-badge-pill">
                <Sparkles style={{ width: 12, height: 12 }} />
                <span>{statusBadge}</span>
              </span>

              <button
                type="button"
                className="rsuite-expand-btn"
                onClick={() => setLightboxOpen(true)}
                aria-label={`Open full ${total}-photo gallery for ${room.name}`}
              >
                <Images style={{ width: 14, height: 14 }} />
                <span>
                  All {total} Photos ({String(activeIdx + 1).padStart(2, '0')}/{String(total).padStart(2, '0')})
                </span>
                <Maximize2 style={{ width: 13, height: 13, opacity: 0.85 }} />
              </button>
            </div>

            {/* Prev / Next Gallery Controls */}
            {total > 1 && (
              <>
                <button
                  type="button"
                  className="rsuite-nav-btn rsuite-nav-btn--prev"
                  onClick={prevImage}
                  aria-label={`Previous photo of ${room.name}`}
                >
                  <ChevronLeft style={{ width: 18, height: 18 }} />
                </button>
                <button
                  type="button"
                  className="rsuite-nav-btn rsuite-nav-btn--next"
                  onClick={nextImage}
                  aria-label={`Next photo of ${room.name}`}
                >
                  <ChevronRight style={{ width: 18, height: 18 }} />
                </button>
              </>
            )}

            {/* Bottom Caption Strip */}
            {currentImg.caption && (
              <div className="rsuite-stage-caption">
                <span>{currentImg.caption}</span>
              </div>
            )}
          </div>

          {/* Visible 3-Photo Companion Mosaic Trio (Makes 4 Photos Visible Per Suite Immediately!) */}
          {mosaicTiles.length > 0 && (
            <div className="rsuite-mosaic-trio">
              {mosaicTiles.map((tile, tIdx) => {
                const isLastTile = tIdx === mosaicTiles.length - 1 && total > 4;
                return (
                  <button
                    key={`${tile.img.src}-${tile.idx}`}
                    type="button"
                    className="rsuite-mosaic-tile"
                    onClick={() =>
                      isLastTile ? setLightboxOpen(true) : setActiveIdx(tile.idx)
                    }
                    aria-label={
                      isLastTile
                        ? `View all ${total} photos of ${room.name}`
                        : `Preview ${tile.img.alt}`
                    }
                  >
                    <Image
                      src={tile.img.src}
                      alt={tile.img.alt}
                      width={480}
                      height={360}
                      quality={84}
                      sizes="(max-width: 768px) 33vw, 18vw"
                      className="rsuite-mosaic-img"
                    />
                    {isLastTile && (
                      <span className="rsuite-mosaic-more">
                        <Images style={{ width: 15, height: 15 }} />
                        <span>+{total - 3} Photos</span>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ─── Right / Alternating Editorial Details Column ─── */}
        <div className="rsuite-info-col">
          <div className="rsuite-kicker-row">
            <span className="rsuite-num">{suiteNum}</span>
            <span className="rsuite-kicker-line" aria-hidden="true" />
            <span className="rsuite-category">
              {room.category} Residence · Brein Hills
            </span>
          </div>

          <h3 className="rsuite-title">
            <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
          </h3>

          <p className="rsuite-tagline">{room.tagline}</p>

          {/* 4-Spec Architectural Ledger */}
          <div className="rsuite-specs-grid">
            <div className="rsuite-spec-cell">
              <Users className="rsuite-spec-icon" aria-hidden="true" />
              <div>
                <span className="rsuite-spec-label">Occupancy</span>
                <strong className="rsuite-spec-val">Up to {room.maxGuests} Guests</strong>
              </div>
            </div>

            {room.sizeSqFt && (
              <div className="rsuite-spec-cell">
                <Maximize2 className="rsuite-spec-icon" aria-hidden="true" />
                <div>
                  <span className="rsuite-spec-label">Living Area</span>
                  <strong className="rsuite-spec-val">{room.sizeSqFt} sq. ft.</strong>
                </div>
              </div>
            )}

            <div className="rsuite-spec-cell">
              <BedDouble className="rsuite-spec-icon" aria-hidden="true" />
              <div>
                <span className="rsuite-spec-label">Bedding</span>
                <strong className="rsuite-spec-val">{room.bedType}</strong>
              </div>
            </div>

            <div className="rsuite-spec-cell">
              <Mountain className="rsuite-spec-icon" aria-hidden="true" />
              <div>
                <span className="rsuite-spec-label">Orientation</span>
                <strong className="rsuite-spec-val">{room.view}</strong>
              </div>
            </div>
          </div>

          <p className="rsuite-desc">{room.shortDescription}</p>

          {/* Signature Highlights */}
          <ul className="rsuite-highlights">
            {room.highlights.slice(0, 4).map((hl) => (
              <li key={hl}>
                <span className="rsuite-check" aria-hidden="true">
                  <Check style={{ width: 12, height: 12 }} />
                </span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>

          {/* Curated Amenity Chips */}
          <div className="rsuite-amenities">
            {room.amenities.slice(0, 6).map((am) => (
              <span key={am.name} className="rsuite-amenity-chip">
                {am.name}
              </span>
            ))}
            {room.amenities.length > 6 && (
              <Link href={`/rooms/${room.slug}`} className="rsuite-amenity-chip rsuite-amenity-chip--more">
                +{room.amenities.length - 6} more
              </Link>
            )}
          </div>

          {/* Tariff & Conversion Footer */}
          <div className="rsuite-footer">
            <div className="rsuite-rate-block">
              <span className="rsuite-rate-label">Direct Seasonal Tariff · EP / CP / MAP</span>
              <strong className="rsuite-rate-val">{room.rateDisplay}</strong>
            </div>

            <div className="rsuite-cta-group">
              <Link href={`/rooms/${room.slug}`} className="rsuite-btn-outline">
                <span>Explore Residence</span>
                <ArrowUpRight style={{ width: 15, height: 15 }} />
              </Link>

              <motion.button
                type="button"
                className="btn btn-gold rsuite-btn-primary"
                onClick={() => onEnquire(room.name)}
                whileHover={reducedMotion ? {} : { scale: 1.02 }}
                whileTap={reducedMotion ? {} : { scale: 0.97 }}
              >
                <Calendar style={{ width: 15, height: 15 }} />
                <span>Direct Enquiry</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.article>

      {/* ─── Fullscreen Accessible Lightbox ─── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="rsuite-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${room.name} photo gallery`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightboxOpen(false);
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="rsuite-lightbox-topbar">
              <div className="rsuite-lightbox-meta">
                <span className="rsuite-lightbox-kicker">{room.category} Gallery</span>
                <strong>{room.name}</strong>
              </div>

              <div className="rsuite-lightbox-actions">
                <span className="rsuite-lightbox-counter">
                  {String(activeIdx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  className="btn btn-gold btn-sm"
                  onClick={() => {
                    setLightboxOpen(false);
                    onEnquire(room.name);
                  }}
                >
                  <span>Enquire</span>
                </button>
                <button
                  type="button"
                  className="rsuite-lightbox-close"
                  onClick={() => setLightboxOpen(false)}
                  aria-label="Close gallery"
                >
                  <X style={{ width: 20, height: 20 }} />
                </button>
              </div>
            </div>

            <div className="rsuite-lightbox-stage">
              <button
                type="button"
                className="rsuite-lightbox-arrow rsuite-lightbox-arrow--prev"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft style={{ width: 24, height: 24 }} />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImg.src}
                  className="rsuite-lightbox-img-wrap"
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.28, ease: luxuryEase }}
                >
                  <Image
                    src={currentImg.src}
                    alt={currentImg.alt}
                    width={1448}
                    height={1086}
                    quality={95}
                    sizes="95vw"
                    className="rsuite-lightbox-img"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                className="rsuite-lightbox-arrow rsuite-lightbox-arrow--next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight style={{ width: 24, height: 24 }} />
              </button>
            </div>

            <div className="rsuite-lightbox-footer">
              {currentImg.caption && <p>{currentImg.caption}</p>}
              <div className="rsuite-lightbox-thumbs">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className={`rsuite-lightbox-dot ${i === activeIdx ? 'is-active' : ''}`}
                    aria-label={`Select image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
