import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const BulkQuoteModal = () => {
  const { isQuoteModalOpen, setIsQuoteModalOpen, submitQuoteRequest } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productName: PRODUCTS[0].name,
    quantity: 100,
    capacity: '50ml',
    customization: 'Logo Foil Stamping + Custom Coating',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    submitQuoteRequest(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160B17]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl glass-panel-gold rounded-sm p-6 sm:p-10 my-8 text-left border border-[#C9A96E]/30 animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={() => setIsQuoteModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-[#D1C7BA] hover:text-[#C9A96E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8 border-b border-[#C9A96E]/15 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B88C91] block">
                B2B OFFICIAL QUOTATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F4EFE7]">
                Request a <span className="italic gold-gradient-text">Bulk Quote</span>
              </h2>
              <p className="text-xs text-[#D1C7BA] font-light mt-1">
                Receive customized tiered pricing, physical sample options, and freight estimate within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase text-[#D1C7BA] block mb-1 font-mono">Your Full Name *</label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-[#160B17] border border-[#C9A96E]/20 rounded p-3 text-[#F4EFE7] focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase text-[#D1C7BA] block mb-1 font-mono">Company / Fragrance Brand *</label>
                  <input 
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="e.g. Maison de L'Aura"
                    className="w-full bg-[#160B17] border border-[#C9A96E]/20 rounded p-3 text-[#F4EFE7] focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase text-[#D1C7BA] block mb-1 font-mono">Work Email *</label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="elena@brand.com"
                    className="w-full bg-[#160B17] border border-[#C9A96E]/20 rounded p-3 text-[#F4EFE7] focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase text-[#D1C7BA] block mb-1 font-mono">Phone / WhatsApp</label>
                  <input 
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+33 6 12 34 56 78"
                    className="w-full bg-[#160B17] border border-[#C9A96E]/20 rounded p-3 text-[#F4EFE7] focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[10px] uppercase text-[#D1C7BA] block mb-1 font-mono">Bottle Model</label>
                  <select 
                    value={formData.productName}
                    onChange={(e) => setFormData({...formData, productName: e.target.value})}
                    className="w-full bg-[#160B17] border border-[#C9A96E]/20 rounded p-3 text-[#F4EFE7] focus:outline-none focus:border-[#C9A96E]"
                  >
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={`${p.name} ${p.modelCode}`}>
                        {p.name} ({p.modelCode})
                      </option>
                    ))}
                    <option value="Bespoke Custom Mold">Bespoke Custom Mold Creation</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase text-[#D1C7BA] block mb-1 font-mono">Batch Quantity (MOQ 50)</label>
                  <input 
                    type="number"
                    min={50}
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value) || 50})}
                    className="w-full bg-[#160B17] border border-[#C9A96E]/20 rounded p-3 text-[#F4EFE7] font-bold text-center focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase text-[#D1C7BA] block mb-1 font-mono">Target Capacity</label>
                  <select 
                    value={formData.capacity}
                    onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                    className="w-full bg-[#160B17] border border-[#C9A96E]/20 rounded p-3 text-[#F4EFE7] focus:outline-none focus:border-[#C9A96E]"
                  >
                    <option value="30ml">30 ml</option>
                    <option value="50ml">50 ml</option>
                    <option value="75ml">75 ml</option>
                    <option value="100ml">100 ml</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase text-[#D1C7BA] block mb-1 font-mono">Delivery Location (Country / City)</label>
                <input 
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Paris, France / New York, USA"
                  className="w-full bg-[#160B17] border border-[#C9A96E]/20 rounded p-3 text-[#F4EFE7] focus:outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-[#D1C7BA] block mb-1 font-mono">Customization Requirements & Notes</label>
                <textarea 
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Mention desired glass colors, logo foil stamping, magnetic caps, or target delivery timeframe..."
                  className="w-full bg-[#160B17] border border-[#C9A96E]/20 rounded p-3 text-[#F4EFE7] focus:outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full btn-gold-luxury py-4 text-xs rounded-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Official Quote Request</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#C9A96E] mx-auto animate-bounce" />
            <h3 className="font-serif text-3xl text-[#F4EFE7]">Quotation Submitted</h3>
            <p className="text-xs text-[#D1C7BA] max-w-md mx-auto">
              Thank you, <span className="text-[#C9A96E] font-semibold">{formData.name}</span>. Your request for <span className="text-[#F4EFE7] font-semibold">{formData.quantity} units</span> of {formData.productName} has been logged and sent to our production desk.
            </p>
            <p className="text-[10px] text-[#B88C91] font-mono">
              Quote Ref: QT-2026-{Math.floor(1000 + Math.random() * 9000)} • Logged to B2B Admin Pipeline
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
