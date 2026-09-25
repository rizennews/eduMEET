"use client";

import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TechnicalOnboardingPage() {
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
                Federation onboarding
              </h1>
            </motion.div>
            {/* Action Buttons */}


          </div>
        </section>

        {/* WHAT THIS ONBOARDING COVERS SECTION */}
        <section className="w-full bg-white py-16 md:py-20 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            
            {/* Left Column: Header */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col md:pr-8">
              <div className="text-sm font-bold tracking-wider uppercase text-[#2A75C1] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Overview
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001D2E] leading-tight text-balance">
                What this onboarding covers
              </h2>
            </div>

            {/* Right Column: Content */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              <p>
                Requirements for infrastructure providers joining the African eduMEET Federation and using eduMEET common services. The federation is centrally managed by the eduMEET team at PCSS, while audio-video connections are optimised between distributed media nodes across the WACREN backbone and contributing NREN PoPs.
              </p>
              <p>
                Assignment to a node is based on geographical location and node load. If a node reaches maximum load, subsequent participants use a different node, and the system routes between nodes.
              </p>
              <div className="border border-slate-200 bg-white p-6 md:p-8 mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2A75C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wider uppercase text-[#001D2E] mb-2">Note for Subscribers</h4>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Service subscribers don't need local media-node infrastructure. The server, firewall and DNS requirements below apply to infrastructure contributors. Contact <a href="mailto:PMO@wacren.net" className="text-[#2A75C1] hover:underline font-bold">PMO@wacren.net</a> about subscriber onboarding.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SERVICE FOR INFRASTRUCTURE PROVIDERS SECTION */}
        <section className="w-full bg-slate-50 py-16 md:py-20 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            
            {/* Left Column: Header */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col md:pr-8">
              <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Benefits
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001D2E] leading-tight text-balance">
                Service for infrastructure providers
              </h2>
            </div>

            {/* Right Column: Content */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              <p>
                Providers receive a web conferencing service under their own domain, for example <code className="text-[#8E1B73] font-bold">edumeet.nren-ng.net</code>, integrated with an OpenID Connect identity provider (eduID.africa, BonafID or any eduGAIN-compatible IdP), plus an admin interface to manage users, permissions and rooms.
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <h4 className="text-xl font-bold text-[#001D2E]">Pilot Period Costs</h4>
                <p>
                  Cost during the pilot: <strong className="text-[#001D2E]">free for infrastructure providers.</strong> Afterwards, entitlement is based on contributed infrastructure. Long-term excess use is covered by additional contribution or an agreed excess fee.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ONBOARDING REQUIREMENTS SECTION */}
        <section className="w-full bg-white py-16 md:py-20 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#001D2E] mb-6">Deployment Checklist</h2>
              <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                Everything you need to set up your infrastructure for the African eduMEET Federation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">
              
              {/* Requirement 1: Server */}
              <div className="flex flex-col bg-white border border-slate-200 p-8 md:p-12 lg:p-16 h-full">
                <div className="w-12 h-12 rounded-full bg-[#003B5C]/10 flex items-center justify-center mb-8">
                  <span className="font-bold text-[#003B5C]">01</span>
                </div>
                <h3 className="text-2xl font-bold text-[#001D2E] mb-4">Server Sizing</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Size media nodes using this rule: <strong className="text-[#001D2E]">1 CPU core + 50 Mbps outgoing bandwidth per 10 participants</strong>. Install Ubuntu 24.04. OS and eduMEET software maintenance is handled by the eduMEET team at PCSS.
                </p>
                <div className="bg-slate-50 p-4 border border-slate-200 mb-6">
                  <ul className="text-sm font-medium text-slate-700 space-y-2">
                    <li className="flex justify-between border-b border-slate-200 pb-2"><span>Up to 16 cores</span> <span className="font-bold text-[#2A75C1]">1 Gbps, 8GB RAM</span></li>
                    <li className="flex justify-between border-b border-slate-200 py-2"><span>Up to 48 cores</span> <span className="font-bold text-[#2A75C1]">2.5 Gbps, 16GB RAM</span></li>
                    <li className="flex justify-between pt-2"><span>Up to 128 cores</span> <span className="font-bold text-[#2A75C1]">10 Gbps, 32GB RAM</span></li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <p className="text-sm font-bold text-[#001D2E] mb-2">Add this to root's trusted SSH keys:</p>
                  <code className="block bg-[#001D2E] text-[#4ADE80] p-3 text-xs font-mono break-all">
                    ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIK4OD1LfqRHzQe0rMsF7E6VlcF4nQV4HhBNeW4WT0Q0LCopy
                  </code>
                </div>
              </div>

              {/* Requirement 2: Firewall */}
              <div className="flex flex-col bg-white border border-slate-200 p-8 md:p-12 lg:p-16 h-full">
                <div className="w-12 h-12 rounded-full bg-[#8E1B73]/10 flex items-center justify-center mb-8">
                  <span className="font-bold text-[#8E1B73]">02</span>
                </div>
                <h3 className="text-2xl font-bold text-[#001D2E] mb-4">Firewall Config</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Configure your firewalls to allow incoming WebRTC and signaling traffic for optimal media relay and fallback connectivity.
                </p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#8E1B73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 font-medium"><strong className="text-[#001D2E]">TCP 443, 80:</strong> TURN over TLS, Let's Encrypt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#8E1B73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 font-medium"><strong className="text-[#001D2E]">TCP 22:</strong> SSH from 167.235.130.84</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#8E1B73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 font-medium"><strong className="text-[#001D2E]">TCP 3443:</strong> Management nodes (91.99.192.218, 91.99.222.184)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#8E1B73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 font-medium"><strong className="text-[#001D2E]">TCP/UDP 40000–40249:</strong> DTLS, SRTP/SRTCP media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#8E1B73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 font-medium"><strong className="text-[#001D2E]">UDP 50000–60000:</strong> Media TURN</span>
                  </li>
                </ul>
              </div>

              {/* Requirement 3: DNS */}
              <div className="flex flex-col md:col-span-2 bg-[#001D2E] border border-transparent p-8 md:p-12 lg:p-16">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-8">
                  <span className="font-bold text-white">03</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">DNS Setup</h3>
                <p className="text-white/80 font-medium leading-relaxed mb-6 max-w-3xl">
                  Add a CNAME record for the domain your users will use. The target points to the federation's management node.
                </p>
                <div>
                  <code className="block bg-[#003B5C] text-[#4ADE80] p-4 text-sm font-mono mb-4 border border-white/10 w-fit">
                    edumeet.nren-ng.net 300 IN CNAME rooms.edumeet.eu.
                  </code>
                  <p className="text-sm text-white/70">
                    Replace <code className="text-white font-bold">nren-ng.net</code> with your domain.
                  </p>
                </div>
              </div>

              {/* Requirement 4: Identity & SSO */}
              <div className="flex flex-col md:col-span-2 bg-[#003B5C] border border-[#003B5C] p-8 md:p-12 lg:p-16 relative overflow-hidden">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-8 border border-white/20 relative z-10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">SSO / OpenID Connect</h3>
                  <p className="text-lg text-white/80 font-medium leading-relaxed mb-6 max-w-3xl">
                    <span className="text-[#F1921A] font-bold">Optional but strongly recommended:</span> it enables institutional identity for room management and persistent rooms. Register a new application in your SSO service:
                  </p>
                  
                  <div className="overflow-x-auto mb-6 border border-white/10 bg-[#001D2E]/20">
                    <table className="w-full text-left text-white/90 text-sm md:text-base">
                      <thead className="bg-white/5 border-b border-white/10 text-white">
                        <tr>
                          <th className="px-6 py-4 font-bold">Parameter</th>
                          <th className="px-6 py-4 font-bold">Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 font-medium">
                        <tr>
                          <td className="px-6 py-4 font-mono text-sm text-[#4ADE80]">client_id</td>
                          <td className="px-6 py-4">edumeet, or another chosen name</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-mono text-sm text-[#4ADE80]">client_secret</td>
                          <td className="px-6 py-4">String of [a-z][A-Z][0-9], at least 32 characters</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-mono text-sm text-[#4ADE80]">redirect_uri</td>
                          <td className="px-6 py-4 break-all">https://admin.edumeet.eu/oauth/tenant/callback</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-mono text-sm text-[#4ADE80]">post_logout_redirect_uri</td>
                          <td className="px-6 py-4 break-all">https://admin.edumeet.eu/auth/logout-close</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="flex items-start gap-3 text-white/90 bg-white/5 p-5 border border-white/10 text-base leading-relaxed">
                    <svg className="w-6 h-6 text-[#4ADE80] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>
                      Send WACREN your <code className="text-[#4ADE80] font-mono bg-white/5 px-1.5 py-0.5">client_id</code>, <code className="text-[#4ADE80] font-mono bg-white/5 px-1.5 py-0.5">client_secret</code> and <code className="text-[#4ADE80] font-mono bg-white/5 px-1.5 py-0.5">discovery_url</code>. WACREN coordinates with the eduMEET team. Institutions on eduID.africa or BonafID already have OIDC-compatible metadata.
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="w-full bg-slate-50 py-24 px-4 border-t border-slate-200">
          <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
            <h2 className="text-3xl font-serif text-[#001D2E] mb-4">
              Contact WACREN
            </h2>
            <p className="text-base text-slate-600 mb-10 max-w-xl">
              For joining the federation as an infrastructure contributor, email <a href="mailto:PMO@wacren.net" className="text-[#F1921A] hover:underline transition-colors">PMO@wacren.net</a> or use the enquiry form.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link href="#" className="group inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all bg-[#F1921A] hover:bg-[#D97D12] w-full sm:w-auto border border-transparent rounded-none shadow-none">
                Open enquiry form
              </Link>
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
