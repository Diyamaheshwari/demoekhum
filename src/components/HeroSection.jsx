import React, { useState } from 'react';
import { ArrowDown, Heart, Sparkles, CheckCircle2, Shield, Lock, Receipt, ExternalLink } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const donationOptions = [
  { amount: 100, label: "₹100", meals: 2, impact: "2 Nutritious Meals" },
  { amount: 500, label: "₹500", meals: 10, impact: "10 Nutritious Meals", default: true },
  { amount: 1000, label: "₹1,000", meals: 20, impact: "20 Meals + Health Check" },
  { amount: 2500, label: "CUSTOM", meals: 50, impact: "50 Meals + Study Kit" }
];

export default function HeroSection({ onOpenDonate, onOpenDeepDive }) {
  const [selectedOption, setSelectedOption] = useState(donationOptions[1]);
  const [customAmount, setCustomAmount] = useState('2500');
  const [isCustomInput, setIsCustomInput] = useState(false);

  const scrollToJourney = () => {
    const element = document.getElementById('journey');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenDeepDive('platform');
    }
  };

  // 3D Parallax Mouse Tracking Controls
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Layer 1: Foreground 3D Coin
  const coinRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { stiffness: 200, damping: 20 });
  const coinRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { stiffness: 200, damping: 20 });

  // Layer 2: Middle Particles
  const middleX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), { stiffness: 150, damping: 25 });
  const middleY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), { stiffness: 150, damping: 25 });

  // Layer 3: Background Human Image
  const bgImageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
  const bgImageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });

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

  const handleSelectOption = (opt) => {
    setSelectedOption(opt);
    if (opt.label === 'CUSTOM') {
      setIsCustomInput(true);
    } else {
      setIsCustomInput(false);
    }
  };

  const currentAmountDisplay = selectedOption.label === 'CUSTOM' ? `₹${customAmount}` : selectedOption.label;
  const currentMeals = isCustomInput 
    ? Math.max(1, Math.floor(parseInt(customAmount || '0') / 50))
    : selectedOption.meals;

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 bg-[#FFFDF9] flex flex-col justify-between items-center min-h-[92vh] overflow-hidden select-none"
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[380px] bg-brand-orange/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[280px] bg-amber-400/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Particles Stream */}
      <motion.div style={{ x: middleX, y: middleY }} className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, y: '100vh', x: `${(i + 1) * 12}%` }}
            animate={{ 
              y: ['100vh', '-10vh'], 
              opacity: [0, 0.6, 0],
              x: [`${(i + 1) * 12}%`, `${(i + 1) * 12 + (i % 2 === 0 ? 3 : -3)}%`]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 12 + i * 2, 
              ease: "linear",
              delay: i * 1.2 
            }}
            className="absolute w-2 h-2 rounded-full bg-brand-orange/40 shadow-[0_0_12px_#E35A27]"
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Short Headline + Interactive Amount Selector */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Live Motto Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-orange/20 shadow-sm text-[11px] font-black text-brand-dark uppercase tracking-widest"
            >
              <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange animate-pulse" />
              <span>Every Act of Kindness Matters</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
            </motion.div>

            {/* Short Emotional Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.03] text-brand-dark uppercase"
            >
              GIVE A LITTLE. <br />
              <span className="bg-gradient-to-r from-brand-orange via-amber-600 to-brand-orange bg-clip-text text-transparent">
                CHANGE A LOT.
              </span>
            </motion.h1>

            {/* Dynamic Impact Reaction Banner */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-brand-dark/90 bg-amber-500/10 px-4 py-2.5 rounded-2xl border border-amber-500/20 shadow-sm"
            >
              <span className="text-brand-orange font-black">{currentAmountDisplay}</span>
              <span>→</span>
              <span className="text-emerald-700 font-extrabold">{currentMeals} Nutritious Meals Delivered</span>
            </motion.div>

            {/* Interactive Hero Donation Amount Selector */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-lg p-4 rounded-2xl bg-white border border-brand-dark/10 shadow-lg space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-brand-dark/60">
                <span>Select Donation Amount</span>
                <span className="text-brand-orange font-black flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 0% Platform Fee
                </span>
              </div>

              {/* Amount Pills */}
              <div className="grid grid-cols-4 gap-2">
                {donationOptions.map((opt) => {
                  const active = selectedOption.label === opt.label;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectOption(opt)}
                      className={`py-3 px-3 rounded-xl text-xs font-black uppercase transition-all duration-200 cursor-pointer border ${
                        active 
                          ? 'bg-brand-dark text-white border-brand-dark shadow-md scale-102' 
                          : 'bg-[#FDFBF7] text-brand-dark hover:border-brand-orange/50 border-brand-dark/10'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {/* Custom Input Field */}
              {isCustomInput && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="pt-1">
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-brand-dark text-sm">₹</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter custom amount"
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-brand-dark/20 text-sm font-bold text-brand-dark focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Dynamic CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-2 pt-1"
            >
              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenDonate}
                  className="px-9 py-4.5 rounded-2xl bg-brand-orange hover:bg-brand-dark text-white font-black text-xs uppercase tracking-widest flex items-center gap-2.5 transition-all shadow-xl shadow-brand-orange/30 border border-brand-orange cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>DONATE {currentAmountDisplay} →</span>
                </motion.button>

                <button
                  onClick={scrollToJourney}
                  className="px-5 py-4 text-xs font-black text-brand-dark hover:text-brand-orange uppercase tracking-wider flex items-center gap-2 transition-colors group cursor-pointer bg-white rounded-2xl border border-brand-dark/10 shadow-sm hover:shadow"
                >
                  <span>See Where Money Goes</span>
                  <ArrowDown className="w-4 h-4 text-brand-orange group-hover:translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Micro Impact Preview */}
              <div className="text-[11px] text-brand-dark/60 font-semibold flex items-center gap-3 pt-1">
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {currentMeals} Meals Reached
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  0% Platform Retention Fee
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Hero Visual Anchor (3D ₹ Token + Destination Photo + Interactive Hotspots) */}
          <div className="lg:col-span-6 relative [perspective:1200px] mt-6 lg:mt-0 flex flex-col items-center">
            
            {/* Layer 1 & 2: 3D Floating ₹ Token Visual Anchor */}
            <motion.div
              style={{
                rotateX: coinRotateX,
                rotateY: coinRotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative z-20 mb-6 cursor-pointer group"
            >
              {/* Warm Translucent 3D ₹ Token */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-amber-300 via-brand-orange to-amber-600 p-1 shadow-[0_20px_50px_rgba(227,90,39,0.4)] border-4 border-white/60 flex items-center justify-center relative transform [translateZ:60px] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-orange/90 via-amber-500/80 to-amber-300/90 backdrop-blur-md flex flex-col items-center justify-center text-white border border-white/40 shadow-inner">
                  <span className="text-3xl sm:text-4xl font-black drop-shadow-md">₹</span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-white/90">{currentAmountDisplay}</span>
                </div>
                
                {/* Subtle Reflection Glare */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Connecting Particle Stream down to Human Destination Photo */}
            <div className="w-0.5 h-8 bg-gradient-to-b from-brand-orange via-amber-400 to-emerald-500 rounded-full animate-pulse my-1 relative z-10" />

            {/* Layer 3: Destination Human Photograph Container */}
            <motion.div
              style={{ x: bgImageX, y: bgImageY }}
              className="relative w-full max-w-sm sm:max-w-md z-10"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3.2]">
                <img
                  src="assets/hero_child_food_bowl.jpg"
                  alt="Child holding food bowl - Ekhum"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />

                {/* Destination Outcome Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider block">
                      Ground Outcome Destination
                    </span>
                    <span className="text-xs font-black text-brand-dark">
                      {currentMeals} Warm Meals Delivered directly to ground schools
                    </span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                </div>
              </div>

              {/* 4 Interactive Progressive Disclosure Hotspots (Click opens DeepDiveModal) */}
              
              {/* Hotspot 1: 0% PLATFORM FEE (Top Left) */}
              <button
                onClick={() => onOpenDeepDive('platform')}
                className="absolute -top-4 -left-4 p-2.5 px-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl flex items-center gap-2 hover:scale-105 hover:border-brand-orange transition-all cursor-pointer z-30 group"
                title="Click for zero platform fee details"
              >
                <div className="w-6 h-6 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center font-black text-xs">
                  0%
                </div>
                <div className="text-[10px] font-black text-brand-dark uppercase tracking-wider flex items-center gap-1">
                  <span>0% Fee</span>
                  <ExternalLink className="w-3 h-3 text-brand-dark/40 group-hover:text-brand-orange" />
                </div>
              </button>

              {/* Hotspot 2: VERIFIED (Top Right) */}
              <button
                onClick={() => onOpenDeepDive('trust')}
                className="absolute -top-4 -right-4 p-2.5 px-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl flex items-center gap-2 hover:scale-105 hover:border-emerald-500 transition-all cursor-pointer z-30 group"
                title="Click for cryptographic verification details"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <div className="text-[10px] font-black text-brand-dark uppercase tracking-wider flex items-center gap-1">
                  <span>Verified</span>
                  <ExternalLink className="w-3 h-3 text-brand-dark/40 group-hover:text-emerald-600" />
                </div>
              </button>

              {/* Hotspot 3: 80G EXEMPT (Bottom Left) */}
              <button
                onClick={() => onOpenDeepDive('trust')}
                className="absolute -bottom-4 -left-4 p-2.5 px-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl flex items-center gap-2 hover:scale-105 hover:border-blue-500 transition-all cursor-pointer z-30 group"
                title="Click for 80G tax receipt details"
              >
                <Receipt className="w-4 h-4 text-blue-600" />
                <div className="text-[10px] font-black text-brand-dark uppercase tracking-wider flex items-center gap-1">
                  <span>80G Tax Receipt</span>
                  <ExternalLink className="w-3 h-3 text-brand-dark/40 group-hover:text-blue-600" />
                </div>
              </button>

              {/* Hotspot 4: GROUND OUTCOME (Bottom Right) */}
              <button
                onClick={() => onOpenDeepDive('funders')}
                className="absolute -bottom-4 -right-4 p-2.5 px-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl flex items-center gap-2 hover:scale-105 hover:border-amber-500 transition-all cursor-pointer z-30 group"
                title="Click for ground disbursal details"
              >
                <Lock className="w-4 h-4 text-amber-600" />
                <div className="text-[10px] font-black text-brand-dark uppercase tracking-wider flex items-center gap-1">
                  <span>Ground Proof</span>
                  <ExternalLink className="w-3 h-3 text-brand-dark/40 group-hover:text-amber-600" />
                </div>
              </button>

            </motion.div>

          </div>

        </div>
      </div>

      {/* Visual Scroll Lead Line */}
      <div className="relative z-10 pt-6 pb-1 flex flex-col items-center justify-center gap-1 cursor-pointer mt-auto" onClick={scrollToJourney}>
        <span className="text-[9px] font-black uppercase tracking-widest text-brand-dark/40">Scroll to Explore Journey</span>
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
