import React from 'react';
import { Award, ShieldCheck, Sparkles, Sliders } from 'lucide-react';

export const MaterialQuality = () => {
  return (
    <section id="craftsmanship-section" className="py-24 px-6 md:px-12 bg-[#160B17] border-t border-[#C9A96E]/15 text-left">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B88C91] block mb-2 font-mono">
              ENGINEERING EXCELLENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F4EFE7]">
              Crafted in <span className="italic gold-gradient-text">Extra Flint Glass</span>
            </h2>
            <p className="text-xs text-[#D1C7BA] font-light mt-4 leading-relaxed">
              Every JarSking bottle is manufactured using high-clarity extra flint glass, giving the container crystal transparency, high chemical inertia to preserve essential fragrance notes, and a reassuring weight in the hand.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="glass-panel p-5 rounded-sm border border-[#C9A96E]/20">
              <Award className="w-6 h-6 text-[#C9A96E] mb-2" />
              <h4 className="font-serif text-lg text-[#F4EFE7]">ISO 9001 & REACH</h4>
              <p className="text-[11px] text-[#D1C7BA] mt-1">Certified chemical compliance for international beauty export.</p>
            </div>
            <div className="glass-panel p-5 rounded-sm border border-[#C9A96E]/20">
              <ShieldCheck className="w-6 h-6 text-[#C9A96E] mb-2" />
              <h4 className="font-serif text-lg text-[#F4EFE7]">Leak-Proof Seals</h4>
              <p className="text-[11px] text-[#D1C7BA] mt-1">Precision crimp pumps engineered for zero evaporation loss.</p>
            </div>
          </div>
        </div>

        {/* EDITORIAL IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#C9A96E]/20 group">
            <img 
              src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop" 
              alt="Molten Glass Furnace" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160B17] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono text-[#C9A96E] uppercase">01 • Molten Glass Molding</span>
              <h4 className="font-serif text-xl text-[#F4EFE7]">1450°C Precision Forming</h4>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#C9A96E]/20 group">
            <img 
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop" 
              alt="Quality Inspection" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160B17] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono text-[#C9A96E] uppercase">02 • Surface Coating</span>
              <h4 className="font-serif text-xl text-[#F4EFE7]">24K Hot Foil & Electroplating</h4>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#C9A96E]/20 group">
            <img 
              src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop" 
              alt="Automated Packaging" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160B17] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono text-[#C9A96E] uppercase">03 • Micro-Mist Atomizer</span>
              <h4 className="font-serif text-xl text-[#F4EFE7]">FEA 15 Anodized Collars</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
