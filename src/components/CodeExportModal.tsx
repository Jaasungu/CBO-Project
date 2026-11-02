import React, { useState } from 'react';
import { WebsiteConfig } from '../types/site';
import { generateReactCode } from '../utils/theme';
import { X, Copy, Check, Download, FileCode2 } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: WebsiteConfig;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const [activeTab, setActiveTab] = useState<'react' | 'json'>('react');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const reactCode = generateReactCode(config);
  const jsonCode = JSON.stringify(config, null, 2);

  const currentContent = activeTab === 'react' ? reactCode : jsonCode;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename =
      activeTab === 'react'
        ? `${config.brandName.toLowerCase().replace(/\s+/g, '-')}-website.tsx`
        : `${config.brandName.toLowerCase().replace(/\s+/g, '-')}-config.json`;
    const mime = activeTab === 'react' ? 'text/typescript' : 'application/json';
    const blob = new Blob([currentContent], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <FileCode2 className="w-5 h-5 text-blue-500" />
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Export Website Code & Specs
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Production-grade React component & Tailwind markup ready to ship
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setActiveTab('react')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  activeTab === 'react'
                    ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                React (TSX)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('json')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  activeTab === 'json'
                    ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                Site JSON Config
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-auto p-4 bg-neutral-950 font-mono text-xs text-neutral-200 leading-relaxed">
          <pre className="whitespace-pre overflow-x-auto selection:bg-blue-600 selection:text-white">
            <code>{currentContent}</code>
          </pre>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {activeTab === 'react' ? 'TypeScript + Tailwind v4 compatible' : 'Portable JSON schema'}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Code'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 flex items-center gap-1.5 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
