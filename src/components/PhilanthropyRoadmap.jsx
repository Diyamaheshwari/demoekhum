import React from 'react';
import { Heart, Sparkles, CheckCircle2, Zap, Receipt } from 'lucide-react';
import { motion } from 'framer-motion';

const physicalPathStages = [
  {
    stage: "01",
    title: "GIVE",
    desc: "100% of your contribution enters the transparent disbursal rail.",
    icon: Heart,
    color: "bg-brand-orange text-white"
  },
  {
    stage: "02",
    title: "VERIFY",
    desc: "Automated 80G tax receipt and statutory FCRA reconciliation.",
    icon: Receipt,
    color: "bg-amber-500 text-white"
  },
  {
    stage: "03",
    title: "DELIVER",
    desc: "Direct bank transfer to ground non-profit partners.",
    icon: Zap,
    color: "bg-blue-600 text-white"
  },
  {
    stage: "04",
    title: "PROVE",
    desc: "Geo-tagged photo ledger attached to your outcome record.",
    icon: CheckCircle2,
    color: "bg-emerald-600 text-white"
  }
];

export default function PhilanthropyRoadmap({ onOpenDeepDive }) {
  return (
    <section id="how-it-works" className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight uppercase">
            SEE THE <span className="text-brand-orange">PROCESS</span>
          </h2>
          <p className="text-sm text-brand-dark/70 font-medium">
            A single connected physical path from your tap to ground outcome.
          </p>
        </div>

        {/* Physical Visual Path Sequence */}
        <div className="relative pt-6">
          
          {/* Physical Line Path */}
          <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-brand-orange via-amber-500 via-blue-500 to-emerald-500 rounded-full -translate-y-1/2 opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {physicalPathStages.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <motion.div
                  key={s.stage}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => onOpenDeepDive('platform')}
                  className="p-6 rounded-3xl bg-white border border-brand-dark/10 shadow-lg hover:shadow-2xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black text-brand-dark/40 uppercase">
                        Stage {s.stage}
                      </span>
                      <div className={`p-3 rounded-2xl ${s.color} shadow-md transition-transform group-hover:scale-110`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-xs font-medium text-brand-dark/70 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-brand-dark/5 flex items-center justify-between text-[11px] font-extrabold text-emerald-600">
                    <span>100% Reconciled</span>
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
