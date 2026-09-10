import React from 'react';
import { ArrowRight, Building2, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FunderSpotlight({ onOpenDeepDive, onOpenDemo }) {
  return (
    <section id="funders" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-orange text-xs font-black uppercase tracking-widest border border-white/20">
              <Building2 className="w-3.5 h-3.5" />
              <span>Institutional CSR & Foundation Suite</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              FROM CAPITAL TO <span className="text-brand-orange">FIELD OUTCOMES</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenDemo}
            className="px-8 py-4 rounded-2xl bg-brand-orange hover:bg-white text-white hover:text-brand-dark font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-brand-orange/30 cursor-pointer"
          >
            <span>DISCUSS CSR PARTNERSHIP →</span>
          </motion.button>
        </div>

        {/* Cinematic Case Study Visual & Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Large Project Photograph */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[16/10] group">
            <img
              src="assets/funder_trust_vision.jpg"
              alt="CSR Impact Project"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
            
            {/* Minimal Photo Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-1">
              <span className="text-[10px] font-black text-brand-orange uppercase tracking-widest block">
                ● FEATURED INSTITUTIONAL CASE STUDY
              </span>
              <h3 className="text-lg font-black text-white leading-snug">
                Multi-State School Nutrition & Healthcare Infrastructure Grant
              </h3>
            </div>
          </div>

          {/* Right Process: PARTNER -> PROJECT -> PEOPLE -> OUTCOME */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Institutional Delivery Process</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-tight">
                CODE-ENFORCED TRANCHE DISBURSAL
              </h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                Empowering corporate CSR heads and global foundations with tranche disbursals unlocked strictly upon verified ground milestone submission.
              </p>
            </div>

            {/* Small Process Flow (PARTNER -> PROJECT -> PEOPLE -> OUTCOME) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[9px] font-black text-brand-orange uppercase tracking-wider block">01 • PARTNER</span>
                <span className="text-xs font-black text-white block">Grant Allocation</span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[9px] font-black text-brand-orange uppercase tracking-wider block">02 • PROJECT</span>
                <span className="text-xs font-black text-white block">Field Execution</span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[9px] font-black text-brand-orange uppercase tracking-wider block">03 • PEOPLE</span>
                <span className="text-xs font-black text-white block">Direct Reach</span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[9px] font-black text-brand-orange uppercase tracking-wider block">04 • OUTCOME</span>
                <span className="text-xs font-black text-white block">Cryptographic Hash</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenDeepDive('funders')}
              className="w-full py-4 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-brand-dark font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-white/20 transition-all cursor-pointer shadow-lg"
            >
              <FileText className="w-4 h-4" />
              <span>EXPLORE CASE STUDY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
