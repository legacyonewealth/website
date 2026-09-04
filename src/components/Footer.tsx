import React from 'react';
import { PageId } from '../types';
import { Logo, BrandCrest } from './Logo';
import { BRAND_INFO } from '../data/content';
import { MapPin, Mail, Clock, ArrowUpRight, ShieldAlert, FileText, Lock, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenComplianceModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenComplianceModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0F2D2E] text-[#D1DDD9] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center">
              <Logo variant="dark" size="lg" />
            </div>
            
            <p className="text-sm text-[#B3C4BF] max-w-md leading-relaxed font-light">
              <strong>{BRAND_INFO.legalEntity}</strong> is a dedicated wealth solutions and financial products distribution firm. We assist families and emerging leaders to create, grow, protect, and transfer generational wealth.
            </p>

            <div className="pt-2 text-xs text-[#A68B5B] serif-display italic tracking-wide">
              "Every family has a family doctor. We endeavor to be your family's trusted wealth partner."
            </div>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-[#A68B5B]/30 text-xs text-[#A68B5B] sans-ui uppercase tracking-wider text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A68B5B]" />
                Gurgaon Corporate Office
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#B3C4BF] sans-ui uppercase tracking-wider text-[10px]">
                Pan-India Client Reach
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="text-[#B9CCC6] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="text-[#B9CCC6] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('solutions')} 
                  className="text-[#B9CCC6] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Our Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('approach')} 
                  className="text-[#B9CCC6] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('team')} 
                  className="text-[#B9CCC6] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="text-[#B9CCC6] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Solution Universe */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Solutions Universe
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A8BBB5]">
              <li>Mutual Funds (MFs)</li>
              <li>Portfolio Management (PMS)</li>
              <li>Alternative Investments (AIFs)</li>
              <li>REITs & Fixed Income / Bonds</li>
              <li>Life & Health Wealth Protection</li>
              <li>Tax-Efficiency Assistance</li>
              <li>Legacy & Succession Facilitation</li>
            </ul>
          </div>

          {/* Office & Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs text-[#A8BBB5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A68B5B] shrink-0" />
                <span>{BRAND_INFO.location.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#A68B5B] shrink-0" />
                <span>{BRAND_INFO.location.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-[#A68B5B] hover:bg-[#B89D6D] text-[#0F2D2E] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Request a Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Risk Warning */}
        <div className="py-8 border-b border-white/10 text-xs text-[#8FA59F] leading-relaxed space-y-3">
          <div className="flex items-center gap-2 text-[#A68B5B] font-semibold uppercase tracking-wider text-[11px] sans-ui">
            <ShieldAlert className="w-4 h-4" />
            <span>Important Regulatory Disclosures & Compliance Statement</span>
          </div>
          <p>
            <strong>{BRAND_INFO.legalEntity}</strong> (Brand Name: <strong>LegacyOne Wealth</strong>) is a financial products distributor and intermediary. 
            LegacyOne Wealth is <strong>not</strong> a SEBI-registered Investment Adviser (RIA) and does not charge fee-based independent investment advisory fees. We facilitate client access to suitable financial products (Mutual Funds, PMS, AIFs, Bonds, Insurance, etc.) based on understanding client profile, liquidity needs, and risk capacity.
          </p>
          <p>
            <strong>Market Risk Disclaimers:</strong> Investments in financial products and securities markets are subject to market risks. Read all related scheme and offer documents carefully before investing. Past performance is not indicative of future results. No statement on this website should be construed as a promise or guarantee of profits, assured returns, or risk-free appreciation. Product availability, eligibility, and tax treatment vary according to statutory regulations.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7B918B] gap-4">
          <div>
            © {currentYear} {BRAND_INFO.legalEntity}. All rights reserved.
          </div>
          
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <button 
              onClick={onOpenComplianceModal}
              className="hover:text-[#FFFFFF] underline underline-offset-2 transition-colors cursor-pointer"
            >
              Full Regulatory Disclosure
            </button>
            <button 
              onClick={onOpenComplianceModal}
              className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={onOpenComplianceModal}
              className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <button 
              onClick={onOpenComplianceModal}
              className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              Grievance Redressal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
