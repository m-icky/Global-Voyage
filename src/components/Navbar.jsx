import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Logo from '../assets/Trans-logo.png';

const links = [
  { href: '/', label: 'Home' },
  { href: '/study-abroad', label: 'Study Abroad' },
  { href: '/visit-india', label: 'Visit India' },
  { href: '/nadijodtheshm', label: 'Consultation' },
  { href: '/blog', label: 'Blog' },
  { label: 'Gallery', isDropdown: true, subItems: [
    { href: '/gallery', label: 'Photo Gallery' },
    { href: '/video-gallery', label: 'Video Gallery' }
  ]},
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 'var(--nav-top)',
          left: 'var(--nav-left)',
          right: 'var(--nav-right)',
          zIndex: 9000,
          padding: 'var(--nav-padding)',
          background: scrolled ? 'rgba(20, 33, 61, 0.45)' : 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(24px) saturate(160%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '5rem',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s cubic-bezier(0.87,0,0.13,1)',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1.8vw, 14px)', flexShrink: 0 }}>
          <img
            src={Logo}
            alt="Global Voyager Brand Logo"
            style={{
              height: 'clamp(36px, 4.2vw, 48px)',
              width: 'auto',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))',
            }}
          />
          {/* <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(13px, 4vw, 18px)', fontWeight: 800, letterSpacing: 0.5, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
            GLOBAL<span style={{ color: '#FCA311' }}>VOYAGER</span>
          </span> */}
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {links.slice(0, 6).map(link => {
            if (link.isDropdown) {
              const isActive = location.pathname === '/gallery' || location.pathname === '/video-gallery';
              return (
                <div
                  key={link.label}
                  className="nav-dropdown-parent"
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    padding: '8px 14px',
                    cursor: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: 0.5,
                      color: isActive ? '#FCA311' : 'rgba(255,255,255,0.8)',
                      transition: 'color 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    {link.label}
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ marginTop: 1, stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                      <path d="M1 1l3 3 3-3"/>
                    </svg>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)',
                        width: 4, height: 4, borderRadius: '50%', background: '#FCA311',
                      }}
                    />
                  )}
                  {/* Dropdown Menu */}
                  <div
                    className="nav-dropdown-menu"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(10px)',
                      background: 'rgba(20, 33, 61, 0.85)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '12px 0',
                      minWidth: 160,
                      display: 'flex',
                      flexDirection: 'column',
                      zIndex: 10000,
                      opacity: 0,
                      pointerEvents: 'none',
                      transition: 'all 0.3s cubic-bezier(0.87,0,0.13,1)',
                      clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
                    }}
                  >
                    {link.subItems.map(sub => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        style={{
                          padding: '8px 20px',
                          fontFamily: 'Syne, sans-serif',
                          fontSize: 12,
                          fontWeight: 600,
                          color: location.pathname === sub.href ? '#FCA311' : '#FFFFFF',
                          transition: 'all 0.2s',
                          textAlign: 'left',
                          display: 'block',
                          cursor: 'none',
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  padding: '8px 14px',
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  color: location.pathname === link.href ? '#FCA311' : 'rgba(255,255,255,0.8)',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute', bottom: 2, left: '50%', translateX: '-50%',
                      width: 4, height: 4, borderRadius: '50%', background: '#FCA311',
                    }}
                  />
                )}
              </Link>
            );
          })}
          <Link to="/contact" className="btn-primary" style={{ marginLeft: 8, padding: '10px 24px', fontSize: 13 }}>
            <span>Start Journey</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            color: '#FCA311', padding: 8,
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 8999,
              background: '#14213D', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 28,
            }}
          >
            {links.map((link, i) => {
              if (link.isDropdown) {
                const isSubActive = location.pathname === '/gallery' || location.pathname === '/video-gallery';
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
                  >
                    <span
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: 'clamp(24px, 4vw, 36px)',
                        fontWeight: 800,
                        color: isSubActive ? '#FCA311' : '#FFFFFF',
                        letterSpacing: 1,
                        opacity: 0.4,
                      }}
                    >
                      {link.label}
                    </span>
                    <div style={{ display: 'flex', gap: 20 }}>
                      {link.subItems.map(sub => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          style={{
                            fontFamily: 'Syne, sans-serif',
                            fontSize: 'clamp(15px, 2.8vw, 20px)',
                            fontWeight: 700,
                            color: location.pathname === sub.href ? '#FCA311' : 'rgba(255,255,255,0.7)',
                          }}
                        >
                          {sub.label.split(' ')[0]} {/* "Photo" or "Video" */}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: 'clamp(24px, 4vw, 36px)',
                      fontWeight: 800,
                      color: location.pathname === link.href ? '#FCA311' : '#FFFFFF',
                      letterSpacing: 1,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        :root {
          --nav-top: ${scrolled ? '16px' : '24px'};
          --nav-left: ${scrolled ? '40px' : '24px'};
          --nav-right: ${scrolled ? '40px' : '24px'};
          --nav-padding: ${scrolled ? '12px 32px' : '18px 40px'};
          --nav-radius: ${scrolled ? '16px' : '24px'};
        }
        @media (max-width: 1024px) {
          :root {
            --nav-top: ${scrolled ? '10px' : '12px'};
            --nav-left: ${scrolled ? '12px' : '12px'};
            --nav-right: ${scrolled ? '12px' : '12px'};
            --nav-padding: ${scrolled ? '10px 16px' : '12px 16px'};
            --nav-radius: ${scrolled ? '12px' : '16px'};
          }
          .mobile-menu-btn { display: flex !important; }
          nav > div:not(.mobile-menu-btn) { display: none !important; }
        }
        .nav-dropdown-parent:hover .nav-dropdown-menu {
          opacity: 1 !important;
          pointer-events: auto !important;
          transform: translateX(-50%) translateY(0) !important;
        }
        .nav-dropdown-menu Link:hover {
          background: rgba(252, 163, 17, 0.1) !important;
          color: #FCA311 !important;
        }
      `}</style>
    </>
  );
}
