import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    category: 'Study Abroad',
    title: 'How to Choose the Right Country to Study Abroad',
    excerpt: 'A practical guide to selecting the best destination based on your goals and budget.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
    date: 'Dec 2024',
  },
  {
    category: 'Travel India',
    title: 'First-Time Travel to India: What You Should Know',
    excerpt: 'Essential tips to make your journey smooth, safe, and memorable.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80',
    date: 'Nov 2024',
  },
  {
    category: 'Visa Guide',
    title: 'Student Visa Process Explained Step-by-Step',
    excerpt: 'Understand the visa process and avoid common mistakes.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    date: 'Oct 2024',
  },
];

export function BlogPreview() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, flexWrap: 'wrap', gap: 20 }}>
          <div style={{ maxWidth: '600px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-label"
            >Insights & Travel Stories</motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title"
              style={{ marginBottom: 16 }}
            >
              Insights & <span>Travel Stories</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              Stay updated with practical insights and real experiences to guide your journey.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} style={{ flexShrink: 0 }}>
            <Link to="/blog" className="btn-outline" style={{ fontSize: 13 }}>
              <span>Explore Articles</span>
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.87, 0, 0.13, 1] }}
              whileHover={{ y: -8 }}
              style={{
                background: '#14213D',
                overflow: 'hidden',
                clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
                cursor: 'none',
              }}
            >
              <div style={{ overflow: 'hidden', aspectRatio: '16/9', position: 'relative' }}>
                <motion.img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  background: '#FCA311',
                  padding: '4px 12px',
                  fontFamily: 'Syne, sans-serif', fontSize: 10,
                  fontWeight: 700, letterSpacing: 2, color: '#14213D',
                  textTransform: 'uppercase',
                }}>{post.category}</div>
              </div>
              <div style={{ padding: '24px 28px' }}>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(16px,1.4vw,19px)',
                  fontWeight: 700, color: '#FFFFFF',
                  lineHeight: 1.3, marginBottom: 12,
                }}>{post.title}</h3>
                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: 14, fontFamily: 'DM Sans, sans-serif',
                  lineHeight: 1.6, marginBottom: 20,
                }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans, sans-serif' }}>{post.date}</span>
                  <ArrowUpRight size={16} color="#FCA311" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80',
    alt: 'Study Abroad Journey',
    caption: 'Campus Life Abroad',
  },
  {
    src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80',
    alt: 'India Travel Experience',
    caption: 'Taj Mahal Visit',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
    alt: 'Student Collaboration',
    caption: 'Learning Together',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    alt: 'Mountain Adventure',
    caption: 'Himalayan Trek',
  },
  {
    src: 'https://images.unsplash.com/photo-1555821539-f0f8a92f4c7a?w=600&q=80',
    alt: 'Cultural Experience',
    caption: 'Festival Colors',
  },
];

function CardDeck({ images, inView }) {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  // Trigger entrance animation after inView
  React.useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), 100);
      return () => clearTimeout(timer);
    }
  }, [inView, hasAnimated]);

  // Fan layout settings
  const fanSettings = {
    spacing: 120,
    rotationIntensity: 12,
    arcIntensity: 12,
    scaleDecay: 0.06,
  };
  const hoverBoost = 1.15;
  const hoverLift = 60;
  const pushForce = 130;
  const cardWidth = 240;
  const cardHeight = 360;
  const borderRadius = 24;
  const shadowOpacity = 0.15;

  const totalCards = images.length;
  const centerIndex = Math.floor(totalCards / 2);

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 500,
        overflow: 'visible',
      }}
    >
      {images.map((image, idx) => {
        const distanceToCenter = Math.abs(idx - centerIndex);
        const zIndex = 20 - distanceToCenter;
        const baseScale = 1 - distanceToCenter * fanSettings.scaleDecay;

        let xOffset = (idx - centerIndex) * fanSettings.spacing;
        let yOffset = Math.pow(distanceToCenter, 2) * fanSettings.arcIntensity;
        let rotation = (idx - centerIndex) * fanSettings.rotationIntensity;
        let scale = baseScale;

        if (hoveredIndex !== null) {
          const distFromHover = idx - hoveredIndex;
          const absDistFromHover = Math.abs(distFromHover);

          if (idx === hoveredIndex) {
            yOffset -= hoverLift;
            scale = baseScale * hoverBoost;
          } else {
            const decay = pushForce / (absDistFromHover + 0.6);
            const direction = distFromHover > 0 ? 1 : -1;
            xOffset += direction * decay;
            rotation += direction * (5 / (absDistFromHover + 0.2));
            scale = baseScale * 0.96;
          }
        }

        // Before animation: stacked in center, not visible
        const preAnimTransform = `translate(0px, 80px) rotate(0deg) scale(0.8)`;
        const postAnimTransform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg) scale(${scale})`;

        return (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              position: 'absolute',
              width: cardWidth,
              height: cardHeight,
              borderRadius: borderRadius,
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: hoveredIndex === idx ? 30 : zIndex,
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? postAnimTransform : preAnimTransform,
              transition: `transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${idx * 0.08}s, opacity 0.5s ease ${idx * 0.08}s`,
              boxShadow: `0 15px 35px rgba(0, 0, 0, ${shadowOpacity}), 0 5px 15px rgba(0, 0, 0, 0.1)`,
              willChange: 'transform',
              transformOrigin: 'center bottom',
              cursor: 'none',
              overflow: 'hidden',
            }}
            role="img"
            aria-label={image.alt}
          >
            {/* Gradient overlay at bottom for caption */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                opacity: hoveredIndex === idx ? 1 : 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none',
              }}
            />
            {/* Caption text */}
            <div
              style={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                right: 20,
                opacity: hoveredIndex === idx ? 1 : 0,
                transform: hoveredIndex === idx ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.4s ease',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#FCA311',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  marginBottom: 4,
                }}
              >
                Gallery
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#FFFFFF',
                }}
              >
                {image.caption}
              </div>
            </div>
            {/* Subtle border glow on hover */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: borderRadius,
                border: hoveredIndex === idx ? '2px solid rgba(252,163,17,0.5)' : '1px solid rgba(255,255,255,0.08)',
                transition: 'border 0.4s ease',
                pointerEvents: 'none',
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function CardDeckMobile({ images, inView }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div style={{ position: 'relative' }}>
      {/* Current card display */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          width: '100%',
          aspectRatio: '3/4',
          maxHeight: 420,
          borderRadius: 20,
          backgroundImage: `url(${images[activeIndex].src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          }}
        />
        {/* Caption */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: 24,
            right: 24,
          }}
        >
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 11,
              fontWeight: 700,
              color: '#FCA311',
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginBottom: 4,
            }}
          >
            {activeIndex + 1} / {images.length}
          </div>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 18,
              fontWeight: 600,
              color: '#FFFFFF',
            }}
          >
            {images[activeIndex].caption}
          </div>
        </div>
      </motion.div>

      {/* Dot navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          marginTop: 24,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: activeIndex === i ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background: activeIndex === i ? '#FCA311' : 'rgba(255,255,255,0.2)',
              border: 'none',
              transition: 'all 0.3s ease',
              cursor: 'none',
              padding: 0,
            }}
            aria-label={`View image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function GalleryPreview() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="gallery-preview"
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)',
        background: '#14213D',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(252,163,17,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-label"
            >
              Real Experiences
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title"
              style={{ marginBottom: 16 }}
            >
              Real <span>Experiences</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              Real moments from our clients across study abroad journeys and
              travel experiences in India.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{ flexShrink: 0 }}
          >
            <Link
              to="/gallery"
              className="btn-outline"
              style={{ fontSize: 13 }}
            >
              <span>View Gallery</span>
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Desktop CardDeck */}
        <div className="gallery-card-deck-desktop">
          <CardDeck images={galleryImages} inView={inView} />
        </div>

        {/* Mobile fallback */}
        <div className="gallery-card-deck-mobile">
          <CardDeckMobile images={galleryImages} inView={inView} />
        </div>
      </div>

      <style>{`
        .gallery-card-deck-desktop {
          display: block;
        }
        .gallery-card-deck-mobile {
          display: none;
        }
        @media (max-width: 768px) {
          .gallery-card-deck-desktop {
            display: none;
          }
          .gallery-card-deck-mobile {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
