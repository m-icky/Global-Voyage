import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedCounter } from './StatsSection';

const words = ['Trusted Guidance', '•', 'Personalized Support', '•', 'Global Opportunities', '•'];

export function TrustStrip() {
  return (
    <div style={{
      padding: '28px 0',
      background: '#FCA311',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: 40, whiteSpace: 'nowrap', width: 'max-content' }}
      >
        {[...words, ...words, ...words].map((word, i) => (
          <span key={i} style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: word === '•' ? 'rgba(20,33,61,0.4)' : '#14213D',
          }}>
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function UniqueSection() {
  const [inViewRef, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.2]);

  const setRefs = (node) => {
    inViewRef(node);
    scrollRef.current = node;
  };

  return (
    <section
      ref={setRefs}
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)',
        background: '#14213D',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div style={{
        position: 'absolute', right: -100, top: -100,
        width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(252,163,17,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: -60, bottom: -60,
        width: 300, height: 300,
        border: '1px solid rgba(252,163,17,0.1)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div className="unique-section-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Unique Guidance
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title"
            style={{ marginBottom: 24 }}
          >
            A Unique Approach to <span>Personal Guidance</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 'clamp(14px,1.2vw,17px)',
              lineHeight: 1.8,
              fontFamily: 'DM Sans, sans-serif',
              marginBottom: 16,
            }}
          >
            Nadijodtheshm is a traditional consultation method that offers personalized insights to help individuals make important life decisions with greater clarity.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 'clamp(13px,1vw,15px)',
              lineHeight: 1.8,
              fontFamily: 'DM Sans, sans-serif',
              marginBottom: 36,
            }}
          >
            It combines time-tested practices with a structured approach to understanding personal situations and guiding next steps.
          </motion.p>
          <motion.a
            href="/nadijodtheshm"
            className="btn-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span>Book Appointment</span>
          </motion.a>
        </div>

        {/* Right - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            width: '100%',
            aspectRatio: '4/5',
            clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
            overflow: 'hidden',
            background: '#000',
          }}>
            <motion.img
              src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&q=80"
              alt="Nadijodtheshm Consultation"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.85,
                scale: imageScale,
              }}
            />
          </div>

          {/* Floating card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', bottom: '10%', left: 'var(--badge-left, -10%)',
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(252,163,17,0.25)',
              padding: '20px 24px',
              clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
              minWidth: 200,
            }}
          >
            <div style={{ fontSize: 28, fontFamily: 'Syne, sans-serif', fontWeight: 900, color: '#FCA311' }}>
              <AnimatedCounter end={1000} suffix="+" />
            </div>
            <div style={{ fontSize: 11, fontFamily: 'Syne, sans-serif', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>
              Consultations Completed
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        :root {
          --badge-left: -10%;
        }
        @media (max-width: 768px) {
          :root {
            --badge-left: 16px;
          }
          .unique-section-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
