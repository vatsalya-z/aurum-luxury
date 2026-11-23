'use client';

import React, { useState } from 'react';
import { Calendar, Users, Home, Utensils, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ROOMS } from '@/data/rooms';

interface BookingFormProps {
  initialRoom?: string;
  onSuccess?: (enquiryId: string, whatsappUrl: string) => void;
  isInline?: boolean;
}

export default function BookingForm({
  initialRoom = 'Luxury Bedroom Cottage',
  onSuccess,
  isInline = false,
}: BookingFormProps) {
  // Get tomorrow's date string and day after tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    checkIn: formatDate(tomorrow),
    checkOut: formatDate(dayAfter),
    adults: 2,
    children: 0,
    roomsCount: 1,
    preferredRoom: initialRoom,
    mealPlan: 'Room + Breakfast',
    guestName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    enquiryId: string;
    whatsappUrl: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Date validation
    const dIn = new Date(formData.checkIn);
    const dOut = new Date(formData.checkOut);

    if (dOut <= dIn) {
      setErrorMsg('Check-out date must be strictly after the check-in date.');
      return;
    }

    if (!formData.guestName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid contact phone number.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit enquiry.');
      }

      setSubmittedData({
        enquiryId: data.enquiryId,
        whatsappUrl: data.whatsappUrl,
      });

      if (onSuccess) {
        onSuccess(data.enquiryId, data.whatsappUrl);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Network error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submittedData) {
    return (
      <div className="success-card">
        <div className="success-icon">
          <CheckCircle style={{ width: 36, height: 36 }} />
        </div>
        <h3 style={{ fontSize: '1.6rem', color: 'var(--navy)', marginBottom: 8 }}>
          Enquiry Received
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.98rem', maxWidth: 480, margin: '0 auto 16px' }}>
          Thank you, <strong>{formData.guestName}</strong>. Your stay request for <strong>{formData.preferredRoom}</strong> has been logged with our reservations desk.
        </p>

        <div className="success-id">
          Enquiry Reference: {submittedData.enquiryId}
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: 24 }}>
          Our reservations coordinator will contact you promptly at <strong>{formData.phone}</strong> with current rates and availability options.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={submittedData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa"
          >
            <FaWhatsapp style={{ width: 17, height: 17 }} />
            <span>Confirm Faster on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmittedData(null)}
            className="btn btn-line btn-sm"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form" noValidate>
      {errorMsg && (
        <div
          style={{
            background: '#ffebee',
            border: '1px solid #ef5350',
            color: '#c62828',
            padding: '12px 16px',
            borderRadius: 'var(--radius-sm)',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: '0.88rem',
          }}
        >
          <AlertCircle style={{ width: 18, height: 18, flexShrink: 0 }} />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="form-grid">
        {/* Check-In */}
        <div className="form-group">
          <label htmlFor="checkIn">Check-In Date *</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            required
            className="form-control"
            value={formData.checkIn}
            min={formatDate(today)}
            onChange={handleChange}
          />
        </div>

        {/* Check-Out */}
        <div className="form-group">
          <label htmlFor="checkOut">Check-Out Date *</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            required
            className="form-control"
            value={formData.checkOut}
            min={formData.checkIn}
            onChange={handleChange}
          />
        </div>

        {/* Accommodation Choice */}
        <div className="form-group">
          <label htmlFor="preferredRoom">Preferred Room / Chalet</label>
          <select
            id="preferredRoom"
            name="preferredRoom"
            className="form-control"
            value={formData.preferredRoom}
            onChange={handleChange}
          >
            {ROOMS.map((r) => (
              <option key={r.id} value={r.name}>
                {r.name} ({r.category})
              </option>
            ))}
          </select>
        </div>

        {/* Meal Plan */}
        <div className="form-group">
          <label htmlFor="mealPlan">Preferred Meal Plan</label>
          <select
            id="mealPlan"
            name="mealPlan"
            className="form-control"
            value={formData.mealPlan}
            onChange={handleChange}
          >
            <option value="Room Only">Room Only (European Plan)</option>
            <option value="Room + Breakfast">Room + Breakfast (Continental Plan)</option>
            <option value="Room + Breakfast + 1 Meal">Room + Breakfast + 1 Meal (MAP Plan)</option>
          </select>
        </div>

        {/* Adults & Children */}
        <div className="form-group">
          <label htmlFor="adults">Adults (12+ yrs)</label>
          <select
            id="adults"
            name="adults"
            className="form-control"
            value={formData.adults}
            onChange={handleChange}
          >
            <option value={1}>1 Adult</option>
            <option value={2}>2 Adults</option>
            <option value={3}>3 Adults (Max per room)</option>
            <option value={4}>4 Adults (Multiple rooms)</option>
            <option value={6}>6+ Adults (Group)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="children">Children (Under 12)</label>
          <select
            id="children"
            name="children"
            className="form-control"
            value={formData.children}
            onChange={handleChange}
          >
            <option value={0}>No Children</option>
            <option value={1}>1 Child</option>
            <option value={2}>2 Children</option>
            <option value={3}>3+ Children</option>
          </select>
        </div>

        {/* Guest Full Name */}
        <div className="form-group">
          <label htmlFor="guestName">Full Name *</label>
          <input
            type="text"
            id="guestName"
            name="guestName"
            placeholder="e.g. Rahul Sharma"
            required
            className="form-control"
            value={formData.guestName}
            onChange={handleChange}
          />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone / WhatsApp Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+91 98765 43210"
            required
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="form-group full">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            required
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Special Requests */}
        <div className="form-group full">
          <label htmlFor="specialRequests">Special Requests / Travel Notes</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            rows={3}
            placeholder="e.g. Airport shuttle required, dietary preferences, anniversary setup..."
            className="form-control"
            value={formData.specialRequests}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
          * We respect your privacy. No spam. Official direct rates guaranteed.
        </span>

        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-gold"
          style={{ minWidth: 200 }}
        >
          {isLoading ? (
            <span>Sending Enquiry...</span>
          ) : (
            <>
              <Send style={{ width: 14, height: 14 }} />
              <span>Submit Stay Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
