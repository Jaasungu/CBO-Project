import React, { useState } from 'react';
import { AccentChoice } from '../../types/jasiri';
import {
  Sun,
  Moon,
  Sliders,
  Menu,
  X,
  Heart,
} from 'lucide-react';

export type CurrentPage = 'home' | 'programs' | 'partner';

interface JasiriNavbarProps {
  currentPage: CurrentPage;
  onNavigate: (page: CurrentPage) => void;
  accent: AccentChoice;
  onToggleAccent: (accent: AccentChoice) => void;
  isDark: boolean;
  onToggleDark: () => void;
  onOpenDesignSystem: () => void;
  onApplyClick: () => void;
  onDonateClick: () => void;
  useDummyLogo?: boolean;
  onToggleDummyLogo?: () => void;
}

export const JasiriNavbar: React.FC<JasiriNavbarProps> = ({
  currentPage,
  onNavigate,
  accent,
  onToggleAccent,
  isDark,
  onToggleDark,
  onOpenDesignSystem,
  onApplyClick,
  onDonateClick,
  useDummyLogo = true,
  onToggleDummyLogo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const accentBtnStyle =
    accent === 'teal'
      ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-teal-900/25'
      : 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-fuchsia-900/25';

  const accentFocusRing =
    accent === 'teal'
      ? 'focus-visible:ring-teal-500 focus-visible:ring-2'
      : 'focus-visible:ring-fuchsia-500 focus-visible:ring-2';

  const scrollToAnchor = (id: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#070D1E]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Dummy Logo (Far Left) */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white rounded-xl p-1 text-left"
            aria-label="Homepage"
          >
            {useDummyLogo ? (
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-xl bg-slate-950 dark:bg-white flex items-center justify-center shadow-md overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white dark:text-slate-950"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3.5"
                      className={accent === 'teal' ? 'fill-teal-400' : 'fill-fuchsia-400'}
                    />
                    <path
                      d="M12 2V12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-white/60 dark:text-slate-950/60"
                    />
                  </svg>
                </div>

                <div className="flex flex-col leading-none">
                  <span className="text-lg font-black tracking-widest uppercase font-display-jakarta text-slate-950 dark:text-white">
                    LOGO
                  </span>
                  <span className="text-[9px] font-mono tracking-wider text-slate-400 dark:text-slate-500 uppercase mt-0.5">
                    YOUR LOGO HERE
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 dark:bg-white inline-block"></span>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 dark:text-white whitespace-nowrap font-display-jakarta">
                  Jasiri Kenya
                </span>
              </div>
            )}
          </button>
        </div>

        {/* Right: Unified Navigation & DONATE Cluster (Much closer to DONATE than to the logo) */}
        <div className="flex items-center justify-end gap-5 lg:gap-6 ml-auto">
          {/* Navigation Links directly adjacent to DONATE */}
          <nav
            className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-semibold text-slate-700 dark:text-slate-300 font-display-jakarta"
            aria-label="Homepage Navigation"
          >
            {/* 1. About Us */}
            <button
              type="button"
              onClick={() => scrollToAnchor('about')}
              className={`transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none ${accentFocusRing} rounded hover:text-slate-950 dark:hover:text-white`}
            >
              About Us
            </button>

            {/* 2. Who We Are */}
            <button
              type="button"
              onClick={() => scrollToAnchor('fellows')}
              className={`transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none ${accentFocusRing} rounded hover:text-slate-950 dark:hover:text-white`}
            >
              Who We Are
            </button>

            {/* 3. Our Programs */}
            <button
              type="button"
              onClick={() => {
                onNavigate('programs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none ${accentFocusRing} rounded hover:text-slate-950 dark:hover:text-white ${
                currentPage === 'programs'
                  ? 'text-slate-950 dark:text-white font-extrabold underline underline-offset-4'
                  : ''
              }`}
            >
              Our Programs
            </button>

            {/* 4. Connect */}
            <button
              type="button"
              onClick={() => scrollToAnchor('apply')}
              className={`transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none ${accentFocusRing} rounded hover:text-slate-950 dark:hover:text-white`}
            >
              Connect
            </button>
          </nav>

          {/* Primary Action Button: DONATE (Immediately after Connect) */}
          <button
            type="button"
            onClick={onDonateClick}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-extrabold tracking-wider uppercase rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 font-display-jakarta cursor-pointer hover:scale-[1.02] ${accentBtnStyle}`}
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>DONATE</span>
          </button>

          {/* Theme & Design Utilities */}
          <div className="flex items-center gap-1.5 shrink-0 pl-1 border-l border-slate-200 dark:border-slate-800">
            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={onToggleDark}
              aria-label="Toggle dark mode"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Design System Spec Viewer Button */}
            <button
              type="button"
              onClick={onOpenDesignSystem}
              className="hidden lg:inline-flex items-center gap-1.5 p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Design System Specs"
            >
              <Sliders className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070D1E] px-6 py-6 space-y-4"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Logo Option Switcher on Mobile */}
          {onToggleDummyLogo && (
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-500">Logo Display:</span>
              <button
                type="button"
                onClick={onToggleDummyLogo}
                className="px-3 py-1 rounded-md border border-slate-300 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {useDummyLogo ? 'Show "Jasiri Kenya"' : 'Show Dummy "LOGO"'}
              </button>
            </div>
          )}

          {/* Mobile Palette Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-500">Accent Color:</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onToggleAccent('teal')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer ${
                  accent === 'teal' ? 'bg-teal-600 text-white' : 'bg-slate-100 dark:bg-slate-800'
                }`}
              >
                Teal
              </button>
              <button
                type="button"
                onClick={() => onToggleAccent('magenta')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer ${
                  accent === 'magenta' ? 'bg-fuchsia-600 text-white' : 'bg-slate-100 dark:bg-slate-800'
                }`}
              >
                Magenta
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              scrollToAnchor('about');
            }}
            className="block w-full text-left text-base font-bold text-slate-900 dark:text-white py-2 min-h-[44px]"
          >
            About Us
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              scrollToAnchor('fellows');
            }}
            className="block w-full text-left text-base font-bold text-slate-900 dark:text-white py-2 min-h-[44px]"
          >
            Who We Are
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('programs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left text-base font-bold text-slate-900 dark:text-white py-2 min-h-[44px]"
          >
            Our Programs
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              scrollToAnchor('apply');
            }}
            className="block w-full text-left text-base font-bold text-slate-900 dark:text-white py-2 min-h-[44px]"
          >
            Connect
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDesignSystem();
            }}
            className="block w-full text-left text-sm font-semibold text-slate-600 dark:text-slate-400 py-2 min-h-[44px]"
          >
            Inspect Design System Tokens
          </button>

          {/* Mobile DONATE CTA */}
          <div className="pt-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onDonateClick();
              }}
              className={`w-full py-3.5 text-xs font-extrabold tracking-wider uppercase rounded-xl text-center min-h-[44px] cursor-pointer flex items-center justify-center gap-2 ${accentBtnStyle}`}
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>DONATE</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
