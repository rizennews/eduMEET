"use client";

import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { motion, AnimatePresence } from "framer-motion";

export default function StudentsLecturersPage() {
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
                Teach, learn and meet from any browser
              </h1>
            </motion.div>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl xl:text-2xl text-white/80 max-w-3xl text-balance leading-relaxed font-medium"
            >
              Lectures, tutorials and office hours on a service your university runs, signed in with the account you already use.
            </motion.p>

          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="w-full bg-[#f8fafc] py-24 md:py-32 px-4 border-t border-black/5">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            {/* Header */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#001D2E]">
                What you can use it for
              </h2>
            </div>

            {/* Architectural Grid Box */}
            <div className="w-full bg-white border-l border-t border-slate-200 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                
                {/* Item 1 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200 h-full">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#2A75C1] mb-3">Up to 300 people</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4">Lectures</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Share slides, take questions in chat and record the session for students who couldn&apos;t attend.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200 h-full">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#F1921A] mb-3">Up to 100 people</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4">Tutorials and seminars</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Use breakout rooms for small-group work, then bring everyone back together.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200 h-full">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#8E1B73] mb-3">One to one or small groups</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4">Office hours and supervision</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Keep a permanent room link that students can bookmark.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200 h-full">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#003B5C] mb-3">Any size</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4">Group projects</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Meet your project group without anyone paying for a subscription.
                  </p>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col p-8 md:p-10 border-r border-b border-slate-200 h-full lg:col-span-2 xl:col-span-1">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#2A75C1] mb-3">Examiners anywhere</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4">Thesis defences and vivas</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Invite external examiners from other universities with a single link.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* JOINING VS HOSTING SECTION */}
        <section className="w-full bg-white py-16 md:py-20 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            
            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border border-slate-200 bg-white">
              
              {/* Left Column: Joining */}
              <div className="flex flex-col">
                <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-200 flex flex-col justify-center">
                  <div className="text-sm font-bold tracking-wider uppercase text-[#F1921A] mb-2">For students and guests</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#001D2E]">Joining a class</h3>
                </div>
                
                {/* Step 1 */}
                <div className="p-6 md:p-8 border-b border-slate-200 relative">
                  <div className="absolute top-4 md:top-6 left-6 md:left-8 text-7xl font-bold text-slate-50 pointer-events-none -z-0">1</div>
                  <div className="relative z-10 pl-14 md:pl-16">
                    <h4 className="text-lg font-bold text-[#001D2E] mb-2">Open the link</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Click the meeting link your lecturer shared by email, on the LMS or in a group chat.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="p-6 md:p-8 border-b border-slate-200 relative">
                  <div className="absolute top-4 md:top-6 left-6 md:left-8 text-7xl font-bold text-slate-50 pointer-events-none -z-0">2</div>
                  <div className="relative z-10 pl-14 md:pl-16">
                    <h4 className="text-lg font-bold text-[#001D2E] mb-2">Check your camera and mic</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Your browser will ask for permission. You can join with the camera off.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="p-6 md:p-8 relative h-full">
                  <div className="absolute top-4 md:top-6 left-6 md:left-8 text-7xl font-bold text-slate-50 pointer-events-none -z-0">3</div>
                  <div className="relative z-10 pl-14 md:pl-16">
                    <h4 className="text-lg font-bold text-[#001D2E] mb-2">Join the room</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">If the host uses a waiting room, you&apos;ll be let in shortly.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hosting */}
              <div className="flex flex-col">
                <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-200 flex flex-col justify-center">
                  <div className="text-sm font-bold tracking-wider uppercase text-[#2A75C1] mb-2">For lecturers and TAs</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#001D2E]">Hosting a class</h3>
                </div>
                
                {/* Step 1 */}
                <div className="p-6 md:p-8 border-b border-slate-200 relative">
                  <div className="absolute top-4 md:top-6 left-6 md:left-8 text-7xl font-bold text-slate-50 pointer-events-none -z-0">1</div>
                  <div className="relative z-10 pl-14 md:pl-16">
                    <h4 className="text-lg font-bold text-[#001D2E] mb-2">Sign in with your account</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Go to your university&apos;s eduMEET address and log in.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="p-6 md:p-8 border-b border-slate-200 relative">
                  <div className="absolute top-4 md:top-6 left-6 md:left-8 text-7xl font-bold text-slate-50 pointer-events-none -z-0">2</div>
                  <div className="relative z-10 pl-14 md:pl-16">
                    <h4 className="text-lg font-bold text-[#001D2E] mb-2">Create a room</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Give it a name like &quot;biochem-201&quot;. Signed-in hosts can keep rooms for the whole semester.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="p-6 md:p-8 relative h-full">
                  <div className="absolute top-4 md:top-6 left-6 md:left-8 text-7xl font-bold text-slate-50 pointer-events-none -z-0">3</div>
                  <div className="relative z-10 pl-14 md:pl-16">
                    <h4 className="text-lg font-bold text-[#001D2E] mb-2">Share the link</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Post it once on your course page. Students use the same link every week.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="w-full bg-white py-24 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Left: Title & Intro */}
            <div className="lg:col-span-5 flex flex-col items-start lg:pr-12">
              <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001D2E] mb-6 text-balance">
                Student and lecturer questions
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                Have a question that needs a human to answer? No problem.
              </p>
              <a href="#" className="text-[#2A75C1] font-semibold hover:text-[#003B5C] transition-colors flex items-center gap-2">
                Contact University IT Support
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>

            {/* Right: Accordion */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <FaqItem 
                question="Do I have to pay?" 
                answer="No, eduMEET is provided by your university and its national research network. There are no subscription fees or per-user costs for students and staff." 
              />
              <FaqItem 
                question="Can I join from my phone?" 
                answer="Yes! eduMEET works perfectly in the browser on your mobile device. There is no need to download or install any dedicated apps." 
              />
              <FaqItem 
                question="Can people from other universities join my meeting?" 
                answer="Absolutely. You can share your meeting link with anyone, including external guests or examiners from other institutions, and they can join with a single click." 
              />
              <FaqItem 
                question="Who do I contact if something doesn't work?" 
                answer="Since eduMEET is hosted and managed by your institution's infrastructure, you should contact your university's internal IT helpdesk for technical support." 
              />
            </div>

          </div>
        </section>

        {/* BOTTOM SECTIONS: TIPS & CTA */}
        <section className="w-full bg-slate-50 py-24 md:py-32 px-4 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-0 lg:border lg:border-slate-200 lg:divide-x divide-slate-200 bg-white">
            
            {/* Tips for low bandwidth */}
            <div className="p-8 md:p-12 xl:p-16 flex flex-col justify-center border border-slate-200 lg:border-none">
              <div className="text-sm font-bold tracking-wider uppercase text-[#8E1B73] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                Best Practices
              </div>
              <h2 className="text-3xl font-bold text-[#001D2E] mb-4">Tips for low bandwidth</h2>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                Meetings are routed to the nearest available server on the regional network, which helps keep delays low. These habits help too.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Turn your camera off when you're not speaking.",
                  "Close other tabs that stream video or audio.",
                  "Use campus Wi-Fi where you can.",
                  "Ask your lecturer for the recording if your connection drops."
                ].map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8E1B73]/10 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-[#8E1B73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-medium leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA: Availability */}
            <div className="p-8 md:p-12 xl:p-16 flex flex-col justify-center bg-[#003B5C] border border-transparent lg:border-none">
              <div className="text-sm font-bold tracking-wider uppercase text-white/70 mb-4">Get Started</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
                Is eduMEET available at my university?
              </h2>
              <p className="text-white/80 mb-10 leading-relaxed font-medium text-lg">
                Access comes through your university and its national research network. If you can&apos;t find it, ask your IT office and share this page with them.
              </p>
              
              <div className="mt-auto">
                <a href="#" className="group inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-bold text-[#003B5C] transition-all bg-white rounded-full hover:bg-slate-100 shadow-sm gap-2">
                  Check availability
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-bold text-[#001D2E] text-lg pr-4">{question}</span>
        <div className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-2 text-slate-600 font-medium leading-relaxed border-t border-slate-100 mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
