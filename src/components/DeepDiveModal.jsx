import React from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2, Zap, Layers, BarChart3, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const deepDiveContent = {
  platform: {
    title: "Philanthropy OS Engine",
    subtitle: "Complete Lifecycle Connection",
    icon: Layers,
    tagline: "Unifying donor journeys, bank disbursals, 80G tax receipts, and verified ground outcomes.",
    stats: [
      { label: "Data Latency", value: "< 100ms" },
      { label: "Audit Precision", value: "100% Rupee" },
      { label: "Filing Ready", value: "Form 10BD" }
    ],
    highlights: [
      "Multi-Currency & Local Domain Support: Host campaigns on your own domain with native UPI Autopay and e-NACH mandates.",
      "Instant 80G Tax Receipting: Automated sequential receipt generation issued immediately upon bank settlement.",
      "FCRA Compliance Layer: Dedicated foreign contribution accounts with automated purpose-wise allocation tagging.",
      "Ground Outcome Verification: Connect direct photographic & geo-tagged milestone reports directly to specific donor transactions."
    ]
  },
  technology: {
    title: "Real-Time Event Engine",
    subtitle: "Automated Philanthropy Logistics",
    icon: Zap,
    tagline: "Eleven core event streams powering automated notifications, gateway routing, and tax filing schemas.",
    stats: [
      { label: "Smart Routing", value: "4 Gateways" },
      { label: "Payment Failover", value: "+3% Recovery" },
      { label: "Event Bus", value: "11 Streams" }
    ],
    highlights: [
      "Dynamic Gateway Failover: Automatically reroutes failed transactions across Razorpay, PayU, CCAvenue, and Worldline.",
      "Form 10BD Engine: Pre-structures donor identification and transaction records according to Income Tax India schemas.",
      "Automated WhatsApp Journeys: Send instant receipt PDFs, sponsor updates, and impact milestones directly to donors.",
      "Nightly Bank Reconciliation: Automated tri-way matching of gateway settlement reports, bank credits, and ledger entries."
    ]
  },
  trust: {
    title: "Trust, FCRA & Compliance",
    subtitle: "Bank-Grade Accountability Built-In",
    icon: ShieldCheck,
    tagline: "Eliminating manual audit work with an immutable time-stamped log of every rupee raised and spent.",
    stats: [
      { label: "Audit Log", value: "Immutable" },
      { label: "Data Residency", value: "Local Sovereign" },
      { label: "Access Control", value: "Role-Based" }
    ],
    highlights: [
      "Strict FCRA Separation: Intelligent routing isolates domestic vs foreign funds at the gateway level.",
      "Cryptographic Audit Trail: Every modification to donations, disbursals, or beneficiary files is logged with author identity.",
      "Granular Role Permissions: Custom dashboards tailored for finance teams, auditors, fundraisers, and board members.",
      "Automated Discrepancy Alerts: Flag unmatched bank entries or duplicate receipts immediately before end-of-month closing."
    ]
  },
  funders: {
    title: "Institutional Funder Suite",
    subtitle: "Live Impact Dashboards for CSR & Foundations",
    icon: BarChart3,
    tagline: "Empowering CSR heads, global foundations, and HNIs with transparent grant utilization tracking.",
    stats: [
      { label: "Utilization View", value: "Real-Time" },
      { label: "Grant Terms", value: "Code Enforced" },
      { label: "Export Format", value: "Audit-Ready" }
    ],
    highlights: [
      "Grant Terms as Code: Set tranche disbursal triggers based on verified field milestone completions.",
      "Portfolio Reporting: View aggregated metrics across multiple partner implementation NGOs in a single view.",
      "Direct Impact Linkage: See exactly which beneficiary cohort received support from specific grant disbursements.",
      "One-Click Board Exports: Generate comprehensive impact and financial reporting decks in seconds."
    ]
  }
};

export default function DeepDiveModal({ activeTopic, onClose, onOpenDemo }) {
  if (!activeTopic || !deepDiveContent[activeTopic]) return null;
  const content = deepDiveContent[activeTopic];
  const IconComponent = content.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-brand-dark/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />
        
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          className="relative w-full max-w-2xl h-full bg-[#FDFBF7] shadow-2xl overflow-y-auto z-10 flex flex-col justify-between"
        >
          <div>
            {/* Header */}
            <div className="sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-brand-dark/10 p-6 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand-orange font-bold">Deep Dive</span>
                  <h3 className="text-xl font-bold text-brand-dark">{content.title}</h3>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-brand-dark/5 text-brand-dark/60 hover:text-brand-dark transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-brand-dark mb-2">{content.subtitle}</h4>
                <p className="text-brand-dark/70 text-lg leading-relaxed">{content.tagline}</p>
              </div>

              {/* Visual Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {content.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-brand-orange/15 shadow-sm text-center">
                    <div className="text-xl md:text-2xl font-extrabold text-brand-orange">{stat.value}</div>
                    <div className="text-xs font-medium text-brand-dark/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Highlights List */}
              <div className="space-y-4">
                <h5 className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Core Technical Capabilities</h5>
                <div className="space-y-3">
                  {content.highlights.map((item, idx) => (
                    <div key={idx} className="flex gap-3 bg-white p-4 rounded-xl border border-brand-dark/5 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                      <p className="text-sm text-brand-dark/80 leading-relaxed font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="p-6 bg-brand-dark text-white flex items-center justify-between gap-4 border-t border-white/10">
            <div>
              <p className="text-xs text-white/60">Ready to transform your giving operations?</p>
              <p className="text-sm font-semibold">Book a personalized platform walkthrough</p>
            </div>
            <button
              onClick={() => { onClose(); onOpenDemo(); }}
              className="px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white text-sm font-bold flex items-center gap-2 transition-all shrink-0 shadow-lg shadow-brand-orange/20"
            >
              <span>Schedule Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
