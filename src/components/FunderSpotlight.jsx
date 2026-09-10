import React from 'react';
import { ArrowRight, Sparkles, Shield, BarChart2, TrendingUp, Check, Layers, FileCheck, Building } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FunderSpotlight({ onOpenDeepDive, onOpenDemo }) {
  return (
    <section id="funders" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-emerald/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Emotionally Speaking Photo Frame with Levitating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/20 via-white/10 to-white/5 border border-white/15 shadow-2xl group overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="assets/funder_trust_vision.jpg"
                  alt="Nonprofit leader holding tablet displaying live impact metrics"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
              </div>

              {/* Levitating Live Tranche Metric Pill */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-6 right-6 glass-dark px-4 py-2.5 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-emerald/20 text-brand-emerald flex items-center justify-center border border-brand-emerald/30">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-white">Live Disbursals</div>
                  <div className="text-[10px] font-mono font-bold text-brand-emerald">₹4.8 Cr Tranche • 100%</div>
                </div>
              </motion.div>

              {/* Bottom Glassmorphic Status Bar */}
              <div className="absolute bottom-6 left-6 right-6 glass-dark p-3.5 rounded-2xl border border-white/20 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-brand-orange text-white shadow-md">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white">CSR Live Window</div>
                    <div className="text-[10px] text-white/70">Real-Time Allocation Ledger</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-emerald/20 border border-brand-emerald/40 text-[10px] font-extrabold text-brand-emerald">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping" />
                  Active
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Minimal Copy & Micro-Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange font-extrabold text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>05 / CSR & Institutional Funders</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Good deserves <br />
              <span className="text-brand-orange">recognition.</span>
            </h2>

            <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
              Live transparency into tranche utilization, grant terms as code, and audit-ready field outcomes.
            </p>

            {/* Minimal High-Impact Micro-Cards Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {[
                { title: "Live Fund Tracking", icon: BarChart2 },
                { title: "Grant Terms as Code", icon: Layers },
                { title: "Portfolio Aggregation", icon: Building },
                { title: "Audit-Ready Exports", icon: FileCheck }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white/5 hover:bg-white/10 p-3.5 rounded-2xl border border-white/10 text-xs text-white transition-all cursor-pointer flex items-center gap-3 shadow-sm"
                  >
                    <div className="p-2 rounded-xl bg-brand-orange/20 text-brand-orange shrink-0">
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <span className="font-extrabold text-xs text-white leading-tight">{item.title}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Compact Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenDemo}
                className="px-6 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-brand-orange/20"
              >
                <span>Schedule CSR Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenDeepDive('funders')}
                className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/10"
              >
                <span>View Features</span>
              </motion.button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
