import React from 'react';
import { PageId } from '../types';
import { FOUNDERS } from '../data/content';
import { FounderAvatar } from '../components/FounderAvatar';
import { 
  Building2, 
  Award, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Sparkles,
  Compass
} from 'lucide-react';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  return (
    <div id="team-page" className="min-h-screen pt-28 pb-20 bg-[#F5F2ED]">
      
      {/* Hero Header */}
      <section className="bg-[#EFECE6] py-16 sm:py-20 border-b border-[#0F2D2E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Leadership & Stewardship
            </span>
            <h1 className="serif-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#0F2D2E] leading-tight">
              The People Behind <br />
              <span className="italic text-[#A68B5B]">LegacyOne Wealth</span>
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              Founded by Mumbai-native financial professionals united by a singular commitment: delivering principled, multi-asset wealth solutions and enduring family relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {FOUNDERS.map((founder, idx) => (
              <div
                key={founder.id}
                className="bg-white rounded-2xl border border-[#0F2D2E]/15 hover:border-[#A68B5B] shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Founder Header with Avatar Placeholder */}
                <div className="p-8 space-y-6">
                  
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    {/* Visual Avatar / Founder Image */}
                    <FounderAvatar
                      name={founder.name}
                      imageUrl={founder.imageUrl}
                      className="w-32 h-40 sm:w-36 sm:h-48 rounded-2xl border border-[#0F2D2E]/15 shrink-0 shadow-md ring-4 ring-[#EFECE6]/80"
                    />

                    <div className="space-y-2 flex-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFECE6] text-[#A68B5B] text-[10px] font-bold sans-ui uppercase tracking-wider border border-[#0F2D2E]/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A68B5B]" />
                        <span>{founder.role}</span>
                      </div>
                      <h3 className="serif-display text-2xl sm:text-3xl font-medium text-[#0F2D2E] tracking-tight">
                        {founder.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#555555] sans-ui tracking-wide">
                        {founder.designation}
                      </div>

                      {founder.shortBio && (
                        <p className="text-xs text-[#0F2D2E] font-medium italic pt-1 leading-relaxed bg-[#F5F2ED] p-3 rounded-xl border-l-2 border-[#A68B5B]">
                          "{founder.shortBio}"
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Biography */}
                  <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Professional Background */}
                  <div className="p-4 rounded-lg bg-[#F5F2ED] border border-[#0F2D2E]/10 space-y-1.5 text-xs">
                    <div className="font-bold text-[#0F2D2E] flex items-center gap-1.5 sans-ui uppercase tracking-wider text-[11px]">
                      <GraduationCap className="w-4 h-4 text-[#A68B5B]" />
                      <span>Professional Background & Market Experience</span>
                    </div>
                    <p className="text-[#555555] font-light leading-relaxed">
                      {founder.background}
                    </p>
                  </div>

                  {/* Mumbai Heritage */}
                  <div className="p-4 rounded-lg bg-[#F5F2ED] border border-[#0F2D2E]/10 space-y-1.5 text-xs">
                    <div className="font-bold text-[#0F2D2E] flex items-center gap-1.5 sans-ui uppercase tracking-wider text-[11px]">
                      <Building2 className="w-4 h-4 text-[#A68B5B]" />
                      <span>Mumbai Heritage & Ethos</span>
                    </div>
                    <p className="text-[#555555] font-light leading-relaxed">
                      {founder.mumbaiHeritage}
                    </p>
                  </div>

                  {/* Areas of Expertise */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#555555] sans-ui block">
                      Core Areas of Specialisation:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="px-3 py-1 rounded bg-[#EFECE6] text-[#0F2D2E] text-xs font-medium border border-[#0F2D2E]/10"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Footer */}
                <div className="p-6 bg-[#F5F2ED] border-t border-[#0F2D2E]/10 flex items-center justify-between">
                  <div className="text-xs text-[#6A6864] flex items-center gap-1 font-light">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A68B5B]" />
                    <span>Client-First Stewardship</span>
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider sans-ui text-[#0F2D2E] hover:text-[#A68B5B] transition-colors cursor-pointer"
                  >
                    <span>Connect with Partner</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ONE TEAM. ONE PHILOSOPHY SECTION */}
      <section className="py-20 bg-[#0F2D2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Our Collaborative Ethos
            </span>
            <h2 className="serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              One Team. One Philosophy.
            </h2>
            <p className="text-base sm:text-lg text-[#B3C4BF] font-light leading-relaxed">
              We combine complementary expertise across liquid investments, alternative assets, wealth protection, and tax efficiency to deliver a seamless client experience. When you work with LegacyOne Wealth, you gain the collective attention of the firm's leadership.
            </p>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#A68B5B]">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="serif-display text-lg text-white font-medium">Complementary Skills</h4>
                <p className="text-xs text-[#B3C4BF] font-light leading-relaxed">
                  Integrating quantitative investment selection with qualitative risk protection frameworks.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#A68B5B]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="serif-display text-lg text-white font-medium">Direct Partner Access</h4>
                <p className="text-xs text-[#B3C4BF] font-light leading-relaxed">
                  Every client interacts directly with senior partners, ensuring responsiveness and accountability.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#A68B5B]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="serif-display text-lg text-white font-medium">Intergenerational Focus</h4>
                <p className="text-xs text-[#B3C4BF] font-light leading-relaxed">
                  Fostering multi-decade relationships that bridge the aspirations of founders and successor generations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#EFECE6] text-center border-t border-[#0F2D2E]/15">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="serif-display text-2xl sm:text-3xl font-normal text-[#0F2D2E]">
            Start a Direct Conversation with the Partners
          </h3>
          <p className="text-sm text-[#555555] font-light max-w-xl mx-auto">
            We welcome the opportunity to learn about your family's financial journey and explore how we can assist.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0F2D2E] hover:bg-[#1A4748] text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md"
            >
              <span>Schedule an Introduction</span>
              <ArrowRight className="w-4 h-4 text-[#A68B5B]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
