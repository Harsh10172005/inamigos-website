'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  ArrowRight, 
  Users, 
  Trees, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDonateModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDonateModal }) => {
  const [counter, setCounter] = useState({
    lives: 0,
    interns: 0,
    trees: 0,
    volunteers: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800;
          const steps = 45;
          const stepTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            // Ease-out cubic curve
            const t = step / steps;
            const progress = 1 - Math.pow(1 - t, 3);

            setCounter({
              lives: Math.floor(progress * 50000),
              interns: Math.floor(progress * 30000),
              trees: Math.floor(progress * 20000),
              volunteers: Math.floor(progress * 200)
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounter({
                lives: 50000,
                interns: 30000,
                trees: 20000,
                volunteers: 200
              });
            }
          }, stepTime);
        }
      },
      { threshold: 0.15 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Human-Centered Social Impact Photography Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=85"
          alt="InAmigos Foundation Community Volunteers with Children"
          fill
          priority
          className="object-cover object-center filter brightness-[0.38] contrast-[1.05] scale-[1.02] transition-transform duration-1000"
        />
        {/* Layered cinematic vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-slate-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/50 to-slate-950/90" />
      </div>

      {/* Atmospheric ambient color blurs */}
      <div className="absolute top-1/4 left-1/12 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headings & Direct CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-7">
            
            {/* Live Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/15 text-white text-xs font-semibold tracking-wide shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Creating impact through people, purpose & action.</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12] text-balance">
              Together, We Can Create{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Change That Lasts.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Empowering communities, nurturing young minds, protecting our planet, and creating opportunities for a better tomorrow through grassroots empathy and collective youth action.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={onOpenDonateModal}
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/35 hover:shadow-emerald-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                <span>Donate Now</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span className="text-xs text-emerald-100 font-normal">80G Eligible</span>
              </button>

              <Link
                href="/volunteer"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Become a Volunteer</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Trust Pillars */}
            <div className="pt-3 flex flex-wrap items-center gap-5 sm:gap-7 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Section 80G Tax Exemption</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Zero-Intermediary Direct Aid</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>14+ Active States</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Statistics Showcase */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4 relative">
            
            {/* Card 1: Lives Impacted */}
            <div className="p-5 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/15 text-white shadow-xl hover:bg-slate-900/80 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-3 group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 fill-emerald-400/20" />
              </div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-white font-mono">
                {counter.lives.toLocaleString('en-IN')}+
              </div>
              <p className="text-xs sm:text-sm font-bold text-emerald-300 mt-1">Lives Impacted</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Education & relief aid</p>
            </div>

            {/* Card 2: Interns Trained */}
            <div className="p-5 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/15 text-white shadow-xl hover:bg-slate-900/80 hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300 group translate-y-2 sm:translate-y-4">
              <div className="w-11 h-11 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 mb-3 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-white font-mono">
                {counter.interns.toLocaleString('en-IN')}+
              </div>
              <p className="text-xs sm:text-sm font-bold text-teal-300 mt-1">Interns Trained</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Project Vikas fellowships</p>
            </div>

            {/* Card 3: Trees Planted */}
            <div className="p-5 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/15 text-white shadow-xl hover:bg-slate-900/80 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 group -translate-y-1">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-3 group-hover:scale-110 transition-transform">
                <Trees className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-white font-mono">
                {counter.trees.toLocaleString('en-IN')}+
              </div>
              <p className="text-xs sm:text-sm font-bold text-emerald-300 mt-1">Trees Planted</p>
              <p className="text-[11px] text-slate-400 mt-0.5">85%+ 3-year survival</p>
            </div>

            {/* Card 4: Active Volunteers */}
            <div className="p-5 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/15 text-white shadow-xl hover:bg-slate-900/80 hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300 group translate-y-1 sm:translate-y-3">
              <div className="w-11 h-11 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 mb-3 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-white font-mono">
                {counter.volunteers.toLocaleString('en-IN')}+
              </div>
              <p className="text-xs sm:text-sm font-bold text-teal-300 mt-1">Active Volunteers</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Pan-India field brigades</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
