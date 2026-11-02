import React from 'react';
import { WebsiteConfig } from '../types/site';
import { Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  config: WebsiteConfig;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ config }) => {
  return (
    <section className="py-24 bg-white dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
            {config.testimonials.sectionKicker}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {config.testimonials.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-neutral-400 dark:text-neutral-500 mb-4 opacity-50" />
                <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {item.author}
                  </h4>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {item.role} · {item.organization}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs uppercase font-semibold text-neutral-400 dark:text-neutral-500 block">
                    Verified Outcome
                  </span>
                  <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 tabular-nums">
                    {item.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
