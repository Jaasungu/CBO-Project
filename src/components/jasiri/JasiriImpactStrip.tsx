import React from 'react';
import { AccentChoice } from '../../types/jasiri';

interface JasiriImpactStripProps {
  accent: AccentChoice;
}

export const JasiriImpactStrip: React.FC<JasiriImpactStripProps> = ({ accent }) => {
  const accentTextStyle =
    accent === 'teal'
      ? 'text-teal-500 dark:text-teal-400'
      : 'text-fuchsia-500 dark:text-fuchsia-400';

  const metrics = [
    {
      stat: '14,280+',
      label: 'Alumni Graduated',
      context: 'Across all 9 flagship cohorts since 2021',
      tag: 'VERIFIED ALUMNI',
    },
    {
      stat: '89.4%',
      label: 'Industry Retention Rate',
      context: 'Active in formal tech, software, & enterprise careers',
      tag: 'LONGITUDINAL EMPLOYMENT',
    },
    {
      stat: '120+',
      label: 'Corporate Partners',
      context: 'Hiring fellows & sponsoring decentralized labs',
      tag: 'EMPLOYER ECOSYSTEM',
    },
    {
      stat: '$5.8M+',
      label: 'Seed Capital Unlocked',
      context: 'Direct equity-free grants & pre-seed funding for ventures',
      tag: 'FINANCIAL ACCELERATION',
    },
  ];

  return (
    <section
      id="about"
      className="relative z-20 py-16 bg-[#070D1E] text-white border-b border-slate-800 transition-colors shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header Meta */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/80">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 inline-block"></span>
            <span>2. IMPACT & METRICS GRID · AUDITED 5-YEAR INSTITUTIONAL PROGRESS</span>
          </div>
          <div className="text-xs text-slate-400 font-mono hidden sm:block">
            INDEPENDENTLY VERIFIED BY KPMG EAST AFRICA
          </div>
        </div>

        {/* High-Contrast Grid with Large-Format Bold Numbers (Prompt 2 requirement) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 lg:divide-x divide-slate-800">
          {metrics.map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col justify-between ${idx > 0 ? 'pt-6 sm:pt-0 lg:pl-8' : ''}`}
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  {item.tag}
                </span>
                <div
                  className={`text-4xl sm:text-5xl lg:text-6xl font-black tabular-nums tracking-tight font-mono-code ${accentTextStyle}`}
                >
                  {item.stat}
                </div>
                <div className="text-base sm:text-lg font-bold text-white mt-2 font-display-jakarta">
                  {item.label}
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-body-sans">
                {item.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
