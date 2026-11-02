import React, { useState } from 'react';
import { AccentChoice } from '../../types/jasiri';
import {
  Building2,
  Users,
  Award,
  Globe2,
  CheckCircle2,
  ShieldCheck,
  Send,
  Heart,
  CreditCard,
  Smartphone,
  Landmark,
  ArrowRight,
  Handshake,
  TrendingUp,
} from 'lucide-react';

interface PartnerPageProps {
  accent: AccentChoice;
  onNavigateHome: () => void;
  onNavigatePrograms: () => void;
}

export const PartnerPage: React.FC<PartnerPageProps> = ({
  accent,
  onNavigateHome,
  onNavigatePrograms,
}) => {
  const [partnerForm, setPartnerForm] = useState({
    companyName: '',
    contactPerson: '',
    workEmail: '',
    phone: '',
    companySize: '51-200 Employees',
    interestType: 'Host an Intern',
    estimatedRoles: '2-5 Fellows',
    budgetRange: '$10,000 – $25,000',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const accentBtn =
    accent === 'teal'
      ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-teal-900/20'
      : 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-fuchsia-900/20';

  const accentText =
    accent === 'teal' ? 'text-teal-600 dark:text-teal-400' : 'text-fuchsia-600 dark:text-fuchsia-400';

  const accentBgLight =
    accent === 'teal'
      ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-200/60 dark:border-teal-800/60 text-teal-800 dark:text-teal-200'
      : 'bg-fuchsia-50 dark:bg-fuchsia-950/40 border-fuchsia-200/60 dark:border-fuchsia-800/60 text-fuchsia-800 dark:text-fuchsia-200';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!partnerForm.companyName.trim()) errs.companyName = 'Company name is required';
    if (!partnerForm.contactPerson.trim()) errs.contactPerson = 'Contact representative name is required';
    if (!partnerForm.workEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(partnerForm.workEmail)) {
      errs.workEmail = 'Valid corporate email is required';
    }
    if (!partnerForm.message.trim() || partnerForm.message.length < 15) {
      errs.message = 'Please briefly outline your timeline or talent requirements (min 15 chars)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormSubmitted(true);
    }
  };

  // Business Cases (Prompt 4 requirement)
  const businessCases = [
    {
      icon: Users,
      title: 'Access to Pre-Vetted, High-Retention Diverse Talent',
      description:
        'Hiring technical talent across East Africa is fiercely competitive. Jasiri fellows undergo 600+ hours of rigorous full-stack, cloud, and AI training with an audited 89.4% 3-year industry retention rate. Skip cold recruiter fees with pre-screened junior and mid-level software engineers.',
      kpi: '89.4%',
      kpiLabel: 'Long-term corporate retention rate',
    },
    {
      icon: Award,
      title: 'Measurable ESG & Community Social Impact ROI',
      description:
        'Partnering fulfills institutional sustainability charters and corporate B-Corp standards. Every sponsorship generates auditable impact telemetry—quantifying women elevated into living-wage careers and rural connectivity enabled through your corporate brand.',
      kpi: '100%',
      kpiLabel: 'Direct-to-student fund pass-through audited by KPMG',
    },
    {
      icon: TrendingUp,
      title: 'Industry Thought Leadership & Curriculum Advisory',
      description:
        'Your engineering leaders sit on our curriculum advisory council, ensuring technical modules directly align with your internal cloud tech stacks (AWS, GCP, Azure, Kubernetes, React, Python). Position your enterprise as the employer of choice in African innovation.',
      kpi: '120+',
      kpiLabel: 'Leading enterprise and multinational partners',
    },
  ];

  // Ways to Give (Prompt 4 requirement)
  const waysToGive = [
    {
      channel: 'Corporate Fellowship Sponsorship',
      min: '$10,000 / Cohort Sponsor',
      icon: Building2,
      description:
        'Underwrite a dedicated cohort of 5 to 20 fellows with co-branded naming rights, priority recruitment access, and customized capstone projects.',
      actionText: 'Request Sponsorship Prospectus',
    },
    {
      channel: 'Mobile M-PESA & Direct Giving',
      min: 'Any Amount (Instant Tax Receipt)',
      icon: Smartphone,
      description:
        'Tax-exempt mobile giving enabling individual donors to fund monthly 4G connectivity bundles and solar battery kits for rural secondary students.',
      actionText: 'Give via M-PESA Paybill',
    },
    {
      channel: 'Institutional Grants & DAF Wire',
      min: '$25,000+ Grant Facility',
      icon: Landmark,
      description:
        'For global foundations and family offices leveraging 501(c)(3) tax deductions and wire transfers through our accredited fiscal sponsor.',
      actionText: 'View Wire & Routing Specs',
    },
    {
      channel: 'In-Kind Hardware & Cloud Credits',
      min: 'Laptops, GPUs & Licenses',
      icon: CreditCard,
      description:
        'Donate refurbished M-series enterprise laptops, AWS/Google Cloud computing credits, or enterprise software developer seats directly to fellows.',
      actionText: 'Submit In-Kind Donation',
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#070D1E] text-slate-900 dark:text-white transition-colors">
      {/* Corporate Landing Hero */}
      <section className="py-20 lg:py-28 border-b border-slate-200 dark:border-slate-800 bg-[#0A1226] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] opacity-5 [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-slate-700 bg-slate-800/80 text-teal-400">
              <Building2 className="w-3.5 h-3.5" />
              <span>CORPORATE EXECUTIVE & DONOR ALLIANCE PORTAL</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display-jakarta leading-[1.08]"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.1rem)' }}
            >
              Partner With Us to scale Africa’s premier female tech pipeline.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-body-sans max-w-2xl">
              We partner with forward-thinking enterprises, HR executives, and philanthropic institutions to co-create sustainable economic pathways. Hire job-ready software engineers, sponsor regional hubs, or underwrite transformative cohorts.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#inquiry"
                className={`px-6 py-3.5 text-xs font-extrabold rounded-xl transition-all font-display-jakarta cursor-pointer inline-flex items-center gap-2 ${accentBtn}`}
              >
                <span>Initiate Corporate Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ways-to-give"
                className="px-6 py-3.5 text-xs font-bold rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                <span>Explore Ways to Give</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt 4: The Business Case for Partnering With Us */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070D1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
              WHY FORWARD-LOOKING CORPORATES PARTNER WITH JASIRI
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display-jakarta">
              The Strategic Business Case
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 font-body-sans">
              Beyond corporate social responsibility—partnering with Jasiri delivers tangible competitive advantage, hiring efficiency, and brand equity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessCases.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-[#0B142B] border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-6">
                      <Icon className={`w-6 h-6 ${accentText}`} />
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-950 dark:text-white font-display-jakarta mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-800/80">
                    <span className={`text-3xl font-black font-mono-code tabular-nums block ${accentText}`}>
                      {item.kpi}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5 block">
                      {item.kpiLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prompt 4: Clean, Multi-Field Contact & Inquiry Form */}
      <section id="inquiry" className="py-24 bg-slate-50 dark:bg-[#0A1226] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Introduction */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                EXECUTIVE PARTNERSHIP INQUIRY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display-jakarta">
                Connect with our Corporate Alliances Office
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body-sans">
                Our partnerships team will schedule an initial briefing to understand your hiring roadmap, ESG mandates, or grant priorities within one business day.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Formal Memorandum of Understanding (MoU) frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dedicated corporate success manager for every partner</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dual Kenya & US/UK Tax compliance structures</span>
                </div>
              </div>
            </div>

            {/* Clean Multi-Field Form (Prompt 4 requirement) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B142B] border border-slate-200 dark:border-slate-800 shadow-md">
                {formSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold font-display-jakarta text-slate-950 dark:text-white">
                      Inquiry Received by Corporate Desk
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you, {partnerForm.contactPerson}. We have recorded{' '}
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {partnerForm.companyName}
                      </span>
                      's interest in{' '}
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {partnerForm.interestType}
                      </span>
                      . A corporate alliances director will reply to{' '}
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {partnerForm.workEmail}
                      </span>{' '}
                      by tomorrow.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setPartnerForm({
                            companyName: '',
                            contactPerson: '',
                            workEmail: '',
                            phone: '',
                            companySize: '51-200 Employees',
                            interestType: 'Host an Intern',
                            estimatedRoles: '2-5 Fellows',
                            budgetRange: '$10,000 – $25,000',
                            message: '',
                          });
                        }}
                        className="px-5 py-2.5 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-display-jakarta">
                          Company / Institution Name *
                        </label>
                        <input
                          type="text"
                          value={partnerForm.companyName}
                          onChange={(e) =>
                            setPartnerForm({ ...partnerForm, companyName: e.target.value })
                          }
                          placeholder="e.g. Apex Technologies East Africa"
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-body-sans focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                        />
                        {errors.companyName && (
                          <p className="text-xs text-rose-500 mt-1">{errors.companyName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-display-jakarta">
                          Executive Contact Name *
                        </label>
                        <input
                          type="text"
                          value={partnerForm.contactPerson}
                          onChange={(e) =>
                            setPartnerForm({ ...partnerForm, contactPerson: e.target.value })
                          }
                          placeholder="e.g. Daniel Omondi"
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-body-sans focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                        />
                        {errors.contactPerson && (
                          <p className="text-xs text-rose-500 mt-1">{errors.contactPerson}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-display-jakarta">
                          Corporate Work Email *
                        </label>
                        <input
                          type="email"
                          value={partnerForm.workEmail}
                          onChange={(e) =>
                            setPartnerForm({ ...partnerForm, workEmail: e.target.value })
                          }
                          placeholder="d.omondi@apextech.co.ke"
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-body-sans focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                        />
                        {errors.workEmail && (
                          <p className="text-xs text-rose-500 mt-1">{errors.workEmail}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-display-jakarta">
                          Company Headcount
                        </label>
                        <select
                          value={partnerForm.companySize}
                          onChange={(e) =>
                            setPartnerForm({ ...partnerForm, companySize: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-body-sans focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                        >
                          <option value="1-50 Employees">1-50 Employees (Early Stage)</option>
                          <option value="51-200 Employees">51-200 Employees (Scale-up)</option>
                          <option value="201-1,000 Employees">201-1,000 Employees (Enterprise)</option>
                          <option value="1,000+ Employees">1,000+ Employees (Multinational)</option>
                        </select>
                      </div>
                    </div>

                    {/* Interest Type Dropdown (Prompt 4 requirement) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-display-jakarta">
                        Partnership Interest Type *
                      </label>
                      <select
                        value={partnerForm.interestType}
                        onChange={(e) =>
                          setPartnerForm({ ...partnerForm, interestType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-body-sans focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                      >
                        <option value="Host an Intern">Host an Intern (3-Month Paid Apprenticeship)</option>
                        <option value="Financial Sponsorship">Financial Sponsorship & Fellowship Grants</option>
                        <option value="Volunteer & Mentorship">Volunteer as Executive / Engineering Mentor</option>
                        <option value="Curriculum Co-Design">Curriculum Co-Design & Cloud Compute Partner</option>
                        <option value="Custom Strategic Alliance">Custom Strategic Alliance / Foundation Grant</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-display-jakarta">
                        Scope, Timeline & Objectives *
                      </label>
                      <textarea
                        rows={4}
                        value={partnerForm.message}
                        onChange={(e) =>
                          setPartnerForm({ ...partnerForm, message: e.target.value })
                        }
                        placeholder="Detail your targeted tech stacks, projected headcount needs, or philanthropic grant parameters..."
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-body-sans focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-500 mt-1">{errors.message}</p>
                      )}
                    </div>

                    <div>
                      <button
                        type="submit"
                        className={`w-full py-3.5 px-6 text-xs font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 font-display-jakarta cursor-pointer ${accentBtn}`}
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Corporate Partnership Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt 4: Ways to Give Section */}
      <section id="ways-to-give" className="py-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070D1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
              PHILANTHROPIC COMMITMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display-jakarta">
              Ways to Give
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 font-body-sans">
              Choose the financial giving channel that aligns with your institutional treasury, foundation charter, or individual philanthropy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {waysToGive.map((way, idx) => {
              const Icon = way.icon;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-[#0B142B] border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <Icon className={`w-5 h-5 ${accentText}`} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                        {way.min}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-950 dark:text-white font-display-jakarta mt-5 mb-2">
                      {way.channel}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body-sans">
                      {way.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById('inquiry');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`text-xs font-bold transition-all inline-flex items-center gap-1.5 font-display-jakarta ${accentText} hover:underline cursor-pointer`}
                    >
                      <span>{way.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Transfer Specifications Callout */}
          <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white dark:bg-[#0A1226] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-teal-400">
                Treasury & Wire Support
              </span>
              <h4 className="text-lg font-bold font-display-jakarta">
                Need customized donation documentation or US 501(c)(3) tax receipts?
              </h4>
              <p className="text-xs text-slate-400">
                Our finance office provides formal escrow agreements, swift routing information, and donor advisory agreements.
              </p>
            </div>
            <a
              href="mailto:treasury@jasirikenya.org"
              className="px-5 py-2.5 text-xs font-bold rounded-lg bg-white text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
            >
              Contact Treasury Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
