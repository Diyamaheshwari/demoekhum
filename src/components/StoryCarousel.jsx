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
    location: "Rural MP & Rajasthan"
  },
  {
    id: 2,
    image: "assets/slideshow_healthcare.jpg",
    category: "Healthcare Outreach",
    title: "Mobile Clinics in Remote Villages",
    quote: "Every checkup and lifesaving immunization is linked back to real-time donor contribution receipts.",
    metric: "45,000+ Screenings Completed",
    location: "Khandwa & Betul"
  },
  {
    id: 3,
    image: "assets/slideshow_nutrition.jpg",
    category: "Nutrition Ledger",
    title: "Daily Warm Meals Served with Dignity",
    quote: "Ensuring zero hunger in primary schools so every child stays energetic, nourished, and excited to learn.",
    metric: "1.2 Million Meals Disbursed",
    location: "Chhindwara & Seoni"
  },
  {
    id: 4,
    image: "assets/slideshow_empowerment.jpg",
    category: "Future Leaders",
    title: "Solar Study Lamps & Digital Literacy",
    quote: "Empowering young girls to dream big and study safely late into the evening with clean solar energy.",
    metric: "12,000 Solar Study Lamps",
    location: "Jhabua & Dhar"
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
      }, 5000);
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
    <section id="stories" className="py-20 bg-[#0F141C] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange font-extrabold text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Human Stories</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Visualizing the <span className="text-brand-orange">human impact</span>
            </h2>
          </motion.div>

          {/* Autoplay & Nav Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
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

        {/* Cinematic Card Frame */}
        <div className="relative rounded-3xl overflow-hidden bg-[#181E29] border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]"
            >
              {/* Large Image View */}
              <div className="lg:col-span-7 relative overflow-hidden group min-h-[320px] lg:min-h-[440px]">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181E29] via-transparent to-transparent lg:hidden" />
                
                <div className="absolute top-4 left-4 glass-dark px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/20 text-xs font-bold text-white shadow-xl backdrop-blur-md">
                  <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <span>{currentSlide.category}</span>
                </div>
              </div>

              {/* Story Copy */}
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest">
                    {currentSlide.location}
                  </span>

                  <h3 className="text-2xl font-black text-white leading-tight">
                    "{currentSlide.quote}"
                  </h3>
                </div>

                <div className="space-y-5 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-white/50 font-medium">Verified Ground Result</div>
                      <div className="text-lg font-black text-emerald-400">{currentSlide.metric}</div>
                    </div>

                    <button
                      onClick={onOpenDonate}
                      className="px-4 py-2 rounded-xl bg-brand-orange hover:bg-white text-white hover:text-brand-dark font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <span>Support</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Indicator Dots */}
                  <div className="flex items-center gap-2 pt-1">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === currentIndex ? 'w-8 bg-brand-orange' : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Go to story ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
