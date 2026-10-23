import React from 'react';
import { ArrowRight, Building2, Heart } from 'lucide-react';

export default function Footer({ onOpenMOU }) {
  return (
    <footer className="bg-[#07050D] border-t border-[#FACC15]/20 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top High-Conversion CTA Banner (Yellow Dominant) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1A1629] via-[#120F1D] to-[#1A1629] border-2 border-[#FACC15] p-8 sm:p-14 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-code text-xs font-bold text-[#FACC15] uppercase tracking-wider block mb-2">
              YOUR NEXT MOVE
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
              One Goal. <br className="hidden sm:inline" />
              <span className="text-[#FACC15]">One Useful Next Step.</span>
            </h3>
            <p className="text-slate-300 font-body text-sm sm:text-base mt-3 leading-relaxed">
              Practise real company questions, track your progress and walk into placements ready. Colleges can partner with Dkoder for the whole campus.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <a
              href="#practice"
              className="btn-yellow-primary px-8 py-4 text-sm flex items-center justify-center gap-2 glow-yellow-sm"
            >
              <span>Start on Dkoder</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>

            <button
              onClick={onOpenMOU}
              className="btn-outline-clean px-8 py-4 text-sm flex items-center justify-center gap-2"
            >
              <Building2 className="w-4 h-4 text-[#FACC15]" />
              <span>For Colleges: Apply for an MOU</span>
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 font-body">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FACC15] flex items-center justify-center font-display font-black text-black">
                D
              </div>
              <span className="font-display font-black text-xl text-white">DKODER</span>
              <span className="font-code text-[10px] text-black bg-[#FACC15] px-1.5 py-0.5 rounded font-black">
                PRO
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              The Placement LMS for engineering colleges across India. 12,500+ real interview questions, live compilers, and institutional batch radars.
            </p>
            <div className="font-code text-xs text-[#FACC15] font-bold">
              ₹1,000 for 4 years per student
            </div>
          </div>

          {/* Col 2: Practice Tracks */}
          <div>
            <h5 className="font-code text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-3">
              Company Question Banks
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400 font-tech">
              <li><a href="#practice" className="hover:text-[#FACC15] transition-colors">Zoho Round 2 & 3 DSA</a></li>
              <li><a href="#practice" className="hover:text-[#FACC15] transition-colors">TCS NQT Advanced Coding</a></li>
              <li><a href="#practice" className="hover:text-[#FACC15] transition-colors">Infosys DSE & InfyTQ</a></li>
              <li><a href="#practice" className="hover:text-[#FACC15] transition-colors">Amazon ₹10+ LPA Product Tracks</a></li>
              <li><a href="#practice" className="hover:text-[#FACC15] transition-colors">Aptitude & Cognitive Labs</a></li>
            </ul>
          </div>

          {/* Col 3: Institutional LMS */}
          <div>
            <h5 className="font-code text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-3">
              For Engineering Colleges
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400 font-tech">
              <li><a href="#batch-radar" className="hover:text-[#FACC15] transition-colors">Batch Telemetry Radar</a></li>
              <li><a href="#batch-radar" className="hover:text-[#FACC15] transition-colors">Topic Blocker Diagnostics</a></li>
              <li><a href="#batch-radar" className="hover:text-[#FACC15] transition-colors">Proctored Entrance Simulations</a></li>
              <li><button onClick={onOpenMOU} className="hover:text-[#FACC15] transition-colors text-left">Campus MOU Partnership</button></li>
              <li><a href="#stories" className="hover:text-[#FACC15] transition-colors">Student Placement Proof</a></li>
            </ul>
          </div>

          {/* Col 4: Platform Specs */}
          <div>
            <h5 className="font-code text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-3">
              Platform Architecture
            </h5>
            <div className="p-4 rounded-xl bg-[#120F1D] border border-white/5 font-code text-[11px] text-slate-300 space-y-1.5">
              <div>ENGINE: <span className="text-[#FACC15]">React 18 + Vite</span></div>
              <div>MOTION: <span className="text-[#FACC15]">GSAP 3 + @gsap/react</span></div>
              <div>DESIGN: <span className="text-[#FACC15]">Electric Yellow Dominant</span></div>
              <div>STATUS: <span className="text-emerald-400 font-bold">Production Ready</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-tech gap-4">
          <div>
            © 2026 Dkoder Platforms Inc. & Tech-Hike Ecosystem. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with precision for Dkoder</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
