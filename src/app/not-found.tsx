"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const quickLinks = [
    { title: "What is eduMEET", desc: "Open-source video platform for R&E", href: "/what-is-edumeet", color: "#F1921A" },
    { title: "How it works", desc: "Architecture, orchestration & media nodes", href: "/how-it-works", color: "#8E1B73" },
    { title: "NREN Hub", desc: "Ways to join and federation participation", href: "/nren-hub", color: "#003B5C" },
    { title: "Get eduMEET", desc: "Check country connectivity & get started", href: "/get-started", color: "#2A75C1" },
  ];

  return (
    <main className="w-full min-h-[90vh] flex flex-col items-center justify-center bg-[#001D2E] text-white px-4 py-20 relative overflow-hidden">
      {/* Background glow orbs matching eduMEET brand palette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#003B5C]/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#8E1B73]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#F1921A]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center pt-8">
        
        {/* Subtle Pill Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#F1921A] mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#F1921A] animate-pulse" />
          Error 404 &middot; Connection Lost
        </motion.div>

        {/* 404 Hero Display with Frosted Mesh Look */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex items-center justify-center mb-6"
        >
          <span className="text-[110px] sm:text-[160px] md:text-[210px] font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 select-none">
            404
          </span>
          {/* Subtle radar / meeting ring overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-36 h-36 sm:w-52 sm:h-52 rounded-full border border-white/10 animate-ping opacity-20" />
            <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-full border border-[#8E1B73]/20" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 text-balance"
        >
          This meeting room does not exist
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-300 font-medium max-w-xl mx-auto mb-10 leading-relaxed text-balance"
        >
          The page or route you followed might have expired, moved across the federation, or doesn&apos;t exist. Let&apos;s reconnect you.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
        >
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F1921A] text-white font-bold text-sm hover:bg-[#D97D12] transition-all text-center shadow-lg hover:shadow-orange-500/20"
          >
            Return to Homepage
          </Link>
          <Link
            href="/faq"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all text-center backdrop-blur-md"
          >
            Visit FAQ & Support
          </Link>
        </motion.div>

        {/* Popular Federation Destinations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-3xl border-t border-white/10 pt-10"
        >
          <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Or explore these federation resources:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group flex flex-col p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white group-hover:text-[#F1921A] transition-colors">
                    {link.title}
                  </span>
                  <span className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all text-sm">
                    &rarr;
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
