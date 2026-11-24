'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { luxuryEase } from './animations/variants';

interface HeaderProps {
  onOpenBooking?: (roomName?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isStuck, setIsStuck] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Dining', href: '/#experience' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Main Shawinn Fixed Navbar with smooth entrance */}
      <motion.header
        className={`navbar ${isStuck ? 'stuck' : ''}`}
        initial={reducedMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: luxuryEase }}
      >
        <div className="container">
          {/* Logo with vertical border divider (Shawinn style) */}
          <Link href="/" className="brand" aria-label="The Aurum Luxury Collection Home">
            <span className="brand-mark">A</span>
            <div className="brand-info">
              <span className="brand-title">THE AURUM</span>
              <span className="brand-sub">by Stay Pattern</span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Gold Underlines */}
          <nav className="nav-menu" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="nav-actions">
            <motion.button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="btn btn-outline-gold btn-sm nav-book-btn"
              aria-label="Book Your Stay"
              whileHover={reducedMotion ? {} : { scale: 1.03 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar style={{ width: 14, height: 14 }} />
              <span>Book Your Stay</span>
            </motion.button>

            <button
              className="nav-toggle"
              aria-controls="mobile-nav"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Half Popup Hamburger Menu with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Blurred Backdrop - clicking outside closes the half popup */}
            <motion.div
              className="mobile-nav-backdrop"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* Half Popup Container */}
            <motion.div
              className="mobile-nav-half-popup"
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: luxuryEase }}
            >
              {/* Navigation Links in a space-efficient 2-Column Grid */}
              <div className="popup-nav-grid">
                <Link
                  href="/"
                  className={`popup-nav-item ${pathname === '/' ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`popup-nav-item ${isActive ? 'active' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Half Popup Quick Action Footer */}
              <div className="popup-footer">
                <div className="popup-contact-row">
                  <a href={`tel:${HOTEL_INFO.contact.phone}`} className="popup-phone-link">
                    <FaPhoneAlt style={{ width: 13, height: 13, color: 'var(--gold)' }} />
                    <span>{HOTEL_INFO.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
