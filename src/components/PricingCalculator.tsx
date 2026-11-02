import React, { useState } from 'react';
import { WebsiteConfig, PricingTier } from '../types/site';
import { getThemeClasses } from '../utils/theme';
import { Check, ArrowRight } from 'lucide-react';

interface PricingCalculatorProps {
  config: WebsiteConfig;
  onSelectTier?: (tier: PricingTier) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  config,
  onSelectTier,
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>(
    config.pricing.tiers.find((t) => t.isPopular)?.id || config.pricing.tiers[0]?.id
  );
  const [includeSupport, setIncludeSupport] = useState<boolean>(false);
  const theme = getThemeClasses(config.theme.color);

  return (
    <section id="pricing" className="py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
            {config.pricing.sectionKicker}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {config.pricing.sectionTitle}
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300 mt-4 leading-relaxed">
            {config.pricing.sectionSubhead}
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {config.pricing.tiers.map((tier) => {
            const isSelected = selectedTierId === tier.id;

            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`cursor-pointer rounded-2xl p-8 flex flex-col justify-between transition-all ${
                  tier.isPopular
                    ? 'bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white shadow-lg relative'
                    : 'bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-8 px-3 py-0.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-[11px] font-bold uppercase tracking-wider">
                    Recommended Format
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {tier.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 min-h-[36px]">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-neutral-900 dark:text-white tabular-nums tracking-tight font-mono-code">
                        {tier.price}
                      </span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                        {tier.period}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3">
                    <span className="text-xs uppercase font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 block mb-2">
                      Core Scope Included
                    </span>
                    {tier.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 leading-normal">
                        <Check className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-8 mt-8 border-t border-neutral-100 dark:border-neutral-800">
                  <a
                    href="#contact"
                    onClick={() => {
                      if (onSelectTier) onSelectTier(tier);
                    }}
                    className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg text-center transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 ${
                      tier.isPopular || isSelected
                        ? theme.accentBg
                        : 'border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
