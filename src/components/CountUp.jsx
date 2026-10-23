import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * CountUp — React Bits-style animated counter triggered on scroll.
 */
export default function CountUp({ to, prefix = '', suffix = '', duration = 1.8, className = '' }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        // strip non-numeric to get the end value
        const numericTo = parseFloat(String(to).replace(/[^0-9.]/g, ''));
        const obj = { val: 0 };
        gsap.to(obj, {
          val: numericTo,
          duration,
          ease: 'power2.out',
          onUpdate() {
            const v = obj.val;
            // Format with commas if large
            const formatted =
              numericTo >= 1000
                ? Math.floor(v).toLocaleString('en-IN')
                : v % 1 !== 0
                ? v.toFixed(1)
                : Math.floor(v).toString();
            setDisplay(formatted);
          },
          onComplete() {
            const final = String(to).replace(/[^0-9.,₹%+]/g, '');
            // Use the original string formatted properly
            const numericFinal = parseFloat(String(to).replace(/[^0-9.]/g, ''));
            const fmt =
              numericFinal >= 1000
                ? Math.floor(numericFinal).toLocaleString('en-IN')
                : numericFinal % 1 !== 0
                ? numericFinal.toFixed(1)
                : Math.floor(numericFinal).toString();
            setDisplay(fmt);
          },
        });
      },
    });

    return () => st.kill();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
