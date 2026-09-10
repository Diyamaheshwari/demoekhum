import React, { useRef } from 'react';
import { ShieldCheck, Lock, Landmark, FileText, UserCheck, RefreshCw, ArrowRight, Check, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const trustModules = [
  {
    id: "80g",
    icon: FileText,
    title: "Instant 80G Tax Receipts",
    badge: "100% Tax Exempt",
    image: "assets/trust_tax_80g.jpg",
    desc: "Instant 80G tax certificates generated automatically via WhatsApp & Email.",
    chips: ["Sequential 80G", "Form 10BD Auto", "WhatsApp PDF"]
  },
  {
    id: "fcra",
    icon: Landmark,
    title: "FCRA Bank Reconciliation",
    badge: "FCRA Approved",
    image: "assets/trust_fcra_audit.jpg",
    desc: "Automated routing directly into designated SBI New Delhi FCRA bank account.",
    chips: ["SBI FCRA Sync", "Foreign Stream", "MHA Approved"]
  },
  {
    id: "audit",
    icon: Lock,
    title: "Cryptographic Audit Ledger",
    badge: "Tamper Proof",
    image: "assets/funder_trust_vision.jpg",
    desc: "Every rupee logged on an immutable, cryptographic audit ledger.",
    chips: ["Crypto Hash", "Author Log", "Auditor Portal"]
  },
  {
    id: "sovereign",
    icon: ShieldCheck,
    title: "Sovereign Data Residency",
    badge: "RBI Compliant",
    image: "assets/tech_form10bd_tax.jpg",
    desc: "100% donor data hosted strictly within Indian sovereign cloud borders.",
    chips: ["Tier-4 Cloud", "RBI Compliant", "AES-256"]
  }
];

export default function TrustGrid({ onOpenDeepDive }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section id="trust" className="py-16 md:py-20 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8">
        
        {/* Section Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-black uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5" />
              <span>Trust & Governance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-brand-dark uppercase">
              Good deserves <span className="text-brand-orange">confidence</span>
            </h2>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-white border border-brand-dark/10 hover:border-emerald-500 text-brand-dark transition-all shadow-sm cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-white border border-brand-dark/10 hover:border-emerald-500 text-brand-dark transition-all shadow-sm cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustModules.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => onOpenDeepDive('trust')}
                className="rounded-2xl bg-white border border-brand-dark/10 hover:border-emerald-500/40 shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer flex flex-col justify-between group"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-700">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-700">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-brand-dark uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-brand-dark/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3 bg-[#FDFBF7] border-t border-brand-dark/5 flex items-center justify-between text-xs font-bold text-brand-dark/60 group-hover:text-brand-orange transition-colors">
                  <span>View Proof Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
