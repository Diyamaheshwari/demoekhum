import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Zap, ShieldCheck, Heart, Receipt } from 'lucide-react';
import { motion } from 'framer-motion';

const donationJourneyStages = [
  {
    stage: "01",
    title: "GIVE",
    subtitle: "Instant 0% Fee Donation",
    desc: "Mobile UPI, NetBanking, or card tap. 100% of your funds move without platform cuts.",
    icon: Heart,
    color: "text-brand-orange bg-brand-orange/10"
  },
  {
    stage: "02",
    title: "VERIFY",
    subtitle: "Cryptographic & 80G Receipts",
    desc: "Automated 80G tax receipt generation and real-time FCRA statutory compliance check.",
    icon: Receipt,
    color: "text-amber-600 bg-amber-500/10"
  },
  {
    stage: "03",
    title: "DELIVER",
    subtitle: "Direct Ground Disbursal",
    desc: "Capital routed directly to verified non-profit partners and school ground projects.",
    icon: Zap,
    color: "text-blue-600 bg-blue-500/10"
  },
  {
    stage: "04",
    title: "PROVE",
    subtitle: "Verified Impact Outcome",
    desc: "Receive geo-tagged photo and outcome ledger proof of meals, health care, and education.",
    icon: CheckCircle2,
    color: "text-emerald-600 bg-emerald-500/10"
  }
];

export default function PhilanthropyRoadmap({ onOpenDeepDive }) {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight uppercase">
            Where your <span className="text-brand-orange">donation goes</span>
          </h2>
          <p className="text-sm text-brand-dark/70 font-medium">
            Four simple stages ensuring complete auditability from your tap to ground outcome.
          </p>
        </div>

        {/* 4 Stage Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationJourneyStages.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-2xl bg-white border border-brand-dark/10 shadow-md hover:shadow-xl hover:border-brand-orange/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-brand-dark/40 uppercase">
                      Stage {s.stage}
                    </span>
                    <div className={`p-2.5 rounded-xl ${s.color} transition-transform group-hover:scale-110`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">
                      {s.subtitle}
                    </p>
                  </div>

                  <p className="text-xs font-medium text-brand-dark/70 leading-relaxed pt-1">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-dark/5 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>100% Reconciled</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
