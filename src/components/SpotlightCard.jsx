import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

/**
 * SpotlightCard — React Bits-style card with cursor-following radial yellow glow.
 * Wraps any children content.
 */
export default function SpotlightCard({ children, className = '', glowColor = 'rgba(250,204,21,0.18)' }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(glowRef.current, {
        '--glow-x': `${x}px`,
        '--glow-y': `${y}px`,
        opacity: 1,
        duration: 0.15,
        ease: 'none',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(glowRef.current, { opacity: 0, duration: 0.4 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Spotlight glow overlay */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          pointerEvents: 'none',
          background: `radial-gradient(280px circle at var(--glow-x, 50%) var(--glow-y, 50%), ${glowColor}, transparent 70%)`,
          zIndex: 1,
          borderRadius: 'inherit',
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}
