import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function AnimatedCounter({ end, duration = 1800, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let startTime = null;
          
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration]);

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { value: 500, suffix: '+', label: 'Students Guided', desc: 'Towards top international universities' },
    { value: 30, suffix: '+', label: 'Countries', desc: 'Globally trusted destinations' },
    { value: 80, suffix: '+', label: 'India Destinations', desc: 'Curated travel itineraries' },
    { value: 1000, suffix: '+', label: 'Consultations', desc: 'Completed with clarity' },
  ];

  return (
    <section style={{
      background: '#0a0f1d',
      padding: 'clamp(60px, 8vw, 100px) clamp(16px, 6vw, 100px)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(252, 163, 17, 0.15)',
      borderBottom: '1px solid rgba(252, 163, 17, 0.15)',
    }}>
      {/* Decorative blurred background lights */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: '60%',
        background: 'radial-gradient(circle, rgba(252, 163, 17, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="stats-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: 'rgba(20, 33, 61, 0.4)',
                backdropFilter: 'blur(10px)',
                padding: '40px 24px',
                textAlign: 'center',
                clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
                border: '1px solid rgba(252, 163, 17, 0.15)',
                transition: 'border-color 0.3s, background 0.3s, transform 0.3s',
              }}
              className="stat-card"
            >
              {/* Animated big counter */}
              <div style={{
                fontFamily: 'var(--font-display, Syne, sans-serif)',
                fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
                fontWeight: 900,
                color: '#FCA311',
                lineHeight: 1,
                marginBottom: 12,
                letterSpacing: -1,
                textShadow: '0 4px 12px rgba(252, 163, 17, 0.2)',
              }}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>

              {/* Subdued Divider Line */}
              <div style={{
                width: 32,
                height: 2,
                background: '#FCA311',
                margin: '12px auto 16px',
                opacity: 0.8,
              }} />

              {/* Stat Title */}
              <h4 style={{
                fontFamily: 'var(--font-display, Syne, sans-serif)',
                fontSize: 14,
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>
                {stat.label}
              </h4>

              {/* Stat subtitle description */}
              <p style={{
                fontFamily: 'var(--font-body, DM Sans, sans-serif)',
                fontSize: 13,
                color: 'rgba(255, 255, 255, 0.5)',
                lineHeight: 1.5,
              }}>
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 580px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        .stat-card:hover {
          border-color: rgba(252, 163, 17, 0.5) !important;
          background: rgba(20, 33, 61, 0.7) !important;
        }
      `}</style>
    </section>
  );
}
