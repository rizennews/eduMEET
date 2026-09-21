"use client";

import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";

export default function WhatIsEdumeet() {
  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen overflow-x-hidden w-full">
        
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center bg-[#003B5C] pt-40 pb-32 w-full text-center overflow-hidden">
          
          {/* Subtle background pattern or glow can go here */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #ffffff 0%, transparent 70%)' }}></div>

          <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-4xl mx-auto">
            
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter text-white mb-8">
                What is eduMEET?
              </h1>
            </motion.div>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl xl:text-2xl text-white/80 max-w-3xl text-balance leading-relaxed font-medium mb-12"
            >
              eduMEET is an open-source video conferencing service designed by and for the research and education community. In Africa, WACREN runs it as the African eduMEET Federation, so universities can meet, teach and collaborate on infrastructure they trust.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F1921A] text-white font-semibold hover:bg-[#F1921A]/90 transition-all text-center">
                Get started today
              </Link>
              <Link href="#" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-white/30 text-white font-semibold hover:bg-white/10 transition-all text-center">
                View technical specs
              </Link>
            </motion.div>

          </div>
        </section>

        {/* We can add more sections below later */}
        <section className="w-full bg-white py-32 px-4 flex flex-col items-center">
           <p className="text-slate-400 font-mono text-sm">(Additional content sections will go here)</p>
        </section>

      </main>
    </PageTransition>
  );
}
