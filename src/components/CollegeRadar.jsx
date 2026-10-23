import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Users, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function CollegeRadar({ onOpenMOU }) {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animate cards with stagger on scroll
    gsap.from('.radar-card', {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.radar-cards',
        start: 'top 80%',
      },
    });

    // MOU banner slides in
    gsap.from('.mou-banner', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.mou-banner',
        start: 'top 85%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="batch-radar" ref={sectionRef} className="py-28 bg-[#0E0B1A] border-t border-[#FACC15]/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FACC15]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#8B5CF6]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/40 font-code text-xs text-[#FACC15] font-bold uppercase tracking-wider mb-5">
            <Users className="w-3.5 h-3.5" />
            FOR FACULTY & PLACEMENT TEAMS
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Now Imagine Seeing <br />
            <span className="text-[#FACC15]" style={{ filter: 'drop-shadow(0 0 30px rgba(250,204,21,0.3))' }}>
              the Whole Batch.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-xl text-slate-300 font-body leading-relaxed">
            Who is practising consistently? Where is the batch getting stuck? Which cohort needs attention now?
          </p>
        </div>

        {/* 3 Cards */}
        <div className="radar-cards grid grid-cols-1 md:grid-cols-3 gap-7 mb-16">
          {/* Card 1: Batch Consistency Curve */}
          <SpotlightCard className="radar-card card-clean p-8 flex flex-col justify-between" glowColor="rgba(250,204,21,0.15)">
            <div>
              <div className="w-full h-44 bg-[#0A0812] rounded-2xl border border-[#FACC15]/25 p-4 mb-7 relative overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
                  <line x1="20" y1="20" x2="190" y2="20" stroke="#1E1238" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="60" x2="190" y2="60" stroke="#1E1238" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="100" x2="190" y2="100" stroke="#1E1238" strokeWidth="1" />

                  <rect x="35" y="65" width="14" height="35" rx="3" fill="#2E234A" />
                  <rect x="65" y="45" width="14" height="55" rx="3" fill="#4B337D" />
                  <rect x="95" y="30" width="14" height="70" rx="3" fill="#7C3AED" />
                  <rect x="125" y="20" width="14" height="80" rx="3" fill="#EAB308" />
                  <rect x="155" y="10" width="14" height="90" rx="3" fill="#FACC15" />

                  {/* Glow on last bar */}
                  <rect x="155" y="10" width="14" height="90" rx="3" fill="url(#barGlow)" />
                  <defs>
                    <linearGradient id="barGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FACC15" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path d="M 42 65 Q 95 30 162 10" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <circle cx="162" cy="10" r="5" fill="#FFE600" />
                  <circle cx="162" cy="10" r="8" fill="#FACC15" fillOpacity="0.2" />
                </svg>
                <div className="absolute top-3 right-3 font-code text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#FACC15] text-black">
                  94.2% CONSISTENCY
                </div>
              </div>

              <span className="font-code text-xs text-[#FACC15] font-bold uppercase tracking-wider block mb-1.5">
                COHORT TELEMETRY
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Who Is Practising Consistently?
              </h3>
              <p className="text-slate-400 font-body text-sm leading-relaxed">
                Track whether 600 students solved their daily coding challenge. Automated reminders re-engage students before habits slip.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-code text-xs text-slate-400">
              <span>Avg Daily Problems:</span>
              <span className="text-[#FACC15] font-bold">4.6 / Student</span>
            </div>
          </SpotlightCard>

          {/* Card 2: Topic Blocker Diagnostics */}
          <SpotlightCard className="radar-card card-clean p-8 flex flex-col justify-between" glowColor="rgba(239,68,68,0.12)">
            <div>
              <div className="w-full h-44 bg-[#0A0812] rounded-2xl border border-red-500/20 p-4 mb-7 relative overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
                  <circle cx="100" cy="60" r="45" stroke="#1E1238" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="100" cy="60" r="30" stroke="#2D1B54" strokeWidth="2" />
                  <circle cx="100" cy="60" r="15" fill="#130924" stroke="#FACC15" strokeWidth="2" />
                  <line x1="100" y1="15" x2="100" y2="105" stroke="#1E1238" strokeWidth="1" />
                  <line x1="55" y1="60" x2="145" y2="60" stroke="#1E1238" strokeWidth="1" />
                  <circle cx="125" cy="38" r="6" fill="#EF4444" />
                  <circle cx="125" cy="38" r="10" fill="#EF4444" fillOpacity="0.2" />
                  <circle cx="75" cy="45" r="5" fill="#FACC15" />
                  <circle cx="115" cy="85" r="4.5" fill="#8B5CF6" />
                  <text x="128" y="35" fill="#EF4444" fontSize="7" fontFamily="monospace">DP BLOCKER</text>
                </svg>
                <div className="absolute top-3 right-3 font-code text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/40">
                  BLOCKER: DYNAMIC PROGRAMMING
                </div>
              </div>

              <span className="font-code text-xs text-red-400 font-bold uppercase tracking-wider block mb-1.5">
                ACCURACY RADAR
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Where Is the Batch Getting Stuck?
              </h3>
              <p className="text-slate-400 font-body text-sm leading-relaxed">
                Know immediately that 42% of 3rd years failed the Knapsack problem during TCS mock tests so trainers can intervene before the drive.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-code text-xs text-slate-400">
              <span>Top Failure Area:</span>
              <span className="text-red-400 font-bold">2D DP & Trees</span>
            </div>
          </SpotlightCard>

          {/* Card 3: Proctored Integrity */}
          <SpotlightCard className="radar-card card-clean p-8 flex flex-col justify-between" glowColor="rgba(250,204,21,0.15)">
            <div>
              <div className="w-full h-44 bg-[#0A0812] rounded-2xl border border-[#FACC15]/25 p-4 mb-7 relative overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
                  <path
                    d="M 100 18 C 130 18, 145 30, 145 55 C 145 88, 112 104, 100 112 C 88 104, 55 88, 55 55 C 55 30, 70 18, 100 18 Z"
                    fill="#1A1629"
                    stroke="#FACC15"
                    strokeWidth="2.5"
                  />
                  {/* Glow around shield */}
                  <path
                    d="M 100 18 C 130 18, 145 30, 145 55 C 145 88, 112 104, 100 112 C 88 104, 55 88, 55 55 C 55 30, 70 18, 100 18 Z"
                    fill="none"
                    stroke="#FACC15"
                    strokeWidth="6"
                    strokeOpacity="0.15"
                  />
                  <path d="M 82 58 L 95 71 L 120 46" stroke="#FACC15" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="absolute top-3 right-3 font-code text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#FACC15] text-black">
                  99.9% PROCTORED
                </div>
              </div>

              <span className="font-code text-xs text-[#FACC15] font-bold uppercase tracking-wider block mb-1.5">
                INSTITUTIONAL INTEGRITY
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Which Cohort Needs Attention Now?
              </h3>
              <p className="text-slate-400 font-body text-sm leading-relaxed">
                Run TCS NQT, InfyTQ, and Wipro mock tests with automated code similarity detection, tab-switch monitoring, and verified institutional rankings.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-code text-xs text-slate-400">
              <span>Malpractice Detection:</span>
              <span className="text-[#FACC15] font-bold">Active Shield</span>
            </div>
          </SpotlightCard>
        </div>

        {/* MOU Banner */}
        <div id="pricing-mou" className="mou-banner relative overflow-hidden p-8 sm:p-12 rounded-3xl border-2 border-[#FACC15] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-yellow-500/15">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1629] via-[#120F1D] to-[#1A1629]" />
          <div className="absolute inset-0 bg-[#FACC15]/5 pointer-events-none" />
          {/* Corner accent */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#FACC15]/15 blur-3xl rounded-full pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="font-code text-xs font-bold text-[#FACC15] uppercase tracking-wider block mb-3">
              CAMPUS-WIDE PARTNERSHIP // OFFICIAL MOU
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-black text-white mb-3">
              ₹1,000 For 4 Years Per Student
            </h3>
            <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">
              Complete placement LMS access for all 4 engineering years. Department heads get full batch analytics, and placement teams get ready-to-place candidates.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {['12,500+ Questions', 'Batch Analytics', 'Proctored Tests', 'College Dashboard'].map((f) => (
                <span key={f} className="font-tech text-xs px-3 py-1 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/30 text-[#FACC15] font-semibold">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onOpenMOU}
            className="btn-yellow-primary px-10 py-4 text-sm flex items-center gap-2.5 shrink-0 glow-yellow-sm relative z-10 group"
          >
            <span>Apply for College MOU</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
