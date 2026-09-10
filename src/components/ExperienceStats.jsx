import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Lock, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';

const statsData = [
  {
    topic: "stats_lives",
    icon: Users,
    number: "50,000+",
    label: "LIVES TOUCHED",
    sub: "Direct ground outcomes verified across 40+ NGO partners.",
    color: "from-brand-orange to-amber-500 text-brand-orange",
    glowColor: "bg-brand-orange/10",
    badge: "Beneficiary Impact"
  },
  {
    topic: "stats_projects",
    icon: Building2,
    number: "100+",
    label: "PROJECTS COMPLETED",
    sub: "100% direct disbursal with 0% platform retention cut.",
    color: "from-brand-dark to-slate-700 text-brand-dark",
    glowColor: "bg-brand-dark/5",
    badge: "Field Execution"
  },
  {
    topic: "stats_capital",
    icon: Lock,
    number: "₹1B+",
    label: "CAPITAL MOBILISED",
    sub: "Cryptographically reconciled append-only audit ledger.",
    color: "from-emerald-600 to-teal-500 text-emerald-600",
    glowColor: "bg-emerald-500/10",
    badge: "Ledger Audit"
  },
  {
    topic: "stats_fee",
    icon: ShieldCheck,
    number: "0%",
    label: "PLATFORM FEE",
    sub: "Zero platform fee retained from ground donations.",
    color: "from-amber-600 to-orange-500 text-amber-600",
    glowColor: "bg-amber-500/10",
    badge: "Zero Retention Cut"
  }
];

export default function ExperienceStats({ onOpenDeepDive }) {
  return (
    <section id="impact" className="py-20 bg-[#FDFBF7] border-y border-brand-dark/5 relative overflow-hidden">
      {/* Spatial Lighting Atmospherics */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* Section Intro Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Audit Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight uppercase">
            SEE THE <span className="text-brand-orange">NUMBERS</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-dark/70 font-semibold">
            Every metric is backed by real-time cryptographic audit trails and verified ground disbursals. Click any number to inspect live proof datasets.
          </p>
        </div>

        {/* Spatial Typographic Grid with Refined Font Sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                onClick={() => onOpenDeepDive(stat.topic)}
                className="relative cursor-pointer group space-y-3 p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-brand-dark/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Top Meta Strip */}
                <div className="flex items-center justify-between relative z-10 border-b border-brand-dark/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-brand-dark/5 text-brand-dark group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-dark/50">
                      {stat.badge}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1 text-[11px] font-black text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>

                {/* Reduced Typographic Number (Clean, Balanced Scale) */}
                <div className="relative z-10 space-y-1 py-1">
                  <h3 className={`text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-none ${stat.color} transition-transform duration-300 group-hover:scale-105 origin-left`}>
                    {stat.number}
                  </h3>
                  <div className="text-xs sm:text-sm font-black text-brand-dark uppercase tracking-wider pt-1">
                    {stat.label}
                  </div>
                </div>

                {/* Subtitle Description */}
                <p className="text-xs text-brand-dark/70 font-semibold leading-relaxed relative z-10 pt-2 border-t border-brand-dark/5">
                  {stat.sub}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
