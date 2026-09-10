import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const causesData = [
  {
    id: "nutrition",
    category: "Food",
    title: "Nutritious Midday Meals for 10,000 School Children",
    location: "Chhindwara & Seoni, MP",
    image: "assets/slideshow_nutrition.jpg",
    raised: "₹42.5 Lakh",
    goal: "₹50 Lakh",
    percent: 85,
    donors: "2,840 Donors",
    impactStatement: "₹500 provides 10 warm nutritious meals directly to ground school children.",
    verifiedBadge: "100% Direct Disbursal Reconciled"
  },
  {
    id: "healthcare",
    category: "Healthcare",
    title: "Mobile Health Clinic & Screenings in Remote Villages",
    location: "Khandwa & Betul, MP",
    image: "assets/slideshow_healthcare.jpg",
    raised: "₹32.0 Lakh",
    goal: "₹35 Lakh",
    percent: 91,
    donors: "1,920 Donors",
    impactStatement: "₹1,000 funds a full health screening & medicine kit for a rural family.",
    verifiedBadge: "FCRA Medical Audit Passed"
  },
  {
    id: "education",
    category: "Education",
    title: "Solar Lamps & Digital Classrooms for Young Girls",
    location: "Jhabua & Dhar, MP",
    image: "assets/slideshow_empowerment.jpg",
    raised: "₹18.2 Lakh",
    goal: "₹20 Lakh",
    percent: 91,
    donors: "1,450 Donors",
    impactStatement: "₹2,500 equips a young student with solar light & digital study tools for 1 year.",
    verifiedBadge: "Direct School Disbursal Proof"
  }
];

export default function LiveCauses({ onOpenDonate, onOpenDeepDive }) {
  const [activeTab, setActiveTab] = useState("nutrition");

  const currentCause = causesData.find(c => c.id === activeTab) || causesData[0];

  return (
    <section id="causes" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Verified Causes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight uppercase">
              Choose a cause to <span className="text-brand-orange">support today</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#FDFBF7] p-1.5 rounded-2xl border border-brand-dark/10">
            {causesData.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase transition-all duration-200 cursor-pointer ${
                  activeTab === c.id 
                    ? 'bg-brand-dark text-white shadow-md' 
                    : 'text-brand-dark/70 hover:text-brand-dark hover:bg-brand-dark/5'
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Dominant Cause Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCause.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#FDFBF7] border border-brand-dark/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px]">
              <img
                src={currentCause.image}
                alt={currentCause.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-bold">
                  <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <span>{currentCause.donors}</span>
                </div>
                <div className="text-xs font-semibold text-white/90">
                  {currentCause.location}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-[11px] font-extrabold uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{currentCause.verifiedBadge}</span>
                </div>

                <h3 className="text-2xl font-black text-brand-dark leading-tight uppercase">
                  {currentCause.title}
                </h3>

                <p className="text-sm text-brand-dark/80 font-semibold leading-relaxed">
                  {currentCause.impactStatement}
                </p>
              </div>

              <div className="space-y-2 border-t border-brand-dark/10 pt-4">
                <div className="flex justify-between text-xs font-extrabold">
                  <span className="text-brand-dark/70">Raised: <strong className="text-brand-dark">{currentCause.raised}</strong></span>
                  <span className="text-emerald-600 font-black">{currentCause.percent}% Funded</span>
                </div>

                <div className="h-2.5 bg-brand-dark/5 rounded-full overflow-hidden p-0.5 border border-brand-dark/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${currentCause.percent}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                  />
                </div>

                <div className="flex justify-between text-[11px] font-semibold text-brand-dark/50 pt-0.5">
                  <span>Goal: {currentCause.goal}</span>
                  <span className="text-emerald-600 font-bold">100% Direct Disbursal</span>
                </div>
              </div>

              <button
                onClick={onOpenDonate}
                className="w-full py-4 rounded-2xl bg-brand-orange hover:bg-brand-dark text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-brand-orange/20 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>SUPPORT THIS →</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
