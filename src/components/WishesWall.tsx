"use client";

import React, { useState, useEffect } from "react";
import { MessageSquareHeart, Heart, Send, Share2, Sparkles, CheckCircle, User, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface Wish {
  id: string;
  name: string;
  relation: string;
  message: string;
  likes: number;
  time: string;
}

export default function WishesWall() {
  const defaultWishes: Wish[] = [
    {
      id: "1",
      name: "Dr. Farhan & Family",
      relation: "Family Well-wisher",
      message: "May Allah fill your married life with boundless love, understanding, and barakah. Barakallahu lakuma!",
      likes: 24,
      time: "2 hours ago",
    },
    {
      id: "2",
      name: "Shameem & Fathima",
      relation: "Cousin",
      message: "Hearty congratulations Swahiba & Raza! May this new chapter bring eternal joy and immense happiness to both families.",
      likes: 19,
      time: "5 hours ago",
    },
    {
      id: "3",
      name: "Rashid Akkapparamba",
      relation: "Friend",
      message: "Wishing our dear Mohammed Raza & Swahiba a glorious wedding celebration and a blessed blessed future together.",
      likes: 15,
      time: "Yesterday",
    },
    {
      id: "4",
      name: "Hamid (Carrefresh Team)",
      relation: "Happiness Partner",
      message: "Sending warmest felicitations and duas on this auspicious wedding! We eagerly look forward to 20th September at Jumeirah Hills.",
      likes: 31,
      time: "2 days ago",
    },
  ];

  const [wishes, setWishes] = useState<Wish[]>(defaultWishes);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("Friend / Well-wisher");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // RSVP Form States
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpCount, setRsvpCount] = useState("2");
  const [rsvpAttending, setRsvpAttending] = useState("yes");
  const [rsvpDone, setRsvpDone] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("swahiba_raza_wishes");
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch {
        // Fallback
      }
    }
  }, []);

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      relation: relation,
      message: message.trim(),
      likes: 1,
      time: "Just now",
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem("swahiba_raza_wishes", JSON.stringify(updated));

    setName("");
    setMessage("");
    setSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#D4AF37", "#1B365D", "#FAF4EB"],
      });
    } catch {}

    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleLike = (id: string) => {
    const updated = wishes.map((w) =>
      w.id === id ? { ...w, likes: w.likes + 1 } : w
    );
    setWishes(updated);
    localStorage.setItem("swahiba_raza_wishes", JSON.stringify(updated));
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;
    setRsvpDone(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
      });
    } catch {}
  };

  // WhatsApp Invite Share
  const shareWhatsApp = () => {
    const text = encodeURIComponent(
      `💍 *Wedding Invitation | Swahiba & Mohammed Raza*\n\n` +
      `Assalamu Alaikum,\n` +
      `We cordially invite you along with your family to celebrate the wedding of *Swahiba & Mohammed Raza*.\n\n` +
      `📅 *Date:* Sunday, 20 September 2026\n` +
      `⏰ *Time:* 10:00 AM to 3:00 PM\n` +
      `📍 *Venue:* Jumeirah Hills Convention Center, Perinthalmanna Road, Chattipparamba\n\n` +
      `Please join us in prayers and celebration: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <section id="wishes" className="py-24 relative bg-[#FCFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#C5A880]/40 text-xs font-cinzel font-semibold uppercase tracking-widest text-[#8C6B2D] mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Guestbook & RSVP</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B365D]">
            Wishes & Prayers Wall
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <div className="h-[1px] w-16 bg-[#C5A880]/60" />
          </div>
          <p className="text-sm text-gray-600 max-w-xl mx-auto font-sans">
            Leave your warm congratulations and duas for the couple, or share this invitation directly with family and friends.
          </p>

          {/* WhatsApp Share Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={shareWhatsApp}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-cinzel text-xs uppercase tracking-wider font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share Invitation on WhatsApp</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Leave a Blessing & RSVP (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Wishes Input Form */}
            <div className="p-8 rounded-3xl bg-white border border-[#C5A880]/40 shadow-xl relative overflow-hidden">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#1B365D] mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#D4AF37]" />
                <span>Send Your Dua / Wish</span>
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Your message will appear instantly on the live wishes wall below.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-[fadeIn_0.3s_ease]">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-emerald-800 text-sm">Jazakallahu Khair!</h4>
                  <p className="text-xs text-emerald-700 mt-1">
                    Your heartfelt wish has been posted to the couple’s board.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddWish} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rashid & Family"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#C5A880]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Relation / Note
                    </label>
                    <select
                      value={relation}
                      onChange={(e) => setRelation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#C5A880]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                    >
                      <option>Friend / Well-wisher</option>
                      <option>Bride's Relative / Family</option>
                      <option>Groom's Relative / Family</option>
                      <option>Colleague</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Your Prayers & Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Write your prayers, congratulations, or special memories..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#C5A880]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#1B365D] via-[#2D4C73] to-[#1B365D] text-white font-cinzel text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/50 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Post Blessing</span>
                  </button>
                </form>
              )}
            </div>

            {/* Quick RSVP Form */}
            <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#C5A880]/40 shadow-md">
              <h4 className="font-serif-luxury text-xl font-bold text-[#1B365D] mb-2">
                Quick RSVP Confirmation
              </h4>
              <p className="text-xs text-gray-500 mb-4">
                Will you be gracing us with your presence on 20th September?
              </p>

              {rsvpDone ? (
                <div className="p-4 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-medium text-center">
                  Thank you! Your RSVP response has been received with joy.
                </div>
              ) : (
                <form onSubmit={handleRsvpSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Guest / Family Name"
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#C5A880]/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <select
                      value={rsvpAttending}
                      onChange={(e) => setRsvpAttending(e.target.value)}
                      className="px-3 py-2 rounded-xl bg-white border border-[#C5A880]/40 text-xs"
                    >
                      <option value="yes">Will Attend Insha'Allah</option>
                      <option value="no">Unable to Attend</option>
                    </select>

                    <select
                      value={rsvpCount}
                      onChange={(e) => setRsvpCount(e.target.value)}
                      className="px-3 py-2 rounded-xl bg-white border border-[#C5A880]/40 text-xs"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3-4 Guests (Family)</option>
                      <option value="5">5+ Guests (Family)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-[#1B365D] text-white text-xs font-cinzel font-semibold uppercase tracking-wider hover:bg-[#0D1929] transition-colors"
                  >
                    Confirm RSVP
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Live Wishes Stream (7 cols) */}
          <div className="lg:col-span-7 space-y-4 max-h-[640px] overflow-y-auto pr-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-cinzel font-bold text-[#8C6B2D] uppercase tracking-wider">
                All Blessings ({wishes.length})
              </span>
              <span className="text-[11px] text-gray-500">Live Updates</span>
            </div>

            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white border border-[#C5A880]/30 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#C5A880]/40 flex items-center justify-center text-[#1B365D] font-bold text-xs">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#1B365D] leading-tight">
                        {item.name}
                      </h5>
                      <span className="text-[10px] text-gray-500 font-medium">
                        {item.relation} · {item.time}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] hover:bg-rose-50 border border-gray-200 text-xs text-rose-600 transition-colors group cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-500 group-hover:scale-125 transition-transform" />
                    <span className="font-semibold text-[11px]">{item.likes}</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
