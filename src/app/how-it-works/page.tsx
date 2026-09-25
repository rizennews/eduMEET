"use client";

import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
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
                How eduMEET works
              </h1>
            </motion.div>


          </div>
        </section>

        {/* WORKFLOW SECTION */}
        <section className="w-full bg-slate-50 py-20 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            <div className="text-center mb-16">
              <div className="text-sm font-bold tracking-wider uppercase text-[#F1921A] mb-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                What users see
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E] mb-6">From link to lecture in seconds</h2>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white border border-slate-200 divide-y md:divide-y-0 lg:divide-x divide-slate-200">
              
              {/* Step 1 */}
              <div className="flex flex-col p-8 lg:p-10">
                <div className="text-5xl font-bold text-[#003B5C]/20 mb-6 font-mono">01</div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-4">Open your university's link</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  For example <code className="bg-slate-100 text-[#8E1B73] px-2 py-1 rounded font-mono text-sm border border-slate-200">meet.youruniversity.edu.gh</code>.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col p-8 lg:p-10 lg:border-t-0 md:border-t border-slate-200">
                <div className="text-5xl font-bold text-[#F1921A]/20 mb-6 font-mono">02</div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-4">Sign in as usual</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Your university account, through eduID.africa or BonafID.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col p-8 lg:p-10 border-t lg:border-t-0 border-slate-200">
                <div className="text-5xl font-bold text-[#8E1B73]/20 mb-6 font-mono">03</div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-4">Get connected nearby</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  eduMEET picks the closest server with spare capacity.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col p-8 lg:p-10 border-t lg:border-t-0 border-slate-200">
                <div className="text-5xl font-bold text-[#2A75C1]/20 mb-6 font-mono">04</div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-4">Meet</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Share, chat and present. If a server fails, you stay connected.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* BEHIND THE SCENES SECTION */}
        <section className="w-full bg-white py-20 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            <div className="text-center mb-16">
              <div className="text-sm font-bold tracking-wider uppercase text-[#003B5C] mb-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Behind the scenes
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E] mb-6">Centrally managed, locally hosted</h2>
              <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto text-balance">
                A federation model that combines local service identity with shared orchestration and distributed media resources, seeded across the WACREN backbone.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 bg-white border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              {/* Pillar 1: Local Identity */}
              <div className="flex flex-col p-8 lg:p-12">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#8E1B73]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                </div>
                <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-2">Local identity</div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-4">Domain, tenant and SSO</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Users access the service through your domain and institutional identity (eduID.africa / BonafID).
                </p>
              </div>

              {/* Pillar 2: Shared Control */}
              <div className="flex flex-col p-8 lg:p-12">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#F1921A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
                <div className="text-sm font-bold tracking-wider uppercase text-[#F1921A] mb-2">Shared control</div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-4">Central orchestration</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  The federation coordinates service operation, routing and software management.
                </p>
              </div>

              {/* Pillar 3: Media Layer */}
              <div className="flex flex-col p-8 lg:p-12">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#2A75C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                </div>
                <div className="text-sm font-bold tracking-wider uppercase text-[#2A75C1] mb-2">Media layer</div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-4">Backbone media nodes</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Traffic uses available nodes across the WACREN backbone, by geography and load.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* DEEP DIVE SECTION */}
        <section className="w-full bg-slate-50 py-20 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            
            {/* Left Column: Header */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col md:pr-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001D2E] leading-tight text-balance">
                Local identity, shared infrastructure
              </h2>
            </div>

            {/* Right Column: Content */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              <p>
                The African eduMEET Federation separates infrastructure hosting from service orchestration. WACREN seeds the federation with media nodes across its 12-country backbone, and NRENs that join contribute additional server resources. The eduMEET team manages the software layer, installation, updates and federation-level operation.
              </p>
              <p>
                Service subscribers can use the federated infrastructure without operating their own media nodes. When users join a meeting, media traffic is assigned to an appropriate node based on geography and current load. If a node becomes unavailable or reaches capacity, the federation routes participants through other available nodes.
              </p>
            </div>

          </div>
        </section>

        {/* FEATURES GRID SECTION */}
        <section className="w-full bg-white py-20 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E]">
                What the federation provides
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
              
              {/* Feature 1 */}
              <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col hover:bg-slate-100 transition-colors">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#8E1B73]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-3">Distributed media nodes</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Capacity hosted by WACREN PoPs and participating NRENs, used as a shared pool.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col hover:bg-slate-100 transition-colors">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#2A75C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-3">Central orchestration</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  The eduMEET team at PCSS coordinates routing, software and federation operation.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col hover:bg-slate-100 transition-colors">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#F1921A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7l6-3 5.447 2.724A1 1 0 0121 7.618v10.764a1 1 0 01-1.447.894L15 17l-6 3z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-3">Geographic and load-aware routing</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Traffic goes to the nearest node with spare capacity, keeping latency low.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col hover:bg-slate-100 transition-colors">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#003B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-3">Failover</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Traffic is rerouted if a node is unavailable, without interrupting meetings.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col hover:bg-slate-100 transition-colors">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#8E1B73]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-3">Tenant and domain</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Each NREN or institution runs a dedicated tenant under its own domain and brand.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col hover:bg-slate-100 transition-colors">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#F1921A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-3">SSO via eduID.africa</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  OpenID Connect, including eduGAIN-based, eduID.africa and BonafID identity providers.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ROADMAP SECTION */}
        <section className="w-full bg-slate-50 py-20 md:py-32 border-t border-slate-200">
          
          <div className="w-full text-center flex flex-col items-center mb-16 px-4">
            <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-4 flex items-center gap-2 justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              Roadmap
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E] mb-8 text-balance">
              Towards autonomous African infrastructure
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium w-full max-w-[1400px] leading-relaxed text-center">
              The federation launches on shared management infrastructure operated by the eduMEET team at PCSS, the same infrastructure behind the European federation. WACREN holds full administrative control over African tenants, domains and user management from day one. The roadmap moves to an African-hosted management node, making the orchestration layer, management node and all tenant data African-hosted under WACREN's control.
            </p>
          </div>

          <div className="max-w-[1200px] mx-auto flex flex-col px-4">

            {/* Phases Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              
              {/* Phase 1 */}
              <div className="bg-white border border-slate-200 p-8 md:p-12">
                <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-2">Phase 1</div>
                <h3 className="text-3xl font-bold text-[#001D2E] mb-8">Pilot</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#8E1B73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 font-medium">PCSS manages orchestration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#8E1B73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 font-medium">WACREN manages African tenants and NRENs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#8E1B73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 font-medium">Media nodes on the WACREN backbone</span>
                  </li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="bg-[#003B5C] border border-transparent p-8 md:p-12">
                <div className="text-sm font-bold tracking-wider uppercase text-[#F1921A] mb-2">Phase 2</div>
                <h3 className="text-3xl font-bold text-white mb-8">Autonomous</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#F1921A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white font-medium">WACREN operates its own management node in Africa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#F1921A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white font-medium">Full operational independence from the European federation</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* MOU Provision */}
            <div className="w-full max-w-3xl flex items-start gap-3 mt-4">
              <svg className="w-5 h-5 text-[#003B5C] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed">
                <strong className="text-[#001D2E]">MOU provision:</strong> The WACREN–PCSS MOU will cover migration to self-managed orchestration: configuration handover, data portability and operational transition.
              </p>
            </div>

          </div>
        </section>

        {/* FINAL CTA & AUDIENCE SECTION */}
        <section className="w-full bg-[#003B5C] py-24 md:py-32 px-4">
          <div className="max-w-[1000px] mx-auto flex flex-col items-center">
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center text-balance">
              Designed for the African R&E community
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full max-w-3xl mb-16">
              {[
                "National Research and Education Networks",
                "Universities and research institutions",
                "Regional organisations and consortia",
                "Public-sector and government bodies",
                "Healthcare and telemedicine programmes",
                "Cross-border collaboration projects"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-white/90 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#" className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#003B5C] transition-all bg-white rounded-xl hover:bg-slate-100 gap-2 w-full sm:w-auto">
                Contribute infrastructure
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a href="#" className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-transparent border-2 border-white/20 rounded-xl hover:bg-white/10 gap-2 w-full sm:w-auto">
                View technical requirements
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>

          </div>
        </section>

      </main>
    </PageTransition>
  );
}
