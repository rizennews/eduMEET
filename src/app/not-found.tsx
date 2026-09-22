import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-center bg-slate-50 px-4 border-t border-slate-200">
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Decorative Icon */}
        <div className="w-24 h-24 bg-white border border-slate-200 flex items-center justify-center mb-8 rotate-[15deg] hover:rotate-0 transition-transform duration-300">
          <svg className="w-12 h-12 text-[#F1921A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* 404 Heading */}
        <h1 className="text-[120px] md:text-[180px] font-bold text-[#003B5C] leading-none mb-2 tracking-tighter">
          404
        </h1>
        
        {/* Subtitle */}
        <div className="text-sm md:text-base font-bold tracking-wider uppercase text-[#8E1B73] mb-6 flex items-center gap-4 justify-center">
          <span className="w-12 h-[2px] bg-[#8E1B73]"></span>
          Page not found
          <span className="w-12 h-[2px] bg-[#8E1B73]"></span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 font-medium mb-12 leading-relaxed px-4">
          The link you followed may be broken, or the page may have been moved. Let's get you back to the right place.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
          <Link 
            href="/"
            className="w-full sm:w-auto px-10 py-4 bg-[#003B5C] text-white font-bold text-lg hover:bg-[#001D2E] transition-colors text-center"
          >
            Back to homepage
          </Link>
          <Link 
            href="/how-it-works"
            className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-slate-200 text-[#001D2E] font-bold text-lg hover:border-[#003B5C] hover:text-[#003B5C] transition-colors text-center"
          >
            How it works
          </Link>
        </div>

      </div>
    </div>
  );
}
