import React from 'react';
import { Layers, Building2, TrendingUp, Award, CheckCircle } from 'lucide-react';

const COMPANIES = [
  { name: 'Zoho Corporation', role: 'Software Developer', avg: '₹6.5 - 10 LPA' },
  { name: 'TCS Digital', role: 'Digital Innovator', avg: '₹7.5 - 9.2 LPA' },
  { name: 'Amazon', role: 'SDE-1', avg: '₹14 - 22 LPA' },
  { name: 'Infosys DSE', role: 'Specialist Programmer', avg: '₹6.5 - 9.5 LPA' },
  { name: 'Cognizant GenC', role: 'Next Developer', avg: '₹6.8 - 8.5 LPA' },
  { name: 'Cisco Systems', role: 'Consulting Engineer', avg: '₹12 - 16 LPA' },
  { name: 'Google Cloud', role: 'Technical Solutions', avg: '₹18 - 28 LPA' },
  { name: 'Freshworks', role: 'Product Engineer', avg: '₹8 - 14 LPA' },
  { name: 'Accenture', role: 'Advanced App Engineer', avg: '₹6.5 - 8.5 LPA' },
];

export default function StatsMarquee() {
  return (
    <div className="border-y border-[#8B5CF6]/20 bg-[#090514]/60 py-10 relative overflow-hidden">
      {/* 4 Pillars Stat Counter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="glass-panel p-5 rounded-2xl border border-[#8B5CF6]/25">
            <span className="font-display text-3xl sm:text-4xl font-black text-[#FACC15] block">
              12,500+
            </span>
            <span className="font-tech text-xs text-slate-300 font-bold uppercase tracking-wider mt-1 block">
              Real Placement Questions
            </span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#8B5CF6]/25">
            <span className="font-display text-3xl sm:text-4xl font-black text-white block">
              500+
            </span>
            <span className="font-tech text-xs text-slate-300 font-bold uppercase tracking-wider mt-1 block">
              Companies Tagged & Tested
            </span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#8B5CF6]/25">
            <span className="font-display text-3xl sm:text-4xl font-black text-[#8B5CF6] block">
              94.2%
            </span>
            <span className="font-tech text-xs text-slate-300 font-bold uppercase tracking-wider mt-1 block">
              Batch Consistency Rate
            </span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#FACC15]/30">
            <span className="font-display text-3xl sm:text-4xl font-black text-[#FACC15] block">
              ₹3,000<span className="text-sm font-tech text-slate-400">/mo</span>
            </span>
            <span className="font-tech text-xs text-slate-300 font-bold uppercase tracking-wider mt-1 block">
              Hackathon Internship Stipend
            </span>
          </div>
        </div>
      </div>

      {/* Marquee Header Note */}
      <div className="text-center font-code text-xs text-slate-400 tracking-widest uppercase mb-4">
        TARGETED PLACEMENT TRACKS & COMPANY EXAMS
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden flex mask-radial">
        <div className="animate-marquee flex items-center gap-6">
          {[...COMPANIES, ...COMPANIES].map((comp, idx) => (
            <div
              key={`${comp.name}-${idx}`}
              className="flex items-center gap-3.5 px-5 py-3 rounded-xl bg-[#130924] border border-[#8B5CF6]/30 shrink-0 hover:border-[#FACC15] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#090514] border border-[#8B5CF6]/40 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-[#FACC15]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-sm text-white tracking-wide">{comp.name}</span>
                <div className="flex items-center gap-2 text-[11px] font-code text-slate-400">
                  <span>{comp.role}</span>
                  <span className="text-[#FACC15] font-bold">({comp.avg})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
