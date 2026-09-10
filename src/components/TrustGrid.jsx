import React from 'react';
import { ShieldCheck, Lock, Landmark, FileText, ExternalLink, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustGrid({ onOpenDeepDive }) {
  return (
    <section id="trust" className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      {/* Soft Ambient Background Halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-black uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>Interactive Governance Orbit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight uppercase">
            EXPLORE <span className="text-brand-orange">TRUST</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-dark/70 font-semibold">
            Click any orbital node to inspect statutory compliance certifications and audit proofs.
          </p>
        </div>

        {/* Compact & Refined Solar Trust Orbit */}
        <div className="relative w-full max-w-xl mx-auto aspect-square sm:aspect-[16/9] flex items-center justify-center py-4">
          
          {/* Orbital Motion Rings */}
          <div className="absolute w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] rounded-full border border-dashed border-brand-dark/15 pointer-events-none animate-spin-slow" />
          <div className="absolute w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] rounded-full border border-brand-orange/20 pointer-events-none" />

          {/* Reduced Central Ekhum Trust Core Node */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            onClick={() => onOpenDeepDive('trust_overview')}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-brand-dark text-white p-2 shadow-xl flex flex-col items-center justify-center text-center border-2 border-white cursor-pointer z-20 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-dark to-brand-orange/30 group-hover:opacity-100 transition-opacity" />
            <Shield className="w-6 h-6 text-brand-orange mb-0.5 group-hover:scale-110 transition-transform relative z-10" />
            <span className="text-xs font-black tracking-tight relative z-10">EKHUM</span>
            <span className="text-[8px] font-bold text-white/60 uppercase tracking-widest relative z-10">TRUST ORBIT</span>
            <span className="text-[7px] font-black text-brand-orange uppercase relative z-10 mt-0.5 group-hover:underline">Overview</span>
          </motion.div>

          {/* 4 Reduced & Compact Orbital Compliance Nodes */}
          
          {/* Node 1: 80G TAX EXEMPT (Top Left) */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => onOpenDeepDive('trust_80g')}
            className="absolute top-1 left-1 sm:top-2 sm:left-4 p-2 px-3 sm:p-2.5 sm:px-3.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-500/50 shadow-lg flex items-center gap-2 cursor-pointer z-30 group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <FileText className="w-3.5 h-3.5" />
            </div>
            <div className="text-left pr-1">
              <span className="text-[10px] font-black text-brand-dark uppercase tracking-wider block group-hover:text-blue-600 transition-colors">80G TAX EXEMPT</span>
              <span className="text-[8px] text-brand-dark/60 font-semibold block">Auto PDF Receipt</span>
            </div>
            <ExternalLink className="w-3 h-3 text-brand-dark/40 group-hover:text-blue-600" />
          </motion.button>

          {/* Node 2: FCRA BANK COMPLIANT (Top Right) */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => onOpenDeepDive('trust_fcra')}
            className="absolute top-1 right-1 sm:top-2 sm:right-4 p-2 px-3 sm:p-2.5 sm:px-3.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-500/50 shadow-lg flex items-center gap-2 cursor-pointer z-30 group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Landmark className="w-3.5 h-3.5" />
            </div>
            <div className="text-left pr-1">
              <span className="text-[10px] font-black text-brand-dark uppercase tracking-wider block group-hover:text-emerald-600 transition-colors">FCRA COMPLIANT</span>
              <span className="text-[8px] text-brand-dark/60 font-semibold block">SBI Delhi Sync</span>
            </div>
            <ExternalLink className="w-3 h-3 text-brand-dark/40 group-hover:text-emerald-600" />
          </motion.button>

          {/* Node 3: VERIFIED LEDGER (Bottom Left) */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => onOpenDeepDive('trust_ledger')}
            className="absolute bottom-1 left-1 sm:bottom-2 sm:left-4 p-2 px-3 sm:p-2.5 sm:px-3.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-500/50 shadow-lg flex items-center gap-2 cursor-pointer z-30 group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <div className="text-left pr-1">
              <span className="text-[10px] font-black text-brand-dark uppercase tracking-wider block group-hover:text-amber-600 transition-colors">VERIFIED LEDGER</span>
              <span className="text-[8px] text-brand-dark/60 font-semibold block">Tamper Proof Hash</span>
            </div>
            <ExternalLink className="w-3 h-3 text-brand-dark/40 group-hover:text-amber-600" />
          </motion.button>

          {/* Node 4: 0% PLATFORM FEE (Bottom Right) */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => onOpenDeepDive('trust_fee')}
            className="absolute bottom-1 right-1 sm:bottom-2 sm:right-4 p-2 px-3 sm:p-2.5 sm:px-3.5 rounded-full bg-white/90 backdrop-blur-md border border-brand-orange/50 shadow-lg flex items-center gap-2 cursor-pointer z-30 group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div className="text-left pr-1">
              <span className="text-[10px] font-black text-brand-dark uppercase tracking-wider block group-hover:text-brand-orange transition-colors">0% PLATFORM FEE</span>
              <span className="text-[8px] text-brand-dark/60 font-semibold block">100% Disbursal</span>
            </div>
            <ExternalLink className="w-3 h-3 text-brand-dark/40 group-hover:text-brand-orange" />
          </motion.button>

        </div>

      </div>
    </section>
  );
}
