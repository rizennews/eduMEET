"use client";

import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";

export default function NRENsPage() {
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
                Sovereign video infrastructure
              </h1>
            </motion.div>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl xl:text-2xl text-white/80 max-w-3xl text-balance leading-relaxed font-medium"
            >
              Contribute media-node capacity to a shared, federated network, and run your own branded, privacy-respecting video service under your own domain.
            </motion.p>

          </div>
        </section>

        {/* EXPLANATORY SECTION */}
        <section className="w-full bg-white py-16 md:py-20 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            
            {/* Left Column: Header */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col md:pr-8">
              <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                The Federation Model
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001D2E] leading-tight text-balance">
                Trusted video collaboration across Africa
              </h2>
            </div>

            {/* Right Column: Content */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              <p>
                The African eduMEET Federation is a distributed infrastructure model for NRENs and institutions that need privacy, control, resilience and scale, without dependence on commercial video platforms.
              </p>
              <p>
                WACREN seeds the federation with media nodes across its 12-country backbone. NRENs contribute server capacity to grow the shared pool, and in return operate their own service on a wider pool of shared media resources, keeping their own domain, identity integration and branding.
              </p>
            </div>

          </div>
        </section>

        {/* WACREN SEEDING STATS SECTION */}
        <section className="w-full bg-white py-16 md:py-24 px-4 border-t border-slate-200">
          <div className="max-w-[1000px] mx-auto flex flex-col items-center">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001D2E] mb-6 text-balance">
                WACREN is seeding the federation across West and Central Africa
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto text-balance">
                The service starts with coverage from day one, using servers already installed on WACREN's regional network.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 bg-white border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center p-8 md:p-12">
                <div className="text-6xl lg:text-7xl font-bold text-[#8E1B73] mb-4">12</div>
                <div className="text-lg font-bold text-[#001D2E] mb-2">countries</div>
                <div className="text-sm font-medium text-slate-500">with backbone servers ready to carry meetings</div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center p-8 md:p-12">
                <div className="text-6xl lg:text-7xl font-bold text-[#F1921A] mb-4">AC4</div>
                <div className="text-lg font-bold text-[#001D2E] mb-2">AfricaConnect4</div>
                <div className="text-sm font-medium text-slate-500">EU co-funded programme, 2025 to 2029</div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center p-8 md:p-12">
                <div className="text-6xl lg:text-7xl font-bold text-[#2A75C1] mb-4 tracking-tight">Day 1</div>
                <div className="text-lg font-bold text-[#001D2E] mb-2">coverage</div>
                <div className="text-sm font-medium text-slate-500">no waiting period for regional reach</div>
              </div>

            </div>

          </div>
        </section>

        {/* TWO WAYS TO JOIN SECTION */}
        <section className="w-full bg-slate-50 py-16 md:py-20 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E] mb-6">Two ways to join</h2>
              <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                Select the path that best fits your institution's technical resources and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">
              
              {/* Option 1: Infrastructure Contributor */}
              <div className="flex flex-col bg-white border border-slate-200 p-8 md:p-12 lg:p-16 h-full">
                <div className="w-12 h-12 rounded-full bg-[#003B5C]/10 flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-[#003B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#001D2E] mb-4">Infrastructure contributor</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  Provide media-node capacity to the shared pool. Receive concurrent-slot entitlement and run your own branded service, at no cash cost for the capacity you contribute.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#2A75C1] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 font-medium">Free during the pilot period</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#2A75C1] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 font-medium">eduMEET team installs and manages software</span>
                  </li>
                </ul>
              </div>

              {/* Option 2: Service Subscriber */}
              <div className="flex flex-col bg-[#001D2E] border border-transparent p-8 md:p-12 lg:p-16 h-full">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-[#F1921A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Service subscriber</h3>
                <p className="text-white/80 font-medium leading-relaxed mb-8 flex-grow">
                  Use shared capacity built by WACREN and contributing NRENs, under your own domain and identity integration. No local media nodes needed.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#F1921A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white font-medium">Priced by peak concurrent use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#F1921A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white font-medium">Contribute infrastructure later if you choose</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom CTA */}
            <div className="flex flex-col items-center">
              <a href="#" className="group inline-flex items-center justify-between px-8 py-5 text-sm md:text-base font-bold text-white transition-all bg-[#003B5C] rounded-none shadow-none border border-transparent hover:bg-[#002840] w-full sm:w-auto">
                Compare participation options
                <svg className="w-5 h-5 ml-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>

          </div>
        </section>

        {/* RESOURCES GRID: EVERYTHING YOU NEED */}
        <section className="w-full bg-white py-20 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E] mb-16 text-center">Everything you need</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 w-full bg-white border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              {/* Resource 1 */}
              <div className="flex flex-col p-8 lg:p-12">
                <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  Architecture
                </div>
                <h3 className="text-2xl font-bold text-[#001D2E] mb-4">Federation model</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  Centrally managed, locally hosted. Architecture, routing, governance and roadmap.
                </p>
                <a href="#" className="group inline-flex items-center justify-between px-6 py-4 text-sm font-bold text-[#001D2E] transition-all bg-white border border-slate-200 rounded-none shadow-none hover:bg-slate-50 hover:border-slate-300 w-full mt-auto">
                  Read the model
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>

              {/* Resource 2 */}
              <div className="flex flex-col p-8 lg:p-12">
                <div className="text-sm font-bold tracking-wider uppercase text-[#F1921A] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Requirements
                </div>
                <h3 className="text-2xl font-bold text-[#001D2E] mb-4">Participation</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  Core-to-slot conversion, room categories, subscriber model and contributor checklist.
                </p>
                <a href="#" className="group inline-flex items-center justify-between px-6 py-4 text-sm font-bold text-[#001D2E] transition-all bg-white border border-slate-200 rounded-none shadow-none hover:bg-slate-50 hover:border-slate-300 w-full mt-auto">
                  See options
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>

              {/* Resource 3 */}
              <div className="flex flex-col p-8 lg:p-12">
                <div className="text-sm font-bold tracking-wider uppercase text-[#2A75C1] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  Setup
                </div>
                <h3 className="text-2xl font-bold text-[#001D2E] mb-4">Technical onboarding</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  Server sizing, firewall rules, DNS and SSO/OIDC configuration.
                </p>
                <a href="#" className="group inline-flex items-center justify-between px-6 py-4 text-sm font-bold text-white transition-all bg-[#003B5C] border border-transparent rounded-none shadow-none hover:bg-[#002840] w-full mt-auto">
                  View requirements
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* FINAL CTA: OUTREACH KIT */}
        <section className="w-full bg-[#003B5C] py-24 md:py-32 px-4">
          <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-balance">
              Help your members adopt it
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium mb-12 text-balance">
              Ready-made materials to introduce eduMEET to universities in your country: a leadership brief, a slide deck, posters and email templates you can brand as your own.
            </p>
            
            <a href="#" className="group inline-flex items-center justify-center px-8 py-5 text-base md:text-lg font-bold text-[#003B5C] transition-all bg-white rounded-none shadow-none border border-slate-300 hover:bg-slate-100 gap-3 w-full sm:w-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download the NREN outreach kit
            </a>

          </div>
        </section>

      </main>
    </PageTransition>
  );
}
