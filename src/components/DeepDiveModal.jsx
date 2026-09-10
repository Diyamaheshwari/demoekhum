import React from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2, Zap, Layers, BarChart3, Users, Globe, Building2, Lock, Receipt, Heart, Shield, FileText, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const deepDiveContent = {
  // PROCESS SECTION TOPICS
  process_give: {
    title: "Stage 01: Direct Disbursal Rail (GIVE)",
    subtitle: "100% Direct Disbursal Protocol",
    icon: Heart,
    tagline: "Your donation enters a zero-retention rail designed to transmit 100% of funds directly to ground operations.",
    stats: [
      { label: "Platform Fee", value: "0%" },
      { label: "Payment Rail", value: "Instant UPI" },
      { label: "Retention Cut", value: "0 Rupee" }
    ],
    highlights: [
      "Zero Platform Fee Guarantee: Ekhum retains 0% commission from your contribution.",
      "Instant Payment Gateway Sync: High-concurrency UPI Autopay & e-NACH mandate integration.",
      "Direct Disbursal Guarantee: 100% of donor funds reach non-profit ground accounts without intermediary deductions."
    ]
  },
  process_verify: {
    title: "Stage 02: Tax & Compliance Engine (VERIFY)",
    subtitle: "Instant 80G & Statutory Reconciliation",
    icon: Receipt,
    tagline: "Automated Income Tax India Section 80G certificate generation and Form 10BD pre-structuring.",
    stats: [
      { label: "Tax Benefit", value: "50% Exemption" },
      { label: "Form 10BD", value: "Auto Structured" },
      { label: "Receipt Speed", value: "Instant WhatsApp" }
    ],
    highlights: [
      "Instant WhatsApp & Email PDF: Receive your official 80G tax receipt within seconds of completing payment.",
      "Automated PAN Validation: Directly structured for official Income Tax India Form 10BD filing.",
      "FCRA Compliance Segregation: Fully compliant with statutory foreign and domestic donation regulations."
    ]
  },
  process_deliver: {
    title: "Stage 03: Ground Partner Execution (DELIVER)",
    subtitle: "Direct Account Disbursal to Non-Profits",
    icon: Zap,
    tagline: "Direct bank transfer to verified ground execution partners including schools, mobile clinics, and nutrition centers.",
    stats: [
      { label: "Ground NGO Partners", value: "40+" },
      { label: "Bank Disbursal", value: "Direct Transfer" },
      { label: "Allocation Speed", value: "< 24 Hours" }
    ],
    highlights: [
      "Direct Bank Disbursal: Funds bypass multi-tiered administrative channels and transfer straight to partner operational accounts.",
      "Verified Ground Execution: Partner organizations undergo rigorous 5-stage due diligence and field verification.",
      "Zero-Loss Execution: 100% of disbursed funds fund specific programmatic line items (meals, solar lamps, medicines)."
    ]
  },
  process_prove: {
    title: "Stage 04: Verifiable Impact Ledger (PROVE)",
    subtitle: "Geo-Tagged Evidence & Timestamped Receipts",
    icon: CheckCircle2,
    tagline: "Every outcome is verified with geo-tagged photo evidence and an immutable cryptographic timestamp trail.",
    stats: [
      { label: "Geo-Tagged Proof", value: "100%" },
      { label: "Photo Audits", value: "Timestamped" },
      { label: "Public Ledger", value: "Immutable" }
    ],
    highlights: [
      "Geo-Tagged Photo Evidence: Ground staff upload verified photos with GPS coordinates and timestamps.",
      "Cryptographic Hash Audit: Every transaction is sealed into an append-only verifiable outcome record.",
      "Direct Donor Transparency: Trace your exact ₹500 to the specific school cohort or beneficiary served."
    ]
  },

  // STATS SECTION TOPICS
  stats_lives: {
    title: "50,000+ Lives Touched",
    subtitle: "Direct Beneficiary Reach Across India",
    icon: Users,
    tagline: "Connecting individual donor generosity directly to real children, rural students, and families.",
    stats: [
      { label: "Lives Touched", value: "50,000+" },
      { label: "Meals Served", value: "1.2M+" },
      { label: "States Covered", value: "14 States" }
    ],
    highlights: [
      "Direct School Child Support: Over 50,000 primary school children provided daily nutritious meals.",
      "Dignified Outcome Tracking: Complete dignity, privacy, and consent preserved for all beneficiary cohorts.",
      "Direct Human Impact: ₹500 directly provides 10 warm, high-protein meals to underprivileged students."
    ]
  },
  stats_projects: {
    title: "100+ Projects Completed",
    subtitle: "Verified Field Implementation Nationwide",
    icon: Building2,
    tagline: "High-impact projects across rural primary education, solar electrification, and mobile health outreach.",
    stats: [
      { label: "Active Projects", value: "100+" },
      { label: "Verification Rate", value: "100%" },
      { label: "NGO Partners", value: "40+" }
    ],
    highlights: [
      "School Solar Electrification: Installed 12,000+ solar study lamps for evening education.",
      "Mobile Village Health Clinics: Deployed medical checkup buses across remote tribal sectors.",
      "Clean Drinking Water Units: Installed RO water purification systems in over 80 rural schools."
    ]
  },
  stats_capital: {
    title: "₹1B+ Capital Mobilised",
    subtitle: "Transparent Financial Disbursal Ledger",
    icon: Lock,
    tagline: "Over ₹100 Crores in philanthropic capital transparently routed with 0% platform retention cut.",
    stats: [
      { label: "Capital Mobilised", value: "₹1B+" },
      { label: "Discrepancy", value: "0.00%" },
      { label: "Audit Match", value: "100%" }
    ],
    highlights: [
      "Cryptographic Reconciliation: Gateway settlements and bank disbursals matched in real-time.",
      "Audit-Ready Reporting: Complete compliance data exported directly for statutory and donor audits.",
      "Zero Leakage Guarantee: Bank-level security protocols ensure zero fund diversion."
    ]
  },
  stats_fee: {
    title: "0% Platform Fee Guarantee",
    subtitle: "Pure Non-Profit Disbursal Protocol",
    icon: ShieldCheck,
    tagline: "Ekhum takes zero platform cut from public donations. 100% of your money goes straight to ground impact.",
    stats: [
      { label: "Ekhum Fee", value: "0%" },
      { label: "Beneficiary Share", value: "100%" },
      { label: "Hidden Charges", value: "None" }
    ],
    highlights: [
      "100% Direct Impact: Every single rupee you contribute is directed straight to program costs.",
      "Independently Funded Operations: Ekhum operational costs are separately backed by institutional sponsors.",
      "Transparent Payment Processing: Transparent gateway fee breakdown with zero hidden markups."
    ]
  },

  // TRUST SECTION TOPICS
  trust_80g: {
    title: "Section 80G Tax Exemption",
    subtitle: "Instant Tax Exemption Certificates",
    icon: FileText,
    tagline: "Claim 50% tax exemption under Section 80G of the Indian Income Tax Act on all eligible donations.",
    stats: [
      { label: "Tax Exemption", value: "50%" },
      { label: "Delivery", value: "Instant PDF" },
      { label: "Filing Status", value: "Form 10BD Sync" }
    ],
    highlights: [
      "Automated Certificate Generation: Instantly generated PDF tax receipts delivered to your email and WhatsApp.",
      "Income Tax Portal Pre-Filing: PAN details formatted for annual Form 10BD submission by partner NGOs.",
      "Fully Authorized Non-Profit Partners: All ground partners possess active Section 80G & 12A registration certificates."
    ]
  },
  trust_fcra: {
    title: "FCRA Bank Compliance",
    subtitle: "Foreign Contribution Regulation Act Authorized",
    icon: Landmark,
    tagline: "Strict statutory separation and routing via designated State Bank of India Main Branch New Delhi accounts.",
    stats: [
      { label: "Designated Bank", value: "SBI New Delhi" },
      { label: "Foreign Fund Sync", value: "100% Compliant" },
      { label: "Regulatory Reporting", value: "MHA Sync" }
    ],
    highlights: [
      "Designated SBI Account Routing: All foreign contributions route strictly through SBI Main Branch New Delhi (FCRA Account).",
      "Statutory MHA Reporting: Quarterly and annual returns filed seamlessly with the Ministry of Home Affairs.",
      "International Donor Peace of Mind: Full compliance for NRI and global institutional donors."
    ]
  },
  trust_ledger: {
    title: "Tamper-Proof Outcome Ledger",
    subtitle: "Cryptographic Audit & Timestamping",
    icon: Lock,
    tagline: "An append-only immutable ledger recording payment settlement, ground disbursal, and photo evidence.",
    stats: [
      { label: "Ledger Type", value: "Append-Only" },
      { label: "Data Latency", value: "< 100ms" },
      { label: "Integrity", value: "Cryptographic" }
    ],
    highlights: [
      "Immutable Audit Trail: Prevents retro-active modification of payment or outcome records.",
      "Public Proof Verification: Anyone can verify receipt hashes against ground partner logs.",
      "Sovereign Data Security: Hosted entirely on Indian Tier-4 data center infrastructure."
    ]
  },
  trust_fee: {
    title: "0% Platform Retention Rail",
    subtitle: "Zero-Commission Disbursal Architecture",
    icon: ShieldCheck,
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
  trust_overview: {
    title: "Ekhum Governance & Trust Architecture",
    subtitle: "Multi-Layered Regulatory & Sovereign Security",
    icon: Shield,
    tagline: "Integrating Section 80G tax automation, FCRA bank compliance, zero platform fee, and cryptographic outcome auditing.",
    stats: [
      { label: "Compliance Layer", value: "80G + FCRA" },
      { label: "Platform Cut", value: "0%" },
      { label: "Data Sovereignty", value: "India Sovereign" }
    ],
    highlights: [
      "Complete Regulatory Compliance: Registered 80G, 12A, and FCRA compliant non-profit ecosystem.",
      "Bank-Grade Financial Security: Direct host-to-host bank integration and encrypted gateway rails.",
      "Open Sovereign Auditability: Transparent reporting for individual donors, CSR heads, and regulatory bodies."
    ]
  },

  // LEGACY ALIASES (FOR BACKWARD COMPATIBILITY)
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
