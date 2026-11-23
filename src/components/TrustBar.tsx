'use client';

import React from 'react';
import { Award, Star, ShieldCheck, Mountain } from 'lucide-react';
import { ScrollReveal, ScrollRevealItem } from './animations/ScrollReveal';

export default function TrustBar() {
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
      <div className="container">
        <ScrollReveal className="trust-grid" staggerChildren={0.1}>
          {credentials.map((c, i) => (
            <ScrollRevealItem key={i} className="trust-item">
              <div className="icon-circle">{c.icon}</div>
              <div>
                <strong>{c.title}</strong>
                <span>{c.subtitle}</span>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
