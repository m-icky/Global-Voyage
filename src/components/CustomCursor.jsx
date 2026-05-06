import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isMobileOrTouch, setIsMobileOrTouch] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const followerX = useMotionValue(-100);
  const followerY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const followerSpringX = useSpring(followerX, { damping: 20, stiffness: 150 });
  const followerSpringY = useSpring(followerY, { damping: 20, stiffness: 150 });

  const isHovering = useRef(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 
                      ('ontouchstart' in window) || 
                      navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 1024;
      setIsMobileOrTouch(isTouch || isSmallScreen);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (isMobileOrTouch) return;

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      followerX.set(e.clientX);
      followerY.set(e.clientY);
    };

    const onMouseEnterLink = () => { isHovering.current = true; };
    const onMouseLeaveLink = () => { isHovering.current = false; };

    document.addEventListener('mousemove', move);

    const links = document.querySelectorAll('a, button, [data-cursor]');
    links.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', move);
    };
  }, [isMobileOrTouch]);

  if (isMobileOrTouch) {
    return null;
  }

  return (
    <>
      <motion.div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#FCA311',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
        }}
      />
      <motion.div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: followerSpringX,
          y: followerSpringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(252, 163, 17, 0.6)',
          pointerEvents: 'none',
          zIndex: 99998,
        }}
      />
    </>
  );
}
