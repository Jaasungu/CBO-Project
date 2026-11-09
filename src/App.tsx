import React, { useState, useEffect } from 'react';
import { AccentChoice } from './types/jasiri';
import { JasiriNavbar } from './components/jasiri/JasiriNavbar';
import type { CurrentPage } from './components/jasiri/JasiriNavbar';
import { TunuHomeCarousel } from './components/jasiri/TunuHomeCarousel';
import { JasiriFooter } from './components/jasiri/JasiriFooter';
import { JasiriDesignSystemModal } from './components/jasiri/JasiriDesignSystemModal';
import { DonationModal } from './components/jasiri/DonationModal';
import { TunuProgramsPage } from './components/jasiri/TunuProgramsPage';
import { PartnerPage } from './components/jasiri/PartnerPage';
import { TunuAboutPage } from './components/jasiri/TunuAboutPage';
const pagePaths: Record<CurrentPage, string> = {
  home: '/',
  programs: '/programs',
  partner: '/partner',
  'our-story': '/about/our-story',
  issue: '/about/the-issue-we-address',
  approach: '/about/our-approach',
  'who-we-are': '/about/who-we-are',
};

const getPageFromPath = (pathname: string): CurrentPage => {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  switch (normalizedPath) {
    case '/programs':
      return 'programs';
    case '/partner':
      return 'partner';
    case '/about/our-story':
      return 'our-story';
    case '/about/the-issue-we-address':
      return 'issue';
    case '/about/our-approach':
      return 'approach';
    case '/about/who-we-are':
      return 'who-we-are';
    default:
      return 'home';
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(() =>
    getPageFromPath(window.location.pathname),
  );
  const [accent, setAccent] = useState<AccentChoice>('teal');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState<boolean>(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState<boolean>(false);

  const navigateToPage = (page: CurrentPage) => {
    setCurrentPage(page);
    if (window.location.pathname !== pagePaths[page]) {
      window.history.pushState({ page }, '', pagePaths[page]);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
      window.scrollTo({ top: 0 });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync dark class on root documentElement
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const aboutTitles: Partial<Record<CurrentPage, string>> = {
      'our-story': 'Our Story | HerRise',
      issue: 'The Issue We Address | HerRise',
      approach: 'Our Approach | HerRise',
      programs: 'Our Programs | HerRise',
      'who-we-are': 'Who We Are | HerRise',
    };
    document.title = aboutTitles[currentPage] ?? 'HerRise | Nurturing Health. Empowering Communities.';
  }, [currentPage]);

  const isTunuContentPage =
    currentPage === 'programs' ||
    currentPage === 'our-story' ||
    currentPage === 'issue' ||
    currentPage === 'approach' ||
    currentPage === 'who-we-are';

  return (
    <div className="min-h-screen bg-slate-200/80 dark:bg-slate-950 font-body-sans selection:bg-[#0B132B] selection:text-white dark:selection:bg-teal-400 dark:selection:text-slate-900">
      <main className="w-full min-h-screen bg-white dark:bg-[#070D1E] transition-colors">
        {/* Homepage Header with user-specified items: About Us, Who We Are, Our Programs, Connect, and DONATE */}
        <JasiriNavbar
          currentPage={currentPage}
          onNavigate={navigateToPage}
          accent={accent}
          onToggleAccent={setAccent}
          isDark={isDark}
          onToggleDark={() => setIsDark(!isDark)}
          onOpenDesignSystem={() => setIsDesignSystemOpen(true)}
          onDonateClick={() => setIsDonateModalOpen(true)}
        />

        {/* Page Routing */}
        {currentPage === 'home' && (
          <TunuHomeCarousel
            accent={accent}
            onNavigate={(page) => {
              navigateToPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'programs' && (
          <TunuProgramsPage
            accent={accent}
            onNavigateHome={() => navigateToPage('home')}
            onNavigatePartner={() => navigateToPage('partner')}
          />
        )}

        {currentPage === 'partner' && (
          <PartnerPage
            accent={accent}
            onNavigateHome={() => navigateToPage('home')}
            onNavigatePrograms={() => navigateToPage('programs')}
          />
        )}

        {isTunuContentPage && currentPage !== 'programs' && (
          <TunuAboutPage
            currentPage={currentPage}
            onNavigate={(page) => navigateToPage(page)}
          />
        )}

        {/* Footer */}
        <JasiriFooter />
      </main>

      {/* Interactive Donation & Support Modal */}
      <DonationModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        accent={accent}
      />

      {/* Design System Tokens Modal */}
      <JasiriDesignSystemModal
        isOpen={isDesignSystemOpen}
        onClose={() => setIsDesignSystemOpen(false)}
        accent={accent}
        onToggleAccent={setAccent}
      />
    </div>
  );
}
