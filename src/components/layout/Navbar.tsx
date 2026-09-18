'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Heart, 
  Menu, 
  X, 
  ChevronRight, 
  Users
} from 'lucide-react';

interface NavbarProps {
  onOpenDonateModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonateModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change without cascading renders
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key for mobile menu accessibility
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, handleKeyDown]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Programs', href: '/programs' },
    { name: 'Our Impact', href: '/impact' },
    { name: 'Events', href: '/events' },
    { name: 'Stories', href: '/stories' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200 border border-slate-200/80">
                <Image 
                  src="/images/inamigos-emblem.png" 
                  alt="InAmigos Foundation Logo" 
                  width={36} 
                  height={36} 
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-extrabold text-lg tracking-tight transition-colors leading-tight ${
                  isScrolled || !isHome ? 'text-slate-900' : 'text-white'
                }`}>
                  InAmigos <span className="text-emerald-500 font-extrabold">Foundation</span>
                </span>
                <span className={`text-[10px] tracking-wider uppercase font-bold transition-colors ${
                  isScrolled || !isHome ? 'text-slate-500' : 'text-slate-200'
                }`}>
                  People • Purpose • Action
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 relative ${
                      isScrolled || !isHome
                        ? isActive
                          ? 'text-emerald-700 bg-emerald-50 font-bold'
                          : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-100/70'
                        : isActive
                          ? 'text-white bg-white/20 font-bold backdrop-blur-sm'
                          : 'text-slate-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/volunteer"
                className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isScrolled || !isHome
                    ? 'text-slate-700 hover:text-emerald-600 hover:bg-slate-100'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                <Users className="w-3.5 h-3.5 text-emerald-500" />
                <span>Join Volunteer</span>
              </Link>

              <Link
                href="/donate"
                onClick={onOpenDonateModal ? (e) => { e.preventDefault(); onOpenDonateModal(); } : undefined}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate</span>
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/donate"
                onClick={onOpenDonateModal ? (e) => { e.preventDefault(); onOpenDonateModal(); } : undefined}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-all"
              >
                Donate
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile menu"
                className={`p-2 rounded-xl transition-colors ${
                  isScrolled || !isHome 
                    ? 'text-slate-700 hover:bg-slate-100' 
                    : 'text-white hover:bg-white/15'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white p-0.5 flex items-center justify-center border border-slate-200 shadow-sm">
                    <Image 
                      src="/images/inamigos-emblem.png" 
                      alt="InAmigos Foundation Logo" 
                      width={28} 
                      height={28} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-extrabold text-slate-900 text-sm">InAmigos Foundation</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close mobile navigation"
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-emerald-50 text-emerald-700 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-300'}`} />
                    </Link>
                  );
                })}
              </nav>

              {/* Action Buttons */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  href="/volunteer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border border-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-50 transition-colors"
                >
                  <Users className="w-4 h-4 text-emerald-600" />
                  Become a Volunteer
                </Link>
                <Link
                  href="/donate"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (onOpenDonateModal) {
                      e.preventDefault();
                      onOpenDonateModal();
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow-md shadow-emerald-600/25 hover:from-emerald-500 hover:to-teal-500 transition-all"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  Donate to a Cause
                </Link>
              </div>
            </div>

            <div className="p-5 bg-slate-50 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500 font-semibold">
                Creating impact through people, purpose & action.
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                © 2026 InAmigos Foundation • Section 80G Certified
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
