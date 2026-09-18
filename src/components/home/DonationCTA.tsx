'use client';

import React, { useState } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Receipt,
  Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { donationPresetTiers } from '@/data/impact';
import { generateReferenceNumber, formatCurrency } from '@/lib/utils';
import { DonationRecord } from '@/lib/types';
import { RazorpayLogo, UpiIcon, RuPayIcon } from '@/components/ui/PaymentIcons';
import { RazorpayCheckoutModal } from '@/components/shared/RazorpayCheckoutModal';

export const DonationCTA: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [purpose, setPurpose] = useState('BachpanShala - Child Education');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Razorpay state
  const [showRazorpayModal, setShowRazorpayModal] = useState(false);
  const [donationResult, setDonationResult] = useState<DonationRecord | null>(null);

  const handleSelectPreset = (val: number) => {
    setAmount(val);
    setIsCustom(false);
    setCustomAmount('');
    if (errors.amount) setErrors({ ...errors, amount: '' });
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setAmount(parseInt(val, 10));
      setIsCustom(true);
      if (errors.amount) setErrors({ ...errors, amount: '' });
    }
  };

  const getImpactDescription = (amt: number) => {
    if (amt <= 300) return 'Provides wholesome nutrition & books for 4 children at BachpanShala';
    if (amt <= 750) return 'Sponsors 1 native tree sapling with 3 years of geotagged organic care';
    if (amt <= 1500) return 'Covers reflective safety glow collars and first aid for 10 street dogs';
    return 'Funds 1 month of professional tailoring and craft training for an artisan mother in Udaan';
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!amount || amount < 50) errs.amount = 'Minimum contribution is ₹50.';
    if (!donorName.trim()) errs.donorName = 'Please enter your full name.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Please enter a valid email address.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setShowRazorpayModal(true);
  };

  const handleRazorpaySuccess = (res: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    payment_method: string;
  }) => {
    setShowRazorpayModal(false);
    const ref = generateReferenceNumber('IAF-DON');
    const record: DonationRecord = {
      referenceNumber: ref,
      razorpayPaymentId: res.razorpay_payment_id,
      razorpayOrderId: res.razorpay_order_id,
      amount,
      frequency: 'one-time',
      purpose,
      donorName,
      email,
      message,
      timestamp: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      paymentMethod: res.payment_method,
      status: 'SUCCESS'
    };

    setDonationResult(record);

    try {
      const saved = JSON.parse(localStorage.getItem('inamigos_donations') || '[]');
      localStorage.setItem('inamigos_donations', JSON.stringify([record, ...saved]));
    } catch (err) {
      console.error(err);
    }

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="donate" className="py-24 bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white relative overflow-hidden">
      {/* Subtle organic light orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Trust Impact */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-800">
              Transform Lives Today
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Your Contribution Can Become Someone’s Opportunity.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every child deserving foundational education, every street animal in need of emergency rescue, and every sapling waiting to restore city lungs depends on citizen action.
            </p>

            {/* Impact Highlights */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Section 80G Tax Exemption</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                    All contributions by Indian resident taxpayers are eligible for 50% deduction under Section 80G of the Income Tax Act.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Direct Grassroots Allocation</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                    Over 85% of funds directly support books, learning tabs, veterinary first-aid, saplings, and raw artisan materials.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-emerald-300 font-semibold italic pt-2">
              “Every contribution is directed toward meaningful community initiatives.”
            </p>
          </div>

          {/* Right Column: Interactive Donation Card */}
          <div className="lg:col-span-6 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            
            {!donationResult ? (
              <form onSubmit={handleDonate} className="space-y-5">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                    <h3 className="font-extrabold text-base text-slate-900">Make an Impact Donation</h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
                    Secure Demo Flow
                  </span>
                </div>

                {/* Preset Amount Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Contribution Amount
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {donationPresetTiers.map((tier) => (
                      <button
                        key={tier.amount}
                        type="button"
                        onClick={() => handleSelectPreset(tier.amount)}
                        className={`py-2.5 px-2 rounded-2xl border text-xs sm:text-sm font-bold transition-all text-center relative ${
                          amount === tier.amount && !isCustom
                            ? 'border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50'
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-2.5 relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">₹</span>
                    <input
                      type="text"
                      placeholder="Or enter custom amount in INR"
                      value={customAmount}
                      onChange={handleCustomChange}
                      className={`w-full pl-8 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                        isCustom
                          ? 'border-emerald-600 ring-2 ring-emerald-600/20 bg-emerald-50/40 text-slate-900 font-bold'
                          : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    />
                  </div>
                  {errors.amount && <p className="text-[11px] text-red-500 mt-1">{errors.amount}</p>}

                  <div className="mt-3 p-3 rounded-2xl bg-emerald-50/90 border border-emerald-200/70 flex items-start gap-2.5 text-xs text-emerald-900">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Your <strong>{formatCurrency(amount)}</strong> impact: {getImpactDescription(amount)}.</span>
                  </div>
                </div>

                {/* Purpose Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Direct Contribution Toward
                  </label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="BachpanShala - Child Education">BachpanShala (Foundational Child Education)</option>
                    <option value="Udaan - Women Empowerment">Udaan (Women Artisans & Livelihoods)</option>
                    <option value="Jeev - Animal Healthcare">Jeev (Stray Animals Feeding & Medical Care)</option>
                    <option value="Prakriti - Native Afforestation">Prakriti (Tree Plantation & Green Restoration)</option>
                    <option value="Sewa - Emergency Relief">Sewa (Seasonal Relief & Nutrition Kits)</option>
                    <option value="Vikas - Youth Fellowship">Vikas (Youth Leadership Internships)</option>
                  </select>
                </div>

                {/* Donor Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => {
                        setDonorName(e.target.value);
                        if (errors.donorName) setErrors({ ...errors, donorName: '' });
                      }}
                      placeholder="e.g. Priya Nair"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.donorName ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    />
                    {errors.donorName && <p className="text-[11px] text-red-500 mt-1">{errors.donorName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="priya@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Optional Message / Dedication
                  </label>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="In memory of... / Best wishes from our family"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Razorpay Trust Strip */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2">
                    <RazorpayLogo className="h-4" />
                    <span className="text-[11px] text-slate-600 font-semibold hidden sm:inline">• Secured Gateway</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UpiIcon className="h-3.5" />
                    <RuPayIcon className="h-3.5" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-sky-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Pay {formatCurrency(amount)} with Razorpay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Razorpay 256-Bit SSL • Instant Section 80G Tax Receipt</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900">Thank You, {donationResult.donorName}!</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Your contribution of <strong>{formatCurrency(donationResult.amount)}</strong> has been processed via Razorpay.
                  </p>
                </div>

                {/* Section 80G Tax Exemption Receipt */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left text-xs space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 font-bold">
                    <div className="flex items-center gap-1.5 text-slate-800">
                      <Receipt className="w-4 h-4 text-emerald-600" />
                      <span>Section 80G Tax Exemption Receipt</span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-mono font-bold">
                      Verified 80G
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-1.5 text-slate-600">
                    <span>Reference ID:</span>
                    <span className="text-slate-900 text-right font-mono font-bold">{donationResult.referenceNumber}</span>
                    
                    {donationResult.razorpayPaymentId && (
                      <>
                        <span>Razorpay Payment ID:</span>
                        <span className="text-sky-700 text-right font-mono font-bold">{donationResult.razorpayPaymentId}</span>
                      </>
                    )}

                    <span>Date & Time:</span>
                    <span className="text-slate-900 text-right font-medium">{donationResult.timestamp}</span>
                    
                    <span>Cause:</span>
                    <span className="text-slate-900 text-right font-medium truncate">{donationResult.purpose}</span>

                    <span>Payment Gateway:</span>
                    <span className="text-slate-900 text-right font-semibold">Razorpay ({donationResult.paymentMethod})</span>

                    <span>Amount:</span>
                    <span className="text-emerald-700 font-bold text-right font-mono text-sm">{formatCurrency(donationResult.amount)}</span>
                    
                    <span>Status:</span>
                    <span className="text-emerald-600 font-bold text-right">PAID / CAPTURED</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex-1 py-3 px-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print 80G Receipt</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationResult(null)}
                    className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                  >
                    Donate Again
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Razorpay Checkout Modal Simulator / Gateway */}
      <RazorpayCheckoutModal
        isOpen={showRazorpayModal}
        onClose={() => setShowRazorpayModal(false)}
        amount={amount}
        purpose={purpose}
        donorName={donorName}
        email={email}
        onSuccess={handleRazorpaySuccess}
      />
    </section>
  );
};
