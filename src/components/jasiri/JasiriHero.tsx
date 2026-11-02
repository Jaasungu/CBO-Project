import React from 'react';
import { AccentChoice } from '../../types/jasiri';
import { ArrowRight, Handshake, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

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

  const accentBadgeStyle =
    accent === 'teal'
      ? 'text-teal-400 border-teal-500/40 bg-teal-950/60'
      : 'text-fuchsia-400 border-fuchsia-500/40 bg-fuchsia-950/60';

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#0A1226] text-white border-b border-slate-800">
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

      {/* Subtle Geometric Coordinate Overlay */}
      <div className="absolute top-6 left-6 font-mono text-[11px] text-slate-400 select-none hidden lg:block tracking-widest z-10">
        [ SYSTEM: JASIRI EDUCATIONAL NON-PROFIT · NAIROBI · 18 COUNTIES ]
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[11px] text-slate-400 select-none hidden lg:block tracking-widest z-10">
        [ COHORT IX INTAKE OPEN · FULL TUITION SPONSORED ]
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Mission Indicator Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold font-mono border backdrop-blur-sm transition-colors border-slate-700 bg-slate-900/70 text-slate-200">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span>Empowering Young Women Across Kenya</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Class of 2026</span>
          </div>

          {/* Powerful, Mission-Driven Headline (Prompt 2 requirement) */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-white leading-[1.08] font-display-jakarta text-balance"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.1rem)' }}
          >
            Engineering pathways to leadership for Kenya’s next generation of women.
          </h1>

          {/* Short Subtitle Explaining What We Do (Prompt 2 requirement) */}
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-body-sans font-normal">
            Jasiri equips young women and underrepresented youth with full-stack software mastery, agri-tech innovation, and executive mentorship—accelerating career autonomy and unlocking sustainable community wealth.
          </p>

          {/* Two Primary Call-to-Action (CTA) Buttons: 'Apply Now' and 'Partner With Us' (Prompt 2 requirement) */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              onClick={onApplyClick}
              className={`inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-extrabold rounded-xl transition-all whitespace-nowrap shrink-0 group font-display-jakarta cursor-pointer ${accentBtnStyle}`}
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={onPartnerClick}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all whitespace-nowrap shrink-0 font-display-jakarta cursor-pointer hover:border-white/50"
            >
              <Handshake className="w-4 h-4 text-slate-300" />
              <span>Partner With Us</span>
            </button>
          </div>

          {/* Institutional Trust Markers */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>100% Equity-Free & Sponsored</span>
            </div>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>Nairobi Central Campus & 24 County Hubs</span>
            </div>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Audited Annual Impact Reports</span>
          </div>
        </div>
      </div>
    </section>
  );
};
