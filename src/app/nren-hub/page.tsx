"use client";

import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";

export default function NrenHubPage() {
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
                The hub for NRENs
              </h1>
            </motion.div>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl xl:text-2xl text-white/80 max-w-3xl text-balance leading-relaxed font-medium"
            >
              Overview and ways to join the African eduMEET Federation.
            </motion.p>

          </div>
        </section>

        {/* WAYS TO JOIN SECTION */}
        <section className="w-full bg-slate-50 py-20 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            
            <div className="mb-16 text-center flex flex-col items-center">
              <div className="text-sm font-bold tracking-wider uppercase text-[#F1921A] mb-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Participation
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E] mb-6">
                Ways to join the federation
              </h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                Whether you want to contribute capacity or simply subscribe to the service, there is a model that fits your NREN's resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              
              {/* Option 1 */}
              <div className="bg-white border border-slate-200 p-8 flex flex-col hover:bg-slate-100 transition-colors">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#003B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#001D2E] mb-4">Contribute Capacity</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  Host media nodes within your own network. Improve latency for your local institutions while strengthening the entire federation.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#8E1B73] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm font-medium text-slate-700">Requires dedicated hardware</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#8E1B73] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm font-medium text-slate-700">Lowest local latency</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-slate-100 text-[#001D2E] font-bold border border-slate-200 hover:bg-slate-200 transition-colors">
                  View requirements
                </button>
              </div>

              {/* Option 2 */}
              <div className="bg-[#003B5C] border border-[#003B5C] p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#F1921A] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Recommended</div>
                <div className="mb-6 relative z-10">
                  <svg className="w-8 h-8 text-[#F1921A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Shared Pool</h3>
                <p className="text-slate-300 font-medium leading-relaxed mb-8 flex-grow relative z-10">
                  Subscribe to the service using the shared media nodes hosted by WACREN and other contributing NRENs across the continent.
                </p>
                <ul className="space-y-3 mb-8 relative z-10">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#F1921A] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm font-medium text-slate-200">Zero hardware required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#F1921A] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm font-medium text-slate-200">Immediate deployment</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-[#F1921A] text-white font-bold hover:bg-[#D97D12] transition-colors relative z-10">
                  Start pilot
                </button>
              </div>

              {/* Option 3 */}
              <div className="bg-white border border-slate-200 p-8 flex flex-col hover:bg-slate-100 transition-colors">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#2A75C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7l6-3 5.447 2.724A1 1 0 0121 7.618v10.764a1 1 0 01-1.447.894L15 17l-6 3z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#001D2E] mb-4">Autonomous</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                  Run a fully independent eduMEET deployment for your country, managing your own orchestration layer and media nodes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#8E1B73] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm font-medium text-slate-700">Full operational control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#8E1B73] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm font-medium text-slate-700">Highest resource requirement</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-slate-100 text-[#001D2E] font-bold border border-slate-200 hover:bg-slate-200 transition-colors">
                  Read documentation
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* TECHNICAL ONBOARDING GRID */}
        <section className="w-full bg-white py-20 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            
            <div className="mb-16">
              <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                Implementation
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E]">
                Technical Onboarding
              </h2>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white border border-slate-200 divide-y md:divide-y-0 lg:divide-x divide-slate-200">
              
              {/* Step 1 */}
              <div className="flex flex-col p-8 lg:p-10">
                <div className="text-5xl font-bold text-[#003B5C]/20 mb-6 font-mono">01</div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-4">SSO Integration</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Connect your identity provider. We support eduID.africa, BonafID, and standard SAML/OIDC.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col p-8 lg:p-10 lg:border-t-0 md:border-t border-slate-200">
                <div className="text-5xl font-bold text-[#F1921A]/20 mb-6 font-mono">02</div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-4">Domain Setup</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Configure DNS records to run the service under your own institutional domain name.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col p-8 lg:p-10 border-t lg:border-t-0 border-slate-200">
                <div className="text-5xl font-bold text-[#8E1B73]/20 mb-6 font-mono">03</div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-4">Firewall Rules</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Open necessary UDP ports for WebRTC traffic and secure API endpoints.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col p-8 lg:p-10 border-t lg:border-t-0 border-slate-200">
                <div className="text-5xl font-bold text-[#2A75C1]/20 mb-6 font-mono">04</div>
                <h3 className="text-xl font-bold text-[#001D2E] mb-4">Node Deployment</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  (Optional) Deploy the Docker containers on your local servers to contribute capacity.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>
    </PageTransition>
  );
}
