import React from 'react';
import { PageId } from '../types';
import { VALUES_ITEMS, BRAND_INFO } from '../data/content';
import { 
  Award, 
  Eye, 
  HeartHandshake, 
  GraduationCap, 
  Shield, 
  TrendingUp, 
  Lock, 
  Sparkles, 
  Building2, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const valueIcons: Record<string, React.ReactNode> = {
    Award: <Award className="w-5 h-5 text-[#A68B5B]" />,
    Eye: <Eye className="w-5 h-5 text-[#A68B5B]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#A68B5B]" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-[#A68B5B]" />,
    Shield: <Shield className="w-5 h-5 text-[#A68B5B]" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-[#A68B5B]" />,
    Lock: <Lock className="w-5 h-5 text-[#A68B5B]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#A68B5B]" />
  };

  return (
    <div id="about-page" className="min-h-screen pt-28 pb-20 bg-[#F5F2ED]">
      
      {/* Page Header */}
      <section className="bg-[#EFECE6] py-16 sm:py-20 border-b border-[#0F2D2E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              About LegacyOne Wealth
            </span>
            <h1 className="serif-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#0F2D2E] leading-tight">
              A Relationship Beyond Numbers. <br />
              <span className="italic text-[#A68B5B]">Stewardship Across Generations.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              At <strong>LegacyOne Wealth Financial Services LLP</strong>, we are committed to building long-term wealth relationships anchored in client-first ethics, technical rigor, and a holistic financial universe.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE & WHY WE EXIST */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Who We Are (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
                Who We Are
              </span>
              <h2 className="serif-display text-3xl sm:text-4xl font-normal text-[#0F2D2E]">
                A Modern Wealth Solutions & Financial Products Distribution Firm
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed font-light">
                <p>
                  LegacyOne Wealth is a specialized financial products distribution and wealth solutions firm established to serve discerning individuals, business families, and emerging professionals across India.
                </p>
                <p>
                  We believe every family deserves an objective, trusted guide who understands their complete financial architecture—from systematic equity accumulation and high-yield fixed income to insurance safeguards and frictionless legacy succession.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#0F2D2E]/15 space-y-2">
                <div className="serif-display text-lg text-[#0F2D2E] font-bold italic">
                  "Every family has a family doctor. We endeavor to be your family's trusted wealth partner."
                </div>
                <p className="text-[13.5px] text-[#6A6864] font-light">
                  Just as a trusted physician diagnoses before prescribing, we evaluate your financial health and risk capacity before facilitating access to any financial instrument.
                </p>
              </div>
            </div>

            {/* Why We Exist (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
                Why We Exist
              </span>
              <h2 className="serif-display text-3xl sm:text-4xl font-normal text-[#0F2D2E]">
                The Pillars of True Legacy
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white border border-[#0F2D2E]/15 shadow-sm">
                  <div className="serif-display font-bold text-lg text-[#0F2D2E] mb-1">Creating Wealth</div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">Helping clients build substantial capital through disciplined asset allocation.</p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-[#0F2D2E]/15 shadow-sm">
                  <div className="serif-display font-bold text-lg text-[#0F2D2E] mb-1">Growing Wealth</div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">Facilitating access to diversified portfolios designed to navigate market cycles.</p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-[#0F2D2E]/15 shadow-sm">
                  <div className="serif-display font-bold text-lg text-[#0F2D2E] mb-1">Protecting Wealth</div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">Shielding family health, assets, and enterprise value against catastrophic risks.</p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-[#0F2D2E]/15 shadow-sm">
                  <div className="serif-display font-bold text-lg text-[#0F2D2E] mb-1">Optimising Wealth</div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">Addressing tax efficiency, liquidity horizons, and portfolio fee hygiene.</p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-[#0F2D2E]/15 shadow-sm">
                  <div className="serif-display font-bold text-lg text-[#0F2D2E] mb-1">Intergenerational Continuity</div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">Structuring frictionless wealth transmission and title hygiene for heirs.</p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-[#0F2D2E]/15 shadow-sm">
                  <div className="serif-display font-bold text-lg text-[#0F2D2E] mb-1">Lifelong Relationships</div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">Providing consistent guidance through life milestones and market turbulence.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY: CLIENT FIRST. ALWAYS. */}
      <section className="py-20 bg-[#0F2D2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Core Philosophy
            </span>
            <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Client First. Always.
            </h2>
            <p className="text-base sm:text-lg text-[#B3C4BF] font-light leading-relaxed">
              We reject the conventional product-push model where distributors lead with sales targets. At LegacyOne Wealth, every conversation starts with understanding your family context, income profile, risk capacity, and future commitments. Products are simply tools chosen to serve your life goals.
            </p>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="serif-display text-lg text-white mb-1">Unbiased Breadth</h4>
                <p className="text-xs text-[#B3C4BF] font-light leading-relaxed">
                  Evaluating options across Mutual Funds, PMS, AIFs, Bonds, and Insurance objectively.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="serif-display text-lg text-white mb-1">Technical Due Diligence</h4>
                <p className="text-xs text-[#B3C4BF] font-light leading-relaxed">
                  Rigorous scrutiny of fund managers, credit quality, risk parameters, and track records.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="serif-display text-lg text-white mb-1">Transparent Guidance</h4>
                <p className="text-xs text-[#B3C4BF] font-light leading-relaxed">
                  Clear disclosure of product characteristics, liquidity constraints, and risk factors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES (8 CARDS) */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Guiding Principles
            </span>
            <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F2D2E]">
              Our Enduring Values
            </h2>
            <p className="text-base text-[#555555] font-light">
              The bedrock standards that govern our conduct, partner relationships, and client stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#0F2D2E]/15 hover:border-[#A68B5B] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0F2D2E]/5 border border-[#0F2D2E]/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {valueIcons[item.icon] || <Sparkles className="w-5 h-5 text-[#A68B5B]" />}
                  </div>
                  <h3 className="serif-display text-lg font-bold text-[#0F2D2E] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR ORIGINS & ETHOS */}
      <section className="py-20 bg-[#EFECE6] border-t border-[#0F2D2E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
                Origins & Ethos
              </span>
              <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F2D2E]">
                Our Financial Market Heritage
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed font-light">
                <p>
                  The two founding partners of LegacyOne Wealth were born and brought up in Mumbai, India's financial capital. Growing up in the heartbeat of the nation's commercial and capital markets ecosystem instilled an indelible respect for market cycles, liquidity realities, risk management, and the sanctity of personal relationships.
                </p>
                <p>
                  In Mumbai's financial community, credibility is earned through years of disciplined execution and ethical consistency. We bring that exact ethos to every client relationship—combining deep on-ground market understanding with a contemporary, Pan-India client-servicing platform.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('team')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0F2D2E] hover:text-[#A68B5B] transition-colors cursor-pointer group sans-ui"
                >
                  <span>Meet the Founding Partners</span>
                  <ArrowRight className="w-4 h-4 text-[#A68B5B] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#0F2D2E]/15 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0F2D2E] flex items-center justify-center text-[#A68B5B]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="serif-display text-2xl font-normal text-[#0F2D2E]">
                Shaped by India's Financial Capital
              </h3>
              <ul className="space-y-3 text-xs text-[#555555] font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                  <span>Deep familiarity with leading asset managers, custodians, and institutional houses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                  <span>Grounded in rigorous product evaluation rather than speculative market hype.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                  <span>Long-term, multi-generational perspective on family capital preservation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0F2D2E] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="serif-display text-2xl sm:text-3xl font-normal">
            Explore How We Can Serve Your Family
          </h3>
          <p className="text-sm text-[#B3C4BF] font-light max-w-xl mx-auto">
            Schedule an introductory discussion to review your wealth objectives and explore suitable solutions.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#A68B5B] hover:bg-[#B89D6D] text-[#0F2D2E] text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
