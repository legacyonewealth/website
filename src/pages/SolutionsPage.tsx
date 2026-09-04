import React, { useState } from 'react';
import { PageId } from '../types';
import { SOLUTION_CATEGORIES, BRAND_INFO } from '../data/content';
import { 
  TrendingUp, 
  Shield, 
  PieChart, 
  Compass, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  Info,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedProduct, setExpandedProduct] = useState<string | null>('mutual-funds');

  const filteredCategories = activeCategory === 'all'
    ? SOLUTION_CATEGORIES
    : SOLUTION_CATEGORIES.filter(c => c.id === activeCategory);

  const toggleExpand = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <div id="solutions-page" className="min-h-screen pt-28 pb-20 bg-[#F5F2ED]">
      
      {/* Page Hero */}
      <section className="bg-[#EFECE6] py-16 sm:py-20 border-b border-[#0F2D2E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Our Solutions Ecosystem
            </span>
            <h1 className="serif-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#0F2D2E] leading-tight">
              One Relationship. <br />
              <span className="italic text-[#A68B5B]">A Comprehensive Universe.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              Financial needs rarely fit neatly into a single silo. We facilitate access to an expansive architecture of wealth creation, protection, and optimisation instruments tailored to your family's specific risk profile and life horizon.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation Pills */}
      <section className="py-6 bg-[#F5F2ED]/95 border-b border-[#0F2D2E]/10 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider sans-ui whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#0F2D2E] text-white shadow-sm'
                  : 'bg-white text-[#555555] hover:bg-[#EFECE6] border border-[#0F2D2E]/10'
              }`}
            >
              All Categories ({SOLUTION_CATEGORIES.reduce((acc, c) => acc + c.products.length, 0)})
            </button>
            {SOLUTION_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider sans-ui whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0F2D2E] text-white shadow-sm'
                    : 'bg-white text-[#555555] hover:bg-[#EFECE6] border border-[#0F2D2E]/10'
                }`}
              >
                {cat.title} ({cat.products.length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Solutions List */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {filteredCategories.map((category) => (
            <div key={category.id} id={category.id} className="space-y-6 scroll-mt-48">
              
              {/* Category Header */}
              <div className="border-b border-[#0F2D2E]/15 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
                  <span>Category Pillar</span>
                </div>
                <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-normal text-[#0F2D2E] mt-1">
                  {category.title}
                </h2>
                <p className="text-sm sm:text-base text-[#555555] font-light mt-1 max-w-3xl">
                  {category.description}
                </p>
              </div>

              {/* Products in this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.products.map((product) => {
                  const isExpanded = expandedProduct === product.id;
                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl border border-[#0F2D2E]/15 hover:border-[#A68B5B] shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
                    >
                      <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="inline-block px-2.5 py-1 rounded bg-[#EFECE6] border border-[#0F2D2E]/10 text-[10px] font-bold uppercase tracking-wider text-[#A68B5B] sans-ui mb-2">
                              {product.category}
                            </span>
                            <h3 className="serif-display text-xl sm:text-2xl font-bold text-[#0F2D2E]">
                              {product.name}
                            </h3>
                          </div>
                          <button
                            onClick={() => toggleExpand(product.id)}
                            className="p-1.5 rounded-lg bg-[#F5F2ED] hover:bg-[#EFECE6] text-[#0F2D2E] transition-colors cursor-pointer"
                            aria-label="Toggle details"
                          >
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                        </div>

                        <p className="text-xs sm:text-sm font-semibold text-[#A68B5B] sans-ui">
                          {product.tagline}
                        </p>

                        <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                          {product.description}
                        </p>

                        {/* Suitability & Key Aspects */}
                        {isExpanded && (
                          <div className="pt-4 border-t border-[#0F2D2E]/10 space-y-4 animate-in fade-in duration-200">
                            <div className="p-4 rounded-lg bg-[#F5F2ED] border border-[#0F2D2E]/10 text-xs">
                              <span className="font-bold text-[#0F2D2E] block mb-1 sans-ui uppercase tracking-wider text-[11px]">
                                Client Suitability & Profile:
                              </span>
                              <span className="text-[#555555] font-light leading-relaxed">
                                {product.suitability}
                              </span>
                            </div>

                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-[#555555] sans-ui block mb-2">
                                Key Distribution Features
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1A1A1A]">
                                {product.keyAspects.map((aspect, idx) => (
                                  <div key={idx} className="flex items-start gap-1.5 font-light">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B5B] shrink-0 mt-0.5" />
                                    <span>{aspect}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Card Action */}
                      <div className="p-4 bg-[#F5F2ED] border-t border-[#0F2D2E]/10 flex items-center justify-between">
                        <button
                          onClick={() => toggleExpand(product.id)}
                          className="text-xs font-bold text-[#0F2D2E] hover:text-[#A68B5B] transition-colors cursor-pointer sans-ui"
                        >
                          {isExpanded ? 'Show Less' : 'Explore Suitability & Details'}
                        </button>
                        
                        <button
                          onClick={() => onNavigate('contact')}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F2D2E] hover:bg-[#1A4748] text-white text-xs font-bold uppercase tracking-wider sans-ui transition-colors cursor-pointer"
                        >
                          <span>Enquire</span>
                          <ArrowRight className="w-3 h-3 text-[#A68B5B]" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Prominent Mandatory Compliance Disclaimer */}
      <section className="py-12 bg-[#EFECE6] border-t border-[#0F2D2E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#0F2D2E]/15 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-[#0F2D2E] serif-display font-medium text-lg">
              <ShieldAlert className="w-5 h-5 text-[#A68B5B]" />
              <span>Regulatory & Risk Disclosures</span>
            </div>
            <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
              Product availability, eligibility criteria, risk parameters, and statutory suitability vary based on individual circumstances and product-specific terms. <strong>Investments are subject to market risks.</strong> Please carefully review all relevant product information documents, Key Information Memorandums (KIM), and Scheme Information Documents (SID) before investing.
            </p>
            <p className="text-xs text-[#6A6864] font-light">
              LegacyOne Wealth Financial Services LLP acts solely as an authorized distributor and intermediary. We do not provide fee-based independent investment advice or guarantee any capital returns or yields.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-[#0F2D2E] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="serif-display text-2xl sm:text-3xl font-normal">
            Looking for a Portfolio Review or Multi-Asset Discussion?
          </h3>
          <p className="text-sm text-[#B3C4BF] font-light max-w-xl mx-auto">
            Our team will map your existing holdings and evaluate suitable options across the financial universe.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#A68B5B] hover:bg-[#B89D6D] text-[#0F2D2E] text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md"
            >
              <span>Request a Portfolio Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
