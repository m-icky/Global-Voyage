import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTASection({ whatsAppText }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const waMsg = whatsAppText || "Hi, I'd like to know more about your services.";

  return (
    <section
      ref={ref}
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient blob */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '60%', height: '80%',
        background: 'radial-gradient(ellipse, rgba(252,163,17,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Corner decorations */}
      {[0, 1, 2, 3].map(i => (
        <div key={i} style={{
          position: 'absolute',
          top: i < 2 ? 40 : 'auto',
          bottom: i >= 2 ? 40 : 'auto',
          left: i % 2 === 0 ? 40 : 'auto',
          right: i % 2 === 1 ? 40 : 'auto',
          width: 40, height: 40,
          borderTop: i < 2 ? '2px solid rgba(252,163,17,0.4)' : 'none',
          borderBottom: i >= 2 ? '2px solid rgba(252,163,17,0.4)' : 'none',
          borderLeft: i % 2 === 0 ? '2px solid rgba(252,163,17,0.4)' : 'none',
          borderRight: i % 2 === 1 ? '2px solid rgba(252,163,17,0.4)' : 'none',
        }} />
      ))}

      <div style={{
        maxWidth: 800, margin: '0 auto',
        textAlign: 'center', position: 'relative', zIndex: 1,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-label"
          style={{ display: 'block', textAlign: 'center', marginBottom: 20 }}
        >
          Ready to Begin?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(2.5rem,6vw,5.5rem)',
            fontWeight: 900,
            lineHeight: 1.0,
            marginBottom: 24,
            letterSpacing: -2,
          }}
        >
          Ready to Take the <span style={{ color: '#FCA311' }}>Next Step?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(14px,1.2vw,18px)',
            lineHeight: 1.7,
            fontFamily: 'DM Sans, sans-serif',
            maxWidth: 560, margin: '0 auto 40px',
          }}
        >
          Whether you're planning to study abroad, explore India, or book a consultation, we’re here to guide you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/contact" className="btn-primary">
            <span>Start Enquiry</span>
            <ArrowRight size={14} />
          </Link>
          <a
            href={`https://wa.me/910000000000?text=${encodeURIComponent(waMsg)}`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <MessageCircle size={14} />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
