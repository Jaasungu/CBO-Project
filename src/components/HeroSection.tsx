import React from 'react';
import { WebsiteConfig } from '../types/site';
import { getThemeClasses } from '../utils/theme';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  config: WebsiteConfig;
  onExploreWork?: () => void;
  onScheduleCall?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  onExploreWork,
  onScheduleCall,
}) => {
  const theme = getThemeClasses(config.theme.color);

  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-neutral-200 dark:border-neutral-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
              <span>{config.templateName.split('(')[0].trim()}</span>
              <span aria-hidden="true">·</span>
              <span>2026 Production Standard</span>
            </div>

            {/* Display Headline with text-balance and clamp scale */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)' }}
            >
              {config.hero.title}
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
              {config.hero.subhead}
            </p>

            {/* Action Buttons (Strictly single-line labels) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={onScheduleCall}
                className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 group ${theme.accentBg}`}
              >
                <span>{config.hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#work"
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0"
              >
                <span>{config.hero.secondaryCtaText}</span>
              </a>
            </div>

            {/* Micro-guarantee text */}
            <div className="pt-2 text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
              <span>Guaranteed response within 24 hours</span>
              <span aria-hidden="true">·</span>
              <span>Fixed-bid transparency</span>
              <span aria-hidden="true">·</span>
              <span>Zero retainage lock-in</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Visual Anchor */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 shadow-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center min-h-[340px] lg:min-h-[460px]">
              <img
                src={config.hero.imageUrl}
                alt={config.hero.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                onError={(e) => {
                  // Fallback container in case of error
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('bg-gradient-to-br', 'from-neutral-800', 'to-neutral-950', 'p-8', 'text-white');
                    const fallback = document.createElement('div');
                    fallback.className = 'text-center space-y-2';
                    fallback.innerHTML = `<span class="text-xs uppercase tracking-widest text-neutral-400 font-mono">Visual Monograph</span><h4 class="text-xl font-bold">${config.brandName} Studio</h4>`;
                    parent.appendChild(fallback);
                  }
                }}
              />

              {/* Discreet photo attribution tag in bottom corner */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-[11px] font-mono text-white/90">
                Studio Monograph · 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
