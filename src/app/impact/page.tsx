'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Download, 
  CheckCircle,
  BarChart3
} from 'lucide-react';
import { impactMetrics, stateReachData, transparencyDocuments } from '@/data/impact';

export const dynamic = 'force-static';

export default function ImpactPage() {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = (title: string) => {
    setDownloadNotice(`Simulated download for report: ${title}`);
    setTimeout(() => setDownloadNotice(null), 3500);
  };

  return (
    <main className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800">
            Accountability & Metrics
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            Our Measurable Social Impact
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Data-backed transparency across education, animal welfare, urban greening, and community relief across India.
          </p>
        </div>
      </section>

      {/* Notice Banner */}
      {downloadNotice && (
        <div className="max-w-xl mx-auto mt-6 px-4">
          <div className="p-3.5 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-700" />
              <span>{downloadNotice}</span>
            </div>
            <button onClick={() => setDownloadNotice(null)} className="text-emerald-700 font-bold">✕</button>
          </div>
        </div>
      )}

      {/* High-Level Impact Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                {stat.value.toLocaleString('en-IN')}{stat.suffix}
              </div>
              <h3 className="text-sm font-bold text-emerald-700 mt-2">{stat.label}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* State-by-State Geographic Reach */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Pan-India Reach</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">State-by-State Outreach</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Active operational chapters and community learning points across 14+ Indian states.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateReachData.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <h3 className="font-bold text-base text-slate-900">{s.state}</h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                    {s.centers} Active Points
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Beneficiaries Reached:</span>
                  <span className="font-extrabold font-mono text-slate-900 text-sm">{s.beneficiaries}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Disclosures & Annual Reports */}
      <section id="financials" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Fiscal Governance</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Audited Disclosures & Annual Reports</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Complete transparency files and independent impact evaluation audits available for public verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transparencyDocuments.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                      {doc.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-0.5">{doc.title}</h3>
                  </div>
                  <span className="text-[11px] font-mono bg-slate-100 px-2 py-0.5 rounded-lg border border-slate-200">
                    {doc.identifier}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">{doc.description}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">{doc.fileSize}</span>
                <button
                  type="button"
                  onClick={() => handleDownload(doc.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fund Allocation Pie Breakdown Simulation */}
        <div className="mt-12 bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            <span>Fund Allocation Efficiency Breakdown</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <div className="text-3xl font-extrabold text-emerald-400 font-mono">86%</div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mt-1">Direct Field Programs</h4>
              <p className="text-[11px] text-slate-300 mt-1">Books, tablets, teacher honorariums, animal food, saplings & relief rations.</p>
            </div>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <div className="text-3xl font-extrabold text-teal-400 font-mono">9%</div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mt-1">Operations & Logistics</h4>
              <p className="text-[11px] text-slate-300 mt-1">Volunteer transport, mobile medical vans, storage and warehouse facilities.</p>
            </div>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <div className="text-3xl font-extrabold text-slate-300 font-mono">5%</div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mt-1">Audit & Governance</h4>
              <p className="text-[11px] text-slate-300 mt-1">Statutory chartered audits, legal filings, and public compliance reporting.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
