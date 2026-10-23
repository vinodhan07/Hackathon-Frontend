import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Zap } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const statusRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const steps = [
      { p: 25, text: 'MOUNTING PLACEMENT LMS RUNTIME...' },
      { p: 55, text: 'SYNCING 12,500+ COMPANY QUESTIONS...' },
      { p: 80, text: 'ARMING 24H HACKATHON ARENA...' },
      { p: 100, text: 'DKODER // TECH-HIKE READY ✓' },
    ];

    const obj = { progress: 0 };
    let stepIndex = 0;

    const runStep = () => {
      if (stepIndex >= steps.length) {
        // Fade out
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 0.98,
          duration: 0.4,
          ease: 'power2.in',
          onComplete,
        });
        return;
      }

      const step = steps[stepIndex++];
      if (statusRef.current) statusRef.current.textContent = step.text;

      gsap.to(obj, {
        progress: step.p,
        duration: 0.35,
        ease: 'power1.inOut',
        onUpdate() {
          if (barRef.current) barRef.current.style.width = `${obj.progress}%`;
          if (percentRef.current) percentRef.current.textContent = `${Math.round(obj.progress)}%`;
        },
        onComplete() {
          setTimeout(runStep, stepIndex === steps.length ? 300 : 180);
        },
      });
    };

    // Entrance animation
    const tl = gsap.timeline({ onComplete: runStep });
    tl.from('.preloader-logo', { scale: 0.7, opacity: 0, duration: 0.5, ease: 'back.out(2)' })
      .from('.preloader-title', { y: 15, opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
      .from('.preloader-bar', { scaleX: 0, opacity: 0, duration: 0.4, transformOrigin: 'left' }, '-=0.1');

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090514]"
    >
      {/* Background particle effect (CSS only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#FACC15]"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FACC15]/6 blur-[120px] rounded-full" />
      </div>

      <div className="relative flex flex-col items-center max-w-sm w-full px-8">
        {/* Logo */}
        <div className="preloader-logo relative mb-7">
          <div className="w-20 h-20 rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-2xl shadow-yellow-500/40">
            <span className="font-display font-black text-black text-4xl">D</span>
          </div>
          {/* Ripple ring */}
          <div className="absolute inset-0 rounded-2xl bg-[#FACC15]/25 animate-ping" style={{ animationDuration: '1.5s' }} />
        </div>

        {/* Title */}
        <div className="preloader-title text-center mb-8">
          <div className="font-display text-2xl font-black tracking-wider text-white mb-1">
            DKODER <span className="text-[#FACC15]">//</span> TECH-HIKE
          </div>
          <div className="font-tech text-xs text-slate-500 uppercase tracking-[0.3em]">
            India's Placement LMS
          </div>
        </div>

        {/* Status text */}
        <div className="font-code text-xs text-[#FACC15]/70 tracking-wider mb-3 flex items-center gap-2 min-h-[18px]">
          <Zap className="w-3.5 h-3.5 text-[#FACC15] shrink-0 animate-pulse" />
          <span ref={statusRef}>INITIALIZING...</span>
        </div>

        {/* Progress Bar */}
        <div className="preloader-bar w-full bg-[#130924] border border-[#FACC15]/20 h-2 rounded-full overflow-hidden mb-2">
          <div
            ref={barRef}
            className="h-full rounded-full"
            style={{
              width: '0%',
              background: 'linear-gradient(90deg, #7C3AED 0%, #A78BFA 40%, #FACC15 100%)',
              boxShadow: '0 0 12px rgba(250,204,21,0.6)',
            }}
          />
        </div>

        <div className="w-full flex justify-between font-code text-[11px] text-slate-500">
          <span>MEM: 100% OK</span>
          <span ref={percentRef} className="text-[#FACC15] font-bold">0%</span>
        </div>
      </div>
    </div>
  );
}
