'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Ticket, ArrowRight } from 'lucide-react';
import { eventsData } from '@/data/events';
import { EventItem } from '@/lib/types';
import { EventRegisterModal } from '@/components/shared/EventRegisterModal';

export const EventsPreview: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Upcoming');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const filters = ['Upcoming', 'Past', 'Community', 'Education', 'Environment', 'Awareness'];

  const filteredEvents = useMemo(() => {
    return eventsData.filter((evt) => {
      if (activeFilter === 'Upcoming') return evt.status === 'upcoming';
      if (activeFilter === 'Past') return evt.status === 'past';
      return evt.category === activeFilter;
    });
  }, [activeFilter]);

  return (
    <section id="events" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
              Community In Action
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Upcoming Events & On-Ground Drives
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Meet our volunteer brigades, plant trees, assist learning sessions, and experience grassroots impact firsthand.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            <span>View All Schedules</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === f
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Event Image */}
              <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={evt.image}
                  alt={evt.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-800 shadow-sm">
                    {evt.category}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white">
                    {evt.venueType}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                    <Users className="w-3 h-3 text-teal-400" />
                    <span>{evt.attendeesCount} joined</span>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-emerald-700 transition-colors">
                    {evt.title}
                  </h3>
                  
                  <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </div>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {evt.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400">
                    By <span className="font-semibold text-slate-700">{evt.organizer}</span>
                  </div>

                  {evt.status === 'upcoming' ? (
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(evt)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>Register Free</span>
                    </button>
                  ) : (
                    <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-xl">
                      Drive Completed
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* RSVP Modal */}
      <EventRegisterModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};
