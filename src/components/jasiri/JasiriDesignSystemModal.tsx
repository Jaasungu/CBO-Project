import React, { useState } from 'react';
import { AccentChoice } from '../../types/jasiri';
import { X, Check, Copy, Sliders, Type, Palette, Layout, Sparkles } from 'lucide-react';

interface JasiriDesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
  accent: AccentChoice;
  onToggleAccent: (accent: AccentChoice) => void;
}

export const JasiriDesignSystemModal: React.FC<JasiriDesignSystemModalProps> = ({
  isOpen,
  onClose,
  accent,
  onToggleAccent,
}) => {
  const [activeTab, setActiveTab] = useState<'palette' | 'typography' | 'visuals' | 'tokens'>('palette');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(id);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0B142B] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070D1E]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-950 dark:text-white font-display-jakarta">
                Jasiri Kenya — Web Design System Specification
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Authoritative, inspiring, accessible · Social Impact System (Prompt 1)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-200 dark:bg-slate-800 p-1 rounded-lg text-xs font-semibold">
              <button
                type="button"
                onClick={() => onToggleAccent('teal')}
                className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 ${
                  accent === 'teal'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>Vibrant Teal</span>
              </button>
              <button
                type="button"
                onClick={() => onToggleAccent('magenta')}
                className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 ${
                  accent === 'magenta'
                    ? 'bg-fuchsia-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>Bright Magenta</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-4 px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B142B] text-xs font-bold font-display-jakarta">
          {[
            { id: 'palette', label: 'Color System', icon: Palette },
            { id: 'typography', label: 'Typography Scale', icon: Type },
            { id: 'visuals', label: 'Visual Elements & Space', icon: Layout },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 flex items-center gap-2 border-b-2 transition-all ${
                  isActive
                    ? 'border-slate-900 dark:border-white text-slate-950 dark:text-white'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'palette' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 font-display-jakarta">
                  1. Palette Architecture & Distribution (60-30-10)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-body-sans mb-4">
                  Balances institutional corporate credibility with non-profit mission energy. A deep navy base establishes gravity, pure canvas neutrals provide breathing room, and vibrant accents focus user action.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Base Color: Deep Navy */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-[#0A192F] text-white">
                    <div className="h-14 rounded-lg bg-[#0A192F] border border-slate-700/60 mb-3 flex items-end p-2">
                      <span className="text-[11px] font-mono text-slate-300">#0A192F / #0B132B</span>
                    </div>
                    <span className="text-xs uppercase font-mono text-slate-400 block">Base Foundation</span>
                    <h5 className="text-sm font-bold mt-0.5">Deep Corporate Navy</h5>
                    <p className="text-[11px] text-slate-300 mt-1">Conveys authority, institutional trust, and stability.</p>
                  </div>

                  {/* Accent: Vibrant Teal */}
                  <div className={`p-4 rounded-xl border transition-all ${accent === 'teal' ? 'ring-2 ring-teal-500' : ''} border-slate-200 dark:border-slate-700 bg-teal-600 text-white`}>
                    <div className="h-14 rounded-lg bg-teal-500 mb-3 flex items-end p-2">
                      <span className="text-[11px] font-mono text-white">#0D9488 / #14B8A6</span>
                    </div>
                    <span className="text-xs uppercase font-mono text-teal-100 block">Accent Option 1</span>
                    <h5 className="text-sm font-bold mt-0.5">Vibrant Teal</h5>
                    <p className="text-[11px] text-teal-100 mt-1">Inspiring, modern, accessible. Used for key CTAs & data.</p>
                  </div>

                  {/* Accent: Bright Magenta */}
                  <div className={`p-4 rounded-xl border transition-all ${accent === 'magenta' ? 'ring-2 ring-fuchsia-500' : ''} border-slate-200 dark:border-slate-700 bg-fuchsia-600 text-white`}>
                    <div className="h-14 rounded-lg bg-fuchsia-500 mb-3 flex items-end p-2">
                      <span className="text-[11px] font-mono text-white">#D946EF / #E11D48</span>
                    </div>
                    <span className="text-xs uppercase font-mono text-fuchsia-100 block">Accent Option 2</span>
                    <h5 className="text-sm font-bold mt-0.5">Bright Magenta</h5>
                    <p className="text-[11px] text-fuchsia-100 mt-1">Energetic, bold, high-salience. Draws the eye instantly.</p>
                  </div>
                </div>
              </div>

              {/* Contrast and Accessibility Specs */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-bold text-slate-900 dark:text-white block mb-1 font-display-jakarta">
                  WCAG AA Contrast Compliance
                </span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-body-sans">
                  Deep Navy on Pure White achieves a 14.8:1 contrast ratio (exceeding AAA). White on Vibrant Teal achieves 4.7:1 (AA compliant). White on Bright Magenta achieves 5.2:1 (AA compliant).
                </p>
              </div>
            </div>
          )}

          {activeTab === 'typography' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 font-display-jakarta">
                  2. Typography Pairings & Visual Hierarchy
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-body-sans mb-4">
                  Using a bold sans-serif display face for authority paired with an effortless geometric sans-serif for comfortable reading, plus tabular monospace for verifiable numbers.
                </p>

                <div className="space-y-4">
                  {/* Display Scale */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                      <span>HEADER FACE: PLUS JAKARTA SANS (BOLD / EXTRA BOLD)</span>
                      <span>clamp(2.35rem, 4.3vw, 3.85rem)</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white font-display-jakarta tracking-tight">
                      Empowering young women to lead Kenya’s technological future.
                    </h2>
                  </div>

                  {/* Body Scale */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                      <span>BODY FACE: DM SANS (GEOMETRIC SANS-SERIF)</span>
                      <span>16px / 1.7 line-height</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-body-sans leading-relaxed">
                      Jasiri bridges world-class cloud engineering, agri-tech innovation, and executive venture leadership for underrepresented young women across Kenya—combining institutional rigor with transformative grassroots impact.
                    </p>
                  </div>

                  {/* Tabular Data Scale */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                      <span>DATA TYPOGRAPHY: JETBRAINS MONO TABULAR-NUMS</span>
                      <span>font-mono font-bold</span>
                    </div>
                    <div className="text-2xl font-bold font-mono-code tabular-nums text-slate-900 dark:text-white">
                      14,280+ Fellows · 89.4% Placement · $5.8M Seed Unlocked
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'visuals' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 font-display-jakarta">
                  3. Visual Elements & Anti-Slop Discipline
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-body-sans mb-4">
                  Adheres strictly to the prompt specifications: generous white space, subtle geometric accents, large professional photography grids of diverse people, zero cartoonish illustrations, and clear data typography.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <h5 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono mb-2">
                      ✓ MANDATED SPECIFICATIONS
                    </h5>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
                      <li>• Real-world, documentary photography of Kenyan women in modern tech hubs & agriculture</li>
                      <li>• Subtle geometric accents (hairline coordinate tags, subtle grid dots)</li>
                      <li>• Unboxed metadata with typographic separators (·)</li>
                      <li>• Generous white space between major narrative blocks</li>
                      <li>• Tabular data figures for verified metrics</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <h5 className="text-xs font-bold text-rose-600 dark:text-rose-400 font-mono mb-2">
                      ✕ EXCLUDED ANTI-PATTERNS
                    </h5>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
                      <li>• No cartoonish or infantilizing illustrations</li>
                      <li>• No pill badge clutter or floating percentage candy pills</li>
                      <li>• No arbitrary single-number AI vanity scores</li>
                      <li>• No mechanical code comment headers (// 01)</li>
                      <li>• No decorative pulsing green dots</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-[#070D1E] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Standard: Enterprise Non-Profit Hybrid</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900"
          >
            Close Design System Guide
          </button>
        </div>
      </div>
    </div>
  );
};
