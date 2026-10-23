import React from 'react';
import { Trophy, Award, Sparkles, CheckCircle, Clock, Calendar, ArrowRight, ShieldCheck, Flame, Cpu, Palette, Lightbulb } from 'lucide-react';

export default function HackathonHub({ onOpenSubmit }) {
  const criteria = [
    {
      title: 'Design & UX',
      weight: '25%',
      icon: <Palette className="w-6 h-6 text-[#FACC15]" />,
      desc: 'Visual hierarchy, accessibility, typography, responsive execution across mobile and desktop, and micro-interactions.',
      highlight: 'Aesthetic wow-factor & clean spacing',
    },
    {
      title: 'Creativity & Originality',
      weight: '25%',
      icon: <Lightbulb className="w-6 h-6 text-[#8B5CF6]" />,
      desc: 'Innovative features, engaging AI placement roadmaps, interactive code execution, and fresh perspective on developer LMS.',
      highlight: 'Distinctive ideation beyond basic templates',
    },
    {
      title: 'Brand Fit & Visual Concept',
      weight: '25%',
      icon: <Sparkles className="w-6 h-6 text-[#FACC15]" />,
      desc: 'Flawless adoption of the mandatory Yellow & Purple brand palette, honoring Dkoder’s core mission for engineering students.',
      highlight: 'Yellow & Purple cybernetic harmony',
    },
    {
      title: 'Impact & Code Quality',
      weight: '25%',
      icon: <Cpu className="w-6 h-6 text-[#8B5CF6]" />,
      desc: 'Production-ready code architecture, clean component hierarchy, fast load time, and verified deployment on Vercel/Netlify.',
      highlight: 'Production build & deployed readiness',
    },
  ];

  return (
    <section id="hackathon" className="py-24 bg-[#090514] border-t border-[#8B5CF6]/20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#FACC15]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#7C3AED]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/40 font-code text-xs text-[#FACC15] font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            FLAGSHIP 24-HOUR BUILD-A-THON
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Dkoder Hackathon Arena
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-tech">
            A competitive 24-hour solo challenge designed to push your frontend architecture, design sensibility, and problem-solving abilities to the highest standard.
          </p>
        </div>

        {/* 4 Pillars Evaluation Criteria (Bento Grid) */}
        <div className="mb-16">
          <div className="text-center font-code text-xs text-slate-400 uppercase tracking-widest mb-6">
            EVALUATION CRITERIA // 100 POINTS TOTAL (BLIND EVALUATION BY DKODER LEADS)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteria.map((item, idx) => (
              <div
                key={item.title}
                className="glass-panel p-6 rounded-2xl border border-[#8B5CF6]/30 hover:border-[#FACC15] transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#090514] border border-[#8B5CF6]/40 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-display font-black text-2xl text-[#FACC15]">
                      {item.weight}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 font-tech text-xs leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-950/60 font-code text-[11px] text-[#8B5CF6] font-semibold">
                  {item.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perks & Rewards Bento Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left: Perks (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#1C1038] to-[#130924] border border-[#8B5CF6]/40 p-7 shadow-xl">
            <span className="font-code text-xs font-bold text-[#FACC15] uppercase tracking-wider block mb-2">
              WHY YOU SHOULD COMPETE
            </span>
            <h3 className="font-display text-2xl font-black text-white mb-4">
              Real Offers. Flexible Timelines. Production Credibility.
            </h3>

            <div className="space-y-4 font-tech text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FACC15]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#FACC15]">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white">Direct Internship Offers at Dkoder:</strong> Top performers receive direct internship offers with a monthly stipend of <strong>₹3,000 for 1 to 6 months</strong>.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FACC15]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#FACC15]">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white">Flexible Working Days:</strong> Never worry about semester pressure or university exams. Start your internship whenever your academic schedule permits.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#8B5CF6]">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white">Portfolio-Defining Project:</strong> Build a verified, deployed project that stands out on your GitHub profile and resume, demonstrating true frontend capabilities.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Submission Callout (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#130924] border-2 border-[#FACC15]/50 p-7 flex flex-col justify-between shadow-2xl shadow-yellow-500/10">
            <div>
              <span className="font-code text-xs font-bold text-[#FACC15] uppercase tracking-widest block mb-1">
                SUBMISSION REQUIREMENTS
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Deliverable Checklist
              </h3>
              <ul className="space-y-2 text-xs font-tech text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                  <span>Public GitHub repository link</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                  <span>Live deployed URL (Vercel, Netlify, or GitHub Pages)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <span>React 18+, Tailwind CSS, and animations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <span>Mandatory Yellow & Purple color scheme</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenSubmit}
              className="w-full py-4 rounded-xl bg-[#FACC15] text-black font-tech text-sm font-black hover:bg-[#FFE600] active:scale-95 transition-all shadow-xl shadow-yellow-500/25 flex items-center justify-center gap-2 glow-yellow"
            >
              <Trophy className="w-4 h-4 text-black" />
              <span>Launch Submission Form</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
