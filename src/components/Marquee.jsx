import React from 'react';
import { Sparkles } from 'lucide-react';

export const Marquee = () => {
  const marqueeItems = [
    "EXTRA FLINT GLASS",
    "DISTINCTIVE ARCHITECTURAL FORMS",
    "CUSTOM HOT-STAMPING & ELECTROPLATING",
    "STRICT MOQ 50 UNITS",
    "TIERED BULK DISCOUNTS UP TO 25%",
    "FEA 15 PRECISION ATOMIZERS",
    "HAUTE PERFUMERY PACKAGING"
  ];

  return (
    <div className="w-full bg-[#160B17] border-y border-[#C9A96E]/20 py-4 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        {marqueeItems.concat(marqueeItems).map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs font-mono uppercase tracking-[0.3em] text-[#C9A96E]/80">
            <span>{text}</span>
            <Sparkles className="w-3 h-3 text-[#B88C91]" />
          </div>
        ))}
      </div>
    </div>
  );
};
