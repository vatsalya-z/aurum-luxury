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
      icon: <Award style={{ width: 22, height: 22 }} />,
      title: '4-Star Boutique Hotel',
      subtitle: 'Brein Hills · Astanpora',
    },
    {
      icon: <Star style={{ width: 22, height: 22 }} />,
      title: '4.8 / 5 on Google Hotels',
      subtitle: '32 Verified Guest Reviews',
    },
    {
      icon: <ShieldCheck style={{ width: 22, height: 22 }} />,
      title: 'Managed by Stay Pattern',
      subtitle: 'Curated Kashmiri Hospitality',
    },
    {
      icon: <Mountain style={{ width: 22, height: 22 }} />,
      title: 'Scenic Dal Lake Vantage',
      subtitle: 'Pine Slopes & Mountain Ridges',
    },
  ];

  return (
    <section className="trust-bar" aria-label="Hotel Credentials and Ratings">
      <div className="container trust-bar-container">
        <ScrollReveal className="trust-grid" staggerChildren={0.1}>
          {credentials.map((c, i) => (
            <ScrollRevealItem key={i} direction="up" distance={20}>
              <motion.div
                className="trust-item"
                whileHover={reducedMotion ? {} : { y: -3, scale: 1.02 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="icon-circle">{c.icon}</div>
                <div>
                  <strong>{c.title}</strong>
                  <span>{c.subtitle}</span>
                </div>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        {/* Attached Quick Booking Search Bar with Scroll Reveal */}
        <FadeIn direction="up" delay={0.2} className="trust-booking-wrapper">
          <FloatingBookingBar onOpenBooking={openBooking} />
        </FadeIn>
      </div>
    </section>
  );
}
