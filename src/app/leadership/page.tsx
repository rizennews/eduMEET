"use client";

import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";

export default function LeadershipPage() {
  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen overflow-x-hidden w-full">
        
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center bg-[#003B5C] pt-32 pb-20 w-full text-center overflow-hidden">
          
          <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-4xl mx-auto">
            
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter text-white mb-8 text-balance">
                A video platform your university controls
              </h1>
            </motion.div>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl xl:text-2xl text-white/80 max-w-3xl text-balance leading-relaxed font-medium"
            >
              For Vice Chancellors, Registrars and IT directors weighing the cost, security and long-term fit of their video conferencing.
            </motion.p>

          </div>
        </section>

        {/* STRATEGIC CASE SECTION */}
        <section className="w-full bg-white py-16 md:py-20 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 lg:divide-x divide-slate-200 lg:border border-slate-200">
              
              {/* Text Content */}
              <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                <div className="text-sm font-bold tracking-wider uppercase text-[#003B5C] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  Overview
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#001D2E] mb-4 leading-tight">
                  The strategic case
                </h2>
                <p className="text-base text-slate-500 font-medium leading-relaxed">
                  Teaching, research and administration now depend on video. eduMEET gives your institution that capability on community infrastructure, with predictable costs and your own brand.
                </p>
              </div>

              {/* Image Content */}
              <div className="relative h-[300px] lg:h-auto min-h-[300px] bg-slate-100 overflow-hidden border border-slate-200 lg:border-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/business-meeting-with-team-via-video-call-2026-03-09-02-54-58-utc.jpg" 
                  alt="Business meeting via video call" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* KEY BENEFITS SECTION */}
        <section className="w-full bg-[#f8fafc] py-16 md:py-20 px-4 border-t border-black/5">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            {/* 2x2 Grid */}
            <div className="w-full bg-white border-l border-t border-slate-200 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Benefit 1 */}
                <div className="flex flex-col p-6 md:p-8 border-r border-b border-slate-200 h-full">
                  <div className="mb-4">
                    <svg className="w-6 h-6 text-[#003B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#001D2E] mb-2">Digital sovereignty</h3>
                  <p className="text-slate-500 leading-relaxed font-medium text-base">
                    Video runs on African infrastructure under African institutional governance. Less exposure to decisions made by foreign vendors.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="flex flex-col p-6 md:p-8 border-r border-b border-slate-200 h-full">
                  <div className="mb-4">
                    <svg className="w-6 h-6 text-[#F1921A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#001D2E] mb-2">Predictable, lower cost</h3>
                  <p className="text-slate-500 leading-relaxed font-medium text-base">
                    Pricing is based on peak simultaneous use, not the number of staff and students. Most people aren&apos;t hosting a meeting at the same time.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="flex flex-col p-6 md:p-8 border-r border-b border-slate-200 h-full">
                  <div className="mb-4">
                    <svg className="w-6 h-6 text-[#8E1B73]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#001D2E] mb-2">Your institutional brand</h3>
                  <p className="text-slate-500 leading-relaxed font-medium text-base">
                    Every session carries your university&apos;s web address and identity.
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="flex flex-col p-6 md:p-8 border-r border-b border-slate-200 h-full">
                  <div className="mb-4">
                    <svg className="w-6 h-6 text-[#2A75C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#001D2E] mb-2">Backed by a continental programme</h3>
                  <p className="text-slate-500 leading-relaxed font-medium text-base">
                    Seeded by WACREN and co-funded by the European Union through AfricaConnect4 (2025 to 2029).
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* BOTTOM SECTIONS: QUESTIONS & CTA */}
        <section className="w-full bg-slate-50 py-16 md:py-20 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-0 lg:border lg:border-slate-200 lg:divide-x divide-slate-200 bg-white">
            
            {/* Questions to ask your NREN */}
            <div className="p-8 md:p-12 xl:p-16 flex flex-col justify-center border border-slate-200 lg:border-none">
              <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Preparation
              </div>
              <h2 className="text-3xl font-bold text-[#001D2E] mb-8">Questions to ask your NREN</h2>
              
              <ul className="space-y-5">
                {[
                  "Has our NREN joined the African eduMEET Federation?",
                  "Will our NREN contribute capacity or subscribe?",
                  "What capacity does our university need at peak times?",
                  "What is the cost for our institution, and when does it start?"
                ].map((question, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8E1B73]/10 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-[#8E1B73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-medium leading-relaxed">{question}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA: Brief your council */}
            <div className="p-8 md:p-12 xl:p-16 flex flex-col justify-center bg-[#003B5C] border border-transparent lg:border-none">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
                Brief your council
              </h2>
              <p className="text-white/80 mb-10 leading-relaxed font-medium text-lg">
                A two-page summary of eduMEET Africa for management and council meetings.
              </p>
              
              <div className="mt-auto">
                <a href="#" className="group inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-bold text-[#003B5C] transition-all bg-white rounded-full hover:bg-slate-100 gap-2 w-full sm:w-auto">
                  Download the leadership brief (PDF)
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>
    </PageTransition>
  );
}
