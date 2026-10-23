import React, { useState, useEffect } from 'react';
import { Code2, Trophy, Users, Layers, ExternalLink, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenSubmit, onOpenMOU }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Practice Lab', href: '#practice' },
    { label: 'Batch Radar (Colleges)', href: '#batch-radar' },
    { label: '24H Hackathon Hub', href: '#hackathon' },
    { label: 'Placement Proof', href: '#wall-of-fame' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090514]/90 backdrop-blur-xl border-b border-[#8B5CF6]/20 py-3.5 shadow-2xl shadow-purple-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#130924] border border-[#8B5CF6]/50 flex items-center justify-center glow-purple transition-transform group-hover:scale-105">
            <span className="font-display font-black text-[#FACC15] text-xl">D</span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FACC15] animate-beacon" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-[#FACC15] transition-colors">
                DKODER
              </span>
              <span className="font-code text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/30">
                PRO
              </span>
            </div>
            <span className="font-tech text-[10px] tracking-widest text-[#8B5CF6] uppercase font-semibold">
              The Placement LMS
            </span>
          </div>
        </a>

        {/* Live Status Beacon (Desktop) */}
        <div className="hidden xl:flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#130924] border border-[#8B5CF6]/30">
          <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-ping" />
          <span className="font-code text-xs text-slate-300">
            24H SOLO CHALLENGE: <strong className="text-[#FACC15]">₹3,000 STIPEND</strong>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-tech text-sm text-slate-300 hover:text-[#FACC15] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FACC15] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenSubmit}
            className="font-tech text-xs font-bold px-4 py-2.5 rounded-xl border border-[#8B5CF6]/40 text-[#8B5CF6] hover:bg-[#8B5CF6]/10 hover:border-[#8B5CF6] transition-all flex items-center gap-1.5"
          >
            <Trophy className="w-3.5 h-3.5 text-[#FACC15]" />
            Submit Hackathon
          </button>

          <a
            href="#practice"
            className="font-tech text-xs font-extrabold px-5 py-2.5 rounded-xl bg-[#FACC15] text-[#090514] hover:bg-[#FFE600] transition-all shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 flex items-center gap-1.5 glow-yellow"
          >
            <span>Start Practicing</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#130924] border border-[#8B5CF6]/30 text-white hover:text-[#FACC15]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090514]/98 border-b border-[#8B5CF6]/30 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-tech text-base text-slate-200 hover:text-[#FACC15] py-2 border-b border-purple-950/40"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmit();
              }}
              className="w-full font-tech text-sm font-bold py-3 rounded-xl border border-[#8B5CF6]/50 text-[#FACC15] flex items-center justify-center gap-2"
            >
              <Trophy className="w-4 h-4 text-[#FACC15]" />
              Submit Hackathon Project
            </button>
            <a
              href="#practice"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full font-tech text-sm font-extrabold py-3 rounded-xl bg-[#FACC15] text-black text-center flex items-center justify-center gap-1.5"
            >
              <span>Start Free Practice</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
