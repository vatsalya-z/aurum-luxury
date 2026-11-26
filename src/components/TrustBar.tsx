'use client';

import React from 'react';
import { Award, Star, ShieldCheck, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';
import FadeIn from './animations/FadeIn';
import FloatingBookingBar from './FloatingBookingBar';
import { useBooking } from './ClientLayout';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function TrustBar() {
  const { openBooking } = useBooking();
  const reducedMotion = useReducedMotion();

  const credentials = [
    {
      icon: <Award style={{ width: 20, height: 20 }} />,
      title: '4-Star Boutique Hotel',
      subtitle: 'Brein Hills · Astanpora',
    },
    {
      icon: <Star style={{ width: 20, height: 20 }} />,
      title: '4.8 / 5 on Google',
      subtitle: '32 Verified Reviews',
    },
    {
      icon: <ShieldCheck style={{ width: 20, height: 20 }} />,
      title: 'Stay Pattern',
      subtitle: 'Kashmiri Hospitality',
    },
    {
      icon: <Mountain style={{ width: 20, height: 20 }} />,
      title: 'Dal Lake Vantage',
      subtitle: 'Pine & Ridge Views',
    },
  ];

  return (
    <section className="trust-bar" aria-label="Hotel Credentials and Ratings">
      <div className="container trust-bar-container">
        <ScrollReveal className="trust-grid" staggerChildren={0.08}>
          {credentials.map((c, i) => (
            <ScrollRevealItem key={i} direction="up" distance={16}>
              <motion.div
                className="trust-item"
                whileHover={reducedMotion ? {} : { y: -2 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="icon-circle">{c.icon}</div>
                <div style={{ minWidth: 0 }}>
                  <strong>{c.title}</strong>
                  <span>{c.subtitle}</span>
                </div>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        {/* Attached Quick Booking Console (Desktop & Tablet) */}
        <FadeIn direction="up" delay={0.15} className="trust-booking-wrapper">
          <FloatingBookingBar onOpenBooking={openBooking} />
        </FadeIn>
      </div>
    </section>
  );
}
