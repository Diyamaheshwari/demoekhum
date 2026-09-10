import React from 'react';
import { Heart, CheckCircle2, ArrowRight, Sparkles, Utensils, Receipt, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const journeyStages = [
  {
    step: "01",
    title: "YOU GIVE",
    desc: "Your contribution enters the transparent routing rail.",
    icon: Heart,
    color: "bg-brand-orange text-white"
  },
  {
    step: "02",
    title: "WE VERIFY",
    desc: "Instant zero-fee reconciliation and 80G tax receipt issuance.",
    icon: Receipt,
    color: "bg-amber-500 text-white"
  },
  {
    step: "03",
    title: "WE CONNECT",
    desc: "Capital routed directly to verified local ground partners.",
    icon: Zap,
    color: "bg-blue-600 text-white"
  },
  {
    step: "04",
    title: "IT REACHES",
    desc: "Direct delivery to school children and families in need.",
    icon: Users,
    color: "bg-teal-600 text-white"
  },
  {
    step: "05",
    title: "YOU SEE THE RESULT",
    desc: "Geo-tagged photo outcome ledger attached to your contribution.",
    icon: CheckCircle2,
    color: "bg-emerald-600 text-white"
  }
];

export default function DonationJourney({ onOpenDonate }) {
  return (
    <section id="journey" className="py-16 md:py-24 bg-[#FDFBF7] border-y border-brand-dark/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Continuous Visual Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight uppercase">
            FOLLOW THE <span className="text-brand-orange">IMPACT</span>
          </h2>
          <p className="text-sm text-brand-dark/75 font-medium">
            Watch how every contribution travels from your hands directly to verified human outcomes.
          </p>
        </div>

        {/* 5-Stage Continuous Visual Sequence */}
        <div className="relative pt-4">
          
          {/* Connecting Line Path */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-brand-orange via-amber-500 via-blue-500 to-emerald-500 rounded-full -translate-y-1/2 opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {journeyStages.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-5 rounded-2xl bg-white border border-brand-dark/10 shadow-lg hover:shadow-2xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">
                        {s.step}
                      </span>
                      <div className={`w-8 h-8 rounded-xl ${s.color} flex items-center justify-center shadow-md`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-sm font-black text-brand-dark uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                      {s.title}
                    </h3>

                    <p className="text-xs font-medium text-brand-dark/70 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-brand-dark/5 flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    <span>Verified Stage</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Trigger */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenDonate}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-orange hover:text-brand-dark transition-colors cursor-pointer bg-white px-6 py-3 rounded-full border border-brand-dark/10 shadow-sm hover:shadow"
          >
            <span>START YOUR IMPACT JOURNEY →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
