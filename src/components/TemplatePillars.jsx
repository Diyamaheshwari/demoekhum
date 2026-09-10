import React from 'react';
import { Target, Eye, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: Target,
    title: "Mission",
    tagline: "Direct Ground Impact",
    desc: "Leverage open-source transparency to provide 100% of donor funds directly to grassroots non-profits.",
    topic: "platform"
  },
  {
    icon: Eye,
    title: "Vision",
    tagline: "Immutable Audit Ledger",
    desc: "Every rupee donated, transferred, and spent is cryptographically recorded on an append-only CA audit ledger.",
    topic: "trust"
  },
  {
    icon: ShieldCheck,
    title: "Mandate",
    tagline: "Sovereign Compliance",
    desc: "Sequential 80G tax certificates, Form 10BD auto-filing, and SBI FCRA bank reconciliation built for Indian regulations.",
    topic: "technology"
  }
];

export default function TemplatePillars({ onOpenDeepDive }) {
  return (
    <div className="bg-[#FDFBF7] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => onOpenDeepDive(item.topic)}
                className="bg-white rounded-2xl border border-brand-dark/10 p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Top Orange Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-brand-orange" />

                <div className="space-y-4 pt-2">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-brand-dark tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold uppercase text-brand-orange tracking-wider">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-dark/70 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-brand-dark/5 flex items-center justify-between text-xs font-bold text-brand-dark/60 group-hover:text-brand-orange transition-colors mt-6">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
