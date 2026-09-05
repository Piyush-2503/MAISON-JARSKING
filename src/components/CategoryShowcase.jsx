import React from 'react';
import { useCart } from '../context/CartContext';
import { ArrowRight } from 'lucide-react';

export const CategoryShowcase = () => {
  const { setActiveView } = useCart();

  const categoryCards = [
    {
      id: "Minimal",
      title: "MINIMAL",
      subtitle: "Clean silhouettes and understated architectural forms.",
      image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop",
      count: "3 Models"
    },
    {
      id: "Sculptural",
      title: "SCULPTURAL",
      subtitle: "Distinctive 3D glass silhouettes engineered for shelf dominance.",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
      count: "5 Models"
    },
    {
      id: "Classic",
      title: "CLASSIC",
      subtitle: "Timeless perfume bottle forms inspired by haute perfumery.",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
      count: "2 Models"
    },
    {
      id: "Luxe",
      title: "LUXE & STATEMENT",
      subtitle: "Jewelry-grade heavy glass, leather wraps & filigree crowns.",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
      count: "4 Models"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#1C0F1E] border-t border-[#C9A96E]/15">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B88C91] block mb-2 font-mono">
            ARCHITECTURAL FAMILIES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F4EFE7]">
            Shop by <span className="italic gold-gradient-text">Form</span>
          </h2>
          <p className="text-xs text-[#D1C7BA] font-light mt-3 leading-relaxed">
            Categorized by visual language, shoulder silhouette, and weight distribution. Select an aesthetic family to explore available molds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryCards.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => setActiveView('catalog')}
              className="group relative aspect-[3/4] rounded-sm overflow-hidden border border-[#C9A96E]/20 hover:border-[#C9A96E]/60 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={cat.image} 
                alt={cat.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160B17] via-[#160B17]/40 to-transparent group-hover:via-[#160B17]/20 transition-all" />

              <div className="absolute top-4 left-4 z-10">
                <span className="glass-panel px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-[#C9A96E]">
                  {cat.count}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
                <h3 className="font-serif text-2xl text-[#F4EFE7] group-hover:text-[#C9A96E] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-[#D1C7BA] font-light mt-1 line-clamp-2">
                  {cat.subtitle}
                </p>

                <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C9A96E] font-medium group-hover:translate-x-1 transition-transform">
                  <span>Explore Molds</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
