"use client";

import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";

export default function FederationModelPage() {
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
              className="w-full"
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter text-white mb-8">
                The federation model
              </h1>
            </motion.div>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl xl:text-2xl text-white/80 max-w-3xl text-balance leading-relaxed font-medium"
            >
              Architecture and governance of the African eduMEET infrastructure.
            </motion.p>

          </div>
        </section>
        {/* WACREN SEEDING SECTION */}
        <section className="w-full bg-white py-24 px-4 border-b border-slate-200">
          <div className="max-w-7xl mx-auto flex flex-col">
            
            <div className="flex flex-col md:text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#001D2E] mb-6">
                WACREN is seeding the federation across West and Central Africa
              </h2>
              <p className="text-lg text-slate-500 font-normal leading-relaxed">
                The service starts with coverage from day one, using servers already installed on WACREN&apos;s regional network.
              </p>
            </div>

            {/* 3 Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-slate-200 border border-slate-200 mb-8">
              
              {/* Stat 1 */}
              <div className="bg-white p-10 flex flex-col items-center text-center justify-center">
                <div className="text-6xl font-bold text-[#8E1B73] tracking-tighter mb-4">12</div>
                <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">countries</h3>
                <p className="text-slate-500 font-normal leading-relaxed text-sm max-w-xs">
                  with backbone servers ready to carry meetings
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white p-10 flex flex-col items-center text-center justify-center">
                <div className="text-6xl font-bold text-[#F1921A] tracking-tighter mb-4">AC4</div>
                <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">AfricaConnect4</h3>
                <p className="text-slate-500 font-normal leading-relaxed text-sm max-w-xs">
                  EU co-funded programme, 2025 to 2029
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white p-10 flex flex-col items-center text-center justify-center">
                <div className="text-6xl font-bold text-[#2A75C1] tracking-tighter mb-4">Day 1</div>
                <h3 className="text-xl font-bold text-[#001D2E] tracking-tight mb-3">coverage</h3>
                <p className="text-slate-500 font-normal leading-relaxed text-sm max-w-xs">
                  no waiting period for regional reach
                </p>
              </div>

            </div>

            {/* Logos (Hidden for now) */}
            <div className="hidden relative w-full overflow-hidden pt-12 pb-12 border-y border-slate-100">
              
              <div className="text-center mb-16 relative z-20">
                <h3 className="text-2xl md:text-3xl text-slate-600 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                  Empowering <i className="font-serif">Exceptional</i> Teams <i className="font-serif">Worldwide</i>
                </h3>
              </div>

              {/* Gradient masks for fading edges like the screenshot */}
              <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {/* First set of logos */}
                <div className="flex items-center justify-center gap-12 md:gap-24 flex-nowrap px-6 md:px-12">
                  <img src="/wacren.svg" alt="WACREN" className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
                  <img src="/africaconnect4.png" alt="AfricaConnect4" className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
                  <img src="/EU-logo.png" alt="EU" className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
                  
                  <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    <img src="/GEANT-icon.svg" alt="GEANT" className="h-10 md:h-14 w-auto object-contain" />
                    <img src="/GEANT-text.svg" alt="GEANT Text" className="h-5 md:h-7 w-auto object-contain" />
                  </div>
                  
                  <img src="/PCSS.jpg" alt="PCSS" className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 mix-blend-multiply" />
                  <img src="/edul.africa.png" alt="eduID.africa" className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
                  <img src="/BonafID-Logo.png" alt="BonafID" className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
                </div>
                
                {/* Duplicate set for seamless looping */}
                <div className="flex items-center justify-center gap-12 md:gap-24 flex-nowrap px-6 md:px-12">
                  <img src="/wacren.svg" alt="WACREN" className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
                  <img src="/africaconnect4.png" alt="AfricaConnect4" className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
                  <img src="/EU-logo.png" alt="EU" className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
                  
                  <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    <img src="/GEANT-icon.svg" alt="GEANT" className="h-10 md:h-14 w-auto object-contain" />
                    <img src="/GEANT-text.svg" alt="GEANT Text" className="h-5 md:h-7 w-auto object-contain" />
                  </div>
                  
                  <img src="/PCSS.jpg" alt="PCSS" className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 mix-blend-multiply" />
                  <img src="/edul.africa.png" alt="eduID.africa" className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
                  <img src="/BonafID-Logo.png" alt="BonafID" className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* ARCHITECTURE SECTION */}
        <section className="w-full bg-slate-50 py-20 md:py-32 px-4">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Graphic Placeholder */}
            <div className="w-full lg:w-1/2">
              <div className="w-full aspect-[4/3] bg-white border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <svg className="w-16 h-16 text-[#003B5C] mb-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest relative z-10">Architecture Diagram</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="text-sm font-bold tracking-wider uppercase text-[#F1921A] mb-4 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#F1921A]"></span>
                Decentralized Architecture
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E] mb-6">
                Separation of orchestration and media
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                The African eduMEET Federation is built on a distributed architecture that separates the central orchestration layer from the media nodes handling the actual video and audio traffic.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#003B5C] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#001D2E] mb-1">Central Orchestration</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">Managed centrally, this layer handles user authentication, room creation, and intelligent routing.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F1921A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#001D2E] mb-1">Distributed Media Nodes</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">Hosted locally by participating NRENs, keeping heavy video traffic within national borders for optimal latency.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* GOVERNANCE SECTION */}
        <section className="w-full bg-white py-20 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            
            <div className="mb-16 text-center flex flex-col items-center">
              <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                Governance
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E] mb-6">
                Roles & Responsibilities
              </h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                Clear governance ensures the stability and scalability of the federation across the continent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              
              {/* Role 1 */}
              <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-[#001D2E] mb-4">WACREN</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow">
                  Acts as the primary federation operator for the African continent, managing the core orchestration layer and shared media pool.
                </p>
                <div className="pt-6 border-t border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Responsibilities</span>
                  <ul className="space-y-2">
                    <li className="text-sm font-medium text-[#003B5C] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#003B5C] rounded-full"></span> Federation operation
                    </li>
                    <li className="text-sm font-medium text-[#003B5C] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#003B5C] rounded-full"></span> Policy enforcement
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 2 */}
              <div className="bg-[#003B5C] border border-[#003B5C] p-8 flex flex-col relative overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Local NRENs</h3>
                <p className="text-slate-300 font-medium leading-relaxed mb-6 flex-grow relative z-10">
                  Operate at the national level, providing access to their member institutions and optionally contributing local media nodes.
                </p>
                <div className="pt-6 border-t border-white/20 relative z-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Responsibilities</span>
                  <ul className="space-y-2">
                    <li className="text-sm font-medium text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#F1921A] rounded-full"></span> Member onboarding
                    </li>
                    <li className="text-sm font-medium text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#F1921A] rounded-full"></span> Tier 1 local support
                    </li>
                  </ul>
                </div>
              </div>

              {/* Role 3 */}
              <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-[#001D2E] mb-4">PCSS</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow">
                  The original eduMEET development team, providing underlying software development, updates, and high-level technical guidance.
                </p>
                <div className="pt-6 border-t border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Responsibilities</span>
                  <ul className="space-y-2">
                    <li className="text-sm font-medium text-[#003B5C] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#003B5C] rounded-full"></span> Core software updates
                    </li>
                    <li className="text-sm font-medium text-[#003B5C] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#003B5C] rounded-full"></span> Tier 3 technical support
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
