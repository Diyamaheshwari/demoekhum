import React from 'react';
import { Heart, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA({ onOpenDonate }) {
  return (
    <section className="py-28 bg-[#0F141C] text-white relative overflow-hidden text-center selection:bg-brand-orange selection:text-white">
      {/* Return to Impact Lens Soft Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-orange/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 space-y-10 relative z-10">
        
        {/* Calmer Calibrated Hero Lens Visual Return */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-2 bg-gradient-to-br from-brand-orange/30 via-amber-500/20 to-emerald-500/30 border-2 border-white/40 shadow-2xl mx-auto flex items-center justify-center cursor-pointer group"
          onClick={onOpenDonate}
        >
          <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-brand-dark">
            <img 
              src="assets/hero_child_food_bowl.jpg" 
              alt="Return to Impact Lens"
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-center justify-center">
              <Heart className="w-8 h-8 fill-brand-orange text-brand-orange animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Finale Headline returning to Hero */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.98] text-white uppercase"
        >
          MAKE <br />
          <span className="bg-gradient-to-r from-brand-orange via-amber-500 to-brand-orange bg-clip-text text-transparent">
            YOURS.
          </span>
        </motion.h2>

        <p className="text-base sm:text-lg text-white/80 font-medium max-w-md mx-auto leading-relaxed">
          Every contribution moves through real people, verified places, and transparent ground action.
        </p>

        {/* Single Strong CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenDonate}
            className="px-11 py-5 rounded-2xl bg-brand-orange hover:bg-white text-white hover:text-brand-dark font-black text-sm uppercase tracking-widest inline-flex items-center gap-3 transition-all shadow-2xl shadow-brand-orange/40 border border-brand-orange cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-current" />
            <span>DONATE NOW</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Sub-Trust Signal */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-xs font-bold text-white/60 uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            0% Platform Fee
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Instant 80G Tax Receipt
          </span>
        </div>

      </div>
    </section>
  );
}
