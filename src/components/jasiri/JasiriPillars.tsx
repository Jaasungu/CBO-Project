import React from 'react';
import { AccentChoice } from '../../types/jasiri';
import { STRATEGIC_PILLARS } from '../../data/jasiriData';
import { Check } from 'lucide-react';

interface JasiriPillarsProps {
  accent: AccentChoice;
}

export const JasiriPillars: React.FC<JasiriPillarsProps> = ({ accent }) => {
  const accentTextStyle =
    accent === 'teal'
      ? 'text-teal-600 dark:text-teal-400'
      : 'text-fuchsia-600 dark:text-fuchsia-400';

  const accentPillStyle =
    accent === 'teal'
      ? 'bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border-teal-200/60 dark:border-teal-800/60'
      : 'bg-fuchsia-50 dark:bg-fuchsia-950/40 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-200/60 dark:border-fuchsia-800/60';

  return (
    <section id="pillars" className="py-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070D1E] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            <span>02</span>
            <span>/</span>
            <span>STRATEGIC IMPACT PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight font-display-jakarta">
            Comprehensive pipelines engineered for durable economic autonomy
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-body-sans">
            Our curriculum was developed in partnership with top African enterprises, tech institutions, and agricultural cooperatives to ensure direct employability and venture viability.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {STRATEGIC_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-[#0B142B] border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <span className="font-mono text-sm font-bold text-slate-400 dark:text-slate-500">
                    {pillar.number}.
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {pillar.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white mt-5 mb-3 font-display-jakarta">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body-sans mb-6">
                  {pillar.description}
                </p>

                {/* Focus Areas List */}
                <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                    Core Technical Curricula
                  </span>
                  {pillar.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <Check className={`w-3.5 h-3.5 shrink-0 ${accentTextStyle}`} />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Callout */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-baseline justify-between gap-4">
                <div>
                  <span className={`text-2xl sm:text-3xl font-black tabular-nums font-mono-code ${accentTextStyle}`}>
                    {pillar.keyMetric}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {pillar.keyMetricLabel}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
