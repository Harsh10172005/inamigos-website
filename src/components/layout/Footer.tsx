'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { 
  InstagramIcon, 
  FacebookIcon, 
  LinkedinIcon, 
  TwitterXIcon, 
  YoutubeIcon 
} from '@/components/ui/SocialIcons';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 600);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  <Image 
                    src="/images/inamigos-emblem.png" 
                    alt="InAmigos Foundation Emblem" 
                    width={36} 
                    height={36} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-white tracking-tight">
                    InAmigos <span className="text-emerald-400">Foundation</span>
                  </span>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400">
                    Creating Impact Through People & Purpose
                  </span>
                </div>
              </Link>

              <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-sm">
                InAmigos Foundation is a pan-India youth-driven non-profit organization dedicated to democratizing foundational child education, empowering women artisans, safeguarding stray animals, and revitalizing urban green ecosystems.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-2 rounded-xl w-fit">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent Non-Profit Model • 80G Certified</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/inamigos/" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.facebook.com/inamigos.inamigos" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/inamigos-foundation/posts/?feedView=all" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://x.com/InamigosF" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.youtube.com/@inamigosfoundation" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-emerald-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/programs" className="text-slate-400 hover:text-emerald-400 transition-colors">Our Programs</Link>
              </li>
              <li>
                <Link href="/impact" className="text-slate-400 hover:text-emerald-400 transition-colors">Our Impact & Metrics</Link>
              </li>
              <li>
                <Link href="/events" className="text-slate-400 hover:text-emerald-400 transition-colors">Events & Drives</Link>
              </li>
              <li>
                <Link href="/stories" className="text-slate-400 hover:text-emerald-400 transition-colors">Stories & Blog</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-400 hover:text-emerald-400 transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Core Causes */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Core Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/programs/bachpanshala" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>BachpanShala</span>
                  <span className="text-[11px] text-slate-500">Education</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/udaan" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Udaan</span>
                  <span className="text-[11px] text-slate-500">Women</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/jeev" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Jeev</span>
                  <span className="text-[11px] text-slate-500">Animals</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/sewa" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Sewa</span>
                  <span className="text-[11px] text-slate-500">Relief</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/prakriti" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Prakriti</span>
                  <span className="text-[11px] text-slate-500">Ecology</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/vikas" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Vikas</span>
                  <span className="text-[11px] text-slate-500">Youth Interns</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Stay Updated
            </h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Subscribe to our monthly newsletter for stories of grassroots resilience, drive announcements, and transparent impact audits.
            </p>

            {subscribed ? (
              <div className="bg-emerald-950/60 border border-emerald-800 rounded-xl p-3 flex items-center gap-2.5 text-emerald-300 text-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you! You are subscribed to our monthly impact reports.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs py-2.5 px-4 rounded-xl shadow-sm transition-colors disabled:opacity-50"
                >
                  {loading ? 'Subscribing...' : 'Subscribe to Impact'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="mt-6 pt-5 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Contact Desk
              </span>
              <p className="text-xs text-slate-400">
                Email: <a href="mailto:support@inamigosfoundation.org.in" className="text-emerald-400 hover:underline">support@inamigosfoundation.org.in</a>
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Helpline: +91 98712 34567
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 InAmigos Foundation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/impact" className="hover:text-emerald-400 transition-colors">Transparency & Disclosures</Link>
            <Link href="/volunteer" className="hover:text-emerald-400 transition-colors">Volunteer Policy</Link>
            <Link href="/donate" className="hover:text-emerald-400 transition-colors">Donation Terms</Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
