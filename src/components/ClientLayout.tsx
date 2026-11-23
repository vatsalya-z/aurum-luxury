'use client';

import React, { useState, createContext, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';
import FloatingActions from './FloatingActions';
import FloatingBookingBar from './FloatingBookingBar';
import MobileStickyBar from './MobileStickyBar';
import PageTransition from './animations/PageTransition';

interface BookingContextType {
  openBooking: (roomName?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({
  openBooking: () => {},
  closeBooking: () => {},
});

export const useBooking = () => useContext(BookingContext);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string>('Luxury Bedroom Cottage');

  const openBooking = (roomName?: string) => {
    if (roomName) setSelectedRoom(roomName);
    setIsModalOpen(true);
  };

  const closeBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      <Header onOpenBooking={openBooking} />
      <main id="main-content">
        <PageTransition>{children}</PageTransition>
      </main>

      {/* Shawinn-style Fixed Bottom Quick Booking Bar (Desktop only) */}
      <FloatingBookingBar onOpenBooking={openBooking} />

      {/* Mobile Sticky Bottom Bar (3 buttons: Call Us, WhatsApp, Book Now) */}
      <MobileStickyBar onOpenBooking={openBooking} />

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        onClose={closeBooking}
        initialRoom={selectedRoom}
      />

      {/* Floating Actions on Desktop & Mobile */}
      <FloatingActions onOpenBooking={() => openBooking()} />
    </BookingContext.Provider>
  );
}
