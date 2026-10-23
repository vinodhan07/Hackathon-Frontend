import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Award, ShieldCheck, Star, Quote } from 'lucide-react';
import SpotlightCard from './SpotlightCard.jsx';

gsap.registerPlugin(ScrollTrigger);

const STORIES = [
  {
    name: 'Priya Ramachandran',
    college: 'Government College of Engineering, Salem',
    role: 'Software Developer',
    company: 'Zoho Corporation',
    packageTier: '₹8.5 LPA',
    avatar: 'P',
    avatarColor: '#FACC15',
    quote:
      "I was terrified of Zoho Round 2 & 3. Dkoder's actual company-tagged problems for railway reservation and taxi booking matched the drive 100%. The consistency streak kept me disciplined every single day.",
    verified: 'Verified Placement Drive 2026',
  },
  {
    name: 'Rahul Murali',
    college: 'Coimbatore Institute of Technology',
    role: 'Digital Innovator',
    company: 'TCS Digital',
    packageTier: '₹7.6 LPA',
    avatar: 'R',
    avatarColor: '#A78BFA',
    quote:
      "TCS NQT compiler constraints are notoriously strict on time. Practicing on Dkoder's live coding arena with identical runtime boundaries gave me the speed to clear both coding questions in 35 minutes.",
    verified: 'Verified NQT 2026',
  },
  {
    name: 'Karthik Subramanian',
    college: 'PSG College of Technology',
    role: 'SDE-1',
    company: 'Amazon AWS',
    packageTier: '₹16.5 LPA',
    avatar: 'K',
    avatarColor: '#34D399',
    quote:
      'The ₹10+ LPA filter track is unmatched. The questions are not generic LeetCode copies; they are actual interview variations asked in Indian university pools.',
    verified: 'Verified Offer 2026',
  },
  {
    name: 'Dr. S. Narayanan',
    college: 'Head of Placement & Training',
    role: 'Institutional Partner',
    company: 'Sri Krishna College of Tech',
    packageTier: '89.4% Batch Placed',
    avatar: 'N',
    avatarColor: '#FB923C',
    quote:
      "Seeing the whole batch on the Dkoder telemetry radar changed how our department operates. We identified our batch's dynamic programming gap 3 months before drives started and conducted targeted interventions.",
    verified: 'Campus MOU Partner',
  },
];

export default function WallOfFame() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.story-card', {
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.stories-grid',
        start: 'top 80%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="stories" ref={sectionRef} className="py-28 bg-[#0E0B1A] border-t border-[#FACC15]/20 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FACC15]/4 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/40 font-code text-xs text-[#FACC15] font-bold uppercase tracking-wider mb-5">
            <Award className="w-3.5 h-3.5" />
            PLACEMENT WALL OF PROOF
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Proof Should Be <br />
            <span className="text-[#FACC15]" style={{ filter: 'drop-shadow(0 0 30px rgba(250,204,21,0.3))' }}>
              Something You Can Inspect.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-body leading-relaxed">
            Real student placement outcomes and institutional success across engineering campuses.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="stories-grid grid grid-cols-1 md:grid-cols-2 gap-7">
          {STORIES.map((story) => (
            <SpotlightCard
              key={story.name}
              className="story-card card-clean p-8 flex flex-col justify-between group"
              glowColor="rgba(250,204,21,0.12)"
            >
              <div>
                {/* Quote icon */}
                <div className="mb-5">
                  <Quote className="w-8 h-8 text-[#FACC15]/30 fill-[#FACC15]/15" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#FACC15] fill-[#FACC15]" />
                  ))}
                </div>

                <p className="text-slate-200 font-body text-sm leading-relaxed mb-7">
                  "{story.quote}"
                </p>
              </div>

              <div>
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#FACC15]/30 via-white/5 to-transparent mb-5" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-black text-black text-xl shadow-lg"
                      style={{ backgroundColor: story.avatarColor }}
                    >
                      {story.avatar}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">{story.name}</h4>
                      <span className="font-body text-xs text-slate-500 block mt-0.5">{story.college}</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0 ml-3">
                    <span
                      className="font-code text-base font-black text-[#FACC15] block"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(250,204,21,0.4))' }}
                    >
                      {story.packageTier}
                    </span>
                    <span className="font-tech text-xs text-white/60 font-semibold">{story.company}</span>
                  </div>
                </div>

                {/* Verified badge */}
                <div className="mt-4 flex items-center gap-1.5 font-code text-xs text-[#FACC15]/70">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>{story.verified}</span>
                  <span className="ml-auto font-tech text-slate-500">{story.role}</span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
