'use client';

import React, { useState, createContext, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';
import FloatingActions from './FloatingActions';
import FloatingBookingBar from './FloatingBookingBar';
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

      {/* Shawinn-style Fixed Bottom Quick Booking Bar (Fully Responsive) */}
      <FloatingBookingBar onOpenBooking={openBooking} />

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
