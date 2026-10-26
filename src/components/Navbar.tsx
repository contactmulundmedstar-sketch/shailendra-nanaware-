import React from 'react';
import { Eye, Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element wordmark with official SN Logo */}
          <a href="#" className="flex items-center gap-3 text-slate-900 group">
            <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 p-0.5 overflow-hidden flex items-center justify-center shrink-0 shadow-2xs group-hover:border-cyan-600 transition-colors">
              <img
                src="/assets/aistudio/S_7deb4b1d.jpg"
                alt="Dr. Shailendra Nanaware SN Monogram Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap font-display">
                Dr. Shailendra Nanaware
              </span>
              <span className="text-xs font-medium text-cyan-700 whitespace-nowrap">
                Mulund Eye Care · 26 Years Experience
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-cyan-700 transition-colors whitespace-nowrap shrink-0 py-2">
              About & Credentials
            </a>
            <a href="#surgeries" className="hover:text-cyan-700 transition-colors whitespace-nowrap shrink-0 py-2">
              Surgeries & Treatments
            </a>
            <a href="#testimonials" className="hover:text-cyan-700 transition-colors whitespace-nowrap shrink-0 py-2">
              Testimonials & Outcomes
            </a>
            <a href="#interactive-tools" className="hover:text-cyan-700 transition-colors whitespace-nowrap shrink-0 py-2">
              Vision Screening Tools
            </a>
            <a href="#clinic-photos" className="hover:text-cyan-700 transition-colors whitespace-nowrap shrink-0 py-2">
              Clinic & OT
            </a>
            <a href="#location" className="hover:text-cyan-700 transition-colors whitespace-nowrap shrink-0 py-2">
              Location & Hours
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 active:bg-cyan-900 transition-colors shadow-sm whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-md"
          >
            About & Credentials
          </a>
          <a
            href="#surgeries"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-md"
          >
            Surgeries & Treatments
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-md"
          >
            Testimonials & Outcomes
          </a>
          <a
            href="#interactive-tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-md"
          >
            Vision Screening Tools
          </a>
          <a
            href="#clinic-photos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-md"
          >
            Clinic & OT Facilities
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-md"
          >
            Location & Timings
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
