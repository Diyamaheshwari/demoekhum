import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  {
    number: "50,000+",
    label: "LIVES TOUCHED",
    sub: "Direct ground outcomes verified across 40+ NGO partners.",
    color: "text-brand-orange"
  },
  {
    number: "100+",
    label: "PROJECTS COMPLETED",
    sub: "100% direct disbursal with 0% platform retention cut.",
    color: "text-brand-dark"
  },
  {
    number: "₹1B+",
    label: "CAPITAL MOBILISED",
    sub: "Cryptographically reconciled append-only audit ledger.",
    color: "text-emerald-600"
  },
  {
    number: "0%",
    label: "PLATFORM FEE",
    sub: "Zero platform fee retained from ground donations.",
    color: "text-amber-600"
  }
];

export default function ExperienceStats({ onOpenDeepDive }) {
  return (
    <section id="impact" className="py-24 bg-white border-y border-brand-dark/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Section Intro */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
            Verified Scale
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight uppercase">
            SEE THE <span className="text-brand-orange">NUMBERS</span>
          </h2>
        </div>

        {/* Oversized Typographic Visual Environment with Generous Whitespace */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 items-center">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onClick={() => onOpenDeepDive('platform')}
              className="space-y-2 cursor-pointer group p-6 rounded-3xl hover:bg-[#FDFBF7] transition-all"
            >
              <h3 className={`text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none ${stat.color} group-hover:scale-103 transition-transform duration-300`}>
                {stat.number}
              </h3>
              <div className="text-base sm:text-lg font-black text-brand-dark uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-brand-dark/70 font-semibold max-w-sm leading-relaxed">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
