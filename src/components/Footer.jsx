import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

import Logo from '../assets/Trans-logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: '#000',
      borderTop: '1px solid rgba(252,163,17,0.15)',
      padding: '80px clamp(16px, 6vw, 40px) 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background text */}
      <div className='logo-wrapper'>
        <img
          src={Logo}
          alt="Global Voyager Brand Logo"
          style={{
            height: 'clamp(36px, 12vw, 200px)',
            width: 'auto',
            objectFit: 'contain',
            borderRadius: '6px',
            filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))',
          }}
        />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 60,
          marginBottom: 60,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <img
                src={Logo}
                alt="Global Voyager Brand Logo"
                style={{
                  height: 44,
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))',
                }}
              />
              {/* <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 800, color: '#FFFFFF' }}>
                GLOBAL<span style={{ color: '#FCA311' }}>VOYAGER</span>
              </span> */}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, maxWidth: 240, fontFamily: 'DM Sans, sans-serif' }}>
              Expert guidance for your study abroad journey, travel experiences in India, and personalized consultations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: '#FCA311', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Services</h4>
            {[
              { label: 'Study Abroad', href: '/study-abroad' },
              { label: 'Visit India', href: '/visit-india' },
              { label: 'Nadijodtheshm Consultation', href: '/nadijodtheshm' }
            ].map(item => (
              <div key={item.label} style={{ marginBottom: 12 }}>
                <Link to={item.href} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontFamily: 'DM Sans, sans-serif', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#FCA311'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >
                  <ArrowUpRight size={12} />{item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: '#FCA311', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Explore</h4>
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/blog', 'Blog'],
              ['/gallery', 'Photo Gallery'],
              ['/video-gallery', 'Video Gallery'],
              ['/faq', 'FAQ']
            ].map(([href, label]) => (
              <div key={href} style={{ marginBottom: 12 }}>
                <Link to={href} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontFamily: 'DM Sans, sans-serif', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#FCA311'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >
                  <ArrowUpRight size={12} />{label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: '#FCA311', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Contact</h4>
            {[
              { icon: <Phone size={14} />, label: '+91 00000 00000' },
              { icon: <Mail size={14} />, label: 'info@globalvoyager.com' },
              { icon: <MessageCircle size={14} />, label: 'WhatsApp Chat' },
            ].map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, color: 'rgba(255,255,255,0.6)', fontSize: 14, fontFamily: 'DM Sans, sans-serif' }}>
                <span style={{ color: '#FCA311' }}>{icon}</span>{label}
              </div>
            ))}
            <a
              href="https://wa.me/910000000000?text=Hi, I'd like to know more about your services."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: 12, display: 'inline-flex', fontSize: 12, padding: '10px 20px' }}
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, fontFamily: 'DM Sans, sans-serif' }}>
            © {year} GlobalVoyager. All rights reserved.&nbsp;|&nbsp;
            <a href="https://iam-naveen.vercel.app/" target="_self" rel="noopener noreferrer" style={{ color: '#FCA311' }}>
              Designed & Developed by Mack's Studio
            </a>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, fontFamily: 'DM Sans, sans-serif' }}>
            Trusted Guidance • Personalized Support • Global Opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}
