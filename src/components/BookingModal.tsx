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
}

export default function BookingModal({
  isOpen,
  onClose,
  initialRoom = 'Luxury Bedroom Cottage',
}: BookingModalProps) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="modal-card"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.35, ease: luxuryEase }}
          >
            <div className="modal-header">
              <div>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-soft)' }}>
                  Direct Reservation Desk
                </span>
                <h3 id="booking-modal-title">Book Your Stay at The Aurum</h3>
                <p>23A, Brein Hills, Astanpora, Srinagar · Dal View</p>
              </div>
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close booking modal"
              >
                <X style={{ width: 18, height: 18 }} />
              </button>
            </div>

            <div className="modal-body">
              <BookingForm
                initialRoom={initialRoom}
                onSuccess={() => {}}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
