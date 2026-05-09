import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTASection from '../components/CTASection';
import { CheckCircle, ChevronDown, Send, Phone, Mail, MessageCircle } from 'lucide-react';
import DraggableCarousel from '../components/DraggableCarousel';

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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">{label}</motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem,6vw,6rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.0, letterSpacing: -2, marginBottom: 20 }}
        >
          {title.split('|').map((part, i) => (
            <span key={i} style={{ color: i % 2 === 1 ? '#FCA311' : '#FFFFFF' }}>{part}</span>
          ))}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(14px,1.2vw,18px)', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif', maxWidth: 600 }}
        >{subtitle}</motion.p>
      </div>
    </section>
  );
}

export function Nadijodtheshm() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const helps = ['Gain clarity in decision-making', 'Understand personal situations better', 'Receive structured guidance', 'Move forward with confidence'];
  const expects = ['One-on-one consultation', 'Personalized insights', 'Confidential guidance'];
  const forWhom = ['Individuals seeking clarity', 'Decision-making support', 'Personal guidance'];

  return (
    <>
      <PageHero
        label="Nadijodtheshm Consultation"
        title="Nadijodtheshm |Consultation|"
        subtitle="Nadijodtheshm is a traditional consultation practice that offers personalized insights to help individuals gain clarity in important aspects of life."
        image="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=1920&q=80"
      />

      <section ref={ref} style={{ padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)', background: '#000' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, marginBottom: 80 }}>
            {[
              { title: 'How It Helps', items: helps, color: '#FCA311' },
              { title: 'What to Expect', items: expects, color: '#14213D' },
              { title: "Who It's For", items: forWhom, color: '#FCA311' },
            ].map((block, bi) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: bi * 0.15 }}
                style={{
                  background: bi === 1 ? '#14213D' : 'rgba(252,163,17,0.08)',
                  border: `1px solid ${bi === 1 ? 'rgba(252,163,17,0.2)' : 'rgba(252,163,17,0.25)'}`,
                  padding: 36,
                  clipPath: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)',
                }}
              >
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 700, color: '#FCA311', marginBottom: 24 }}>{block.title}</h3>
                {block.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <CheckCircle size={16} color="#FCA311" />
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'DM Sans, sans-serif', fontSize: 15 }}>{item}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
            style={{
              textAlign: 'center', padding: '40px',
              border: '1px solid rgba(252,163,17,0.2)',
              background: 'rgba(252,163,17,0.04)',
              marginBottom: 48,
              clipPath: 'polygon(0 0, 98% 0, 100% 5%, 100% 100%, 2% 100%, 0 95%)',
            }}
          >
            <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans, sans-serif', fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: '0 auto', fontStyle: 'italic' }}>
              "This consultation is designed for individuals seeking thoughtful, guided perspectives using traditional methods."
            </p>
          </motion.div>

          <div style={{ textAlign: 'center' }}>
            <a href="/contact" className="btn-primary" style={{ display: 'inline-flex' }}>
              <span>Book Your Consultation</span>
            </a>
          </div>
        </div>
      </section>
      <CTASection whatsAppText="Hi, I would like to book a Nadijodtheshm consultation." />
    </>
  );
}

const faqs = [
  { q: 'How do I start my study abroad process?', a: 'You can begin by submitting an enquiry through our website or contacting us directly. We will guide you step by step through country selection, university choice, applications, documentation, and visa processing.' },
  { q: 'Do you assist with student visas?', a: 'Yes, we provide complete support for documentation and visa processing. Our team is experienced in handling student visa applications for multiple countries.' },
  { q: 'Can I customize my travel to India?', a: 'Yes, all travel experiences are tailored based on your preferences. We design personalized itineraries around your interests, budget, and schedule.' },
  { q: 'What is Nadijodtheshm consultation?', a: 'It is a traditional consultation method that provides structured, personalized insights and guidance for important life decisions. Sessions are private and confidential.' },
  { q: 'How do I book a consultation?', a: 'You can book through our website contact form or contact us via WhatsApp. We will confirm your appointment within 24 hours.' },
];

export function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently |Asked| Questions"
        subtitle="Find answers to the most common questions about our services."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80"
      />
      <section ref={ref} style={{ padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)', background: '#000' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', padding: '24px 0',
                  background: 'none', border: 'none', color: '#FFFFFF',
                  fontFamily: 'Syne, sans-serif', fontSize: 'clamp(15px,1.3vw,18px)',
                  fontWeight: 600, textAlign: 'left', cursor: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#FCA311'}
                onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}
              >
                {faq.q}
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ flexShrink: 0, marginLeft: 16, color: '#FCA311' }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.87, 0, 0.13, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{
                  paddingBottom: 24, color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'DM Sans, sans-serif', fontSize: 15, lineHeight: 1.8,
                }}>
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}

export function Blog() {
  const posts = [
    { cat: 'Study Abroad', title: 'How to Choose the Right Country to Study Abroad', excerpt: 'A practical guide to selecting the best destination based on your goals and budget.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', date: 'Dec 2024' },
    { cat: 'Travel India', title: 'First-Time Travel to India: What You Should Know', excerpt: 'Essential tips to make your journey smooth, safe, and memorable.', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80', date: 'Nov 2024' },
    { cat: 'Visa Guide', title: 'Student Visa Process Explained Step-by-Step', excerpt: 'Understand the visa process and avoid common mistakes with our comprehensive guide.', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80', date: 'Oct 2024' },
    { cat: 'Study Abroad', title: 'Top 10 Universities for International Students in 2025', excerpt: 'Our curated list of the best universities welcoming international students.', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80', date: 'Sep 2024' },
    { cat: 'Travel India', title: 'Hidden Gems of South India: A Travel Guide', excerpt: 'Discover lesser-known destinations that offer authentic cultural experiences.', image: 'https://images.unsplash.com/photo-1561361058-c12e04870d9f?w=600&q=80', date: 'Aug 2024' },
    { cat: 'Experiences', title: 'My Study Abroad Experience: A Student\'s Story', excerpt: 'A first-hand account from one of our students who studied in Germany.', image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80', date: 'Jul 2024' },
  ];
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <PageHero
        label="Blog"
        title="|Insights| & Global Opportunities"
        subtitle="Stay informed with expert articles, travel tips, and study abroad guidance."
        image="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
      />
      <section ref={ref} style={{ padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)', background: '#000' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
            {['All', 'Study Abroad', 'Travel India', 'Experiences'].map(cat => (
              <button key={cat} style={{
                padding: '8px 20px',
                background: cat === 'All' ? '#FCA311' : 'rgba(252,163,17,0.1)',
                border: '1px solid rgba(252,163,17,0.3)',
                color: cat === 'All' ? '#14213D' : '#FCA311',
                fontFamily: 'Syne, sans-serif', fontSize: 12, fontWeight: 700,
                letterSpacing: 1, textTransform: 'uppercase', cursor: 'none',
                clipPath: 'polygon(0 0, 88% 0, 100% 20%, 100% 100%, 12% 100%, 0 80%)',
                transition: 'all 0.2s',
              }}>
                {cat}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
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
                    src={post.image} alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }}
                  />
                  <div style={{
                    position: 'absolute', top: 16, left: 16,
                    background: '#FCA311', padding: '4px 12px',
                    fontFamily: 'Syne, sans-serif', fontSize: 10, fontWeight: 700,
                    letterSpacing: 2, color: '#14213D', textTransform: 'uppercase',
                  }}>{post.cat}</div>
                </div>
                <div style={{ padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 17, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.3, marginBottom: 10 }}>{post.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6, marginBottom: 16 }}>{post.excerpt}</p>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'DM Sans, sans-serif' }}>{post.date}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

const allImages = [
  'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80',
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  'https://images.unsplash.com/photo-1555821539-f0f8a92f4c7a?w=600&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
  'https://images.unsplash.com/photo-1561361058-c12e04870d9f?w=600&q=80',
  'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=600&q=80',
];

export function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <PageHero
        label="Photo Gallery"
        title="|Real| Moments, Real Experiences"
        subtitle="Explore real moments from our services — student journeys, travel experiences across India, and highlights from our programs."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
      />
      <section ref={ref} style={{ padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)', background: '#000' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', overflow: 'hidden' }}>
          <div style={{ height: '600px', width: '100%', position: 'relative' }}>
            <DraggableCarousel
              images={allImages}
              slideWidth={320}
              slideHeight={440}
              gap={30}
              perspective={1000}
              rotateY={45}
              depth={150}
              activeScale={1.1}
              inactiveScale={0.8}
              inactiveOpacity={0.4}
              snapDuration={0.6}
              snapEase="power3.out"
              showArrows={true}
              arrowColor="#FCA311"
              showDots={true}
              dotColor="#FCA311"
            />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle = {
    width: '100%', padding: '16px 20px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(252,163,17,0.2)',
    color: '#FFFFFF',
    fontFamily: 'DM Sans, sans-serif', fontSize: 15,
    outline: 'none', transition: 'border 0.2s',
    clipPath: 'polygon(0 0, 97% 0, 100% 15%, 100% 100%, 3% 100%, 0 85%)',
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="Start Your |Journey| Today"
        subtitle="Get in touch with our team and take the first step toward your global journey."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80"
      />
      <section ref={ref} style={{ padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)', background: '#000' }}>
        <div className="contact-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title" style={{ marginBottom: 32 }}>Let's <span>Talk</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}>
              Whether you have questions about studying abroad, planning a trip to India, or booking a consultation — we're here to help.
            </p>

            {[
              { icon: <Phone size={18} />, label: 'Phone', value: '+91 00000 00000' },
              { icon: <Mail size={18} />, label: 'Email', value: 'info@globalvoyager.com' },
              { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: 'Chat with us directly' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{
                  width: 44, height: 44,
                  background: 'rgba(252,163,17,0.1)',
                  border: '1px solid rgba(252,163,17,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#FCA311',
                  flexShrink: 0,
                  clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)',
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#FCA311', marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA buttons */}
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: '📚 Study Abroad', msg: "Hi, I'm interested in studying abroad. Can you guide me?" },
                { label: '🌏 Visit India', msg: "Hi, I'd like to plan a trip to India." },
                { label: '✨ Consultation', msg: 'Hi, I would like to book a Nadijodtheshm consultation.' },
              ].map(btn => (
                <a
                  key={btn.label}
                  href={`https://wa.me/910000000000?text=${encodeURIComponent(btn.msg)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 20px',
                    background: 'rgba(37,211,102,0.1)',
                    border: '1px solid rgba(37,211,102,0.25)',
                    color: '#25D366',
                    fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 600,
                    clipPath: 'polygon(0 0, 96% 0, 100% 15%, 100% 100%, 4% 100%, 0 85%)',
                    transition: 'all 0.2s',
                  }}
                >
                  <MessageCircle size={14} />{btn.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <input style={inputStyle} placeholder="Your Name" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                onFocus={e => e.target.style.borderColor = '#FCA311'}
                onBlur={e => e.target.style.borderColor = 'rgba(252,163,17,0.2)'}
              />
              <input style={inputStyle} placeholder="Email Address" type="email" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                onFocus={e => e.target.style.borderColor = '#FCA311'}
                onBlur={e => e.target.style.borderColor = 'rgba(252,163,17,0.2)'}
              />
            </div>
            <input style={inputStyle} placeholder="Phone Number" value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              onFocus={e => e.target.style.borderColor = '#FCA311'}
              onBlur={e => e.target.style.borderColor = 'rgba(252,163,17,0.2)'}
            />
            <select style={{ ...inputStyle, appearance: 'none' }} value={form.service}
              onChange={e => setForm({ ...form, service: e.target.value })}
              onFocus={e => e.target.style.borderColor = '#FCA311'}
              onBlur={e => e.target.style.borderColor = 'rgba(252,163,17,0.2)'}
            >
              <option value="" style={{ background: '#14213D' }}>Service Interested In</option>
              <option style={{ background: '#14213D' }}>Study Abroad</option>
              <option style={{ background: '#14213D' }}>Visit India</option>
              <option style={{ background: '#14213D' }}>Nadijodtheshm Consultation</option>
            </select>
            <textarea
              style={{ ...inputStyle, resize: 'vertical', minHeight: 140 }}
              placeholder="Your Message"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              onFocus={e => e.target.style.borderColor = '#FCA311'}
              onBlur={e => e.target.style.borderColor = 'rgba(252,163,17,0.2)'}
            />
            <motion.button
              type="submit"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', border: 'none' }}
            >
              <span>{sent ? '✓ Sent!' : 'Send Enquiry'}</span>
              {!sent && <Send size={14} />}
            </motion.button>
          </motion.form>
        </div>
      </section>
      <style>{`
        @media (max-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

export function VideoGallery() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: 'Our Students in Germany',
      desc: 'First-hand student campus experiences and cultural adaptation stories.',
      duration: '4:15',
      thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
      category: 'Study Abroad'
    },
    {
      title: 'Exploring Taj Mahal & Rajasthan',
      desc: 'Highlights from a curated historical travel tour across Northern India.',
      duration: '6:30',
      thumbnail: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
      category: 'Visit India'
    },
    {
      title: 'Clarity & Direction: A Client Story',
      desc: 'How a structured Nadijodtheshm session helped resolve a major life decision.',
      duration: '3:45',
      thumbnail: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&q=80',
      category: 'Consultation'
    },
    {
      title: 'Pre-Departure Student Summit',
      desc: 'Highlights of our annual event preparing students for their global journey.',
      duration: '5:10',
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      category: 'Study Abroad'
    }
  ];

  return (
    <>
      <PageHero
        label="Video Gallery"
        title="Video |Gallery|"
        subtitle="Watch real experiences, client stories, and travel highlights to better understand what we offer and how we support our clients."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
      />

      <section ref={ref} style={{ padding: 'clamp(80px,10vw,140px) clamp(16px,6vw,100px)', background: '#000' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', overflow: 'hidden' }}>
          <div style={{ height: '600px', width: '100%', position: 'relative' }}>
            <DraggableCarousel
              items={videos}
              slideWidth={340}
              slideHeight={460}
              gap={30}
              perspective={1000}
              rotateY={45}
              depth={150}
              activeScale={1.1}
              inactiveScale={0.8}
              inactiveOpacity={0.4}
              snapDuration={0.6}
              snapEase="power3.out"
              showArrows={true}
              arrowColor="#FCA311"
              showDots={true}
              dotColor="#FCA311"
              renderItem={(vid, i, isActive) => (
                <div
                  style={{
                    background: '#14213D',
                    borderRadius: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
                  }}
                >
                  {/* Thumbnail container */}
                  <div
                    onClick={() => {
                      if (isActive) {
                        setActiveVideo(vid);
                      }
                    }}
                    style={{ position: 'relative', flex: 1, overflow: 'hidden', cursor: isActive ? 'pointer' : 'none' }}
                  >
                    <img src={vid.thumbnail} alt={vid.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(0,0,0,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'background 0.3s',
                    }} className="play-overlay">
                      {/* Pulsing Play Button */}
                      <div style={{
                        width: 64, height: 64,
                        background: '#FCA311',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#14213D',
                        boxShadow: '0 0 20px rgba(252, 163, 17, 0.4)',
                      }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <span style={{
                      position: 'absolute', bottom: 12, right: 12,
                      background: 'rgba(0,0,0,0.75)', padding: '4px 8px',
                      fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#FFF',
                    }}>{vid.duration}</span>
                    <span style={{
                      position: 'absolute', top: 12, left: 12,
                      background: '#FCA311', color: '#14213D',
                      padding: '3px 10px', fontFamily: 'Syne, sans-serif',
                      fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase'
                    }}>{vid.category}</span>
                  </div>
                  <div style={{ padding: '24px 28px', flexShrink: 0, background: '#14213D' }}>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>{vid.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif', fontSize: 14, lineHeight: 1.6 }}>{vid.desc}</p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeVideo && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.95)',
          zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24,
        }}>
          {/* Close button */}
          <button 
            onClick={() => setActiveVideo(null)}
            style={{
              position: 'absolute', top: 24, right: 24,
              background: 'none', border: 'none', color: '#FFF',
              fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 700,
              letterSpacing: 2, textTransform: 'uppercase', cursor: 'none',
              display: 'flex', alignItems: 'center', gap: 8,
            }}
          >
            Close ✕
          </button>
          
          <div style={{ width: '100%', maxWidth: 1000, position: 'relative' }}>
            <div style={{
              position: 'relative', aspectRatio: '16/9',
              background: '#000',
              clipPath: 'polygon(0 0, 97% 0, 100% 5%, 100% 100%, 3% 100%, 0 95%)',
              border: '1px solid rgba(252,163,17,0.3)',
              overflow: 'hidden'
            }}>
              {/* Premium video player overlay with seeking & controls */}
              <img src={activeVideo.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, filter: 'blur(4px)' }} />
              
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                padding: 40,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%, rgba(0,0,0,0.7) 100%)',
              }}>
                <div>
                  <span style={{ color: '#FCA311', fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>Now Playing</span>
                  <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(20px,3vw,32px)', fontWeight: 800, color: '#FFF', marginTop: 8 }}>{activeVideo.title}</h2>
                </div>

                {/* Big pulsing play-pause mock state */}
                <div style={{ display: 'flex', alignSelf: 'center', gap: 16 }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(252,163,17,0.2)', border: '2px solid #FCA311', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FCA311' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  </div>
                </div>

                {/* Mock Player Bar controls */}
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', fontSize: 13, marginBottom: 8 }}>
                    <span>0:42</span>
                    <span>{activeVideo.duration}</span>
                  </div>
                  {/* Progress Line */}
                  <div style={{ width: '100%', height: 4, background: 'rgba(255,255,255,0.15)', position: 'relative' }}>
                    <div style={{ width: '22%', height: '100%', background: '#FCA311', position: 'absolute', left: 0, top: 0 }} />
                    <div style={{ width: 12, height: 12, background: '#FCA311', borderRadius: '50%', position: 'absolute', left: '22%', top: -4, transform: 'translateX(-50%)', boxShadow: '0 0 8px #FCA311' }} />
                  </div>
                  
                  {/* Controls Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                    <div style={{ display: 'flex', gap: 24, alignItems: 'center', color: '#FFF' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ cursor: 'none' }}>
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      {/* Volume */}
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                        <div style={{ width: 60, height: 3, background: 'rgba(255,255,255,0.3)', position: 'relative' }}>
                          <div style={{ width: '80%', height: '100%', background: '#FFF' }} />
                        </div>
                      </div>
                    </div>
                    
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                      Mock Preview — Experience Mode Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection whatsAppText="Hi, I'd like to check out some real videos and student experiences." />
    </>
  );
}
