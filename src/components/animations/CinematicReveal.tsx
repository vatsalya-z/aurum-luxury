'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './variants';

export interface CinematicRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Editorial clip-path mask reveal for cinematic headlines and scenic frames.
 */
export default function CinematicReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  style = {},
}: CinematicRevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)', y: 18 }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)', y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: luxuryEase }}
    >
      {children}
    </motion.div>
  );
}
