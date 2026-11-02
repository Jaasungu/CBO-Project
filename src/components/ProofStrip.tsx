import React from 'react';
import { WebsiteConfig } from '../types/site';

interface ProofStripProps {
  config: WebsiteConfig;
}

export const ProofStrip: React.FC<ProofStripProps> = ({ config }) => {
  return (
    <section id="results" className="py-12 bg-white dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 dark:divide-neutral-800/80">
          {config.proofStrip.map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col justify-center ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tabular-nums tracking-tight font-mono-code">
                {item.stat}
              </div>
              <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                {item.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
