'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Calendar,
  ArrowLeft,
  Home,
  Info,
  BedDouble,
  Sparkles,
  Images,
  Compass,
  MapPin,
  X,
  ChevronRight,
} from 'lucide-react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
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
  const router = useRouter();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile sheet on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll & listen for Escape when Bottom Sheet is open
  useEffect(() => {
    if (!isMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [isMenuOpen]);

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Contact', href: '/contact' },
  ];

  const sheetItems = [
    { name: 'Home', sub: 'Overview & Highlights', href: '/', icon: Home },
    { name: 'About Us', sub: 'Heritage & Brein Hills Story', href: '/about', icon: Info },
    { name: 'Rooms & Chalets', sub: 'Cottages & Dal View Suites', href: '/rooms', icon: BedDouble },
    { name: 'Facilities & Dining', sub: 'Wazwan Kitchen & Comforts', href: '/facilities', icon: Sparkles },
    { name: 'Photo Gallery', sub: 'Authentic Property Views', href: '/gallery', icon: Images },
    { name: 'Srinagar Experiences', sub: 'Dal Lake & Mughal Gardens', href: '/experiences', icon: Compass },
    { name: 'Contact & Map', sub: 'Directions & 24/7 Desk', href: '/contact', icon: MapPin },
  ];

  const waHref = `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hello, I would like to enquire about staying at The Aurum Luxury Collection in Srinagar.'
  )}`;

  const showBack = pathname !== '/';

  return (
    <>
      <motion.header
        className={`navbar ${isStuck ? 'stuck' : ''}`}
        initial={reducedMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: luxuryEase }}
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
            {showBack && (
              <button
                type="button"
                onClick={handleBack}
                className="nav-back-btn"
                aria-label="Go back"
              >
                <ArrowLeft style={{ width: 18, height: 18 }} />
              </button>
            )}

            <Link href="/" className="brand" aria-label="The Aurum Luxury Collection Home">
              <span className="brand-mark brand-mark--luxe">A</span>
              <div className="brand-info">
                <span className="brand-title">THE AURUM</span>
                <span className="brand-sub">by Stay Pattern</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links with Animated Champagne-Gold Indicator */}
          <nav className="nav-menu" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === '/rooms' && pathname?.startsWith('/rooms/'));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId={reducedMotion ? undefined : 'desktopNavIndicator'}
                      className="nav-link-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="nav-actions">
            <motion.button
              type="button"
              onClick={() => onOpenBooking && onOpenBooking()}
              className="btn btn-gold btn-sm nav-book-btn"
              aria-label="Book Your Stay"
              whileHover={reducedMotion ? {} : { scale: 1.03 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar style={{ width: 14, height: 14 }} />
              <span>Book Your Stay</span>
            </motion.button>

            <button
              type="button"
              className="nav-toggle"
              aria-controls="mobile-nav"
              aria-expanded={isMenuOpen}
              aria-label="Open navigation menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
            </button>
          </div>
        </div>
        <div className="navbar-gold-hairline" aria-hidden="true" />
      </motion.header>

      {/* Mobile Bottom Sheet Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="mobile-nav-backdrop"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            />

            <motion.div
              className="mobile-bottom-sheet"
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
              initial={reducedMotion ? { opacity: 0 } : { y: '100%' }}
              animate={{ y: 0, opacity: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { y: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 340 }}
            >
              <div className="sheet-drag-handle" aria-hidden="true" />

              {/* Compact Hotel Summary Card */}
              <div className="sheet-header-card">
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <strong style={{ color: '#fff', fontFamily: 'var(--serif)', fontSize: '1.15rem', letterSpacing: '0.02em' }}>
                      THE AURUM
                    </strong>
                    <span
                      style={{
                        fontSize: '0.66rem',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: 999,
                        background: 'rgba(198, 168, 105, 0.2)',
                        color: 'var(--gold-soft)',
                        border: '1px solid rgba(198, 168, 105, 0.4)',
                      }}
                    >
                      {HOTEL_INFO.googleRating} ★ Google
                    </span>
                  </div>
                  <span style={{ display: 'block', fontSize: '0.76rem', color: '#9ba8bc', marginTop: 2 }}>
                    Brein Hills, Srinagar · Check-in {HOTEL_INFO.checkIn}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="sheet-close-btn"
                  aria-label="Close navigation menu"
                >
                  <X style={{ width: 18, height: 18 }} />
                </button>
              </div>

              {/* Navigation Rows */}
              <nav className="sheet-nav-list" aria-label="Mobile menu links">
                {sheetItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive =
                    pathname === item.href ||
                    (item.href === '/rooms' && pathname?.startsWith('/rooms/'));
                  return (
                    <motion.div
                      key={item.href}
                      initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.24, delay: idx * 0.03, ease: luxuryEase }}
                    >
                      <Link
                        href={item.href}
                        className={`sheet-nav-row ${isActive ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="sheet-nav-icon">
                          <Icon style={{ width: 18, height: 18 }} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <strong style={{ display: 'block', fontSize: '0.96rem', fontFamily: 'var(--serif)', fontWeight: 600, color: '#fff' }}>
                            {item.name}
                          </strong>
                          <span style={{ display: 'block', fontSize: '0.74rem', color: '#94a3b8' }}>
                            {item.sub}
                          </span>
                        </div>
                        <ChevronRight style={{ width: 16, height: 16, color: isActive ? 'var(--gold)' : '#64748b', flexShrink: 0 }} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="sheet-legal-strip">
                <Link href="/privacy-policy" onClick={() => setIsMenuOpen(false)}>
                  Privacy Policy
                </Link>
                <span aria-hidden="true">·</span>
                <Link href="/terms-conditions" onClick={() => setIsMenuOpen(false)}>
                  Terms & Conditions
                </Link>
              </div>

              {/* Bottom Sticky Sheet CTA Bar */}
              <div className="sheet-cta-bar">
                <a
                  href={`tel:${HOTEL_INFO.contact.phone}`}
                  className="btn btn-outline-white btn-sm"
                  style={{ minWidth: 52, padding: '0 14px' }}
                  aria-label="Call hotel"
                >
                  <FaPhoneAlt style={{ width: 15, height: 15, color: 'var(--gold)' }} />
                </a>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa btn-sm"
                  style={{ minWidth: 52, padding: '0 14px' }}
                  aria-label="WhatsApp hotel"
                >
                  <FaWhatsapp style={{ width: 18, height: 18 }} />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenBooking && onOpenBooking();
                  }}
                  className="btn btn-gold btn-sm"
                  style={{ width: '100%' }}
                >
                  <Calendar style={{ width: 15, height: 15 }} />
                  <span>Reserve Your Stay</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
