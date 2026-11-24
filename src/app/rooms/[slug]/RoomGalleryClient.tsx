'use client';

import React, { useState } from 'react';
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

  const prevPhoto = () => {
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextPhoto = () => {
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  const current = images[activeIdx];

  return (
    <div>
      {/* Featured Main Image with Smooth Fade on Change */}
      <div
        style={{
          position: 'relative',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          aspectRatio: '16/10',
          background: 'var(--navy)',
          boxShadow: 'var(--shadow)',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIdx}
            src={current.src}
            alt={current.alt}
            initial={reducedMotion ? {} : { opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reducedMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AnimatePresence>

        {/* Carousel buttons with hover interactions */}
        <motion.button
          onClick={prevPhoto}
          aria-label="Previous photograph"
          whileHover={reducedMotion ? {} : { scale: 1.12, backgroundColor: 'rgba(14, 30, 56, 0.9)' }}
          whileTap={reducedMotion ? {} : { scale: 0.9 }}
          style={{
            position: 'absolute',
            left: 14,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(14, 30, 56, 0.65)',
            color: '#fff',
            width: 38,
            height: 38,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            cursor: 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
        </motion.button>

        <motion.button
          onClick={nextPhoto}
          aria-label="Next photograph"
          whileHover={reducedMotion ? {} : { scale: 1.12, backgroundColor: 'rgba(14, 30, 56, 0.9)' }}
          whileTap={reducedMotion ? {} : { scale: 0.9 }}
          style={{
            position: 'absolute',
            right: 14,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(14, 30, 56, 0.65)',
            color: '#fff',
            width: 38,
            height: 38,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            cursor: 'pointer',
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
              padding: '12px 18px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(10, 22, 40, 0.85) 100%)',
              color: '#fff',
              fontSize: '0.84rem',
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
          gap: 12,
          marginTop: 14,
        }}
      >
        {images.map((img, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveIdx(i)}
            aria-label={`Show photo ${i + 1}`}
            whileHover={reducedMotion ? {} : { scale: 1.04 }}
            whileTap={reducedMotion ? {} : { scale: 0.96 }}
            style={{
              borderRadius: 'var(--radius-sm)',
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
