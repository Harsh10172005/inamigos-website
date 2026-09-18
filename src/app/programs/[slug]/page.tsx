'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Heart, 
  Users, 
  CheckCircle, 
  Target
} from 'lucide-react';
import { programsData } from '@/data/programs';
import { DonationModal } from '@/components/shared/DonationModal';

export default function ProgramDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const program = programsData.find((p) => p.slug === slug);

  const [donateOpen, setDonateOpen] = useState(false);

  if (!program) {
    return (
      <div className="pt-32 pb-24 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900">Program Not Found</h2>
        <p className="text-xs text-slate-500 mt-2">The initiative you are looking for does not exist.</p>
        <Link href="/programs" className="mt-4 inline-block px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold">
          Back to Programs
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative bg-slate-950 text-white min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={program.heroImage}
            alt={program.name}
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 w-full">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Programs</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/90 border border-emerald-800 px-3 py-1 rounded-full">
                {program.category}
              </span>
              {program.nativeName && (
                <span className="text-sm font-semibold text-slate-300">{program.nativeName}</span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {program.name}
            </h1>

            <p className="text-lg text-emerald-200 font-medium">
              {program.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {program.fullDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setDonateOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support {program.name}</span>
              </button>

              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all"
              >
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Volunteer for this Cause</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-emerald-50 border-y border-emerald-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {program.metrics.map((m, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars & Highlights */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Architecture</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Strategic Pillars & Methodology</h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                How our field coordinators and youth volunteers ensure lasting outcomes for {program.name}.
              </p>
            </div>

            <div className="space-y-4">
              {program.pillars.map((pillar, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-200/80">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <h3>{pillar.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed pl-8">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Program Highlights */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Key Outcomes & Field Deliverables</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Info Card & SDGs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-7 rounded-3xl space-y-5 shadow-xl">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-400" />
                <span>Target Beneficiary Demographics</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {program.targetBeneficiaries}
              </p>

              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-semibold text-slate-400 block mb-2">
                  UN Sustainable Development Goals (SDGs)
                </span>
                <div className="flex flex-wrap gap-2">
                  {program.sdgs.map((sdg, i) => (
                    <span key={i} className="text-xs font-semibold bg-white/10 text-emerald-300 px-3 py-1 rounded-xl border border-white/10">
                      {sdg}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setDonateOpen(true)}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  Make a Dedicated Contribution
                </button>
              </div>
            </div>

            {/* Photo Gallery Grid */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3">Field Action Photos</h4>
              <div className="grid grid-cols-3 gap-2">
                {program.gallery.map((img, i) => (
                  <div key={i} className="relative h-24 rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={img}
                      alt={`${program.name} photo ${i + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal
        isOpen={donateOpen}
        onClose={() => setDonateOpen(false)}
        initialPurpose={`${program.name} - ${program.category}`}
      />
    </main>
  );
}
