import React, { useState } from 'react';
import { AccentChoice } from '../../types/jasiri';
import { X, CheckCircle2, Heart, Smartphone, CreditCard, Sparkles } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  accent: AccentChoice;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  accent,
}) => {
  const [selectedTier, setSelectedTier] = useState<number>(250);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const accentBtn =
    accent === 'teal'
      ? 'bg-teal-600 hover:bg-teal-500 text-white'
      : 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white';

  const accentBorderActive =
    accent === 'teal'
      ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-200'
      : 'border-fuchsia-500 bg-fuchsia-50 dark:bg-fuchsia-950/40 text-fuchsia-800 dark:text-fuchsia-200';

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (donorEmail.trim()) {
      setIsSubmitted(true);
    }
  };

  const tiers = [
    { amt: 50, label: 'Connectivity Voucher', description: 'Covers 1 month of 4G fiber for a rural fellow' },
    { amt: 250, label: 'Student Hardware Kit', description: 'Solar battery & sensor equipment' },
    { amt: 1200, label: 'Full Fellowship Grant', description: 'Covers complete 6-month stipend & training' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-[#0B142B] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold font-display-jakarta text-slate-950 dark:text-white">
                Support SheRise
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-2xl font-bold font-display-jakarta text-slate-900 dark:text-white">
              Asante Sana! Thank You for Your Support.
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed font-body-sans">
              Your pledge of{' '}
              <span className="font-bold text-slate-900 dark:text-white">
                ${customAmount || selectedTier}
              </span>{' '}
              via {paymentMethod === 'mpesa' ? 'M-PESA' : 'Card'} has been recorded. An official tax receipt and student impact update will be sent to{' '}
              <span className="font-bold text-slate-900 dark:text-white">{donorEmail}</span>.
            </p>
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 text-xs font-bold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDonateSubmit} className="mt-6 space-y-5">
            {/* Tiers */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-display-jakarta">
                Select Contribution Tier (USD)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {tiers.map((tier) => (
                  <button
                    key={tier.amt}
                    type="button"
                    onClick={() => {
                      setSelectedTier(tier.amt);
                      setCustomAmount('');
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      selectedTier === tier.amt && !customAmount
                        ? `${accentBorderActive} font-bold shadow-xs`
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

            {/* Custom Amount */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                Or Enter Custom Amount (USD)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-xs text-slate-400 font-bold">$</span>
                <input
                  type="number"
                  min="5"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Custom amount e.g. 500"
                  className="w-full pl-8 pr-4 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={() => setPaymentMethod('mpesa')}
                className={`flex-1 py-2 px-3 rounded-xl border font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'mpesa'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                    : 'border-slate-200 dark:border-slate-800 text-slate-500'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                <span>M-PESA (Kenya)</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex-1 py-2 px-3 rounded-xl border font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300'
                    : 'border-slate-200 dark:border-slate-800 text-slate-500'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                <span>Card / Wire</span>
              </button>
            </div>

            {/* Donor Fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                  Full Name / Institution
                </label>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="e.g. Mary Wanjiku"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                  Email Address for Tax Receipt *
                </label>
                <input
                  type="email"
                  required
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="mary@domain.com"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className={`w-full py-3.5 px-4 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md font-display-jakarta ${accentBtn}`}
              >
                Complete ${customAmount || selectedTier} Donation
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
