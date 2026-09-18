'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubscribed(true);
    }, 600);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute -top-24 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 px-3.5 py-1 rounded-full border border-emerald-800/70">
          Transparent Communication
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
          Join 45,000+ Citizens Tracking Our Impact
        </h2>

        <p className="text-slate-400 text-sm sm:text-base mt-2.5 max-w-xl mx-auto leading-relaxed">
          Receive monthly dispatches with verified project metrics, upcoming volunteer drive schedules, and inspiring beneficiary case studies.
        </p>

        <div className="mt-8 max-w-md mx-auto">
          {isSubscribed ? (
            <div className="bg-emerald-950/80 border border-emerald-800 p-4 rounded-2xl flex items-center justify-center gap-2.5 text-emerald-300 text-sm font-semibold animate-in fade-in duration-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>You&apos;re in! Thank you for subscribing to InAmigos Foundation.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/90 rounded-2xl border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0 disabled:opacity-50 cursor-pointer"
              >
                <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-500 mt-3">
            Zero spam. Unsubscribe anytime with a single click.
          </p>
        </div>
      </div>
    </section>
  );
};
