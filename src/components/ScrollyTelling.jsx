import React, { useLayoutEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    id: 'study',
    number: '01',
    title: 'STUDY ABROAD',
    headline: 'Your World-Class Education Awaits',
    body: 'Get expert guidance on choosing the right country, university, and course, along with full support for applications and visa processing.',
    stat: '30+ Countries',
    statSub: 'Available Destinations',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80',
    color: '#FCA311',
    href: '/study-abroad',
    ctaText: 'Start Your Journey',
  },
  {
    id: 'india',
    number: '02',
    title: 'VISIT INDIA',
    headline: 'Experience India Beyond the Ordinary',
    body: 'Discover India through personalized travel experiences designed around culture, comfort, and exploration.',
    stat: '80+ Destinations',
    statSub: 'Across India',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    color: '#FCA311',
    href: '/visit-india',
    ctaText: 'Explore India',
  },
  {
    id: 'nadi',
    number: '03',
    title: 'NADIJODTHESHM CONSULTATION',
    headline: 'Ancient Wisdom for Modern Decisions',
    body: 'A structured traditional consultation designed to provide clarity and direction for important life decisions through personalized insights.',
    stat: '1000+ Sessions',
    statSub: 'Consultations Done',
    image: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&q=80',
    color: '#FCA311',
    href: '/nadijodtheshm',
    ctaText: 'Book Appointment',
  },
];

export default function ScrollyTelling() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to('.scrolly-panel', {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
      });

      panels.forEach((_, i) => {
        tl.to(`.scrolly-num-${i}`, {
          scale: 1.1,
          color: 'rgba(252,163,17,0.45)',
          duration: 0.5,
        }, i * 0.33);

        tl.to(`.scrolly-card-${i}`, {
          scale: 2,
          duration: 0.5,
        }, i * 0.33);
      });
    }, containerRef);

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* Intro static banner */}
      <div style={{
        padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px) 0',
        background: '#000',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label">Our Services</div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            Our <span>Services</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 'clamp(15px,1.2vw,18px)',
            lineHeight: 1.8,
            fontFamily: 'DM Sans, sans-serif',
            maxWidth: 750,
          }}>
            We provide complete support for your international journey — from education and travel to personalized consultations.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="scrolly-container"
        style={{ position: 'relative' }}
      >
        <div
          ref={stickyRef}
          className="scrolly-sticky"
          style={{
            width: '100%', position: 'relative',
          }}
        >
          {/* Section Label */}
          <div className="scrolly-side-label" style={{
            position: 'absolute', top: 40, left: 'clamp(24px,6vw,100px)',
            zIndex: 10, display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ width: 32, height: 1.5, background: '#FCA311' }} />
            <span style={{
              fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700,
              letterSpacing: 4, textTransform: 'uppercase', color: '#FCA311',
            }}>Our Services</span>
          </div>

        {/* Progress dots */}
        <div className="scrolly-progress-dots" style={{
          position: 'absolute', top: '50%', right: 40,
          transform: 'translateY(-50%)',
          zIndex: 10, display: 'flex', flexDirection: 'column', gap: 12,
        }}>
          {panels.map((_, i) => (
            <div key={i} style={{
              width: 6, height: 6, borderRadius: '50%',
              background: `rgba(252,163,17,${i === 0 ? 1 : 0.3})`,
              transition: 'all 0.3s',
            }} />
          ))}
        </div>

        {/* Sliding panels wrapper */}
        <div className="scrolly-wrapper" style={{ display: 'flex' }}>
          {panels.map((panel, i) => (
            <div
              className="scrolly-panel"
              key={panel.id}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* Background Image */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${panel.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(20,33,61,0.75) 60%, rgba(0,0,0,0.5) 100%)',
              }} />

              {/* Content */}
              <div style={{
                position: 'relative', zIndex: 2,
                padding: '0 clamp(16px,6vw,100px)',
                maxWidth: 700,
              }}>
                {/* Big number */}
                <div
                  className={`scrolly-num-${i}`}
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: 'clamp(80px,10vw,130px)',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'rgba(252,163,17,0.15)',
                    letterSpacing: -4,
                    marginBottom: 'clamp(16px, 3vw, 28px)',
                    transformOrigin: 'left center',
                    userSelect: 'none',
                  }}
                >
                  {panel.number}
                </div>

                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 11, fontWeight: 700, letterSpacing: 4,
                  color: '#FCA311', textTransform: 'uppercase',
                  marginBottom: 12,
                }}>
                  {panel.title}
                </div>

                <h2 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(2rem,4vw,3.5rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBottom: 20,
                }}>
                  {panel.headline}
                </h2>

                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(14px,1.2vw,17px)',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.7,
                  maxWidth: 500,
                  marginBottom: 36,
                }}>
                  {panel.body}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
                  <a href={panel.href} className="btn-primary">
                    <span>{panel.ctaText}</span>
                  </a>
                  <div>
                    <div style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: 'clamp(22px,2.5vw,32px)',
                      fontWeight: 900, color: '#FCA311',
                    }}>{panel.stat}</div>
                    <div style={{
                      fontSize: 11, fontFamily: 'Syne, sans-serif',
                      fontWeight: 600, letterSpacing: 2,
                      textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
                    }}>{panel.statSub}</div>
                  </div>
                </div>
              </div>

              {/* Right image card */}
              <div
                className={`scrolly-image-card scrolly-card-${i}`}
                style={{
                  overflow: 'hidden',
                  clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
                  willChange: 'transform',
                }}
              >
                <img
                  src={panel.image}
                  alt={panel.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '20px',
                  background: 'linear-gradient(to top, rgba(20,33,61,0.9), transparent)',
                }}>
                  <div style={{
                    fontFamily: 'Syne, sans-serif', fontSize: 13,
                    fontWeight: 700, color: '#FCA311',
                  }}>{panel.stat}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <style>{`
        .scrolly-container {
          height: 100vh;
        }
        .scrolly-sticky {
          height: 100vh;
          overflow: hidden;
        }
        .scrolly-wrapper {
          height: 100%;
          width: ${panels.length * 100}%;
        }
        .scrolly-panel {
          width: ${100 / panels.length}%;
          height: 100%;
          min-height: 100vh;
          overflow: hidden;
        }
        .scrolly-image-card {
          position: absolute;
          right: clamp(24px, 8vw, 120px);
          width: clamp(200px, 28vw, 380px);
          aspectRatio: 3/4;
        }

        @media (max-width: 900px) {
          .scrolly-container {
            height: auto !important;
          }
          .scrolly-sticky {
            height: auto !important;
            overflow: visible !important;
          }
          .scrolly-wrapper {
            flex-direction: column !important;
            height: auto !important;
            width: 100% !important;
          }
          .scrolly-panel {
            width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            padding: 80px 0 !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 32px !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .scrolly-side-label, .scrolly-progress-dots {
            display: none !important;
          }
          .scrolly-image-card {
            position: relative !important;
            right: auto !important;
            width: calc(100% - 32px) !important;
            max-width: 450px !important;
            margin-top: 16px !important;
            margin-left: 16px !important;
            margin-right: 16px !important;
            aspect-ratio: 16/9 !important;
          }
        }
      `}</style>
    </>
  );
}
