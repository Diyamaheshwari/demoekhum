import React from 'react';
import { ShieldCheck, Lock, Landmark, FileText, ExternalLink, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const orbitNodes = [
  { id: "80g", label: "80G TAX EXEMPT", icon: FileText, topic: "trust", color: "border-blue-500 text-blue-600 bg-blue-50" },
  { id: "fcra", label: "FCRA BANK COMPLIANT", icon: Landmark, topic: "trust", color: "border-emerald-500 text-emerald-600 bg-emerald-50" },
  { id: "audit", label: "VERIFIED LEDGER", icon: Lock, topic: "technology", color: "border-amber-500 text-amber-600 bg-amber-50" },
  { id: "transparent", label: "0% PLATFORM FEE", icon: ShieldCheck, topic: "platform", color: "border-brand-orange text-brand-orange bg-brand-orange/10" }
];

export default function TrustGrid({ onOpenDeepDive }) {
  return (
    <section id="trust" className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-black uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>Governance & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight uppercase">
            EXPLORE <span className="text-brand-orange">TRUST</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-dark/70 font-semibold">
            Hover or click any node to explore statutory compliance proofs.
          </p>
        </div>

        {/* Interactive Orbiting Visual Environment */}
        <div className="relative w-full max-w-2xl mx-auto aspect-square sm:aspect-[16/10] flex items-center justify-center">
          
          {/* Orbit Rings */}
          <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border-2 border-dashed border-brand-dark/15 pointer-events-none animate-spin-slow" />

          {/* Central Ekhum Node Symbol */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            onClick={() => onOpenDeepDive('trust')}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-brand-dark text-white p-2 shadow-2xl flex flex-col items-center justify-center text-center border-4 border-white cursor-pointer z-20 group"
          >
            <Shield className="w-8 h-8 text-brand-orange mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-black tracking-tight">EKHUM</span>
            <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest">TRUST ORBIT</span>
          </motion.div>

          {/* 4 Orbiting Compliance Nodes */}
          
          {/* Node 1: 80G (Top Left) */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => onOpenDeepDive('trust')}
            className="absolute top-4 left-4 sm:top-8 sm:left-12 p-3 px-4 rounded-2xl bg-white border-2 border-blue-500 shadow-xl flex items-center gap-2 cursor-pointer z-30 group"
          >
            <FileText className="w-4 h-4 text-blue-600" />
            <div className="text-left">
              <span className="text-[10px] font-black text-brand-dark uppercase tracking-wider block">80G TAX EXEMPT</span>
              <span className="text-[9px] text-brand-dark/60 font-semibold">Auto PDF Receipt</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-brand-dark/40 group-hover:text-blue-600 ml-1" />
          </motion.button>

          {/* Node 2: FCRA (Top Right) */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => onOpenDeepDive('trust')}
            className="absolute top-4 right-4 sm:top-8 sm:right-12 p-3 px-4 rounded-2xl bg-white border-2 border-emerald-500 shadow-xl flex items-center gap-2 cursor-pointer z-30 group"
          >
            <Landmark className="w-4 h-4 text-emerald-600" />
            <div className="text-left">
              <span className="text-[10px] font-black text-brand-dark uppercase tracking-wider block">FCRA COMPLIANT</span>
              <span className="text-[9px] text-brand-dark/60 font-semibold">SBI Bank Sync</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-brand-dark/40 group-hover:text-emerald-600 ml-1" />
          </motion.button>

          {/* Node 3: VERIFIED LEDGER (Bottom Left) */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => onOpenDeepDive('technology')}
            className="absolute bottom-4 left-4 sm:bottom-8 sm:left-12 p-3 px-4 rounded-2xl bg-white border-2 border-amber-500 shadow-xl flex items-center gap-2 cursor-pointer z-30 group"
          >
            <Lock className="w-4 h-4 text-amber-600" />
            <div className="text-left">
              <span className="text-[10px] font-black text-brand-dark uppercase tracking-wider block">VERIFIED LEDGER</span>
              <span className="text-[9px] text-brand-dark/60 font-semibold">Tamper Proof Hash</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-brand-dark/40 group-hover:text-amber-600 ml-1" />
          </motion.button>

          {/* Node 4: 0% PLATFORM FEE (Bottom Right) */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => onOpenDeepDive('platform')}
            className="absolute bottom-4 right-4 sm:bottom-8 sm:right-12 p-3 px-4 rounded-2xl bg-white border-2 border-brand-orange shadow-xl flex items-center gap-2 cursor-pointer z-30 group"
          >
            <ShieldCheck className="w-4 h-4 text-brand-orange" />
            <div className="text-left">
              <span className="text-[10px] font-black text-brand-dark uppercase tracking-wider block">0% PLATFORM FEE</span>
              <span className="text-[9px] text-brand-dark/60 font-semibold">100% Ground Delivery</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-brand-dark/40 group-hover:text-brand-orange ml-1" />
          </motion.button>

        </div>

      </div>
    </section>
  );
}
