'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Heart, GraduationCap, Trees, Users, MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const ImpactStats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    lives: 0,
    interns: 0,
    trees: 0,
    volunteers: 0,
    states: 0
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800;
          const steps = 45;
          const stepTime = duration / steps;
          let step = 0;

          const interval = setInterval(() => {
            step++;
            const t = step / steps;
            const progress = 1 - Math.pow(1 - t, 3);

            setCounts({
              lives: Math.floor(progress * 50000),
              interns: Math.floor(progress * 30000),
              trees: Math.floor(progress * 20000),
              volunteers: Math.floor(progress * 200),
              states: Math.floor(progress * 14)
            });

            if (step >= steps) {
              clearInterval(interval);
              setCounts({
                lives: 50000,
                interns: 30000,
                trees: 20000,
                volunteers: 200,
                states: 14
              });
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/70">
      {/* Soft gradient background blooms */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-4 py-1.5 rounded-full border border-emerald-200">
            Measurable Field Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Our Impact, Powered by People
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Every quantified metric represents a child empowered, a woman skilled, a life saved, or a native tree flourishing under continuous community care.
          </p>
        </div>

        {/* 5-Column Impact Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          
          {/* 1. Lives Impacted */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 fill-emerald-100" />
              </div>
              <div className="text-3xl font-black text-slate-900 font-mono tracking-tight">
                {counts.lives.toLocaleString('en-IN')}+
              </div>
              <h3 className="text-sm font-bold text-slate-800 mt-1.5">Lives Impacted</h3>
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Via child learning centers, nutrition kits, and emergency aid.
            </p>
          </div>

          {/* 2. Interns Trained */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-slate-900 font-mono tracking-tight">
                {counts.interns.toLocaleString('en-IN')}+
              </div>
              <h3 className="text-sm font-bold text-slate-800 mt-1.5">Interns Trained</h3>
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              University youth trained in digital advocacy & grassroots ops.
            </p>
          </div>

          {/* 3. Trees Planted */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Trees className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-slate-900 font-mono tracking-tight">
                {counts.trees.toLocaleString('en-IN')}+
              </div>
              <h3 className="text-sm font-bold text-slate-800 mt-1.5">Trees Planted</h3>
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Native species monitored with 85%+ verified 3-year survival.
            </p>
          </div>

          {/* 4. Active Volunteers */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-slate-900 font-mono tracking-tight">
                {counts.volunteers.toLocaleString('en-IN')}+
              </div>
              <h3 className="text-sm font-bold text-slate-800 mt-1.5">Active Volunteers</h3>
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              On-ground coordinators driving weekly weekend social campaigns.
            </p>
          </div>

          {/* 5. Indian States Reached */}
          <div className="col-span-2 lg:col-span-1 bg-gradient-to-br from-emerald-600 to-teal-700 p-6 rounded-3xl text-white shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-black text-white font-mono tracking-tight">
                {counts.states}+
              </div>
              <h3 className="text-sm font-bold text-emerald-100 mt-1.5">Indian States</h3>
              <p className="text-xs text-emerald-100/85 mt-2 leading-relaxed">
                Active chapters from Delhi NCR to Karnataka & West Bengal.
              </p>
            </div>

            <Link
              href="/impact"
              className="mt-5 pt-3.5 border-t border-white/20 text-xs font-bold flex items-center justify-between text-white hover:text-emerald-200 transition-colors"
            >
              <span>Explore full audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
