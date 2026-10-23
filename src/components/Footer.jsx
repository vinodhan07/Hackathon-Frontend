import React from 'react';
import { ArrowRight, Trophy, Code2, Heart, Globe, Shield } from 'lucide-react';

export default function Footer({ onOpenMOU, onOpenSubmit }) {
  return (
    <footer className="bg-[#06030D] border-t border-[#8B5CF6]/30 relative pt-20 pb-12 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#8B5CF6]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top High-Conversion CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1C1038] via-[#130924] to-[#1C1038] border-2 border-[#8B5CF6]/40 p-8 sm:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-code text-xs font-bold text-[#FACC15] uppercase tracking-wider block mb-2">
              YOUR NEXT MOVE
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-black text-white leading-tight">
              One Goal. One Useful Next Step.
            </h3>
            <p className="text-slate-300 font-tech text-sm sm:text-base mt-3 leading-relaxed">
              Practise real company questions, build daily consistency, and walk into placements ready. Colleges can partner with Dkoder for the whole campus.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <a
              href="#practice"
              className="px-8 py-4 rounded-xl bg-[#FACC15] text-black font-tech text-sm font-black hover:bg-[#FFE600] active:scale-95 transition-all text-center flex items-center justify-center gap-2 glow-yellow shadow-lg shadow-yellow-500/20"
            >
              <span>Start on Dkoder</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>

            <button
              onClick={onOpenMOU}
              className="px-8 py-4 rounded-xl bg-[#090514] border border-[#8B5CF6]/50 text-white font-tech text-sm font-bold hover:bg-[#1E1238] hover:border-[#8B5CF6] transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for College MOU</span>
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-purple-950/60 font-tech">
          {/* Col 1: Brand */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#8B5CF6] flex items-center justify-center font-display font-black text-[#FACC15]">
                D
              </div>
              <span className="font-display font-black text-lg text-white">DKODER</span>
              <span className="font-code text-[10px] text-[#FACC15] px-2 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/30">
                PRO
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              The Placement LMS for engineering colleges across India. 12,500+ real interview questions, live compilers, and institutional batch radars.
            </p>
            <div className="font-code text-[11px] text-[#8B5CF6] font-bold">
              Salem, Tamil Nadu // Pan-India
            </div>
          </div>

          {/* Col 2: Student Arena */}
          <div>
            <h5 className="font-code text-xs font-bold text-white uppercase tracking-wider mb-3">
              Practice Tracks
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#practice" className="hover:text-[#FACC15] transition-colors">Zoho Round 2 & 3 DSA</a></li>
              <li><a href="#practice" className="hover:text-[#FACC15] transition-colors">TCS NQT Advanced Coding</a></li>
              <li><a href="#practice" className="hover:text-[#FACC15] transition-colors">Infosys InfyTQ & DSE</a></li>
              <li><a href="#practice" className="hover:text-[#FACC15] transition-colors">₹10+ LPA Product Tracks</a></li>
              <li><a href="#practice" className="hover:text-[#FACC15] transition-colors">Aptitude & Cognitive Labs</a></li>
            </ul>
          </div>

          {/* Col 3: Institutional & Hackathons */}
          <div>
            <h5 className="font-code text-xs font-bold text-white uppercase tracking-wider mb-3">
              Ecosystem
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#batch-radar" className="hover:text-[#FACC15] transition-colors">Batch Consistency Radar</a></li>
              <li><a href="#hackathon" className="hover:text-[#FACC15] transition-colors">24H Solo Hackathons</a></li>
              <li><button onClick={onOpenMOU} className="hover:text-[#FACC15] transition-colors text-left">College MOU Partnerships</button></li>
              <li><button onClick={onOpenSubmit} className="hover:text-[#FACC15] transition-colors text-left">Hackathon Project Submission</button></li>
              <li><a href="#wall-of-fame" className="hover:text-[#FACC15] transition-colors">Verified Placement Proof</a></li>
            </ul>
          </div>

          {/* Col 4: Tech Stack & Compliance */}
          <div>
            <h5 className="font-code text-xs font-bold text-white uppercase tracking-wider mb-3">
              Engineering Specs
            </h5>
            <div className="p-3.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/25 font-code text-[11px] text-slate-300 space-y-1.5">
              <div>FRAMEWORK: <span className="text-[#FACC15]">React 18 + Vite</span></div>
              <div>STYLING: <span className="text-purple-300">Tailwind CSS v4</span></div>
              <div>ANIMATIONS: <span className="text-purple-300">GSAP 3 + @gsap/react</span></div>
              <div>THEME: <span className="text-[#FACC15]">Yellow & Purple Mandatory</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-tech gap-4">
          <div>
            © 2026 Dkoder Platforms Inc. & Tech-Hike Ecosystem. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>for Dkoder Hackathon Flagship Challenge</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
