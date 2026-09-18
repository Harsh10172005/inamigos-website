'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Globe2, 
  Award, 
  Briefcase,
  Loader2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VolunteerApplication } from '@/lib/types';

export const VolunteerCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    areaOfInterest: 'Education (BachpanShala)',
    availability: 'Weekends (4-6 hours)',
    skills: '',
    statement: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const benefits = [
    {
      icon: Heart,
      title: 'Make an Impact',
      desc: 'Work directly with children, community animals, and grassroots families.'
    },
    {
      icon: GraduationCap,
      title: 'Build Skills',
      desc: 'Gain field project management, social outreach, and campaign communication experience.'
    },
    {
      icon: Globe2,
      title: 'Meet People',
      desc: 'Connect with hundreds of passionate youth changemakers across university campuses.'
    },
    {
      icon: Award,
      title: 'Lead Initiatives',
      desc: 'Earn verified volunteer certificates, letters of recommendation, and leadership badges.'
    },
    {
      icon: Briefcase,
      title: 'Gain Meaningful Experience',
      desc: 'Build portfolio-ready social development work proof respected by employers.'
    }
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Please enter a valid email address.';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) errs.phone = 'Please enter a valid 10-digit phone number.';
    if (!formData.city.trim()) errs.city = 'Please enter your current city.';
    if (!formData.statement.trim() || formData.statement.trim().length < 10) errs.statement = 'Please write a brief sentence (minimum 10 characters).';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedName(formData.fullName);
      setShowSuccessModal(true);

      const record: VolunteerApplication = {
        ...formData,
        submittedAt: new Date().toISOString()
      };

      try {
        const saved = JSON.parse(localStorage.getItem('inamigos_volunteers') || '[]');
        localStorage.setItem('inamigos_volunteers', JSON.stringify([record, ...saved]));
      } catch (err) {
        console.error(err);
      }

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        areaOfInterest: 'Education (BachpanShala)',
        availability: 'Weekends (4-6 hours)',
        skills: '',
        statement: ''
      });
      setErrors({});

      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 900);
  };

  return (
    <section id="volunteer" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
            Join The Movement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Be More Than a Supporter. Be Part of the Change.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Whether you can give 4 hours on weekends or lead an entire university cohort, your energy can transform lives. Join over 200 active volunteers and 30,000 interns nationwide.
          </p>
        </div>

        {/* Two-Column Grid: Benefits vs Dynamic Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Volunteer Perks & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Why Volunteer With InAmigos?
            </h3>
            
            <div className="space-y-3.5">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div 
                    key={i} 
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-5 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md">
              <div className="flex items-center gap-2 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Verified Certificate & LOR</span>
              </div>
              <p className="text-xs text-emerald-100 mt-1.5 leading-relaxed">
                Active volunteers logging 30+ hours receive an official digitally verifiable volunteer certificate and personalized Letter of Recommendation.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Volunteer Application Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl relative">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Volunteer Application Form
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out your details below. Our regional volunteer coordinator will contact you within 48 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Ishaan Verma"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                      errors.fullName ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="ishaan@domain.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                      errors.phone ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Current City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => {
                      setFormData({ ...formData, city: e.target.value });
                      if (errors.city) setErrors({ ...errors, city: '' });
                    }}
                    placeholder="e.g. New Delhi, Bengaluru"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                      errors.city ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Area of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Education (BachpanShala)">Education & Child Tutoring (BachpanShala)</option>
                    <option value="Women Empowerment (Udaan)">Women Vocational Skills (Udaan)</option>
                    <option value="Animal Welfare (Jeev)">Stray Animal Care & Feeding (Jeev)</option>
                    <option value="Environmental Conservation (Prakriti)">Tree Planting & Cleanups (Prakriti)</option>
                    <option value="Disaster & Community Relief (Sewa)">Community Aid & Ration Drives (Sewa)</option>
                    <option value="Digital Media & Content (Vikas)">Digital Advocacy & Media (Vikas)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Availability <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Weekends (4-6 hours)">Weekends Only (4-6 hours)</option>
                    <option value="Weekdays Part-time (2 hours/day)">Weekdays Part-time (2 hours/day)</option>
                    <option value="Full-time Summer/Winter Fellowship">Full-time Internship (4-8 weeks)</option>
                    <option value="Remote / Virtual Support">Remote / Virtual Projects Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Skills & Superpowers (Optional)
                </label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="e.g. Teaching Math, Graphic Design, Veterinary First Aid, Photography"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Why do you want to volunteer with InAmigos? <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.statement}
                  onChange={(e) => {
                    setFormData({ ...formData, statement: e.target.value });
                    if (errors.statement) setErrors({ ...errors, statement: '' });
                  }}
                  placeholder="Share a short note on what inspires you to join our on-ground movement..."
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none resize-none transition-all ${
                    errors.statement ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-emerald-500'
                  }`}
                />
                {errors.statement && <p className="text-[11px] text-red-500 mt-1">{errors.statement}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>Join the Movement</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                By submitting, you agree to abide by InAmigos non-profit child safety and community conduct guidelines.
              </p>
            </form>
          </div>

        </div>

      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-4 shadow-2xl border border-slate-100">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900">Welcome to the Movement!</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Thank you, <strong>{submittedName}</strong>! Your volunteer registration has been recorded. Our regional coordinator will review your profile and reach out via email/WhatsApp with orientation details.
              </p>
            </div>

            <div className="p-3 bg-emerald-50 rounded-2xl text-xs text-emerald-800 font-semibold border border-emerald-200/80">
              Check your inbox shortly for our Volunteer Starter Guide & Chapter Link!
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
