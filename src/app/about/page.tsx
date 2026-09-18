'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Target, 
  Eye, 
  ShieldCheck 
} from 'lucide-react';
import { teamData } from '@/data/team';
import { DonationModal } from '@/components/shared/DonationModal';

export default function AboutPage() {
  const [donateOpen, setDonateOpen] = useState(false);
  const [activeTeamFilter, setActiveTeamFilter] = useState<'All' | 'Leadership' | 'Core' | 'Advisors'>('All');

  const filteredTeam = teamData.filter((member) => {
    if (activeTeamFilter === 'All') return true;
    return member.category === activeTeamFilter;
  });

  return (
    <main className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80"
            alt="InAmigos Foundation Community"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
            About InAmigos Foundation
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 text-balance">
            Where Youth Leadership Meets Grassroots Compassion
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Founded during the height of the COVID-19 pandemic, InAmigos Foundation has grown from a handful of dedicated student volunteers into a pan-India social movement mobilizing youth across 14 states.
          </p>
        </div>
      </section>

      {/* Origin Story Split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=80"
                  alt="InAmigos Relief Team in Action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 sm:bottom-6 sm:-left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="text-2xl font-extrabold text-emerald-600 font-mono">2020</div>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Born out of humanitarian COVID distress relief in New Delhi.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Our Origin Story
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                From a Relief Circle to a Nationwide Movement
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                In 2020, as schools shuttered and daily wage earners faced sudden destitution, a collective of college students chose action over paralysis. Armed with personal pocket money, safety gear, and bicycles, they began distributing dry rations, warm blankets, and stray dog meals across urban settlements.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                What began as temporary relief revealed deeper, persistent challenges: millions of children missing foundational schooling, women seeking dignified livelihoods, and barren urban spaces desperately needing green rejuvenation. That realization gave birth to our permanent pillars: <strong>BachpanShala</strong>, <strong>Udaan</strong>, <strong>Jeev</strong>, <strong>Sewa</strong>, and <strong>Prakriti</strong>.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="text-2xl font-extrabold text-emerald-600 font-mono">30,000+</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Interns & Campus Ambassadors</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="text-2xl font-extrabold text-teal-600 font-mono">14+</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Active Indian States Covered</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Pillars */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Our North Star</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Mission, Vision & Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To empower underserved children, women, animals, and ecosystems by channeling the creativity, empathy, and vigor of university youth into structured, accountable grassroots initiatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A harmonious, self-sustaining India where socio-economic status does not dictate human potential, voiceless street animals are treated with humane dignity, and urban forests flourish.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Core Principles</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Total fiscal transparency, zero political affiliation, community-led co-design, strict child protection safety protocols, and science-backed afforestation methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Core Team Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">The People Behind The Work</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Leadership & Advisory Board</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Guided by experienced mentors, social scientists, and young grassroots leaders.</p>
            </div>

            <div className="flex gap-2">
              {(['All', 'Leadership', 'Core', 'Advisors'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveTeamFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeTeamFilter === filter
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeam.map((member) => (
              <div
                key={member.id}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-4 ring-2 ring-emerald-500/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    {member.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2">{member.name}</h3>
                  <p className="text-xs font-semibold text-slate-500">{member.role}</p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-400">
                  Location: <span className="text-slate-700 font-medium">{member.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Ready to make a difference with us?</h3>
            <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-xl">
              Join our active community of 200+ volunteers or power our initiatives through a tax-deductible donation.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/volunteer"
              className="px-5 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition-colors"
            >
              Become a Volunteer
            </Link>
            <button
              onClick={() => setDonateOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-emerald-950/60 border border-white/20 text-white font-bold text-xs hover:bg-emerald-950 transition-colors"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      <DonationModal
        isOpen={donateOpen}
        onClose={() => setDonateOpen(false)}
      />
    </main>
  );
}
