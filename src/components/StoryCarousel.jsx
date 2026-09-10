import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: "assets/impact_community_joy.jpg",
    category: "Education Mission",
    title: "150,000+ Children Learning to Read",
    quote: "When funds move transparently, classrooms fill with bright young minds holding their first books.",
    metric: "100% Verified Classrooms",
    location: "Rural MP & Rajasthan",
    topic: "person"
  },
  {
    id: 2,
    image: "assets/slideshow_healthcare.jpg",
    category: "Healthcare Outreach",
    title: "Mobile Clinics in Remote Villages",
    quote: "Every checkup and lifesaving immunization is linked back to real-time donor contribution receipts.",
    metric: "45,000+ Screenings Completed",
    location: "Khandwa & Betul",
    topic: "community"
  },
  {
    id: 3,
    image: "assets/slideshow_nutrition.jpg",
    category: "Nutrition Ledger",
    title: "Daily Warm Meals Served with Dignity",
    quote: "Ensuring zero hunger in primary schools so every child stays energetic, nourished, and excited to learn.",
    metric: "1.2 Million Meals Disbursed",
    location: "Chhindwara & Seoni",
    topic: "person"
  },
  {
    id: 4,
    image: "assets/slideshow_empowerment.jpg",
    category: "Future Leaders",
    title: "Solar Study Lamps & Digital Literacy",
    quote: "Empowering young girls to dream big and study safely late into the evening with clean solar energy.",
    metric: "12,000 Solar Study Lamps",
    location: "Jhabua & Dhar",
    topic: "project"
  }
];

export default function StoryCarousel({ onOpenDonate, onOpenDeepDive }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section id="stories" className="py-24 bg-[#0B0F17] text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-orange font-black text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cinematic Documentary Story</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              HUMAN <span className="text-brand-orange">STORIES</span>
            </h2>
          </motion.div>

          {/* Documentary Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title={isPlaying ? "Pause Documentary" : "Play Documentary"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Previous Story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Next Story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Full-Screen Documentary Canvas (NO BOXED CARD BORDERS) */}
        <div className="relative min-h-[480px] sm:min-h-[560px] rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full flex flex-col justify-between p-8 sm:p-12 relative"
            >
              {/* Full Background Photographic Scene */}
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-90 animate-pulse-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/40 to-transparent" />

              {/* Top Scene Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-xs font-black uppercase text-white">
                  <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <span>{currentSlide.category} • {currentSlide.location}</span>
                </div>

                <div className="text-xs font-black uppercase tracking-widest text-emerald-400">
                  ● {currentSlide.metric}
                </div>
              </div>

              {/* Bottom Minimal Editorial Overlay */}
              <div className="relative z-10 space-y-6 max-w-2xl mt-auto">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  "{currentSlide.quote}"
                </h3>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onOpenDeepDive(currentSlide.topic)}
                    className="px-8 py-3.5 rounded-2xl bg-brand-orange hover:bg-white text-white hover:text-brand-dark font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-xl cursor-pointer"
                  >
                    <span>READ STORY</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <button
                    onClick={onOpenDonate}
                    className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-wider transition-all border border-white/20 cursor-pointer"
                  >
                    <span>SUPPORT CAUSE</span>
                  </button>
                </div>
              </div>

              {/* Indicator Dots */}
              <div className="absolute bottom-6 right-8 z-10 flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex ? 'w-8 bg-brand-orange' : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to story ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
