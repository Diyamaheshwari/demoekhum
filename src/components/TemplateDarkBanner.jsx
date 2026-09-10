import React from 'react';
import { Heart, ShieldCheck, FileText, Landmark, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const orangeCards = [
  {
    icon: Heart,
    title: "Help The Children",
    desc: "Direct nutritious meals and healthcare for children."
  },
  {
    icon: FileText,
    title: "Instant 80G Receipts",
    desc: "Sequential tax certificates delivered on WhatsApp."
  },
  {
    icon: Landmark,
    title: "FCRA Bank Sync",
    desc: "Automated routing directly to SBI FCRA main account."
  },
  {
    icon: ShieldCheck,
    title: "0% Platform Fee",
    desc: "Every rupee goes 100% directly to ground non-profits."
  }
];

export default function TemplateDarkBanner({ onOpenDemo }) {
  return (
    <section className="relative bg-brand-dark pt-24 pb-32 overflow-hidden text-white">
      {/* Background Image */}
      <img
        src="assets/impact_community_joy.jpg"
        alt="Children community"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-brand-dark/70" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
        <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
          Help The Needy
        </span>

        <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          Help The Needy & <br />
          <span className="text-brand-orange">Homeless Children</span>
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenDemo}
          className="px-8 py-4 rounded-xl bg-brand-orange text-white font-extrabold text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-2xl shadow-brand-orange/40 border border-white/20"
        >
          <span>Donate Now</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* 4 Overlapping Orange Cards along the Bottom Edge */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 -mb-20 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {orangeCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-brand-orange p-6 rounded-2xl text-white shadow-xl space-y-3 border border-white/20 flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold text-white backdrop-blur-md">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-black tracking-tight">{card.title}</h3>
                  <p className="text-xs text-white/90 font-medium leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
