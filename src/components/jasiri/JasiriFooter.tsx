import React from 'react';
import herRiseLogo from '../../assets/images/herrise-logo.svg';

export const JasiriFooter: React.FC = () => {
  return (
    <footer className="py-16 bg-slate-900 text-white dark:bg-[#050914] border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          {/* Brand & Mandate */}
          <div className="md:col-span-4 space-y-4">
            <a href="/" aria-label="HerRise homepage" className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2">
              <img src={herRiseLogo} alt="" aria-hidden="true" className="h-8 w-9 object-contain" />
              <span className="font-display-jakarta text-xl font-bold tracking-tight text-[#2D1155]">
                HerRise
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-body-sans">
              Nurturing Health. Empowering Communities. We work toward healthier, more informed, inclusive, and resilient communities.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Explore
            </h5>
            <ul className="space-y-2 text-xs text-slate-300 font-display-jakarta font-semibold">
              <li>
                <a href="/about/who-we-are" className="hover:text-white transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-white transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="/about/our-story" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/about/the-issue-we-address" className="hover:text-white transition-colors">
                  The Issue We Address
                </a>
              </li>
              <li>
                <a href="/about/our-approach" className="hover:text-white transition-colors">
                  Our Approach
                </a>
              </li>
            </ul>
          </div>

          {/* Community Commitment */}
          <div className="md:col-span-3 space-y-3 text-xs text-slate-400">
            <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              How We Work
            </h5>
            <p className="leading-relaxed">
              We believe lasting change is built with communities, not simply for them.
            </p>
            <div className="flex flex-wrap gap-x-2 gap-y-1 font-semibold text-slate-300">
              <span>Health education</span>
              <span aria-hidden="true">·</span>
              <span>Community engagement</span>
              <span aria-hidden="true">·</span>
              <span>Social welfare</span>
              <span aria-hidden="true">·</span>
              <span>Partnership</span>
              <span aria-hidden="true">·</span>
              <span>Inclusion</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 text-xs text-slate-400">
            <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              How to Get in Touch
            </h5>
            <address className="space-y-1 not-italic leading-relaxed">
              <p>1st Floor, Camp David House</p>
              <p>Off Langata Rd, Nairobi</p>
              <p>Box 1235 - 0100</p>
              <p>Nairobi, Kenya</p>
            </address>
            <div className="space-y-1">
              <p>
                <span className="font-semibold text-slate-300">Mobile: </span>
                <a href="tel:+254731546778" className="hover:text-white transition-colors">
                  +254 731 546778
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-300">Email: </span>
                <a href="mailto:info@herrise.org" className="hover:text-white transition-colors">
                  info@herrise.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HerRise. All rights reserved.</p>
          <p>Nurturing Health. Empowering Communities.</p>
        </div>
      </div>
    </footer>
  );
};
