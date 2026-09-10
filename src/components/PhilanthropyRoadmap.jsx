import React from 'react';
import { Heart, Sparkles, CheckCircle2, ShieldCheck, Receipt, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const disbursalPillars = [
  {
    step: "01",
    title: "0% PLATFORM RETENTION",
    subtitle: "100% Reaches Ground Non-Profits",
    desc: "Ekhum retains 0% platform fee cut from public contributions. Every single rupee goes directly to program implementation.",
    icon: ShieldCheck,
    color: "from-brand-orange to-amber-500",
    badge: "Zero Fee Cut"
  },
  {
    step: "02",
    title: "INSTANT 80G & FORM 10BD",
    subtitle: "Automated Statutory Tax Engine",
    desc: "Receive official Section 80G PDF tax receipts instantly via WhatsApp & email, formatted for Income Tax India Form 10BD filing.",
    icon: Receipt,
    color: "from-amber-500 to-yellow-500",
    badge: "50% Tax Exemption"
  },
  {
    step: "03",
    title: "DIRECT BANK ROUTING",
    subtitle: "Zero Administrative Leakage",
    desc: "Funds transfer directly to verified operational bank accounts of schools, tribal healthcare units, and nutrition hubs.",
    icon: Building2,
    color: "from-blue-600 to-indigo-600",
    badge: "Direct Transfer"
  },
  {
    step: "04",
    title: "DOCUMENTED IMPACT AUDIT",
    subtitle: "Geo-Tagged Field Verification",
    desc: "Ground staff upload timestamped photo proof and GPS coordinates linked directly to your donor receipt record.",
    icon: CheckCircle2,
    color: "from-emerald-600 to-teal-500",
    badge: "100% Verified"
  }
];

export default function PhilanthropyRoadmap({ onOpenDeepDive }) {
  return (
    <section id="how-it-works" className="py-24 bg-[#FDFBF7] border-y border-brand-dark/5 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[300px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Financial Transparency Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight uppercase">
            WHERE YOUR <span className="text-brand-orange">MONEY GOES</span>
          </h2>
          <p className="text-sm text-brand-dark/70 font-semibold max-w-lg mx-auto">
            100% of public contributions enter our transparent disbursal rail with 0% platform retention cut.
          </p>
        </div>

        {/* 4 Pillars of Financial Transparency (NO STEP REPETITION) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {disbursalPillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => onOpenDeepDive(idx === 0 ? 'stats_fee' : idx === 1 ? 'trust_80g' : idx === 2 ? 'stats_projects' : 'trust_ledger')}
                className="group cursor-pointer p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-brand-dark/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-brand-dark/5 pb-2.5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">
                      PILLAR {p.step}
                    </span>
                    <div className="p-2 rounded-xl bg-brand-dark/5 text-brand-dark group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-orange block">
                    {p.badge}
                  </span>

                  <h3 className="text-base font-black text-brand-dark uppercase tracking-tight leading-snug group-hover:text-brand-orange transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-brand-dark/70 font-semibold leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-dark/5 flex items-center justify-between text-[11px] font-extrabold text-emerald-600">
                  <span>Verified Pillar</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
