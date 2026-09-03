"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  colorType: "indigo" | "gold" | "leaf";
}

export default function FloatingPetals() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: Particle[] = [];
    const particleCount = Math.min(30, Math.floor(window.innerWidth / 40));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 12 + 6,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 0.8 + 0.4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.2,
        opacity: Math.random() * 0.4 + 0.25,
        colorType: i % 4 === 0 ? "gold" : i % 3 === 0 ? "leaf" : "indigo",
      });
    }

    const drawPetal = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      if (p.colorType === "gold") {
        // Glowing gold sparkle
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size / 2);
        grad.addColorStop(0, "rgba(255, 230, 160, 0.9)");
        grad.addColorStop(0.5, "rgba(212, 175, 55, 0.6)");
        grad.addColorStop(1, "rgba(212, 175, 55, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.colorType === "leaf") {
        // Watercolor botanical leaf
        ctx.fillStyle = "rgba(27, 54, 93, 0.55)";
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.quadraticCurveTo(p.size * 0.7, -p.size * 0.3, 0, p.size);
        ctx.quadraticCurveTo(-p.size * 0.7, -p.size * 0.3, 0, -p.size);
        ctx.fill();

        // Leaf spine
        ctx.strokeStyle = "rgba(197, 168, 128, 0.4)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.8);
        ctx.lineTo(0, p.size * 0.8);
        ctx.stroke();
      } else {
        // Soft blue petal
        ctx.fillStyle = "rgba(45, 76, 115, 0.45)";
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.6, p.size, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.005) * 0.8 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 opacity-70 transition-opacity duration-1000"
    />
  );
}
