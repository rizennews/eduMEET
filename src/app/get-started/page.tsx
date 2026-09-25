"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/page-transition';
import { useState } from 'react';

// All 54 African Countries with mock/real NREN data
const COUNTRIES = [
  { id: 'algeria', name: 'Algeria', nren: 'ARN', status: 'Not Connected' },
  { id: 'angola', name: 'Angola', nren: 'AngolaREN', status: 'Not Connected' },
  { id: 'benin', name: 'Benin', nren: 'RBER', status: 'Subscriber' },
  { id: 'botswana', name: 'Botswana', nren: 'BotswanaREN', status: 'Not Connected' },
  { id: 'burkina-faso', name: 'Burkina Faso', nren: 'FasoREN', status: 'Contributor' },
  { id: 'burundi', name: 'Burundi', nren: 'BERNET', status: 'Not Connected' },
  { id: 'cabo-verde', name: 'Cabo Verde', nren: 'N/A', status: 'Not Connected' },
  { id: 'cameroon', name: 'Cameroon', nren: 'RICAC', status: 'Not Connected' },
  { id: 'car', name: 'Central African Republic', nren: 'N/A', status: 'Not Connected' },
  { id: 'chad', name: 'Chad', nren: 'TchadREN', status: 'Not Connected' },
  { id: 'comoros', name: 'Comoros', nren: 'N/A', status: 'Not Connected' },
  { id: 'congo-dem', name: 'Democratic Republic of the Congo', nren: 'Eb@le', status: 'Not Connected' },
  { id: 'congo-rep', name: 'Republic of the Congo', nren: 'N/A', status: 'Not Connected' },
  { id: 'cote-divoire', name: "Côte d'Ivoire", nren: 'RITER', status: 'Subscriber' },
  { id: 'djibouti', name: 'Djibouti', nren: 'N/A', status: 'Not Connected' },
  { id: 'egypt', name: 'Egypt', nren: 'ENSTINET', status: 'Not Connected' },
  { id: 'eq-guinea', name: 'Equatorial Guinea', nren: 'N/A', status: 'Not Connected' },
  { id: 'eritrea', name: 'Eritrea', nren: 'N/A', status: 'Not Connected' },
  { id: 'eswatini', name: 'Eswatini', nren: 'N/A', status: 'Not Connected' },
  { id: 'ethiopia', name: 'Ethiopia', nren: 'EthERNet', status: 'Not Connected' },
  { id: 'gabon', name: 'Gabon', nren: 'GabonREN', status: 'Not Connected' },
  { id: 'gambia', name: 'Gambia', nren: 'GamREN', status: 'Not Connected' },
  { id: 'ghana', name: 'Ghana', nren: 'GARNET', status: 'Contributor' },
  { id: 'guinea', name: 'Guinea', nren: 'N/A', status: 'Not Connected' },
  { id: 'guinea-bissau', name: 'Guinea-Bissau', nren: 'N/A', status: 'Not Connected' },
  { id: 'kenya', name: 'Kenya', nren: 'KENET', status: 'Not Connected' },
  { id: 'lesotho', name: 'Lesotho', nren: 'LUMEN', status: 'Not Connected' },
  { id: 'liberia', name: 'Liberia', nren: 'LRREN', status: 'Not Connected' },
  { id: 'libya', name: 'Libya', nren: 'N/A', status: 'Not Connected' },
  { id: 'madagascar', name: 'Madagascar', nren: 'iRENALA', status: 'Not Connected' },
  { id: 'malawi', name: 'Malawi', nren: 'MAREN', status: 'Not Connected' },
  { id: 'mali', name: 'Mali', nren: 'MaliREN', status: 'Subscriber' },
  { id: 'mauritania', name: 'Mauritania', nren: 'N/A', status: 'Not Connected' },
  { id: 'mauritius', name: 'Mauritius', nren: 'N/A', status: 'Not Connected' },
  { id: 'morocco', name: 'Morocco', nren: 'MARWAN', status: 'Not Connected' },
  { id: 'mozambique', name: 'Mozambique', nren: 'MoRENet', status: 'Not Connected' },
  { id: 'namibia', name: 'Namibia', nren: 'Xnet', status: 'Not Connected' },
  { id: 'niger', name: 'Niger', nren: 'NigerREN', status: 'Not Connected' },
  { id: 'nigeria', name: 'Nigeria', nren: 'NgREN', status: 'Contributor' },
  { id: 'rwanda', name: 'Rwanda', nren: 'RwEdNet', status: 'Not Connected' },
  { id: 'sao-tome', name: 'Sao Tome and Principe', nren: 'N/A', status: 'Not Connected' },
  { id: 'senegal', name: 'Senegal', nren: 'snRER', status: 'Contributor' },
  { id: 'seychelles', name: 'Seychelles', nren: 'N/A', status: 'Not Connected' },
  { id: 'sierra-leone', name: 'Sierra Leone', nren: 'SLREN', status: 'Not Connected' },
  { id: 'somalia', name: 'Somalia', nren: 'SomaliREN', status: 'Not Connected' },
  { id: 'south-africa', name: 'South Africa', nren: 'TENET', status: 'Not Connected' },
  { id: 'south-sudan', name: 'South Sudan', nren: 'N/A', status: 'Not Connected' },
  { id: 'sudan', name: 'Sudan', nren: 'SUIN', status: 'Not Connected' },
  { id: 'tanzania', name: 'Tanzania', nren: 'TERNET', status: 'Not Connected' },
  { id: 'togo', name: 'Togo', nren: 'TogoRER', status: 'Subscriber' },
  { id: 'tunisia', name: 'Tunisia', nren: 'CCK', status: 'Not Connected' },
  { id: 'uganda', name: 'Uganda', nren: 'RENU', status: 'Not Connected' },
  { id: 'zambia', name: 'Zambia', nren: 'ZAMREN', status: 'Not Connected' },
  { id: 'zimbabwe', name: 'Zimbabwe', nren: 'ZARNet', status: 'Not Connected' },
].sort((a, b) => a.name.localeCompare(b.name));

function CountryChecker() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const countryData = COUNTRIES.find(c => c.id === selectedCountry);

  return (
    <div className="w-full max-w-4xl mx-auto text-left mt-8">
      <div className="relative mb-4 w-full mx-auto">
        <select 
          id="country-select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-full bg-transparent border-b border-white/20 text-white pb-6 appearance-none rounded-none focus:outline-none focus:border-white transition-colors cursor-pointer text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight"
        >
          <option value="" disabled className="text-slate-800">Choose a country...</option>
          {COUNTRIES.map(c => (
            <option key={c.id} value={c.id} className="text-slate-800 bg-white text-lg font-sans">{c.name}</option>
          ))}
        </select>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 pb-6">
          <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>

      <div className="min-h-[200px]">
        {countryData && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={countryData.id}
            className="pt-12 flex flex-col md:flex-row justify-between items-start gap-12"
          >
            <div>
              <div className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4">National Network</div>
              <div className="text-6xl md:text-8xl font-serif text-white tracking-tighter leading-none">{countryData.nren}</div>
            </div>
            
            <div className="flex flex-col items-start md:items-end md:text-right">
              <div className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4">Federation Status</div>
              {countryData.status !== 'Not Connected' ? (
                <div className="inline-flex items-center text-xl md:text-3xl font-medium text-white tracking-tight">
                  <svg className={`w-6 h-6 md:w-8 md:h-8 mr-4 ${countryData.status === 'Contributor' ? 'text-[#F1921A]' : 'text-[#8E1B73]'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {countryData.status}
                </div>
              ) : (
                <>
                  <div className="text-2xl md:text-4xl font-serif text-white/60 mb-6 tracking-tight">Not connected</div>
                  <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-sm">
                    {countryData.nren !== 'N/A' 
                      ? `Ask your university IT office to contact ${countryData.nren} about joining eduMEET.`
                      : `Ask your university IT office to contact WACREN about joining eduMEET.`
                    }
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <PageTransition>
      <main className="flex flex-col min-h-[80vh] overflow-x-hidden w-full bg-white">
        
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center bg-[#003B5C] pt-32 pb-20 w-full text-center overflow-hidden">
          <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter text-white mb-6">
                Get eduMEET
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-balance font-medium">
                eduMEET reaches your campus through your National Research and Education Network (NREN). Pick the option that describes you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* OPTIONS GRID */}
        <section className="w-full pb-32 pt-16 px-4 bg-slate-50">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border border-slate-200 bg-white p-8 md:p-10 hover:border-[#8E1B73] hover:shadow-sm transition-all group relative flex flex-col"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-8 text-[#8E1B73] group-hover:bg-[#8E1B73] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4 group-hover:text-[#8E1B73] transition-colors">
                Student, lecturer or researcher
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Ask your university IT office whether eduMEET is available. If not, send them this page.
              </p>
              <div className="mt-auto flex items-center text-[#8E1B73] font-bold text-sm tracking-wider uppercase">
                Use our email template <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
              <Link href="mailto:?subject=eduMEET%20for%20our%20University&body=Hi%20IT%20Team,%0A%0AWe%20would%20like%20to%20request%20access%20to%20eduMEET,%20the%20video%20conferencing%20platform%20for%20the%20research%20and%20education%20community.%20Please%20see%20https://edumeet.africa%20for%20details.%0A%0AThank%20you." className="absolute inset-0 z-10"><span className="sr-only">Students and researchers</span></Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border border-slate-200 bg-white p-8 md:p-10 hover:border-[#2A75C1] hover:shadow-sm transition-all group relative flex flex-col"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-8 text-[#2A75C1] group-hover:bg-[#2A75C1] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4 group-hover:text-[#2A75C1] transition-colors">
                University leader or IT director
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Contact your NREN to request access and discuss capacity for your institution.
              </p>
              <div className="mt-auto flex items-center text-[#2A75C1] font-bold text-sm tracking-wider uppercase">
                Find your NREN <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
              <Link href="#" className="absolute inset-0 z-10"><span className="sr-only">University IT and Leadership</span></Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border border-slate-200 bg-white p-8 md:p-10 hover:border-[#F1921A] hover:shadow-sm transition-all group relative flex flex-col"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-8 text-[#F1921A] group-hover:bg-[#F1921A] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#001D2E] mb-4 group-hover:text-[#F1921A] transition-colors">
                NREN
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Join the African eduMEET Federation as a contributor or subscriber.
              </p>
              <div className="mt-auto flex items-center text-[#F1921A] font-bold text-sm tracking-wider uppercase">
                Contact WACREN <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
              <Link href="mailto:PMO@wacren.net" className="absolute inset-0 z-10"><span className="sr-only">National Research and Education Networks</span></Link>
            </motion.div>

          </div>
        </section>

        {/* COUNTRY CHECKER SECTION */}
        <section className="w-full bg-[#001D2E] py-24 px-4 border-t border-[#002840]">
          <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              Is your country connected?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-12 max-w-2xl leading-relaxed">
              Choose your country to see your NREN and its federation status.
            </p>

            {/* Checker UI Component */}
            <CountryChecker />

          </div>
        </section>

        {/* FINAL SECTION: EMAIL TEMPLATE */}
        <section className="w-full bg-slate-50 py-24 px-4 border-t border-slate-200">
          <div className="max-w-[800px] mx-auto flex flex-col items-center">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#001D2E] mb-4">
                Ask your IT office
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto">
                Copy this message and send it to your university's IT help desk.
              </p>
            </div>

            {/* Email Template Box */}
            <div className="w-full bg-white border border-slate-200 shadow-sm relative group">
              <div className="bg-[#001D2E] text-white px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                <span className="font-bold text-sm tracking-wider uppercase">New Message</span>
                <CopyButton text={`Subject: Request to enable eduMEET for our university\n\nHello,\n\nI'd like to use eduMEET, the video conferencing service for African research and education run by WACREN, for my classes and research meetings.\n\nCould you check whether our NREN has joined the African eduMEET Federation, and whether our university can be connected?\n\nMore information: https://edumeet.africa\n\nThank you,\n[Your name, department]`} />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-6 border-b border-slate-100 pb-4">
                  <span className="text-slate-400 font-bold mr-2 text-sm uppercase tracking-wider">Subject:</span>
                  <span className="text-[#001D2E] font-bold text-lg">Request to enable eduMEET for our university</span>
                </div>
                <div className="text-slate-700 leading-relaxed space-y-4 whitespace-pre-wrap font-medium">
                  <p>Hello,</p>
                  <p>I'd like to use eduMEET, the video conferencing service for African research and education run by WACREN, for my classes and research meetings.</p>
                  <p>Could you check whether our NREN has joined the African eduMEET Federation, and whether our university can be connected?</p>
                  <p>More information: <a href="https://edumeet.africa" className="text-[#2A75C1] hover:underline font-bold">https://edumeet.africa</a></p>
                  <p>Thank you,<br/>[Your name, department]</p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </PageTransition>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="text-sm font-bold bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors flex items-center gap-2"
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          Copied
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          Copy text
        </>
      )}
    </button>
  );
}
