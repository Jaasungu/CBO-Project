import React, { useState } from 'react';
import { AccentChoice, FellowStory } from '../../types/jasiri';
import { FELLOW_STORIES } from '../../data/jasiriData';
import { ArrowUpRight, X, Quote, MapPin } from 'lucide-react';

interface JasiriFellowGridProps {
  accent: AccentChoice;
}

export const JasiriFellowGrid: React.FC<JasiriFellowGridProps> = ({ accent }) => {
  const [activeStory, setActiveStory] = useState<FellowStory | null>(null);

  const accentTextStyle =
    accent === 'teal'
      ? 'text-teal-600 dark:text-teal-400'
      : 'text-fuchsia-600 dark:text-fuchsia-400';

  const accentBgStyle =
    accent === 'teal'
      ? 'bg-teal-600 text-white hover:bg-teal-700'
      : 'bg-fuchsia-600 text-white hover:bg-fuchsia-700';

  return (
    <section id="fellows" className="py-24 bg-slate-100/60 dark:bg-[#070D1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
              <span>03</span>
              <span>/</span>
              <span>FELLOW DIRECTORY & PROFILES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight font-display-jakarta">
              Real voices, proven careers, and regional leadership
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 font-body-sans">
              Our fellows are architecting distributed platforms, transforming rural agriculture, and founding scalable African technology companies.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-3 py-1.5 rounded-lg self-start md:self-auto">
            PHOTOGRAPHY: NAIROBI · NAKURU · ELDORET · KISUMU
          </div>
        </div>

        {/* Large Professional Photography Grid (Prompt 1 requirement) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FELLOW_STORIES.map((fellow) => (
            <div
              key={fellow.id}
              onClick={() => setActiveStory(fellow)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-[#0B142B] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-sm flex flex-col justify-between"
            >
              {/* Large High-Res Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src={fellow.imageUrl}
                  alt={`${fellow.name} - ${fellow.role} in Kenya`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
                {/* Clean Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Corner Expand Indicator */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Location on image */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-mono text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-slate-300" />
                  <span>{fellow.location}</span>
                </div>
              </div>

              {/* Fellow Narrative Details */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-display-jakarta font-semibold">
                    <span>{fellow.program}</span>
                    <span aria-hidden="true">·</span>
                    <span>{fellow.cohort}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors font-display-jakarta">
                    {fellow.name}
                  </h3>

                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1 mb-4">
                    {fellow.role}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic line-clamp-3 font-body-sans">
                    "{fellow.quote}"
                  </p>
                </div>

                {/* Quantified Career Outcome */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Cohort Milestone
                  </span>
                  <span className={`text-xs font-bold font-mono-code tabular-nums ${accentTextStyle}`}>
                    {fellow.outcomeMetric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Profile Modal */}
      {activeStory && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-[#0B142B] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-slate-900">
              <img
                src={activeStory.imageUrl}
                alt={activeStory.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                <span>{activeStory.program}</span>
                <span aria-hidden="true">·</span>
                <span>{activeStory.location}</span>
                <span aria-hidden="true">·</span>
                <span>{activeStory.cohort}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white font-display-jakarta">
                {activeStory.name}
              </h3>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1 mb-4">
                {activeStory.role}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 mb-4">
                <Quote className="w-4 h-4 text-slate-400 mb-1" />
                <p className="text-sm italic text-slate-800 dark:text-slate-200 leading-relaxed font-body-sans">
                  "{activeStory.quote}"
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-body-sans">
                {activeStory.fullBio}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-mono text-slate-500">
                  VERIFIED OUTCOME: <span className={`font-bold ${accentTextStyle}`}>{activeStory.outcomeMetric}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveStory(null)}
                  className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
