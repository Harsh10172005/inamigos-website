'use client';

import React from 'react';
import { Search, Zap, Users, BarChart3, ArrowRight } from 'lucide-react';
import { impactSteps } from '@/data/impact';

export const HowWeWork: React.FC = () => {
  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'Search': return <Search className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-4 py-1.5 rounded-full border border-emerald-200">
            Cyclical Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            How We Create Impact
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Our 4-step framework guarantees that every community initiative is grounded in real human dialogue, agile execution, and transparent outcome metrics.
          </p>
        </div>

        {/* 4 Connected Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {impactSteps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-emerald-500 font-mono transition-colors">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>
                <h4 className="text-xs font-bold text-emerald-700 mt-1 uppercase tracking-wider">
                  {step.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-emerald-700 transition-colors">
                <span>Phase 0{idx + 1} of 04</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
