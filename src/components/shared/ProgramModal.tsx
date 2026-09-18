'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowRight, CheckCircle, Award, HeartHandshake } from 'lucide-react';
import { Program } from '@/lib/types';

interface ProgramModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
  onDonateToProgram?: (programName: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  isOpen,
  onClose,
  onDonateToProgram
}) => {
  if (!isOpen || !program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Image */}
        <div className="relative h-56 sm:h-64 w-full shrink-0">
          <Image
            src={program.heroImage}
            alt={program.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/80 text-white uppercase tracking-wider">
                {program.category}
              </span>
              {program.nativeName && (
                <span className="text-xs text-slate-300 font-medium">{program.nativeName}</span>
              )}
            </div>
            <h2 className="text-2xl font-bold mt-1">{program.name}</h2>
            <p className="text-xs text-slate-300">{program.tagline}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Impact Metric Banner */}
          <div className="bg-emerald-50 border border-emerald-200/80 p-4 rounded-2xl flex items-center justify-between">
            <div>
              <span className="text-xs text-emerald-800 font-medium">Quantified Impact</span>
              <div className="text-xl font-extrabold text-emerald-700">{program.impactMetric}</div>
              <p className="text-xs text-emerald-600 mt-0.5">{program.impactSubtext}</p>
            </div>
            <Award className="w-10 h-10 text-emerald-500/40" />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              About This Initiative
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {program.fullDescription}
            </p>
          </div>

          {/* Core Pillars */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Key Strategic Pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {program.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                  <h4 className="text-xs font-bold text-slate-800">{pillar.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Highlights */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Key Outcomes & Highlights
            </h3>
            <ul className="space-y-1.5">
              {program.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SDGs */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
            {program.sdgs.map((sdg, i) => (
              <span key={i} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                {sdg}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <Link
            href={`/programs/${program.slug}`}
            onClick={onClose}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline"
          >
            <span>View Full Program Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="py-2 px-3.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-200/60 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onDonateToProgram) onDonateToProgram(program.name);
              }}
              className="py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 transition-colors"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Support {program.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
