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
    <section className="py-12 bg-[#FDFBF7] border-b border-brand-dark/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-extrabold uppercase tracking-widest text-brand-dark/50"
        >
          Trusted by Leaders Across Global Philanthropy & Grassroots Nonprofits
        </motion.p>
      </div>

      {/* Infinite Logo Marquee Strip */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex space-x-12 shrink-0 items-center justify-around min-w-full"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <div 
              key={idx} 
              className="h-10 md:h-12 flex items-center justify-center filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <img 
                src={partner.src} 
                alt={partner.name} 
                className="max-h-full max-w-[130px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

