import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceStats from './components/ExperienceStats';
import BrandMarquee from './components/BrandMarquee';
import PartnerLogos from './components/PartnerLogos';
import StoryCarousel from './components/StoryCarousel';
import LiveCauses from './components/LiveCauses';
import PhilanthropyRoadmap from './components/PhilanthropyRoadmap';
import TechnologyMatrix from './components/TechnologyMatrix';
import TrustGrid from './components/TrustGrid';
import FunderSpotlight from './components/FunderSpotlight';
import SavingsCalculator from './components/SavingsCalculator';
import Footer from './components/Footer';
import DeepDiveModal from './components/DeepDiveModal';
import DemoModal from './components/DemoModal';
import SectionReveal from './components/SectionReveal';
import { Heart, ChevronDown } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const [activeDeepDiveTopic, setActiveDeepDiveTopic] = useState(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Top Page Scroll Progress Spring
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenDeepDive = (topic = 'platform') => {
    setActiveDeepDiveTopic(topic);
  };

  const handleCloseDeepDive = () => {
    setActiveDeepDiveTopic(null);
  };

  const handleOpenDemo = () => {
    setIsDemoOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoOpen(false);
  };

  const securityMarqueeItems = [
    "IMMUTABLE CRYPTOGRAPHIC LEDGER",
    "100% FCRA AUTOMATED BANK RECONCILIATION",
    "INSTANT 80G TAX CERTIFICATES",
    "TIER-4 INDIAN SOVEREIGN DATA RESIDENCY",
    "AES-256 ENCRYPTED AUDIT TRAILS",
    "GRANULAR ROLE-BASED ACCESS CONTROL"
  ];

  const impactMarqueeItems = [
    "CALCULATE YOUR GROUND IMPACT",
    "0% PLATFORM RETENTION FEE",
    "100% DIRECT DISBURSAL TO GROUND NGO PARTNERS",
    "75,000+ LIVES DIRECTLY EMPOWERED",
    "VERIFIED REAL-TIME CA AUDIT LEDGER"
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-brand-dark flex flex-col font-sans relative selection:bg-brand-orange selection:text-white">
      
      {/* 3D Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-emerald via-emerald-400 to-brand-orange z-50 origin-left shadow-[0_0_15px_rgba(16,185,129,0.7)] pointer-events-none"
      />

      {/* Sticky Top Navbar */}
      <Navbar 
        onOpenDemo={handleOpenDemo}
        onOpenDeepDive={handleOpenDeepDive}
      />

      {/* Main Section Flow with 3D Viewport Reveals */}
      <main className="flex-grow space-y-4">
        {/* 1. Hero Section */}
        <HeroSection 
          onOpenDemo={handleOpenDemo}
          onOpenDeepDive={handleOpenDeepDive}
        />

        {/* 2. Impact Stat Counters */}
        <SectionReveal>
          <ExperienceStats 
            onOpenDeepDive={handleOpenDeepDive}
          />
        </SectionReveal>

        {/* 3. Primary Orange Brand Moving Marquee Ticker */}
        <BrandMarquee variant="orange" />

        {/* 4. Global & Indian Nonprofits Partner Strip */}
        <SectionReveal>
          <PartnerLogos />
        </SectionReveal>

        {/* 5. Human Impact Story Slideshow / Carousel */}
        <SectionReveal>
          <StoryCarousel 
            onOpenDeepDive={handleOpenDeepDive}
            onOpenDemo={handleOpenDemo}
          />
        </SectionReveal>

        {/* 6. Live Verified Causes & Progress Meters */}
        <SectionReveal>
          <LiveCauses
            onOpenDemo={handleOpenDemo}
            onOpenDeepDive={handleOpenDeepDive}
          />
        </SectionReveal>

        {/* 7. Philanthropy OS Step-by-Step Storyline Pipeline */}
        <SectionReveal>
          <PhilanthropyRoadmap 
            onOpenDeepDive={handleOpenDeepDive}
          />
        </SectionReveal>

        {/* 8. Technology Capability Engine Showcase */}
        <SectionReveal>
          <TechnologyMatrix 
            onOpenDeepDive={handleOpenDeepDive}
          />
        </SectionReveal>

        {/* 9. Trust, FCRA & Compliance 3D Security Deck */}
        <SectionReveal>
          <TrustGrid 
            onOpenDeepDive={handleOpenDeepDive}
          />
        </SectionReveal>

        {/* 10. CSR & Institutional Funder Spotlight */}
        <SectionReveal>
          <FunderSpotlight 
            onOpenDeepDive={handleOpenDeepDive}
            onOpenDemo={handleOpenDemo}
          />
        </SectionReveal>

        {/* 11. Fee Savings & Human Impact Calculator */}
        <SectionReveal>
          <SavingsCalculator 
            onOpenDemo={handleOpenDemo}
          />
        </SectionReveal>
      </main>

      {/* Footer */}
      <SectionReveal>
        <Footer 
          onOpenDemo={handleOpenDemo}
          onOpenDeepDive={handleOpenDeepDive}
        />
      </SectionReveal>

      {/* Deep-Dive Side Modal Drawer */}
      <DeepDiveModal 
        activeTopic={activeDeepDiveTopic}
        onClose={handleCloseDeepDive}
        onOpenDemo={handleOpenDemo}
      />

      {/* Book Demo / Enquiry Brief Modal */}
      <DemoModal 
        isOpen={isDemoOpen}
        onClose={handleCloseDemo}
      />

      {/* Floating Bottom-Left Interactive Scroll Discovery Pill */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 left-6 z-30 hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-brand-dark/10 shadow-lg text-xs font-extrabold text-brand-dark/70"
      >
        <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
        <span>Scroll to Explore 3D Ecosystem</span>
        <ChevronDown className="w-3.5 h-3.5 text-brand-orange animate-bounce" />
      </motion.div>

      {/* Floating Bottom-Right Quick Action Pill */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={handleOpenDemo}
          className="group px-5 py-3 rounded-full bg-brand-orange text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 hover:bg-brand-dark transition-all border border-white/20"
        >
          <Heart className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Book Demo</span>
          <span className="sm:hidden">Demo</span>
        </button>
      </div>

    </div>
  );
}
