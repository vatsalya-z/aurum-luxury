'use client';

import React from 'react';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import AboutHotel from '@/components/AboutHotel';
import RoomsSection from '@/components/RoomsSection';
import Experiences from '@/components/Experiences';
import FacilitiesSection from '@/components/FacilitiesSection';
import BeyondHospitality from '@/components/BeyondHospitality';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import RelatedPages from '@/components/seo/RelatedPages';
import { useBooking } from '@/components/ClientLayout';

export default function HomePageClient() {
  const { openBooking } = useBooking();

  return (
    <>
      {/* 1. Hero Section (Full-Bleed with Slow Zoom & Booking Triggers) */}
      <Hero onOpenBooking={() => openBooking()} />

      {/* 2. Recognized Excellence / Trust Ribbon */}
      <TrustBar />

      {/* 3. About Section (2-Column with Floating Luxury Card & 3 Pillars) */}
      <AboutHotel />

      {/* 4. Elite Residences / Rooms & Suites */}
      <RoomsSection onEnquire={(roomName) => openBooking(roomName)} />

      {/* 5. Experience / Property Highlights (Dining & Adventures Visual Split Showcase) */}
      <BeyondHospitality />

      {/* 6. Exceptional Comforts (Verified Facilities Grid) */}
      <FacilitiesSection darkVariant={false} showFilters={false} redirectToFacilities={true} />

      {/* 7. Capturing Memories (Photo Gallery with Lightbox) */}
      <Gallery showFilters={false} redirectToGallery={true} />

      {/* 8. Destination / Srinagar Escapes (Experiences & Attractions) */}
      <Experiences showImages={true} layout="carousel-mobile" />

      {/* 10. Plan Your Escape (Coordinates, Contact & Interactive Map) */}
      <LocationSection />

      {/* 11. Trusted by Discerning Guests (TripAdvisor & Google Reviews Slider) */}
      <Reviews />

      {/* 12. Frequently Asked Questions (AEO & Answer Engines) */}
      <FAQSection limit={6} />

      {/* 13. Contextual Internal Linking */}
      <RelatedPages
        currentPath="/"
        title="Explore The Aurum Collection"
        subtitle="Navigate through our handcrafted chalets, dining options, and Srinagar excursions."
      />

      {/* 14. Final Call to Action / Direct Reservation Desk */}
      <CTASection onOpenBooking={() => openBooking()} />
    </>
  );
}
