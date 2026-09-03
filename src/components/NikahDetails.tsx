"use client";

import React from "react";
import { Calendar, Clock, MapPin, Sparkles, Heart, Gift, Users, ShoppingBag } from "lucide-react";

export default function NikahDetails() {
  const scheduleEvents = [
    {
      time: "10:00 AM",
      title: "Nikah Ceremony & Welcome",
      description: "Solemnization of the holy Nikah ceremony and warm reception of families & guests.",
      icon: Heart,
    },
    {
      time: "12:00 PM",
      title: "Royal Wedding Feast",
      description: "Sumptuous traditional Kerala wedding luncheon served with grand hospitality.",
      icon: Users,
    },
    {
      time: "01:30 PM",
      title: "Felicitations & Duas",
      description: "Cherished moments, photo memories, and showering the newly wedded couple with blessings.",
      icon: Sparkles,
    },
    {
      time: "03:00 PM",
      title: "Farewell & Prayers",
      description: "Concluding the joyous celebration with special Duas for a prosperous future.",
      icon: Gift,
    },
  ];

  return (
    <section id="details" className="py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B365D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-cinzel font-semibold uppercase tracking-[0.25em] text-[#8C6B2D] block mb-2">
            The Sacred Ceremony
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B365D]">
            Wedding Details & Invitation
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
          </div>
        </div>

        {/* Grand Invitation Card Replica Section */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#C5A880]/40 shadow-xl max-w-4xl mx-auto mb-20 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto">
            <div className="font-arabic text-2xl sm:text-3xl text-[#1B365D] font-bold mb-2">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </div>
            <p className="text-xs uppercase tracking-widest text-[#8C6B2D] font-medium mb-6">
              In the name of Allah, the most Gracious, the most Merciful
            </p>

            <div className="my-6">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1B365D]">
                Mr. Hamza
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#2D4C73] uppercase tracking-wider">
                Elamkulam (H), Akkapparamba
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 italic font-serif leading-relaxed mb-6">
              “Cordially invite you along with your family to the marriage of our beloved daughter”
            </p>

            {/* Couple Feature Highlight */}
            <div className="py-6 px-4 rounded-2xl bg-gradient-to-r from-[#FAF7F2] via-white to-[#FAF7F2] border border-[#C5A880]/40 my-6 shadow-sm">
              <div className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B365D]">
                Swahiba
              </div>
              <div className="text-sm sm:text-base font-script text-[#D4AF37] my-2">
                With
              </div>
              <div className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B365D]">
                Mohammed Raza
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">
                S/o Shaji, Karumannil (H), Kolathuparambu
              </p>
            </div>

            {/* Event Key Info Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center my-6">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C5A880]/30 flex flex-col items-center">
                <Calendar className="w-5 h-5 text-[#D4AF37] mb-1" />
                <span className="text-[11px] font-cinzel uppercase text-gray-500 font-semibold">Date</span>
                <span className="text-sm font-bold text-[#1B365D]">Sunday, 20 Sept 2026</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C5A880]/30 flex flex-col items-center">
                <Clock className="w-5 h-5 text-[#D4AF37] mb-1" />
                <span className="text-[11px] font-cinzel uppercase text-gray-500 font-semibold">Time</span>
                <span className="text-sm font-bold text-[#1B365D]">10:00 AM to 3:00 PM</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C5A880]/30 flex flex-col items-center">
                <MapPin className="w-5 h-5 text-[#D4AF37] mb-1" />
                <span className="text-[11px] font-cinzel uppercase text-gray-500 font-semibold">Venue</span>
                <span className="text-sm font-bold text-[#1B365D]">Jumeirah Hills Convention Center</span>
              </div>
            </div>

            {/* Sponsoring / Happiness Partner Tribute */}
            <div className="mt-8 pt-6 border-t border-[#C5A880]/30 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C6B2D] mb-1">
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>Sharing The Happiness</span>
              </div>
              <div className="font-serif-luxury text-lg font-bold text-[#1B365D]">
                Carrefresh Hypermart
              </div>
              <div className="text-xs text-gray-600">
                Changuvetty, Kottakkal
              </div>
            </div>
          </div>
        </div>

        {/* Wedding Day Program Timeline */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1B365D]">
              Celebration Itinerary
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Join us throughout the day’s memorable milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scheduleEvents.map((evt, idx) => {
              const Icon = evt.icon;
              return (
                <div
                  key={evt.title}
                  className="group relative p-6 rounded-3xl bg-[#FAF7F2] border border-[#C5A880]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B365D] to-[#0D1929] flex items-center justify-center text-[#D4AF37] mb-4 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-cinzel font-bold text-[#8C6B2D] tracking-wider uppercase block mb-1">
                    {evt.time}
                  </span>
                  <h4 className="font-serif-luxury text-lg font-bold text-[#1B365D] mb-2">
                    {evt.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {evt.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
