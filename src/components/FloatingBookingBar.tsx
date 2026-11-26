'use client';

import React, { useState } from 'react';
import { MapPin, CalendarDays, Home, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ROOMS } from '@/data/rooms';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { BookingOptions } from './ClientLayout';

interface FloatingBookingBarProps {
  onOpenBooking: (options?: BookingOptions) => void;
}

export default function FloatingBookingBar({ onOpenBooking }: FloatingBookingBarProps) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [room, setRoom] = useState(ROOMS[0].name);
  const reducedMotion = useReducedMotion();

  const handleCheckInChange = (val: string) => {
    setCheckIn(val);
    if (val >= checkOut) {
      const next = new Date(val);
      if (!Number.isNaN(next.getTime())) {
        next.setDate(next.getDate() + 1);
        setCheckOut(next.toISOString().split('T')[0]);
      }
    }
  };

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking({
      roomName: room,
      checkIn,
      checkOut,
    });
  };

  return (
    <div className="floating-booking-bar">
      <form onSubmit={handleQuickBook} className="booking-bar-form" aria-label="Quick availability search">
        {/* Destination Badge */}
        <div className="bar-dest-badge">
          <div className="icon-box">
            <MapPin style={{ width: 17, height: 17 }} />
          </div>
          <div>
            <p className="bar-dest-eyebrow">Reserve Stay</p>
            <p className="bar-dest-title">Brein Hills · Dal View</p>
          </div>
        </div>

        {/* Check In */}
        <div className="bar-input-group">
          <CalendarDays className="bar-field-icon" aria-hidden="true" />
          <div className="bar-field-inner">
            <label htmlFor="bar-in">Check-In</label>
            <input
              id="bar-in"
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => handleCheckInChange(e.target.value)}
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="bar-input-group">
          <CalendarDays className="bar-field-icon" aria-hidden="true" />
          <div className="bar-field-inner">
            <label htmlFor="bar-out">Check-Out</label>
            <input
              id="bar-out"
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>

        {/* Room Category */}
        <div className="bar-input-group">
          <Home className="bar-field-icon" aria-hidden="true" />
          <div className="bar-field-inner">
            <label htmlFor="bar-room">Residence</label>
            <select
              id="bar-room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            >
              {ROOMS.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          type="submit"
          className="btn btn-gold bar-submit-btn"
          whileHover={reducedMotion ? {} : { scale: 1.02 }}
          whileTap={reducedMotion ? {} : { scale: 0.97 }}
        >
          <span>Check Rates</span>
          <ArrowRight style={{ width: 14, height: 14 }} />
        </motion.button>
      </form>
    </div>
  );
}
