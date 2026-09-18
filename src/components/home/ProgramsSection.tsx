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
  Layers,
  X
} from 'lucide-react';
import { programsData } from '@/data/programs';
import { Program, ProgramCategory } from '@/lib/types';
import { ProgramModal } from '@/components/shared/ProgramModal';

interface ProgramsSectionProps {
  onDonateToCause?: (causeName: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onDonateToCause }) => {
  const [activeCategory, setActiveCategory] = useState<ProgramCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

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
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
            Targeted Interventions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Our Programs & Initiatives
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From educating first-generation learners to rehabilitating stray animals and planting native urban forests, explore our community-driven programs.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-100/90 p-1.5 rounded-2xl w-full lg:w-auto">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? programsData.length 
                : programsData.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat ? 'bg-emerald-700/80 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Field & Result Counter */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <span className="text-xs text-slate-400 hidden sm:block whitespace-nowrap">
              Showing {filteredPrograms.length} of {programsData.length}
            </span>
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search initiatives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Program Cards Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPrograms.map((program) => (
              <div
                key={program.slug}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Image Header with Badge & Title */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={program.heroImage}
                    alt={program.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-emerald-800 shadow-sm">
                      {program.category}
                    </span>
                  </div>

                  {/* Icon badge floating bottom-left */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-600/90 backdrop-blur-md flex items-center justify-center text-white shadow-md shrink-0">
                      {getProgramIcon(program.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white leading-tight">
                        {program.name}
                      </h3>
                      {program.nativeName && (
                        <span className="text-xs text-slate-300 font-medium">{program.nativeName}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                      {program.tagline}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Impact Metric Strip */}
                  <div className="bg-emerald-50/80 rounded-2xl p-3.5 border border-emerald-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider block">
                        Direct Impact
                      </span>
                      <span className="text-sm font-extrabold text-emerald-700 font-mono">
                        {program.impactMetric}
                      </span>
                    </div>
                    <Award className="w-6 h-6 text-emerald-500/50 shrink-0" />
                  </div>

                  {/* Card Footer CTAs */}
                  <div className="pt-3 flex items-center justify-between border-t border-slate-100 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProgram(program)}
                      className="text-xs font-bold text-slate-800 hover:text-emerald-600 flex items-center gap-1.5 transition-colors py-2 group/btn cursor-pointer"
                    >
                      <span>Explore Program</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <Link
                      href={`/programs/${program.slug}`}
                      className="text-xs font-semibold text-slate-500 hover:text-emerald-700 py-1.5 px-3 rounded-xl hover:bg-emerald-50 transition-colors"
                    >
                      Deep Dive →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-sm">No programs found matching &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Program Detail Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onDonateToProgram={(name) => {
          setSelectedProgram(null);
          if (onDonateToCause) onDonateToCause(name);
        }}
      />
    </section>
  );
};
