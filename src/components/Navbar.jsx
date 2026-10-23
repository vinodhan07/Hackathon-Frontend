import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Menu, X, Building2, Zap } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Navbar({ onOpenMOU, onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP entrance for nav items
  useGSAP(() => {
    gsap.from('.nav-item', {
      opacity: 0,
      y: -12,
      stagger: 0.08,
      duration: 0.5,
      ease: 'power2.out',
      delay: 0.3,
    });
    gsap.from('.nav-logo', {
      opacity: 0,
      x: -20,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.1,
    });
    gsap.from('.nav-cta', {
      opacity: 0,
      x: 20,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.2,
    });
  }, { scope: headerRef });

  const navLinks = [
    { label: 'Platform', href: '#overview' },
    { label: 'Question Bank', href: '#practice' },
    { label: 'Batch Radar', href: '#batch-radar' },
    { label: 'Placement Proof', href: '#stories' },
    { label: 'MOU Partner', href: '#pricing-mou' },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0812]/92 backdrop-blur-xl border-b border-[#FACC15]/20 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <a href="#" className="nav-logo flex items-center gap-3 group focus:outline-none shrink-0">
          <div className="relative w-10 h-10 rounded-xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-yellow-500/30 group-hover:scale-105 group-hover:rotate-3 transition-all duration-200">
            <span className="font-display font-black text-black text-2xl">D</span>
            {/* Glow dot */}
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#FACC15] border-2 border-[#0A0812] animate-ping opacity-70" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-[#FACC15] transition-colors">
                DKODER
              </span>
              <span className="font-code text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#FACC15] text-black">
                LMS
              </span>
            </div>
            <span className="font-tech text-[9px] tracking-widest text-slate-500 uppercase font-semibold">
              The Placement Platform
            </span>
          </div>
        </a>

        {/* Live Hackathon Pill — centered */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FACC15]/10 border border-[#FACC15]/30 nav-item">
          <Zap className="w-3 h-3 text-[#FACC15] fill-current animate-pulse" />
          <span className="font-code text-xs text-slate-300">
            TECH-HIKE: <strong className="text-[#FACC15]">24H HACKATHON LIVE</strong>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-item font-tech text-sm font-medium text-slate-400 hover:text-[#FACC15] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#FACC15] group-hover:w-full transition-all duration-200 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="nav-cta hidden md:flex items-center gap-2.5">
          <button
            onClick={onOpenMOU}
            className="btn-outline-clean text-xs px-4 py-2.5 flex items-center gap-1.5 shrink-0"
          >
            <Building2 className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>College MOU</span>
          </button>

          <a
            href="#practice"
            className="btn-yellow-primary text-xs px-5 py-2.5 flex items-center gap-1.5 shrink-0"
          >
            <span>Start Practicing</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-[#120F1D] border border-[#FACC15]/30 text-white hover:text-[#FACC15] hover:border-[#FACC15] transition-all"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0812]/98 backdrop-blur-xl border-b border-[#FACC15]/20 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-tech text-base text-slate-300 hover:text-[#FACC15] py-3 px-3 rounded-xl hover:bg-[#FACC15]/8 transition-all border-b border-white/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenMOU(); }}
              className="w-full btn-outline-clean text-sm py-3.5 flex items-center justify-center gap-2"
            >
              <Building2 className="w-4 h-4 text-[#FACC15]" />
              <span>Apply for College MOU</span>
            </button>
            <a
              href="#practice"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-yellow-primary text-sm py-3.5 text-center flex items-center justify-center gap-1.5"
            >
              <span>Explore Practice Arena</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
