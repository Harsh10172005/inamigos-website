'use client';

import React from 'react';
import { VolunteerCTA } from '@/components/home/VolunteerCTA';

export default function VolunteerPage() {
  const steps = [
    {
      num: '01',
      title: 'Submit Application',
      desc: 'Fill out your basic contact details, area of interest, and weekend availability.'
    },
    {
      num: '02',
      title: 'Quick Virtual Orientation',
      desc: 'Join a 30-minute Google Meet orientation detailing regional safety codes and volunteer norms.'
    },
    {
      num: '03',
      title: 'Join Local WhatsApp Cohort',
      desc: 'Connect directly with fellow volunteer leads and receive weekly drive schedules.'
    },
    {
      num: '04',
      title: 'Create Direct Impact',
      desc: 'Attend on-ground drives, mentor children, care for animals, or plant urban saplings.'
    }
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
            Mobilizing Youth Energy
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            Become an InAmigos Volunteer
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Channel your weekend hours into transforming childhoods, protecting animals, and restoring nature. No prior NGO experience necessary.
          </p>
        </div>
      </section>

      {/* 4-Step Onboarding Journey */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Simple Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              How Onboarding Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <span className="text-2xl font-extrabold text-emerald-600 font-mono">{s.num}</span>
                <h3 className="text-base font-bold text-slate-900 mt-2">{s.title}</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dynamic Volunteer Form & Perks */}
      <VolunteerCTA />
    </main>
  );
}
