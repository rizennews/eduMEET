"use client";

import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ParticipationPage() {
  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen overflow-x-hidden w-full">
        
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center bg-[#003B5C] pt-32 pb-20 w-full text-center overflow-hidden">
          
          <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-5xl mx-auto">
            
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter text-white mb-8">
                Contribute infrastructure
              </h1>
            </motion.div>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl xl:text-2xl text-white/80 max-w-4xl text-balance leading-relaxed font-medium mb-12"
            >
              The African eduMEET Federation is seeded by WACREN and built by the NRENs that join it. Contribute media-node capacity, become part of the shared pool, and run your own trusted video service under your own domain.
            </motion.p>



          </div>
        </section>

        {/* PLACEHOLDER UI GRID (For consistency) */}
        <section className="w-full bg-slate-50 py-20 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            
            <div className="mb-16 text-center flex flex-col items-center">
              <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                Capacity
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E] mb-6">
                Why contribute nodes?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              
              <div className="bg-white border border-slate-200 p-10 flex flex-col">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-6 border border-slate-200">
                  <span className="font-bold text-[#003B5C]">01</span>
                </div>
                <h3 className="text-2xl font-bold text-[#001D2E] mb-4">Local Performance</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Keeping media traffic within your own network drastically reduces latency and bandwidth costs for your local institutions.
                </p>
              </div>

              <div className="bg-[#003B5C] border border-[#003B5C] p-10 flex flex-col relative overflow-hidden">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 border border-white/20 relative z-10">
                  <span className="font-bold text-white">02</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Federation Strength</h3>
                <p className="text-slate-300 font-medium leading-relaxed relative z-10">
                  Adding to the shared pool ensures resilience across the entire continent, allowing traffic to seamlessly failover to neighboring nodes if needed.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
