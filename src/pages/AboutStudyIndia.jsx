import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTASection from '../components/CTASection';
import { CheckCircle } from 'lucide-react';
import { AnimatedCounter } from '../components/StatsSection';

function PageHero({ label, title, subtitle, image }) {
  return (
    <section style={{
      minHeight: '60vh', position: 'relative',
      display: 'flex', alignItems: 'flex-end',
      padding: 'clamp(120px,12vw,180px) clamp(16px,6vw,100px) clamp(60px,6vw,100px)',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,33,61,0.8) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >{label}</motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(2.5rem,6vw,6rem)',
            fontWeight: 900, color: '#FFFFFF',
            lineHeight: 1.0, letterSpacing: -2, marginBottom: 20,
          }}
        >
          {title.split('|').map((part, i) => (
            <span key={i} style={{ color: i % 2 === 1 ? '#FCA311' : '#FFFFFF' }}>{part}</span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 'clamp(14px,1.2vw,18px)',
            lineHeight: 1.7,
            fontFamily: 'DM Sans, sans-serif',
            maxWidth: 600,
          }}
        >{subtitle}</motion.p>
      </div>
    </section>
  );
}

export function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const whyUs = [
    'Expert Guidance: Highly personalized and structured advice from experienced counselors.',
    'End-to-End Support: Seamless guidance from initial profile evaluation to visa and arrival.',
    'Bespoke Planning: Travel itineraries crafted precisely around your budget and comfort.',
    'Ethical Practice: Completely transparent processes with no hidden policies or fees.'
  ];
  const services = [
    { title: 'Study Abroad Guidance', desc: 'Helping students choose the right countries, universities, and courses with full support.', icon: '🎓' },
    { title: 'Travel Planning', desc: 'Designing customized travel experiences across India based on your interests.', icon: '🌏' },
    { title: 'Consultation Services', desc: 'Providing clarity and direction through traditional Nadijodtheshm consultations.', icon: '✨' },
  ];

  return (
    <>
      <PageHero
        label="About Us"
        title="About |Us|"
        subtitle="We help individuals explore global opportunities through expert study abroad guidance, personalized travel planning in India, and structured consultation services."
        image="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
      />

      <section ref={ref} style={{ padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)', background: '#000' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Approach */}
          <div className="about-approach-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center', marginBottom: 100 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="section-label">Our Approach</div>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Every Journey is <span>Unique</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.8, fontFamily: 'DM Sans, sans-serif', marginBottom: 24 }}>
                Every journey is unique. We take the time to understand your goals and provide tailored solutions that align with your aspirations.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="section-label" style={{ marginBottom: 4, display: 'block' }}>Why Choose Us</div>
                {whyUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
                  >
                    <CheckCircle size={18} color="#FCA311" style={{ marginTop: 3, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                background: '#14213D',
                padding: 48,
                clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
              }}
            >
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 60, fontWeight: 900, color: '#FCA311', marginBottom: 8 }}>
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>Students guided toward their dream education</div>
              <div style={{ height: 1, background: 'rgba(252,163,17,0.2)', margin: '32px 0' }} />
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 60, fontWeight: 900, color: '#FCA311', marginBottom: 8 }}>
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>Countries with partner universities</div>
            </motion.div>
          </div>

          {/* Services */}
          <div className="section-label" style={{ textAlign: 'center', marginBottom: 16 }}>What We Do</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 60 }}>Our <span>Services</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6, background: 'rgba(252,163,17,0.08)' }}
                style={{
                  background: '#14213D',
                  padding: 36,
                  clipPath: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)',
                  transition: 'background 0.3s',
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 20 }}>{svc.icon}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 700, color: '#FCA311', marginBottom: 12 }}>{svc.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', fontSize: 15, lineHeight: 1.7 }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection whatsAppText="Hi, I'm interested in your services. Can you help me?" />
      <style>{`
        @media (max-width: 868px) {
          .about-approach-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}

export function StudyAbroad() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const services = [
    'Country, University, and Course Selection',
    'University Application & Admission Support',
    'Document Preparation & Profile Evaluation',
    'Student Visa Processing & Mock Interviews',
    'Pre-Departure Briefing & Post-Arrival Support',
  ];

  return (
    <>
      <PageHero
        label="Study Abroad Guidance"
        title="Study Abroad |Guidance|"
        subtitle="Looking to study abroad? Our expert consultants help you choose the right destination, university, and course based on your goals and budget."
        image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80"
      />

      <section ref={ref} style={{ padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)', background: '#000' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="study-abroad-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
            <div>
              <motion.div className="section-label" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>What We Offer</motion.div>
              <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} style={{ marginBottom: 32 }}>
                Complete <span>Support</span> for Your Journey
              </motion.h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {services.map((svc, i) => (
                  <motion.div
                    key={svc}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    style={{
                      padding: '16px 20px',
                      background: '#14213D',
                      borderLeft: '3px solid #FCA311',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 15, color: 'rgba(255,255,255,0.85)',
                    }}
                  >{svc}</motion.div>
                ))}
              </div>
              <motion.a
                href="/contact"
                className="btn-primary"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                style={{ display: 'inline-flex', marginTop: 36 }}
              >
                <span>Start Your Study Abroad Journey Today</span>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Study Abroad"
                style={{
                  width: '100%', height: 'auto',
                  clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
                  display: 'block',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <CTASection whatsAppText="Hi, I’m interested in studying abroad. Can you guide me?" />
      <style>{`
        @media (max-width: 868px) {
          .study-abroad-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}

export function VisitIndia() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const offerings = [
    { icon: '🗺️', title: 'Personalized Travel Itineraries', desc: 'Custom travel plans designed around your interests, comfort, and schedule.' },
    { icon: '🏛️', title: 'Cultural & Heritage Experiences', desc: 'Curated cultural deep dives to experience authentic heritage and traditions.' },
    { icon: '🛎️', title: 'Travel Assistance', desc: 'End-to-end transport and logistics coordination for worry-free transit.' },
    { icon: '🤝', title: 'Local Support', desc: '24/7 dedicated support team on the ground to handle adjustments seamlessly.' },
  ];

  return (
    <>
      <PageHero
        label="Visit India"
        title="Visit |India|"
        subtitle="Experience India beyond the ordinary with customized travel plans designed around your interests and preferences."
        image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
      />

      <section ref={ref} style={{ padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)', background: '#000' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label" style={{ textAlign: 'center' }}>What We Offer</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 60 }}>
            Your <span>Perfect</span> India Experience
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, marginBottom: 60 }}>
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                style={{
                  background: '#14213D',
                  padding: 36,
                  clipPath: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 44, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, color: '#FCA311', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/contact" className="btn-primary" style={{ display: 'inline-flex' }}>
              <span>Plan Your India Experience</span>
            </a>
          </div>
        </div>
      </section>
      <CTASection whatsAppText="Hi, I’d like to plan a trip to India." />
    </>
  );
}
