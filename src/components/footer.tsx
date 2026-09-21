"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#001D2E] text-white pt-20 pb-0 overflow-hidden flex flex-col font-sans border-t border-[#003B5C]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 w-full flex flex-col gap-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col items-start gap-8">
            <Link href="/" className="inline-block">
              {/* Unfiltered logo displaying original brand colors on dark blue */}
              <img src="/logo.png" alt="eduMEET Logo" className="h-10 w-auto object-contain hover:opacity-90 transition-opacity" />
            </Link>
            
            <p className="text-white/90 text-lg font-medium leading-relaxed max-w-sm">
              Open-source video conferencing for African research and education, run by WACREN and its member NRENs.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm mt-4">
              <span className="text-white font-medium">Get in touch:</span>
              <div className="flex w-full">
                <a href="mailto:PMO@wacren.net" className="flex-1 bg-white/10 hover:bg-white/20 transition-colors border border-white/20 rounded-l-md px-4 py-3 text-white placeholder:text-white/60 font-mono text-sm flex items-center shadow-sm">
                  PMO@wacren.net
                </a>
                <a href="mailto:PMO@wacren.net" className="bg-white/20 hover:bg-white/30 transition-colors border border-l-0 border-white/20 rounded-r-md px-4 py-3 flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-4 lg:mt-0 lg:pl-12">
            
            <div className="flex flex-col gap-4">
              <h3 className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-2">About</h3>
              {[
                "What is eduMEET",
                "How it works",
                "FAQ",
                "Get eduMEET"
              ].map(link => (
                <Link key={link} href="#" className="text-white hover:text-[#F1921A] transition-colors text-sm font-mono uppercase tracking-wide">
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-2">Who it&apos;s for</h3>
              {[
                "Students & lecturers",
                "Researchers",
                "University leaders",
                "IT directors"
              ].map(link => (
                <Link key={link} href="#" className="text-white hover:text-[#F1921A] transition-colors text-sm font-mono uppercase tracking-wide">
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-2">For NRENs</h3>
              {[
                "NREN hub",
                "Federation model",
                "Participation",
                "Technical onboarding",
                "Contact"
              ].map(link => (
                <Link key={link} href="#" className="text-white hover:text-[#F1921A] transition-colors text-sm font-mono uppercase tracking-wide">
                  {link}
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Metadata & Socials */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/70">
            <span>&copy; {new Date().getFullYear()} WACREN</span>
            <span className="hidden md:inline text-white/30">&middot;</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy notice</Link>
            <span className="hidden md:inline text-white/30">&middot;</span>
            <Link href="#" className="hover:text-white transition-colors">Cookie policy</Link>
            <span className="hidden md:inline text-white/30">&middot;</span>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>

          <div className="flex items-center gap-4 text-white/80">
            {/* LinkedIn */}
            <a href="#" className="hover:text-white hover:scale-110 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" className="hover:text-white hover:scale-110 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* Mastodon */}
            <a href="#" className="hover:text-white hover:scale-110 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.268 5.313c-.35-2.228-2.618-3.616-5.464-3.92-1.558-.168-3.125-.252-4.692-.252H10.89c-1.567 0-3.134.084-4.692.252-2.846.304-5.114 1.692-5.464 3.92-.178 1.129-.31 2.383-.356 3.73-.066 2.083-.066 4.168-.066 6.25 0 2.203.224 4.417.653 6.592.516 2.617 2.802 4.095 5.485 4.542 2.062.342 4.163.456 6.248.337 1.878-.106 3.722-.505 5.485-1.183v-3.328c-1.89.702-3.896 1.056-5.918 1.045-2.25-.01-4.502-.276-6.68-.788-.413-.098-.79-.278-1.11-.532-.32-.254-.572-.582-.733-.956-.16-.375-.226-.783-.195-1.192.03-.41.157-.803.367-1.144h14.532c1.78-.002 3.518-.553 4.966-1.574 1.25-1.026 2.015-2.553 2.15-4.305.15-2.02.23-4.045.244-6.075zm-3.633 6.96h-2.906V8.125c0-1.11-.472-1.666-1.417-1.666-1.034 0-1.55.617-1.55 1.854v3.155h-2.9v-3.155c0-1.237-.516-1.854-1.55-1.854-.945 0-1.417.556-1.417 1.666v4.148H4.992V8.125c0-1.115.3-2.006.902-2.673.602-.667 1.4-1.002 2.39-1.002 1.196 0 2.115.424 2.756 1.27.354.464.63.992.817 1.545.187-.553.463-1.08.817-1.545.64-.846 1.56-1.27 2.756-1.27.99 0 1.788.335 2.39 1.002.602.667.902 1.558.902 2.673v4.148z"/></svg>
            </a>
            {/* Bluesky */}
            <a href="#" className="hover:text-white hover:scale-110 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.475.293-1.195.666-2.148 1.077-2.457 1.057-5.184 2.062-5.176 3.82.006 1.155.836 2.046 2.398 2.525 2.533.775 6.337.892 8.795-2.023l.709-.854.709.854c2.458 2.915 6.262 2.798 8.795 2.023 1.562-.48 2.392-1.37 2.398-2.525.008-1.758-2.719-2.763-5.176-3.82-.953-.41-1.673-.784-2.148-1.077.14.017.28.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.789.624-6.479 0-.69-.139-1.861-.902-2.203-.659-.3-1.664-.62-4.3 1.24-2.752 1.942-5.711 5.881-6.798 7.995z"/></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Far Bottom: Giant Typography and Sticker */}
      <div className="relative w-full overflow-hidden mt-12 flex flex-col justify-center items-center">
        
        {/* EU/WACREN "Sticker" matching the B-Corp sticker placement */}
        <div className="relative md:absolute z-10 md:bottom-[15%] md:right-[15%] w-full max-w-[280px] md:max-w-[240px] bg-[#8E1B73] text-white p-4 rounded-xl shadow-xl transform md:rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 border border-white/10 mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <img src="/EU-logo.png" alt="EU Flag" className="h-5 w-auto object-contain" />
            <img src="/wacren.svg" alt="WACREN" className="h-5 w-auto object-contain" />
          </div>
          <p className="text-[11px] leading-relaxed text-white/90 font-medium">
            An initiative of <a href="https://wacren.net/" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 hover:text-white/70 transition-colors">WACREN</a>. Powered by <a href="https://edumeet.eu/" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 hover:text-white/70 transition-colors">eduMEET open-source software</a> and funded by the European Commission under the AfricaConnect4 project.
          </p>
        </div>

        {/* Giant Text */}
        <div className="w-full text-[20vw] md:text-[17vw] font-bold leading-[0.75] tracking-tighter text-white/5 select-none pointer-events-none mt-4 md:mt-8 mb-0 md:-mb-2 text-center">
          eduMEET
        </div>

      </div>
    </footer>
  );
}
