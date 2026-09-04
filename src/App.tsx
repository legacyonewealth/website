import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ComplianceModal } from './components/ComplianceModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ApproachPage } from './pages/ApproachPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { MessageSquare, ArrowUp, ShieldAlert } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [complianceModalOpen, setComplianceModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for scroll-to-top button
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleNavigate = (page: PageId, target?: string) => {
    setCurrentPage(page);
    if (target) {
      window.setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2ED] text-[#1E2322] font-sans antialiased selection:bg-[#C69A4C]/25 selection:text-[#0E2F26]">
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'solutions' && <SolutionsPage onNavigate={handleNavigate} />}
        {currentPage === 'approach' && <ApproachPage onNavigate={handleNavigate} />}
        {currentPage === 'team' && <TeamPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Floating Quick Action & Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white text-[#0E2F26] border border-[#D9D0C3] shadow-md hover:bg-[#F5F2ED] hover:shadow-lg transition-all pointer-events-auto cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-[#C69A4C]" />
          </button>
        )}

        {currentPage !== 'contact' && (
          <button
            onClick={() => handleNavigate('contact')}
            className="group flex items-center gap-2 px-4 py-3 rounded-full bg-[#0E2F26] hover:bg-[#164337] text-white shadow-xl hover:shadow-2xl transition-all pointer-events-auto cursor-pointer border border-[#C69A4C]/40"
            aria-label="Start a conversation"
          >
            <MessageSquare className="w-4 h-4 text-[#C69A4C]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide pr-1">Start a Conversation</span>
          </button>
        )}
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenComplianceModal={() => setComplianceModalOpen(true)}
      />

      {/* Compliance & Regulatory Modal */}
      <ComplianceModal
        isOpen={complianceModalOpen}
        onClose={() => setComplianceModalOpen(false)}
      />
    </div>
  );
}
