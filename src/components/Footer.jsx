import React from 'react';
import { ArrowUp, ArrowRight, HeartHandshake } from 'lucide-react';

export default function Footer({ onOpenDemo, onOpenDeepDive }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Closing Banner */}
        <div className="bg-gradient-to-r from-brand-orange to-brand-amber rounded-3xl p-8 md:p-12 mb-16 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-black">
              Good deserves better.<br />
              <span className="text-white/90">Let's make it happen together.</span>
            </h3>
            <p className="text-white/80 text-sm md:text-base font-medium">
              Give your organisation a connected platform for raising and managing funds with total audit transparency.
            </p>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-8 py-4 rounded-2xl bg-white text-brand-dark hover:bg-brand-dark hover:text-white font-extrabold text-sm flex items-center gap-3 transition-all shrink-0 shadow-lg"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="text-2xl font-black text-white">
              ekhum<span className="text-brand-orange text-xs align-top font-bold">®</span>
            </a>
            <p className="text-white/60 text-sm max-w-sm font-medium leading-relaxed">
              The operating system for philanthropy. Connecting fundraising, verification, disbursals, and outcomes in one platform.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-wrap justify-between gap-8 text-sm">
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Platform</span>
              <ul className="space-y-2 text-white/70">
                <li><a href="#platform" className="hover:text-white">Collect</a></li>
                <li><a href="#platform" className="hover:text-white">Verify</a></li>
                <li><a href="#platform" className="hover:text-white">Disburse</a></li>
                <li><a href="#platform" className="hover:text-white">Prove Outcomes</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Trust & Tech</span>
              <ul className="space-y-2 text-white/70">
                <li><a href="#technology" className="hover:text-white">Smart Failover</a></li>
                <li><a href="#trust" className="hover:text-white">80G Receipting</a></li>
                <li><a href="#trust" className="hover:text-white">FCRA Flows</a></li>
                <li><a href="#trust" className="hover:text-white">Form 10BD Engine</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Action</span>
              <ul className="space-y-2 text-white/70">
                <li><button onClick={onOpenDemo} className="hover:text-white">Book Demo</button></li>
                <li><button onClick={() => onOpenDeepDive('platform')} className="hover:text-white">Deep Dive Specs</button></li>
                <li><a href="#calculator" className="hover:text-white">Savings Calculator</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© 2026 Ekhum Philanthropy Technologies. Good Deserves Better.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
