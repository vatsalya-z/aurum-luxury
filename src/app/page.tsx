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
import FAQSection from '@/components/FAQSection';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import { useBooking } from '@/components/ClientLayout';

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <>
      {/* 1. Hero Section (Shawinn Full-Bleed with Slow Zoom) */}
      <Hero onOpenBooking={() => openBooking()} />

      {/* 2. Recognized Excellence / Trust Ribbon */}
      <TrustBar />

      {/* 3. About Section (Shawinn 2-Column with Floating Luxury Card & 3 Pillars) */}
      <AboutHotel />

      {/* 4. Elite Residences / Rooms & Suites */}
      <RoomsSection onEnquire={(roomName) => openBooking(roomName)} />

      {/* 5. Curated Srinagar Escapes (Experiences & Attractions) */}
      <Experiences />

      {/* 6. Exceptional Comforts (Verified Facilities Grid) */}
      <FacilitiesSection darkVariant={false} showFilters={false} redirectToFacilities={true} />

      {/* 7. Beyond Hospitality (Dining & Adventures Visual Split Showcase) */}
      <BeyondHospitality />

      {/* 8. Capturing Memories (Photo Gallery with Lightbox) */}
      <Gallery showFilters={false} redirectToGallery={true} />

      {/* 9. Trusted by Discerning Guests (Google Reviews & Rating) */}
      <Reviews />

      {/* 10. Frequently Asked Questions (Shawinn Accordion) */}
      <FAQSection />

      {/* 11. Plan Your Escape (Coordinates, Contact & Map) */}
      <LocationSection />

      {/* 12. Final Call to Action */}
      <CTASection onOpenBooking={() => openBooking()} />
    </>
  );
}
