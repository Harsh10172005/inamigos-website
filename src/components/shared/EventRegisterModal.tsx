'use client';

import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2, Ticket, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EventItem } from '@/lib/types';
import { generateReferenceNumber } from '@/lib/utils';

interface EventRegisterModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventRegisterModal: React.FC<EventRegisterModalProps> = ({
  event,
  isOpen,
  onClose
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [passNumber, setPassNumber] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen || !event) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Please enter a valid email address.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) errs.phone = 'Please enter a valid 10-digit phone number.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const passId = generateReferenceNumber('EVT-PASS');
      setPassNumber(passId);
      setIsSuccess(true);

      try {
        const saved = JSON.parse(localStorage.getItem('inamigos_event_rsvps') || '[]');
        localStorage.setItem(
          'inamigos_event_rsvps',
          JSON.stringify([
            { passId, eventTitle: event.title, fullName, email, phone, timestamp: new Date().toISOString() },
            ...saved
          ])
        );
      } catch (err) {
        console.error(err);
      }

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setOrganization('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 p-5 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Ticket className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold">Event Registration Pass</h2>
              <p className="text-[11px] text-slate-400">100% Free • Verified Digital Entry</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Event Quick Info Banner */}
              <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  {event.category} • {event.venueType}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-2">{event.title}</h3>
                <div className="mt-2.5 flex flex-col gap-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Form Inputs */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  placeholder="e.g. Rahul Sen"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                    errors.fullName ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    placeholder="rahul@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                      errors.phone ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  College / Organization (Optional)
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. Delhi University / TCS CSR"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <p className="text-[11px] text-slate-500 leading-normal">
                Participation is free. Event location, orientation instructions, and safety guidelines will be delivered to your email.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating Pass...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Free RSVP Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-2">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Seat Confirmed!</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Welcome aboard, <strong>{fullName}</strong>. Your participation pass is generated below.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-2xl text-left text-white space-y-3 shadow-xl relative overflow-hidden border border-slate-700">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-xs tracking-wider uppercase text-emerald-400">
                      InAmigos Official Pass
                    </span>
                  </div>
                  <span className="font-mono text-xs text-emerald-300 font-bold">{passNumber}</span>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-white">{event.title}</h4>
                  <p className="text-xs text-slate-300 mt-1">{event.date} • {event.time}</p>
                  <p className="text-xs text-slate-400">{event.location}</p>
                </div>

                <div className="pt-2.5 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Attendee: <strong className="text-white">{fullName}</strong></span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                    VERIFIED ENTRY
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
