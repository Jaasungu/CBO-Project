import React, { useState } from 'react';
import { WebsiteConfig } from '../types/site';
import { getThemeClasses } from '../utils/theme';
import { CheckCircle2, Send, Mail, MapPin } from 'lucide-react';

interface ContactSectionProps {
  config: WebsiteConfig;
  preselectedTierName?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  config,
  preselectedTierName,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    budget: preselectedTierName || 'Launch Sprint ($6,500)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const theme = getThemeClasses(config.theme.color);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please briefly share your project goals (at least 10 characters)';
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

  return (
    <section id="contact" className="py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
                {config.contact.sectionKicker}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {config.contact.sectionTitle}
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 mt-4 leading-relaxed">
                {config.contact.subhead}
              </p>

              <div className="mt-8 space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-sm">
                <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="hover:underline font-medium"
                  >
                    {config.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <MapPin className="w-4 h-4 text-neutral-400" />
                  <span>{config.contact.officeLocation}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
              <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">
                Standard Scoping SLA
              </span>
              <p>
                Our principal designer reviews briefs daily at 09:00 PST. You will receive an async Loom overview and formal estimate.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success State */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Discovery Request Received
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. We have logged your request for the{' '}
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {formData.budget}
                    </span>{' '}
                    engagement. We will respond directly to{' '}
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {formData.email}
                    </span>{' '}
                    within one business day.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          organization: '',
                          budget: 'Launch Sprint ($6,500)',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                        Planned Engagement
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                      >
                        <option value="Launch Sprint ($6,500)">Launch Sprint ($6,500)</option>
                        <option value="Flagship Platform ($14,500)">Flagship Platform ($14,500)</option>
                        <option value="Design & Code Retainer ($8,200/mo)">Design & Code Retainer ($8,200/mo)</option>
                        <option value="Custom Enterprise Architecture">Custom Enterprise Architecture</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                      Project Scope & Timeline *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your target release date, key deliverables, and existing stack..."
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className={`w-full py-3 px-5 text-sm font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 ${theme.accentBg}`}
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Discovery Inquiry</span>
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
