'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Quote, 
  Share2
} from 'lucide-react';
import { storiesData } from '@/data/stories';

export default function StoryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const story = storiesData.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="pt-32 pb-24 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900">Article Not Found</h2>
        <p className="text-xs text-slate-500 mt-2">The story you requested does not exist or has moved.</p>
        <Link href="/stories" className="mt-4 inline-block px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold">
          Back to Stories
        </Link>
      </div>
    );
  }

  const relatedStories = storiesData.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <main className="pt-24 pb-20 bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <Link
          href="/stories"
          className="inline-flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Stories</span>
        </Link>

        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {story.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {story.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {story.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {story.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
          {story.excerpt}
        </p>

        {/* Author Byline */}
        <div className="mt-8 py-4 border-y border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-emerald-500/20">
              <Image
                src={story.author.avatar}
                alt={story.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{story.author.name}</div>
              <div className="text-xs text-slate-500">{story.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: story.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[360px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl mt-8">
          <Image
            src={story.featuredImage}
            alt={story.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Challenge, Action, Outcome Matrix */}
        <div className="my-10 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Case Study Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-rose-600 block mb-1">The Context</span>
              <p className="text-xs text-slate-600 leading-relaxed">{story.challenge}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-amber-600 block mb-1">InAmigos Intervention</span>
              <p className="text-xs text-slate-600 leading-relaxed">{story.action}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-emerald-600 block mb-1">Measurable Result</span>
              <p className="text-xs text-slate-600 leading-relaxed">{story.outcome}</p>
            </div>
          </div>

          <div className="pt-3 grid grid-cols-3 gap-4 text-center border-t border-slate-200">
            {story.statistics.map((s, i) => (
              <div key={i}>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-700 font-mono">{s.value}</div>
                <div className="text-[11px] text-slate-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pull Quote */}
        <div className="my-8 p-6 sm:p-8 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-3xl">
          <Quote className="w-8 h-8 text-emerald-600/40 mb-2" />
          <blockquote className="text-base sm:text-lg text-emerald-950 font-medium italic leading-relaxed">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
          <div className="text-xs text-emerald-800 font-semibold mt-3">
            — {story.quoteAuthor}
          </div>
        </div>

        {/* Full Long-Form Story Content */}
        <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
          {story.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Related Stories */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">More Impact Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedStories.map((rel) => (
              <Link
                key={rel.slug}
                href={`/stories/${rel.slug}`}
                className="group bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all flex gap-4 items-center"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-200">
                  <Image src={rel.featuredImage} alt={rel.title} fill className="object-cover" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase">{rel.category}</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </article>
    </main>
  );
}
