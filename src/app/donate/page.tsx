'use client';

import React from 'react';
import { DonationCTA } from '@/components/home/DonationCTA';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { faqList } from '@/data/impact';

export default function DonatePage() {
  const taxPerks = [
    {
      title: '50% Tax Exemption Under Section 80G',
      desc: 'All eligible contributions qualify for a 50% deduction on your taxable income as per Indian Income Tax guidelines.'
    },
    {
      title: 'Instant Digital 80G Tax Receipt',
      desc: 'Upon contribution, receive a digitally signed receipt containing unique reference code and PAN details for hassle-free ITR filing.'
    },
    {
      title: 'Audited Programmatic Allocation',
      desc: 'Annual audited financial returns published openly for donor verification, ensuring maximum on-ground efficiency.'
    },
    {
      title: 'Secured by Razorpay Gateway',
      desc: 'End-to-end 256-bit bank-grade encryption supporting UPI (GPay, PhonePe, Paytm, BHIM), RuPay, Visa, Mastercard, and NetBanking.'
    }
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
            Transparent Giving
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            Support Grassroots Changemakers
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Your contribution directly funds child study centers, women craft cooperatives, stray dog medical rescues, and native tree saplings.
          </p>
        </div>
      </section>

      {/* Main Donation Card Section */}
      <DonationCTA />

      {/* 80G Tax Exemption & Statutory Information */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Tax Exemption Benefits</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Maximize Your Impact & Tax Savings
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {taxPerks.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="text-sm font-bold text-slate-900">{p.title}</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Donation FAQ */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 text-center mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqList.slice(0, 3).map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900">{item.q}</h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
