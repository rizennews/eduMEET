"use client";

import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";

export default function WhatIsEdumeet() {
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
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter text-white mb-8">
                What is eduMEET?
              </h1>
            </motion.div>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl xl:text-2xl text-white/80 max-w-3xl text-balance leading-relaxed font-medium"
            >
              eduMEET is an open-source video conferencing service designed by and for the research and education community. In Africa, WACREN runs it as the African eduMEET Federation, so universities can meet, teach and collaborate on infrastructure they trust.
            </motion.p>

          </div>
        </section>

        {/* EXPLANATION SECTION */}
        <section className="w-full bg-white py-24 md:py-32 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col space-y-6"
            >
              <p className="text-xl md:text-2xl lg:text-[1.75rem] text-[#001D2E] leading-relaxed font-semibold tracking-tight text-balance">
                You click a link, sign in with your university account and you&apos;re in a meeting. Behind the scenes, the video travels over research and education networks instead of a commercial company&apos;s servers.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                That means your university sets the rules, pays for what it actually uses and keeps its own name on the service.
              </p>
            </motion.div>

            {/* Right Column: Promo Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-black/5 bg-gray-50"
            >
              <video 
                src="https://res.cloudinary.com/djotqlsxl/video/upload/v1790005260/eduMEET_web-based_videoconferencing_platform_-_Promo_yv4xyw.mp4" 
                controls 
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="w-full bg-[#f8fafc] py-24 md:py-32 px-4 border-t border-black/5">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#001D2E]">
                Everything a class or meeting needs
              </h2>
            </div>

            {/* Architectural Grid Box */}
            <div className="w-full bg-white border-l border-t border-slate-200 shadow-sm flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                
                {/* Item 1 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200">
                  <svg className="w-6 h-6 text-[#8E1B73] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  <h3 className="text-lg font-bold text-[#001D2E] mb-3">Browser-based</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    No installation for hosts or participants.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200">
                  <svg className="w-6 h-6 text-[#8E1B73] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  <h3 className="text-lg font-bold text-[#001D2E] mb-3">University sign-in</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Single sign-on through your institution.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200">
                  <svg className="w-6 h-6 text-[#8E1B73] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <h3 className="text-lg font-bold text-[#001D2E] mb-3">Screen sharing</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Present slides and applications.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200">
                  <svg className="w-6 h-6 text-[#8E1B73] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  <h3 className="text-lg font-bold text-[#001D2E] mb-3">Chat and files</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Message and share documents in the room.
                  </p>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200">
                  <svg className="w-6 h-6 text-[#8E1B73] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  <h3 className="text-lg font-bold text-[#001D2E] mb-3">Breakout rooms</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Group work inside a larger session.
                  </p>
                </div>

                {/* Item 6 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200">
                  <svg className="w-6 h-6 text-[#8E1B73] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                  <h3 className="text-lg font-bold text-[#001D2E] mb-3">Host controls</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Waiting room, mute and moderation tools.
                  </p>
                </div>

                {/* Item 7 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200">
                  <svg className="w-6 h-6 text-[#8E1B73] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  <h3 className="text-lg font-bold text-[#001D2E] mb-3">Up to 1,000 people</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    From tutorials to conferences.
                  </p>
                </div>

                {/* Item 8 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200">
                  <svg className="w-6 h-6 text-[#8E1B73] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                  <h3 className="text-lg font-bold text-[#001D2E] mb-3">Automatic failover</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Meetings continue if a server drops.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* WHO IS BEHIND IT SECTION - ARCHITECTURAL TABLE LAYOUT */}
        <section className="w-full bg-[#f3f4f6] py-24 md:py-32 px-4">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            {/* Top Headers */}
            <div className="text-center mb-12">
              <h2 className="text-[#001D2E] font-medium tracking-wide uppercase text-sm mb-4">
                Who&apos;s behind it
              </h2>
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#001D2E] max-w-3xl leading-tight">
                A community effort, from software to your campus.
              </p>
            </div>

            {/* The Main White Box */}
            <div className="w-full bg-white border border-slate-200 flex flex-col">
              
              {/* Box Header */}
              <div className="py-8 text-center border-b border-slate-200">
                <h3 className="text-xl md:text-2xl font-medium text-[#001D2E]">
                  The Collaborators
                </h3>
              </div>

              {/* Grid of Partners (with dividing borders) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200">
                
                {/* Partner 1 */}
                <div className="flex flex-col items-center text-center p-8 lg:p-12 bg-[#2A75C1]">
                  <h4 className="text-lg font-bold text-white mb-4">GÉANT & PCSS</h4>
                  <p className="text-sm text-white/90 leading-relaxed font-medium">
                    Develop and maintain the eduMEET software, used across Europe.
                  </p>
                </div>

                {/* Partner 2 */}
                <div className="flex flex-col items-center text-center p-8 lg:p-12 bg-[#F1921A]">
                  <h4 className="text-lg font-bold text-white mb-4">WACREN</h4>
                  <p className="text-sm text-white/90 leading-relaxed font-medium">
                    Runs the African eduMEET Federation and hosts its first servers across 12 countries.
                  </p>
                </div>

                {/* Partner 3 */}
                <div className="flex flex-col items-center text-center p-8 lg:p-12 bg-[#8E1B73]">
                  <h4 className="text-lg font-bold text-white mb-4">Your NREN</h4>
                  <p className="text-sm text-white/90 leading-relaxed font-medium">
                    Offers the service to universities and research institutes in your country.
                  </p>
                </div>

                {/* Partner 4 */}
                <div className="flex flex-col items-center text-center p-8 lg:p-12 bg-[#003B5C]">
                  <h4 className="text-lg font-bold text-white mb-4">European Union</h4>
                  <p className="text-sm text-white/90 leading-relaxed font-medium">
                    Co-funds the African federation through the AfricaConnect4 programme.
                  </p>
                </div>

              </div>

              {/* Box Footer */}
              <div className="py-10 px-8 text-center bg-white">
                <p className="text-lg md:text-xl text-[#001D2E] font-medium max-w-3xl mx-auto">
                  By building on open infrastructure, we empower universities to control their data and solve real-world challenges at scale.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="w-full bg-white py-24 md:py-32 px-4 border-t border-black/5">
          <div className="max-w-5xl mx-auto flex flex-col">
            
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#001D2E] mb-6">
                How we compare
              </h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                Built specifically for research and education, structurally different from commercial alternatives.
              </p>
            </div>

            {/* Comparison Grid Layout */}
            <div className="w-full relative mt-8">
              
              {/* Header Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mb-4 items-end px-4 md:px-0">
                <div className="hidden md:block pb-6"></div>
                <div className="bg-[#001D2E] rounded-t-3xl p-6 text-center shadow-lg relative z-10 border-b border-white/10">
                  <span className="text-2xl font-bold text-white tracking-tight">eduMEET Africa</span>
                </div>
                <div className="p-6 text-center border-b-2 border-slate-200">
                  <span className="text-lg font-semibold text-slate-500">Typical commercial</span>
                </div>
              </div>

              {/* Rows */}
              <div className="flex flex-col relative">

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-center py-5 md:py-0 border-b border-slate-100 md:border-none">
                  <div className="md:py-8 px-4 md:px-6 text-slate-500 font-medium md:border-b border-slate-200 md:text-right">Who runs it</div>
                  <div className="md:py-8 px-4 md:px-8 bg-[#001D2E] text-white font-semibold text-center md:border-b border-white/10 rounded-xl md:rounded-none">The research and education community</div>
                  <div className="md:py-8 px-4 md:px-8 text-slate-500 text-center md:border-b border-slate-200">A private software company</div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-center py-5 md:py-0 border-b border-slate-100 md:border-none">
                  <div className="md:py-8 px-4 md:px-6 text-slate-500 font-medium md:border-b border-slate-200 md:text-right">Where video travels</div>
                  <div className="md:py-8 px-4 md:px-8 bg-[#001D2E] text-white font-semibold text-center md:border-b border-white/10 rounded-xl md:rounded-none">Servers across the WACREN backbone in Africa</div>
                  <div className="md:py-8 px-4 md:px-8 text-slate-500 text-center md:border-b border-slate-200">Wherever the vendor chooses</div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-center py-5 md:py-0 border-b border-slate-100 md:border-none">
                  <div className="md:py-8 px-4 md:px-6 text-slate-500 font-medium md:border-b border-slate-200 md:text-right">How people sign in</div>
                  <div className="md:py-8 px-4 md:px-8 bg-[#001D2E] text-white font-semibold text-center md:border-b border-white/10 rounded-xl md:rounded-none">Existing university account (eduID.africa, BonafID)</div>
                  <div className="md:py-8 px-4 md:px-8 text-slate-500 text-center md:border-b border-slate-200">Separate vendor accounts</div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-center py-5 md:py-0 border-b border-slate-100 md:border-none">
                  <div className="md:py-8 px-4 md:px-6 text-slate-500 font-medium md:border-b border-slate-200 md:text-right">How cost is counted</div>
                  <div className="md:py-8 px-4 md:px-8 bg-[#001D2E] text-white font-semibold text-center md:border-b border-white/10 rounded-xl md:rounded-none">Meetings running at the same time</div>
                  <div className="md:py-8 px-4 md:px-8 text-slate-500 text-center md:border-b border-slate-200">Usually per host or per licence</div>
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-center py-5 md:py-0 border-b border-slate-100 md:border-none">
                  <div className="md:py-8 px-4 md:px-6 text-slate-500 font-medium md:border-b border-slate-200 md:text-right">Whose name users see</div>
                  <div className="md:py-8 px-4 md:px-8 bg-[#001D2E] text-white font-semibold text-center md:border-b border-white/10 rounded-xl md:rounded-none">Your university&apos;s domain and logo</div>
                  <div className="md:py-8 px-4 md:px-8 text-slate-500 text-center md:border-b border-slate-200">The vendor&apos;s brand</div>
                </div>

                {/* Row 6 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-center py-5 md:py-0 md:border-none">
                  <div className="md:py-8 px-4 md:px-6 text-slate-500 font-medium md:text-right">Software</div>
                  <div className="md:py-8 px-4 md:px-8 bg-[#001D2E] text-[#4ade80] font-bold tracking-wide uppercase text-center rounded-b-3xl rounded-xl md:rounded-t-none md:rounded-b-3xl">
                    Open source
                  </div>
                  <div className="md:py-8 px-4 md:px-8 text-slate-500 text-center">Closed, proprietary</div>
                </div>

              </div>
            </div>
            
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
