import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TemplateWelcome({ onOpenDemo, onOpenDeepDive }) {
  return (
    <section className="py-14 bg-white border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 3-Photo Collage Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white relative h-64">
              <img
                src="assets/hero_child_food_bowl.jpg"
                alt="Child with food bowl"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-sm border-2 border-white h-30">
                <img
                  src="assets/slideshow_nutrition.jpg"
                  alt="Nutrition distribution"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border-2 border-white h-30">
                <img
                  src="assets/hero_child_hope.jpg"
                  alt="Child hope portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Welcome Headline & Pruned Text */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
              Welcome to Ekhum
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight leading-tight uppercase">
              Rise your <span className="text-brand-orange">Helping Hand.</span>
            </h2>

            <p className="text-sm text-brand-dark/80 font-medium leading-relaxed max-w-md">
              India's transparent non-profit platform matching every rupee raised with real-time audit proof, 80G tax receipts, and verified ground outcomes.
            </p>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-dark text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-brand-orange/20 border border-brand-orange cursor-pointer"
              >
                <span>Book Demo / Explore</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
