import React from 'react';
import { Heart, CheckCircle2, ArrowRight, Sparkles, Utensils, Receipt, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const journeySteps = [
  {
    step: "01",
    label: "YOUR DONATION",
    title: "₹500 Given",
    desc: "Instant tap via UPI, Cards, or NetBanking.",
    icon: Heart,
    color: "bg-brand-orange text-white"
  },
  {
    step: "02",
    label: "VERIFIED LEDGER",
    title: "100% Reconciled",
    desc: "Zero platform retention cut. Instant 80G tax receipt.",
    icon: Receipt,
    color: "bg-amber-500 text-white"
  },
  {
    step: "03",
    label: "GROUND DISBURSAL",
    title: "Direct Disbursal",
    desc: "Bank funds released directly to ground partners.",
    icon: Zap,
    color: "bg-blue-600 text-white"
  },
  {
    step: "04",
    label: "REAL OUTCOME",
    title: "10 Warm Meals",
    desc: "Delivered directly to school children with photo proof.",
    icon: Utensils,
    color: "bg-emerald-600 text-white"
  }
];

export default function DonationJourney({ onOpenDonate }) {
  return (
    <section id="journey" className="py-16 md:py-20 bg-[#FDFBF7] border-y border-brand-dark/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Impact Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight uppercase">
            See where your <span className="text-brand-orange">donation goes</span>
          </h2>
          <p className="text-sm text-brand-dark/70 font-medium">
            From the instant you give, every rupee is tracked, verified, and delivered directly to real people.
          </p>
        </div>

        {/* 4-Stage Connected Visual Journey Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {journeySteps.map((s, idx) => {
            const IconComp = s.icon;

            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative p-6 rounded-2xl bg-white border border-brand-dark/10 shadow-md hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/50">
                    Step {s.step} • {s.label}
                  </span>
                  <div className={`w-9 h-9 rounded-xl ${s.color} flex items-center justify-center shadow-md`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-black text-brand-dark tracking-tight group-hover:text-brand-orange transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs font-medium text-brand-dark/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-dark/5 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>100% Verified Step</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Trigger */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenDonate}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-orange hover:text-brand-dark transition-colors cursor-pointer"
          >
            <span>Start Your Donation Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
