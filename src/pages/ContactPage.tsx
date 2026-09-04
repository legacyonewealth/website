import React, { useState } from 'react';
import { PageId, ContactFormData } from '../types';
import { BRAND_INFO } from '../data/content';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  Lock
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

const TOPICS = [
  'Wealth Creation (MF, PMS, AIF)',
  'Wealth Protection & Insurance',
  'Comprehensive Portfolio Review',
  'Tax-Planning Assistance',
  'Alternative Investments & Yield',
  'Intergenerational Legacy Planning',
  'Other Specialized Solutions'
];

const WEALTH_RANGES = [
  '₹25 Lakhs – ₹1 Crore',
  '₹1 Crore – ₹5 Crores',
  '₹5 Crores – ₹25 Crores',
  '₹25 Crores+',
  'Prefer to discuss directly'
];

const GOOGLE_FORM_ENDPOINT =
  'https://docs.google.com/forms/d/e/1FAIpQLScab4CTkSFp-_gHE6OFbkuJ6PKoh0po89vp1xDYT9p1cW-0SA/formResponse';

const ENTRY_IDS = {
  name: 'entry.1412451286',
  mobile: 'entry.296215142',
  email: 'entry.1135401336',
  city: 'entry.1973286193',
  profession: 'entry.543389413',
  wealthRange: 'entry.812122508',
  topics: 'entry.2044729598',
  message: 'entry.1485218212',
  preferredContactMode: 'entry.896929317',
};

const CALLBACK_MAP: Record<string, string> = {
  phone: 'Direct Phone Call',
  whatsapp: 'WhatsApp',
  email: 'Email',
};

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    mobile: '',
    email: '',
    city: 'Mumbai',
    profession: '',
    wealthRange: '₹1 Crore – ₹5 Crores',
    discussionTopics: ['Wealth Creation (MF, PMS, AIF)'],
    message: '',
    preferredContactMode: 'phone'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const toggleTopic = (topic: string) => {
    setFormData(prev => {
      const exists = prev.discussionTopics.includes(topic);
      if (exists) {
        return {
          ...prev,
          discussionTopics: prev.discussionTopics.filter(t => t !== topic)
        };
      } else {
        return {
          ...prev,
          discussionTopics: [...prev.discussionTopics, topic]
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const formEl = e.currentTarget as HTMLFormElement;
    const website = String(new FormData(formEl).get('website') || '').trim();

    // Honeypot: bots fill the hidden field — silently treat as success.
    if (website) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      return;
    }

    // Submit straight to Google Forms using a hidden native form POST.
    // This is not blocked by CORS and does not navigate the page
    // (it targets the hidden iframe rendered below).
    const gform = document.createElement('form');
    gform.method = 'POST';
    gform.action = GOOGLE_FORM_ENDPOINT;
    gform.target = 'legacyone_contact_iframe';
    gform.style.display = 'none';

    const addField = (name: string, value: string) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      gform.appendChild(input);
    };

    addField(ENTRY_IDS.name, formData.name);
    addField(ENTRY_IDS.mobile, formData.mobile);
    addField(ENTRY_IDS.email, formData.email);
    addField(ENTRY_IDS.city, formData.city);
    addField(ENTRY_IDS.profession, formData.profession);
    addField(ENTRY_IDS.wealthRange, formData.wealthRange);
    formData.discussionTopics.forEach((t) => addField(ENTRY_IDS.topics, t));
    addField(ENTRY_IDS.message, formData.message);
    addField(
      ENTRY_IDS.preferredContactMode,
      CALLBACK_MAP[formData.preferredContactMode] || formData.preferredContactMode
    );

    try {
      document.body.appendChild(gform);
      gform.submit();
      gform.remove();
      setIsSubmitted(true);
    } catch (err) {
      console.error('Contact submit error:', err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-page" className="min-h-screen pt-28 pb-20 bg-[#F5F2ED]">
      {/* Hidden iframe target for the Google Forms submission */}
      <iframe name="legacyone_contact_iframe" title="Contact form submission" style={{ display: 'none' }} aria-hidden="true" />
      
      {/* Hero Header */}
      <section className="bg-[#EFECE6] py-16 sm:py-20 border-b border-[#0F2D2E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
              Get in Touch
            </span>
            <h1 className="serif-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#0F2D2E] leading-tight">
              Let's Start a <br />
              <span className="italic text-[#A68B5B]">Conversation.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
              Tell us a little about yourself and what you are looking to achieve. Our team will get in touch to understand your requirements better in an unhurried, confidential manner.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-16 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#0F2D2E]/15 p-6 sm:p-10 shadow-sm">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#0F2D2E] text-[#A68B5B] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="serif-display text-3xl font-medium text-[#0F2D2E]">
                      Thank You, {formData.name || 'Friend'}.
                    </h3>
                    <p className="text-sm sm:text-base text-[#555555] font-light max-w-md mx-auto leading-relaxed">
                      We have received your conversation request. A founding partner or senior relationship officer from our Mumbai office will reach out to you within 24 business hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F5F2ED] border border-[#0F2D2E]/10 max-w-md mx-auto text-left text-xs text-[#1A1A1A] space-y-1">
                    <div className="font-bold text-[#0F2D2E] sans-ui uppercase tracking-wider text-[11px]">Requested Topics:</div>
                    <div className="text-[#555555] font-light">{formData.discussionTopics.join(', ') || 'General Wealth Review'}</div>
                    <div className="font-bold text-[#0F2D2E] sans-ui uppercase tracking-wider text-[11px] pt-1">Preferred Mode:</div>
                    <div className="capitalize text-[#555555] font-light">{formData.preferredContactMode} ({formData.mobile || formData.email})</div>
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          mobile: '',
                          email: '',
                          city: 'Mumbai',
                          profession: '',
                          wealthRange: '₹1 Crore – ₹5 Crores',
                          discussionTopics: ['Wealth Creation (MF, PMS, AIF)'],
                          message: '',
                          preferredContactMode: 'phone'
                        });
                      }}
                      className="px-6 py-2.5 rounded-full border border-[#0F2D2E]/20 text-xs font-bold uppercase tracking-wider sans-ui text-[#0F2D2E] hover:bg-[#F5F2ED] transition-colors cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                    <button
                      onClick={() => onNavigate('home')}
                      className="px-6 py-2.5 rounded-full bg-[#0F2D2E] text-white text-xs font-bold uppercase tracking-wider sans-ui hover:bg-[#1A4748] transition-colors cursor-pointer"
                    >
                      Return to Home
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field — hidden from humans, catches bots */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    defaultValue=""
                    className="absolute -left-[9999px] w-px h-px opacity-0"
                  />
                  
                  <div className="border-b border-[#0F2D2E]/10 pb-4">
                    <h3 className="serif-display text-2xl font-medium text-[#0F2D2E]">
                      Discovery Conversation Request
                    </h3>
                    <p className="text-xs text-[#555555] font-light mt-0.5">
                      All communications are held in strict professional confidence.
                    </p>
                  </div>

                  {/* Personal Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0F2D2E] mb-1.5 sans-ui">
                        Full Name <span className="text-[#A68B5B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Mehta"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#0F2D2E]/15 focus:border-[#0F2D2E] focus:ring-1 focus:ring-[#0F2D2E] text-sm bg-[#F5F2ED]/50 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0F2D2E] mb-1.5 sans-ui">
                        Mobile Number <span className="text-[#A68B5B]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="e.g. +91 98200 XXXXX"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#0F2D2E]/15 focus:border-[#0F2D2E] focus:ring-1 focus:ring-[#0F2D2E] text-sm bg-[#F5F2ED]/50 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0F2D2E] mb-1.5 sans-ui">
                        Email Address <span className="text-[#A68B5B]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rajesh@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#0F2D2E]/15 focus:border-[#0F2D2E] focus:ring-1 focus:ring-[#0F2D2E] text-sm bg-[#F5F2ED]/50 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0F2D2E] mb-1.5 sans-ui">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Mumbai, Pune, Delhi NCR"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#0F2D2E]/15 focus:border-[#0F2D2E] focus:ring-1 focus:ring-[#0F2D2E] text-sm bg-[#F5F2ED]/50 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0F2D2E] mb-1.5 sans-ui">
                        Profession / Business
                      </label>
                      <input
                        type="text"
                        value={formData.profession}
                        onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                        placeholder="e.g. Business Owner / CXO / Doctor"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#0F2D2E]/15 focus:border-[#0F2D2E] focus:ring-1 focus:ring-[#0F2D2E] text-sm bg-[#F5F2ED]/50 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0F2D2E] mb-1.5 sans-ui">
                        Approx. Investment / Wealth Range
                      </label>
                      <select
                        value={formData.wealthRange}
                        onChange={(e) => setFormData({ ...formData, wealthRange: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#0F2D2E]/15 focus:border-[#0F2D2E] focus:ring-1 focus:ring-[#0F2D2E] text-sm bg-[#F5F2ED]/50 outline-none transition-all"
                      >
                        {WEALTH_RANGES.map((range, idx) => (
                          <option key={idx} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Discussion Topics Chips */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0F2D2E] sans-ui">
                      What would you like to discuss? (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {TOPICS.map((topic) => {
                        const isSelected = formData.discussionTopics.includes(topic);
                        return (
                          <button
                            type="button"
                            key={topic}
                            onClick={() => toggleTopic(topic)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#0F2D2E] text-white border-[#0F2D2E]'
                                : 'bg-[#F5F2ED] text-[#555555] border-[#0F2D2E]/15 hover:border-[#A68B5B]'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}{topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0F2D2E] mb-1.5 sans-ui">
                      Additional Message / Objectives (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share any specific requirements, current portfolio challenges, or timing preferences..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#0F2D2E]/15 focus:border-[#0F2D2E] focus:ring-1 focus:ring-[#0F2D2E] text-sm bg-[#F5F2ED]/50 outline-none transition-all"
                    />
                  </div>

                  {/* Preferred Contact Mode */}
                  <div className="flex flex-col gap-2 text-xs text-[#555555]">
                    <span className="font-bold text-[#0F2D2E] sans-ui text-[11px] uppercase tracking-wider">Preferred Callback via:</span>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMode"
                        value="phone"
                        checked={formData.preferredContactMode === 'phone'}
                        onChange={() => setFormData({ ...formData, preferredContactMode: 'phone' })}
                        className="accent-[#0F2D2E]"
                      />
                      <span>Direct Phone Call</span>
                    </label>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMode"
                        value="whatsapp"
                        checked={formData.preferredContactMode === 'whatsapp'}
                        onChange={() => setFormData({ ...formData, preferredContactMode: 'whatsapp' })}
                        className="accent-[#0F2D2E]"
                      />
                      <span>WhatsApp</span>
                    </label>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMode"
                        value="email"
                        checked={formData.preferredContactMode === 'email'}
                        onChange={() => setFormData({ ...formData, preferredContactMode: 'email' })}
                        className="accent-[#0F2D2E]"
                      />
                      <span>Email</span>
                    </label>
                  </div>

                  {submitError && (
                    <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-700">
                      Something went wrong submitting your request. Please try again or email us directly at {BRAND_INFO.location.email}.
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0F2D2E] hover:bg-[#1A4748] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Request a Conversation</span>
                          <Send className="w-4 h-4 text-[#A68B5B]" />
                        </>
                      )}
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#6A6864] mt-3">
                      <Lock className="w-3 h-3 text-[#A68B5B]" />
                      <span>Strict confidentiality assured. No spam or unsolicited third-party sharing.</span>
                    </div>
                  </div>

                </form>
              )}

            </div>

            {/* Right Column: Office Location & Channels (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Office Details Card */}
              <div className="bg-white rounded-2xl border border-[#0F2D2E]/15 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
                    Corporate Office
                  </span>
                  <h3 className="serif-display text-2xl font-medium text-[#0F2D2E] mt-1">
                    Connect With Us
                  </h3>
                  <p className="text-xs text-[#555555] font-light mt-1">
                    Headquartered in Gurgaon (Delhi NCR) with Pan-India servicing capabilities.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#1A1A1A]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F2ED] border border-[#0F2D2E]/10 flex items-center justify-center text-[#A68B5B] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-[#0F2D2E] font-medium sans-ui uppercase tracking-wider text-[11px]">Registered Office Address:</strong>
                      <span className="text-[#555555] font-light leading-relaxed">
                        {BRAND_INFO.location.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F2ED] border border-[#0F2D2E]/10 flex items-center justify-center text-[#A68B5B] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-[#0F2D2E] font-medium sans-ui uppercase tracking-wider text-[11px]">Email Enquiries:</strong>
                      <span className="text-[#555555] font-light">{BRAND_INFO.location.email}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F2ED] border border-[#0F2D2E]/10 flex items-center justify-center text-[#A68B5B] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-[#0F2D2E] font-medium sans-ui uppercase tracking-wider text-[11px]">Business Hours:</strong>
                      <span className="text-[#555555] font-light">{BRAND_INFO.location.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Map Visual Placeholder */}
                <div className="pt-2">
                  <div className="rounded-xl bg-[#0F2D2E] p-5 text-white flex flex-col justify-between h-36 relative overflow-hidden border border-white/10">
                    <div className="relative z-10">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#A68B5B] sans-ui block">
                        Location Pin
                      </span>
                      <h4 className="serif-display font-medium text-lg text-white mt-0.5">
                        Sector-44, Gurgaon
                      </h4>
                      <p className="text-[11px] text-[#B3C4BF] font-light">
                        5th Floor, CLC Tower, Sector-44, Gurgaon, Haryana - 122003
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-xs text-[#A68B5B] sans-ui font-bold uppercase tracking-wider">
                      <span>Open on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>

                    {/* Subtle aesthetic background grid */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A68B5B_1px,transparent_1px)] [background-size:12px_12px]" />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
