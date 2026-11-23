'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelInfo';
import FadeIn from './animations/FadeIn';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'What is the distance from Dal Lake and Mughal Gardens?',
    a: 'The Aurum Luxury Collection is located in Brein Hills, Astanpora, approximately 4.5 km (a 10–12 minute drive) from the main Boulevard of Dal Lake. Celebrated Mughal heritage attractions such as Nishat Bagh (5.2 km), Indira Gandhi Tulip Garden (6 km), and Pari Mahal (8.5 km) are all within a quick 15–20 minute drive.',
  },
  {
    q: 'Do you offer airport transfer services?',
    a: 'Yes, we provide comfortable private airport transfers between Sheikh ul-Alam International Airport Srinagar (SXR) and the property. Transfers can be arranged via our concierge desk prior to your arrival for a nominal additional charge.',
  },
  {
    q: 'Are rooms equipped with heating and air conditioning?',
    a: 'Yes, all our luxury cottages and chalets are equipped with individual climate control heating and air-conditioning units to guarantee cozy warmth during cooler mountain months and crisp cooling in the summer.',
  },
  {
    q: 'What are the check-in and check-out timings?',
    a: 'Standard check-in begins at 2:00 PM and check-out is expected by 12:00 PM. Early check-in or extended late check-out is subject to cottage availability on the travel date.',
  },
  {
    q: 'Do you have an on-site restaurant and room service?',
    a: 'Yes, our on-site restaurant serves authentic Kashmiri Wazwan delicacies, North Indian fare, pure vegetarian options, and halal preparations. 24-hour in-room dining is also available directly to your cottage or chalet terrace.',
  },
  {
    q: 'Why are room rates displayed as "Contact us for current rates"?',
    a: 'We operate a direct booking model to protect guests from inflated OTA commissions and ensure you receive our most accurate seasonal rates, promotional inclusions, and custom meal-plan quotes directly from our reservations desk.',
  },
  {
    q: 'Are swimming pools or spa facilities available on site?',
    a: 'In keeping with our intimate mountain sanctuary environment in Brein Hills, we do not feature a swimming pool, fitness gym, or full-service spa. Our focus is on pristine accommodation, peaceful hillside scenery, and personalized hospitality.',
  },
  {
    q: 'How do I open the property coordinates on Google Maps?',
    a: `Our physical address is 23A, Brein Hills, Astanpora, Srinagar, Jammu & Kashmir 191121. You can use the "Get Directions" buttons throughout our website to open the route directly in Google Maps navigation.`,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container wrap-narrow">
        <FadeIn direction="up" className="head">
          <span className="eyebrow eyebrow-wide">
            Information & Guidance
          </span>
          <h2>
            Frequently Asked <span className="italic font-medium text-gold">Questions</span>
          </h2>
          <p>
            Everything you need to know about arriving, staying, and experiencing Kashmir at The Aurum Luxury Collection.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.15} className="faq-accordion">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown style={{ width: 20, height: 20 }} />
                </button>

                {isOpen && (
                  <div className="faq-content">
                    <p style={{ margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
