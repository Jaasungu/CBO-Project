import React, { useState } from 'react';
import { WebsiteConfig, CaseStudyItem } from '../types/site';
import { getThemeClasses } from '../utils/theme';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';

interface CaseStudiesSectionProps {
  config: WebsiteConfig;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ config }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudyItem | null>(null);
  const theme = getThemeClasses(config.theme.color);

  const categories = ['All', 'Strategy', 'Digital', 'Brand', 'Systems'] as const;

  const filteredStudies = selectedCategory === 'All'
    ? config.caseStudies.items
    : config.caseStudies.items.filter((item) => item.category === selectedCategory);

  return (
    <section id="work" className="py-24 bg-neutral-100/60 dark:bg-neutral-900/40 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Segmented Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
              {config.caseStudies.sectionKicker}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {config.caseStudies.sectionTitle}
            </h2>
          </div>

          {/* Interactive Filter Tabs (Segmented controls - functional buttons, not static pills) */}
          <div className="inline-flex items-center gap-1 p-1 bg-neutral-200/80 dark:bg-neutral-800 rounded-lg shrink-0 self-start md:self-auto">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? config.caseStudies.items.length
                : config.caseStudies.items.filter(i => i.category === cat).length;
              if (count === 0 && cat !== 'All') return null;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setActiveModalStudy(study)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-sm flex flex-col justify-between"
            >
              {study.imageUrl && (
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              )}

              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                    <span className="font-semibold text-neutral-700 dark:text-neutral-300">{study.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.timeline}</span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Quantified Business Outcome */}
                <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
                    Measurable Result
                  </span>
                  <span className={`text-sm font-bold tabular-nums font-mono-code ${theme.accentText}`}>
                    {study.outcome}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {activeModalStudy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setActiveModalStudy(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {activeModalStudy.imageUrl && (
              <div className="relative aspect-[16/9] w-full bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={activeModalStudy.imageUrl}
                  alt={activeModalStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                    <span className="font-semibold text-neutral-700 dark:text-neutral-200">{activeModalStudy.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeModalStudy.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeModalStudy.timeline}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {activeModalStudy.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalStudy(null)}
                  className="p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="my-6 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
                <span className="text-xs uppercase font-semibold text-neutral-500 dark:text-neutral-400 block mb-1">
                  Key Business Outcome
                </span>
                <span className="text-xl font-bold text-neutral-900 dark:text-white tabular-nums font-mono-code">
                  {activeModalStudy.outcome}
                </span>
              </div>

              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-6">
                {activeModalStudy.description} Detailed technical breakdown includes architectural refactoring, component modularity, performance audits, and continuous conversion tracking over a 12-month baseline.
              </p>

              <div className="flex justify-end gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <button
                  type="button"
                  onClick={() => setActiveModalStudy(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  Close Case Study
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveModalStudy(null)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg ${theme.accentBg}`}
                >
                  Request Similar Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
