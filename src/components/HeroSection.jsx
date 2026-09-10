import React, { useState } from 'react';
import { ArrowDown, Heart, Sparkles, CheckCircle2, Shield, Lock, ExternalLink, Globe, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function HeroSection({ onOpenDonate, onOpenDeepDive }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const scrollToJourney = () => {
    const element = document.getElementById('journey');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenDeepDive('project');
    }
  };

  // 3D Parallax Mouse Tracking Controls
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Layer 1: Foreground Impact Universe Sphere
  const universeRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 180, damping: 22 });
  const universeRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 180, damping: 22 });

  // Layer 2: Middle Hotspots & Particles
  const middleX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), { stiffness: 140, damping: 25 });
  const middleY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-18, 18]), { stiffness: 140, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 bg-[#FFFDF9] flex flex-col justify-between items-center min-h-[92vh] overflow-hidden select-none"
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-brand-orange/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-amber-400/8 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Light Particles Stream */}
      <motion.div style={{ x: middleX, y: middleY }} className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, y: '100vh', x: `${(i + 1) * 10}%` }}
            animate={{ 
              y: ['100vh', '-10vh'], 
              opacity: [0, 0.6, 0],
              x: [`${(i + 1) * 10}%`, `${(i + 1) * 10 + (i % 2 === 0 ? 3 : -3)}%`]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 11 + i * 2, 
              ease: "linear",
              delay: i * 1.1 
            }}
            className="absolute w-2 h-2 rounded-full bg-brand-orange/40 shadow-[0_0_12px_#E35A27]"
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Stark Editorial Headline + Dynamic Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Live Motto Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-orange/20 shadow-sm text-[11px] font-black text-brand-dark uppercase tracking-widest"
            >
              <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange animate-pulse" />
              <span>Interactive Impact Exhibition</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
            </motion.div>

            {/* Stark Editorial Headline: MAKE IMPACT VISIBLE */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.02] text-brand-dark uppercase"
            >
              MAKE IMPACT <br />
              <span className="bg-gradient-to-r from-brand-orange via-amber-600 to-brand-orange bg-clip-text text-transparent">
                VISIBLE.
              </span>
            </motion.h1>

            {/* Single Short Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-brand-dark/80 max-w-md font-medium leading-relaxed"
            >
              Every contribution moves through people, places, and verified ground action.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-3 pt-1 w-full"
            >
              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenDonate}
                  className="px-9 py-4.5 rounded-2xl bg-brand-orange hover:bg-brand-dark text-white font-black text-xs uppercase tracking-widest flex items-center gap-2.5 transition-all shadow-xl shadow-brand-orange/30 border border-brand-orange cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white animate-pulse" />
                  <span>DONATE NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <button
                  onClick={scrollToJourney}
                  className="px-6 py-4.5 text-xs font-black text-brand-dark hover:text-brand-orange uppercase tracking-wider flex items-center gap-2 transition-colors group cursor-pointer bg-white rounded-2xl border border-brand-dark/10 shadow-sm hover:shadow"
                >
                  <span>EXPLORE IMPACT</span>
                  <ArrowDown className="w-4 h-4 text-brand-orange group-hover:translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Micro Trust Signals */}
              <div className="flex items-center gap-3 text-[11px] font-bold text-brand-dark/60">
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  0% Platform Fee
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  Instant 80G Receipt
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D "Impact Universe" Spatial Composition (6 Cols) */}
          <div className="lg:col-span-6 relative [perspective:1200px] mt-8 lg:mt-0 flex items-center justify-center">
            
            {/* 3D Organic Photographic Universe Sphere Container */}
            <motion.div
              style={{
                rotateX: universeRotateX,
                rotateY: universeRotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative w-full max-w-md aspect-square rounded-full p-2 bg-gradient-to-br from-brand-orange/20 via-amber-400/10 to-emerald-500/20 shadow-[0_30px_80px_rgba(227,90,39,0.25)] border border-white/60 flex items-center justify-center cursor-pointer group"
            >
              {/* Layered Organic Photographic Globe Center */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-brand-dark/90">
                <img
                  src="assets/hero_child_food_bowl.jpg"
                  alt="Impact Universe - Ekhum"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/25 to-transparent" />

                {/* Central Universe Label Overlay */}
                <div className="absolute bottom-8 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 text-center shadow-xl transform [translateZ:40px]">
                  <span className="text-[10px] font-black text-brand-orange uppercase tracking-widest block mb-0.5">
                    ● EKHUM IMPACT UNIVERSE
                  </span>
                  <span className="text-xs font-black text-brand-dark">
                    Explore real people, places, and verified outcomes
                  </span>
                </div>
              </div>

              {/* 4 Interactive Progressive Disclosure Spatial Hotspots with Distinct Topics */}
              
              {/* Hotspot 1: A PROJECT (Top Left -> topic: 'project') */}
              <motion.button
                style={{ x: middleX, y: middleY }}
                onClick={() => onOpenDeepDive('project')}
                onMouseEnter={() => setActiveHotspot('project')}
                onMouseLeave={() => setActiveHotspot(null)}
                className="absolute -top-4 -left-2 p-3 px-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-2xl flex items-center gap-2 transform [translateZ:70px] hover:scale-110 hover:border-brand-orange transition-all cursor-pointer z-30"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
                <div className="text-[10px] font-black text-brand-dark uppercase tracking-wider flex items-center gap-1">
                  <span>● A PROJECT</span>
                  <ExternalLink className="w-3 h-3 text-brand-dark/40" />
                </div>
              </motion.button>

              {/* Hotspot 2: A PERSON (Top Right -> topic: 'person') */}
              <motion.button
                style={{ x: middleX, y: middleY }}
                onClick={() => onOpenDeepDive('person')}
                onMouseEnter={() => setActiveHotspot('person')}
                onMouseLeave={() => setActiveHotspot(null)}
                className="absolute -top-4 -right-2 p-3 px-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-2xl flex items-center gap-2 transform [translateZ:60px] hover:scale-110 hover:border-emerald-500 transition-all cursor-pointer z-30"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <div className="text-[10px] font-black text-brand-dark uppercase tracking-wider flex items-center gap-1">
                  <span>● A PERSON</span>
                  <ExternalLink className="w-3 h-3 text-brand-dark/40" />
                </div>
              </motion.button>

              {/* Hotspot 3: A COMMUNITY (Bottom Left -> topic: 'community') */}
              <motion.button
                style={{ x: middleX, y: middleY }}
                onClick={() => onOpenDeepDive('community')}
                onMouseEnter={() => setActiveHotspot('community')}
                onMouseLeave={() => setActiveHotspot(null)}
                className="absolute -bottom-4 -left-2 p-3 px-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-2xl flex items-center gap-2 transform [translateZ:80px] hover:scale-110 hover:border-blue-500 transition-all cursor-pointer z-30"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                <div className="text-[10px] font-black text-brand-dark uppercase tracking-wider flex items-center gap-1">
                  <span>● A COMMUNITY</span>
                  <ExternalLink className="w-3 h-3 text-brand-dark/40" />
                </div>
              </motion.button>

              {/* Hotspot 4: AN OUTCOME (Bottom Right -> topic: 'outcome') */}
              <motion.button
                style={{ x: middleX, y: middleY }}
                onClick={() => onOpenDeepDive('outcome')}
                onMouseEnter={() => setActiveHotspot('outcome')}
                onMouseLeave={() => setActiveHotspot(null)}
                className="absolute -bottom-4 -right-2 p-3 px-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-2xl flex items-center gap-2 transform [translateZ:75px] hover:scale-110 hover:border-amber-500 transition-all cursor-pointer z-30"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                <div className="text-[10px] font-black text-brand-dark uppercase tracking-wider flex items-center gap-1">
                  <span>● AN OUTCOME</span>
                  <ExternalLink className="w-3 h-3 text-brand-dark/40" />
                </div>
              </motion.button>

            </motion.div>

          </div>

        </div>
      </div>

      {/* Visual Scroll Lead Line */}
      <div className="relative z-10 pt-6 pb-1 flex flex-col items-center justify-center gap-1 cursor-pointer mt-auto" onClick={scrollToJourney}>
        <span className="text-[9px] font-black uppercase tracking-widest text-brand-dark/40">EXPLORE IMPACT</span>
        <div className="w-[2px] h-8 bg-brand-dark/15 relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: [0, 32] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-full h-2.5 bg-brand-orange rounded-full shadow-[0_0_8px_#E35A27]"
          />
        </div>
      </div>

    </section>
  );
}
