import React from 'react';
import { Users, BarChart3, ShieldCheck, ArrowRight, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

export default function CollegeRadar({ onOpenMOU }) {
  return (
    <section id="batch-radar" className="py-24 bg-[#090514] border-t border-[#8B5CF6]/20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#8B5CF6]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/40 font-code text-xs text-[#FACC15] font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            FOR FACULTY, HODS & TRAINING OFFICERS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Now Imagine Seeing the Whole Batch.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-tech">
            Who is practising consistently? Where is the batch getting stuck? Which cohort needs attention now before Day 1 placements arrive?
          </p>
        </div>

        {/* 3 Technical SVG Cards (SyncAura Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch mb-12">
          {/* Card 1: Batch Consistency Curve */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-[#8B5CF6]/30 flex flex-col justify-between hover:border-[#FACC15] transition-all group">
            <div>
              {/* Technical SVG Illustration: Curve & Bar Chart */}
              <div className="w-full h-40 bg-[#090514] rounded-xl border border-purple-900/40 p-3 mb-6 relative overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
                  {/* Grid lines */}
                  <line x1="20" y1="20" x2="190" y2="20" stroke="#1E1238" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="60" x2="190" y2="60" stroke="#1E1238" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="100" x2="190" y2="100" stroke="#1E1238" strokeWidth="1" />

                  {/* Bars */}
                  <rect x="35" y="65" width="14" height="35" rx="3" fill="#3B2070" />
                  <rect x="65" y="45" width="14" height="55" rx="3" fill="#5B21B6" />
                  <rect x="95" y="30" width="14" height="70" rx="3" fill="#7C3AED" />
                  <rect x="125" y="20" width="14" height="80" rx="3" fill="#8B5CF6" />
                  <rect x="155" y="10" width="14" height="90" rx="3" fill="#FACC15" />

                  {/* Trend Curve */}
                  <path
                    d="M 35 65 Q 95 30 162 10"
                    stroke="#FACC15"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="162" cy="10" r="4.5" fill="#FACC15" />
                </svg>
                <div className="absolute top-2 right-2 font-code text-[10px] font-bold px-2 py-0.5 rounded bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/40">
                  94.2% CONSISTENCY
                </div>
              </div>

              <span className="font-code text-xs text-[#8B5CF6] font-bold uppercase tracking-wider block mb-1">
                COHORT TELEMETRY
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Real-Time Daily Coding Pulse
              </h3>
              <p className="text-slate-300 font-tech text-xs leading-relaxed">
                Track whether 600 students solved their daily 3 coding challenges. Automated reminders re-engage inactive students before habits drop.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-purple-950/60 flex items-center justify-between font-code text-xs text-slate-400">
              <span>Avg Daily Problems:</span>
              <span className="text-[#FACC15] font-bold">4.6 / Student</span>
            </div>
          </div>

          {/* Card 2: Topic Blocker Radar */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-[#8B5CF6]/30 flex flex-col justify-between hover:border-[#8B5CF6] transition-all group">
            <div>
              {/* Technical SVG Illustration: Radar / Donut */}
              <div className="w-full h-40 bg-[#090514] rounded-xl border border-purple-900/40 p-3 mb-6 relative overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
                  <circle cx="100" cy="60" r="45" stroke="#1E1238" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="100" cy="60" r="30" stroke="#2D1B54" strokeWidth="2" />
                  <circle cx="100" cy="60" r="15" fill="#130924" stroke="#8B5CF6" strokeWidth="2" />

                  {/* Crosshairs */}
                  <line x1="100" y1="10" x2="100" y2="110" stroke="#1E1238" strokeWidth="1" />
                  <line x1="50" y1="60" x2="150" y2="60" stroke="#1E1238" strokeWidth="1" />

                  {/* Blocker Points */}
                  <circle cx="125" cy="38" r="5" fill="#EF4444" className="animate-pulse" />
                  <circle cx="75" cy="45" r="4.5" fill="#FACC15" />
                  <circle cx="115" cy="85" r="4" fill="#8B5CF6" />
                </svg>
                <div className="absolute top-2 right-2 font-code text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/40">
                  BLOCKER: DYNAMIC PROGRAMMING
                </div>
              </div>

              <span className="font-code text-xs text-red-400 font-bold uppercase tracking-wider block mb-1">
                ACCURACY RADAR
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Instant Blocker Diagnostics
              </h3>
              <p className="text-slate-300 font-tech text-xs leading-relaxed">
                Know immediately that 42% of 3rd years failed the Knapsack problem during TCS mock tests so trainers can intervene before the drive.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-purple-950/60 flex items-center justify-between font-code text-xs text-slate-400">
              <span>Top Failure Area:</span>
              <span className="text-red-400 font-bold">2D DP & Trees</span>
            </div>
          </div>

          {/* Card 3: Proctored Assessments & Security Shield */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-[#8B5CF6]/30 flex flex-col justify-between hover:border-[#FACC15] transition-all group">
            <div>
              {/* Technical SVG Illustration: Shield & Verification */}
              <div className="w-full h-40 bg-[#090514] rounded-xl border border-purple-900/40 p-3 mb-6 relative overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
                  {/* Outer security shield */}
                  <path
                    d="M 100 20 C 125 20, 140 30, 140 55 C 140 85, 110 100, 100 108 C 90 100, 60 85, 60 55 C 60 30, 75 20, 100 20 Z"
                    fill="#130924"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                  />
                  {/* Verified Checkmark inside Shield */}
                  <path
                    d="M 85 58 L 96 69 L 118 47"
                    stroke="#FACC15"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute top-2 right-2 font-code text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  99.9% PROCTORED
                </div>
              </div>

              <span className="font-code text-xs text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                INSTITUTIONAL INTEGRITY
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Proctored Entrance Simulations
              </h3>
              <p className="text-slate-300 font-tech text-xs leading-relaxed">
                Run TCS NQT, InfyTQ, and Wipro mock test series with automated code similarity detection, tab-switch monitoring, and verified rankings.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-purple-950/60 flex items-center justify-between font-code text-xs text-slate-400">
              <span>Malpractice Detection:</span>
              <span className="text-emerald-400 font-bold">Active Shield</span>
            </div>
          </div>
        </div>

        {/* Institution MOU Banner Trigger */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#1C1038] via-[#130924] to-[#1C1038] border-2 border-[#8B5CF6]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-purple-950/50">
          <div>
            <span className="font-code text-xs font-bold text-[#FACC15] uppercase tracking-wider block mb-1">
              COLLEGE PARTNERSHIP
            </span>
            <h3 className="font-display text-2xl font-black text-white">
              ₹1,000 For 4 Years Per Student
            </h3>
            <p className="text-slate-300 font-tech text-sm mt-1 max-w-xl">
              Complete placement LMS access for all 4 engineering years. Department heads get full cohort analytics and training officer dashboards.
            </p>
          </div>

          <button
            onClick={onOpenMOU}
            className="px-8 py-4 rounded-xl bg-[#FACC15] text-black font-tech text-sm font-extrabold hover:bg-[#FFE600] active:scale-95 transition-all flex items-center gap-2 shrink-0 glow-yellow shadow-xl shadow-yellow-500/20"
          >
            <span>Apply for College MOU</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}
