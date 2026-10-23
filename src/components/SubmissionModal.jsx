import React, { useState } from 'react';
import { X, Trophy, Globe, CheckCircle2, AlertCircle, Sparkles, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SubmissionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    githubUrl: '',
    deployedUrl: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.college.trim()) errs.college = 'College/University name is required';

    if (!formData.githubUrl.trim() || !formData.githubUrl.includes('github.com')) {
      errs.githubUrl = 'Please provide a valid GitHub repository URL (e.g. https://github.com/user/repo)';
    }

    if (!formData.deployedUrl.trim() || !formData.deployedUrl.startsWith('http')) {
      errs.deployedUrl = 'Please provide a valid deployed URL (e.g. https://my-app.vercel.app)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FACC15', '#8B5CF6', '#7C3AED', '#FFE600'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FACC15', '#8B5CF6'],
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FACC15', '#8B5CF6'],
      });
    }, 250);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const generatedId = `DKODER-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(generatedId);
      setIsSubmitted(true);
      triggerConfetti();
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      college: '',
      githubUrl: '',
      deployedUrl: '',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#130924] border-2 border-[#8B5CF6]/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/80 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#1C1038] text-slate-400 hover:text-white hover:bg-purple-950/60 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Title */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#FACC15]/20 border border-[#FACC15]/40 flex items-center justify-center text-[#FACC15]">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-black text-white">
                  Dkoder Hackathon Project Submission
                </h3>
                <span className="font-code text-xs text-[#FACC15] font-bold">
                  24H SOLO SPRINT // DEADLINE: 2:00 PM
                </span>
              </div>
            </div>

            <p className="text-slate-300 font-tech text-xs mb-6">
              Please enter your public GitHub repository link and deployed URL. Submissions are blindly evaluated by Dkoder engineering leads.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-tech text-xs font-bold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vinodhan S"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-tech text-sm focus:outline-none focus:border-[#FACC15]"
                  />
                  {errors.name && <span className="text-xs text-red-400 mt-1 block font-code">{errors.name}</span>}
                </div>

                <div>
                  <label className="block font-tech text-xs font-bold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vinodhan@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-tech text-sm focus:outline-none focus:border-[#FACC15]"
                  />
                  {errors.email && <span className="text-xs text-red-400 mt-1 block font-code">{errors.email}</span>}
                </div>
              </div>

              <div>
                <label className="block font-tech text-xs font-bold text-slate-300 mb-1">
                  College / University Name *
                </label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  placeholder="e.g. Government College of Engineering, Salem"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-tech text-sm focus:outline-none focus:border-[#FACC15]"
                />
                {errors.college && <span className="text-xs text-red-400 mt-1 block font-code">{errors.college}</span>}
              </div>

              {/* GitHub Link */}
              <div>
                <label className="block font-tech text-xs font-bold text-slate-300 mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#FACC15] fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Public GitHub Repository URL *
                  </span>
                  <span className="text-[10px] text-slate-400">Must be public</span>
                </label>
                <input
                  type="url"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                  placeholder="https://github.com/your-username/hackathon-frontend"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-code text-sm focus:outline-none focus:border-[#FACC15]"
                />
                {errors.githubUrl && <span className="text-xs text-red-400 mt-1 block font-code">{errors.githubUrl}</span>}
              </div>

              {/* Deployed URL */}
              <div>
                <label className="block font-tech text-xs font-bold text-slate-300 mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#FACC15]" />
                    Live Deployed URL *
                  </span>
                  <span className="text-[10px] text-slate-400">Vercel, Netlify, or GitHub Pages</span>
                </label>
                <input
                  type="url"
                  value={formData.deployedUrl}
                  onChange={(e) => setFormData({ ...formData, deployedUrl: e.target.value })}
                  placeholder="https://dkoder-redesign.vercel.app"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-code text-sm focus:outline-none focus:border-[#FACC15]"
                />
                {errors.deployedUrl && <span className="text-xs text-red-400 mt-1 block font-code">{errors.deployedUrl}</span>}
              </div>

              <div>
                <label className="block font-tech text-xs font-bold text-slate-300 mb-1">
                  Key Technical Highlights (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. React 18, GSAP animations, interactive code runner, yellow & purple palette"
                  className="w-full px-4 py-2 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-tech text-xs focus:outline-none focus:border-[#FACC15]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#F59E0B] text-black font-tech text-sm font-black hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 glow-yellow shadow-xl"
                >
                  <Trophy className="w-4 h-4 text-black" />
                  <span>Submit Hackathon Entry</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Receipt View */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-4 text-emerald-400 glow-yellow">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="font-code text-xs text-[#FACC15] font-bold uppercase tracking-widest block mb-1">
              ENTRY VERIFIED & RECORDED
            </span>
            <h3 className="font-display text-3xl font-black text-white mb-2">
              Submission Successful!
            </h3>
            <p className="text-slate-300 font-tech text-sm max-w-md mx-auto mb-6">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your project has been logged into the Dkoder evaluation queue.
            </p>

            {/* Receipt Box */}
            <div className="p-5 rounded-xl bg-[#090514] border border-[#8B5CF6]/40 text-left font-code text-xs space-y-2 mb-6">
              <div className="flex justify-between border-b border-purple-950 pb-2">
                <span className="text-slate-400">Submission ID:</span>
                <span className="text-[#FACC15] font-bold">{submissionId}</span>
              </div>
              <div className="flex justify-between border-b border-purple-950 pb-2">
                <span className="text-slate-400">Candidate:</span>
                <span className="text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-purple-950 pb-2 truncate">
                <span className="text-slate-400">GitHub:</span>
                <span className="text-purple-300 truncate max-w-[280px]">{formData.githubUrl}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Deployed App:</span>
                <span className="text-emerald-400 font-bold truncate max-w-[280px]">{formData.deployedUrl}</span>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#FACC15] text-black font-tech text-xs font-black hover:bg-[#FFE600] transition-all"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
