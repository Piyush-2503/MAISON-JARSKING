import React from 'react';
import { useCart } from '../context/CartContext';
import { ArrowRight } from 'lucide-react';

export const ProcessSection = () => {
  const { setActiveView, setIsQuoteModalOpen } = useCart();

  const steps = [
    {
      num: "01",
      title: "Choose Your Silhouette",
      desc: "Explore our collection of over 30+ architectural bottle molds spanning minimal, sculptural, and classic forms."
    },
    {
      num: "02",
      title: "Select Volume Tier",
      desc: "Start with an accessible minimum order quantity of 50 bottles, with automatic price discounts unlocked at higher volume tiers."
    },
    {
      num: "03",
      title: "Bespoke Customization",
      desc: "Select surface coatings (matte, frosted, electroplated), neck spray colors, and custom 24K foil or engraved logo branding."
    },
    {
      num: "04",
      title: "Request Quotation",
      desc: "Submit your batch parameters to receive a formal B2B invoice estimate with shipping freight and physical sample options."
    },
    {
      num: "05",
      title: "Production & Delivery",
      desc: "Our automated manufacturing lines produce, inspect, and securely package your order for direct international delivery."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#241525] border-t border-[#C9A96E]/15 text-left">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B88C91] block mb-2 font-mono">
            SEAMLESS PURCHASING WORKFLOW
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F4EFE7]">
            The Purchasing <span className="italic gold-gradient-text">Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-sm border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-4xl text-[#C9A96E] font-light block mb-4">
                  {step.num}
                </span>
                <h4 className="font-serif text-xl text-[#F4EFE7] font-normal mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-[#D1C7BA] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="btn-gold-luxury px-8 py-3.5 text-xs rounded-sm inline-flex items-center gap-2"
          >
            <span>Start Your Bulk Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
