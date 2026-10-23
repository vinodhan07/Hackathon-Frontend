import React, { useState } from 'react';
import { X, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function MOUModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    collegeName: '',
    officerName: '',
    role: 'Training & Placement Officer (TPO)',
    email: '',
    phone: '',
    batchSize: '500 - 1000 Students',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#130924] border-2 border-[#8B5CF6]/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/80">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#1C1038] text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#FACC15]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Institutional MOU Partnership
                </h3>
                <span className="font-code text-xs text-[#FACC15]">
                  ₹1,000 For 4 Years / Student
                </span>
              </div>
            </div>

            <p className="text-slate-300 font-tech text-xs mb-5">
              Empower your whole engineering campus with real placement question banks, automated mock series, and HOD telemetry radar.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block font-tech text-xs font-bold text-slate-300 mb-1">
                  College / University Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.collegeName}
                  onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                  placeholder="e.g. PSG College of Technology, Coimbatore"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-tech text-xs focus:outline-none focus:border-[#FACC15]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-tech text-xs font-bold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.officerName}
                    onChange={(e) => setFormData({ ...formData, officerName: e.target.value })}
                    placeholder="Dr. K. Ramesh"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-tech text-xs focus:outline-none focus:border-[#FACC15]"
                  />
                </div>

                <div>
                  <label className="block font-tech text-xs font-bold text-slate-300 mb-1">
                    Designation *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-tech text-xs focus:outline-none focus:border-[#FACC15]"
                  >
                    <option>Placement Director / TPO</option>
                    <option>Head of Department (HOD)</option>
                    <option>Dean / Principal</option>
                    <option>Faculty Coordinator</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-tech text-xs font-bold text-slate-300 mb-1">
                    Official Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tpo@college.edu.in"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-tech text-xs focus:outline-none focus:border-[#FACC15]"
                  />
                </div>

                <div>
                  <label className="block font-tech text-xs font-bold text-slate-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-tech text-xs focus:outline-none focus:border-[#FACC15]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-tech text-xs font-bold text-slate-300 mb-1">
                  Eligible Student Batch Size
                </label>
                <select
                  value={formData.batchSize}
                  onChange={(e) => setFormData({ ...formData, batchSize: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090514] border border-[#8B5CF6]/30 text-white font-tech text-xs focus:outline-none focus:border-[#FACC15]"
                >
                  <option>100 - 300 Students</option>
                  <option>300 - 600 Students</option>
                  <option>600 - 1,200 Students</option>
                  <option>1,200+ Students (Full Campus)</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#FACC15] text-black font-tech text-sm font-black hover:bg-[#FFE600] transition-all flex items-center justify-center gap-2 glow-yellow shadow-lg"
                >
                  <span>Submit Institutional MOU Request</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-3 text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-display text-xl font-bold text-white mb-2">
              MOU Request Received
            </h4>
            <p className="text-slate-300 font-tech text-xs max-w-sm mx-auto mb-6">
              Our campus partnerships lead will connect with {formData.officerName} at {formData.collegeName} within 2 business hours.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2 rounded-xl bg-[#FACC15] text-black font-tech text-xs font-bold"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
