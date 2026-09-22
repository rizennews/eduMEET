"use client";

import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ResearchersPage() {
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
                Collaborate across borders on trusted infrastructure
              </h1>
            </motion.div>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl xl:text-2xl text-white/80 max-w-3xl text-balance leading-relaxed font-medium"
            >
              Run project meetings, lab seminars and conferences with partners in Africa and beyond, without buying another licence.
            </motion.p>

          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="w-full bg-[#f8fafc] py-24 md:py-32 px-4 border-t border-black/5">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            {/* Header */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#001D2E]">
                Built for how research teams work
              </h2>
            </div>

            {/* Architectural Grid Box */}
            <div className="w-full bg-white border-l border-t border-slate-200 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Item 1 */}
                <div className="flex flex-col p-8 md:p-10 lg:p-12 border-r border-b border-slate-200 h-full">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#2A75C1] mb-3">Up to 100 people</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4">Consortium meetings</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Bring partners from several universities into one room, each signing in with their own institution.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col p-8 md:p-10 lg:p-12 border-r border-b border-slate-200 h-full">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#F1921A] mb-3">Up to 300 people</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4">Research seminars</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Host a departmental or inter-university seminar series with a permanent link.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col p-8 md:p-10 lg:p-12 border-r border-b border-slate-200 h-full">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#8E1B73] mb-3">Up to 1,000 people</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4">Conferences and webinars</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Deliver keynotes and panels to a continental audience.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col p-8 md:p-10 lg:p-12 border-r border-b border-slate-200 h-full">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#003B5C] mb-3">Small groups</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4">Supervision at a distance</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Meet co-supervisors and doctoral students across countries.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* WHY IT MATTERS SECTION (Solid Color Grid) */}
        <section className="w-full bg-white py-24 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            {/* Header */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#001D2E]">
                Why it matters for research
              </h2>
            </div>

            {/* 2x2 Solid Color Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 shadow-sm">
              
              {/* Point 1 (Navy) */}
              <div className="flex flex-col p-10 md:p-16 bg-[#003B5C] text-white">
                <h3 className="text-2xl font-bold mb-4">Sensitive discussions stay in the community</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  Meeting traffic flows through research and education networks, not commercial platforms.
                </p>
              </div>

              {/* Point 2 (Purple) */}
              <div className="flex flex-col p-10 md:p-16 bg-[#8E1B73] text-white">
                <h3 className="text-2xl font-bold mb-4">Partners sign in as themselves</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  eduMEET works with eduID.africa, BonafID and eduGAIN-connected identity providers, so collaborators log in with their own institution.
                </p>
              </div>

              {/* Point 3 (Blue) */}
              <div className="flex flex-col p-10 md:p-16 bg-[#2A75C1] text-white">
                <h3 className="text-2xl font-bold mb-4">No licence line in your budget</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  Your university provides access, so project funds go to research, not software subscriptions.
                </p>
              </div>

              {/* Point 4 (Orange) */}
              <div className="flex flex-col p-10 md:p-16 bg-[#F1921A] text-white">
                <h3 className="text-2xl font-bold mb-4">Part of a wider ecosystem</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  eduMEET sits alongside other WACREN services for researchers, including eduID.africa.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="w-full bg-slate-50 py-24 px-4 border-t border-slate-200">
          <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
            <h2 className="text-3xl font-serif text-[#001D2E] mb-4">
              Planning a research event?
            </h2>
            <p className="text-base text-slate-600 mb-10 max-w-xl">
              Check whether your institution has access, or ask your IT office to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link href="#" className="group inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all bg-[#F1921A] hover:bg-[#D97D12] w-full sm:w-auto border border-transparent rounded-none shadow-none">
                Get eduMEET
              </Link>
              <Link href="#" className="group inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[#001D2E] transition-all bg-white hover:bg-slate-50 w-full sm:w-auto border border-slate-300 rounded-none shadow-none">
                Read FAQ
              </Link>
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
