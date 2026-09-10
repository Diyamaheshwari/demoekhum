import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Building2, Lock, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';

const statsData = [
  {
    topic: "stats_lives",
    icon: Users,
    number: "50,000+",
    label: "LIVES TOUCHED",
    sub: "Direct ground outcomes verified across 40+ NGO partners.",
    color: "text-brand-orange",
    badge: "Beneficiary Impact"
  },
  {
    topic: "stats_projects",
    icon: Building2,
    number: "40+",
    label: "ORGANISATIONS",
    sub: "Verified non-profit implementation partners.",
    color: "text-brand-dark",
    badge: "Field Ecosystem"
  },
  {
    topic: "stats_capital",
    icon: Lock,
    number: "₹1B+",
    label: "CAPITAL MOBILISED",
    sub: "Cryptographically reconciled append-only audit ledger.",
    color: "text-emerald-600",
    badge: "Ledger Audit"
  },
  {
    topic: "stats_fee",
    icon: ShieldCheck,
    number: "0%",
    label: "PLATFORM FEE",
    sub: "Zero platform fee retained from ground donations.",
    color: "text-amber-600",
    badge: "Zero Retention"
  }
];

export default function ExperienceStats({ onOpenDeepDive }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleMetric = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1, 0.98]);

  return (
    <section 
      ref={containerRef}
      id="impact" 
      className="py-24 bg-[#FDFBF7] border-y border-brand-dark/5 relative overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Section Intro Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Editorial Impact Statistics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight uppercase">
            SEE THE <span className="text-brand-orange">NUMBERS</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-dark/75 font-semibold">
            Verified figures backed by real-time cryptographic audit trails and ground disbursals.
          </p>
        </div>

        {/* Editorial Typographic Grid with Scroll Scaling */}
        <motion.div 
          style={{ scale: scaleMetric }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsData.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => onOpenDeepDive(stat.topic)}
                className="relative cursor-pointer group space-y-3 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-brand-dark/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Meta Header */}
                <div className="flex items-center justify-between border-b border-brand-dark/5 pb-2.5">
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

                {/* Oversized Editorial Number */}
                <div className="space-y-1 py-1">
                  <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none ${stat.color} transition-transform duration-300 group-hover:scale-105 origin-left`}>
                    {stat.number}
                  </h3>
                  <div className="text-xs sm:text-sm font-black text-brand-dark uppercase tracking-wider pt-1">
                    {stat.label}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-brand-dark/70 font-semibold leading-relaxed pt-2 border-t border-brand-dark/5">
                  {stat.sub}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
