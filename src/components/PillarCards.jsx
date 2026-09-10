import React from 'react';
import { Target, Eye, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: Target,
    title: "Mission",
    tagline: "Direct Ground Disbursal",
    desc: "100% of donor contributions flow directly to verified grassroots non-profits with 0% platform retention fee.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "hover:border-brand-orange/40",
    topic: "platform"
  },
  {
    icon: Eye,
    title: "Vision",
    tagline: "Immutable Audit Ledger",
    desc: "Every rupee raised, transferred, and spent is cryptographically recorded on an append-only CA audit ledger.",
    color: "text-brand-emerald",
    bg: "bg-brand-emerald/10",
    border: "hover:border-brand-emerald/40",
    topic: "trust"
  },
  {
    icon: ShieldCheck,
    title: "Mandate",
    tagline: "Sovereign Compliance",
    desc: "Sequential 80G tax certificates, Form 10BD auto-filing, and SBI FCRA bank reconciliation built for Indian regulations.",
    color: "text-purple-600",
    bg: "bg-purple-100",
    border: "hover:border-purple-300",
    topic: "technology"
  }
];

export default function PillarCards({ onOpenDeepDive }) {
  return (
    <div className="max-w-7xl mx-auto px-6 relative z-20 -mt-10 md:-mt-16 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => onOpenDeepDive(pillar.topic)}
              className={`p-8 rounded-3xl bg-white border border-brand-dark/10 ${pillar.border} shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl ${pillar.bg} ${pillar.color} transition-transform group-hover:scale-110 duration-300`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-brand-dark/40 group-hover:text-brand-orange transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-brand-dark tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-brand-orange">
                    {pillar.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-brand-dark/70 font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-brand-dark/5 flex items-center justify-between text-xs font-bold text-brand-dark/60 group-hover:text-brand-orange transition-colors mt-6">
                <span>Explore Mandate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
