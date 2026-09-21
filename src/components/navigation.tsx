"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className={`flex flex-col rounded-[2rem] border border-black/[0.04] bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-all overflow-hidden lg:overflow-visible ${isOpen ? 'bg-white shadow-xl' : ''}`}>
        <header className="flex items-center justify-between px-3 py-2">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 px-2" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="eduMEET Logo" className="h-8 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <Link href="/what-is-edumeet" className="px-3 py-2 text-foreground/80 transition-colors hover:text-foreground">
              What is eduMEET
            </Link>

            {/* Custom Tailwind Dropdown: Who it's for */}
            <div className="relative group px-3 py-2">
              <button className="flex items-center text-foreground/80 transition-colors hover:text-foreground cursor-default">
                Who it&apos;s for
              </button>
              <div className="absolute top-full left-0 pt-2 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="rounded-xl border border-border/50 bg-background/95 backdrop-blur-md shadow-lg p-2 flex flex-col gap-1">
                  {[
                    { title: "Students & lecturers", desc: "Classes, tutorials, supervision", href: "/students-lecturers" },
                    { title: "Researchers", desc: "Projects, seminars, conferences", href: "/researchers" },
                    { title: "Vice Chancellors & leadership", desc: "Cost, control and strategy", href: "/leadership" },
                    { title: "IT directors", desc: "Login, domain, support", href: "/it-directors" },
                    { title: "NRENs", desc: "Run the service for your members", href: "/nrens" },
                  ].map((item) => (
                    <Link key={item.title} href={item.href} className="flex flex-col p-2 rounded-md hover:bg-muted transition-colors">
                      <span className="font-medium text-foreground">{item.title}</span>
                      <span className="text-xs text-muted-foreground">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/how-it-works" className="px-3 py-2 text-foreground/80 transition-colors hover:text-foreground">
              How it works
            </Link>

            {/* Custom Tailwind Dropdown: For NRENs */}
            <div className="relative group px-3 py-2">
              <button className="flex items-center text-foreground/80 transition-colors hover:text-foreground cursor-default">
                For NRENs
              </button>
              <div className="absolute top-full left-0 pt-2 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="rounded-xl border border-border/50 bg-background/95 backdrop-blur-md shadow-lg p-2 flex flex-col gap-1">
                  {[
                    { title: "NREN hub", desc: "Overview and ways to join" },
                    { title: "Federation model", desc: "Architecture and governance" },
                    { title: "Participation", desc: "Contribute capacity or subscribe" },
                    { title: "Technical onboarding", desc: "Server, firewall, DNS, SSO" },
                  ].map((item) => (
                    <Link key={item.title} href="#" className="flex flex-col p-2 rounded-md hover:bg-muted transition-colors">
                      <span className="font-medium text-foreground">{item.title}</span>
                      <span className="text-xs text-muted-foreground">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/faq" className="px-3 py-2 text-foreground/80 transition-colors hover:text-foreground">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-1">
            {/* Action Button */}
            <div className="flex items-center pl-2">
              <Button 
                className="rounded-full bg-[#8E1B73] font-semibold text-white hover:bg-[#8E1B73]/90 shadow-sm px-4 md:px-6 text-sm md:text-base h-9 md:h-10"
              >
                Get eduMEET
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 ml-1 text-foreground/80 hover:text-foreground focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>

        </header>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden flex flex-col px-6 pb-6 pt-4 border-t border-black/5 max-h-[75vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
            <Link href="/what-is-edumeet" className="py-3 font-semibold text-[#001D2E] border-b border-black/5" onClick={() => setIsOpen(false)}>
              What is eduMEET
            </Link>
            
            <div className="py-4 border-b border-black/5">
              <div className="font-semibold text-[#001D2E] mb-3">Who it&apos;s for</div>
              <div className="flex flex-col pl-4 gap-4">
                <Link href="/students-lecturers" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-500 hover:text-[#F1921A] transition-colors">Students & lecturers</Link>
                <Link href="/researchers" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-500 hover:text-[#8E1B73] transition-colors">Researchers</Link>
                <Link href="/leadership" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-500 hover:text-[#003B5C] transition-colors">Vice Chancellors & leadership</Link>
                <Link href="/it-directors" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-500 hover:text-[#F1921A] transition-colors">IT directors</Link>
                <Link href="/nrens" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-500 hover:text-[#8E1B73] transition-colors">NRENs</Link>
              </div>
            </div>

            <Link href="/how-it-works" className="py-3 font-semibold text-[#001D2E] border-b border-black/5" onClick={() => setIsOpen(false)}>
              How it works
            </Link>

            <div className="py-4 border-b border-black/5">
              <div className="font-semibold text-[#001D2E] mb-3">For NRENs</div>
              <div className="flex flex-col pl-4 gap-4">
                <Link href="#" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-500 hover:text-[#8E1B73] transition-colors">NREN hub</Link>
                <Link href="#" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-500 hover:text-[#8E1B73] transition-colors">Federation model</Link>
                <Link href="#" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-500 hover:text-[#8E1B73] transition-colors">Participation</Link>
                <Link href="#" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-500 hover:text-[#8E1B73] transition-colors">Technical onboarding</Link>
              </div>
            </div>

            <Link href="/faq" className="py-3 font-semibold text-[#001D2E]" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
