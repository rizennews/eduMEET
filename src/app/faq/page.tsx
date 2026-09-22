"use client";

import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function FAQPage() {
  // Using eduMEET FAQs
  const usingFaqs = [
    {
      question: "What is eduMEET Africa?",
      answer: "The African eduMEET Federation is a distributed infrastructure model providing sovereign, secure, and privacy-respecting video collaboration for NRENs and institutions across Africa."
    },
    {
      question: "Do I need to install anything?",
      answer: "No. eduMEET runs entirely within your web browser. There are no client applications or plugins to download, install, or update."
    },
    {
      question: "How many people can join a meeting?",
      answer: "Meeting capacity depends on the infrastructure supporting your specific instance, but the federated model allows for robust scaling across distributed media nodes."
    },
    {
      question: "Do I pay to use it?",
      answer: "For end users like students, lecturers, and researchers, the service is generally provided free of charge by your home institution or NREN."
    },
    {
      question: "What happens if a server goes down during my class?",
      answer: "The federation routes traffic dynamically. If a node fails or reaches maximum load, subsequent participants (or re-connections) are seamlessly routed to a different node in the pool."
    }
  ];

  // For Universities FAQs
  const uniFaqs = [
    {
      question: "Who is this for?",
      answer: "eduMEET Africa is built for higher education and research institutions that need privacy, control, resilience, and scale without depending on commercial video platforms."
    },
    {
      question: "How does our university get access?",
      answer: "Universities can gain access either by subscribing to the service through their local NREN or by becoming an infrastructure contributor and providing their own server capacity to the pool."
    },
    {
      question: "Can we use our own domain?",
      answer: "Yes. Participating institutions receive the web conferencing service under their own domain (e.g., edumeet.your-university.edu.ng)."
    },
    {
      question: "Can we customise the branding?",
      answer: "Yes. You maintain your own identity integration and institutional branding on your dedicated eduMEET instance."
    },
    {
      question: "Can eduMEET integrate with our institutional login?",
      answer: "Yes, eduMEET integrates with OpenID Connect identity providers (eduID.africa, BonafID, or any eduGAIN-compatible IdP), enabling institutional identity for room management."
    }
  ];

  // For NRENs FAQs
  const nrenFaqs = [
    {
      question: "How does it relate to the European eduMEET Federation?",
      answer: "The African eduMEET Federation is built on the same core open-source software and architecture, but operates its own sovereign infrastructure and routing dedicated to the African research and education community."
    },
    {
      question: "What is WACREN's role?",
      answer: "WACREN seeds the federation with media nodes across its backbone, coordinates onboarding, and works with the core team to manage the central infrastructure."
    },
    {
      question: "Do we need to provide our own infrastructure?",
      answer: "Not necessarily. NRENs can join as 'Service Subscribers' using shared capacity, or as 'Infrastructure Contributors' providing media-node capacity to the shared pool in exchange for slots."
    },
    {
      question: "What is a concurrent slot?",
      answer: "A concurrent slot represents one user connection. Contributions to the infrastructure pool are converted into an entitlement of concurrent slots that you can allocate across your institutions."
    },
    {
      question: "Can we combine contribution and subscription?",
      answer: "Yes. NRENs can contribute infrastructure for a baseline of slots, and subscribe to additional slots to handle excess peak usage."
    },
    {
      question: "How do we start?",
      answer: "Contact WACREN's PMO team. We provide a Technical Onboarding guide, an NREN outreach kit, and direct support to get you connected."
    }
  ];

  // Technical FAQs
  const techFaqs = [
    {
      question: "Who maintains the software?",
      answer: "OS and eduMEET software maintenance on media nodes is handled centrally by the core eduMEET team at PCSS, minimizing the administrative burden on your IT staff."
    },
    {
      question: "Is eduMEET open source?",
      answer: "Yes. eduMEET is entirely open-source, developed by and for the global research and education community."
    },
    {
      question: "Is the federation fully sovereign from day one?",
      answer: "Yes. From day one, all media nodes and management infrastructure are hosted within the community's own networks, ensuring complete data sovereignty and privacy."
    }
  ];

  const [openSection, setOpenSection] = useState<string>("using");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (section: string, index: number) => {
    if (openSection !== section) {
      setOpenSection(section);
      setOpenIndex(index);
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen overflow-x-hidden w-full bg-white">
        
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center bg-[#003B5C] pt-32 pb-20 w-full text-center overflow-hidden">
          <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter text-white">
                Frequently asked questions
              </h1>
            </motion.div>
          </div>
        </section>

        {/* FAQ SECTIONS */}
        <section className="w-full py-16 md:py-24 px-4">
          <div className="max-w-[800px] mx-auto flex flex-col gap-16">
            
            {/* USING EDUMEET */}
            <div id="using" className="w-full flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#001D2E] mb-2">Using eduMEET</h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">Students, lecturers, researchers</p>
              </div>
              <div className="flex flex-col border-t border-slate-200">
                {usingFaqs.map((faq, index) => (
                  <div key={`using-${index}`} className="border-b border-slate-200 group">
                    <button 
                      onClick={() => toggleFAQ('using', index)}
                      className="w-full text-left py-5 flex items-start gap-4 hover:opacity-70 transition-opacity focus:outline-none"
                    >
                      <svg className={`w-3 h-3 text-[#F1921A] mt-1.5 flex-shrink-0 transition-transform duration-300 ${openSection === 'using' && openIndex === index ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                      <h3 className="text-sm md:text-base font-bold text-[#001D2E] pr-8">{faq.question}</h3>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'using' && openIndex === index ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                      <div className="text-sm md:text-base text-slate-600 leading-relaxed pl-7 pr-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FOR UNIVERSITIES */}
            <div id="universities" className="w-full flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#001D2E] mb-2">For universities</h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">Leaders, IT directors</p>
              </div>
              <div className="flex flex-col border-t border-slate-200">
                {uniFaqs.map((faq, index) => (
                  <div key={`uni-${index}`} className="border-b border-slate-200 group">
                    <button 
                      onClick={() => toggleFAQ('universities', index)}
                      className="w-full text-left py-5 flex items-start gap-4 hover:opacity-70 transition-opacity focus:outline-none"
                    >
                      <svg className={`w-3 h-3 text-[#F1921A] mt-1.5 flex-shrink-0 transition-transform duration-300 ${openSection === 'universities' && openIndex === index ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                      <h3 className="text-sm md:text-base font-bold text-[#001D2E] pr-8">{faq.question}</h3>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'universities' && openIndex === index ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                      <div className="text-sm md:text-base text-slate-600 leading-relaxed pl-7 pr-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FOR NRENS */}
            <div id="nrens" className="w-full flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#001D2E]">For NRENs</h2>
              </div>
              <div className="flex flex-col border-t border-slate-200">
                {nrenFaqs.map((faq, index) => (
                  <div key={`nren-${index}`} className="border-b border-slate-200 group">
                    <button 
                      onClick={() => toggleFAQ('nrens', index)}
                      className="w-full text-left py-5 flex items-start gap-4 hover:opacity-70 transition-opacity focus:outline-none"
                    >
                      <svg className={`w-3 h-3 text-[#F1921A] mt-1.5 flex-shrink-0 transition-transform duration-300 ${openSection === 'nrens' && openIndex === index ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7-7" /></svg>
                      <h3 className="text-sm md:text-base font-bold text-[#001D2E] pr-8">{faq.question}</h3>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'nrens' && openIndex === index ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                      <div className="text-sm md:text-base text-slate-600 leading-relaxed pl-7 pr-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNICAL */}
            <div id="technical" className="w-full flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#001D2E]">Technical</h2>
              </div>
              <div className="flex flex-col border-t border-slate-200">
                {techFaqs.map((faq, index) => (
                  <div key={`tech-${index}`} className="border-b border-slate-200 group">
                    <button 
                      onClick={() => toggleFAQ('technical', index)}
                      className="w-full text-left py-5 flex items-start gap-4 hover:opacity-70 transition-opacity focus:outline-none"
                    >
                      <svg className={`w-3 h-3 text-[#F1921A] mt-1.5 flex-shrink-0 transition-transform duration-300 ${openSection === 'technical' && openIndex === index ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7-7" /></svg>
                      <h3 className="text-sm md:text-base font-bold text-[#001D2E] pr-8">{faq.question}</h3>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'technical' && openIndex === index ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                      <div className="text-sm md:text-base text-slate-600 leading-relaxed pl-7 pr-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="w-full bg-slate-50 py-24 px-4 border-t border-slate-200">
          <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
            <h2 className="text-3xl font-serif text-[#001D2E] mb-4">
              Still have questions?
            </h2>
            <p className="text-base text-slate-600 mb-10 max-w-xl">
              Tell us about your organisation and what you're considering. We'll find the right path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link href="#" className="group inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all bg-[#F1921A] hover:bg-[#D97D12] w-full sm:w-auto border border-transparent rounded-none shadow-none">
                Contact WACREN
              </Link>
              <Link href="/technical-onboarding" className="group inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[#001D2E] transition-all bg-white hover:bg-slate-50 w-full sm:w-auto border border-slate-300 rounded-none shadow-none">
                Technical onboarding
              </Link>
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
