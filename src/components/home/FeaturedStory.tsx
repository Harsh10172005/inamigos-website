'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, ArrowRight } from 'lucide-react';
import { storiesData } from '@/data/stories';

export const FeaturedStory: React.FC = () => {
  const story = storiesData.find((s) => s.featured) || storiesData[0];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
            Voices From The Ground
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Real People. Real Stories. Real Change.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-2xl leading-relaxed">
            Go beyond statistics and meet the resilient individuals reshaping their families and neighborhoods with InAmigos Foundation.
          </p>
        </div>

        {/* Cinematic Two-Column Container */}
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Story Visual */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[540px]">
            <Image
              src={story.featuredImage}
              alt={story.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />
            
            {/* Pull Quote Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-lg">
              <Quote className="w-5 h-5 text-emerald-400 mb-2" />
              <p className="text-xs sm:text-sm text-slate-200 italic font-medium leading-relaxed">
                &ldquo;{story.quote}&rdquo;
              </p>
              <div className="text-[11px] text-emerald-300 font-bold mt-2">
                — {story.quoteAuthor}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Breakdown */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {story.category}
                </span>
                <span className="text-xs text-slate-400">{story.readTime}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                {story.title}
              </h3>

              {/* Challenge vs Action vs Outcome Matrix */}
              <div className="space-y-3 pt-1">
                <div className="bg-white/5 p-4 rounded-2xl border-l-4 border-rose-500 border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                    The Challenge
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {story.challenge}
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border-l-4 border-amber-500 border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    InAmigos Action
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {story.action}
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border-l-4 border-emerald-500 border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    The Quantified Outcome
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {story.outcome}
                  </p>
                </div>
              </div>

              {/* Story Mini Stats */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                {story.statistics.map((stat, i) => (
                  <div key={i} className="text-center p-2 rounded-xl bg-white/5">
                    <div className="text-base sm:text-lg font-black text-emerald-400 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Link CTA */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href={`/stories/${story.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md shadow-emerald-600/30"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/stories"
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Explore All Stories →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
