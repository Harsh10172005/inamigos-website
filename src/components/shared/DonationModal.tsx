'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Receipt, 
  Printer, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { donationPresetTiers } from '@/data/impact';
import { generateReferenceNumber, formatCurrency } from '@/lib/utils';
import { DonationRecord } from '@/lib/types';
import { RazorpayLogo, UpiIcon, RuPayIcon } from '@/components/ui/PaymentIcons';
import { RazorpayCheckoutModal } from '@/components/shared/RazorpayCheckoutModal';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
  initialPurpose?: string;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialAmount = 1000,
  initialPurpose = 'General Community Impact',
}) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [purpose, setPurpose] = useState<string>(initialPurpose);
  
  // Donor details
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pan, setPan] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  // Steps & Modals
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [donationRecord, setDonationRecord] = useState<DonationRecord | null>(null);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (!prevIsOpen && isOpen) {
    setPrevIsOpen(true);
    setAmount(initialAmount);
    setPurpose(initialPurpose);
    setStep('details');
    setErrors({});
  } else if (prevIsOpen && !isOpen) {
    setPrevIsOpen(false);
  }

  const handleSelectPreset = (val: number) => {
    setAmount(val);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setAmount(parseInt(val, 10));
      setIsCustom(true);
    }
  };

  const getImpactDescription = (amt: number) => {
    if (amt <= 300) return 'Provides wholesome nutrition & stationery for 4 children at BachpanShala';
    if (amt <= 750) return 'Funds 1 indigenous tree sapling with 3 years of geotagged organic care';
    if (amt <= 1500) return 'Sponsors reflective glow collars & emergency first aid for 10 street canines';
    return 'Funds 1 month of accredited vocational tailoring training for an artisan mother in Udaan';
  };

  const validateDetails = () => {
    const errs: { [key: string]: string } = {};
    if (!amount || amount < 50) errs.amount = 'Minimum contribution is ₹50.';
    if (!donorName.trim()) errs.donorName = 'Please enter your full name.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Please enter a valid email address.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const [showRazorpayModal, setShowRazorpayModal] = useState(false);

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateDetails()) return;
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
      frequency,
      purpose,
      donorName,
      email,
      phone,
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

    setDonationRecord(record);
    setStep('success');

    try {
      const saved = JSON.parse(localStorage.getItem('inamigos_donations') || '[]');
      localStorage.setItem('inamigos_donations', JSON.stringify([record, ...saved]));
    } catch (e) {
      console.error(e);
    }

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 p-5 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white p-0.5 flex items-center justify-center shadow-sm shrink-0">
              <Image 
                src="/images/inamigos-emblem.png" 
                alt="InAmigos Foundation" 
                width={32} 
                height={32} 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-base font-extrabold">InAmigos Giving Portal</h2>
              <p className="text-xs text-emerald-100">Every contribution creates direct grassroots change</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-white/15 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {step === 'details' && (
            <form onSubmit={handleDetailsSubmit} className="space-y-5">
              {/* Frequency Toggle */}
              <div className="flex bg-slate-100 p-1 rounded-2xl">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                    frequency === 'one-time'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-time Donation
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    frequency === 'monthly'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>Give Monthly</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Donation Amount (INR)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {donationPresetTiers.map((tier) => (
                    <button
                      key={tier.amount}
                      type="button"
                      onClick={() => handleSelectPreset(tier.amount)}
                      className={`py-2.5 px-2 rounded-xl border text-xs sm:text-sm font-bold transition-all relative ${
                        amount === tier.amount && !isCustom
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50'
                      }`}
                    >
                      {tier.label}
                      {tier.popular && (
                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] bg-amber-500 text-white font-bold px-1.5 py-0.2 rounded-full uppercase">
                          Impact
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mt-2.5">
                  <div className="relative">
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
                </div>

                {/* Impact Statement Banner */}
                <div className="mt-3 p-3.5 rounded-2xl bg-emerald-50/90 border border-emerald-200/70 flex items-start gap-2.5 text-xs text-emerald-900">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Your <strong>{formatCurrency(amount)}</strong> contribution: {getImpactDescription(amount)}.
                  </span>
                </div>
              </div>

              {/* Cause Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Allocate Donation To
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
                >
                  <option value="General Community Impact">General Social Impact (Where needed most)</option>
                  <option value="BachpanShala - Child Education">BachpanShala (Foundational Child Education)</option>
                  <option value="Udaan - Women Empowerment">Udaan (Women Artisans & Livelihoods)</option>
                  <option value="Jeev - Animal Healthcare">Jeev (Stray Animals Feeding & Medical Care)</option>
                  <option value="Prakriti - Native Afforestation">Prakriti (Tree Plantation & Green Restoration)</option>
                  <option value="Sewa - Emergency Relief">Sewa (Seasonal Relief & Nutrition Kits)</option>
                  <option value="Vikas - Youth Fellowship">Vikas (Youth Leadership Internships)</option>
                </select>
              </div>

              {/* Donor Contact */}
              <div className="space-y-3">
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
                    placeholder="e.g. Ananya Sharma"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                      errors.donorName ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.donorName && <p className="text-[11px] text-red-500 mt-1">{errors.donorName}</p>}
                </div>

                <div className="grid grid-cols-2 gap-2.5">
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
                      placeholder="you@domain.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    PAN Card (Required for 80G Tax Exemption Certificate)
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    value={pan}
                    onChange={(e) => setPan(e.target.value.toUpperCase())}
                    placeholder="ABCDE1234F"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm uppercase tracking-wider font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>
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

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-sky-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Pay {formatCurrency(amount)} with Razorpay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Razorpay 256-Bit SSL • Instant Section 80G Tax Receipt</span>
                </div>
              </form>
            )}

            {step === 'success' && donationRecord && (
              <div className="text-center space-y-4 py-2">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Thank You, {donationRecord.donorName}!</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Your contribution of <strong>{formatCurrency(donationRecord.amount)}</strong> has been processed via Razorpay.
                  </p>
                </div>

                {/* Section 80G Official Receipt Card */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left text-xs space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <Receipt className="w-4 h-4 text-emerald-600" />
                      <span>Section 80G Donation Receipt</span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full font-mono">
                      Verified 80G
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-1.5 text-slate-600">
                    <span>Reference ID:</span>
                    <span className="font-mono font-bold text-slate-900 text-right">{donationRecord.referenceNumber}</span>
                    
                    {donationRecord.razorpayPaymentId && (
                      <>
                        <span>Razorpay Payment ID:</span>
                        <span className="font-mono font-bold text-sky-700 text-right">{donationRecord.razorpayPaymentId}</span>
                      </>
                    )}

                    <span>Date & Time:</span>
                    <span className="text-slate-900 text-right">{donationRecord.timestamp}</span>
                    
                    <span>Cause:</span>
                    <span className="text-slate-900 text-right truncate">{donationRecord.purpose}</span>

                    <span>Payment Gateway:</span>
                    <span className="text-slate-900 text-right font-semibold">Razorpay ({donationRecord.paymentMethod})</span>
                    
                    <span>Status:</span>
                    <span className="text-emerald-600 font-bold text-right">CAPTURED / PAID</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  A Section 80G tax receipt has been generated and dispatched to <strong>{donationRecord.email}</strong>. Eligible for 50% income tax deduction under Indian IT rules.
                </p>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print 80G Receipt</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                  >
                    Done
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
        phone={phone}
        onSuccess={handleRazorpaySuccess}
      />
    </>
  );
};
