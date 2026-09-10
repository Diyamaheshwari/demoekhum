import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight, ExternalLink, Camera, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const causeGallery = [
  {
    id: "nutrition",
    topic: "person",
    label: "NUTRITION & MEALS",
    subtitle: "Nutritious Midday Meals in Primary Schools",
    location: "Chhindwara & Seoni, MP",
    image: "assets/slideshow_nutrition.jpg",
    raised: "₹42.5 Lakh",
    goal: "₹50 Lakh",
    percent: 85,
    donors: "2,840 Donors",
    aspect: "aspect-[4/3]",
    zDefault: 30
  },
  {
    id: "healthcare",
    topic: "community",
    label: "HEALTHCARE OUTREACH",
    subtitle: "Mobile Health Clinics in Remote Tribal Sectors",
    location: "Khandwa & Betul, MP",
    image: "assets/slideshow_healthcare.jpg",
    raised: "₹32.0 Lakh",
    goal: "₹35 Lakh",
    percent: 91,
    donors: "1,920 Donors",
    aspect: "aspect-[4/3]",
    zDefault: 20
  },
  {
    id: "education",
    topic: "project",
    label: "EDUCATION & LITERACY",
    subtitle: "Solar Lamps & Digital Classrooms for Young Girls",
    location: "Jhabua & Dhar, MP",
    image: "assets/slideshow_empowerment.jpg",
    raised: "₹18.2 Lakh",
    goal: "₹20 Lakh",
    percent: 91,
    donors: "1,450 Donors",
    aspect: "aspect-[4/3]",
    zDefault: 10
  }
];

export default function LiveCauses({ onOpenDonate, onOpenDeepDive }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="causes" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-brand-orange/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Active Cause Funding Targets</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight uppercase">
            ACTIVE GROUND <span className="text-brand-orange">CAUSES</span>
          </h2>
          <p className="text-sm text-brand-dark/75 font-semibold">
            Direct your contribution to specific, verified field programs. Hover to inspect progress.
          </p>
        </div>

        {/* Spatial Cause Exhibition Gallery Stack */}
        <div className="relative min-h-[440px] sm:min-h-[500px] flex items-center justify-center py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl items-center relative">
            {causeGallery.map((item, idx) => {
              const isHovered = hoveredId === item.id;
              const isAnyHovered = hoveredId !== null;

              return (
                <motion.div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  animate={{
                    scale: isHovered ? 1.05 : isAnyHovered ? 0.95 : 1,
                    zIndex: isHovered ? 40 : item.zDefault,
                    filter: isHovered ? "brightness(1.05)" : isAnyHovered ? "brightness(0.9) contrast(0.95)" : "brightness(1)"
                  }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group transition-all duration-500 bg-brand-dark flex flex-col justify-between"
                >
                  <div className={`w-full ${item.aspect} relative overflow-hidden`} onClick={() => onOpenDeepDive(item.topic)}>
                    <img 
                      src={item.image} 
                      alt={item.subtitle}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                    {/* Cause Tag Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-[10px] font-black">
                      <span className="bg-brand-orange px-3 py-1 rounded-full uppercase tracking-wider shadow-md">{item.label}</span>
                      <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">{item.donors}</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 space-y-2 text-white">
                      <h3 className="text-lg font-black leading-snug tracking-tight text-white group-hover:text-amber-300 transition-colors">
                        {item.subtitle}
                      </h3>
                      <div className="text-[11px] font-semibold text-white/70">{item.location}</div>
                    </div>
                  </div>

                  {/* Funding Target Progress Strip */}
                  <div className="p-4 bg-brand-dark/95 border-t border-white/10 space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-black text-white">
                        <span>Raised: <strong className="text-brand-orange">{item.raised}</strong> of {item.goal}</span>
                        <span className="text-emerald-400 font-extrabold">{item.percent}% Funded</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden p-0.5">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{ width: `${item.percent}%` }} />
                      </div>
                    </div>

                    {/* Direct Support Button */}
                    <button
                      onClick={onOpenDonate}
                      className="w-full py-2.5 rounded-xl bg-brand-orange hover:bg-white text-white hover:text-brand-dark font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>SUPPORT THIS CAUSE →</span>
                    </button>
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
