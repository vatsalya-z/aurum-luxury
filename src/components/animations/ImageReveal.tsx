'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './variants';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  style?: React.CSSProperties;
  hoverScale?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export function ImageReveal({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectRatio,
  style,
  hoverScale = 1.06,
  loading = 'lazy',
}: ImageRevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div
        className={className}
        style={{ overflow: 'hidden', aspectRatio, ...style }}
      >
        <img src={src} alt={alt} loading={loading} className={imgClassName} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.75, ease: luxuryEase }}
      className={className}
      style={{ overflow: 'hidden', position: 'relative', aspectRatio, ...style }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        className={imgClassName}
        whileHover={{ scale: hoverScale }}
        transition={{ duration: 0.55, ease: luxuryEase }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </motion.div>
  );
}

export default ImageReveal;
