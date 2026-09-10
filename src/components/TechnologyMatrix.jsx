import React, { useState, useEffect } from 'react';
import { CreditCard, Zap, Sparkles, FileSpreadsheet, ArrowRight, Play, Pause, CheckCircle2, ChevronRight, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const techTools = [
  {
    id: 0,
    title: "Donor Checkout Engine",
    subtitle: "High-Conversion UPI & Recurring Rail",
    category: "Payments",
    image: "assets/tech_checkout_upi.jpg",
    icon: CreditCard,
    badge: "High-Conversion UPI",
    badgeColor: "bg-brand-orange text-white",
    chips: ["UPI Autopay", "e-NACH Mandates", "Own Domain Checkout"]
  },
  {
    id: 1,
    title: "Smart Payment Failover",
    subtitle: "Dynamic Multi-Gateway Routing",
    category: "Payments",
    image: "assets/tech_failover_routing.jpg",
    icon: Zap,
    badge: "+3% Rescued Donations",
    badgeColor: "bg-brand-emerald text-white",
    chips: ["Razorpay & PayU", "CCAvenue & Worldline", "0% Dropoff Routing"]
  },
  {
    id: 2,
    title: "Real-Time Event Bus",
    subtitle: "Automated Impact Notifications",
    category: "Automation",
    image: "assets/tech_whatsapp_event.jpg",
    icon: Sparkles,
    badge: "11 System Event Streams",
    badgeColor: "bg-blue-600 text-white",
    chips: ["WhatsApp PDF Receipts", "Auto 80G Tax Issuance", "Sponsor Alerts"]
  },
  {
    id: 3,
    title: "Form 10BD Tax Engine",
    subtitle: "Statutory Income Tax Reporting",
    category: "Automation",
    image: "assets/tech_form10bd_tax.jpg",
    icon: FileSpreadsheet,
    badge: "100% Tax Schema Compliant",
    badgeColor: "bg-purple-600 text-white",
    chips: ["Income Tax Schema", "Auto PAN Verification", "1-Click CSV Export"]
  }
];

export default function TechnologyMatrix({ onOpenDeepDive }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play slideshow timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % techTools.length);
      }, 4500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentTool = techTools[activeIdx];
  const CurrentIcon = currentTool.icon;

  return (
    <section id="technology" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[11px] font-extrabold uppercase tracking-widest mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>03 / Visual Engine & Tools</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-dark">
              Good deserves <span className="text-brand-orange">efficiency.</span>
            </h2>
          </div>

          {/* Controller */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-1.5 rounded-full bg-brand-dark/5 hover:bg-brand-dark text-brand-dark hover:text-white text-xs font-bold transition-all flex items-center gap-1.5"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
          </div>
        </div>

        {/* Dual-Track Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Compact Image Slideshow */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden bg-brand-dark border border-brand-dark/10 shadow-2xl group">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTool.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-44 sm:h-52 md:h-60 overflow-hidden"
                >
                  <img
                    src={currentTool.image}
                    alt={currentTool.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md ${currentTool.badgeColor}`}>
                      {currentTool.badge}
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
                    <motion.div
                      key={`progress-${currentTool.id}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPlaying ? "100%" : "0%" }}
                      transition={{ duration: 4.5, ease: "linear" }}
                      className="h-full bg-brand-orange"
                    />
                  </div>

                  {/* Overlay Details */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-md">
                        <CurrentIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                          {currentTool.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Reduced Text Chips Bottom */}
              <div className="p-4 bg-brand-dark text-white flex items-center justify-between gap-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {currentTool.chips.map((chip, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] font-bold text-white flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-brand-emerald shrink-0" />
                      {chip}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenDeepDive('technology')}
                  className="p-2.5 rounded-full bg-brand-orange hover:bg-white text-white hover:text-brand-dark transition-all shrink-0 shadow-md"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Compact Tools Selector Reel */}
          <div className="lg:col-span-5 space-y-2.5">
            {techTools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              const isActive = idx === activeIdx;

              return (
                <motion.div
                  key={tool.id}
                  whileHover={{ x: 4 }}
                  onClick={() => { setIsPlaying(false); setActiveIdx(idx); }}
                  className={`cursor-pointer p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                    isActive
                      ? 'bg-brand-dark text-white border-brand-orange shadow-lg scale-[1.02]'
                      : 'bg-[#FDFBF7] border-brand-dark/10 hover:border-brand-orange/40 text-brand-dark hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isActive ? 'bg-brand-orange text-white' : 'bg-brand-dark/5 text-brand-dark'
                    }`}>
                      <ToolIcon className="w-4 h-4" />
                    </div>

                    <div>
                      <h4 className="text-sm font-extrabold leading-tight">
                        {tool.title}
                      </h4>
                      <p className={`text-[11px] font-medium ${
                        isActive ? 'text-white/70' : 'text-brand-dark/60'
                      }`}>
                        {tool.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isActive ? 'text-brand-orange translate-x-1' : 'text-brand-dark/30'
                  }`} />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
