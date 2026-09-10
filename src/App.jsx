import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DonationJourney from './components/DonationJourney';
import LiveCauses from './components/LiveCauses';
import StoryCarousel from './components/StoryCarousel';
import PhilanthropyRoadmap from './components/PhilanthropyRoadmap';
import ExperienceStats from './components/ExperienceStats';
import TrustGrid from './components/TrustGrid';
import PartnerLogos from './components/PartnerLogos';
import FunderSpotlight from './components/FunderSpotlight';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DeepDiveModal from './components/DeepDiveModal';
import DemoModal from './components/DemoModal';
import DonationModal from './components/DonationModal';
import SectionReveal from './components/SectionReveal';
import { Heart } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const [activeDeepDiveTopic, setActiveDeepDiveTopic] = useState(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

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

  const handleOpenDonate = () => {
    setIsDonateOpen(true);
  };

  const handleCloseDonate = () => {
    setIsDonateOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-brand-dark flex flex-col font-sans relative selection:bg-brand-orange selection:text-white">
      
      {/* 3D Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange via-amber-500 to-emerald-500 z-50 origin-left shadow-[0_0_15px_rgba(227,90,39,0.7)] pointer-events-none"
      />

      {/* Sticky Top Navbar */}
      <Navbar 
        onOpenDonate={handleOpenDonate}
        onOpenDemo={handleOpenDemo}
        onOpenDeepDive={handleOpenDeepDive}
      />

      {/* Main Immersive Section Flow */}
      <main className="flex-grow space-y-0">
        
        {/* 01. Immersive Hero Section ("GIVE A LITTLE. CHANGE A LOT." + Interactive Selector) */}
        <HeroSection 
          onOpenDonate={handleOpenDonate}
          onOpenDeepDive={handleOpenDeepDive}
        />

        {/* 02. Your Donation's Impact Flow (Scroll-driven: ₹500 → GIVEN → VERIFIED → DELIVERED → 10 MEALS) */}
        <SectionReveal>
          <DonationJourney 
            onOpenDonate={handleOpenDonate}
          />
        </SectionReveal>

        {/* 03. Live Verified Causes (Moved up: Interactive 1-dominant-cause visual selector) */}
        <SectionReveal>
          <LiveCauses
            onOpenDonate={handleOpenDonate}
            onOpenDeepDive={handleOpenDeepDive}
          />
        </SectionReveal>

        {/* 04. Human Stories (Image-first cinematic stories with minimal text) */}
        <SectionReveal>
          <StoryCarousel 
            onOpenDonate={handleOpenDonate}
            onOpenDeepDive={handleOpenDeepDive}
          />
        </SectionReveal>

        {/* 05. Where Your Money Goes (GIVE → VERIFY → DELIVER → PROVE) */}
        <SectionReveal>
          <PhilanthropyRoadmap 
            onOpenDeepDive={handleOpenDeepDive}
          />
        </SectionReveal>

        {/* 06. Impact Statistics (Oversized animated count-up numbers) */}
        <SectionReveal>
          <ExperienceStats 
            onOpenDeepDive={handleOpenDeepDive}
          />
        </SectionReveal>

        {/* 07. Trust & Compliance (FCRA / 80G / Cryptographic Ledger) */}
        <SectionReveal>
          <TrustGrid 
            onOpenDeepDive={handleOpenDeepDive}
          />
        </SectionReveal>

        {/* 08. Non-Profit Partners & Institutional CSR Funders */}
        <SectionReveal>
          <PartnerLogos />
        </SectionReveal>

        <SectionReveal>
          <FunderSpotlight 
            onOpenDeepDive={handleOpenDeepDive}
            onOpenDemo={handleOpenDemo}
          />
        </SectionReveal>

        {/* 09. Final Emotional Donation CTA ("YOUR NEXT ₹500 CAN BECOME SOMEONE'S TOMORROW.") */}
        <SectionReveal>
          <FinalCTA 
            onOpenDonate={handleOpenDonate}
          />
        </SectionReveal>

      </main>

      {/* Footer */}
      <Footer 
        onOpenDemo={handleOpenDemo}
        onOpenDeepDive={handleOpenDeepDive}
      />

      {/* Deep-Dive Side Modal Drawer */}
      <DeepDiveModal 
        activeTopic={activeDeepDiveTopic}
        onClose={handleCloseDeepDive}
        onOpenDemo={handleOpenDemo}
      />

      {/* Institutional CSR / Demo Modal */}
      <DemoModal 
        isOpen={isDemoOpen}
        onClose={handleCloseDemo}
      />

      {/* Genuine Individual Donor Modal */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={handleCloseDonate}
      />

      {/* Floating Bottom-Right Action Pill */}
      <div className="fixed bottom-6 right-6 z-30">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpenDonate}
          className="group px-5 py-3.5 rounded-full bg-brand-orange text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:bg-brand-dark transition-all border border-white/30 cursor-pointer"
        >
          <Heart className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
          <span>Donate</span>
        </motion.button>
      </div>

    </div>
  );
}
