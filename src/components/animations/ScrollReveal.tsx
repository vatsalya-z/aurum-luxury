'use client';

import React from 'react';
import { motion, type Variants, type ViewportOptions } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase, staggerContainer } from './variants';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: ViewportOptions['amount'];
}

export function ScrollReveal({
  children,
  className,
  style,
  staggerChildren = 0.1,
  delayChildren = 0.05,
  once = true,
  amount = 0.1,
}: ScrollRevealProps) {
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
      variants={staggerContainer(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px', amount }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export interface ScrollRevealItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  distance?: number;
  duration?: number;
}

export function ScrollRevealItem({
  children,
  className,
  style,
  direction = 'up',
  distance = 28,
  duration = 0.65,
}: ScrollRevealItemProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    scale: { scale: 0.94 },
    none: {},
  };

  const initialProps = directionMap[direction] || directionMap.up;

  const itemVariants: Variants = {
    hidden: { opacity: 0, ...initialProps },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration, ease: luxuryEase },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} style={style}>
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
