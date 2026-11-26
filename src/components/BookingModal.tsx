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
          transition={{ duration: 0.22 }}
        >
          <motion.div
            className="modal-card"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 36, scale: 0.97 }}
            transition={{ duration: 0.32, ease: luxuryEase }}
          >
            <div className="modal-header">
              <div className="modal-drag-handle" aria-hidden="true" />
              <div>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-soft)', fontWeight: 700 }}>
                  Direct Reservation Desk
                </span>
                <h3 id="booking-modal-title">Book Your Stay at The Aurum</h3>
                <p>23A, Brein Hills, Astanpora, Srinagar · Dal View</p>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={onClose}
                aria-label="Close booking modal"
              >
                <X style={{ width: 18, height: 18 }} />
              </button>
            </div>

            <div className="modal-body">
              <BookingForm
                key={`${initialRoom}-${initialCheckIn || ''}-${initialCheckOut || ''}`}
                initialRoom={initialRoom}
                initialCheckIn={initialCheckIn}
                initialCheckOut={initialCheckOut}
                onSuccess={() => {}}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
