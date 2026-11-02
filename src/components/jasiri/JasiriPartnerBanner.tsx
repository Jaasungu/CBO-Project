import React from 'react';
import { Building2, ShieldCheck } from 'lucide-react';

export const JasiriPartnerBanner: React.FC = () => {
  const partners = [
    {
      name: 'Safaricom',
      mark: 'SAFARICOM',
      role: 'Telecommunications & Fiber',
    },
    {
      name: 'Mastercard Foundation',
      mark: 'MASTERCARD FOUNDATION',
      role: 'Young Africa Works',
    },
    {
      name: 'Google.org',
      mark: 'GOOGLE.ORG',
      role: 'Applied AI & Cloud',
    },
    {
      name: 'Equity Bank',
      mark: 'EQUITY GROUP',
      role: 'Venture Micro-Equity',
    },
    {
      name: 'Microsoft Africa',
      mark: 'MICROSOFT ADC',
      role: 'Software Mentorship',
    },
    {
      name: 'African Development Bank',
      mark: 'AfDB GROUP',
      role: 'Institutional Grantor',
    },
    {
      name: 'USAID Kenya',
      mark: 'USAID KENYA',
      role: 'Youth Livelihoods',
    },
    {
      name: 'KCB Foundation',
      mark: 'KCB GROUP',
      role: 'Seed Grants Partner',
    },
  ];

  return (
    <section id="partners" className="py-20 bg-slate-50 dark:bg-[#070D1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Banner Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            <span>4. PARTNER & SPONSOR BANNER</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-display-jakarta">
            Trusted by leading global institutions and African enterprises
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-body-sans">
            Our corporate partners provide full tuition underwriting, production cloud compute credits, and direct employment pathways.
          </p>
        </div>

        {/* Clean Grayscale Corporate Logos Grid (Prompt 2 requirement) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-6 rounded-xl bg-white dark:bg-[#0B142B] border border-slate-200/90 dark:border-slate-800/90 flex flex-col items-center justify-center text-center group hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-xs"
            >
              {/* Grayscale Corporate Mark Representation */}
              <div className="h-10 flex items-center justify-center">
                <span className="text-base sm:text-lg font-black tracking-wider text-slate-600 dark:text-slate-400 grayscale contrast-125 group-hover:grayscale-0 group-hover:text-slate-950 dark:group-hover:text-white transition-all font-display-jakarta">
                  {partner.mark}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 mt-2">
                {partner.role}
              </span>
            </div>
          ))}
        </div>

        {/* Audit & Compliance Trust Marker */}
        <div className="mt-10 pt-6 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>ANNUAL INSTITUTIONAL AUDIT: KPMG EAST AFRICA</span>
          </div>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>100% TRANSPARENT FINANCIAL STEWARDSHIP</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>COMPLIANT WITH KENYAN PUBLIC BENEFIT ORGANIZATIONS ACT</span>
        </div>
      </div>
    </section>
  );
};
