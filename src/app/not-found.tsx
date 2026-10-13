import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center bg-white px-4 py-16">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col">

        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 border-b border-slate-200 pb-12">
          <div className="lg:col-span-8 flex flex-col">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#001D2E] leading-[1.05] text-balance">
              The page you are looking for doesn&apos;t exist.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between pt-2">
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
              The link may be broken, or the page may have moved within the federation. Return home or check one of the main sections.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/"
                className="px-6 py-3 bg-[#003B5C] text-white font-bold text-sm hover:bg-[#001D2E] transition-colors rounded-none"
              >
                Back to homepage
              </Link>
              <Link 
                href="/faq"
                className="px-6 py-3 bg-slate-100 text-[#001D2E] font-bold text-sm hover:bg-slate-200 border border-slate-200 transition-colors rounded-none"
              >
                Read FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Section Grid: Clean editorial tiles like the rest of the site */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          
          <Link href="/what-is-edumeet" className="p-8 flex flex-col justify-between hover:bg-slate-50 transition-colors group">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F1921A] mb-3">Overview</div>
              <h2 className="text-xl font-bold text-[#001D2E] mb-2 group-hover:text-[#F1921A] transition-colors">What is eduMEET</h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">Open-source video platform built by and for R&amp;E.</p>
            </div>
            <div className="text-sm font-bold text-[#003B5C] mt-6 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Learn more &rarr;
            </div>
          </Link>

          <Link href="/how-it-works" className="p-8 flex flex-col justify-between hover:bg-slate-50 transition-colors group">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#8E1B73] mb-3">Architecture</div>
              <h2 className="text-xl font-bold text-[#001D2E] mb-2 group-hover:text-[#8E1B73] transition-colors">How it works</h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">Central orchestration and distributed media nodes.</p>
            </div>
            <div className="text-sm font-bold text-[#003B5C] mt-6 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore &rarr;
            </div>
          </Link>

          <Link href="/nren-hub" className="p-8 flex flex-col justify-between hover:bg-slate-50 transition-colors group">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#003B5C] mb-3">Federation</div>
              <h2 className="text-xl font-bold text-[#001D2E] mb-2 group-hover:text-[#003B5C] transition-colors">NREN Hub</h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">Overview and models for participating NRENs.</p>
            </div>
            <div className="text-sm font-bold text-[#003B5C] mt-6 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              View Hub &rarr;
            </div>
          </Link>

          <Link href="/get-started" className="p-8 flex flex-col justify-between hover:bg-slate-50 transition-colors group">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#2A75C1] mb-3">Onboarding</div>
              <h2 className="text-xl font-bold text-[#001D2E] mb-2 group-hover:text-[#2A75C1] transition-colors">Get Started</h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">Check country status and connect your campus.</p>
            </div>
            <div className="text-sm font-bold text-[#003B5C] mt-6 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Get connected &rarr;
            </div>
          </Link>

        </div>

      </div>
    </main>
  );
}
