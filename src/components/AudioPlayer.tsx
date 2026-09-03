"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music, Sparkles } from "lucide-react";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export default function AudioPlayer({ autoPlayTrigger }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize HTML5 Audio with wedding background soundtrack
    const audio = new Audio("/audio/wedding_music.mp3");
    audio.loop = true;
    audio.volume = 0.55;
    audio.preload = "auto";
    audioRef.current = audio;

    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const playMusic = async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } catch {
      // Browser autoplay restriction
      setIsPlaying(false);
    }
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  // Trigger autoplay when invitation door is opened
  useEffect(() => {
    if (autoPlayTrigger && !hasStarted) {
      playMusic();
    }
  }, [autoPlayTrigger, hasStarted]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0D1929]/90 hover:bg-[#0D1929] text-[#D4AF37] border border-[#D4AF37]/60 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#D4AF37] cursor-pointer"
      >
        <span className="relative flex h-3 w-3">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          )}
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
        </span>

        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-cinzel font-bold tracking-wider uppercase text-white">
              Music Playing
            </span>
            <div className="flex items-end gap-0.5 h-3 ml-1">
              <span className="w-1 bg-[#D4AF37] rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-2"></span>
              <span className="w-1 bg-[#D4AF37] rounded-full animate-[pulse_1.1s_ease-in-out_infinite] h-3.5"></span>
              <span className="w-1 bg-[#D4AF37] rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-1.5"></span>
              <span className="w-1 bg-[#D4AF37] rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-2.5"></span>
            </div>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#D4AF37]/70" />
            <span className="text-xs font-cinzel font-semibold tracking-wider uppercase text-white/70">
              Play Music
            </span>
          </>
        )}
      </button>
    </div>
  );
}
