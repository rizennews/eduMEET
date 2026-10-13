"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import chainParticles from "@/components/chain-particles.json";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  alpha: number;
  isSpark: boolean;
}

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    // Massive canvas resolution for maximum crispness and large display scale
    const width = 1100;
    const height = 500;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Interactive mouse & touch tracking
    const mouse = { x: -1000, y: -1000, targetRotX: 0, targetRotY: 0 };

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((clientY - rect.top) / rect.height) * 2 - 1;
      mouse.targetRotY = normX * 0.45;
      mouse.targetRotX = -normY * 0.35;
      mouse.x = (clientX - rect.left) * (width / rect.width);
      mouse.y = (clientY - rect.top) * (height / rect.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePointer(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handlePointerLeave = () => {
      mouse.targetRotX = 0;
      mouse.targetRotY = 0;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handlePointerLeave);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchstart", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handlePointerLeave);

    // 100% Exact Particle model extracted directly from Design #2 reference image
    // [x, y, z, color, alpha, isSpark]
    const particles: Particle3D[] = (chainParticles as [number, number, number, string, number, number][]).map((pt) => {
      const [bx, by, bz, color, alpha, isSpark] = pt;
      const startX = bx + (Math.random() - 0.5) * 800;
      const startY = by + (Math.random() - 0.5) * 800;
      const startZ = bz + (Math.random() - 0.5) * 600;

      return {
        x: startX,
        y: startY,
        z: startZ,
        baseX: bx,
        baseY: by,
        baseZ: bz,
        vx: 0,
        vy: 0,
        vz: 0,
        size: isSpark ? Math.random() * 2.8 + 1.2 : Math.random() * 2.0 + 0.9,
        color,
        alpha,
        isSpark: isSpark === 1,
      };
    });

    const context = ctx;
    let time = 0;
    let rotX = 0;
    let rotY = 0;
    const fov = 420;

    function render() {
      if (!context) return;
      context.clearRect(0, 0, width, height);

      time += 0.024;

      // Noticeable 3D floating movement so motion is clearly visible on mobile without needing hover
      const idleYaw = Math.sin(time * 0.9) * 0.22;
      const idlePitch = Math.cos(time * 0.7) * 0.14;
      const idleRoll = Math.sin(time * 0.5) * 0.06;

      rotX += (mouse.targetRotX + idlePitch - rotX) * 0.08;
      rotY += (mouse.targetRotY + idleYaw - rotY) * 0.08;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosZ = Math.cos(idleRoll);
      const sinZ = Math.sin(idleRoll);

      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Spring physics: pull to target 3D chain link
        const dx = p.baseX - p.x;
        const dy = p.baseY - p.y;
        const dz = p.baseZ - p.z;

        p.vx += dx * 0.045;
        p.vy += dy * 0.045;
        p.vz += dz * 0.045;
        p.vx *= 0.80; // Smooth damping
        p.vy *= 0.80;
        p.vz *= 0.80;

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Rotate in 3D
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const x3 = x1 * cosZ - y2 * sinZ;
        const y3 = y2 * cosZ + x1 * sinZ;

        // Project 3D to 2D
        const scale3D = fov / (fov + z2 + 80);
        const projX = centerX + x3 * scale3D;
        const projY = centerY + y3 * scale3D;

        // Interactive hover scatter away from mouse
        const dxMouse = projX - mouse.x;
        const dyMouse = projY - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 75) {
          const force = ((75 - distMouse) / 75) * 16;
          p.x += (dxMouse / distMouse) * force;
          p.y += (dyMouse / distMouse) * force;
        }

        const drawSize = Math.max(0.6, p.size * scale3D);
        const depthAlpha = Math.min(1, Math.max(0.18, p.alpha * (scale3D * 0.95)));

        context.fillStyle = `rgba(${p.color}, ${depthAlpha})`;
        context.beginPath();
        context.arc(projX, projY, drawSize, 0, Math.PI * 2);
        context.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handlePointerLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchstart", handleTouchMove);
      canvas.removeEventListener("touchend", handlePointerLeave);
    };
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-[#001D2E] text-white px-4 py-8 relative select-none">
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto -mt-6 sm:-mt-10">
        
        {/* Massive 3D Broken Link Canvas (Scaled nicely on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[960px] h-[260px] sm:h-[320px] md:h-[380px] mb-2 sm:mb-4 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain"
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>

        {/* 404 Tiny Code */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm font-mono tracking-widest text-white/50 mb-2"
        >
          404
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-2.5"
        >
          Nothing here.
        </motion.h1>

        {/* Clean Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-white/60 font-medium mb-6 max-w-md"
        >
          The link&apos;s broken, or the page has moved on.
        </motion.p>

        {/* Action Link: Clean Underlined Link matching Design #2 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link
            href="/"
            className="text-sm font-medium text-white/70 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
          >
            Back home
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
