import React from 'react';

export default function TemplateOrangeBar({ text = "WE ARE INDIA'S FIRST 100% DIRECT DISBURSAL PHILANTHROPY OS & NGO PLATFORM" }) {
  return (
    <div className="bg-brand-orange py-6 px-6 text-white text-center shadow-lg border-y border-white/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-base sm:text-xl font-black uppercase tracking-widest leading-snug drop-shadow-sm">
          {text}
        </h2>
      </div>
    </div>
  );
}
