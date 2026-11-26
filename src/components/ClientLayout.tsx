'use client';

import React, { useState, createContext, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';
import FloatingActions from './FloatingActions';
import MobileStickyBar from './MobileStickyBar';
import PageTransition from './animations/PageTransition';

export interface BookingOptions {
  roomName?: string;
  checkIn?: string;
  checkOut?: string;
}

interface BookingContextType {
  openBooking: (roomOrOptions?: string | BookingOptions) => void;
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
  const [selectedCheckIn, setSelectedCheckIn] = useState<string | undefined>(undefined);
  const [selectedCheckOut, setSelectedCheckOut] = useState<string | undefined>(undefined);

  const openBooking = (roomOrOptions?: string | BookingOptions) => {
    if (typeof roomOrOptions === 'string') {
      setSelectedRoom(roomOrOptions);
      setSelectedCheckIn(undefined);
      setSelectedCheckOut(undefined);
    } else if (roomOrOptions && typeof roomOrOptions === 'object') {
      if (roomOrOptions.roomName) setSelectedRoom(roomOrOptions.roomName);
      setSelectedCheckIn(roomOrOptions.checkIn);
      setSelectedCheckOut(roomOrOptions.checkOut);
    } else {
      setSelectedCheckIn(undefined);
      setSelectedCheckOut(undefined);
    }
    setIsModalOpen(true);
  };

  const closeBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      <Header onOpenBooking={(roomName) => openBooking(roomName)} />
      <main id="main-content">
        <PageTransition>{children}</PageTransition>
      </main>

      {/* Mobile Sticky Bottom Bar (Book Your Stay, WhatsApp, Call) */}
      <MobileStickyBar onOpenBooking={() => openBooking()} />

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        onClose={closeBooking}
        initialRoom={selectedRoom}
        initialCheckIn={selectedCheckIn}
        initialCheckOut={selectedCheckOut}
      />

      {/* Floating Actions on Desktop */}
      <FloatingActions onOpenBooking={() => openBooking()} />
    </BookingContext.Provider>
  );
}
