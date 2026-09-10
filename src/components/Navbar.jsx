import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Heart } from 'lucide-react';

export default function Navbar({ onOpenDonate, onOpenDemo, onOpenDeepDive }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-orange via-amber-500 to-emerald-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-brand-dark/5 py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 group">
            <span className="text-2xl font-black tracking-tight text-brand-dark group-hover:text-brand-orange transition-colors">
              ekhum<span className="text-brand-orange text-xs align-top font-bold">®</span>
            </span>
            <span className="hidden sm:inline-block ml-3 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-brand-orange/10 text-brand-orange">
              Good Deserves Better
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-dark/75">
            <a href="#journey" className="hover:text-brand-orange transition-colors">How It Works</a>
            <a href="#causes" className="hover:text-brand-orange transition-colors">Causes</a>
            <a href="#stories" className="hover:text-brand-orange transition-colors">Stories</a>
            <a href="#impact" className="hover:text-brand-orange transition-colors">Impact</a>
            <a href="#trust" className="hover:text-brand-orange transition-colors">Trust</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenDeepDive('platform')}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-brand-dark/70 hover:text-brand-dark hover:bg-brand-dark/5 rounded-full transition-all cursor-pointer"
            >
              For Organizations
            </button>
            <button
              onClick={onOpenDonate}
              className="px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-dark text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-brand-orange/20 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-brand-dark hover:bg-brand-dark/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFBF7] border-b border-brand-dark/10 px-6 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col gap-4 text-base font-semibold text-brand-dark">
              <a href="#journey" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#causes" onClick={() => setMobileMenuOpen(false)}>Causes</a>
              <a href="#stories" onClick={() => setMobileMenuOpen(false)}>Stories</a>
              <a href="#impact" onClick={() => setMobileMenuOpen(false)}>Impact</a>
              <a href="#trust" onClick={() => setMobileMenuOpen(false)}>Trust</a>
            </nav>
            <div className="pt-4 border-t border-brand-dark/10 flex flex-col gap-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDonate(); }}
                className="w-full py-3 rounded-full bg-brand-orange text-white font-extrabold text-sm flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate Now</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
