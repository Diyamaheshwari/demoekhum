import React from 'react';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TemplateFooterCallout({ onOpenDemo }) {
  return (
    <div className="bg-brand-dark py-12 px-6 text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
            HOW YOU CAN HELP US
          </h3>
          <p className="text-xs sm:text-sm text-white/70 font-medium">
            Partner with Ekhum or book a live platform demo to transform Indian philanthropy.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenDemo}
          className="px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white text-xs font-black uppercase tracking-widest flex items-center gap-2.5 shadow-xl border border-white/20 shrink-0"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Book Demo / Call Us</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}
