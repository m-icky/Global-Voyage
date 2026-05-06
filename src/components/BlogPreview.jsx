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
  'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80',
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  'https://images.unsplash.com/photo-1555821539-f0f8a92f4c7a?w=600&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
];

export function GalleryPreview() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)',
        background: '#14213D',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <div style={{ maxWidth: '600px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-label"
            >Real Experiences</motion.div>
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
              Real moments from our clients across study abroad journeys and travel experiences in India.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} style={{ flexShrink: 0 }}>
            <Link to="/gallery" className="btn-outline" style={{ fontSize: 13 }}>
              <span>View Gallery</span>
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Masonry-ish grid */}
        <div className="gallery-preview-grid" style={{ gap: 12 }}>
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              style={{
                overflow: 'hidden',
                aspectRatio: i === 0 || i === 5 ? '4/5' : '4/3',
                gridRow: i === 0 ? 'span 2' : 'auto',
                background: '#000',
                clipPath: 'polygon(0 0, 94% 0, 100% 6%, 100% 100%, 6% 100%, 0 94%)',
                cursor: 'none',
              }}
            >
              <img
                src={src}
                alt=""
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .gallery-preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
        }
        @media (max-width: 768px) {
          .gallery-preview-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: auto !important;
          }
          .gallery-preview-grid > div {
            grid-row: auto !important;
            aspect-ratio: 1/1 !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-preview-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
