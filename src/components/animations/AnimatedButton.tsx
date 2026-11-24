'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  scaleHover?: number;
  scaleTap?: number;
}

export function AnimatedButton({
  children,
  scaleHover = 1.03,
  scaleTap = 0.97,
  className,
  style,
  ...props
}: AnimatedButtonProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <button className={className} style={style} {...(props as any)}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: scaleHover }}
      whileTap={{ scale: scaleTap }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;
