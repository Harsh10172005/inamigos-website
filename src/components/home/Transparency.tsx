'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  FileText, 
  Download, 
  CheckCircle, 
  Info
} from 'lucide-react';
import { transparencyDocuments } from '@/data/impact';

export const Transparency: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleMockDownload = (docTitle: string) => {
    setDownloadNotice(`Demo download simulated for: ${docTitle}`);
    setTimeout(() => setDownloadNotice(null), 3500);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ethical Governance & Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Built on Trust and Transparency.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            We hold ourselves to rigorous accountability standards. Every program metric, fiscal flow, and statutory disclosure is openly shared with our donors and the public.
          </p>
        </div>

        {/* Notice alert */}
        {downloadNotice && (
          <div className="mb-8 p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-medium flex items-center justify-between animate-in fade-in duration-200 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-700" />
              <span>{downloadNotice}</span>
            </div>
            <button onClick={() => setDownloadNotice(null)} className="text-emerald-700 hover:text-emerald-900 font-bold">✕</button>
          </div>
        )}

        {/* Transparency Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transparencyDocuments.map((doc) => (
            <div
              key={doc.title}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-600">
                        {doc.category}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {doc.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg shrink-0 border border-slate-200">
                    {doc.identifier}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-4 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">{doc.fileSize}</span>
                <button
                  type="button"
                  onClick={() => handleMockDownload(doc.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Banner & Links */}
        <div className="mt-10 p-6 rounded-3xl bg-slate-100 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-emerald-600 shrink-0 hidden sm:block" />
            <p className="text-xs text-slate-600">
              In accordance with non-profit disclosure ethics, public registration documents are updated annually after statutory chartered accountancy audits.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/impact"
              className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 hover:text-emerald-700 hover:border-emerald-400 text-xs font-semibold shadow-sm transition-all"
            >
              View Transparency Details
            </Link>
            <Link
              href="/impact#financials"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              View Annual Report
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
