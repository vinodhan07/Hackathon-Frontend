import React, { useState, useEffect } from 'react';
import { Terminal, Sparkles, Trophy, ArrowRight, Play, CheckCircle2, Flame, Clock } from 'lucide-react';

const DIALOGUES = [
  {
    id: '10lpa',
    pill: 'Goal: ₹10 LPA Dream',
    student: 'I have a dream to get placed with a ₹10 LPA package. Can you help me?',
    bot: 'Sure, I can. I have mapped 48 recursive algorithms, 12 distributed system patterns, and 34 system design mock questions asked in Amazon & Cisco interviews. Your roadmap is ready.',
    badge: 'TOP CTC TRACK',
    salary: '₹10 - ₹18 LPA',
    companies: ['Amazon', 'Cisco', 'Goldman Sachs'],
  },
  {
    id: 'zoho',
    pill: 'Company: Crack Zoho',
    student: 'I want to get placed at Zoho as a Software Developer. Please help me.',
    bot: 'Of course. Zoho round 2 & 3 emphasize raw DSA in C/Java and object-oriented application design (e.g. Railway Reservation, Taxi Booking). 32 company-tagged questions loaded.',
    badge: 'PRODUCT TIER',
    salary: '₹6.5 - ₹10 LPA',
    companies: ['Zoho', 'Freshworks', 'Chargebee'],
  },
  {
    id: 'tcs',
    pill: 'Entrance: TCS NQT Digital',
    student: 'I am preparing for TCS NQT and InfyTQ. How should I pace myself?',
    bot: 'We have compiled 1,420 previous year NQT cognitive and advanced coding problems with exact time-limit compiler constraints. Let’s start with numerical aptitude.',
    badge: 'MASS DRIVE',
    salary: '₹7.2 - ₹9 LPA',
    companies: ['TCS Digital', 'Infosys DSE', 'Cognizant'],
  },
  {
    id: 'habit',
    pill: 'Daily Habit: Build Consistency',
    student: 'I practise coding every day, but I don’t have a structured target.',
    bot: 'DKODER gives you daily targeted problem sets with automated streaks. Engineering colleges across India use this to take their batch consistency to 94.2%.',
    badge: 'STREAK ENGINE',
    salary: 'Consistent Growth',
    companies: ['Daily Code Arena', 'Live Leaderboard'],
  },
];

export default function Hero({ onOpenSubmit, onOpenMOU }) {
  const [selectedGoal, setSelectedGoal] = useState(DIALOGUES[0]);
  const [displayedBotText, setDisplayedBotText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Typewriter effect for Bot responses
  useEffect(() => {
    setIsTyping(true);
    setDisplayedBotText('');
    let index = 0;
    const fullText = selectedGoal.bot;

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedBotText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [selectedGoal]);

  // Hackathon Live Countdown (Countdown to 2:00 PM today)
  const [timeLeft, setTimeLeft] = useState({ hours: '02', minutes: '08', seconds: '34' });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      // Target: 2:00 PM today
      const target = new Date();
      target.setHours(14, 0, 0, 0);

      let diff = target - now;
      if (diff <= 0) {
        // If past 2pm, keep showing final sprint hours
        diff = 1000 * 60 * 60 * 2;
      }

      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0'),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#7C3AED]/25 to-[#FACC15]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#8B5CF6]/20 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FACC15]/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#130924]/80 border border-[#8B5CF6]/40 backdrop-blur-md shadow-lg shadow-purple-950/30">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FACC15]" />
            </span>
            <span className="font-tech text-xs tracking-wider uppercase text-slate-200">
              <strong className="text-[#FACC15]">12,500+ Real Questions</strong> From 500+ Top Companies
            </span>
          </div>
        </div>

        {/* Main Punchy Typography */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.06] text-white">
            Consistency Today. <br />
            <span className="bg-gradient-to-r from-[#FACC15] via-[#FFE600] to-[#8B5CF6] bg-clip-text text-transparent">
              Placements Tomorrow.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            The Placement LMS engineered for India's engineering colleges. Real interview questions with company salary tags, live coding lab, and competitive hackathon leagues.
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#practice"
              className="px-8 py-4 rounded-xl bg-[#FACC15] text-[#090514] font-tech text-sm font-black hover:bg-[#FFE600] transition-all shadow-xl shadow-yellow-500/25 hover:scale-105 active:scale-95 flex items-center gap-2 glow-yellow"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Explore Coding Arena</span>
            </a>

            <button
              onClick={onOpenMOU}
              className="px-8 py-4 rounded-xl bg-[#130924] border border-[#8B5CF6]/40 text-slate-200 font-tech text-sm font-bold hover:bg-[#1C1038] hover:border-[#8B5CF6] transition-all flex items-center gap-2"
            >
              <span>For Colleges: Apply for MOU</span>
              <ArrowRight className="w-4 h-4 text-[#FACC15]" />
            </button>
          </div>
        </div>

        {/* Dual Interactive Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: AI Placement Goal Terminal (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-7 border border-[#8B5CF6]/30 flex flex-col justify-between shadow-2xl shadow-purple-950/40">
            <div>
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#8B5CF6]/20 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="font-code text-xs text-slate-400 ml-2">dkoder-ai-roadmap.sh</span>
                </div>
                <div className="font-code text-[11px] px-2.5 py-0.5 rounded bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/30">
                  INTERACTIVE
                </div>
              </div>

              {/* Goal Switcher Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {DIALOGUES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedGoal(item)}
                    className={`font-tech text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all ${
                      selectedGoal.id === item.id
                        ? 'bg-[#FACC15] text-black font-bold shadow-md shadow-yellow-500/20'
                        : 'bg-[#1C1038] text-slate-300 hover:text-white border border-[#8B5CF6]/30 hover:border-[#8B5CF6]'
                    }`}
                  >
                    {item.pill}
                  </button>
                ))}
              </div>

              {/* Chat Dialogue Display */}
              <div className="space-y-4 font-code text-sm">
                {/* Student Query */}
                <div className="bg-[#090514]/70 p-4 rounded-xl border border-purple-900/40">
                  <div className="text-slate-400 text-xs mb-1 flex items-center gap-1.5">
                    <span className="text-[#8B5CF6] font-bold">STUDENT_QUERY:</span>
                  </div>
                  <p className="text-white font-medium">"{selectedGoal.student}"</p>
                </div>

                {/* AI / Bot Response */}
                <div className="bg-[#1C1038]/80 p-4 rounded-xl border border-[#8B5CF6]/30 relative">
                  <div className="text-[#FACC15] text-xs font-bold mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
                      DKODER_PLACEMENT_ENGINE:
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">{selectedGoal.badge}</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed min-h-[50px]">
                    {displayedBotText}
                    {isTyping && <span className="inline-block w-2 h-4 ml-1 bg-[#FACC15] animate-pulse" />}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Metadata Bar */}
            <div className="pt-5 mt-5 border-t border-[#8B5CF6]/20 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-tech">Target Salary:</span>
                <span className="font-code font-bold text-[#FACC15]">{selectedGoal.salary}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-tech">Tag Matches:</span>
                <div className="flex gap-1.5">
                  {selectedGoal.companies.map((c) => (
                    <span key={c} className="font-code text-[11px] bg-[#090514] px-2 py-0.5 rounded text-purple-300 border border-purple-900/50">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: 24H Hackathon Status & Live Submission Card (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#1C1038] to-[#130924] border-2 border-[#FACC15]/40 p-6 sm:p-7 flex flex-col justify-between shadow-2xl shadow-yellow-500/10 relative overflow-hidden group">
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FACC15]/10 blur-2xl rounded-bl-full pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/40 font-code text-xs text-[#FACC15] font-extrabold">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  FLAGSHIP BUILD-A-THON
                </span>
                <span className="font-code text-xs text-slate-400">24H SOLO</span>
              </div>

              <h3 className="font-display text-2xl font-black text-white leading-tight">
                Dkoder Hackathon Challenge
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Build a production-grade frontend web interface from scratch. Evaluated across UI/UX, Functionality, Code Quality, and Creativity.
              </p>

              {/* Ticking Countdown Timer */}
              <div className="my-6 p-4 rounded-xl bg-[#090514] border border-[#8B5CF6]/30">
                <div className="flex items-center justify-between text-xs text-slate-400 font-tech uppercase tracking-widest mb-2.5">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-[#FACC15]" />
                    Submission Window Closes:
                  </span>
                  <span className="text-[#FACC15] font-bold">2:00 PM TODAY</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center font-code">
                  <div className="bg-[#130924] py-2 rounded-lg border border-purple-900/50">
                    <span className="block text-2xl font-black text-[#FACC15]">{timeLeft.hours}</span>
                    <span className="text-[10px] text-slate-400 tracking-wider">HOURS</span>
                  </div>
                  <div className="bg-[#130924] py-2 rounded-lg border border-purple-900/50">
                    <span className="block text-2xl font-black text-[#FACC15]">{timeLeft.minutes}</span>
                    <span className="text-[10px] text-slate-400 tracking-wider">MINUTES</span>
                  </div>
                  <div className="bg-[#130924] py-2 rounded-lg border border-purple-900/50">
                    <span className="block text-2xl font-black text-white">{timeLeft.seconds}</span>
                    <span className="text-[10px] text-slate-400 tracking-wider">SECONDS</span>
                  </div>
                </div>
              </div>

              {/* Key Hackathon Incentives */}
              <div className="space-y-2.5 text-xs text-slate-300 font-tech">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span>
                    Direct <strong>₹3,000 / month stipend</strong> internship offers (1–6 months).
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span>
                    <strong>Flexible working days</strong> to accommodate university exams.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                  <span>Verified portfolio project link evaluated by Dkoder leads.</span>
                </div>
              </div>
            </div>

            {/* Quick Submit Action Button */}
            <div className="pt-6 mt-6 border-t border-[#8B5CF6]/20">
              <button
                onClick={onOpenSubmit}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#F59E0B] text-black font-tech text-sm font-extrabold hover:brightness-110 transition-all shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2 glow-yellow group-hover:scale-[1.02] active:scale-[0.98]"
              >
                <Trophy className="w-4 h-4 text-black" />
                <span>Submit Your Hackathon Entry</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
