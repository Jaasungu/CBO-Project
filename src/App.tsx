import React, { useState, useEffect } from 'react';
import { AccentChoice } from './types/jasiri';
import { ViewportMode } from './types/site';
import { JasiriNavbar } from './components/jasiri/JasiriNavbar';
import type { CurrentPage } from './components/jasiri/JasiriNavbar';
import { TunuHomeCarousel } from './components/jasiri/TunuHomeCarousel';
import { JasiriFooter } from './components/jasiri/JasiriFooter';
import { JasiriDesignSystemModal } from './components/jasiri/JasiriDesignSystemModal';
import { DonationModal } from './components/jasiri/DonationModal';
import { TunuProgramsPage } from './components/jasiri/TunuProgramsPage';
import { PartnerPage } from './components/jasiri/PartnerPage';
import { TunuAboutPage } from './components/jasiri/TunuAboutPage';
import {
  Monitor,
  Tablet,
  Smartphone,
  Sliders,
  Eye,
  Building2,
  Home,
  Heart,
} from 'lucide-react';

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
  const [viewportMode, setViewportMode] = useState<ViewportMode>('fluid');
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState<boolean>(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState<boolean>(false);
  const [isFullscreenPreview, setIsFullscreenPreview] = useState<boolean>(false);
  const [useTextLogo, setUseTextLogo] = useState<boolean>(false);

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

  // Viewport container classes
  const getViewportContainerClasses = () => {
    if (isFullscreenPreview) return 'w-full min-h-screen bg-white dark:bg-[#070D1E]';

    switch (viewportMode) {
      case 'desktop':
        return 'max-w-[1440px] mx-auto my-4 rounded-xl shadow-2xl border border-slate-300 dark:border-slate-800 overflow-hidden bg-white dark:bg-[#070D1E] transition-all duration-300';
      case 'tablet':
        return 'max-w-[768px] mx-auto my-6 rounded-2xl shadow-2xl border-4 border-slate-800 dark:border-slate-700 overflow-hidden bg-white dark:bg-[#070D1E] transition-all duration-300';
      case 'mobile':
        return 'max-w-[375px] mx-auto my-6 rounded-[36px] shadow-2xl border-[6px] border-slate-800 dark:border-slate-700 overflow-hidden bg-white dark:bg-[#070D1E] transition-all duration-300';
      case 'fluid':
      default:
        return 'w-full min-h-screen bg-white dark:bg-[#070D1E] transition-colors';
    }
  };

  return (
    <div className="min-h-screen bg-slate-200/80 dark:bg-slate-950 font-body-sans selection:bg-[#0B132B] selection:text-white dark:selection:bg-teal-400 dark:selection:text-slate-900">
      {/* Studio Top Control Toolbar */}
      {!isFullscreenPreview && !isTunuContentPage ? (
        <div className="sticky top-0 z-50 bg-[#0B132B] text-white border-b border-slate-800 px-4 py-2.5 transition-all shadow-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            {/* Left: App & Page Indicator */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-bold tracking-tight bg-slate-800/90 px-3 py-1 rounded-md text-white border border-slate-700/60 font-display-jakarta">
                <span className={`w-2 h-2 rounded-full ${accent === 'teal' ? 'bg-teal-400' : 'bg-fuchsia-400'}`}></span>
                <span>HerRise · Custom Navigation Active</span>
              </div>

              {/* Page View Switcher */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-md border border-slate-700 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => {
                    navigateToPage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 cursor-pointer ${
                    currentPage === 'home'
                      ? 'bg-slate-800 text-white shadow-xs font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Home className="w-3 h-3" />
                  <span>Homepage</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigateToPage('partner');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 cursor-pointer ${
                    currentPage === 'partner'
                      ? 'bg-slate-800 text-white shadow-xs font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Building2 className="w-3 h-3" />
                  <span>Partner With Us</span>
                </button>
              </div>
            </div>

            {/* Viewport Simulator */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-700">
              <button
                type="button"
                onClick={() => setViewportMode('fluid')}
                className={`px-2.5 py-1 text-xs font-medium rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewportMode === 'fluid'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Full Responsive"
              >
                <span>Fluid (100%)</span>
              </button>
              <button
                type="button"
                onClick={() => setViewportMode('desktop')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  viewportMode === 'desktop'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop 1440px"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewportMode('tablet')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  viewportMode === 'tablet'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Tablet 768px"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewportMode('mobile')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  viewportMode === 'mobile'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile 375px"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Tools */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setUseTextLogo(!useTextLogo)}
                className="px-2.5 py-1.5 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
                title="Toggle between the HerRise logo and text mark"
              >
                {useTextLogo ? 'Logo: Text Mark' : 'Logo: HerRise'}
              </button>

              <button
                type="button"
                onClick={() => setIsDonateModalOpen(true)}
                className="px-3 py-1.5 text-xs font-bold rounded-md bg-rose-600 hover:bg-rose-500 text-white transition-all flex items-center gap-1.5 shadow-xs font-display-jakarta cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Donate Modal</span>
              </button>

              <button
                type="button"
                onClick={() => setIsDesignSystemOpen(true)}
                className="px-3 py-1.5 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition-all flex items-center gap-1.5 shadow-xs font-display-jakarta cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Design System</span>
              </button>

              <button
                type="button"
                onClick={() => setIsFullscreenPreview(true)}
                className="px-3 py-1.5 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="View full clean preview"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Preview</span>
              </button>
            </div>
          </div>
        </div>
      ) : isFullscreenPreview ? (
        <div className="fixed top-4 right-4 z-50">
          <button
            type="button"
            onClick={() => setIsFullscreenPreview(false)}
            className="px-3.5 py-2 text-xs font-bold rounded-full bg-[#0B132B]/95 text-white shadow-2xl backdrop-blur-md hover:scale-105 transition-all flex items-center gap-2 border border-slate-700 cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Exit Fullscreen</span>
          </button>
        </div>
      ) : null}

      {/* Main Website Frame Container */}
      <main className={getViewportContainerClasses()}>
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
          useTextLogo={useTextLogo}
          onToggleLogo={() => setUseTextLogo(!useTextLogo)}
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
