import React from 'react';
import { ArrowRight, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TemplateHero({ onOpenDemo, onOpenDeepDive }) {
  return (
    <section className="relative min-h-[520px] md:min-h-[600px] bg-brand-dark overflow-hidden flex items-center">
      {/* Full-Bleed Photographic Background */}
      <img
        src="assets/hero_child_food_bowl.jpg"
        alt="Child holding food bowl"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
      />
      
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 w-full">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Raise Your Helping Hand</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]">
            Raise your helping hand for <br />
            <span className="text-brand-orange">Good Deserves Better</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 font-medium leading-relaxed max-w-xl">
            Connecting donors, verified non-profits, and ground outcomes into one transparent, 0% platform fee ledger.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenDemo}
              className="px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-extrabold text-xs uppercase tracking-widest flex items-center gap-2.5 transition-all shadow-2xl shadow-brand-orange/30 border border-white/20"
            >
              <span>Donate Now / Book Demo</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenDeepDive('platform')}
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider border border-white/20 flex items-center gap-2 backdrop-blur-md transition-all"
            >
              <Heart className="w-4 h-4 text-brand-orange fill-brand-orange" />
              <span>Explore Causes</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
