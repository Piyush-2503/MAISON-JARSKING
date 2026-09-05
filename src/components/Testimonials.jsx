import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const quotes = [
    {
      quote: "The Angel Wings JX-N005 bottle became the single strongest visual trademark of our niche fragrance launch in Paris. Their glass weight and custom gold foil stamping exceeded our expectations.",
      author: "Elena Rostova",
      title: "Founder & Creative Director",
      company: "Maison de L’Aura Perfumes"
    },
    {
      quote: "Finding high-end architectural glass packaging with an accessible MOQ of 50 was a complete game changer for our artisanal botanical perfume house. Their team executed our custom leather wraps flawlessly.",
      author: "Marcus Vance",
      title: "Head of Operations",
      company: "Vance & Co Botanicals"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#1C0F1E] border-t border-[#C9A96E]/15 text-left">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B88C91] block mb-2 font-mono">
            CLIENT VOICE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F4EFE7]">
            Trusted by <span className="italic gold-gradient-text">Creators</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((q, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-sm border border-[#C9A96E]/20 relative flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-[#C9A96E]/40 mb-4" />
                <p className="font-serif text-xl sm:text-2xl text-[#F4EFE7] italic leading-relaxed font-light">
                  "{q.quote}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#C9A96E]/15 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif text-lg text-[#C9A96E]">{q.author}</h4>
                  <span className="text-[#D1C7BA] font-light">{q.title} • {q.company}</span>
                </div>
                <span className="text-[10px] font-mono text-[#B88C91] uppercase">Verified B2B Client</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
