'use client';

import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import BookingForm from './BookingForm';

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

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
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
      </div>
    </div>
  );
}
