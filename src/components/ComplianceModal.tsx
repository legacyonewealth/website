import React, { useState } from 'react';
import { X, ShieldAlert, FileText, Lock, Building, CheckCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'disclosure' | 'privacy' | 'terms' | 'grievance';
}

export const ComplianceModal: React.FC<ComplianceModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'disclosure'
}) => {
  const [activeTab, setActiveTab] = useState<'disclosure' | 'privacy' | 'terms' | 'grievance'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="compliance-modal-container"
        className="bg-[#F5F2ED] w-full max-w-3xl max-h-[88vh] rounded-2xl shadow-2xl border border-[#0F2D2E]/20 flex flex-col overflow-hidden text-[#1A1A1A]"
      >
        {/* Header */}
        <div className="bg-[#0F2D2E] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[#A68B5B]" />
            <div>
              <h3 className="serif-display text-lg font-medium text-white">
                Legal & Regulatory Disclosures
              </h3>
              <p className="text-xs text-[#B3C4BF] font-light">
                {BRAND_INFO.legalEntity}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#0F2D2E]/10 bg-[#EFECE6] px-6 text-xs sm:text-sm overflow-x-auto">
          <button
            onClick={() => setActiveTab('disclosure')}
            className={`py-3 px-4 font-bold uppercase tracking-wider text-xs sans-ui border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'disclosure'
                ? 'border-[#0F2D2E] text-[#0F2D2E] bg-[#F5F2ED]'
                : 'border-transparent text-[#555555] hover:text-[#0F2D2E]'
            }`}
          >
            Regulatory Status & Risks
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-3 px-4 font-bold uppercase tracking-wider text-xs sans-ui border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-[#0F2D2E] text-[#0F2D2E] bg-[#F5F2ED]'
                : 'border-transparent text-[#555555] hover:text-[#0F2D2E]'
            }`}
          >
            Privacy & Confidentiality
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`py-3 px-4 font-bold uppercase tracking-wider text-xs sans-ui border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'terms'
                ? 'border-[#0F2D2E] text-[#0F2D2E] bg-[#F5F2ED]'
                : 'border-transparent text-[#555555] hover:text-[#0F2D2E]'
            }`}
          >
            Terms of Website Use
          </button>
          <button
            onClick={() => setActiveTab('grievance')}
            className={`py-3 px-4 font-bold uppercase tracking-wider text-xs sans-ui border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'grievance'
                ? 'border-[#0F2D2E] text-[#0F2D2E] bg-[#F5F2ED]'
                : 'border-transparent text-[#555555] hover:text-[#0F2D2E]'
            }`}
          >
            Grievance Redressal
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#555555] font-light leading-relaxed">
          {activeTab === 'disclosure' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#0F2D2E]/10 space-y-2">
                <h4 className="serif-display font-medium text-[#0F2D2E] text-base">
                  1. Distributor / Intermediary Status
                </h4>
                <p className="text-xs sm:text-sm text-[#555555]">
                  <strong className="text-[#1A1A1A]">LegacyOne Wealth Financial Services LLP</strong> (Brand Name: <strong className="text-[#1A1A1A]">LegacyOne Wealth</strong>) is engaged solely in the distribution, intermediation, and facilitation of financial products and services under applicable statutory laws and self-regulatory guidelines.
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#0F2D2E]">
                  • LegacyOne Wealth is <strong>NOT</strong> a SEBI-registered Investment Adviser (RIA).<br />
                  • We do <strong>NOT</strong> provide independent fee-based investment advisory services.<br />
                  • We do <strong>NOT</strong> charge clients advisory fees for investment advice.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="serif-display font-medium text-[#0F2D2E] text-base">
                  2. Market Risks & No Return Guarantees
                </h4>
                <p className="text-xs sm:text-sm">
                  Mutual funds, Portfolio Management Services (PMS), Alternative Investment Funds (AIFs), REITs, Bonds, Non-Convertible Debentures (NCDs), and other capital market instruments are subject to market risks, credit risks, liquidity risks, and macroeconomic volatility.
                </p>
                <p className="text-xs sm:text-sm">
                  <strong className="text-[#1A1A1A]">Past performance is never an indicator or guarantee of future returns.</strong> LegacyOne Wealth makes no representation, assurance, or warranty regarding positive returns, minimum yields, or capital preservation on market-linked instruments.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="serif-display font-medium text-[#0F2D2E] text-base">
                  3. Product Eligibility & Documentation
                </h4>
                <p className="text-xs sm:text-sm">
                  Product availability, investor eligibility thresholds (e.g., minimum ticket size for PMS and AIFs as mandated by SEBI), and taxation implications vary. Clients must review Scheme Information Documents (SID), Key Information Memorandums (KIM), Private Placement Memorandums (PPM), and policy wordings before transacting.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h4 className="serif-display font-medium text-[#0F2D2E] text-base">
                Client Privacy & Confidentiality Commitment
              </h4>
              <p>
                At LegacyOne Wealth, we maintain strict standards of confidentiality. Any financial, personal, or contact information shared through discovery sessions, meetings, or contact forms is protected with enterprise security practices.
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <p>• <strong className="text-[#1A1A1A]">Zero Third-Party Data Selling:</strong> We never sell, rent, or trade your personal data with unsolicited marketing agencies.</p>
                <p>• <strong className="text-[#1A1A1A]">Regulatory Sharing:</strong> Data is shared only with registered product asset management companies (AMCs), registrars (CAMS/KFintech), insurers, or statutory authorities where required to execute client-directed transactions.</p>
                <p>• <strong className="text-[#1A1A1A]">Communication Control:</strong> You may request cessation of outreach communication at any time by emailing us.</p>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h4 className="serif-display font-medium text-[#0F2D2E] text-base">
                Terms of Website Use
              </h4>
              <p className="text-xs sm:text-sm">
                The content on this website is for general informational awareness only and does not constitute an offer, solicitation, or recommendation to buy or sell any specific securities, units, or insurance policies.
              </p>
              <p className="text-xs sm:text-sm">
                All brand marks, logos, editorial copy, and website layouts are proprietary to LegacyOne Wealth Financial Services LLP. Unauthorized reproduction, modification, or automated scraping is prohibited.
              </p>
            </div>
          )}

          {activeTab === 'grievance' && (
            <div className="space-y-4">
              <h4 className="serif-display font-medium text-[#0F2D2E] text-base">
                Client Support & Grievance Redressal
              </h4>
              <p className="text-xs sm:text-sm">
                We are committed to resolving any client concerns or servicing queries promptly and transparently.
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#0F2D2E]/10 space-y-2 text-xs sm:text-sm">
                <p><strong className="text-[#0F2D2E] uppercase tracking-wider text-[11px] sans-ui">Level 1 — Client Relationship Officer:</strong></p>
                <p>Email: <span className="text-[#0F2D2E] font-medium">{BRAND_INFO.location.supportEmail}</span></p>
                <p>Response Timeline: Within 24-48 business hours.</p>
                <hr className="my-2 border-[#0F2D2E]/10" />
                <p><strong className="text-[#0F2D2E] uppercase tracking-wider text-[11px] sans-ui">Level 2 — Principal Officer / Compliance:</strong></p>
                <p>Email: <span className="text-[#0F2D2E] font-medium">compliance@legacyonewealth.com</span></p>
                <p>Office: {BRAND_INFO.location.address}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#EFECE6] px-6 py-4 border-t border-[#0F2D2E]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0F2D2E] hover:bg-[#1A4748] text-white text-xs font-bold uppercase tracking-wider sans-ui rounded-full transition-colors cursor-pointer"
          >
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
};
