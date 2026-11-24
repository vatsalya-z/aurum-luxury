'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './variants';

interface AccordionContentProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({
  isOpen,
  children,
  className,
}: AccordionContentProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    if (!isOpen) return null;
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: luxuryEase }}
          style={{ overflow: 'hidden' }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AccordionContent;
