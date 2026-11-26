'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RoomGalleryClientProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  roomName: string;
}

export default function RoomGalleryClient({ images, roomName }: RoomGalleryClientProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const reducedMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const prevPhoto = () => {
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextPhoto = () => {
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) nextPhoto();
      else prevPhoto();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const current = images[activeIdx];

  return (
    <div>
      {/* Featured Main Image with Touch Swipe & Smooth Fade */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: 'relative',
          borderRadius: 16,
          overflow: 'hidden',
          aspectRatio: '16/10',
          background: 'var(--navy)',
          boxShadow: 'var(--shadow)',
          touchAction: 'pan-y',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIdx}
            src={current.src}
            alt={current.alt || roomName}
            initial={reducedMotion ? {} : { opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reducedMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AnimatePresence>

        {/* Photo Counter Pill */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            padding: '5px 12px',
            borderRadius: 999,
            background: 'rgba(10, 22, 40, 0.78)',
            border: '1px solid rgba(198, 168, 105, 0.4)',
            color: '#fff',
            fontSize: '0.74rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            backdropFilter: 'blur(8px)',
            zIndex: 5,
          }}
        >
          {activeIdx + 1} / {images.length}
        </div>

        {/* Carousel buttons */}
        <motion.button
          type="button"
          onClick={prevPhoto}
          aria-label="Previous photograph"
          whileHover={reducedMotion ? {} : { scale: 1.12, backgroundColor: 'rgba(14, 30, 56, 0.9)' }}
          whileTap={reducedMotion ? {} : { scale: 0.9 }}
          style={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(14, 30, 56, 0.72)',
            color: '#fff',
            width: 38,
            height: 38,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            cursor: 'pointer',
            zIndex: 5,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
        </motion.button>

        <motion.button
          type="button"
          onClick={nextPhoto}
          aria-label="Next photograph"
          whileHover={reducedMotion ? {} : { scale: 1.12, backgroundColor: 'rgba(14, 30, 56, 0.9)' }}
          whileTap={reducedMotion ? {} : { scale: 0.9 }}
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(14, 30, 56, 0.72)',
            color: '#fff',
            width: 38,
            height: 38,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            cursor: 'pointer',
            zIndex: 5,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
        </motion.button>

        {/* Caption Bar */}
        {current.caption && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '18px 16px 12px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(10, 22, 40, 0.88) 100%)',
              color: '#fff',
              fontSize: '0.82rem',
            }}
          >
            {current.caption}
          </div>
        )}
      </div>

      {/* Thumbnails Row */}
      <div
        className="room-gallery-thumbs"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${images.length}, 1fr)`,
          gap: 10,
          marginTop: 12,
        }}
      >
        {images.map((img, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => setActiveIdx(i)}
            aria-label={`Show photo ${i + 1}`}
            whileHover={reducedMotion ? {} : { scale: 1.04 }}
            whileTap={reducedMotion ? {} : { scale: 0.96 }}
            style={{
              borderRadius: 10,
              overflow: 'hidden',
              aspectRatio: '4/3',
              border: i === activeIdx ? '2px solid var(--gold)' : '1px solid var(--line)',
              opacity: i === activeIdx ? 1 : 0.65,
              transition: 'opacity 0.2s, border 0.2s',
              cursor: 'pointer',
              padding: 0,
              background: '#000',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
