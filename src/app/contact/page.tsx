import React from 'react';
import { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { KEYWORD_MAP } from '@/data/seo/keywordMap';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Us & Location | The Aurum Luxury Collection Srinagar',
  description:
    'Contact The Aurum Luxury Collection in 23A Brein Hills, Astanpora, Srinagar. Find directions, phone numbers, WhatsApp desk, and send direct stay enquiries.',
  path: '/contact',
  keywords: KEYWORD_MAP.contact.secondaryKeywords,
  image: '/images/hero/aurum-contact-hero-desktop.jpg',
});

export default function ContactPage() {
  return <ContactPageContent />;
}
