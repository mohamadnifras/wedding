"use client";

import React from "react";
import { Heart, Users, Sparkles, Moon, Star, BookOpen } from "lucide-react";

export default function DuasSection() {
  const duaCards = [
    {
      title: "Dua for the Couple",
      arabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
      transliteration: "Barakallahu laka wa baraka 'alaika wa jama'a bainakuma fee khair",
      english: "May Allah bless you, shower His blessings upon you, and unite you both in goodness and eternal love.",
      icon: Heart,
    },
    {
      title: "Dua for the Families",
      arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
      transliteration: "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yun",
      english: "Our Lord! Grant that our spouses and our offspring be a comfort to our eyes, and give us the grace to lead the righteous.",
      icon: Users,
    },
    {
      title: "Dua for Honored Guests",
      arabic: "جَزَاكُمُ اللَّهُ خَيْرًا وَبَارَكَ فِيكُمْ",
      transliteration: "Jazakumullahu Khairan wa Baraka Feekum",
      english: "May Allah reward every guest abundantly with joy, good health, peace, and prosper their homes with barakah.",
      icon: Star,
    },
  ];

  return (
    <section id="duas" className="py-24 relative bg-gradient-to-b from-white via-[#FAF4EB]/60 to-[#FCFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#C5A880]/40 text-xs font-cinzel font-semibold uppercase tracking-widest text-[#8C6B2D] mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Sacred Blessings</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B365D]">
            Quranic Verses & Beloved Duas
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
          </div>
        </div>

        {/* Featured Quranic Verse Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#C5A880]/50 shadow-xl max-w-4xl mx-auto mb-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#1B365D] font-bold leading-loose mb-6">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </div>

          <p className="font-serif text-base sm:text-lg text-gray-700 italic max-w-2xl mx-auto mb-4 leading-relaxed">
            “And among His Signs is this: that He created for you mates from among yourselves, that ye may dwell in tranquility with them, and He has put love and mercy between your hearts.”
          </p>
          <span className="text-xs font-cinzel font-bold text-[#8C6B2D] tracking-widest uppercase block">
            — Surah Ar-Rum [30:21]
          </span>
        </div>

        {/* 3 Duas Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {duaCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative p-8 rounded-3xl bg-white border border-[#C5A880]/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF4EB] border border-[#C5A880]/40 flex items-center justify-center text-[#1B365D] mb-6 group-hover:bg-[#1B365D] group-hover:text-[#D4AF37] transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif-luxury text-xl font-bold text-[#1B365D] mb-4">
                    {card.title}
                  </h3>

                  <div className="font-arabic text-xl text-[#8C6B2D] font-bold leading-relaxed mb-3 text-right">
                    {card.arabic}
                  </div>

                  <p className="text-xs font-medium text-gray-500 italic mb-3">
                    "{card.transliteration}"
                  </p>

                  <p className="text-xs text-gray-700 leading-relaxed font-sans">
                    {card.english}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-cinzel font-semibold text-[#8C6B2D]">
                  <span>Say Ameen</span>
                  <span>🤲</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
