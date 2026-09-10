import React, { useState } from 'react';
import { X, Send, Download, CheckCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    organisation: '',
    name: '',
    email: '',
    interest: 'The complete platform'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build download file content
    const content = `EKHUM ENQUIRY BRIEF
----------------------------------------
Date: ${new Date().toLocaleDateString()}
Organisation: ${formData.organisation}
Contact Name: ${formData.name}
Email: ${formData.email}
Interest Area: ${formData.interest}
----------------------------------------
Thank you for your enquiry with Ekhum — Good Deserves Better.
Our platform team will connect with you shortly.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ekhum_Enquiry_Brief_${formData.organisation.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg bg-[#FDFBF7] rounded-3xl shadow-2xl border border-white/40 overflow-hidden"
        >
          {/* Top Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-brand-dark/5 text-brand-dark/60 hover:text-brand-dark transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8">
            {!isSubmitted ? (
              <>
                <div className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark leading-tight">
                  Better starts with <span className="text-brand-orange">your team.</span>
                </h3>
                <p className="text-sm text-brand-dark/70 mt-2 mb-6">
                  Prepare a short brief for your custom Ekhum platform walkthrough.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1">
                      Organisation Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Save the Children / Local Foundation"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 bg-white outline-none text-sm text-brand-dark font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 bg-white outline-none text-sm text-brand-dark font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ananya@organisation.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 bg-white outline-none text-sm text-brand-dark font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1">
                      What would you like to explore?
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 bg-white outline-none text-sm text-brand-dark font-medium transition-all"
                    >
                      <option>The complete platform</option>
                      <option>Fundraising & high-conversion checkout</option>
                      <option>Compliance & 80G / FCRA automated engine</option>
                      <option>Funder & outcome reporting for CSR</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 transition-all mt-6"
                  >
                    <Download className="w-4 h-4" />
                    <span>Generate & Download Enquiry Brief</span>
                  </button>

                  <p className="text-xs text-center text-brand-dark/50 pt-2">
                    Instant brief generation. No spam, zero platform fee commitment.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-brand-emerald/10 text-brand-emerald rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Brief Ready & Downloaded!</h3>
                <p className="text-sm text-brand-dark/70 max-w-sm mx-auto">
                  Your custom brief for <strong>{formData.organisation}</strong> has been saved to your downloads. We look forward to powering your mission.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-brand-dark text-white font-bold text-sm hover:bg-brand-dark/90 transition-all"
                >
                  Close & Return to Platform
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
