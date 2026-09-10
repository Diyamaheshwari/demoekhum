import React from 'react';
import { Heart, Sparkles, CheckCircle2, Zap, Receipt, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const physicalPathStages = [
  {
    stage: "01",
    title: "GIVE",
    subtitle: "100% Direct Disbursal Rail",
    desc: "100% of your contribution enters the transparent disbursal rail with 0% platform retention cut.",
    icon: Heart,
    color: "from-brand-orange to-amber-500",
    glow: "shadow-brand-orange/30 border-brand-orange/30",
    topic: "process_give"
  },
  {
    stage: "02",
    title: "VERIFY",
    subtitle: "Instant Statutory Tax Receipt",
    desc: "Automated 80G tax receipt generation delivered to WhatsApp & structured for Form 10BD filing.",
    icon: Receipt,
    color: "from-amber-500 to-yellow-500",
    glow: "shadow-amber-500/30 border-amber-500/30",
    topic: "process_verify"
  },
  {
    stage: "03",
    title: "DELIVER",
    subtitle: "Ground Partner Bank Disbursal",
    desc: "Direct bank transfer straight to verified ground non-profit execution partners.",
    icon: Zap,
    color: "from-blue-600 to-indigo-600",
    glow: "shadow-blue-500/30 border-blue-500/30",
    topic: "process_deliver"
  },
  {
    stage: "04",
    title: "PROVE",
    subtitle: "Geo-Tagged Outcome Audit",
    desc: "Geo-tagged photo evidence and cryptographic ledger attached to your outcome record.",
    icon: CheckCircle2,
    color: "from-emerald-600 to-teal-500",
    glow: "shadow-emerald-500/30 border-emerald-500/30",
    topic: "process_prove"
  }
];

export default function PhilanthropyRoadmap({ onOpenDeepDive }) {
  return (
    <section id="how-it-works" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[300px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Disbursal Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight uppercase">
            SEE THE <span className="text-brand-orange">PROCESS</span>
          </h2>
          <p className="text-sm text-brand-dark/70 font-semibold max-w-lg mx-auto">
            A single continuous physical journey from your tap to ground outcome. Click any stage to inspect live protocol verification details.
          </p>
        </div>

        {/* Fluid Connected Pipeline Layout with Pixel-Perfect Vertical Alignment */}
        <div className="relative pt-6">
          
          {/* Continuous Track Line Passing Directly Through Node Centers */}
          <div className="hidden lg:block absolute top-11 left-24 right-24 h-1 bg-gradient-to-r from-brand-orange via-amber-500 via-blue-500 to-emerald-500 rounded-full opacity-40 pointer-events-none shadow-[0_0_10px_rgba(227,90,39,0.4)] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch relative z-10">
            {physicalPathStages.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <motion.div
                  key={s.stage}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  onClick={() => onOpenDeepDive(s.topic)}
                  className="group cursor-pointer flex flex-col justify-between items-center text-center space-y-4 h-full relative"
                >
                  {/* Node Circle Section */}
                  <div className="relative flex items-center justify-center w-full">
                    {/* Pulsing Aura */}
                    <div className={`absolute w-20 h-20 rounded-full bg-gradient-to-r ${s.color} opacity-20 group-hover:opacity-60 blur-md transition-all duration-300`} />
                    
                    {/* Main Node Circle */}
                    <div className={`w-20 h-20 rounded-full bg-white border-2 ${s.glow} shadow-lg flex flex-col items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-105`}>
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${s.color} text-white flex items-center justify-center shadow-md mb-0.5 group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-black tracking-widest text-brand-dark/50 uppercase">
                        STAGE {s.stage}
                      </span>
                    </div>

                    {/* Step Arrow (Centered Between Circles) */}
                    {idx < physicalPathStages.length - 1 && (
                      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 text-brand-dark/30 group-hover:text-brand-orange transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Stage Text Block with Equal Height Constraints */}
                  <div className="flex flex-col flex-grow justify-start items-center space-y-2 w-full px-2">
                    <div className="inline-flex items-center gap-1 text-[11px] font-black text-brand-orange tracking-widest uppercase">
                      <span>{s.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Subtitle - Uniform 2-line height */}
                    <h3 className="text-base font-black text-brand-dark tracking-tight leading-snug group-hover:text-brand-orange transition-colors min-h-[44px] flex items-center justify-center">
                      {s.subtitle}
                    </h3>

                    {/* Description - Uniform 3-line height */}
                    <p className="text-xs text-brand-dark/70 font-medium leading-relaxed min-h-[54px] flex items-center justify-center">
                      {s.desc}
                    </p>
                  </div>

                  {/* Bottom Verification Badge - Pinned to Exact Horizontal Line Across All Columns */}
                  <div className="mt-auto pt-2 flex items-center justify-center gap-1 text-[11px] font-extrabold text-emerald-600 border-t border-brand-dark/5 w-full">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Verified Protocol</span>
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
