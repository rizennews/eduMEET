"use client";

import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen overflow-x-hidden w-full">
        
        {/* HERO SECTION */}
        <section className="relative flex flex-col justify-center bg-[#003B5C] pt-32 pb-24 w-full overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center px-4 md:px-8 lg:px-12 w-full max-w-[1400px] mx-auto">
            
            {/* Left Column: Content */}
            <div className="flex flex-col items-start text-left">
              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter leading-[1.05] text-white mb-6 pr-4 text-balance">
                  Video platform built for African research and education communities
                </h1>
              </motion.div>

              <div className="w-full max-w-[612px]">
                {/* Subtitle */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-lg md:text-xl text-white/70 leading-relaxed font-medium mb-10 text-justify"
                >
                  Teach a class, supervise a thesis or host a conference from your browser. Sign in with your university account, on a service run by the research and education community, with meeting traffic carried on African networks.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start justify-between gap-4 mb-6"
                >
                  <Link href="https://wacren.edumeet.africa/" target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1 px-4 sm:px-0 py-3 text-sm bg-[#F1921A] text-white font-bold hover:bg-[#D97D12] transition-colors text-center border border-transparent rounded-full shadow-none">
                    Test eduMEET
                  </Link>
                  <Link href="/get-started" className="w-full sm:flex-[1.5] px-4 sm:px-0 py-3 text-sm bg-white text-[#001D2E] font-bold hover:bg-slate-100 transition-colors text-center border border-transparent rounded-full shadow-none">
                    Get eduMEET at your university
                  </Link>
                  <Link href="/what-is-edumeet" className="w-full sm:flex-1 px-4 sm:px-0 py-3 text-sm bg-transparent border border-white/30 text-white font-bold hover:bg-white/10 transition-colors text-center rounded-full shadow-none whitespace-nowrap">
                    What is eduMEET
                  </Link>
                </motion.div>

                {/* Trust Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm text-white/50 mb-8 lg:mb-0"
                >
                  Open source. Backed by WACREN and the European Union through AfricaConnect4. <br className="hidden sm:block" />
                  Running an NREN? <Link href="/nren-hub" className="text-white/80 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors">Go to the NREN hub</Link>
                </motion.p>
              </div>
            </div>

            {/* Right Column: Video */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-2 backdrop-blur-sm lg:scale-[1.2] xl:scale-[1.3] lg:origin-left z-0"
            >
              {/* Inner frame for the video to give it a "device" look */}
              <div className="relative w-full aspect-[3/2] rounded-[1.5rem] overflow-hidden bg-gray-900 border border-white/10 flex shadow-2xl">
                <video 
                  src="https://res.cloudinary.com/djotqlsxl/video/upload/v1790004662/man-video-conferencing-on-laptop-with-headphones-2026-09-18-02-40-43-utc_e3tpss.mov" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover block"
                />
              </div>
            </motion.div>

          </div>
        </section>

        {/* FEATURES GRID SECTION */}
        <section className="w-full bg-white py-32 px-4">
          <div className="max-w-7xl mx-auto flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-semibold tracking-tight text-[#001D2E] mb-16 text-center"
            >
              What does eduMEET mean for you?
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              
              {/* Card 1: Student/Lecturer */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative flex flex-col bg-[#F1921A] h-[260px] group overflow-hidden"
              >
                <div className="p-5 z-10">
                  <h3 className="text-2xl font-semibold text-white tracking-tight">Students</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                  <svg className="w-16 h-16 text-white/90 z-10 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                </div>
                <div className="p-5 mt-auto flex items-end justify-between gap-2 z-10">
                  <p className="text-xs font-medium text-white/90 leading-relaxed max-w-[85%]">
                    Join classes, run tutorials and office hours seamlessly from your browser.
                  </p>
                  <span className="text-white text-xl font-light group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
                <Link href="/students-lecturers" className="absolute inset-0 z-20"><span className="sr-only">For teaching</span></Link>
              </motion.div>

              {/* Card 2: Researcher */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex flex-col bg-[#8E1B73] h-[260px] group overflow-hidden"
              >
                <div className="p-5 z-10">
                  <h3 className="text-2xl font-semibold text-white tracking-tight">Researchers</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                  <svg className="w-16 h-16 text-white/90 z-10 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div className="p-5 mt-auto flex items-end justify-between gap-2 z-10">
                  <p className="text-xs font-medium text-white/90 leading-relaxed max-w-[85%]">
                    Meet project partners and host seminars effortlessly across borders.
                  </p>
                  <span className="text-white text-xl font-light group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
                <Link href="/researchers" className="absolute inset-0 z-20"><span className="sr-only">For research</span></Link>
              </motion.div>

              {/* Card 3: University Leadership */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative flex flex-col bg-[#2A75C1] h-[260px] group overflow-hidden"
              >
                <div className="p-5 z-10">
                  <h3 className="text-2xl font-semibold text-white tracking-tight">Leadership</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                  <svg className="w-16 h-16 text-white/90 z-10 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div className="p-5 mt-auto flex items-end justify-between gap-2 z-10">
                  <p className="text-xs font-medium text-white/90 leading-relaxed max-w-[85%]">
                    Cut licence costs drastically and keep total control of your platform.
                  </p>
                  <span className="text-white text-xl font-light group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
                <Link href="/leadership" className="absolute inset-0 z-20"><span className="sr-only">For leadership</span></Link>
              </motion.div>

              {/* Card 4: IT Directors */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative flex flex-col bg-[#003B5C] h-[260px] group overflow-hidden"
              >
                <div className="p-5 z-10">
                  <h3 className="text-2xl font-semibold text-white tracking-tight">Campus IT</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                  <svg className="w-16 h-16 text-white/90 z-10 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                </div>
                <div className="p-5 mt-auto flex items-end justify-between gap-2 z-10">
                  <p className="text-xs font-medium text-white/90 leading-relaxed max-w-[85%]">
                    No servers to manage. Total control with your login and your domain.
                  </p>
                  <span className="text-white text-xl font-light group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
                <Link href="/it-directors" className="absolute inset-0 z-20"><span className="sr-only">For IT</span></Link>
              </motion.div>

              {/* Card 5: NREN */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative flex flex-col bg-[#001D2E] h-[260px] group overflow-hidden"
              >
                <div className="p-5 z-10">
                  <h3 className="text-2xl font-semibold text-white tracking-tight">NRENs</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                  <svg className="w-16 h-16 text-white/90 z-10 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <div className="p-5 mt-auto flex items-end justify-between gap-2 z-10">
                  <p className="text-xs font-medium text-white/90 leading-relaxed max-w-[85%]">
                    Contribute capacity and run the service seamlessly for members.
                  </p>
                  <span className="text-white text-xl font-light group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
                <Link href="/nrens" className="absolute inset-0 z-20"><span className="sr-only">For NRENs</span></Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ABOUT SECTION - PREMIUM REDESIGN */}
        <section className="w-full bg-[#F5F5F7] py-32 px-4 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F1921A]/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 text-center">
            
            {/* Content - Text & Features */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col w-full items-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#001D2E] mb-6 leading-[1.05]">
                Easy to access. Easy to use
              </h2>
              <p className="text-lg text-slate-500 mb-16 leading-relaxed max-w-2xl font-medium">
                eduMEET works exactly like the video tools you already know. The difference is who runs it: the global research and education community.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
                
                {/* Premium Feature Card 1 */}
                <div className="flex flex-col items-center text-center gap-4 bg-white p-6 md:p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03]">
                  <div className="text-[#8E1B73]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold text-[#001D2E] tracking-tight text-center">Open in your browser</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium text-center">Nothing to download or install, on any device.</p>
                  </div>
                </div>

                {/* Premium Feature Card 2 */}
                <div className="flex flex-col items-center text-center gap-4 bg-white p-6 md:p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03]">
                  <div className="text-[#8E1B73]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold text-[#001D2E] tracking-tight text-center">Single Sign-On ready</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium text-center">Log in instantly with your existing university credentials.</p>
                  </div>
                </div>

                {/* Premium Feature Card 3 */}
                <div className="flex flex-col items-center text-center gap-4 bg-white p-6 md:p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03]">
                  <div className="text-[#8E1B73]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold text-[#001D2E] tracking-tight text-center">Your university&apos;s brand</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium text-center">Your institution&apos;s web address and logo, not a vendor&apos;s.</p>
                  </div>
                </div>
                
              </div>
              
              <Link href="/how-it-works" className="inline-flex items-center justify-center w-fit px-8 py-4 bg-[#001D2E] text-white rounded-none shadow-none border border-transparent font-semibold hover:bg-[#F1921A] transition-all gap-2 group mt-4">
                Learn more about eduMEET
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* COMPREHENSIVE FEATURES SECTION */}
        <section className="w-full bg-[#F7F9FA] py-24 px-4 border-t border-black/5">
          <div className="max-w-7xl mx-auto flex flex-col">
            
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#001D2E]">
                Everything a class or meeting needs
              </h2>
            </div>

            {/* The Bordered Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-slate-200 border border-slate-200">
              
              {/* Feature 1 */}
              <div className="bg-white p-8 flex flex-col gap-4">
                <div className="text-[#8E1B73]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#001D2E] tracking-tight mb-2">Share your screen</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm">Show slides, papers or code to the whole room.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 flex flex-col gap-4">
                <div className="text-[#8E1B73]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#001D2E] tracking-tight mb-2">Chat alongside</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm">Take questions without interrupting the speaker.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 flex flex-col gap-4">
                <div className="text-[#8E1B73]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#001D2E] tracking-tight mb-2">Share files</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm">Hand out readings and worksheets in the meeting.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 flex flex-col gap-4">
                <div className="text-[#8E1B73]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#001D2E] tracking-tight mb-2">Raise a hand</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm">Keep large classes orderly.</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-8 flex flex-col gap-4">
                <div className="text-[#8E1B73]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#001D2E] tracking-tight mb-2">Breakout rooms</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm">Split a lecture into small discussion groups.</p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="bg-white p-8 flex flex-col gap-4">
                <div className="text-[#8E1B73]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#001D2E] tracking-tight mb-2">Waiting room</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm">Hosts decide who gets in.</p>
                </div>
              </div>

              {/* Feature 7 */}
              <div className="bg-white p-8 flex flex-col gap-4">
                <div className="text-[#8E1B73]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#001D2E] tracking-tight mb-2">Record sessions</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm">Keep a copy for students who missed the class.</p>
                </div>
              </div>

              {/* Feature 8 */}
              <div className="bg-white p-8 flex flex-col gap-4">
                <div className="text-[#8E1B73]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#001D2E] tracking-tight mb-2">Works on phones</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm">Join from a mobile browser on the go.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* THREE STEPS SECTION */}
        <section className="w-full bg-white py-24 px-4 border-t border-black/5">
          <div className="max-w-7xl mx-auto flex flex-col">
            
            <div className="flex flex-col md:text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#001D2E] mb-6">
                Three steps from your network to your classroom
              </h2>
              <p className="text-lg text-slate-500 font-normal leading-relaxed">
                eduMEET reaches universities through their National Research and Education Network (NREN), the organisation that already connects your campus to the internet.
              </p>
            </div>

            {/* The Bordered Grid for Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-slate-200 border border-slate-200 mb-16">
              
              {/* Step 1 */}
              <div className="bg-white p-8 flex flex-col relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-xs font-semibold tracking-wider text-[#F1921A] uppercase">
                    Done by your NREN
                  </div>
                  <div className="text-4xl font-light text-slate-200 tracking-tighter">01</div>
                </div>
                <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">Your NREN joins the federation</h3>
                <p className="text-slate-500 font-normal leading-relaxed text-sm">
                  Your national network signs up to the African eduMEET Federation, run by WACREN.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 flex flex-col relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-xs font-semibold tracking-wider text-[#2A75C1] uppercase">
                    Done by your IT team
                  </div>
                  <div className="text-4xl font-light text-slate-200 tracking-tighter">02</div>
                </div>
                <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">Your university connects</h3>
                <p className="text-slate-500 font-normal leading-relaxed text-sm">
                  Campus IT links eduMEET to your university login and web address.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 flex flex-col relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-xs font-semibold tracking-wider text-[#8E1B73] uppercase">
                    Students, lecturers, researchers
                  </div>
                  <div className="text-4xl font-light text-slate-200 tracking-tighter">03</div>
                </div>
                <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">Everyone starts meeting</h3>
                <p className="text-slate-500 font-normal leading-relaxed text-sm">
                  Staff and students sign in with the accounts they already have.
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/nren-hub" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#8E1B73] text-white rounded-none shadow-none border border-transparent font-semibold hover:bg-[#8E1B73]/90 transition-all">
                Check if your country is connected
              </Link>
              <Link href="/how-it-works" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-100 text-[#001D2E] rounded-none shadow-none border border-transparent font-semibold hover:bg-slate-200 transition-all">
                See how it works
              </Link>
            </div>

          </div>
        </section>

        {/* CONTROL, COST AND TRUST SECTION */}
        <section className="w-full bg-[#F7F9FA] py-24 px-4 border-t border-black/5">
          <div className="max-w-7xl mx-auto flex flex-col">
            
            <div className="flex flex-col md:text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#001D2E]">
                Control, cost and trust in one service
              </h2>
            </div>

            {/* The Bordered Grid for 6 Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-slate-200 border border-slate-200">
              
              {/* Feature 1 */}
              <div className="bg-white p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">Your meetings stay in trusted hands</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm mb-6">
                    Audio and video run on servers hosted across Africa by the research and education community, under African institutional governance.
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Matters most to:</span>
                  <span className="text-sm font-medium text-[#8E1B73]">Vice Chancellors, data protection officers</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">Pay for use, not for every licence</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm mb-6">
                    Costs follow how many meetings run at the same time, not how many staff and students you have. That is usually far cheaper than per-host licences.
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Matters most to:</span>
                  <span className="text-sm font-medium text-[#F1921A]">Finance and leadership</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">One login for everything</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm mb-6">
                    People sign in with their existing university account through eduID.africa or BonafID. No separate accounts to create or support.
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Matters most to:</span>
                  <span className="text-sm font-medium text-[#2A75C1]">IT directors, students, staff</span>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">Open source, no lock-in</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm mb-6">
                    Built on open-source software and a shared model, so you are not tied to a yearly commercial contract.
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Matters most to:</span>
                  <span className="text-sm font-medium text-[#003B5C]">IT directors, procurement</span>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">Classes keep running</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm mb-6">
                    If one server is busy or offline, meetings move to another automatically, without dropping anyone.
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Matters most to:</span>
                  <span className="text-sm font-medium text-[#F1921A]">Lecturers, IT directors</span>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="bg-white p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">Your brand, not a vendor&apos;s</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-sm mb-6">
                    Students see your university&apos;s name, web address and logo every time they join.
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Matters most to:</span>
                  <span className="text-sm font-medium text-[#8E1B73]">Leadership, communications</span>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* TESTIMONIALS SECTION (Hidden for now) */}
        <section className="hidden w-full bg-[#F7F9FA] py-24 px-4 border-t border-black/5 overflow-hidden">
          <div className="max-w-[1400px] mx-auto flex flex-col">
            
            <div className="flex flex-col md:text-center max-w-3xl mx-auto mb-16 relative">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#001D2E]">
                What early users say
              </h2>
            </div>

            {/* Carousel Container */}
            <div className="flex overflow-hidden w-full relative group">
              {/* Fade masks for edges */}
              <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#F7F9FA] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#F7F9FA] to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6">
                
                {/* First Set */}
                <div className="flex gap-6 items-stretch flex-nowrap px-3">
                  
                  {/* Testimonial 1 */}
                  <div className="flex flex-col gap-4 bg-white p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03] shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]">
                    <div className="text-[#8E1B73] shrink-0 bg-[#8E1B73]/5 p-4 rounded-full self-start">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <p className="text-[#001D2E] font-medium text-lg leading-relaxed flex-1">
                      &quot;Finally, a platform that genuinely understands our academic needs. Our students find it incredibly intuitive.&quot;
                    </p>
                    <div className="mt-4 border-t border-slate-100 pt-6">
                      <div className="text-base font-bold text-[#001D2E]">University of Lagos</div>
                      <div className="text-sm font-medium text-slate-500">Student Union</div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="flex flex-col gap-4 bg-white p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03] shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]">
                    <div className="text-[#8E1B73] shrink-0 bg-[#8E1B73]/5 p-4 rounded-full self-start">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <p className="text-[#001D2E] font-medium text-lg leading-relaxed flex-1">
                      &quot;Seamless SSO integration saved us months of headaches. Having our university branding front and center is a huge plus.&quot;
                    </p>
                    <div className="mt-4 border-t border-slate-100 pt-6">
                      <div className="text-base font-bold text-[#001D2E]">Sarah Ndegwa</div>
                      <div className="text-sm font-medium text-slate-500">Head of IT Infrastructure</div>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="flex flex-col gap-4 bg-white p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03] shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]">
                    <div className="text-[#8E1B73] shrink-0 bg-[#8E1B73]/5 p-4 rounded-full self-start">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <p className="text-[#001D2E] font-medium text-lg leading-relaxed flex-1">
                      &quot;eduMEET has completely transformed how our researchers collaborate across borders. The security and performance are unmatched.&quot;
                    </p>
                    <div className="mt-4 border-t border-slate-100 pt-6">
                      <div className="text-base font-bold text-[#001D2E]">Dr. Amina Diallo</div>
                      <div className="text-sm font-medium text-slate-500">Director of Research, CADU</div>
                    </div>
                  </div>

                  {/* Testimonial 4 */}
                  <div className="flex flex-col gap-4 bg-white p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03] shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]">
                    <div className="text-[#8E1B73] shrink-0 bg-[#8E1B73]/5 p-4 rounded-full self-start">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <p className="text-[#001D2E] font-medium text-lg leading-relaxed flex-1">
                      &quot;Managing licenses used to be a nightmare. The pay-for-use model aligns perfectly with our academic calendar.&quot;
                    </p>
                    <div className="mt-4 border-t border-slate-100 pt-6">
                      <div className="text-base font-bold text-[#001D2E]">Kwame Osei</div>
                      <div className="text-sm font-medium text-slate-500">Chief Financial Officer, KNUST</div>
                    </div>
                  </div>

                  {/* Testimonial 5 */}
                  <div className="flex flex-col gap-4 bg-white p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03] shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]">
                    <div className="text-[#8E1B73] shrink-0 bg-[#8E1B73]/5 p-4 rounded-full self-start">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <p className="text-[#001D2E] font-medium text-lg leading-relaxed flex-1">
                      &quot;No more dropped calls during important international lectures. The open-source nature means absolute zero vendor lock-in.&quot;
                    </p>
                    <div className="mt-4 border-t border-slate-100 pt-6">
                      <div className="text-base font-bold text-[#001D2E]">Professor Mensah</div>
                      <div className="text-sm font-medium text-slate-500">WACREN IT</div>
                    </div>
                  </div>

                </div>

                {/* Second Set (Duplicate for seamless loop) */}
                <div className="flex gap-6 items-stretch flex-nowrap px-3">
                  
                  {/* Testimonial 1 */}
                  <div className="flex flex-col gap-4 bg-white p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03] shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]">
                    <div className="text-[#8E1B73] shrink-0 bg-[#8E1B73]/5 p-4 rounded-full self-start">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <p className="text-[#001D2E] font-medium text-lg leading-relaxed flex-1">
                      &quot;Finally, a platform that genuinely understands our academic needs. Our students find it incredibly intuitive.&quot;
                    </p>
                    <div className="mt-4 border-t border-slate-100 pt-6">
                      <div className="text-base font-bold text-[#001D2E]">University of Lagos</div>
                      <div className="text-sm font-medium text-slate-500">Student Union</div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="flex flex-col gap-4 bg-white p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03] shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]">
                    <div className="text-[#8E1B73] shrink-0 bg-[#8E1B73]/5 p-4 rounded-full self-start">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <p className="text-[#001D2E] font-medium text-lg leading-relaxed flex-1">
                      &quot;Seamless SSO integration saved us months of headaches. Having our university branding front and center is a huge plus.&quot;
                    </p>
                    <div className="mt-4 border-t border-slate-100 pt-6">
                      <div className="text-base font-bold text-[#001D2E]">Sarah Ndegwa</div>
                      <div className="text-sm font-medium text-slate-500">Head of IT Infrastructure</div>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="flex flex-col gap-4 bg-white p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03] shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]">
                    <div className="text-[#8E1B73] shrink-0 bg-[#8E1B73]/5 p-4 rounded-full self-start">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <p className="text-[#001D2E] font-medium text-lg leading-relaxed flex-1">
                      &quot;eduMEET has completely transformed how our researchers collaborate across borders. The security and performance are unmatched.&quot;
                    </p>
                    <div className="mt-4 border-t border-slate-100 pt-6">
                      <div className="text-base font-bold text-[#001D2E]">Dr. Amina Diallo</div>
                      <div className="text-sm font-medium text-slate-500">Director of Research, CADU</div>
                    </div>
                  </div>

                  {/* Testimonial 4 */}
                  <div className="flex flex-col gap-4 bg-white p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03] shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]">
                    <div className="text-[#8E1B73] shrink-0 bg-[#8E1B73]/5 p-4 rounded-full self-start">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <p className="text-[#001D2E] font-medium text-lg leading-relaxed flex-1">
                      &quot;Managing licenses used to be a nightmare. The pay-for-use model aligns perfectly with our academic calendar.&quot;
                    </p>
                    <div className="mt-4 border-t border-slate-100 pt-6">
                      <div className="text-base font-bold text-[#001D2E]">Kwame Osei</div>
                      <div className="text-sm font-medium text-slate-500">Chief Financial Officer, KNUST</div>
                    </div>
                  </div>

                  {/* Testimonial 5 */}
                  <div className="flex flex-col gap-4 bg-white p-8 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.03] shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]">
                    <div className="text-[#8E1B73] shrink-0 bg-[#8E1B73]/5 p-4 rounded-full self-start">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <p className="text-[#001D2E] font-medium text-lg leading-relaxed flex-1">
                      &quot;No more dropped calls during important international lectures. The open-source nature means absolute zero vendor lock-in.&quot;
                    </p>
                    <div className="mt-4 border-t border-slate-100 pt-6">
                      <div className="text-base font-bold text-[#001D2E]">Professor Mensah</div>
                      <div className="text-sm font-medium text-slate-500">WACREN IT</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="w-full bg-slate-50 py-24 px-4 border-t border-slate-200">
          <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
            <h2 className="text-3xl font-serif text-[#001D2E] mb-4">
              Bring eduMEET to your campus
            </h2>
            <p className="text-base text-slate-600 mb-10 max-w-xl">
              Find out if your NREN has joined, or tell us you're interested.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link href="/get-started" className="group inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all bg-[#F1921A] hover:bg-[#D97D12] w-full sm:w-auto border border-transparent rounded-none shadow-none">
                Get eduMEET
              </Link>
              <Link href="mailto:info@wacren.net" className="group inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[#001D2E] transition-all bg-white hover:bg-slate-50 w-full sm:w-auto border border-slate-300 rounded-none shadow-none">
                Contact WACREN
              </Link>
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
