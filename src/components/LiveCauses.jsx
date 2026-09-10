import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const causesData = [
  {
    id: "nutrition",
    category: "Nutrition & Meals",
    title: "Nutritious Midday Meals for 10,000 School Children",
    location: "Chhindwara & Seoni, MP",
    image: "assets/slideshow_nutrition.jpg",
    raised: "₹42.5 Lakh",
    goal: "₹50 Lakh",
    percent: 85,
    donors: "2,840 Donors",
    impactStatement: "Direct hunger relief delivering 10 warm nutritious meals per ₹500.",
    depth: 1
  },
  {
    id: "healthcare",
    category: "Healthcare Outreach",
    title: "Mobile Health Clinic & Screenings in Remote Villages",
    location: "Khandwa & Betul, MP",
    image: "assets/slideshow_healthcare.jpg",
    raised: "₹32.0 Lakh",
    goal: "₹35 Lakh",
    percent: 91,
    donors: "1,920 Donors",
    impactStatement: "Lifesaving care & medical screening kits delivered to remote families.",
    depth: 2
  },
  {
    id: "education",
    category: "Education & Literacy",
    title: "Solar Lamps & Digital Classrooms for Young Girls",
    location: "Jhabua & Dhar, MP",
    image: "assets/slideshow_empowerment.jpg",
    raised: "₹18.2 Lakh",
    goal: "₹20 Lakh",
    percent: 91,
    donors: "1,450 Donors",
    impactStatement: "Digital study tools & solar light powering young girls' education.",
    depth: 3
  }
];

export default function LiveCauses({ onOpenDonate, onOpenDeepDive }) {
  const [selectedId, setSelectedId] = useState("nutrition");

  const selectedCause = causesData.find(c => c.id === selectedId) || causesData[0];

  return (
    <section id="causes" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>3D Spatial Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight uppercase">
              DISCOVER REAL <span className="text-brand-orange">CAUSES</span>
            </h2>
          </div>

          {/* Interactive Category Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-[#FDFBF7] p-1.5 rounded-2xl border border-brand-dark/10">
            {causesData.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedId(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase transition-all duration-200 cursor-pointer ${
                  selectedId === c.id 
                    ? 'bg-brand-dark text-white shadow-md' 
                    : 'text-brand-dark/70 hover:text-brand-dark hover:bg-brand-dark/5'
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Spatial Gallery: Overlapping Depth Photography Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[420px]">
          
          {/* Left Spatial Photo Stack (7 Cols) */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[420px] flex items-center justify-center [perspective:1000px]">
            {causesData.map((c, idx) => {
              const isSelected = selectedId === c.id;
              
              return (
                <motion.div
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  animate={{
                    scale: isSelected ? 1 : 0.88 - idx * 0.04,
                    zIndex: isSelected ? 30 : 10 - idx,
                    rotateY: isSelected ? 0 : (idx % 2 === 0 ? 8 : -8),
                    x: isSelected ? 0 : (idx === 1 ? 40 : -40),
                    opacity: isSelected ? 1 : 0.55
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer transition-all duration-500 ${
                    isSelected ? 'ring-4 ring-brand-orange/30 shadow-brand-orange/20' : 'filter blur-[1px]'
                  }`}
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-extrabold">
                    <span>{c.category}</span>
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">{c.donors}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Selected Cause Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 bg-[#FDFBF7] p-8 rounded-3xl border border-brand-dark/10 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCause.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-black text-brand-orange uppercase tracking-widest">
                    {selectedCause.category} • {selectedCause.location}
                  </span>
                  <h3 className="text-2xl font-black text-brand-dark leading-tight uppercase">
                    {selectedCause.title}
                  </h3>
                  <p className="text-xs text-brand-dark/80 font-semibold leading-relaxed">
                    {selectedCause.impactStatement}
                  </p>
                </div>

                {/* Progress */}
                <div className="space-y-2 border-t border-brand-dark/10 pt-4">
                  <div className="flex justify-between text-xs font-extrabold">
                    <span>Raised: <strong>{selectedCause.raised}</strong></span>
                    <span className="text-emerald-600 font-black">{selectedCause.percent}% Funded</span>
                  </div>
                  <div className="h-2.5 bg-brand-dark/5 rounded-full overflow-hidden p-0.5 border border-brand-dark/5">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{ width: `${selectedCause.percent}%` }} />
                  </div>
                </div>

                {/* Primary Action Button */}
                <button
                  onClick={onOpenDonate}
                  className="w-full py-4 rounded-2xl bg-brand-orange hover:bg-brand-dark text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-orange/20 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>SUPPORT THIS →</span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
