import React from 'react';
import { WebsiteConfig } from '../types/site';

interface FooterProps {
  config: WebsiteConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  return (
    <footer className="py-12 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-neutral-100 dark:border-neutral-800">
          <div>
            <a
              href="#"
              className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white"
            >
              {config.brandName}
            </a>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 max-w-sm">
              {config.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            {config.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 dark:text-neutral-500">
          <p>© {new Date().getFullYear()} {config.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-600 dark:hover:text-neutral-300 cursor-pointer">
              Privacy Policy
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-neutral-600 dark:hover:text-neutral-300 cursor-pointer">
              Terms of Engagement
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-neutral-600 dark:hover:text-neutral-300 cursor-pointer">
              Security Attestation
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
