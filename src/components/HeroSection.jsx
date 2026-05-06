import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Split text into chars
function SplitChars({ text, className, style, delay = 0 }) {
  return (
    <span className={className} style={{ display: 'inline-block', ...style }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.03,
            ease: [0.87, 0, 0.13, 1],
          }}
          style={{ display: 'inline-block', willChange: 'transform' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

function HeroCounter({ value }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = ref.current;
      if (!el) return;

      el.textContent = '0+';

      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            { val: 0 },
            { val: value },
            {
              val: value,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                if (el) {
                  el.textContent = Math.round(this.targets()[0].val) + '+';
                }
              },
            }
          );
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [value]);

  return <span ref={ref} />;
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const statsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const stats = [
    { label: 'Students Guided', value: 500 },
    { label: 'Countries', value: 30 },
    { label: 'India Destinations', value: 80 },
    { label: 'Consultations', value: 1000 },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 700,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* VIDEO BACKGROUND */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          scale: videoScale,
          opacity: videoOpacity,
          zIndex: 0,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        >
          {/* Fallback to poster image if no video */}
          <source src="" type="video/mp4" />
        </video>
        {/* Fallback background image when no video */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          zIndex: -1,
        }} />
      </motion.div>

      {/* OVERLAY */}
      <motion.div
        ref={overlayRef}
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(20,33,61,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(20,33,61,0.8) 100%)',
          opacity: overlayOpacity,
          zIndex: 1,
        }}
      />
      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 200,
        background: 'linear-gradient(to top, #000, transparent)',
        zIndex: 2,
      }} />

      {/* GRID LINES */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: `
          linear-gradient(rgba(252,163,17,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(252,163,17,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
      }} />

      {/* MAIN CONTENT */}
      <motion.div
        style={{
          position: 'relative', zIndex: 3,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(100px, 12vw, 140px) clamp(16px, 6vw, 100px) clamp(40px, 6vw, 80px)',
          y: contentY,
        }}
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 12,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 32, height: 1.5, background: '#FCA311' }} />
          <span style={{
            fontFamily: 'Syne, sans-serif', fontSize: 12, fontWeight: 700,
            letterSpacing: 4, textTransform: 'uppercase', color: '#FCA311',
          }}>
            Study • Travel • Consult
          </span>
        </motion.div>

        {/* BIG HEADLINE */}
        <div style={{ overflow: 'hidden', marginBottom: 8 }}>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 8vw, 9rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: -2,
            color: '#FFFFFF',
          }}>
            <SplitChars text="TURN YOUR" delay={0.5} />
          </h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 8 }}>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 8vw, 9rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: -2,
            display: 'flex', alignItems: 'center', gap: '2vw', flexWrap: 'wrap',
          }}>
            <SplitChars text="GLOBAL" delay={0.6} style={{ color: '#FCA311' }} />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.87, 0, 0.13, 1] }}
              style={{
                height: 'clamp(1.8rem, 8vw, 8rem)',
                width: 'clamp(60px, 12vw, 160px)',
                background: 'linear-gradient(135deg, #FCA311, #e8940a)',
                clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                transformOrigin: 'left',
                backgroundImage: 'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
          </h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 32 }}>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 8vw, 9rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: -2,
            color: '#FFFFFF',
          }}>
            <SplitChars text="PLANS INTO" delay={0.7} />
          </h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 40 }}>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 8vw, 9rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: -2,
          }}>
            <SplitChars text="REALITY" delay={0.8} style={{
              WebkitTextStroke: '2px #FCA311',
              color: 'transparent',
            }} />
          </h1>
        </div>

        {/* Sub + CTA row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            style={{ maxWidth: 360 }}
          >
            <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(14px,1.2vw,17px)',
              lineHeight: 1.7,
              marginBottom: 28,
            }}>
              Expert study abroad guidance, curated travel experiences in India, and personalized consultations — all designed to help you make confident decisions.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                <span>Start Your Journey</span>
              </Link>
              <Link to="/contact" className="btn-outline">
                <span>Talk to an Advisor</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute', bottom: 36, left: '50%', translateX: '-50%',
          zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 10, letterSpacing: 3, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: '#FCA311' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>

      {/* FLOATING BADGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        animate_idle={{ rotate: 360 }}
        className="hero-floating-badge"
        style={{
          position: 'absolute', right: '5%', top: '30%',
          zIndex: 4,
          width: 100, height: 100,
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{
            width: 100, height: 100,
            borderRadius: '50%',
            border: '1px solid rgba(252,163,17,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}
        >
          <svg viewBox="0 0 100 100" style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
            <text fontSize="9.5" fill="#FCA311" fontFamily="Syne, sans-serif" letterSpacing="3" fontWeight="700">
              <textPath href="#circlePath">TRUSTED GUIDANCE • GLOBAL REACH •</textPath>
            </text>
          </svg>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(252,163,17,0.2)',
            border: '1px solid rgba(252,163,17,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Play size={14} fill="#FCA311" color="#FCA311" />
          </div>
        </motion.div>
      </motion.div>
      <style>{`
        @media (max-width: 768px) {
          .hero-floating-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
