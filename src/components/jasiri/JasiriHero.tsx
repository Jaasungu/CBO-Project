import React from 'react';
import { AccentChoice } from '../../types/jasiri';
import { ArrowRight, Handshake, ShieldCheck, MapPin } from 'lucide-react';

interface JasiriHeroProps {
  accent: AccentChoice;
  onApplyClick: () => void;
  onPartnerClick: () => void;
}

export const JasiriHero: React.FC<JasiriHeroProps> = ({
  accent,
  onApplyClick,
  onPartnerClick,
}) => {
  const accentBtnStyle =
    accent === 'teal'
      ? 'bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold shadow-lg shadow-teal-500/20'
      : 'bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-extrabold shadow-lg shadow-fuchsia-500/20';

  return (
    <section className="relative w-full min-h-[calc(100svh-11.5rem)] flex items-center justify-center overflow-hidden bg-[#0A1226] text-white">
      {/* 1. Full-Width Background Photographic Layout (Prompt 2 requirement) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/src/assets/images/kenya_women_tech_fellows_1793635888834.jpg"
          alt="Young Kenyan women software engineers and fellows collaborating in a modern Nairobi innovation hub"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured High-Contrast Contrast Scrim for WCAG AA compliance */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D1E]/95 via-[#070D1E]/88 to-[#070D1E]/70 lg:to-[#070D1E]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-transparent to-[#070D1E]/40"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 sm:py-10 lg:py-12 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          {/* SheRise tagline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-white leading-[1.08] font-display-jakarta text-balance"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.1rem)' }}
          >
            Nurturing Health. Empowering Communities.
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-body-sans font-normal">
            We connect communities to reliable health information, essential support, education, and social welfare—so people can shape their well-being and build healthier, more resilient futures.
          </p>

          {/* Calls to action */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={onApplyClick}
              className={`inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 text-xs sm:text-sm font-extrabold rounded-xl transition-all whitespace-nowrap shrink-0 group font-display-jakarta cursor-pointer ${accentBtnStyle}`}
            >
              <span>Get Involved</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={onPartnerClick}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all whitespace-nowrap shrink-0 font-display-jakarta cursor-pointer hover:border-white/50"
            >
              <Handshake className="w-4 h-4 text-slate-300" />
              <span>Partner With Us</span>
            </button>
          </div>

          {/* Institutional Trust Markers */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] sm:text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Trusted health information & support</span>
            </div>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>Community-led solutions</span>
            </div>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Health · Education · Social welfare</span>
          </div>
        </div>
      </div>
    </section>
  );
};
