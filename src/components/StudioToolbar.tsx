import React from 'react';
import { ViewportMode, WebsiteConfig, TEMPLATES } from '../types/site';
import {
  Monitor,
  Tablet,
  Smartphone,
  Sliders,
  Code2,
  Eye,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

interface StudioToolbarProps {
  currentConfig: WebsiteConfig;
  viewportMode: ViewportMode;
  onSetViewportMode: (mode: ViewportMode) => void;
  onSelectTemplate: (templateId: string) => void;
  onOpenCustomizer: () => void;
  onOpenCodeExport: () => void;
  isFullscreenPreview: boolean;
  onToggleFullscreenPreview: () => void;
}

export const StudioToolbar: React.FC<StudioToolbarProps> = ({
  currentConfig,
  viewportMode,
  onSetViewportMode,
  onSelectTemplate,
  onOpenCustomizer,
  onOpenCodeExport,
  isFullscreenPreview,
  onToggleFullscreenPreview,
}) => {
  if (isFullscreenPreview) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <button
          type="button"
          onClick={onToggleFullscreenPreview}
          className="px-3.5 py-2 text-xs font-semibold rounded-full bg-neutral-900/90 text-white dark:bg-white/90 dark:text-neutral-900 shadow-xl backdrop-blur-md hover:scale-105 transition-all flex items-center gap-2 border border-white/20 dark:border-black/20"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Exit Preview / Customize Site</span>
        </button>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-50 bg-neutral-900 text-white border-b border-neutral-800 px-4 py-2.5 transition-all shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left: Studio Branding & Template Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-tight bg-neutral-800 px-2.5 py-1 rounded-md text-neutral-100">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>SiteCraft Studio</span>
          </div>

          <div className="relative">
            <select
              value={currentConfig.id}
              onChange={(e) => onSelectTemplate(e.target.value)}
              className="appearance-none bg-neutral-800 hover:bg-neutral-700/80 text-xs font-medium text-neutral-200 pl-3 pr-8 py-1.5 rounded-md border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
            >
              {Object.values(TEMPLATES).map((tmpl) => (
                <option key={tmpl.id} value={tmpl.id}>
                  Template: {tmpl.templateName}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-2.5 text-neutral-400 pointer-events-none" />
          </div>
        </div>

        {/* Center: Viewport Switcher */}
        <div className="hidden sm:flex items-center gap-1 bg-neutral-800 p-1 rounded-lg border border-neutral-700">
          <button
            type="button"
            onClick={() => onSetViewportMode('fluid')}
            className={`px-2.5 py-1 text-xs font-medium rounded flex items-center gap-1.5 transition-colors ${
              viewportMode === 'fluid'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Full Width Responsive"
          >
            <span>Fluid (100%)</span>
          </button>
          <button
            type="button"
            onClick={() => onSetViewportMode('desktop')}
            className={`p-1.5 rounded transition-colors ${
              viewportMode === 'desktop'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Desktop Baseline (1440px)"
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onSetViewportMode('tablet')}
            className={`p-1.5 rounded transition-colors ${
              viewportMode === 'tablet'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Tablet (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onSetViewportMode('mobile')}
            className={`p-1.5 rounded transition-colors ${
              viewportMode === 'mobile'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Mobile (375px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Studio Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCustomizer}
            className="px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center gap-1.5 shadow-xs"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Customize Site</span>
          </button>

          <button
            type="button"
            onClick={onOpenCodeExport}
            className="px-3 py-1.5 text-xs font-semibold rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-colors flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code & Export</span>
          </button>

          <button
            type="button"
            onClick={onToggleFullscreenPreview}
            className="px-3 py-1.5 text-xs font-semibold rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 transition-colors flex items-center gap-1.5"
            title="Hide studio toolbar for authentic preview"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Full Preview</span>
          </button>
        </div>
      </div>
    </div>
  );
};
