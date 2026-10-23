import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Trophy, ArrowUp } from 'lucide-react';

import Preloader from './components/Preloader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StatsMarquee from './components/StatsMarquee.jsx';
import PracticeLab from './components/PracticeLab.jsx';
import CollegeRadar from './components/CollegeRadar.jsx';
import HackathonHub from './components/HackathonHub.jsx';
import WallOfFame from './components/WallOfFame.jsx';
import Footer from './components/Footer.jsx';
import SubmissionModal from './components/SubmissionModal.jsx';
import MOUModal from './components/MOUModal.jsx';

gsap.registerPlugin(useGSAP);

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isMOUModalOpen, setIsMOUModalOpen] = useState(false);
  const mainRef = useRef(null);

  // GSAP Entrance Animations once preloader is done
  useGSAP(
    () => {
      if (!preloaderComplete) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('header', {
        y: -40,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          'h1',
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
          },
          '-=0.4'
        )
        .from(
          '.glass-panel',
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
          },
          '-=0.5'
        );
    },
    { scope: mainRef, dependencies: [preloaderComplete] }
  );

  return (
    <div ref={mainRef} className="min-h-screen bg-[#090514] text-slate-100 relative selection:bg-[#FACC15] selection:text-black">
      {/* 1. Tech Boot Preloader */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* 2. Sticky Glassmorphism Header */}
      <Navbar
        onOpenSubmit={() => setIsSubmitModalOpen(true)}
        onOpenMOU={() => setIsMOUModalOpen(true)}
      />

      <main className="relative">
        {/* 3. Hero Section with AI Terminal & Live 24H Ticker */}
        <Hero
          onOpenSubmit={() => setIsSubmitModalOpen(true)}
          onOpenMOU={() => setIsMOUModalOpen(true)}
        />

        {/* 4. Live Statistics & Hiring Partner Marquee */}
        <StatsMarquee />

        {/* 5. Interactive Practice Lab & Code Runner Mockup */}
        <PracticeLab />

        {/* 6. "Now Imagine Seeing the Whole Batch" (College & HOD Radar) */}
        <CollegeRadar onOpenMOU={() => setIsMOUModalOpen(true)} />

        {/* 7. 24H Solo Hackathon Arena & Scoring Rubric */}
        <HackathonHub onOpenSubmit={() => setIsSubmitModalOpen(true)} />

        {/* 8. Placement Wall of Fame (Verified Packages) */}
        <WallOfFame />

        {/* 9. High-Conversion Footer */}
        <Footer
          onOpenMOU={() => setIsMOUModalOpen(true)}
          onOpenSubmit={() => setIsSubmitModalOpen(true)}
        />
      </main>

      {/* Floating Fast Action Trigger (SyncAura Style) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsSubmitModalOpen(true)}
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#FACC15] text-black font-tech text-xs font-black shadow-2xl shadow-yellow-500/30 hover:bg-[#FFE600] hover:scale-105 active:scale-95 transition-all glow-yellow"
          title="Submit Hackathon Entry"
        >
          <Trophy className="w-4 h-4 text-black" />
          <span className="hidden sm:inline">Submit 24H Hackathon Entry</span>
        </button>
      </div>

      {/* Modals */}
      <SubmissionModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />

      <MOUModal
        isOpen={isMOUModalOpen}
        onClose={() => setIsMOUModalOpen(false)}
      />
    </div>
  );
}
