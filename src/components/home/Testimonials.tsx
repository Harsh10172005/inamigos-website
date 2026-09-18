'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonialsData.length;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 px-3.5 py-1 rounded-full border border-emerald-800/70">
            Endorsements & Shared Journeys
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Voices of Trust & Transformation
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Reflections from our dedicated volunteers, grassroots beneficiaries, and institutional CSR partners.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 relative shadow-2xl transition-all duration-300"
        >
          <Quote className="w-12 h-12 text-emerald-500/30 absolute top-8 right-8 pointer-events-none" />

          {/* Testimonial Content */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 ring-2 ring-emerald-500/40 shadow-lg">
              <Image
                src={current.avatar}
                alt={current.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs text-slate-400 ml-2">
                  Category: <strong className="text-emerald-400">{current.category}</strong>
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div>
                <h3 className="text-base font-bold text-white">{current.name}</h3>
                <p className="text-xs text-slate-400">{current.role}</p>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[11px] text-emerald-400 mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{current.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-8 bg-emerald-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
