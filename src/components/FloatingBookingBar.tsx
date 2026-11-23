'use client';

import React, { useState } from 'react';
import { MapPin, CalendarDays, Users, ArrowRight } from 'lucide-react';
import { ROOMS } from '@/data/rooms';

interface FloatingBookingBarProps {
  onOpenBooking: (roomName?: string) => void;
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

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(room);
  };

  return (
    <div className="floating-booking-bar">
      <form onSubmit={handleQuickBook} className="booking-bar-form">
        {/* Destination Pill */}
        <div className="bar-dest-badge">
          <div className="icon-box">
            <MapPin style={{ width: 18, height: 18 }} />
          </div>
          <div>
            <p style={{ fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--gold)', margin: 0 }}>
              Reserve Stay
            </p>
            <p style={{ fontSize: '0.88rem', fontWeight: 700, margin: 0, whiteSpace: 'nowrap' }}>
              Brein Hills · Dal View
            </p>
          </div>
        </div>

        {/* Check In */}
        <div className="bar-input-group">
          <CalendarDays style={{ width: 18, height: 18, color: 'var(--gold)', flexShrink: 0 }} />
          <div style={{ width: '100%' }}>
            <label htmlFor="bar-in" style={{ display: 'block', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', fontWeight: 700 }}>
              Check-In
            </label>
            <input
              id="bar-in"
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="bar-input-group">
          <CalendarDays style={{ width: 18, height: 18, color: 'var(--gold)', flexShrink: 0 }} />
          <div style={{ width: '100%' }}>
            <label htmlFor="bar-out" style={{ display: 'block', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', fontWeight: 700 }}>
              Check-Out
            </label>
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
          <Users style={{ width: 18, height: 18, color: 'var(--gold)', flexShrink: 0 }} />
          <div style={{ width: '100%' }}>
            <label htmlFor="bar-room" style={{ display: 'block', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', fontWeight: 700 }}>
              Residence
            </label>
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
        <button
          type="submit"
          className="btn btn-gold bar-submit-btn"
        >
          <span>Check Rates</span>
          <ArrowRight style={{ width: 14, height: 14 }} />
        </button>
      </form>
    </div>
  );
}
