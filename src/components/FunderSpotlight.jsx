import React from 'react';
import { ArrowRight, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FunderSpotlight({ onOpenDeepDive, onOpenDemo }) {
  return (
    <section id="funders" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* Section Header - Explicitly for Organizations */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-orange text-xs font-black uppercase tracking-widest border border-white/20">
              <Building2 className="w-3.5 h-3.5" />
              <span>FOR ORGANIZATIONS / CSR GIVING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              FROM FUNDING TO <span className="text-brand-orange">FIELD IMPACT</span>
            </h2>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-6 py-3.5 rounded-2xl bg-brand-orange hover:bg-white text-white hover:text-brand-dark font-black text-xs uppercase tracking-widest transition-all shadow-xl cursor-pointer"
          >
            <span>DISCUSS CSR PARTNERSHIP →</span>
          </button>
        </div>

        {/* Case Study Preview Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Case Photo */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3]">
            <img
              src="assets/funder_trust_vision.jpg"
              alt="CSR Impact Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
            
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider block">
                Institutional CSR Case Study
              </span>
              <span className="text-sm font-black text-white">
                Multi-State School Nutrition & Health Infrastructure Program
              </span>
            </div>
          </div>

          {/* Right Sequence: PARTNER -> PROJECT -> COMMUNITY -> OUTCOME */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider">01 • PARTNER</span>
                <div className="text-sm font-black text-white">Institutional Funders</div>
                <p className="text-[11px] text-white/60">Compliant CSR grants.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider">02 • PROJECT</span>
                <div className="text-sm font-black text-white">Field Deployment</div>
                <p className="text-[11px] text-white/60">Verified NGO execution.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider">03 • COMMUNITY</span>
                <div className="text-sm font-black text-white">Target Beneficiaries</div>
                <p className="text-[11px] text-white/60">40,000+ children & families.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider">04 • OUTCOME</span>
                <div className="text-sm font-black text-white">Audited Report</div>
                <p className="text-[11px] text-white/60">Cryptographic audit proof.</p>
              </div>
            </div>

            <button
              onClick={() => onOpenDeepDive('funders')}
              className="w-full py-4 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-brand-dark font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-white/20 transition-all cursor-pointer"
            >
              <span>Explore Full Institutional Case Study →</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
