'use client';

import React, { useState, useId, useEffect } from 'react';
import {
  AlertCircle,
  Calendar,
  Home,
  UtensilsCrossed,
  Users,
  User,
  BedDouble,
  Phone,
  Mail,
  FileText,
  Shield,
  Zap,
  BadgeCheck,
  ChevronDown,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ROOMS } from '@/data/rooms';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface BookingFormProps {
  initialRoom?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  onSuccess?: (enquiryId: string, whatsappUrl: string) => void;
  isInline?: boolean;
}

export default function BookingForm({
  initialRoom = 'Luxury Bedroom Cottage',
  initialCheckIn,
  initialCheckOut,
  onSuccess,
  isInline = false,
}: BookingFormProps) {
  const uid = useId();
  const reducedMotion = useReducedMotion();

  // Date helpers
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);
  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const formatDisplayDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      if (Number.isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  const [formData, setFormData] = useState({
    checkIn: initialCheckIn || formatDate(tomorrow),
    checkOut: initialCheckOut || formatDate(dayAfter),
    adults: 2,
    children: 0,
    roomsCount: 1,
    preferredRoom: initialRoom,
    mealPlan: 'Room + Breakfast (CP)',
    guestName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      preferredRoom: initialRoom || prev.preferredRoom,
      checkIn: initialCheckIn || prev.checkIn,
      checkOut: initialCheckOut || prev.checkOut,
    }));
  }, [initialRoom, initialCheckIn, initialCheckOut]);

  const [step, setStep] = useState<1 | 2>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    enquiryId: string;
    whatsappUrl: string;
  } | null>(null);

  // Selected room data for custom trigger display
  const selectedRoomData = ROOMS.find((r) => r.name === formData.preferredRoom) || ROOMS[0];

  const handleNextStep = () => {
    setErrorMsg(null);
    if (!formData.checkIn || !formData.checkOut) {
      setErrorMsg('Please select both check-in and check-out dates.');
      return;
    }
    if (new Date(formData.checkIn) >= new Date(formData.checkOut)) {
      setErrorMsg('Check-out date must be strictly after check-in date.');
      return;
    }
    setStep(2);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === 'checkIn' && value >= prev.checkOut) {
        const nextDay = new Date(value);
        if (!Number.isNaN(nextDay.getTime())) {
          nextDay.setDate(nextDay.getDate() + 1);
          next.checkOut = nextDay.toISOString().split('T')[0];
        }
      }
      return next;
    });
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
• Email: ${data.email}

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

      setSubmittedData({ enquiryId, whatsappUrl });

      if (onSuccess) {
        onSuccess(enquiryId, whatsappUrl);
      }

      if (typeof window !== 'undefined' && whatsappUrl) {
        window.location.href = whatsappUrl;
      }
    } catch {
      setErrorMsg('An unexpected error occurred. Please try contacting us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  // ── Success State ──
  if (submittedData) {
    return (
      <div className="bf-success">
        <div className="bf-success-icon">
          <FaWhatsapp style={{ width: 32, height: 32 }} />
        </div>
        <h3>Redirecting to WhatsApp...</h3>
        <p>
          Thank you, <strong>{formData.guestName}</strong>. Your reservation enquiry has been compiled and you are being redirected to WhatsApp now.
        </p>

        <div className="bf-success-ref">
          Booking Ref: {submittedData.enquiryId}
        </div>

        <div className="bf-success-summary">
          <div className="bf-success-summary-title">Details Transferred to WhatsApp:</div>
          <div className="bf-success-grid">
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
            <div className="bf-success-notes">
              <strong>Special Requests:</strong> {formData.specialRequests.trim()}
            </div>
          )}
        </div>

        <p className="bf-success-fallback">
          If WhatsApp did not open automatically, tap the button below:
        </p>

        <div className="bf-success-actions">
          <a href={submittedData.whatsappUrl} className="bf-btn-wa">
            <FaWhatsapp style={{ width: 22, height: 22 }} />
            <span>Open in WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmittedData(null);
              setStep(1);
            }}
            className="bf-btn-edit"
          >
            Modify Details / Edit Form
          </button>
        </div>
      </div>
    );
  }

  // ── Step transition variants ──
  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0,
    }),
  };

  return (
    <form onSubmit={handleSubmit} className={`bf-premium ${isInline ? 'bf-inline' : ''}`} noValidate>
      {/* ─── Header: Eyebrow with flank lines + Title + Subtitle ─── */}
      {!isInline && (
        <div className="bf-section-header">
          <div className="bf-eyebrow-row">
            <span className="bf-eyebrow-line" aria-hidden="true" />
            <span className="bf-eyebrow">DIRECT RESERVATION DESK</span>
            <span className="bf-eyebrow-line" aria-hidden="true" />
          </div>
          <h3 className="bf-title">Reservation Inquiry</h3>
          <p className="bf-subtitle">Book your stay with the best available rate</p>
        </div>
      )}

      {/* ─── Two-Step Pill Indicator ─── */}
      <div className="bf-steps" role="tablist" aria-label="Reservation steps">
        <button
          type="button"
          role="tab"
          aria-selected={step === 1}
          className={`bf-step-pill ${step === 1 ? 'is-active' : ''}`}
          onClick={() => {
            setErrorMsg(null);
            setStep(1);
          }}
        >
          <span className="bf-step-num">1</span>
          <span>Stay &amp; Room</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={step === 2}
          className={`bf-step-pill ${step === 2 ? 'is-active' : ''}`}
          onClick={() => (step === 1 ? handleNextStep() : setStep(2))}
        >
          <span className="bf-step-num">2</span>
          <span>Guest Details</span>
        </button>
      </div>

      {/* ─── Error Notification ─── */}
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            className="bf-error"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <AlertCircle style={{ width: 16, height: 16, flexShrink: 0 }} />
            <span>{errorMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Form Card (Glassmorphic Container) ─── */}
      <div className="bf-card">
        <AnimatePresence mode="wait" custom={step === 1 ? -1 : 1}>
          {step === 1 ? (
            <motion.div
              key="step-1"
              custom={-1}
              variants={reducedMotion ? {} : stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
              className="bf-step-content"
            >
              {/* Row 1: Check-in & Check-out Dates */}
              <div className="bf-date-row">
                {/* Check-In */}
                <div className="bf-field">
                  <label htmlFor={`${uid}-checkIn`}>
                    <Calendar className="bf-field-icon" aria-hidden="true" />
                    <span>Check-in Date <span className="bf-req">*</span></span>
                  </label>
                  <div className="bf-date-input-wrap">
                    <span className="bf-date-display">{formatDisplayDate(formData.checkIn)}</span>
                    <Calendar className="bf-date-icon-right" aria-hidden="true" />
                    <input
                      type="date"
                      id={`${uid}-checkIn`}
                      name="checkIn"
                      required
                      className="bf-native-date"
                      value={formData.checkIn}
                      min={formatDate(today)}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Check-Out */}
                <div className="bf-field">
                  <label htmlFor={`${uid}-checkOut`}>
                    <Calendar className="bf-field-icon" aria-hidden="true" />
                    <span>Check-out Date <span className="bf-req">*</span></span>
                  </label>
                  <div className="bf-date-input-wrap">
                    <span className="bf-date-display">{formatDisplayDate(formData.checkOut)}</span>
                    <Calendar className="bf-date-icon-right" aria-hidden="true" />
                    <input
                      type="date"
                      id={`${uid}-checkOut`}
                      name="checkOut"
                      required
                      className="bf-native-date"
                      value={formData.checkOut}
                      min={formData.checkIn}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Preferred Room / Chalet with Thumbnail */}
              <div className="bf-field">
                <label htmlFor={`${uid}-preferredRoom`}>
                  <BedDouble className="bf-field-icon" aria-hidden="true" />
                  <span>Preferred Room / Chalet</span>
                </label>
                <div className="bf-room-selector">
                  <div className="bf-room-thumb">
                    <Image
                      src={selectedRoomData.images[0]?.src || '/images/rooms/luxury-cottage-bedroom.png'}
                      alt={selectedRoomData.name}
                      width={64}
                      height={48}
                      className="bf-room-img"
                    />
                  </div>
                  <div className="bf-room-info">
                    <span className="bf-room-name">{selectedRoomData.name}</span>
                    <span className="bf-room-desc">
                      {selectedRoomData.tagline || selectedRoomData.view || 'Spacious room with mountain view'}
                    </span>
                  </div>
                  <ChevronDown className="bf-select-chevron" aria-hidden="true" />

                  {/* Native select overlay for 100% native picker functionality */}
                  <select
                    id={`${uid}-preferredRoom`}
                    name="preferredRoom"
                    className="bf-invisible-select"
                    value={formData.preferredRoom}
                    onChange={handleChange}
                    aria-label="Select preferred room"
                  >
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name} ({r.category})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Preferred Meal Plan */}
              <div className="bf-field">
                <label htmlFor={`${uid}-mealPlan`}>
                  <UtensilsCrossed className="bf-field-icon" aria-hidden="true" />
                  <span>Preferred Meal Plan</span>
                </label>
                <div className="bf-select-wrap">
                  <select
                    id={`${uid}-mealPlan`}
                    name="mealPlan"
                    className="bf-input"
                    value={formData.mealPlan}
                    onChange={handleChange}
                  >
                    <option value="Room Only">Room Only (EP)</option>
                    <option value="Room + Breakfast">Room + Breakfast (CP)</option>
                    <option value="Room + Breakfast + 1 Meal">Room + Breakfast + 1 Meal (MAP)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Occupancy Trio (Rooms, Adults, Kids) */}
              <div className="bf-trio">
                <div className="bf-field">
                  <label htmlFor={`${uid}-roomsCount`}>
                    <BedDouble className="bf-field-icon" aria-hidden="true" />
                    <span>Rooms</span>
                  </label>
                  <div className="bf-select-wrap">
                    <select
                      id={`${uid}-roomsCount`}
                      name="roomsCount"
                      className="bf-input"
                      value={formData.roomsCount}
                      onChange={handleChange}
                    >
                      <option value={1}>1 Room</option>
                      <option value={2}>2 Rooms</option>
                      <option value={3}>3 Rooms</option>
                      <option value={4}>4+ Rooms</option>
                    </select>
                  </div>
                </div>

                <div className="bf-field">
                  <label htmlFor={`${uid}-adults`}>
                    <User className="bf-field-icon" aria-hidden="true" />
                    <span>Adults</span>
                  </label>
                  <div className="bf-select-wrap">
                    <select
                      id={`${uid}-adults`}
                      name="adults"
                      className="bf-input"
                      value={formData.adults}
                      onChange={handleChange}
                    >
                      <option value={1}>1 Adult</option>
                      <option value={2}>2 Adults</option>
                      <option value={3}>3 Adults</option>
                      <option value={4}>4+ Adults</option>
                    </select>
                  </div>
                </div>

                <div className="bf-field">
                  <label htmlFor={`${uid}-children`}>
                    <Users className="bf-field-icon" aria-hidden="true" />
                    <span>Kids</span>
                  </label>
                  <div className="bf-select-wrap">
                    <select
                      id={`${uid}-children`}
                      name="children"
                      className="bf-input"
                      value={formData.children}
                      onChange={handleChange}
                    >
                      <option value={0}>0 Kids</option>
                      <option value={1}>1 Kid</option>
                      <option value={2}>2 Kids</option>
                      <option value={3}>3+ Kids</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step-2"
              custom={1}
              variants={reducedMotion ? {} : stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
              className="bf-step-content"
            >
              {/* Full Name */}
              <div className="bf-field">
                <label htmlFor={`${uid}-guestName`}>
                  <User className="bf-field-icon" aria-hidden="true" />
                  <span>Full Name <span className="bf-req">*</span></span>
                </label>
                <input
                  type="text"
                  id={`${uid}-guestName`}
                  name="guestName"
                  placeholder="e.g. Rahul Sharma"
                  required
                  className="bf-input"
                  value={formData.guestName}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div className="bf-field">
                <label htmlFor={`${uid}-phone`}>
                  <Phone className="bf-field-icon" aria-hidden="true" />
                  <span>Phone / WhatsApp <span className="bf-req">*</span></span>
                </label>
                <input
                  type="tel"
                  id={`${uid}-phone`}
                  name="phone"
                  placeholder="+91 98765 43210"
                  required
                  className="bf-input"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              {/* Email */}
              <div className="bf-field">
                <label htmlFor={`${uid}-email`}>
                  <Mail className="bf-field-icon" aria-hidden="true" />
                  <span>Email Address <span className="bf-req">*</span></span>
                </label>
                <input
                  type="email"
                  id={`${uid}-email`}
                  name="email"
                  placeholder="name@example.com"
                  required
                  className="bf-input"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>

              {/* Special Notes */}
              <div className="bf-field">
                <label htmlFor={`${uid}-specialRequests`}>
                  <FileText className="bf-field-icon" aria-hidden="true" />
                  <span>Special Notes</span>
                </label>
                <input
                  type="text"
                  id={`${uid}-specialRequests`}
                  name="specialRequests"
                  placeholder="Airport shuttle, early check-in..."
                  className="bf-input"
                  value={formData.specialRequests}
                  onChange={handleChange}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Actions: Step 1 = Continue CTA, Step 2 = Back + WhatsApp Submit ─── */}
      <div className="bf-actions">
        {step === 1 ? (
          <motion.button
            type="button"
            className="bf-cta-gold"
            onClick={handleNextStep}
            whileHover={reducedMotion ? {} : { scale: 1.015 }}
            whileTap={reducedMotion ? {} : { scale: 0.97 }}
          >
            <span>Continue to Guest Details</span>
            <span className="bf-cta-arrow">→</span>
          </motion.button>
        ) : (
          <div className="bf-step2-actions">
            <motion.button
              type="button"
              className="bf-cta-back"
              onClick={() => {
                setErrorMsg(null);
                setStep(1);
              }}
              whileTap={reducedMotion ? {} : { scale: 0.96 }}
            >
              ← Back
            </motion.button>
            <motion.button
              type="submit"
              className="bf-cta-gold bf-cta-submit"
              disabled={isLoading}
              whileHover={reducedMotion ? {} : { scale: 1.015 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
            >
              {isLoading ? (
                <span className="bf-spinner" />
              ) : (
                <>
                  <FaWhatsapp style={{ width: 19, height: 19 }} />
                  <span>Send Inquiry on WhatsApp</span>
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>

      {/* ─── Trust Indicators & Bottom Horizon Glow ─── */}
      {!isInline && (
        <div className="bf-trust-wrap">
          <div className="bf-trust">
            <div className="bf-trust-item">
              <BadgeCheck className="bf-trust-icon" aria-hidden="true" />
              <span>Best Rate<br />Guaranteed</span>
            </div>
            <div className="bf-trust-divider" aria-hidden="true" />
            <div className="bf-trust-item">
              <Shield className="bf-trust-icon" aria-hidden="true" />
              <span>Secure<br />Inquiry</span>
            </div>
            <div className="bf-trust-divider" aria-hidden="true" />
            <div className="bf-trust-item">
              <Zap className="bf-trust-icon" aria-hidden="true" />
              <span>Quick<br />Response</span>
            </div>
          </div>
          {/* Subtle curved golden horizon light */}
          <div className="bf-bottom-glow" aria-hidden="true" />
        </div>
      )}
    </form>
  );
}
