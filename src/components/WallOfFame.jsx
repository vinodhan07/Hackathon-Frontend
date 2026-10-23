import React from 'react';
import { Award, Quote, CheckCircle, ShieldCheck, Building, Sparkles } from 'lucide-react';

const STORIES = [
  {
    name: 'Priya Ramachandran',
    college: 'GCE Salem',
    role: 'Software Developer',
    company: 'Zoho Corporation',
    packageTier: '₹8.5 LPA',
    avatarLetter: 'P',
    quote:
      'I was terrified of Zoho Round 2 & 3. Dkoder’s actual company-tagged problems for railway reservation and taxi booking matched the drive 100%. The consistency streak kept me disciplined every single day.',
    verified: 'Verified Drive 2026',
  },
  {
    name: 'Rahul Murali',
    college: 'Coimbatore Institute of Technology',
    role: 'Digital Innovator',
    company: 'TCS Digital',
    packageTier: '₹7.6 LPA',
    avatarLetter: 'R',
    quote:
      'TCS NQT compiler constraints are notoriously strict on time. Practicing on Dkoder’s live coding arena with identical runtime boundaries gave me the speed to clear both coding questions in 35 minutes.',
    verified: 'Verified NQT 2026',
  },
  {
    name: 'Karthik Subramanian',
    college: 'PSG Tech, Coimbatore',
    role: 'SDE-1',
    company: 'Amazon AWS',
    packageTier: '₹16.5 LPA',
    avatarLetter: 'K',
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
    avatarLetter: 'N',
    quote:
      'Seeing the whole batch on the Dkoder telemetry radar changed how our department operates. We identified our batch’s dynamic programming gap 3 months before drives started and conducted targeted interventions.',
    verified: 'Campus MOU Partner',
  },
];

export default function WallOfFame() {
  return (
    <section id="wall-of-fame" className="py-24 bg-[#090514] border-t border-[#8B5CF6]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 font-code text-xs text-[#8B5CF6] font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#FACC15]" />
            PLACEMENT WALL OF FAME
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Proof Should Be Something You Can Inspect.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-tech">
            Real student placement outcomes and institutional success across engineering campuses.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {STORIES.map((story) => (
            <div
              key={story.name}
              className="glass-panel p-7 rounded-2xl border border-[#8B5CF6]/25 hover:border-[#FACC15] transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#130924] border border-[#8B5CF6]/50 flex items-center justify-center font-display font-black text-white text-lg">
                      {story.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-white">{story.name}</h4>
                      <span className="font-tech text-xs text-slate-400 block">{story.college}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-code text-sm font-black text-[#FACC15] block">
                      {story.packageTier}
                    </span>
                    <span className="font-tech text-[11px] text-purple-300">{story.company}</span>
                  </div>
                </div>

                <p className="text-slate-300 font-tech text-xs sm:text-sm leading-relaxed italic mb-4">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-purple-950/60 flex items-center justify-between text-xs font-code">
                <span className="text-[#8B5CF6] flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  {story.verified}
                </span>
                <span className="text-slate-400">{story.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
