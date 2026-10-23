import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Building2, TrendingUp, Zap, Award } from 'lucide-react';
import CountUp from './CountUp.jsx';
import SpotlightCard from './SpotlightCard.jsx';

gsap.registerPlugin(ScrollTrigger);

const COMPANIES = [
  { name: 'Zoho Corporation', role: 'Software Developer', avg: '₹6.5 - 10 LPA', logo: 'Z' },
  { name: 'TCS Digital', role: 'Digital Innovator', avg: '₹7.5 - 9.2 LPA', logo: 'T' },
  { name: 'Amazon AWS', role: 'SDE-1', avg: '₹14 - 22 LPA', logo: 'A' },
  { name: 'Infosys DSE', role: 'Specialist Programmer', avg: '₹6.5 - 9.5 LPA', logo: 'I' },
  { name: 'Cognizant GenC', role: 'Next Developer', avg: '₹6.8 - 8.5 LPA', logo: 'C' },
  { name: 'Cisco Systems', role: 'Consulting Engineer', avg: '₹12 - 16 LPA', logo: 'Ci' },
  { name: 'Google Cloud', role: 'Technical Solutions', avg: '₹18 - 28 LPA', logo: 'G' },
  { name: 'Freshworks', role: 'Product Engineer', avg: '₹8 - 14 LPA', logo: 'F' },
  { name: 'Oracle India', role: 'Applications Developer', avg: '₹10 - 15 LPA', logo: 'O' },
  { name: 'Wipro Turbo', role: 'Project Engineer', avg: '₹6 - 8.5 LPA', logo: 'W' },
];

const STATS = [
  { value: 12500, suffix: '+', label: 'Real Placement Questions', icon: Zap },
  { value: 500, suffix: '+', label: 'Companies Tagged & Tested', icon: Building2 },
  { value: 1000, prefix: '₹', label: 'For 4 Years / Student', icon: Award },
  { value: 94.2, suffix: '%', label: 'Batch Consistency Rate', icon: TrendingUp },
];

export default function StatsMarquee() {
  const sectionRef = useRef(null);

  return (
    <div id="stats" ref={sectionRef} className="border-y border-[#FACC15]/20 bg-[#0E0B1A] py-20 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FACC15]/30 to-transparent" />

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="card-stagger grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map(({ value, prefix = '', suffix = '', label, icon: Icon }, i) => (
            <SpotlightCard
              key={label}
              className="stagger-item card-clean p-7 text-center group cursor-default"
              glowColor="rgba(250,204,21,0.15)"
            >
              <div className="flex justify-center mb-3">
                <div className="w-11 h-11 rounded-xl bg-[#FACC15]/15 border border-[#FACC15]/30 flex items-center justify-center group-hover:bg-[#FACC15]/25 transition-colors">
                  <Icon className="w-5 h-5 text-[#FACC15]" />
                </div>
              </div>
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#FACC15] block tracking-tight">
                <CountUp to={value} prefix={prefix} suffix={suffix} duration={1.8} />
              </span>
              <span className="font-tech text-xs text-slate-400 font-semibold uppercase tracking-wider mt-2.5 block leading-snug">
                {label}
              </span>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Marquee Header */}
      <div className="flex items-center gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#FACC15]/30" />
        <span className="font-code text-xs text-[#FACC15] tracking-widest uppercase font-bold shrink-0">
          VERIFIED HIRING PARTNER QUESTION POOLS
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#FACC15]/30" />
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0E0B1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0E0B1A] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-5">
          {[...COMPANIES, ...COMPANIES].map((comp, idx) => (
            <div
              key={`${comp.name}-${idx}`}
              className="flex items-center gap-3.5 px-5 py-3.5 rounded-xl bg-[#120F1D] border border-[#FACC15]/20 shrink-0 hover:border-[#FACC15]/70 hover:bg-[#1A1629] transition-all duration-300 group cursor-default"
            >
              {/* Logo Avatar */}
              <div className="w-9 h-9 rounded-lg bg-[#FACC15]/15 border border-[#FACC15]/30 flex items-center justify-center font-display font-black text-sm text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-black transition-colors">
                {comp.logo}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-sm text-white tracking-wide group-hover:text-[#FACC15] transition-colors">
                  {comp.name}
                </span>
                <div className="flex items-center gap-2 text-[11px] font-code text-slate-400 mt-0.5">
                  <span>{comp.role}</span>
                  <span className="w-1 h-1 rounded-full bg-[#FACC15]/50" />
                  <span className="text-[#FACC15] font-bold">{comp.avg}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
