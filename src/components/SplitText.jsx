import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SplitText — React Bits-style character/word reveal animation using GSAP.
 * Each word/char animates into view with blur-to-sharp + slide-up.
 */
export default function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.04,
  splitBy = 'words', // 'words' | 'chars'
  scrollTrigger = true,
  once = true,
}) {
  const containerRef = useRef(null);

  const parts =
    splitBy === 'chars'
      ? text.split('')
      : text.split(' ');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const spans = containerRef.current.querySelectorAll('.split-part');

      const animConfig = {
        opacity: 0,
        y: 28,
        filter: 'blur(8px)',
        duration: 0.65,
        stagger,
        delay,
        ease: 'power3.out',
      };

      if (scrollTrigger) {
        gsap.from(spans, {
          ...animConfig,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 88%',
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        });
      } else {
        gsap.from(spans, animConfig);
      }
    }, containerRef);

    return () => ctx.revert();
  }, [text, delay, stagger, scrollTrigger, once]);

  return (
    <span ref={containerRef} className={className} aria-label={text} style={{ display: 'inline' }}>
      {parts.map((part, i) => (
        <span
          key={i}
          className="split-part"
          style={{ display: 'inline-block', whiteSpace: splitBy === 'words' ? 'pre' : 'normal' }}
        >
          {splitBy === 'words' ? (i < parts.length - 1 ? part + ' ' : part) : part}
        </span>
      ))}
    </span>
  );
}
