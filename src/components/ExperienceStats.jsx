import React from 'react';
import { Building2, Coins, Receipt, Percent } from 'lucide-react';
import { motion } from 'framer-motion';

const statsData = [
  {
    icon: Coins,
    number: "1,24,830",
    unit: "Meals Delivered",
    desc: "100% Direct Ground Impact",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    topic: "platform"
  },
  {
    icon: Building2,
    number: "40+",
    unit: "Verified Non-Profits",
    desc: "Global & Indian NGO Partners",
    color: "text-brand-emerald",
    bg: "bg-brand-emerald/10",
    topic: "funders"
  },
  {
    icon: Receipt,
    number: "₹1B+",
    unit: "Capital Mobilised",
    desc: "100% Cryptographic Ledger",
    color: "text-amber-600",
    bg: "bg-amber-500/10",
    topic: "trust"
  },
  {
    icon: Percent,
    number: "0%",
    unit: "Platform Retention Fee",
    desc: "Zero Retention Cut Taken",
    color: "text-purple-600",
    bg: "bg-purple-500/10",
    topic: "technology"
  }
];

export default function ExperienceStats({ onOpenDeepDive }) {
  return (
    <section id="impact" className="py-16 md:py-20 bg-white border-y border-brand-dark/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-10 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight uppercase">
            Impact <span className="text-brand-orange">By The Numbers</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-dark/70 font-semibold">
            Every metric is backed by real-time cryptographic audit trails and verified ground disbursals.
          </p>
        </div>

        {/* 4 Immersive Stat Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => onOpenDeepDive(stat.topic)}
                className="group cursor-pointer p-6 rounded-2xl bg-[#FDFBF7] border border-brand-dark/10 hover:border-brand-orange/40 hover:shadow-xl transition-all relative overflow-hidden text-center"
              >
                <div className="inline-flex p-3 rounded-2xl mb-3 ${stat.bg} ${stat.color} transition-transform group-hover:scale-110">
                  <IconComp className={`w-6 h-6 ${stat.color}`} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight uppercase">
                    {stat.number}
                  </h3>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-brand-orange">
                    {stat.unit}
                  </p>
                  <p className="text-[11px] text-brand-dark/60 font-semibold pt-1">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
