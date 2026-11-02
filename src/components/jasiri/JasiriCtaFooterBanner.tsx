import React, { useState } from 'react';
import { AccentChoice } from '../../types/jasiri';
import { Heart, Handshake, ArrowRight, CheckCircle2, X, Sparkles } from 'lucide-react';

interface JasiriCtaFooterBannerProps {
  accent: AccentChoice;
  onPartnerClick: () => void;
}

export const JasiriCtaFooterBanner: React.FC<JasiriCtaFooterBannerProps> = ({
  accent,
  onPartnerClick,
}) => {
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<number>(250);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [donationSent, setDonationSent] = useState(false);

  const bannerColorBlock =
    accent === 'teal'
      ? 'bg-gradient-to-br from-[#070D1E] via-[#0A192F] to-[#0D3B4C]'
      : 'bg-gradient-to-br from-[#070D1E] via-[#0A192F] to-[#3B072B]';

  const primaryBtnStyle =
    accent === 'teal'
      ? 'bg-teal-400 hover:bg-teal-300 text-slate-950 font-extrabold shadow-xl shadow-teal-500/20'
      : 'bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-extrabold shadow-xl shadow-fuchsia-500/20';

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (donorEmail.trim()) {
      setDonationSent(true);
    }
  };

  return (
    <section className="relative w-full overflow-hidden border-t border-b border-slate-800">
      {/* 5. Striking Color Block (Prompt 2 requirement) */}
      <div className={`w-full py-24 sm:py-28 px-6 text-white ${bannerColorBlock} relative`}>
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-white/20 bg-white/10 backdrop-blur-sm text-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span>INVEST IN KENYA'S TALENT PIPELINE</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display-jakarta text-balance"
            style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)' }}
          >
            Empower a young woman to build, lead, and transform her community.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-body-sans font-normal">
            Every contribution directly underwrites laptop hardware, certified cloud labs, solar-powered county connectivity, and living stipends. Join individual donors and institutional allies funding the next 10,000 African leaders.
          </p>

          {/* Action CTAs for Donations or Partnerships (Prompt 2 requirement) */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => setDonationModalOpen(true)}
              className={`inline-flex items-center gap-2.5 px-8 py-4 text-sm font-extrabold rounded-xl transition-all whitespace-nowrap shrink-0 group font-display-jakarta cursor-pointer ${primaryBtnStyle}`}
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Support Through Donation</span>
            </button>

            <button
              type="button"
              onClick={onPartnerClick}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all whitespace-nowrap shrink-0 font-display-jakarta cursor-pointer"
            >
              <Handshake className="w-4 h-4" />
              <span>Explore Corporate Partnerships</span>
            </button>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span>501(c)(3) / KENYAN PBO TAX-DEDUCTIBLE ELIGIBILITY</span>
            <span aria-hidden="true">·</span>
            <span>MPESA & INTERNATIONAL CARD GATEWAYS</span>
            <span aria-hidden="true">·</span>
            <span>100% DISBURSEMENT TO STUDENT ENDOWMENT</span>
          </div>
        </div>
      </div>

      {/* Interactive Donation / Support Modal */}
      {donationModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setDonationModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white dark:bg-[#0B142B] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-slate-900 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-xl font-extrabold font-display-jakarta">
                  Jasiri Fellowship Endowment
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Direct sponsorship for young women in Kenya
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDonationModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {donationSent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold font-display-jakarta">
                  Thank You for Your Generosity!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-body-sans max-w-sm mx-auto">
                  Your pledge of{' '}
                  <span className="font-bold text-slate-900 dark:text-white">
                    ${customAmount || selectedTier}
                  </span>{' '}
                  has been recorded. A tax receipt and fellow impact report will be delivered to{' '}
                  <span className="font-bold text-slate-900 dark:text-white">
                    {donorEmail}
                  </span>
                  .
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setDonationSent(false);
                      setDonationModalOpen(false);
                    }}
                    className="px-5 py-2 text-xs font-bold rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit} className="mt-6 space-y-5">
                {/* Tiers */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                    Select Contribution Tier (USD)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { amt: 50, label: 'Connectivity Voucher' },
                      { amt: 250, label: 'Hardware Kit' },
                      { amt: 1200, label: 'Full Sponsorship' },
                    ].map((tier) => (
                      <button
                        key={tier.amt}
                        type="button"
                        onClick={() => {
                          setSelectedTier(tier.amt);
                          setCustomAmount('');
                        }}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          selectedTier === tier.amt && !customAmount
                            ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-200 font-bold'
                            : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="text-lg font-black font-mono">${tier.amt}</div>
                        <div className="text-[10px] text-slate-500 leading-tight mt-0.5">
                          {tier.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment channel */}
                <div className="flex items-center gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mpesa')}
                    className={`flex-1 py-2 px-3 rounded-lg border font-semibold ${
                      paymentMethod === 'mpesa'
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                        : 'border-slate-200 dark:border-slate-800 text-slate-500'
                    }`}
                  >
                    M-PESA (Kenya)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 py-2 px-3 rounded-lg border font-semibold ${
                      paymentMethod === 'card'
                        ? 'border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300'
                        : 'border-slate-200 dark:border-slate-800 text-slate-500'
                    }`}
                  >
                    Credit / Debit Card
                  </button>
                </div>

                {/* Donor Info */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="e.g. Samuel Otieno"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                      Tax Receipt Email
                    </label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="samuel@domain.com"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-bold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
                  >
                    Complete Pledge of ${customAmount || selectedTier}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
