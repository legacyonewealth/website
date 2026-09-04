import React, { useState, useEffect } from 'react';
import { PageId, NavItem } from '../types';
import { Logo } from './Logo';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContactModal?: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'solutions', label: 'Our Solutions' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'team', label: 'Our Team' },
  { id: 'contact', label: 'Contact Us' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F5F2ED]/95 backdrop-blur-md shadow-sm border-b border-[#0F2D2E]/15' 
          : 'bg-[#F5F2ED]/85 backdrop-blur-sm border-b border-[#0F2D2E]/10'
      }`}
    >
      {/* Top Utility Bar */}
      <div className="bg-[#0F2D2E] text-[#E0ECE8] py-1.5 px-4 sm:px-6 text-[10px] sm:text-[11px] tracking-wide border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-end">
          <div className="flex items-center space-x-4 text-white/80">
            <span className="inline italic text-white/60 text-xs text-center leading-snug">"Every family has a family doctor. We endeavor to be your family wealth partner."</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button 
            id="header-brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A68B5B] rounded-lg py-1 transition-transform hover:scale-[1.01]"
            aria-label="LegacyOne Wealth Homepage"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 sans-ui text-base uppercase tracking-widest font-semibold">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              if (item.id === 'contact') {
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className="group inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#0F2D2E] hover:bg-opacity-90 rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer border border-[#0F2D2E]"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A68B5B] transition-transform group-hover:translate-x-0.5" />
                  </button>
                );
              }
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#0F2D2E] font-bold opacity-100'
                      : 'text-[#1A1A1A] opacity-70 hover:opacity-100 hover:text-[#0F2D2E]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A68B5B]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F2D2E] hover:bg-[#EAE5DC] rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#F5F2ED] border-b border-[#0F2D2E]/15 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm sans-ui uppercase tracking-wider font-semibold transition-colors text-left ${
                    isActive
                      ? 'bg-[#0F2D2E] text-white'
                      : 'text-[#1A1A1A] hover:bg-[#EAE5DC]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#A68B5B]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#0F2D2E]/15 space-y-3">
            <div className="flex items-center justify-center gap-4 text-xs text-[#6A6864] pt-2">
              <span className="flex items-center gap-1 text-[11px] sans-ui uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 text-[#A68B5B]" />
                Client-First
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
