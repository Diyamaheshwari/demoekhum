import React, { useState } from 'react';
import { Sparkles, TrendingUp, ArrowRight, GraduationCap, Utensils, HeartPulse, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const presets = [
  { label: "Rs. 50 Lakh", value: 5000000 },
  { label: "Rs. 5 Crore", value: 50000000 },
  { label: "Rs. 25 Crore", value: 250000000 },
];

export default function SavingsCalculator({ onOpenDemo }) {
  const [volume, setVolume] = useState(50000000); // 5 Crore
  const [commission, setCommission] = useState(4); // 4%
  const [activeView, setActiveView] = useState('savings'); // 'savings' | 'impact'

  // Calculations
  const savingsAmount = (volume * (commission / 100));
  const recoveryAmount = (volume * 0.03); // 3% recovery
  const totalRetained = savingsAmount + recoveryAmount;

  // Ground Human Impact Converter
  const childrenEducated = Math.floor(savingsAmount / 2000); // Rs 2,000 per child education
  const mealsServed = Math.floor(savingsAmount / 50); // Rs 50 per meal
  const healthScreenings = Math.floor(savingsAmount / 500); // Rs 500 per checkup

  // Currency Formatter
  const formatRupees = (amount) => {
    if (amount >= 10000000) {
      const crore = amount / 10000000;
      return `Rs. ${crore % 1 === 0 ? crore.toFixed(0) : crore.toFixed(2)} Crore`;
    } else if (amount >= 100000) {
      const lakh = amount / 100000;
      return `Rs. ${lakh % 1 === 0 ? lakh.toFixed(0) : lakh.toFixed(1)} Lakh`;
    }
    return `Rs. ${amount.toLocaleString('en-IN')}`;
  };

  return (
    <section id="calculator" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-brand-dark/5 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-extrabold uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>06 / Ground Impact & Fee Converter</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-brand-dark">
              Good deserves <span className="text-brand-orange">more impact.</span>
            </h2>
          </div>

          {/* Sleek Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#FDFBF7] border border-brand-dark/10 self-start sm:self-auto">
            <button
              onClick={() => setActiveView('savings')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                activeView === 'savings' ? 'bg-brand-dark text-white shadow-sm' : 'text-brand-dark/60 hover:text-brand-dark'
              }`}
            >
              💰 Fee Savings
            </button>
            <button
              onClick={() => setActiveView('impact')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                activeView === 'impact' ? 'bg-brand-emerald text-white shadow-sm' : 'text-brand-dark/60 hover:text-brand-dark'
              }`}
            >
              🎓 Human Lives
            </button>
          </div>
        </div>

        {/* Sleek Compact Converter Box */}
        <div className="bg-[#FDFBF7] rounded-3xl border border-brand-dark/10 shadow-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Scale Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-dark/40">
                Preset Volume:
              </span>
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setVolume(preset.value)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all border ${
                    volume === preset.value
                      ? 'bg-brand-dark text-white border-brand-dark shadow-sm'
                      : 'bg-white text-brand-dark/70 border-brand-dark/10 hover:border-brand-orange'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Volume Slider */}
            <div className="space-y-2 bg-white p-4 rounded-2xl border border-brand-dark/10 shadow-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-brand-dark uppercase tracking-wider">Annual Funds Raised</span>
                <span className="font-black text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-lg">
                  {formatRupees(volume)}
                </span>
              </div>
              <input
                type="range"
                min="1000000"
                max="500000000"
                step="1000000"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2 bg-brand-dark/10 rounded-lg cursor-pointer accent-brand-orange"
              />
            </div>

            {/* Fee Slider */}
            <div className="space-y-2 bg-white p-4 rounded-2xl border border-brand-dark/10 shadow-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-brand-dark uppercase tracking-wider">Comparison Gateway Fee</span>
                <span className="font-black text-brand-dark bg-brand-dark/10 px-2.5 py-0.5 rounded-lg">
                  {commission}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                step="0.5"
                value={commission}
                onChange={(e) => setCommission(Number(e.target.value))}
                className="w-full h-2 bg-brand-dark/10 rounded-lg cursor-pointer accent-brand-dark"
              />
            </div>

            {/* Smart Recovery Pill */}
            <div className="flex items-center gap-2 text-xs text-brand-dark/70 font-semibold bg-brand-emerald/10 p-3 rounded-xl border border-brand-emerald/20">
              <TrendingUp className="w-4 h-4 text-brand-emerald shrink-0" />
              <span>Smart failover recovers ~3% extra ({formatRupees(recoveryAmount)})</span>
            </div>

          </div>

          {/* Right Column: Dynamic Results Card */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-brand-dark/10 shadow-md space-y-6">
            
            <AnimatePresence mode="wait">
              {activeView === 'savings' ? (
                /* Fee Savings View */
                <motion.div
                  key="savings-compact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="text-xs font-extrabold uppercase tracking-widest text-brand-dark/50">
                    Calculated Retained Capital:
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-brand-emerald tracking-tight">
                      {formatRupees(savingsAmount)}
                    </div>
                    <div className="text-xs font-bold text-brand-dark/60 pt-1">
                      Direct Fee Savings (0% Ekhum vs {commission}% Standard Platform Fee)
                    </div>
                  </div>

                  <div className="p-3 bg-[#FDFBF7] rounded-xl border border-brand-dark/10 text-xs font-bold text-brand-dark flex justify-between items-center">
                    <span>Total Retained (Savings + Recovery):</span>
                    <span className="text-sm font-black text-brand-orange">{formatRupees(totalRetained)}</span>
                  </div>
                </motion.div>
              ) : (
                /* Ground Impact View */
                <motion.div
                  key="impact-compact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="text-xs font-extrabold uppercase tracking-widest text-brand-emerald">
                    Transformed Ground Impact:
                  </div>

                  {/* 3 Impact Badges */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#FDFBF7] p-3 rounded-xl border border-brand-dark/10 text-center space-y-1">
                      <GraduationCap className="w-4 h-4 text-brand-orange mx-auto" />
                      <div className="text-base font-black text-brand-dark">{childrenEducated.toLocaleString()}</div>
                      <div className="text-[10px] font-bold text-brand-dark/60">Kids Educated</div>
                    </div>

                    <div className="bg-[#FDFBF7] p-3 rounded-xl border border-brand-dark/10 text-center space-y-1">
                      <Utensils className="w-4 h-4 text-brand-emerald mx-auto" />
                      <div className="text-base font-black text-brand-dark">{mealsServed.toLocaleString()}</div>
                      <div className="text-[10px] font-bold text-brand-dark/60">Meals Served</div>
                    </div>

                    <div className="bg-[#FDFBF7] p-3 rounded-xl border border-brand-dark/10 text-center space-y-1">
                      <HeartPulse className="w-4 h-4 text-blue-600 mx-auto" />
                      <div className="text-base font-black text-brand-dark">{healthScreenings.toLocaleString()}</div>
                      <div className="text-[10px] font-bold text-brand-dark/60">Checkups</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenDemo}
              className="w-full py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 transition-all"
            >
              <span>Keep 100% of Funds — Switch to Ekhum</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

          </div>

        </div>

      </div>
    </section>
  );
}

