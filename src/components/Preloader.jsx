import React, { useEffect, useState } from 'react';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(12);
  const [statusText, setStatusText] = useState('BOOTING DKODER KERNEL v2.4...');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const steps = [
      { p: 35, text: 'MOUNTING PLACEMENT LMS RUNTIME...' },
      { p: 68, text: 'SYNCING 12,500+ COMPANY QUESTIONS...' },
      { p: 92, text: 'ARMING 24H HACKATHON ARENA...' },
      { p: 100, text: 'DKODER // TECH-HIKE READY' },
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].p);
        setStatusText(steps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(onComplete, 350);
        }, 200);
      }
    }, 220);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090514] transition-opacity duration-300 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-md w-full px-6">
        {/* Glowing Logo Icon */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[#130924] border-2 border-[#8B5CF6]/50 flex items-center justify-center glow-purple">
            <Zap className="w-8 h-8 text-[#FACC15] animate-pulse" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FACC15] animate-beacon" />
        </div>

        {/* Title */}
        <div className="font-display text-2xl font-black tracking-wider text-white mb-2 text-center">
          DKODER <span className="text-[#FACC15]">//</span> TECH-HIKE
        </div>

        {/* Status Line */}
        <div className="font-code text-xs text-[#8B5CF6] tracking-widest mb-6 flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#FACC15]" />
          <span>{statusText}</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#130924] border border-[#8B5CF6]/30 h-2.5 rounded-full overflow-hidden p-0.5 mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#FACC15] rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex justify-between font-code text-[11px] text-slate-400">
          <span>MEM: 100% OK</span>
          <span className="text-[#FACC15] font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
