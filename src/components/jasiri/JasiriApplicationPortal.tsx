import React, { useState } from 'react';
import { AccentChoice } from '../../types/jasiri';
import { CheckCircle2, Send, MapPin, Mail, Phone, Building } from 'lucide-react';

interface JasiriApplicationPortalProps {
  accent: AccentChoice;
}

export const JasiriApplicationPortal: React.FC<JasiriApplicationPortalProps> = ({ accent }) => {
  const [activeTab, setActiveTab] = useState<'applicant' | 'partner'>('applicant');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    county: 'Nairobi',
    track: 'Software Engineering & Applied AI',
    organization: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const accentBtnStyle =
    accent === 'teal'
      ? 'bg-teal-600 hover:bg-teal-700 text-white'
      : 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white';

  const accentTextStyle =
    accent === 'teal'
      ? 'text-teal-600 dark:text-teal-400'
      : 'text-fuchsia-600 dark:text-fuchsia-400';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide full name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide mobile phone (+254)';
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Please provide at least 15 characters outlining your background or partnership vision';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const counties = [
    'Nairobi',
    'Nakuru',
    'Kisumu',
    'Uasin Gishu (Eldoret)',
    'Mombasa',
    'Machakos',
    'Kiambu',
    'Kilifi',
    'Meru',
    'Kakamega',
    'Garissa',
    'Nyeri',
    'Other County',
  ];

  return (
    <section id="apply" className="py-24 bg-slate-50 dark:bg-[#070D1E] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Intake Overview */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                <span>05</span>
                <span>/</span>
                <span>ENGAGEMENT & COHORT ADMISSIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight font-display-jakarta">
                Join the 2026 fellowship or partner with our initiative
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-body-sans">
                Applications are reviewed on a rolling basis across Kenya. All accepted fellows receive 100% sponsored tuition, living hardware stipends, and direct mentorship from industry leaders.
              </p>

              <div className="mt-8 space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-sm">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <a href="mailto:admissions@jasirikenya.org" className="hover:underline font-medium">
                    admissions@jasirikenya.org
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>+254 (0) 20 790 4200 (Nairobi Office)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Jasiri Innovation Campus, Riverside Drive, Nairobi</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-white dark:bg-[#0B142B] border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <span className="font-semibold text-slate-900 dark:text-white block">
                Next Admissions Milestone
              </span>
              <p>
                Cohort IX intake closes May 31, 2026. Selected applicants undergo technical logic assessments and peer panel interviews.
              </p>
            </div>
          </div>

          {/* Right Column: Portal Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0B142B] border border-slate-200 dark:border-slate-800 shadow-sm">
              {/* Portal Mode Switcher */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg mb-8 border border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('applicant');
                    setSubmitted(false);
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition-all font-display-jakarta ${
                    activeTab === 'applicant'
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Candidate Fellowship Application
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('partner');
                    setSubmitted(false);
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition-all font-display-jakarta ${
                    activeTab === 'partner'
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Institutional / Corporate Partner Inquiry
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display-jakarta">
                    {activeTab === 'applicant'
                      ? 'Fellowship Application Received'
                      : 'Partnership Brief Received'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-body-sans">
                    Thank you, {formData.name}. Your details have been submitted to the Jasiri admissions committee for the{' '}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {formData.track}
                    </span>{' '}
                    track. A confirmation receipt has been sent to{' '}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {formData.email}
                    </span>
                    .
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          county: 'Nairobi',
                          track: 'Software Engineering & Applied AI',
                          organization: '',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      Submit Another Registration
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-display-jakarta">
                        {activeTab === 'applicant' ? 'Full Legal Name *' : 'Key Contact Representative *'}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mary Wanjiku"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all font-body-sans"
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-display-jakarta">
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="m.wanjiku@domain.co.ke"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all font-body-sans"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-display-jakarta">
                        Kenyan Mobile Phone (+254) *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+254 712 345 678"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all font-body-sans"
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    {activeTab === 'applicant' ? (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-display-jakarta">
                          County of Residence *
                        </label>
                        <select
                          value={formData.county}
                          onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all font-body-sans"
                        >
                          {counties.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-display-jakarta">
                          Institution / Company Name *
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) =>
                            setFormData({ ...formData, organization: e.target.value })
                          }
                          placeholder="e.g. East Africa Technology Corp"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all font-body-sans"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-display-jakarta">
                      Target Impact Track *
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all font-body-sans"
                    >
                      <option value="Software Engineering & Applied AI">
                        Track 01: Software Engineering & Applied AI
                      </option>
                      <option value="Agri-Tech & Climate Systems">
                        Track 02: Agri-Tech & Climate Systems
                      </option>
                      <option value="Venture Capital & Executive Leadership">
                        Track 03: Venture Capital & Executive Leadership
                      </option>
                      <option value="Decentralized Digital Hubs & Secondary STEM">
                        Track 04: Decentralized Digital Hubs & Secondary STEM
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-display-jakarta">
                      {activeTab === 'applicant'
                        ? 'Why Jasiri? Outline your background, ambition, and community commitment *'
                        : 'Partnership Scope & Co-Investment Vision *'}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        activeTab === 'applicant'
                          ? 'Share your current skills, the problem in Kenya you want to solve, and how you will mentor others...'
                          : 'Describe your organization’s grant capacity, internship placement pipeline, or infrastructure contribution...'
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all font-body-sans"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className={`w-full py-3.5 px-6 text-sm font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 font-display-jakarta ${accentBtnStyle}`}
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {activeTab === 'applicant'
                          ? 'Submit Cohort 2026 Application'
                          : 'Submit Institutional Inquiry'}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
