import React from 'react';
import { WebsiteConfig, ColorTheme, FontPair, TEMPLATES } from '../types/site';
import { X, RotateCcw, Palette, Type, Layout, Edit3 } from 'lucide-react';

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: WebsiteConfig;
  onChangeConfig: (newConfig: WebsiteConfig) => void;
  onResetTemplate: () => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onChangeConfig,
  onResetTemplate,
}) => {
  if (!isOpen) return null;

  const handleUpdate = <K extends keyof WebsiteConfig>(key: K, value: WebsiteConfig[K]) => {
    onChangeConfig({
      ...config,
      [key]: value,
    });
  };

  const handleSectionToggle = (sectionKey: keyof WebsiteConfig['sectionsVisible']) => {
    onChangeConfig({
      ...config,
      sectionsVisible: {
        ...config.sectionsVisible,
        [sectionKey]: !config.sectionsVisible[sectionKey],
      },
    });
  };

  const colors: { id: ColorTheme; label: string; swatch: string }[] = [
    { id: 'indigo', label: 'Cobalt Blue', swatch: 'bg-blue-600' },
    { id: 'slate', label: 'Obsidian Slate', swatch: 'bg-neutral-900' },
    { id: 'emerald', label: 'Forest Green', swatch: 'bg-emerald-600' },
    { id: 'amber', label: 'Warm Amber', swatch: 'bg-amber-600' },
  ];

  const fontPairs: { id: FontPair; label: string; sample: string }[] = [
    { id: 'modern-sans', label: 'Plus Jakarta + DM Sans', sample: 'Modern Agency & Product' },
    { id: 'geometric', label: 'Outfit + DM Sans', sample: 'Clean Tech & Systems' },
    { id: 'editorial-serif', label: 'Playfair Display + Sans', sample: 'Artisanal & Editorial' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 h-full overflow-y-auto p-6 shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Customize Website
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Live changes update instantly in the preview
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Color Palette */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-3">
              <Palette className="w-4 h-4" />
              <span>Accent Theme</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {colors.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() =>
                    handleUpdate('theme', { ...config.theme, color: c.id })
                  }
                  className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs font-semibold transition-all ${
                    config.theme.color === c.id
                      ? 'border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800/80 shadow-xs'
                      : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/40 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full ${c.swatch} shrink-0`}></span>
                  <span className="truncate">{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Typography Pairing */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-3">
              <Type className="w-4 h-4" />
              <span>Typography Pairing</span>
            </div>
            <div className="space-y-2">
              {fontPairs.map((fp) => (
                <button
                  key={fp.id}
                  type="button"
                  onClick={() =>
                    handleUpdate('theme', { ...config.theme, fontPair: fp.id })
                  }
                  className={`w-full text-left p-3 rounded-lg border text-xs transition-all ${
                    config.theme.fontPair === fp.id
                      ? 'border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800 shadow-xs'
                      : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/40'
                  }`}
                >
                  <div className="font-bold text-neutral-900 dark:text-white">
                    {fp.label}
                  </div>
                  <div className="text-neutral-500 dark:text-neutral-400 text-[11px] mt-0.5">
                    {fp.sample}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Brand Identity Fields */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-3">
              <Edit3 className="w-4 h-4" />
              <span>Brand & Headlines</span>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-neutral-500 mb-1">
                  Brand Wordmark
                </label>
                <input
                  type="text"
                  value={config.brandName}
                  onChange={(e) => handleUpdate('brandName', e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-500 mb-1">
                  Hero Headline
                </label>
                <textarea
                  rows={2}
                  value={config.hero.title}
                  onChange={(e) =>
                    handleUpdate('hero', { ...config.hero, title: e.target.value })
                  }
                  className="w-full px-3 py-2 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-500 mb-1">
                  Hero Subhead
                </label>
                <textarea
                  rows={3}
                  value={config.hero.subhead}
                  onChange={(e) =>
                    handleUpdate('hero', { ...config.hero, subhead: e.target.value })
                  }
                  className="w-full px-3 py-2 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-500 mb-1">
                    Primary CTA Text
                  </label>
                  <input
                    type="text"
                    value={config.hero.primaryCtaText}
                    onChange={(e) =>
                      handleUpdate('hero', {
                        ...config.hero,
                        primaryCtaText: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-500 mb-1">
                    Secondary CTA Text
                  </label>
                  <input
                    type="text"
                    value={config.hero.secondaryCtaText}
                    onChange={(e) =>
                      handleUpdate('hero', {
                        ...config.hero,
                        secondaryCtaText: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section Visibility Toggles */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-3">
              <Layout className="w-4 h-4" />
              <span>Visible Sections</span>
            </div>
            <div className="space-y-2">
              {[
                { key: 'hero', label: 'Hero Header' },
                { key: 'proof', label: 'Proof / Metric Strip' },
                { key: 'capabilities', label: 'Capabilities Bento Grid' },
                { key: 'caseStudies', label: 'Work & Case Studies' },
                { key: 'pricing', label: 'Pricing & Packages' },
                { key: 'testimonials', label: 'Client Testimonials' },
                { key: 'contact', label: 'Inquiry & Booking Form' },
              ].map(({ key, label }) => {
                const k = key as keyof WebsiteConfig['sectionsVisible'];
                const isChecked = config.sectionsVisible[k];
                return (
                  <label
                    key={key}
                    className="flex items-center justify-between p-2 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer text-xs"
                  >
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      {label}
                    </span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleSectionToggle(k)}
                      className="w-4 h-4 rounded text-blue-600 focus:ring-0 cursor-pointer"
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onResetTemplate}
            className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Template</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
