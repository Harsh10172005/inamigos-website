'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  GraduationCap, 
  Sparkles, 
  HeartHandshake, 
  Users, 
  Trees, 
  TrendingUp, 
  ArrowRight,
  Award,
  Layers
} from 'lucide-react';
import { programsData } from '@/data/programs';
import { Program, ProgramCategory } from '@/lib/types';
import { ProgramModal } from '@/components/shared/ProgramModal';
import { DonationModal } from '@/components/shared/DonationModal';

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState<ProgramCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [donateOpen, setDonateOpen] = useState(false);
  const [donateCause, setDonateCause] = useState('General Community Impact');

  const categories: ProgramCategory[] = [
    'All',
    'Education',
    'Women',
    'Environment',
    'Animals',
    'Community',
    'Youth'
  ];

  const filteredPrograms = useMemo(() => {
    return programsData.filter((program) => {
      const matchesCategory = activeCategory === 'All' || program.category === activeCategory;
      const matchesSearch = 
        program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Trees': return <Trees className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <main className="pt-24 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
            Core Programmatic Focus
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            Our Grassroots Causes & Initiatives
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Every cause is anchored by quantifiable outcomes, trained local facilitators, and sustainable volunteer support.
          </p>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by initiative or cause..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.slug}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={program.heroImage}
                  alt={program.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-800 shadow-sm">
                    {program.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                      {getProgramIcon(program.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight leading-tight">
                        {program.name}
                      </h3>
                      {program.nativeName && (
                        <span className="text-xs text-slate-300 font-medium">{program.nativeName}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                    {program.tagline}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="bg-emerald-50/80 rounded-2xl p-3 border border-emerald-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-emerald-800 font-semibold uppercase tracking-wider block">
                      Program Reach
                    </span>
                    <span className="text-sm font-extrabold text-emerald-700 font-mono">
                      {program.impactMetric}
                    </span>
                  </div>
                  <Award className="w-6 h-6 text-emerald-500/50 shrink-0" />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProgram(program)}
                    className="text-xs font-bold text-slate-800 hover:text-emerald-600 flex items-center gap-1.5 transition-colors py-2"
                  >
                    <span>Quick Preview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    href={`/programs/${program.slug}`}
                    className="text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 py-2 px-3.5 rounded-xl shadow-sm transition-colors"
                  >
                    Full Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Program Quick Preview Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onDonateToProgram={(name) => {
          setSelectedProgram(null);
          setDonateCause(name);
          setDonateOpen(true);
        }}
      />

      <DonationModal
        isOpen={donateOpen}
        onClose={() => setDonateOpen(false)}
        initialPurpose={donateCause}
      />
    </main>
  );
}
