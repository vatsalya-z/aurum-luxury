'use client';

import React, { useState } from 'react';
import { Calendar, Users, Home, Utensils, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ROOMS } from '@/data/rooms';
import { HOTEL_INFO } from '@/data/hotelInfo';

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

  const buildWhatsAppUrl = (data: typeof formData, enquiryId: string) => {
    const dIn = new Date(data.checkIn);
    const dOut = new Date(data.checkOut);
    const diffTime = dOut.getTime() - dIn.getTime();
    const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

    const formatDatePretty = (dateStr: string) => {
      try {
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-IN', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
      } catch {
        return dateStr;
      }
    };

    const text = `NEW RESERVATION QUERY - THE AURUM
The Aurum Luxury Collection, Srinagar
━━━━━━━━━━━━━━━━━━━━━━━

👤 Guest Details:
• Name: ${data.guestName}
• Phone: ${data.phone}
• Email:${data.email}

🏨 Stay Reservation:
• Check-In: ${data.checkIn} (${formatDatePretty(data.checkIn)})
• Check-Out: ${data.checkOut} (${formatDatePretty(data.checkOut)})
• Total Stay: ${nights} Night${nights > 1 ? 's' : ''}
• Room / Suite: ${data.preferredRoom || 'Luxury Bedroom Cottage'}
• Rooms Count: ${data.roomsCount} Room${Number(data.roomsCount) > 1 ? 's' : ''}
• Guests: ${data.adults} Adult${Number(data.adults) > 1 ? 's' : ''}${Number(data.children) > 0 ? `, ${data.children} Child${Number(data.children) > 1 ? 'ren' : ''}` : ''}
• Meal Plan: ${data.mealPlan}

📝 Special Requests / Notes:
${data.specialRequests && data.specialRequests.trim() ? data.specialRequests.trim() : 'None'}
━━━━━━━━━━━━━━━━━━━━━━━
_Please confirm room availability and current best promotional rates._`;

    return `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(text)}`;
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
      const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
      const enquiryId = `AURUM-${new Date().getFullYear()}-${randomCode}`;
      const whatsappUrl = buildWhatsAppUrl(formData, enquiryId);

      setSubmittedData({
        enquiryId,
        whatsappUrl,
      });

      if (onSuccess) {
        onSuccess(enquiryId, whatsappUrl);
      }

      // Directly redirect to WhatsApp with all filled details
      if (typeof window !== 'undefined' && whatsappUrl) {
        window.location.href = whatsappUrl;
      }
    } catch (err: any) {
      setErrorMsg('An unexpected error occurred. Please try contacting us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submittedData) {
    return (
      <div className="success-card">
        <div className="success-icon" style={{ background: '#25D366', color: '#fff' }}>
          <FaWhatsapp style={{ width: 32, height: 32 }} />
        </div>
        <h3 style={{ fontSize: '1.6rem', color: 'var(--navy)', marginBottom: 8 }}>
          Redirecting to WhatsApp...
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.98rem', maxWidth: 520, margin: '0 auto 12px' }}>
          Thank you, <strong>{formData.guestName}</strong>. Your reservation enquiry has been compiled and you are being redirected to WhatsApp now.
        </p>

        <div className="success-id">
          Booking Ref: {submittedData.enquiryId}
        </div>

        {/* Structured summary box showing all submitted details */}
        <div
          style={{
            background: 'rgba(198, 168, 105, 0.08)',
            border: '1px solid rgba(198, 168, 105, 0.3)',
            borderRadius: 'var(--radius-sm)',
            padding: '16px 20px',
            maxWidth: 520,
            margin: '0 auto 20px',
            textAlign: 'left',
            fontSize: '0.9rem',
            color: 'var(--navy)',
            lineHeight: 1.6,
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 8, color: 'var(--gold-dark)', borderBottom: '1px solid rgba(198, 168, 105, 0.2)', paddingBottom: 4 }}>
            Details Transferred to WhatsApp:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px 12px' }}>
            <div><strong>Guest:</strong> {formData.guestName}</div>
            <div><strong>Phone:</strong> {formData.phone}</div>
            <div><strong>Email:</strong> {formData.email}</div>
            <div><strong>Dates:</strong> {formData.checkIn} to {formData.checkOut}</div>
            <div><strong>Residence:</strong> {formData.preferredRoom}</div>
            <div><strong>Rooms:</strong> {formData.roomsCount} Room(s)</div>
            <div><strong>Guests:</strong> {formData.adults} Adults{Number(formData.children) > 0 ? `, ${formData.children} Children` : ''}</div>
            <div><strong>Meal Plan:</strong> {formData.mealPlan}</div>
          </div>
          {formData.specialRequests && formData.specialRequests.trim() && (
            <div style={{ marginTop: 8, paddingTop: 6, borderTop: '1px dashed rgba(198, 168, 105, 0.3)', fontSize: '0.86rem' }}>
              <strong>Special Requests:</strong> {formData.specialRequests.trim()}
            </div>
          )}
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: 20 }}>
          If WhatsApp did not open automatically, tap the button below:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <a
            href={submittedData.whatsappUrl}
            className="btn btn-wa"
            style={{
              padding: '14px 28px',
              fontSize: '1rem',
              fontWeight: 600,
              width: '100%',
              maxWidth: 380,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
            }}
          >
            <FaWhatsapp style={{ width: 22, height: 22 }} />
            <span>Open in WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmittedData(null)}
            className="btn btn-line btn-sm"
          >
            Modify Details / Edit Form
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
            <option value="Room Only">Room Only (EP)</option>
            <option value="Room + Breakfast">Room + Breakfast (CP)</option>
            <option value="Room + Breakfast + 1 Meal">Room + Breakfast + 1 Meal (MAP)</option>
          </select>
        </div>

        {/* Occupancy Row: Rooms, Adults, Children (Compact 3-column row) */}
        <div className="form-trio-row" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          <div className="form-group">
            <label htmlFor="roomsCount">Rooms</label>
            <select
              id="roomsCount"
              name="roomsCount"
              className="form-control"
              value={formData.roomsCount}
              onChange={handleChange}
            >
              <option value={1}>1 Room</option>
              <option value={2}>2 Rooms</option>
              <option value={3}>3 Rooms</option>
              <option value={4}>4+ Rooms</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="adults">Adults (12+)</label>
            <select
              id="adults"
              name="adults"
              className="form-control"
              value={formData.adults}
              onChange={handleChange}
            >
              <option value={1}>1 Adult</option>
              <option value={2}>2 Adults</option>
              <option value={3}>3 Adults</option>
              <option value={4}>4+ Adults</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="children">Children</label>
            <select
              id="children"
              name="children"
              className="form-control"
              value={formData.children}
              onChange={handleChange}
            >
              <option value={0}>0 Child</option>
              <option value={1}>1 Child</option>
              <option value={2}>2 Children</option>
              <option value={3}>3+ Children</option>
            </select>
          </div>
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
          <label htmlFor="phone">Phone / WhatsApp *</label>
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
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="specialRequests">Special Notes / Requests</label>
          <input
            type="text"
            id="specialRequests"
            name="specialRequests"
            placeholder="e.g. Airport shuttle, early check-in"
            className="form-control"
            value={formData.specialRequests}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, textAlign: 'center' }}>
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-gold btn-sm"
          style={{ minWidth: 220, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: 44, padding: '0 2rem' }}
        >
          {isLoading ? (
            <span>Preparing...</span>
          ) : (
            <>
              <FaWhatsapp style={{ width: 17, height: 17 }} />
              <span>Send on WhatsApp</span>
            </>
          )}
        </button>

        <span style={{ fontSize: '0.74rem', color: 'var(--muted)', marginTop: 2 }}>
          * Best direct rates guaranteed. No spam.
        </span>
      </div>
    </form>
  );
}
