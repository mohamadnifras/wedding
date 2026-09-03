"use client";

import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Sparkles, ChevronDown, Check } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  // Generate Google Calendar Link for Sept 20, 2026 (10:00 AM - 03:00 PM IST)
  // 10:00 AM IST = 04:30 UTC, 03:00 PM IST = 09:30 UTC
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Swahiba+%26+Mohammed+Raza&dates=20260920T043000Z/20260920T093000Z&details=You+are+cordially+invited+to+the+wedding+celebration+of+Swahiba+%26+Mohammed+Raza.+Hosted+by+Mr.+Hamza+%28Elamkulam+House%29+and+Mr.+Shaji+%28Karumannil+House%29.&location=Jumeirah+Hills+Convention+Center,+Perinthalmanna+Road,+Chattipparamba,+Kerala`;

  const downloadIcs = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Swahiba & Mohammed Raza Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Wedding of Swahiba & Mohammed Raza
DESCRIPTION:Cordially inviting you along with your family to the marriage of Swahiba & Mohammed Raza.
LOCATION:Jumeirah Hills Convention Center, Perinthalmanna Road, Chattipparamba, Kerala
DTSTART:20260920T043000Z
DTEND:20260920T093000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "swahiba-raza-wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden islamic-geo-bg"
    >
      {/* Decorative Botanical Watercolor Elements in Corners */}
      <div className="absolute top-12 left-0 w-48 sm:w-64 md:w-80 pointer-events-none opacity-40 float-gentle">
        <img
          src="/images/foliage.jpg"
          alt="Watercolor Foliage Decor"
          className="w-full h-auto object-cover rounded-r-3xl mask-image-radial"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      <div className="absolute bottom-10 right-0 w-48 sm:w-64 md:w-80 pointer-events-none opacity-40 float-gentle rotate-180">
        <img
          src="/images/foliage.jpg"
          alt="Watercolor Foliage Decor"
          className="w-full h-auto object-cover rounded-r-3xl"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Royal Arch Outer Wrapper */}
        <div className="hero-arch-frame p-6 sm:p-10 md:p-14 glass-panel bg-white/70 shadow-2xl relative">
          {/* Top Bismillah Calligraphy */}
          <div className="font-arabic text-3xl sm:text-4xl md:text-5xl text-[#1B365D] font-bold mb-4 tracking-wider leading-relaxed">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </div>

          <p className="text-xs sm:text-sm font-cinzel font-semibold tracking-[0.25em] uppercase text-[#8C6B2D] mb-6">
            In the name of Allah, the most Gracious, the most Merciful
          </p>

          {/* Golden Ornament Ribbon */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#C5A880]" />
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#1B365D]">
              Save The Date
            </span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#C5A880]" />
          </div>

          <div className="text-sm md:text-base font-cinzel tracking-widest text-[#2D4C73] uppercase mt-2 mb-3">
            The Wedding of
          </div>

          {/* Main Couple Names with Shimmering Luxury Typography */}
          <div className="my-4">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-7xl font-semibold tracking-wide text-[#1B365D] leading-tight">
              Swahiba
            </h1>
            <div className="my-1 flex items-center justify-center">
              <span className="font-script text-4xl sm:text-5xl text-[#D4AF37] px-4 font-normal">
                with
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-7xl font-semibold tracking-wide text-[#1B365D] leading-tight">
              Mohammed Raza
            </h2>
          </div>

          {/* Inviting Parents Summary */}
          <div className="max-w-xl mx-auto my-6 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
            <p>
              Daughter of <strong className="text-[#1B365D]">Mr. Hamza & Family</strong> (Elamkulam House, Akkapparamba)
            </p>
            <p className="mt-1">
              & Son of <strong className="text-[#1B365D]">Mr. Shaji & Family</strong> (Karumannil House, Kolathuparambu)
            </p>
          </div>

          {/* Date & Venue Highlight Badge */}
          <div className="my-6 inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-3 px-6 rounded-2xl bg-gradient-to-r from-[#FAF7F2] via-white to-[#FAF7F2] border border-[#C5A880]/50 shadow-sm">
            <div className="flex items-center gap-2.5 text-left">
              <Calendar className="w-5 h-5 text-[#D4AF37]" />
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Date</div>
                <div className="text-sm font-bold text-[#1B365D]">Sunday · 20 Sept 2026</div>
              </div>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-[#C5A880]/40" />

            <div className="flex items-center gap-2.5 text-left">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Venue</div>
                <div className="text-sm font-bold text-[#1B365D]">Jumeirah Hills Convention Center</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1B365D] hover:bg-[#0D1929] text-white text-xs font-cinzel font-semibold tracking-wider uppercase shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#D4AF37]/50"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Add to Google Calendar</span>
            </a>

            <button
              onClick={downloadIcs}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF7F2] text-[#1B365D] text-xs font-cinzel font-semibold tracking-wider uppercase shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#C5A880]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Calendar Saved!</span>
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4 text-[#8C6B2D]" />
                  <span>Apple / iCal Download</span>
                </>
              )}
            </button>

            <a
              href="#venue"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89047] text-[#0D1929] text-xs font-cinzel font-bold tracking-wider uppercase shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MapPin className="w-4 h-4 text-[#0D1929]" />
              <span>View Route & Map</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 flex flex-col items-center justify-center text-[#8C6B2D] animate-bounce">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-1">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
        </div>
      </div>
    </section>
  );
}
