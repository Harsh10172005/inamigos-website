'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Heart, 
  CheckCircle2, 
  Users2
} from 'lucide-react';
import { timelineEvents } from '@/data/impact';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Stack with Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                alt="InAmigos Foundation Community Mentorship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating Impact Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs animate-in slide-in-from-bottom duration-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Youth-Led Movement</div>
                  <div className="text-xs text-slate-500">Transforming grassroots empathy into lasting systemic progress.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                Our Purpose & Ethos
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 leading-tight">
                Building a Better Future, One Community at a Time.
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              InAmigos Foundation was established with a singular conviction: lasting societal change is not created by distant charity, but through sustained, human-centric community action. We empower the next generation of youth to roll up their sleeves and solve tangible challenges alongside the people who face them.
            </p>

            {/* Interactive Tab Switcher for Mission / Vision / Values */}
            <div className="bg-slate-100/80 p-1.5 rounded-2xl flex gap-1 max-w-md">
              <button
                type="button"
                onClick={() => setActiveTab('mission')}
                className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                  activeTab === 'mission'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Our Mission
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('vision')}
                className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                  activeTab === 'vision'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Our Vision
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('values')}
                className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                  activeTab === 'values'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Core Values
              </button>
            </div>

            {/* Tab Contents */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 min-h-[130px] flex items-center">
              {activeTab === 'mission' && (
                <div className="space-y-1.5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Target className="w-4 h-4" />
                    <span>Empowerment Through Direct Grassroots Intervention</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To democratize foundational education, promote economic dignity for women, protect street animals, and reverse environmental degradation through decentralized, youth-driven community chapters across India.
                  </p>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-1.5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Eye className="w-4 h-4" />
                    <span>An Inclusive, Equitable, and Green Tomorrow</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A society where every child can read and learn without hindrance, where voiceless street animals receive humane shelter, and where citizens actively safeguard their local biodiversity.
                  </p>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Heart className="w-4 h-4" />
                    <span>Empathy • Transparency • Action • Integrity</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We measure our success not by intentions, but by verified outcomes. We believe in absolute financial transparency, dignity for every beneficiary, and non-violent compassion for all living beings.
                  </p>
                </div>
              )}
            </div>

            {/* Discover Link CTA */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm group"
              >
                <span>Discover Our Story & Full Leadership Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Small Animated Timeline Section */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Our Journey</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Milestones of Growing Impact
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              From a handful of volunteer students during COVID-19 to a certified pan-India grassroots network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {timelineEvents.map((item, index) => (
              <div 
                key={item.year}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-xl font-extrabold text-emerald-600 font-mono flex items-center justify-between">
                    <span>{item.year}</span>
                    <span className="text-[10px] text-slate-400 font-medium font-sans">Step 0{index + 1}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mt-2 line-clamp-2">{item.title}</h4>
                  <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/60 w-full flex items-center gap-1 text-[10px] text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span>Verified Milestones</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
