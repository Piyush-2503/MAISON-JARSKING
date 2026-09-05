import React from 'react';
import { useCart } from '../context/CartContext';
import { ArrowUpRight } from 'lucide-react';

export const BuiltForBrands = () => {
  const { setActiveView } = useCart();

  const personas = [
    {
      title: "Private Label Brands",
      subtitle: "Launch your fragrance line with distinctive forms without massive initial tooling investment.",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
      badge: "Turnkey Launch"
    },
    {
      title: "Established Perfume Houses",
      subtitle: "Scale your global packaging supply chain with ISO9001 certified batch consistency.",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
      badge: "High Volume Scale"
    },
    {
      title: "Independent Perfumers",
      subtitle: "Low MOQ starting at 50 bottles lets independent noses bring artisanal scents to physical reality.",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
      badge: "MOQ 50 Friendly"
    },
    {
      title: "Cosmetic & Beauty Houses",
      subtitle: "Heavy glass bottles for facial oils, elixirs, and luxury serums requiring glass purity.",
      image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop",
      badge: "Multi-Product Form"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#241525] border-t border-[#C9A96E]/15 text-left">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#C9A96E]/15 pb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B88C91] block mb-2 font-mono">
              TARGETED B2B PACKAGING SOLUTIONS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F4EFE7]">
              Built for <span className="italic gold-gradient-text">Brands</span>
            </h2>
          </div>
          <p className="text-xs text-[#D1C7BA] max-w-md font-light mt-4 md:mt-0 leading-relaxed">
            Whether launching an indie perfume line or supplying international retail doors, our glass manufacturing infrastructure adapts to your scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((item, idx) => (
            <div 
              key={idx}
              className="group relative bg-[#1C0F1E] rounded-sm overflow-hidden border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F1E] via-transparent to-transparent opacity-80" />
                
                <span className="absolute top-3 left-3 glass-panel px-2.5 py-0.5 text-[9px] font-mono uppercase text-[#C9A96E]">
                  {item.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-2xl text-[#F4EFE7] group-hover:text-[#C9A96E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#D1C7BA] font-light mt-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C9A96E]/10 flex items-center justify-between">
                  <button 
                    onClick={() => setActiveView('catalog')}
                    className="text-[10px] font-mono uppercase text-[#C9A96E] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Compatible Molds</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
