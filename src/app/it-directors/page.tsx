"use client";

import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";

export default function ITDirectorsPage() {
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
                Seamless integration and control
              </h1>
            </motion.div>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl xl:text-2xl text-white/80 max-w-3xl text-balance leading-relaxed font-medium"
            >
              For IT directors managing identity, institutional domains, and technical support.
            </motion.p>

          </div>
        </section>

        {/* WHAT IT TAKES & IT CHECKLIST SECTION */}
        <section className="w-full bg-white py-16 md:py-24 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x divide-slate-200 lg:border border-slate-200">
            
            {/* Left Column: What it takes */}
            <div className="flex flex-col justify-center p-6 md:p-10 lg:p-16">
              <div className="text-sm font-bold tracking-wider uppercase text-[#F1921A] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                Infrastructure
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001D2E] mb-6 leading-tight">
                What it takes on your side
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-6">
                If your NREN subscribes, you run no media servers. Software installation, updates and federation operations are handled by the eduMEET team at PCSS, with WACREN managing African tenants.
              </p>
            </div>

            {/* Right Column: IT Checklist */}
            <div className="flex flex-col bg-slate-50 p-6 md:p-10 lg:p-16 border-t border-slate-200 lg:border-t-0">
              <h3 className="text-2xl font-bold text-[#001D2E] mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 text-[#2A75C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                Your IT checklist
              </h3>
              
              <div className="flex flex-col gap-6">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2A75C1] text-white flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Choose a web address, for example <code className="bg-slate-200 text-[#001D2E] px-1.5 py-0.5 rounded text-sm font-mono mx-1">meet.youruniversity.edu.gh</code>, and add a DNS record.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2A75C1] text-white flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Register eduMEET as an application in your single sign-on (OpenID Connect).
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2A75C1] text-white flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Send your logo and branding assets.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2A75C1] text-white flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Set up admins, permissions and rooms in the admin interface.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* TECHNICAL FEATURES SECTION */}
        <section className="w-full bg-[#001D2E] py-24 md:py-32 px-4 border-t border-slate-800">
          <div className="max-w-[1200px] mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 lg:border border-white/10">
              
              {/* Feature 1 */}
              <div className="flex flex-col pt-8 md:pt-0 md:p-8 lg:p-10">
                <div className="mb-6">
                  {/* Lock Icon */}
                  <svg className="w-8 h-8 text-[#F1921A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">SSO via OIDC</h3>
                <p className="text-white/60 font-medium leading-relaxed">
                  eduID.africa, BonafID and eduGAIN-based identity providers.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col pt-8 md:pt-0 md:p-8 lg:p-10">
                <div className="mb-6">
                  {/* Globe Icon */}
                  <svg className="w-8 h-8 text-[#8E1B73]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Your domain</h3>
                <p className="text-white/60 font-medium leading-relaxed">
                  A dedicated tenant with your branding.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col pt-8 md:pt-0 md:p-8 lg:p-10">
                <div className="mb-6">
                  {/* Sliders Icon */}
                  <svg className="w-8 h-8 text-[#2A75C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Admin interface</h3>
                <p className="text-white/60 font-medium leading-relaxed">
                  Manage users, permissions and rooms.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col pt-8 md:pt-0 md:p-8 lg:p-10">
                <div className="mb-6">
                  {/* Server Stack Icon */}
                  <svg className="w-8 h-8 text-[#4F46E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Failover</h3>
                <p className="text-white/60 font-medium leading-relaxed">
                  Load- and location-aware routing across nodes.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* BOTTOM SECTIONS: CAPACITY & DEEPER DIVE */}
        <section className="w-full bg-slate-50 py-16 md:py-24 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 lg:border lg:border-slate-200 lg:divide-x divide-slate-200 bg-white">
            
            {/* How capacity is counted (with Table) */}
            <div className="p-8 md:p-12 xl:p-16 flex flex-col justify-center border-b lg:border-b-0 border-slate-200">
              <div className="text-sm font-bold tracking-wider uppercase text-[#003B5C] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Metrics
              </div>
              <h2 className="text-3xl font-bold text-[#001D2E] mb-6">How capacity is counted</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                Rooms are sized automatically by how many people are in them. Capacity is measured in concurrent slots: sessions of each size running at the same moment.
              </p>
              
              <div className="w-full overflow-x-auto border border-slate-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-4 text-sm font-bold text-[#001D2E] uppercase tracking-wider">Room type</th>
                      <th className="p-4 text-sm font-bold text-[#001D2E] uppercase tracking-wider">Participants</th>
                      <th className="p-4 text-sm font-bold text-[#001D2E] uppercase tracking-wider">Typical use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 font-bold text-[#003B5C]">Meeting</td>
                      <td className="p-4 font-mono text-sm text-slate-500">1 to 100</td>
                      <td className="p-4 text-sm font-medium text-slate-600">Tutorials, team meetings</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 font-bold text-[#8E1B73]">Lecture</td>
                      <td className="p-4 font-mono text-sm text-slate-500">101 to 300</td>
                      <td className="p-4 text-sm font-medium text-slate-600">Lectures, seminars</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 font-bold text-[#F1921A]">Webinar</td>
                      <td className="p-4 font-mono text-sm text-slate-500">301 to 1,000</td>
                      <td className="p-4 text-sm font-medium text-slate-600">Conferences, town halls</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA: Going deeper */}
            <div className="p-8 md:p-12 xl:p-16 flex flex-col justify-center">
              <div className="text-sm font-bold tracking-wider uppercase text-[#F1921A] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Next Steps
              </div>
              <h2 className="text-3xl font-bold text-[#001D2E] mb-6">
                Going deeper
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">
                Architecture, server sizing, firewall rules and SSO parameters are on the technical pages your NREN uses.
              </p>
              
              <div className="flex flex-col gap-4 mt-auto">
                <a href="#" className="group inline-flex items-center justify-between px-6 py-5 text-sm md:text-base font-bold text-white transition-all bg-[#003B5C] rounded-xl hover:bg-[#002840] w-full border border-transparent">
                  Technical onboarding
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <a href="#" className="group inline-flex items-center justify-between px-6 py-5 text-sm md:text-base font-bold text-[#001D2E] transition-all bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 w-full">
                  Federation model
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>
    </PageTransition>
  );
}
