import React, { useState } from 'react';
import { PageId } from '../types';
import { APPROACH_STEPS } from '../data/content';
import { 
  UserCheck, 
  ShieldAlert, 
  Layers, 
  Target, 
  Search, 
  Repeat, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface ApproachPageProps {
  onNavigate: (page: PageId) => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ onNavigate }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Quick Self-Discovery Interactive Widget
  const [lifeStage, setLifeStage] = useState<string>('growth');
  const [primaryPriority, setPrimaryPriority] = useState<string>('multiasset');

  const stepIcons = [
    <UserCheck className="w-6 h-6 text-[#A68B5B]" />,
    <ShieldAlert className="w-6 h-6 text-[#A68B5B]" />,
    <Layers className="w-6 h-6 text-[#A68B5B]" />,
    <Target className="w-6 h-6 text-[#A68B5B]" />,
    <Search className="w-6 h-6 text-[#A68B5B]" />,
    <Repeat className="w-6 h-6 text-[#A68B5B]" />
  ];

  const currentStep = APPROACH_STEPS[activeStepIndex];

  return (
    <div id="approach-page" className="min-h-screen pt-28 pb-20 bg-[#F5F2ED]">
      
      {/* Hero Header */}
      <section className="bg-[#EFECE6] py-16 sm:py-20 border-b border-[#0F2D2E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Our Methodology
            </span>
            <h1 className="serif-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#0F2D2E] leading-tight">
              We Start With You. <br />
              <span className="italic text-[#A68B5B]">Not the Product.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              True wealth stewardship requires a disciplined, diagnostic discovery of your family context, risk capacity, and goals before evaluating a single financial instrument.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Step Navigator & Detailed Breakdown */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Step Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {APPROACH_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#0F2D2E] border-[#0F2D2E] text-white shadow-lg'
                      : 'bg-white border-[#0F2D2E]/15 text-[#1A1A1A] hover:border-[#A68B5B]'
                  }`}
                >
                  <div className={`serif-display text-2xl font-medium ${isActive ? 'text-[#A68B5B]' : 'text-[#0F2D2E]'}`}>
                    {step.stepNumber}
                  </div>
                  <div className="text-xs font-bold mt-2 line-clamp-1 sans-ui uppercase tracking-wider">
                    {step.title.split('&')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="bg-white rounded-2xl border border-[#0F2D2E]/15 p-8 sm:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-xl bg-[#0F2D2E]/5 border border-[#0F2D2E]/10 flex items-center justify-center">
                    {stepIcons[activeStepIndex]}
                  </span>
                  <div>
                    <span className="text-[10px] sans-ui font-bold uppercase tracking-widest text-[#A68B5B]">
                      Step {currentStep.stepNumber} of 06
                    </span>
                    <h2 className="serif-display text-2xl sm:text-3xl font-medium text-[#0F2D2E]">
                      {currentStep.title}
                    </h2>
                  </div>
                </div>

                <div className="font-semibold text-base text-[#A68B5B] sans-ui">
                  {currentStep.headline}
                </div>

                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
                  {currentStep.summary}
                </p>

                {/* Specific Discovery Points */}
                <div className="pt-4 border-t border-[#0F2D2E]/10 space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#555555] sans-ui">
                    Core Elements We Review Together:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#1A1A1A] font-light">
                    {currentStep.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visual Context Box */}
              <div className="lg:col-span-5 bg-[#F5F2ED] p-6 sm:p-8 rounded-xl border border-[#0F2D2E]/10 space-y-4">
                <div className="flex items-center justify-between text-xs sans-ui font-bold uppercase tracking-wider text-[#6A6864]">
                  <span>Discovery Framework</span>
                  <span>Step {currentStep.stepNumber}/06</span>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#0F2D2E]/10 space-y-2">
                  <h4 className="serif-display font-medium text-[#0F2D2E] text-base">
                    Why This Matters for Your Family
                  </h4>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    By strictly adhering to a step-by-step diagnostic process, we eliminate product mismatch, prevent unnecessary fee churn, and ensure every financial decision is purposeful.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                    className="text-xs font-bold uppercase tracking-wider sans-ui text-[#0F2D2E] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#A68B5B] cursor-pointer"
                  >
                    ← Previous Step
                  </button>

                  <button
                    disabled={activeStepIndex === APPROACH_STEPS.length - 1}
                    onClick={() => setActiveStepIndex(Math.min(APPROACH_STEPS.length - 1, activeStepIndex + 1))}
                    className="text-xs font-bold uppercase tracking-wider sans-ui text-[#0F2D2E] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#A68B5B] cursor-pointer"
                  >
                    Next Step →
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* TRADITIONAL VS LEGACYONE WEALTH COMPARISON */}
      <section className="py-20 bg-[#EFECE6] border-t border-[#0F2D2E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Approach Comparison
            </span>
            <h2 className="serif-display text-3xl sm:text-4xl font-normal text-[#0F2D2E]">
              A Contrasting Perspective
            </h2>
            <p className="text-base text-[#555555] font-light">
              How our client-first framework differs from conventional product-focused distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Traditional */}
            <div className="bg-white p-8 rounded-xl border border-[#0F2D2E]/15 space-y-4 opacity-80">
              <div className="text-[10px] sans-ui font-bold uppercase tracking-widest text-[#6A6864]">
                Conventional Transactional Model
              </div>
              <h3 className="serif-display text-xl font-medium text-[#1A1A1A]">
                Product-Centric Selling
              </h3>
              <ul className="space-y-3 text-xs text-[#555555] font-light">
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold shrink-0">✕</span>
                  <span>Begins with currently trending products or sales targets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold shrink-0">✕</span>
                  <span>Isolated product decisions with no portfolio-wide context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold shrink-0">✕</span>
                  <span>Minimal focus on risk capacity and downside volatility tolerance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-700 font-bold shrink-0">✕</span>
                  <span>Transactional relationship ending once paperwork is processed</span>
                </li>
              </ul>
            </div>

            {/* LegacyOne Wealth */}
            <div className="bg-[#0F2D2E] text-white p-8 rounded-xl border border-[#0F2D2E] shadow-xl space-y-4">
              <div className="text-[10px] sans-ui font-bold uppercase tracking-widest text-[#A68B5B]">
                LegacyOne Wealth Approach
              </div>
              <h3 className="serif-display text-xl font-normal text-white">
                Client-First Wealth Stewardship
              </h3>
              <ul className="space-y-3 text-xs text-[#B3C4BF] font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                  <span>Begins with your family story, cash flows, liabilities, and vision</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                  <span>"One Wealth View" unifying investments, protection, and taxation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                  <span>Rigorous risk mapping separating emotional appetite from true capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A68B5B] shrink-0 mt-0.5" />
                  <span>Lifelong partnership through life milestones and market turbulence</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F2D2E] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="serif-display text-2xl sm:text-3xl font-normal">
            Ready to Begin Step 1: Know Your Story?
          </h3>
          <p className="text-sm text-[#B3C4BF] font-light max-w-xl mx-auto">
            Let us schedule an unhurried, confidential discovery session to discuss your family wealth picture.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#A68B5B] hover:bg-[#B89D6D] text-[#0F2D2E] text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md"
            >
              <span>Schedule Discovery Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
