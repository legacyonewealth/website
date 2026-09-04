import React from 'react';
import { PageId } from '../types';
import { DIFFERENCE_ITEMS, APPROACH_STEPS, SOLUTION_CATEGORIES, BRAND_INFO, FOUNDERS } from '../data/content';
import { FounderAvatar } from '../components/FounderAvatar';
import { 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  BookOpen, 
  Building2, 
  Globe, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Shield, 
  PieChart, 
  Layers, 
  Award, 
  ChevronRight,
  HeartHandshake
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, target?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#A68B5B]" />,
    Compass: <Compass className="w-5 h-5 text-[#A68B5B]" />,
    BookOpen: <BookOpen className="w-5 h-5 text-[#A68B5B]" />,
    Building2: <Building2 className="w-5 h-5 text-[#A68B5B]" />,
    Globe: <Globe className="w-5 h-5 text-[#A68B5B]" />,
    Users: <Users className="w-5 h-5 text-[#A68B5B]" />
  };

  return (
    <div id="home-page" className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A]">
      
      {/* 1. HERO SECTION (Artistic Flair Split Editorial Layout) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F5F2ED] border-b border-[#0F2D2E]/15">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Grand Headline & Story */}
            <div className="lg:col-span-7 relative flex">
              
              <div className="space-y-6 max-w-2xl">
                {/* Pill Label */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 border border-[#0F2D2E]/15 text-[11px] font-bold sans-ui uppercase tracking-widest text-[#0F2D2E] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A68B5B]" />
                  <span>Wealth Solutions & Distribution</span>
                </div>

                {/* Main Headline */}
                <h1 className="serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-tight text-[#0F2D2E] leading-[1.08]">
                  Create Wealth. <br />
                  Protect What Matters. <br />
                  <span className="italic font-normal text-[#A68B5B]">Build a Legacy.</span>
                </h1>

                {/* Supporting Copy */}
                <p className="text-base text-[#555555] leading-relaxed font-light sm:hidden">
                  At <strong>LegacyOne Wealth</strong>, we bring together a broad spectrum of wealth creation, protection and investment solutions to help you build wealth today and an enduring legacy for tomorrow.
                </p>
                <p className="hidden text-lg text-[#555555] leading-relaxed font-light sm:block">
                  At <strong>LegacyOne Wealth</strong>, we look beyond products to understand the people, families and aspirations behind every financial decision. We bring together a broad spectrum of wealth creation, protection and investment solutions to help you build wealth today and an enduring legacy for tomorrow.
                </p>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                  <button
                    id="hero-primary-cta"
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#0F2D2E] hover:bg-opacity-90 rounded-full shadow hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <span>Talk To Us</span>
                    <ArrowRight className="w-4 h-4 text-[#A68B5B] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    id="hero-secondary-cta"
                    onClick={() => onNavigate('solutions')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#0F2D2E] bg-white hover:bg-[#EFECE6] rounded-full border border-[#0F2D2E]/20 transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <span>Explore Solutions</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Visual Showcase Card */}
            <div className="lg:col-span-5 relative lg:mt-[262px]">
              <div className="bg-[#0F2D2E] text-white px-5 pb-5 sm:px-6 sm:pb-6 rounded-2xl shadow-xl border border-[#0F2D2E] relative overflow-hidden">
                {/* Subtle Background Seal */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border border-white/5 pointer-events-none flex items-center justify-center">
                  <span className="serif-display text-8xl font-bold text-white/[0.03]">L1</span>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="serif-display text-2xl font-light leading-snug">
                    "Wealth is not just numbers on a statement. It is freedom, family security, and opportunities for generations."
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#A68B5B]" />
                      SEBI Distribution Framework
                    </span>
                    <button 
                      onClick={() => onNavigate('approach')}
                      className="text-[#A68B5B] hover:text-white transition-colors underline underline-offset-2 uppercase tracking-wider text-xs font-extrabold"
                    >
                      Our Framework →
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 1 — OUR PHILOSOPHY */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F2D2E] rounded-2xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-xl border border-[#0F2D2E]">
            
            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
                <span>Our Philosophy</span>
              </div>
              
              <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight">
                More Than Wealth. <br />
                <span className="italic text-[#A68B5B]">A True Legacy.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#C2CDC8] leading-relaxed font-light">
                Wealth is not just about numbers on a statement. It is about freedom, security, opportunities for the next generation and the ability to protect what you have built. Our approach is designed around creating, growing and protecting wealth with a long-term perspective.
              </p>

              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 text-sm">
                <div className="space-y-1.5">
                  <div className="serif-display font-medium text-[#A68B5B] text-lg">01. Create & Grow</div>
                  <p className="text-xs text-[#B3C4BF] font-light leading-relaxed">Disciplined compounding through suitable market instruments.</p>
                </div>
                <div className="space-y-1.5">
                  <div className="serif-display font-medium text-[#A68B5B] text-lg">02. Protect</div>
                  <p className="text-xs text-[#B3C4BF] font-light leading-relaxed">Shielding family health, income, and assets against unforeseen shocks.</p>
                </div>
                <div className="space-y-1.5">
                  <div className="serif-display font-medium text-[#A68B5B] text-lg">03. Transfer</div>
                  <p className="text-xs text-[#B3C4BF] font-light leading-relaxed">Seamless succession and frictionless intergenerational handover.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE LEGACYONE DIFFERENCE */}
      <section className="py-20 bg-[#EFECE6] border-y border-[#0F2D2E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Core Differentiators
            </span>
            <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F2D2E]">
              The LegacyOne Difference
            </h2>
            <p className="text-base text-[#555555] font-light">
              A wealth relationship built on understanding, market discipline, and long-term commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {DIFFERENCE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-[#F5F2ED] p-8 rounded-xl border border-[#0F2D2E]/15 hover:border-[#A68B5B] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-sm bg-[#0F2D2E] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[item.icon] || <ShieldCheck className="w-5 h-5 text-[#A68B5B]" />}
                  </div>
                  <h3 className="serif-display text-xl font-bold text-[#0F2D2E]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="w-6 h-[2px] bg-[#A68B5B]/50 block group-hover:w-12 group-hover:bg-[#A68B5B] transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — A WIDER UNIVERSE OF WEALTH SOLUTIONS */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
                Solutions Universe
              </span>
              <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F2D2E]">
                One Relationship. <br />
                <span className="italic font-normal">A Wider Financial Universe.</span>
              </h2>
              <p className="text-base text-[#555555] font-light leading-relaxed">
                Financial needs rarely fit into a single product category. Our broad product universe allows us to evaluate different solutions and identify options that may be relevant to your goals, risk profile and financial circumstances.
              </p>
            </div>

            <button
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0F2D2E] hover:text-[#A68B5B] transition-colors self-start md:self-end cursor-pointer group"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A68B5B] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Solutions Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTION_CATEGORIES.map((category) => (
              <div 
                key={category.id}
                className="bg-white rounded-xl p-6 border border-[#0F2D2E]/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-3.5 bg-[#A68B5B]" />
                    <div className="text-xs sans-ui uppercase tracking-wider text-[#0F2D2E] font-bold">
                      {category.title}
                    </div>
                  </div>
                  <p className="text-xs text-[#6A6864] mb-4 font-light">
                    {category.subtitle}
                  </p>
                  <ul className="space-y-2 border-t border-[#0F2D2E]/10 pt-3">
                    {category.products.map((p) => (
                      <li key={p.id} className="text-xs text-[#2C3533] flex items-center gap-2 font-normal">
                        <span className="w-1 h-1 rounded-full bg-[#A68B5B]" />
                        <span>{p.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0F2D2E]/10">
                  <button
                    onClick={() => onNavigate('solutions', category.id)}
                    className="text-xs font-bold uppercase tracking-wider text-[#0F2D2E] hover:text-[#A68B5B] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3 h-3 text-[#A68B5B]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white/70 border border-[#0F2D2E]/15 text-xs text-[#555555] flex items-center justify-between flex-wrap gap-2">
            <span>
              * Product distribution and facilitation is subject to client suitability, statutory regulations, and applicable risk profiles.
            </span>
            <button 
              onClick={() => onNavigate('solutions')}
              className="font-bold text-[#0F2D2E] underline underline-offset-2 hover:text-[#A68B5B] uppercase tracking-wider text-[11px]"
            >
              Learn about our product due diligence →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — OUR APPROACH */}
      <section className="py-20 bg-[#EFECE6] border-y border-[#0F2D2E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              The Journey
            </span>
            <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F2D2E]">
              We Start With You. Not the Product.
            </h2>
            <p className="text-base text-[#555555] font-light">
              A disciplined, 6-step client-first discovery framework engineered for clarity and long-term peace of mind.
            </p>
          </div>

          {/* 6 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPROACH_STEPS.map((step) => (
              <div 
                key={step.stepNumber}
                className="bg-[#F5F2ED] p-6 sm:p-8 rounded-xl border border-[#0F2D2E]/15 relative hover:border-[#A68B5B] transition-all group"
              >
                <div className="serif-display text-3xl sm:text-4xl font-light text-[#A68B5B] mb-3">
                  {step.stepNumber}
                </div>
                <h3 className="serif-display text-xl font-bold text-[#0F2D2E] mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-bold uppercase tracking-wider text-[#A68B5B] mb-3 sans-ui">
                  {step.headline}
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4 font-light">
                  {step.summary}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-[#0F2D2E]/10 text-[11px] sm:text-xs text-[#3A4341]">
                  {step.details.slice(0, 2).map((d, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 font-light">
                      <span className="text-[#A68B5B] shrink-0 mt-0.5">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('approach')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0F2D2E] hover:bg-opacity-90 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-sm cursor-pointer"
            >
              <span>Understand Our Approach in Detail</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A68B5B]" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE FAMILY WEALTH PARTNER */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F2D2E] rounded-2xl p-8 sm:p-12 lg:p-16 text-white border border-[#0F2D2E] shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>The Long-Term Relationship</span>
                </div>

                <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-white">
                  Every Family Has a Family Doctor. <br />
                  <span className="italic text-[#A68B5B]">Why Not a Family Wealth Partner?</span>
                </h2>

                <p className="text-base text-[#C2CDC8] leading-relaxed font-light">
                  Financial decisions rarely exist in isolation. Investments, protection, taxation, family responsibilities and future aspirations are interconnected. We endeavor to become the trusted wealth partner families can turn to as these needs evolve through different stages of life.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-[#B3C4BF]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                    <span>Holistic understanding of your family priorities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                    <span>Continuity across market and life cycles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                    <span>Objective, multi-product distribution access</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                    <span>Discreet, confidential handling of all affairs</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10 space-y-4">
                <h3 className="serif-display text-xl font-normal text-white">
                  Life Stage Wealth Partnership
                </h3>
                <div className="space-y-3 text-xs text-[#C2CDC8]">
                  <div className="p-3.5 rounded-lg bg-black/20 border border-white/5">
                    <strong className="text-[#A68B5B] block mb-1 uppercase tracking-wider text-[11px]">Accumulation & Growth:</strong>
                    Building career surplus, equity compounding, risk management.
                  </div>
                  <div className="p-3.5 rounded-lg bg-black/20 border border-white/5">
                    <strong className="text-[#A68B5B] block mb-1 uppercase tracking-wider text-[11px]">Preservation & Milestones:</strong>
                    Securing children's aspirations, real estate yield, enterprise protection.
                  </div>
                  <div className="p-3.5 rounded-lg bg-black/20 border border-white/5">
                    <strong className="text-[#A68B5B] block mb-1 uppercase tracking-wider text-[11px]">Succession & Legacy:</strong>
                    Frictionless wealth transmission, nominee audits, family wealth continuity.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — MUMBAI TO INDIA */}
      <section className="py-20 bg-[#EFECE6] border-t border-[#0F2D2E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              <Building2 className="w-3.5 h-3.5" />
              <span>Heritage & Ethos</span>
            </div>

            <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F2D2E]">
              Born in Mumbai. Built for India.
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-light">
              Mumbai has been at the heart of India's financial markets for generations. Our founding partners were born and brought up in Mumbai and developed their financial-market perspective in an environment where market awareness, discipline, relationships and integrity matter deeply. LegacyOne Wealth carries that ethos forward with a vision to serve clients across India.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl border border-[#0F2D2E]/15">
                <h4 className="serif-display font-medium text-lg text-[#0F2D2E] mb-1">Financial Capital Expertise</h4>
                <p className="text-xs text-[#555555] leading-relaxed font-light">
                  Firsthand experience navigating Indian market cycles, corporate developments, and regulatory frameworks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#0F2D2E]/15">
                <h4 className="serif-display font-medium text-lg text-[#0F2D2E] mb-1">Discipline & Integrity</h4>
                <p className="text-xs text-[#555555] leading-relaxed font-light">
                  High ethical standards where client trust is paramount and long-term relationships supersede quick transactions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#0F2D2E]/15">
                <h4 className="serif-display font-medium text-lg text-[#0F2D2E] mb-1">Pan-India Horizon</h4>
                <p className="text-xs text-[#555555] leading-relaxed font-light">
                  Leveraging modern digital infrastructure to deliver high-touch Mumbai wealth solutions to families across India.
                </p>
              </div>
            </div>

            {/* Founding Partners Cards */}
            <div className="pt-12 text-left">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">Founding Leadership</span>
                  <h3 className="serif-display text-2xl font-medium text-[#0F2D2E]">The Founding Partners</h3>
                </div>
                <button
                  onClick={() => onNavigate('team')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F2D2E] hover:text-[#A68B5B] transition-colors sans-ui cursor-pointer"
                >
                  <span>Meet Full Leadership</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A68B5B]" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FOUNDERS.map((founder) => (
                  <div 
                    key={founder.id}
                    className="bg-white p-6 rounded-2xl border border-[#0F2D2E]/15 hover:border-[#A68B5B] shadow-sm transition-all flex flex-col sm:flex-row gap-5 items-start"
                  >
                    <FounderAvatar
                      name={founder.name}
                      imageUrl={founder.imageUrl}
                      className="w-32 h-40 sm:w-36 sm:h-48 rounded-2xl border border-[#0F2D2E]/15 shrink-0 shadow-md ring-4 ring-[#EFECE6]/80"
                    />

                    <div className="space-y-1.5 flex-1">
                      <span className="inline-block px-2 py-0.5 rounded bg-[#EFECE6] text-[#A68B5B] text-[9px] font-bold sans-ui uppercase tracking-wider">
                        {founder.role}
                      </span>
                      <h4 className="serif-display text-xl font-medium text-[#0F2D2E]">
                        {founder.name}
                      </h4>
                      <div className="text-[11px] font-semibold text-[#555555] sans-ui">
                        {founder.designation}
                      </div>
                      {founder.shortBio && (
                        <p className="text-xs text-[#555555] font-light leading-relaxed pt-1">
                          {founder.shortBio}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="py-24 bg-[#0F2D2E] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Begin Today
            </span>
            <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
              Your Wealth Has a Story. <br />
              <span className="italic text-[#A68B5B]">Let's Help Shape Its Next Chapter.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#C2CDC8] max-w-xl mx-auto leading-relaxed font-light">
              Whether you are beginning to build substantial wealth, managing an established portfolio or thinking about the legacy you want to leave behind, we'd be happy to start a conversation.
            </p>
            <div className="pt-4">
              <button
                id="home-final-cta-btn"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#0F2D2E] bg-[#A68B5B] hover:bg-[#B89D6D] rounded-full shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <span>Talk To Us</span>
                <ArrowRight className="w-4 h-4 text-[#0F2D2E] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

