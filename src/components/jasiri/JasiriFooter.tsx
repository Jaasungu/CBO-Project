import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export const JasiriFooter: React.FC = () => {
  return (
    <footer className="py-16 bg-slate-900 text-white dark:bg-[#050914] border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          {/* Brand & Mandate */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="text-2xl font-black tracking-tight text-white font-display-jakarta flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 inline-block"></span>
              <span>Jasiri Kenya</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-body-sans">
              A high-impact social initiative accelerating engineering competence, agri-tech innovation, and venture leadership for young Kenyan women and underrepresented youth.
            </p>
            <div className="text-xs text-slate-500 font-mono space-y-1">
              <div>REG NO: NGO/B/2021/0419 · NON-PROFIT ENTITY (KENYA)</div>
              <div>AUDITED BY KPMG EAST AFRICA · COMPLIANT WITH PBO ACT</div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs text-slate-300 font-display-jakarta font-semibold">
              <li>
                <a href="#impact" className="hover:text-white transition-colors">
                  Impact & Cohort Metrics
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-white transition-colors">
                  The Four Strategic Pillars
                </a>
              </li>
              <li>
                <a href="#fellows" className="hover:text-white transition-colors">
                  Fellow Directory & Monograph
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors">
                  Corporate & Foundation Alliances
                </a>
              </li>
              <li>
                <a href="#apply" className="hover:text-white transition-colors">
                  2026 Admissions & Grants
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-4 space-y-3 text-xs text-slate-400">
            <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Campus & Regional Hubs
            </h5>
            <p className="font-semibold text-slate-200">
              Nairobi Central Campus: Riverside Drive, Westlands, Nairobi
            </p>
            <p>
              Decentralized Solar Hubs: Nakuru, Kisumu, Eldoret, Mombasa, Machakos, Kilifi, Garissa, and Kakamega.
            </p>
            <div className="pt-2 text-slate-300 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <a href="mailto:contact@jasirikenya.org" className="hover:underline">
                contact@jasirikenya.org
              </a>
            </div>
          </div>
        </div>

        {/* Legal and Disclaimer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Jasiri Social Impact Initiative Kenya. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Child Safeguarding Policy</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-300 cursor-pointer">Data Privacy & GDPR Kenya</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-300 cursor-pointer">Whistleblower Governance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
