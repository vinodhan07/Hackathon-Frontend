import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Play, Sparkles, Building2, ChevronDown } from 'lucide-react';
import Particles from './Particles.jsx';
import SpotlightCard from './SpotlightCard.jsx';

gsap.registerPlugin(useGSAP);

const DIALOGUES = [
  {
    id: '10lpa',
    label: '₹10 LPA Dream',
    student: 'I have a dream to get placed with a ₹10 LPA package. Can you help me?',
    bot: 'Sure! We have mapped 48 recursive algorithms, dynamic programming patterns, and real system design mock questions asked in product companies. Your 90-day roadmap is ready.',
    package: '₹10 - ₹18 LPA',
    track: 'Product Tier Track',
    color: '#FACC15',
  },
  {
    id: 'zoho',
    label: 'Crack Zoho',
    student: 'I want to get placed at Zoho as a Software Developer. Please guide me.',
    bot: 'Zoho Round 2 & 3 emphasize raw DSA in C/Java and object-oriented application design (Railway Reservation, Taxi Booking). 32 curated company questions loaded.',
    package: '₹6.5 - ₹10 LPA',
    track: 'Zoho SDE Track',
    color: '#A78BFA',
  },
  {
    id: 'tcs',
    label: 'TCS NQT Digital',
    student: 'I am preparing for TCS NQT and InfyTQ. How should I pace myself?',
    bot: '1,420 previous year NQT cognitive and advanced coding problems with exact time-limit compiler constraints. Start with cognitive + verbal, then progress to advanced coding.',
    package: '₹7.2 - ₹9.0 LPA',
    track: 'NQT & Mass Drive Track',
    color: '#34D399',
  },
];

export default function Hero({ onOpenMOU, onOpenDemo }) {
  const [activeDialogue, setActiveDialogue] = useState(DIALOGUES[0]);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);
  const cardRef = useRef(null);

  // Initial entrance animation
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(badgeRef.current, { y: -20, opacity: 0, duration: 0.6 })
      .from(h1Ref.current.querySelectorAll('.word'), {
        y: 40,
        opacity: 0,
        filter: 'blur(8px)',
        stagger: 0.08,
        duration: 0.7,
      }, '-=0.2')
      .from(subRef.current, { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from(btnsRef.current.children, {
        y: 16,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
      }, '-=0.2')
      .from(cardRef.current, { y: 30, opacity: 0, duration: 0.8 }, '-=0.4');
  }, { scope: containerRef });

  // Typewriter effect
  useEffect(() => {
    setIsTyping(true);
    setTypedText('');
    let idx = 0;
    const target = activeDialogue.bot;

    const timer = setInterval(() => {
      if (idx < target.length) {
        setTypedText(target.slice(0, idx + 1));
        idx++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 14);

    return () => clearInterval(timer);
  }, [activeDialogue]);

  const headline = 'Consistency Today.';
  const headline2 = 'Opportunities Tomorrow.';

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles count={55} className="w-full h-full" />
      </div>

      {/* Yellow dominant mega glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#FACC15]/14 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#8B5CF6]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#FACC15]/8 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Live Badge */}
        <div ref={badgeRef} className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#FACC15]/12 border border-[#FACC15]/40 shadow-lg shadow-yellow-500/15 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FACC15]" />
            </span>
            <span className="font-tech text-xs font-bold uppercase tracking-wider text-white">
              <strong className="text-[#FACC15]">INDIA'S #1 PLACEMENT LMS</strong>
              <span className="text-slate-400 mx-2">·</span>
              12,500+ REAL QUESTIONS
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h1 ref={h1Ref} className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
            {headline.split(' ').map((w, i) => (
              <span key={i} className="word inline-block mr-[0.22em]">{w}</span>
            ))}
            <br />
            {headline2.split(' ').map((w, i) => (
              <span
                key={i}
                className="word inline-block mr-[0.22em] text-[#FACC15]"
                style={{ filter: 'drop-shadow(0 0 40px rgba(250,204,21,0.4))' }}
              >
                {w}
              </span>
            ))}
          </h1>

          <p
            ref={subRef}
            className="mt-7 text-base sm:text-xl text-slate-300 font-body max-w-2xl mx-auto leading-relaxed"
          >
            The placement LMS built for engineering colleges across India.{' '}
            <span className="text-[#FACC15] font-semibold">Real company questions</span>, live coding lab,
            salary tier filters, and full cohort telemetry for faculty.
          </p>

          {/* CTA Buttons */}
          <div ref={btnsRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#practice"
              className="btn-yellow-primary px-9 py-4 text-sm flex items-center gap-2.5 glow-yellow-sm group"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Explore Question Bank</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenMOU}
              className="btn-outline-clean px-9 py-4 text-sm flex items-center gap-2.5 group"
            >
              <Building2 className="w-4 h-4 text-[#FACC15]" />
              <span>For Colleges: Apply for MOU</span>
            </button>
          </div>
        </div>

        {/* Central Hero Card */}
        <div ref={cardRef}>
          <SpotlightCard
            className="card-hero max-w-5xl mx-auto p-6 sm:p-9 shadow-2xl"
            glowColor="rgba(250,204,21,0.22)"
          >
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between pb-5 border-b border-[#FACC15]/20 gap-3 mb-7">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FACC15] shadow-sm shadow-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-white/20" />
                <span className="w-3 h-3 rounded-full bg-white/20" />
                <span className="font-code text-xs text-slate-300 font-bold ml-2">
                  DKODER // PLACEMENT ROADMAP SYSTEM
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-code text-xs px-3 py-1.5 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/40 text-[#FACC15] font-bold">
                  ₹1,000 FOR 4 YEARS / STUDENT
                </span>
              </div>
            </div>

            {/* Two-Column Interactive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Interactive Dialogue */}
              <div className="lg:col-span-7 space-y-5">
                <div className="font-tech text-xs font-bold uppercase tracking-wider text-slate-400">
                  Choose Your Target Placement Goal:
                </div>

                {/* Goal Switcher Tabs */}
                <div className="flex flex-wrap gap-2">
                  {DIALOGUES.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setActiveDialogue(d)}
                      className={`font-tech text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 ${
                        activeDialogue.id === d.id
                          ? 'bg-[#FACC15] text-black shadow-md shadow-yellow-500/25'
                          : 'bg-[#1A1629] text-slate-300 hover:text-white border border-[#FACC15]/20 hover:border-[#FACC15]/50'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>

                {/* Chat Dialogue */}
                <div className="space-y-3 font-code text-xs">
                  <div className="p-4 rounded-xl bg-[#0A0812] border border-white/10">
                    <span className="text-[#FACC15] font-bold block mb-1.5">STUDENT QUERY:</span>
                    <p className="text-white font-medium leading-relaxed">"{activeDialogue.student}"</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#1A1629] border border-[#FACC15]/30 relative overflow-hidden">
                    {/* Yellow accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#FACC15] rounded-full" />
                    <div className="pl-3">
                      <div className="flex items-center justify-between text-[#FACC15] font-bold mb-2">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          DKODER ENGINE:
                        </span>
                        <span className="text-[10px] uppercase font-tech text-slate-400 bg-[#0A0812] px-2 py-0.5 rounded-full border border-white/10">
                          {activeDialogue.track}
                        </span>
                      </div>
                      <p className="text-slate-200 leading-relaxed font-body text-xs min-h-[48px]">
                        {typedText}
                        {isTyping && (
                          <span className="inline-block w-1.5 h-3.5 ml-1 bg-[#FACC15] animate-pulse" />
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Funnel Illustration */}
              <div className="lg:col-span-5 bg-[#0A0812] rounded-2xl p-6 border border-[#FACC15]/30 flex flex-col justify-between h-full relative overflow-hidden">
                {/* Subtle corner glow */}
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#FACC15]/10 blur-2xl rounded-full pointer-events-none" />

                <div>
                  <span className="font-code text-[11px] font-bold text-[#FACC15] uppercase tracking-wider block mb-1">
                    STUDENT SUCCESS FUNNEL
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mb-5">
                    From Campus to Day 1 Placement
                  </h4>

                  {/* SVG Funnel */}
                  <div className="w-full py-2">
                    <svg viewBox="0 0 240 140" className="w-full" fill="none">
                      {/* Step 1 */}
                      <rect x="10" y="8" width="220" height="30" rx="8" fill="#1A1629" stroke="#FACC15" strokeWidth="1.5" />
                      <text x="26" y="27" fill="#FACC15" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">1. 12,500+ Company Questions</text>
                      <text x="185" y="27" fill="#FFFFFF" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">PRACTICE</text>

                      <line x1="120" y1="38" x2="120" y2="50" stroke="#FACC15" strokeWidth="1.5" strokeDasharray="3 3" />
                      <polygon points="116,48 124,48 120,54" fill="#FACC15" />

                      {/* Step 2 */}
                      <rect x="25" y="54" width="190" height="30" rx="8" fill="#1A1629" stroke="#8B5CF6" strokeWidth="1.5" />
                      <text x="42" y="73" fill="#A78BFA" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">2. College Batch Telemetry</text>
                      <text x="168" y="73" fill="#FFFFFF" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">MONITOR</text>

                      <line x1="120" y1="84" x2="120" y2="96" stroke="#FACC15" strokeWidth="1.5" strokeDasharray="3 3" />
                      <polygon points="116,94 124,94 120,100" fill="#FACC15" />

                      {/* Step 3 — Yellow filled */}
                      <rect x="40" y="100" width="160" height="34" rx="8" fill="#FACC15" />
                      <rect x="40" y="100" width="160" height="34" rx="8" fill="url(#yellowGrad)" />
                      <defs>
                        <linearGradient id="yellowGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#FACC15" />
                          <stop offset="100%" stopColor="#FFE600" />
                        </linearGradient>
                      </defs>
                      <text x="68" y="121" fill="#0A0812" fontSize="10.5" fontWeight="800" fontFamily="sans-serif">3. Day 1 Placement ✓</text>
                    </svg>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-code text-slate-300">
                  <span>Target CTC Band:</span>
                  <span
                    className="text-[#FACC15] font-bold text-sm"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(250,204,21,0.5))' }}
                  >
                    {activeDialogue.package}
                  </span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#stats"
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-[#FACC15] transition-colors group"
            aria-label="Scroll down"
          >
            <span className="font-tech text-[10px] uppercase tracking-widest">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-[#FACC15]" />
          </a>
        </div>
      </div>
    </section>
  );
}
