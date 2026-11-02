import React, { useState } from 'react';
import { WebsiteConfig } from '../types/site';
import { getThemeClasses } from '../utils/theme';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  config: WebsiteConfig;
  isDark: boolean;
  onToggleDark: () => void;
  onCtaClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  isDark,
  onToggleDark,
  onCtaClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = getThemeClasses(config.theme.color);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face, no pills or subtitles) */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
        >
          {config.brandName}
        </a>

        {/* Zone 2: Navigation Links (4-5 single-line clean text links) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {config.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neutral-900 dark:after:bg-white hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Theme Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            onClick={onCtaClick}
            className={`hidden sm:inline-flex px-4 py-2 text-xs font-semibold rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 ${theme.accentBg}`}
          >
            {config.primaryCtaLabel}
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-6 py-4 space-y-3">
          {config.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onCtaClick) onCtaClick();
              }}
              className={`block text-center w-full px-4 py-2 text-xs font-semibold rounded-lg ${theme.accentBg}`}
            >
              {config.primaryCtaLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
