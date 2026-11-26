'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';
import AccordionContent from './animations/AccordionContent';
import { PAGE_FAQS, ALL_FAQS, FAQData } from '@/data/seo/faqsData';
import JsonLd from './JsonLd';

interface FAQSectionProps {
  page?: 'home' | 'rooms' | 'facilities' | 'experiences' | 'gallery' | 'contact' | 'policies';
  category?: FAQData['category'];
  title?: string;
  subtitle?: string;
  limit?: number;
}

export default function FAQSection({
  page = 'home',
  category,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about arriving, staying, and experiencing Kashmir at The Aurum Luxury Collection.',
  limit,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  let faqsList: FAQData[] = PAGE_FAQS[page] || PAGE_FAQS.home;

  if (category) {
    const byCategory = ALL_FAQS.filter((f) => f.category === category);
    if (byCategory.length > 0) {
      faqsList = byCategory;
    }
  }

  const displayFaqs = limit ? faqsList.slice(0, limit) : faqsList;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqJsonData = displayFaqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <section className="section-padding bg-white" id="faq">
      <JsonLd type="FAQPage" data={faqJsonData} />

      <div className="container wrap-narrow">
        <FadeIn direction="up" className="head">
          <span className="eyebrow eyebrow-wide">
            <HelpCircle style={{ width: 14, height: 14, display: 'inline', marginRight: 6 }} />
            Information & Guidance
          </span>
          <h2>
            {title.includes('Frequently') ? (
              <>
                Frequently Asked <span className="italic font-medium text-gold">Questions</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p>{subtitle}</p>
        </FadeIn>

        <FadeIn direction="up" delay={0.12} className="faq-accordion">
          {displayFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const numLabel = String(index + 1).padStart(2, '0');
            return (
              <div
                key={faq.id}
                className="faq-item"
                style={{
                  borderRadius: 16,
                  borderColor: isOpen ? 'var(--gold)' : 'var(--line)',
                  borderLeft: isOpen ? '3px solid var(--gold)' : '1px solid var(--line)',
                  boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left', flex: 1, minWidth: 0 }}>
                    <span
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: isOpen ? 'var(--gold-dark)' : 'var(--gold)',
                        flexShrink: 0,
                      }}
                    >
                      {numLabel}
                    </span>
                    <span style={{ fontWeight: 600, fontSize: '1.02rem', color: 'var(--navy)', lineHeight: 1.38 }}>
                      {faq.question}
                    </span>
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(198, 168, 105, 0.2)' : 'var(--beige)',
                      border: '1px solid rgba(198, 168, 105, 0.35)',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ChevronDown style={{ width: 18, height: 18, color: 'var(--gold-dark)' }} />
                  </motion.div>
                </button>

                <AccordionContent isOpen={isOpen} className="faq-content">
                  <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.94rem', paddingLeft: 34 }}>
                    {faq.answer}
                  </p>
                </AccordionContent>
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
