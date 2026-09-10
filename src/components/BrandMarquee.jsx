import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const defaultItems = [
  "JOIN US TO TRANSFORM PHILANTHROPY IN INDIA",
  "100% DIRECT GROUND DISBURSAL",
  "ZERO PLATFORM RETENTION FEE",
  "INSTANT 80G TAX CERTIFICATES",
  "FCRA AUTOMATED BANK RECONCILIATION",
  "IMMUTABLE CRYPTOGRAPHIC AUDIT LEDGER"
];

const variants = {
  minimalist: "bg-white text-brand-dark border-y border-brand-dark/10 shadow-sm",
  orange: "bg-brand-orange text-white border-y border-white/20 shadow-lg",
  emerald: "bg-gradient-to-r from-brand-emerald via-teal-600 to-emerald-700 text-white border-y border-white/20 shadow-lg",
  dark: "bg-brand-dark text-white border-y border-white/10 shadow-xl"
};

export default function BrandMarquee({ variant = "minimalist", items = defaultItems, reverse = false }) {
  const themeClass = variants[variant] || variants.minimalist;
  const initialX = reverse ? "-50%" : "0%";
  const targetX = reverse ? "0%" : "-50%";
  const isLight = variant === "minimalist";

  return (
    <div className={`py-3.5 overflow-hidden select-none relative z-10 ${themeClass}`}>
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [initialX, targetX] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-8 shrink-0"
        >
          {items.concat(items).map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Sparkles className={`w-4 h-4 shrink-0 animate-pulse ${isLight ? 'text-brand-orange' : 'text-white'}`} />
                {item}
              </span>
              <Heart className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-brand-orange/60 fill-brand-orange/30' : 'fill-white text-white/80'}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
