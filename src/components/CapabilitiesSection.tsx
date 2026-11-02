import React from 'react';
import { WebsiteConfig } from '../types/site';
import { getThemeClasses } from '../utils/theme';

interface CapabilitiesSectionProps {
  config: WebsiteConfig;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ config }) => {
  const theme = getThemeClasses(config.theme.color);

  return (
    <section id="capabilities" className="py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
            {config.capabilities.sectionKicker}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {config.capabilities.sectionTitle}
          </h2>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.capabilities.items.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/90 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between ${
                item.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-neutral-400 dark:text-neutral-500 tracking-wider">
                    {item.number}.
                  </span>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">Core Discipline</span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-4 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metric & Context at bottom of card */}
              <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex items-baseline justify-between gap-4">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tabular-nums tracking-tight font-mono-code">
                    {item.metric}
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {item.metricContext}
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
