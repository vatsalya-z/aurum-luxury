'use client';

import React from 'react';
import { motion, type ViewportOptions } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './variants';

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
  amount?: ViewportOptions['amount'];
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  distance = 24,
  direction = 'up',
  className,
  style,
  once = true,
  amount = 'some',
}: FadeInProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const horizontalDistance = Math.min(distance, 18);
  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: horizontalDistance, y: 0 },
    right: { x: -horizontalDistance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '0px 0px -20px 0px', amount }}
      transition={{ duration, delay, ease: luxuryEase }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
