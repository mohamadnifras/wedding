"use client";

import React, { useState, useEffect } from "react";
import { Clock, Bell, Sparkles } from "lucide-react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    // Target Date: 20 September 2026, 10:00:00 AM IST (UTC+5:30)
    const targetDate = new Date("2026-09-20T10:00:00+05:30").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-20 relative bg-gradient-to-b from-[#FCFBF9] via-[#FAF4EB] to-[#FCFBF9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#C5A880]/50 text-xs font-cinzel font-semibold uppercase tracking-widest text-[#8C6B2D] mb-3">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Counting Down</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B365D] tracking-wide">
            To Our Blessed Union
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
          </div>
          <p className="text-sm text-gray-600 max-w-lg mx-auto font-sans">
            Every passing moment brings us closer to beginning this beautiful journey under Allah’s grace and your cherished prayers.
          </p>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="relative group p-6 sm:p-8 rounded-3xl bg-white/90 border border-[#C5A880]/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF4EB]/40 to-transparent pointer-events-none" />
              <div className="absolute top-2 right-2 text-[#C5A880]/30 text-xs font-cinzel font-bold">
                0{index + 1}
              </div>

              {/* Number */}
              <div className="relative font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1B365D] tracking-tight group-hover:text-[#8C6B2D] transition-colors">
                {String(unit.value).padStart(2, "0")}
              </div>

              {/* Label */}
              <div className="relative mt-2 text-xs sm:text-sm font-cinzel font-semibold tracking-widest uppercase text-[#8C6B2D]">
                {unit.label}
              </div>

              {/* Bottom gold accent bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full group-hover:w-20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Wedding Date Reminder Box */}
        <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-[#C5A880]/40 shadow-sm text-xs sm:text-sm font-medium text-[#1B365D]">
          <Bell className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span>
            Save the Date: <strong>Sunday, 20th September 2026</strong> from <strong>10:00 AM to 3:00 PM</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
