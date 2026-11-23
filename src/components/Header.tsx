'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';
import { HOTEL_INFO } from '@/data/hotelInfo';

interface HeaderProps {
  onOpenBooking?: (roomName?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isStuck, setIsStuck] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
    { name: 'About', href: '/#about' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Dining', href: '/#experience' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      

      {/* Main Shawinn Fixed Navbar */}
      <header className={`navbar ${isStuck ? 'stuck' : ''}`}>
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
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="btn btn-outline-gold btn-sm"
              aria-label="Book Your Stay"
            >
              <Calendar style={{ width: 14, height: 14 }} />
              <span>Book Your Stay</span>
            </button>

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
      </header>

      {/* Mobile Half Popup Hamburger Menu */}
      {isMenuOpen && (
        <>
          {/* Blurred Backdrop - clicking outside closes the half popup */}
          <div
            className="mobile-nav-backdrop"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Half Popup Container */}
          <div
            className="mobile-nav-half-popup"
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Header inside Half Popup */}
            <div className="popup-top-bar">
              <div className="popup-brand">
                <span className="brand-mark" style={{ width: 28, height: 28, fontSize: '0.9rem' }}>A</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', color: '#fff' }}>THE AURUM</span>
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase' }}>by Stay Pattern</span>
                </div>
              </div>
              <button
                type="button"
                className="popup-close-btn"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <X style={{ width: 20, height: 20 }} />
              </button>
            </div>

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
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="btn btn-gold btn-sm"
                style={{ width: '100%', padding: '0.75rem 1rem' }}
              >
                <Calendar style={{ width: 14, height: 14 }} />
                <span>Book Your Stay</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
