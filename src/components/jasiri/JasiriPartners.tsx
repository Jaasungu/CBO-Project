import React from 'react';
import { INSTITUTIONAL_PARTNERS } from '../../data/jasiriData';
import { Building2, Shield, Globe, Award } from 'lucide-react';

export const JasiriPartners: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-white dark:bg-[#070D1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            <span>04</span>
            <span>/</span>
            <span>INSTITUTIONAL GOVERNANCE & ALLIANCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight font-display-jakarta">
            Institutional credibility powered by world-class partners
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-body-sans">
            Our governance model mirrors top-tier corporate compliance, audited annually by KPMG East Africa with full public transparency and data governance.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTITUTIONAL_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="p-6 rounded-xl bg-slate-50 dark:bg-[#0B142B] border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-3">
                  <span>{partner.category}</span>
                  <Award className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display-jakarta">
                  {partner.name}
                </h4>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1 mb-3">
                  {partner.initiative}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 font-body-sans leading-relaxed">
                {partner.commitment}
              </div>
            </div>
          ))}
        </div>

        {/* Accountability & Stewardship Strip */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white dark:bg-[#0B132B] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
              Financial Stewardship Standard
            </span>
            <h4 className="text-xl font-bold font-display-jakarta">
              91.4% of every dollar goes directly into fellow stipends, hardware & cloud labs
            </h4>
            <p className="text-xs text-slate-400">
              All financial audits, tax compliance, and program performance reports are openly accessible.
            </p>
          </div>

          <a
            href="#apply"
            className="px-5 py-2.5 text-xs font-bold rounded-lg bg-white text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
          >
            Review Annual Governance Audit
          </a>
        </div>
      </div>
    </section>
  );
};
