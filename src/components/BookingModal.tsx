'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingForm from './BookingForm';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialRoom = 'Luxury Bedroom Cottage',
  initialCheckIn,
  initialCheckOut,
}: BookingModalProps) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bm-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            className="bm-shell"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: luxuryEase }}
          >
            {/* Cinematic Mountain Header with Centered Brand & Top-Right Close */}
            <div className="bm-cinematic-header">
              <div
                className="bm-cinematic-bg"
                style={{ backgroundImage: 'url(/images/hero/aurum-luxury-estate-hero.jpg)' }}
                aria-hidden="true"
              />
              <div className="bm-cinematic-scrim" aria-hidden="true" />

              <div className="bm-brand-row">
                <div className="bm-brand">
                  <div className="bm-monogram">A</div>
                  <div className="bm-brand-text">
                    <span className="bm-brand-name">THE AURUM</span>
                    <span className="bm-brand-sub">BY STAY PATTERN</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="bm-close"
                  onClick={onClose}
                  aria-label="Close reservation modal"
                >
                  <X style={{ width: 20, height: 20 }} />
                </button>
              </div>
            </div>

            {/* Form Body */}
            <div className="bm-body">
              <BookingForm
                key={`${initialRoom}-${initialCheckIn || ''}-${initialCheckOut || ''}`}
                initialRoom={initialRoom}
                initialCheckIn={initialCheckIn}
                initialCheckOut={initialCheckOut}
                onSuccess={() => {}}
                isInline={false}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
