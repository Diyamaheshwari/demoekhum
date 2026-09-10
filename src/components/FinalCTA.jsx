import React from 'react';
import { Heart, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA({ onOpenDonate }) {
  return (
    <section className="py-20 md:py-24 bg-brand-dark text-white relative overflow-hidden text-center selection:bg-brand-orange selection:text-white">
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-orange/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
        
        {/* Heart Icon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 rounded-3xl bg-brand-orange/20 border border-brand-orange/40 text-brand-orange flex items-center justify-center mx-auto shadow-2xl shadow-brand-orange/30"
        >
          <Heart className="w-8 h-8 fill-brand-orange animate-pulse" />
        </motion.div>

        {/* Powerful Finale Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.06] text-white uppercase"
        >
          YOUR NEXT ₹500 CAN BECOME <br />
          <span className="bg-gradient-to-r from-brand-orange via-amber-500 to-brand-orange bg-clip-text text-transparent">
            SOMEONE'S TOMORROW.
          </span>
        </motion.h2>

        <p className="text-base sm:text-lg text-white/80 font-medium max-w-xl mx-auto">
          Join thousands of donors who route kindness directly to ground children and families with 0% platform retention fees.
        </p>

        {/* Primary Action Button */}
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
            className="px-10 py-5 rounded-2xl bg-brand-orange hover:bg-white text-white hover:text-brand-dark font-black text-sm uppercase tracking-widest inline-flex items-center gap-3 transition-all shadow-2xl shadow-brand-orange/40 border border-brand-orange cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-current" />
            <span>Donate Now</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Sub-Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-bold text-white/60 uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            0% Platform Fee
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Instant 80G Tax Exemption
          </span>
        </div>

      </div>
    </section>
  );
}
