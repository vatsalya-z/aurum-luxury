'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface MountainParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Scroll-linked GPU parallax container for mountain landscapes and scenic photography.
 * Smoothly shifts vertical depth without layout shifts, scroll hijacking, or text instability.
 */
export default function MountainParallax({
  children,
  offset = 36,
  className = '',
  style = {},
}: MountainParallaxProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div
      ref={containerRef}
      className={`mountain-parallax-shell ${className}`.trim()}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      <motion.div
        className="mountain-parallax-inner"
        style={{
          y: reducedMotion ? 0 : y,
          willChange: reducedMotion ? 'auto' : 'transform',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
