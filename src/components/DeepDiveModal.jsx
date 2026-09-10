import React from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2, Zap, Layers, BarChart3, Users, Globe, Building2, Lock, Receipt } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const deepDiveContent = {
  project: {
    title: "Verified Field Projects",
    subtitle: "Direct Ground Execution",
    icon: Building2,
    tagline: "Every project is directly mapped to ground NGO partners, school nutrition programs, and rural healthcare units.",
    stats: [
      { label: "Active Projects", value: "100+" },
      { label: "Geo-Tagged Proof", value: "100%" },
      { label: "NGO Partners", value: "40+" }
    ],
    highlights: [
      "Direct Ground Project Allocation: Donations fund pre-verified education, health, and nutrition projects.",
      "Geo-Tagged Milestone Proof: Photo and timestamp reports uploaded directly by ground coordinators.",
      "Zero-Loss Disbursal Rail: Funds transfer directly to project bank accounts without intermediate retention cuts."
    ]
  },
  person: {
    title: "Individual Beneficiary Impact",
    subtitle: "Direct Human Connection",
    icon: Users,
    tagline: "Connecting donor generosity directly to real children, students, and rural families across India.",
    stats: [
      { label: "Lives Touched", value: "50,000+" },
      { label: "Meals Disbursed", value: "1.2M+" },
      { label: "Direct Impact", value: "100%" }
    ],
    highlights: [
      "Direct Child & Family Benefit: ₹500 provides 10 warm nutritious meals directly to primary school children.",
      "Dignified Storytelling: Full privacy, dignity, and consent maintained for all beneficiary outcome records.",
      "Individual Ledger Tracking: Trace your specific contribution directly to the exact cohort of children served."
    ]
  },
  community: {
    title: "Community Infrastructure",
    subtitle: "Sustainable Regional Development",
    icon: Globe,
    tagline: "Empowering rural villages with clean solar power, digital literacy centers, and mobile clinics.",
    stats: [
      { label: "Solar Lamps", value: "12,000+" },
      { label: "Health Screenings", value: "45,000+" },
      { label: "Classrooms", value: "150+" }
    ],
    highlights: [
      "Solar & Digital Literacy: Providing solar study lamps to young girls for safe evening studying.",
      "Mobile Village Health Clinics: Deploying doctors and diagnostic checkups to remote tribal regions.",
      "School Infrastructure: Grants for school sanitation, drinking water units, and digital learning tools."
    ]
  },
  outcome: {
    title: "Cryptographic Ground Ledger",
    subtitle: "100% Verifiable Evidence",
    icon: Lock,
    tagline: "Every transaction creates an append-only audit record linked to verified ground outcome evidence.",
    stats: [
      { label: "Discrepancy", value: "0%" },
      { label: "Audit Trail", value: "Immutable" },
      { label: "Filing Ready", value: "Form 10BD" }
    ],
    highlights: [
      "Append-Only Audit Ledger: Every rupee movement is time-stamped and signed on a tamper-proof trail.",
      "Instant 80G Receipts: Automated tax certificates generated and delivered via WhatsApp instantly.",
      "Nightly Bank Match: Gateway settlement, bank credit, and disbursal reports reconciled automatically."
    ]
  },
  platform: {
    title: "0% Platform Retention Rail",
    subtitle: "100% Direct Disbursal Protocol",
    icon: Layers,
    tagline: "Zero platform fees retained from your donations—100% reaches verified ground beneficiaries.",
    stats: [
      { label: "Platform Fee", value: "0%" },
      { label: "Payment Rail", value: "Instant UPI" },
      { label: "Data Latency", value: "< 100ms" }
    ],
    highlights: [
      "0% Fee Guarantee: Ekhum operates with zero platform commission on ground donations.",
      "Instant UPI & Card Rails: High-concurrency UPI Autopay and e-NACH mandate integration.",
      "Own Domain Campaigns: Non-profits host direct disbursal campaigns on their native web domains."
    ]
  },
  technology: {
    title: "Statutory & Tax Verification",
    subtitle: "Instant 80G & Form 10BD Engine",
    icon: Zap,
    tagline: "Automated Income Tax India compliance pre-structuring and instant donor receipting.",
    stats: [
      { label: "Form 10BD", value: "Automated" },
      { label: "Receipt Format", value: "WhatsApp PDF" },
      { label: "Tax Exemption", value: "Section 80G" }
    ],
    highlights: [
      "Instant 80G Receipts: Automated tax exempt certificates delivered instantly upon donation completion.",
      "Form 10BD Pre-Structuring: Donor PAN and transaction records structured according to Income Tax schemas.",
      "Gateway Failover Engine: Dynamic routing across Razorpay, PayU, and CCAvenue prevents payment drops."
    ]
  },
  trust: {
    title: "FCRA & Sovereign Data Trust",
    subtitle: "Bank-Grade Regulatory Compliance",
    icon: ShieldCheck,
    tagline: "Strict FCRA separation, SBI New Delhi bank reconciliation, and Indian sovereign cloud data residency.",
    stats: [
      { label: "FCRA Sync", value: "SBI Delhi" },
      { label: "Cloud Border", value: "Indian Sovereign" },
      { label: "Access Control", value: "Role-Based" }
    ],
    highlights: [
      "FCRA Foreign Fund Segregation: Dedicated SBI New Delhi account routing for foreign contributions.",
      "Sovereign Data Residency: 100% donor data hosted strictly within Indian Tier-4 data center borders.",
      "Role-Based Governance: Granular permissions for finance teams, auditors, and board members."
    ]
  },
  funders: {
    title: "Institutional & CSR Suite",
    subtitle: "Corporate & Foundation Grant Management",
    icon: BarChart3,
    tagline: "Empowering CSR heads and global foundations with real-time tranche disbursal tracking.",
    stats: [
      { label: "Disbursal Terms", value: "Code Enforced" },
      { label: "Portfolio View", value: "Real-Time" },
      { label: "Board Exports", value: "Audit-Ready" }
    ],
    highlights: [
      "Grant Terms as Code: Disbursal tranches unlock upon verified ground milestone submission.",
      "Aggregated Portfolio Reporting: View multi-NGO implementation programs in a unified dashboard.",
      "Audit-Ready Exports: One-click board and statutory report decks generated in seconds."
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
                  <span className="text-xs uppercase tracking-wider text-brand-orange font-bold">Verified Deep Dive</span>
                  <h3 className="text-xl font-bold text-brand-dark">{content.title}</h3>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-brand-dark/5 text-brand-dark/60 hover:text-brand-dark transition-colors cursor-pointer"
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
                <h5 className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Core Operational Capabilities</h5>
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
              <p className="text-xs text-white/60">Ready to transform your impact?</p>
              <p className="text-sm font-semibold">Join thousands of verified donors today</p>
            </div>
            <button
              onClick={() => { onClose(); onOpenDemo(); }}
              className="px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white text-sm font-bold flex items-center gap-2 transition-all shrink-0 shadow-lg shadow-brand-orange/20 cursor-pointer"
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
