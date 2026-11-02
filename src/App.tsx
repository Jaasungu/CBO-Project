import React, { useState, useEffect } from 'react';
import { AccentChoice } from './types/jasiri';
import { ViewportMode } from './types/site';
import { JasiriNavbar, CurrentPage } from './components/jasiri/JasiriNavbar';
import { JasiriHero } from './components/jasiri/JasiriHero';
import { JasiriImpactStrip } from './components/jasiri/JasiriImpactStrip';
import { JasiriProgramsBento } from './components/jasiri/JasiriProgramsBento';
import { JasiriPartnerBanner } from './components/jasiri/JasiriPartnerBanner';
import { JasiriFellowGrid } from './components/jasiri/JasiriFellowGrid';
import { JasiriApplicationPortal } from './components/jasiri/JasiriApplicationPortal';
import { JasiriCtaFooterBanner } from './components/jasiri/JasiriCtaFooterBanner';
import { JasiriFooter } from './components/jasiri/JasiriFooter';
import { JasiriDesignSystemModal } from './components/jasiri/JasiriDesignSystemModal';
import { DonationModal } from './components/jasiri/DonationModal';
import { ProgramsPage } from './components/jasiri/ProgramsPage';
import { PartnerPage } from './components/jasiri/PartnerPage';
import {
  Monitor,
  Tablet,
  Smartphone,
  Sliders,
  Eye,
  BookOpen,
  Building2,
  Home,
  Heart,
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');
  const [accent, setAccent] = useState<AccentChoice>('teal');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [viewportMode, setViewportMode] = useState<ViewportMode>('fluid');
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState<boolean>(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState<boolean>(false);
  const [isFullscreenPreview, setIsFullscreenPreview] = useState<boolean>(false);
  const [useDummyLogo, setUseDummyLogo] = useState<boolean>(true);

  // Sync dark class on root documentElement
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleApplyClick = () => {
    if (currentPage !== 'home') {
      setCurrentPage('programs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById('apply');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnerClick = () => {
    setCurrentPage('partner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      {!isFullscreenPreview ? (
        <div className="sticky top-0 z-50 bg-[#0B132B] text-white border-b border-slate-800 px-4 py-2.5 transition-all shadow-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            {/* Left: App & Page Indicator */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-bold tracking-tight bg-slate-800/90 px-3 py-1 rounded-md text-white border border-slate-700/60 font-display-jakarta">
                <span className={`w-2 h-2 rounded-full ${accent === 'teal' ? 'bg-teal-400' : 'bg-fuchsia-400'}`}></span>
                <span>Jasiri Kenya · Custom Navigation Active</span>
              </div>

              {/* Page View Switcher */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-md border border-slate-700 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentPage('home');
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
                    setCurrentPage('programs');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-2.5 py-1 rounded transition-all flex items-center gap-1 cursor-pointer ${
                    currentPage === 'programs'
                      ? 'bg-slate-800 text-white shadow-xs font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <BookOpen className="w-3 h-3" />
                  <span>Our Programs</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentPage('partner');
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
                onClick={() => setUseDummyLogo(!useDummyLogo)}
                className="px-2.5 py-1.5 text-xs font-semibold rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
                title="Toggle between Dummy Logo and Jasiri Kenya"
              >
                {useDummyLogo ? 'Logo: Dummy Mark' : 'Logo: Text Mark'}
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
      ) : (
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
      )}

      {/* Main Website Frame Container */}
      <main className={getViewportContainerClasses()}>
        {/* Homepage Header with user-specified items: About Us, Who We Are, Our Programs, Connect, and DONATE */}
        <JasiriNavbar
          currentPage={currentPage}
          onNavigate={(page) => setCurrentPage(page)}
          accent={accent}
          onToggleAccent={setAccent}
          isDark={isDark}
          onToggleDark={() => setIsDark(!isDark)}
          onOpenDesignSystem={() => setIsDesignSystemOpen(true)}
          onApplyClick={handleApplyClick}
          onDonateClick={() => setIsDonateModalOpen(true)}
          useDummyLogo={useDummyLogo}
          onToggleDummyLogo={() => setUseDummyLogo(!useDummyLogo)}
        />

        {/* Page Routing */}
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section */}
            <JasiriHero
              accent={accent}
              onApplyClick={handleApplyClick}
              onPartnerClick={handlePartnerClick}
            />

            {/* 2. About Us / Impact & Metrics Grid */}
            <JasiriImpactStrip accent={accent} />

            {/* 3. The Pillars / Programs Section */}
            <JasiriProgramsBento
              accent={accent}
              onApplyClick={handleApplyClick}
            />

            {/* 4. Partner / Sponsor Banner */}
            <JasiriPartnerBanner />

            {/* Who We Are: Fellow Stories & Photographic Proof */}
            <JasiriFellowGrid accent={accent} />

            {/* Connect: Application & Partner Intake Portal */}
            <JasiriApplicationPortal accent={accent} />

            {/* 5. Call to Action Footer Banner */}
            <JasiriCtaFooterBanner
              accent={accent}
              onPartnerClick={handlePartnerClick}
            />
          </>
        )}

        {currentPage === 'programs' && (
          <ProgramsPage
            accent={accent}
            onNavigateHome={() => setCurrentPage('home')}
            onNavigatePartner={() => setCurrentPage('partner')}
          />
        )}

        {currentPage === 'partner' && (
          <PartnerPage
            accent={accent}
            onNavigateHome={() => setCurrentPage('home')}
            onNavigatePrograms={() => setCurrentPage('programs')}
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
