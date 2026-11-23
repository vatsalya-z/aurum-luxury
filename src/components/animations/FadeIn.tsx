'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.65,
  direction = 'up',
  className,
  style,
  once = true,
}: FadeInProps) {
  const reducedMotion = useReducedMotion();

  const directionMap = {
    up: { y: 28 },
    down: { y: -28 },
    left: { x: 32 },
    right: { x: -32 },
    none: {},
  };

  if (reducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
