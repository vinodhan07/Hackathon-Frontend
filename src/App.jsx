import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp } from 'lucide-react';

import Preloader from './components/Preloader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StatsMarquee from './components/StatsMarquee.jsx';
import PracticeLab from './components/PracticeLab.jsx';
import CollegeRadar from './components/CollegeRadar.jsx';
import TechHikeArena from './components/TechHikeArena.jsx';
import WallOfFame from './components/WallOfFame.jsx';
import Footer from './components/Footer.jsx';
import SubmissionModal from './components/SubmissionModal.jsx';
import MOUModal from './components/MOUModal.jsx';
import HackathonHub from './components/HackathonHub.jsx';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isMOUModalOpen, setIsMOUModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef(null);

  // GSAP Smooth Entrance on preloader completion
  useGSAP(
    () => {
      if (!preloaderComplete) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('header', {
        y: -35,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          'h1',
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          '.card-hero',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        );

      // Scroll reveal for all sections
      gsap.utils.toArray('.section-reveal').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Stagger cards on scroll
      gsap.utils.toArray('.card-stagger').forEach((group) => {
        const cards = group.querySelectorAll('.stagger-item');
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 80%',
          },
        });
      });
    },
    { scope: mainRef, dependencies: [preloaderComplete] }
  );

  // Scroll-to-top button visibility
  React.useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { scrollTo: 0, duration: 1, ease: 'power3.inOut' });
  };

  return (
    <div
      ref={mainRef}
      className="min-h-screen bg-[#0A0812] text-slate-100 relative selection:bg-[#FACC15] selection:text-black font-body"
    >
      {/* 1. Fast Tech Boot Preloader */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* 2. Clean Sticky Glassmorphism Header */}
      <Navbar
        onOpenMOU={() => setIsMOUModalOpen(true)}
        onOpenDemo={() => setIsMOUModalOpen(true)}
      />

      <main className="relative">
        {/* 3. Hero Section */}
        <Hero
          onOpenMOU={() => setIsMOUModalOpen(true)}
          onOpenDemo={() => setIsMOUModalOpen(true)}
        />

        {/* 4. Live Statistics & Hiring Partner Logo Marquee */}
        <div className="section-reveal">
          <StatsMarquee />
        </div>

        {/* 5. Interactive Practice Lab */}
        <div className="section-reveal">
          <PracticeLab />
        </div>

        {/* 6. College Batch Radar */}
        <div className="section-reveal">
          <CollegeRadar onOpenMOU={() => setIsMOUModalOpen(true)} />
        </div>

        {/* 7. Tech-Hike Hackathon Arena */}
        <div className="section-reveal">
          <TechHikeArena onOpenSubmit={() => setIsSubmitModalOpen(true)} />
        </div>

        {/* 8. Hackathon Hub */}
        <div className="section-reveal">
          <HackathonHub onOpenSubmit={() => setIsSubmitModalOpen(true)} />
        </div>

        {/* 9. Placement Wall of Proof */}
        <div className="section-reveal">
          <WallOfFame />
        </div>

        {/* 10. High-Conversion Footer */}
        <Footer onOpenMOU={() => setIsMOUModalOpen(true)} />
      </main>

      {/* Modals */}
      <SubmissionModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />

      <MOUModal
        isOpen={isMOUModalOpen}
        onClose={() => setIsMOUModalOpen(false)}
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl btn-yellow-primary flex items-center justify-center shadow-xl shadow-yellow-500/30"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
