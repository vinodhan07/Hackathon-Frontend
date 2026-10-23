import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Trophy, Calendar, Flame, Clock, ExternalLink, ArrowRight, Zap } from 'lucide-react';
import SpotlightCard from './SpotlightCard.jsx';

gsap.registerPlugin(ScrollTrigger);

const EVENTS = [
  {
    title: 'Dkoder 24-Hour Solo Build-a-Thon',
    tag: '🔴 ONGOING NOW',
    date: 'Oct 23 · 11:00 AM – 2:00 PM',
    reward: '₹3,000/mo Internship Stipend',
    desc: 'Architect and ship a production-ready, interactive web interface evaluated on UI/UX, creativity, brand fit, and impact.',
    active: true,
    participants: '247 participants',
    timeLeft: '02:47:23',
  },
  {
    title: 'TCS NQT All-India Mega Mock Series',
    tag: '🟡 UPCOMING',
    date: 'Next Saturday · 10:00 AM',
    reward: 'All-India College Rank + Verified Badges',
    desc: 'Compete with 12,000+ engineering students under identical TCS compiler time constraints.',
    active: false,
    participants: '12,400+ registered',
    timeLeft: null,
  },
  {
    title: 'Zoho DSA Round 2 & 3 Hack Sprint',
    tag: '⚡ WEEKLY',
    date: 'Every Wednesday Evening',
    reward: 'Fast-Track Interview Referrals',
    desc: 'Solve raw application-level OOP problems with live peer leaderboard and Zoho HR visibility.',
    active: false,
    participants: '3,200+ weekly',
    timeLeft: null,
  },
];

export default function TechHikeArena({ onOpenSubmit }) {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.event-card', {
      opacity: 0,
      y: 45,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.events-grid',
        start: 'top 80%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="events" ref={sectionRef} className="py-28 bg-[#0A0812] border-t border-[#FACC15]/20 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#FACC15]/6 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#8B5CF6]/6 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-7">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/40 font-code text-xs text-[#FACC15] font-bold uppercase tracking-wider mb-5">
              <Flame className="w-3.5 h-3.5" />
              TECH-HIKE // HACKATHONS & EVENTS
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Competitive Leagues. <br />
              <span className="text-[#FACC15]" style={{ filter: 'drop-shadow(0 0 30px rgba(250,204,21,0.35))' }}>
                Proof of Work.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-body max-w-xl leading-relaxed">
              From fast-paced 24-hour solo challenges to full campus coding leagues. Build verified portfolio projects and earn direct internship offers.
            </p>
          </div>

          <button
            onClick={onOpenSubmit}
            className="btn-yellow-primary px-7 py-3.5 text-xs flex items-center gap-2 self-start md:self-end shrink-0 glow-yellow-sm group"
          >
            <Trophy className="w-4 h-4 text-black" />
            <span>Submit Hackathon Project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Events Grid */}
        <div className="events-grid grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
          {EVENTS.map((evt) =>
            evt.active ? (
              // Active event — extra prominent
              <SpotlightCard
                key={evt.title}
                className="event-card relative p-7 rounded-2xl border-2 border-[#FACC15] flex flex-col justify-between bg-gradient-to-b from-[#1C162E] to-[#120F1D] shadow-2xl shadow-yellow-500/15"
                glowColor="rgba(250,204,21,0.2)"
              >
                {/* Pulsing live dot */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FACC15]" />
                  </span>
                  <span className="font-code text-[10px] text-[#FACC15] font-bold">LIVE</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-code text-[11px] font-black px-3 py-1 rounded-full bg-[#FACC15] text-black">
                      {evt.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2.5 leading-snug pr-8">
                    {evt.title}
                  </h3>
                  <p className="text-slate-300 font-body text-sm leading-relaxed mb-5">{evt.desc}</p>

                  {/* Timer */}
                  {evt.timeLeft && (
                    <div className="flex items-center gap-2 mb-4 p-3 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/25">
                      <Clock className="w-4 h-4 text-[#FACC15]" />
                      <span className="font-code text-sm font-black text-[#FACC15]">Time Remaining: {evt.timeLeft}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#FACC15]/20 space-y-2">
                  <div className="flex items-center justify-between font-code text-xs">
                    <span className="text-[#FACC15] font-bold">{evt.reward}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-tech text-[11px] text-slate-400">
                    <Zap className="w-3 h-3 text-[#FACC15]" />
                    <span>{evt.participants}</span>
                    <span className="mx-1">·</span>
                    <Calendar className="w-3 h-3" />
                    <span>{evt.date}</span>
                  </div>
                  <button
                    onClick={onOpenSubmit}
                    className="w-full mt-2 btn-yellow-primary py-2.5 text-xs flex items-center justify-center gap-1.5"
                  >
                    <span>Submit Your Project Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </SpotlightCard>
            ) : (
              <SpotlightCard
                key={evt.title}
                className="event-card p-7 rounded-2xl border border-white/8 bg-[#120F1D] hover:border-[#FACC15]/40 transition-all flex flex-col justify-between"
                glowColor="rgba(250,204,21,0.1)"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-code text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/8 text-slate-300">
                      {evt.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2.5 leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-slate-400 font-body text-sm leading-relaxed mb-4">{evt.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/8 space-y-1.5">
                  <div className="flex items-center justify-between font-code text-xs">
                    <span className="text-[#FACC15] font-bold">{evt.reward}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-tech text-[11px] text-slate-500">
                    <Zap className="w-3 h-3 text-slate-500" />
                    <span>{evt.participants}</span>
                    <span className="mx-1">·</span>
                    <Calendar className="w-3 h-3" />
                    <span>{evt.date}</span>
                  </div>
                </div>
              </SpotlightCard>
            )
          )}
        </div>
      </div>
    </section>
  );
}
