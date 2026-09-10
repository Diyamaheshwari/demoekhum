import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "UNICEF", src: "assets/reference-3.webp" },
  { name: "Save the Children", src: "assets/reference-4.webp" },
  { name: "Magic Bus", src: "assets/reference-5.webp" },
  { name: "WWF", src: "assets/reference-6.webp" },
  { name: "CBM", src: "assets/reference-7.webp" },
  { name: "Roundglass Foundation", src: "assets/reference-8.webp" },
  { name: "Medcell", src: "assets/reference-9.webp" },
  { name: "Rangla Punjab", src: "assets/reference-10.webp" },
  { name: "Ethan & The Bean", src: "assets/reference-11.webp" },
];

export default function PartnerLogos() {
  return (
    <section className="py-16 bg-[#FDFBF7] border-b border-brand-dark/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center space-y-2">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-black uppercase tracking-widest text-brand-orange"
        >
          Partner Ecosystem
        </motion.span>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl sm:text-2xl font-black text-brand-dark uppercase tracking-tight"
        >
          Trusted by Leaders Across Global Philanthropy & Grassroots Non-Profits
        </motion.h3>
      </div>

      {/* Spatial Ecosystem Marquee */}
      <div className="relative flex overflow-x-hidden group py-4">
        {/* Soft Side Fades */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex space-x-12 shrink-0 items-center justify-around min-w-full"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <div 
              key={idx} 
              className="h-10 md:h-12 px-6 py-2 rounded-2xl bg-white/70 backdrop-blur-sm border border-brand-dark/5 shadow-sm flex items-center justify-center filter grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-300 transform hover:scale-108 cursor-pointer"
            >
              <img 
                src={partner.src} 
                alt={partner.name} 
                className="max-h-full max-w-[120px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
