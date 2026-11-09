import React, { useState } from 'react';
import { AccentChoice } from '../../types/jasiri';
import herRiseLogo from '../../assets/images/herrise-logo.svg';
import {
  Sun,
  Moon,
  Sliders,
  Menu,
  X,
  Heart,
  ChevronDown,
} from 'lucide-react';

export type CurrentPage =
  | 'home'
  | 'programs'
  | 'partner'
  | 'our-story'
  | 'issue'
  | 'approach'
  | 'who-we-are';

const aboutPages: { page: CurrentPage; label: string }[] = [
  { page: 'our-story', label: 'Our Story' },
  { page: 'issue', label: 'The Issue We Address' },
  { page: 'approach', label: 'Our Approach' },
];

interface JasiriNavbarProps {
  currentPage: CurrentPage;
  onNavigate: (page: CurrentPage) => void;
  accent: AccentChoice;
  onToggleAccent: (accent: AccentChoice) => void;
  isDark: boolean;
  onToggleDark: () => void;
  onOpenDesignSystem: () => void;
  onDonateClick: () => void;
  useTextLogo?: boolean;
  onToggleLogo?: () => void;
}

export const JasiriNavbar: React.FC<JasiriNavbarProps> = ({
  currentPage,
  onNavigate,
  accent,
  onToggleAccent,
  isDark,
  onToggleDark,
  onOpenDesignSystem,
  onDonateClick,
  useTextLogo = false,
  onToggleLogo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);

  const accentBtnStyle =
    accent === 'teal'
      ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-teal-900/25'
      : 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-fuchsia-900/25';

  const accentFocusRing =
    accent === 'teal'
      ? 'focus-visible:ring-teal-500 focus-visible:ring-2'
      : 'focus-visible:ring-fuchsia-500 focus-visible:ring-2';

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#070D1E]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Foundation Logo */}
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
            {useTextLogo ? (
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 dark:bg-white inline-block"></span>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 dark:text-white whitespace-nowrap font-display-jakarta">
                  HerRise
                </span>
              </div>
            ) : (
              <span className="flex flex-col items-center leading-none">
                <img src={herRiseLogo} alt="" aria-hidden="true" className="h-10 w-12 object-contain" />
                <span className="font-display-jakarta text-lg font-bold tracking-tight text-[#2D1155] dark:text-white">
                  HerRise
                </span>
              </span>
            )}
          </button>
        </div>

        {/* Right: Unified Navigation & DONATE Cluster (Much closer to DONATE than to the logo) */}
        <div className="flex items-center justify-end gap-2 md:gap-5 lg:gap-6 ml-auto">
          {/* Navigation Links directly adjacent to DONATE */}
          <nav
            className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-semibold text-slate-700 dark:text-slate-300 font-display-jakarta"
            aria-label="Homepage Navigation"
          >
            <div
              className="relative"
              onMouseEnter={() => setDesktopAboutOpen(true)}
              onMouseLeave={() => setDesktopAboutOpen(false)}
              onFocus={() => setDesktopAboutOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setDesktopAboutOpen(false);
                }
              }}
            >
              <button
                type="button"
                onClick={() => setDesktopAboutOpen(true)}
                aria-haspopup="true"
                aria-expanded={desktopAboutOpen}
                className={`inline-flex items-center gap-1 transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none ${accentFocusRing} rounded hover:text-slate-950 dark:hover:text-white`}
              >
                About Us
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${desktopAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                aria-hidden={!desktopAboutOpen}
                inert={!desktopAboutOpen}
                className={`absolute left-0 top-full min-w-56 pt-2 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                  desktopAboutOpen
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0'
                }`}
              >
                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-[#0B142B]">
                  {aboutPages.map(({ page, label }) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => {
                        setDesktopAboutOpen(false);
                        onNavigate(page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="block w-full rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Who We Are */}
            <button
              type="button"
              onClick={() => {
                onNavigate('who-we-are');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none ${accentFocusRing} rounded hover:text-slate-950 dark:hover:text-white ${
                currentPage === 'who-we-are'
                  ? 'text-slate-950 dark:text-white font-extrabold underline underline-offset-4'
                  : ''
              }`}
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
              onClick={() => {
                onNavigate('partner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none ${accentFocusRing} rounded hover:text-slate-950 dark:hover:text-white`}
            >
              Connect
            </button>
          </nav>

          {/* Primary Action Button: DONATE (Immediately after Connect) */}
          <button
            type="button"
            onClick={onDonateClick}
            className={`order-1 inline-flex items-center gap-2 px-4 py-2.5 text-xs font-extrabold tracking-wider uppercase rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 font-display-jakarta cursor-pointer hover:scale-[1.02] md:order-none md:px-5 ${accentBtnStyle}`}
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>DONATE</span>
          </button>

          {/* Theme & Design Utilities */}
          <div className="hidden md:flex items-center gap-1.5 shrink-0 pl-1 border-l border-slate-200 dark:border-slate-800">
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
            className="order-2 md:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white min-h-[44px] min-w-[44px] flex items-center justify-center"
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
          {onToggleLogo && (
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-500">Logo Display:</span>
              <button
                type="button"
                onClick={onToggleLogo}
                className="px-3 py-1 rounded-md border border-slate-300 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {useTextLogo ? 'Show HerRise Logo' : 'Show Text Mark'}
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={onToggleDark}
            className="flex w-full items-center justify-between border-b border-slate-100 pb-3 text-left text-xs font-bold text-slate-700 dark:border-slate-800 dark:text-slate-300"
            aria-label="Toggle dark mode"
          >
            <span>{isDark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

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
          <div className="border-b border-slate-100 pb-2 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              aria-expanded={mobileAboutOpen}
              className="flex w-full items-center justify-between text-left text-base font-bold text-slate-900 dark:text-white py-2 min-h-[44px]"
            >
              About Us
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              aria-hidden={!mobileAboutOpen}
              inert={!mobileAboutOpen}
              className={`overflow-hidden pl-4 transition-[max-height,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                mobileAboutOpen
                  ? 'max-h-48 opacity-100'
                  : 'pointer-events-none max-h-0 opacity-0'
              }`}
            >
              {aboutPages.map(({ page, label }) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => {
                    setMobileAboutOpen(false);
                    onNavigate(page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.setTimeout(() => setMobileMenuOpen(false), 250);
                  }}
                  className="block w-full text-left text-sm text-slate-600 dark:text-slate-300 py-2.5 min-h-[44px]"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('who-we-are');
              window.scrollTo({ top: 0, behavior: 'smooth' });
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
              onNavigate('partner');
              window.scrollTo({ top: 0, behavior: 'smooth' });
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
