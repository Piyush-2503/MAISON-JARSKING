import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { LayoutDashboard, Package, FileText, DollarSign, CheckCircle2, Clock, AlertTriangle, Eye, Edit3, Trash2 } from 'lucide-react';

export const AdminDashboard = () => {
  const { quotesList, setQuotesList, navigateToProduct } = useCart();
  
  const [activeTab, setActiveTab] = useState('quotes'); // 'quotes' | 'products' | 'pricing'
  const [statusFilter, setStatusFilter] = useState('all');

  const updateQuoteStatus = (quoteId, newStatus) => {
    setQuotesList(prev => prev.map(q => q.id === quoteId ? { ...q, status: newStatus } : q));
  };

  const filteredQuotes = statusFilter === 'all' 
    ? quotesList 
    : quotesList.filter(q => q.status === statusFilter);

  return (
    <section className="pt-28 pb-24 px-6 md:px-12 bg-[#160B17] min-h-screen text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* DASHBOARD HEADER */}
        <div className="mb-8 border-b border-[#C9A96E]/20 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#C9A96E] uppercase tracking-widest">
              <LayoutDashboard className="w-4 h-4" />
              <span>B2B Operations Portal</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#F4EFE7] mt-1">
              Admin & <span className="italic gold-gradient-text">Quote Pipeline</span>
            </h1>
          </div>

          {/* ADMIN TABS */}
          <div className="flex items-center gap-2 glass-panel p-1 rounded">
            <button 
              onClick={() => setActiveTab('quotes')}
              className={`px-4 py-2 rounded text-xs font-medium uppercase tracking-wider transition-all ${
                activeTab === 'quotes' ? 'bg-[#C9A96E] text-[#160B17]' : 'text-[#D1C7BA] hover:text-[#F4EFE7]'
              }`}
            >
              Quote Requests ({quotesList.length})
            </button>
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-4 py-2 rounded text-xs font-medium uppercase tracking-wider transition-all ${
                activeTab === 'products' ? 'bg-[#C9A96E] text-[#160B17]' : 'text-[#D1C7BA] hover:text-[#F4EFE7]'
              }`}
            >
              Product Inventory
            </button>
            <button 
              onClick={() => setActiveTab('pricing')}
              className={`px-4 py-2 rounded text-xs font-medium uppercase tracking-wider transition-all ${
                activeTab === 'pricing' ? 'bg-[#C9A96E] text-[#160B17]' : 'text-[#D1C7BA] hover:text-[#F4EFE7]'
              }`}
            >
              Bulk Price Matrix
            </button>
          </div>
        </div>

        {/* METRICS OVERVIEW CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-xs">
          <div className="glass-panel p-5 rounded border border-[#C9A96E]/20">
            <span className="text-[10px] uppercase font-mono text-[#B88C91] block">Total Incoming Quotes</span>
            <span className="font-serif text-3xl text-[#C9A96E] font-bold block mt-1">{quotesList.length}</span>
            <span className="text-[10px] text-[#D1C7BA]">Synced from storefront</span>
          </div>
          <div className="glass-panel p-5 rounded border border-[#C9A96E]/20">
            <span className="text-[10px] uppercase font-mono text-[#B88C91] block">Pending Review</span>
            <span className="font-serif text-3xl text-[#F4EFE7] font-bold block mt-1">
              {quotesList.filter(q => q.status === 'New' || q.status === 'Reviewing').length}
            </span>
            <span className="text-[10px] text-[#C9A96E]">Requires sales action</span>
          </div>
          <div className="glass-panel p-5 rounded border border-[#C9A96E]/20">
            <span className="text-[10px] uppercase font-mono text-[#B88C91] block">Active Catalog Molds</span>
            <span className="font-serif text-3xl text-[#F4EFE7] font-bold block mt-1">{PRODUCTS.length}</span>
            <span className="text-[10px] text-[#D1C7BA]">Extra Flint Glass</span>
          </div>
          <div className="glass-panel p-5 rounded border border-[#C9A96E]/20">
            <span className="text-[10px] uppercase font-mono text-[#B88C91] block">Global Minimum Order</span>
            <span className="font-serif text-3xl text-[#C9A96E] font-bold block mt-1">50 Units</span>
            <span className="text-[10px] text-[#D1C7BA]">Strict B2B Rule</span>
          </div>
        </div>

        {/* TAB 1: QUOTE PIPELINE BOARD */}
        {activeTab === 'quotes' && (
          <div className="glass-panel p-6 rounded-sm border border-[#C9A96E]/20 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#C9A96E]/15 text-xs">
              <h3 className="font-serif text-2xl text-[#F4EFE7]">Bulk Quote Inquiries Pipeline</h3>
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase text-[#B88C91] font-mono">Status Filter:</span>
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-[#241525] border border-[#C9A96E]/30 text-[#F4EFE7] rounded px-3 py-1.5 focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Reviewing">Reviewing</option>
                  <option value="Quoted">Quoted</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#241525] text-[#C9A96E] uppercase font-mono text-[10px] tracking-wider border-b border-[#C9A96E]/20">
                  <tr>
                    <th className="p-3">Ref ID</th>
                    <th className="p-3">Client & Company</th>
                    <th className="p-3">Product Requested</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Est. Value</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Update Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C9A96E]/10">
                  {filteredQuotes.map(q => (
                    <tr key={q.id} className="hover:bg-[#241525]/50 transition-colors">
                      <td className="p-3 font-mono text-[#C9A96E] font-bold">{q.id}</td>
                      <td className="p-3">
                        <div className="font-medium text-[#F4EFE7]">{q.clientName}</div>
                        <div className="text-[10px] text-[#D1C7BA]">{q.company} • {q.email}</div>
                      </td>
                      <td className="p-3">
                        <div className="text-[#F4EFE7]">{q.productName} ({q.capacity})</div>
                        <div className="text-[10px] text-[#B88C91]">{q.customization}</div>
                      </td>
                      <td className="p-3 font-mono font-bold text-[#F4EFE7]">{q.quantity} units</td>
                      <td className="p-3 font-serif text-sm font-semibold text-[#C9A96E]">{q.estimatedValue}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono ${
                          q.status === 'New' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                          q.status === 'Reviewing' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' :
                          q.status === 'Quoted' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
                          q.status === 'Accepted' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {q.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <select 
                          value={q.status}
                          onChange={(e) => updateQuoteStatus(q.id, e.target.value)}
                          className="bg-[#241525] border border-[#C9A96E]/30 text-[#F4EFE7] text-[10px] rounded px-2 py-1 focus:outline-none"
                        >
                          <option value="New">Mark New</option>
                          <option value="Reviewing">Mark Reviewing</option>
                          <option value="Quoted">Mark Quoted</option>
                          <option value="Accepted">Mark Accepted</option>
                          <option value="Rejected">Mark Rejected</option>
                          <option value="Completed">Mark Completed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* TAB 2: PRODUCT INVENTORY MANAGER */}
        {activeTab === 'products' && (
          <div className="glass-panel p-6 rounded-sm border border-[#C9A96E]/20 space-y-6">
            <h3 className="font-serif text-2xl text-[#F4EFE7] pb-4 border-b border-[#C9A96E]/15">
              Active Catalog Mold Inventory
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map(p => (
                <div key={p.id} className="bg-[#241525] p-4 rounded border border-[#C9A96E]/20 flex gap-4 text-xs">
                  <img src={p.images[0]} alt={p.name} className="w-16 h-20 object-cover rounded" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-[#C9A96E]">{p.modelCode}</span>
                      <h4 className="font-serif text-lg text-[#F4EFE7]">{p.name}</h4>
                      <p className="text-[10px] text-[#D1C7BA]">{p.capacities.join(', ')} • Base: ₹{p.basePrice}/unit</p>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#C9A96E]/10">
                      <span className="text-[10px] text-[#C9A96E] font-mono">MOQ: {p.moq}</span>
                      <button 
                        onClick={() => navigateToProduct(p.id)}
                        className="text-[10px] text-[#C9A96E] hover:underline"
                      >
                        Edit Product Specs →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BULK PRICING MATRIX */}
        {activeTab === 'pricing' && (
          <div className="glass-panel p-6 rounded-sm border border-[#C9A96E]/20 space-y-6">
            <h3 className="font-serif text-2xl text-[#F4EFE7] pb-4 border-b border-[#C9A96E]/15">
              Global Volume Discount Structure
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
              <div className="bg-[#241525] p-5 rounded border border-[#C9A96E]/20">
                <span className="text-[10px] uppercase font-mono text-[#B88C91] block">Tier 1 (Entry)</span>
                <span className="font-serif text-xl font-semibold text-[#F4EFE7] block mt-1">50–99 Units</span>
                <span className="text-[10px] text-[#C9A96E]">Base Standard Rate</span>
              </div>
              <div className="bg-[#241525] p-5 rounded border border-[#C9A96E]/20">
                <span className="text-[10px] uppercase font-mono text-[#B88C91] block">Tier 2</span>
                <span className="font-serif text-xl font-semibold text-[#F4EFE7] block mt-1">100–249 Units</span>
                <span className="text-[10px] text-[#C9A96E]">~6% - 8% Unit Savings</span>
              </div>
              <div className="bg-[#241525] p-5 rounded border border-[#C9A96E]/20">
                <span className="text-[10px] uppercase font-mono text-[#B88C91] block">Tier 3</span>
                <span className="font-serif text-xl font-semibold text-[#F4EFE7] block mt-1">250–499 Units</span>
                <span className="text-[10px] text-[#C9A96E]">~12% - 15% Unit Savings</span>
              </div>
              <div className="bg-[#241525] p-5 rounded border border-[#C9A96E]/20">
                <span className="text-[10px] uppercase font-mono text-[#B88C91] block">Tier 4 (Wholesale)</span>
                <span className="font-serif text-xl font-semibold text-[#F4EFE7] block mt-1">500+ Units</span>
                <span className="text-[10px] text-[#C9A96E]">Up to 25% Unit Discount</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
