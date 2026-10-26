import React from 'react';
import { ShieldCheck, Calendar, Phone, Award, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { doctorProfile } from '../data/doctorData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50/60 via-white to-slate-50 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor introduction & key proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Verification and Trust Marker (Unboxed text with dots) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-cyan-800 tracking-wide uppercase">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                Medical Registration Verified
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Maharashtra Medical Council</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>MBBS (Grant Medical College)</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>DOMS (KEM Hospital)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display leading-[1.12] text-balance">
              Restoring Clear Vision with 26 Years of Surgical Precision.
            </h1>

            {/* Doctor Bio Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              <strong className="text-slate-900 font-semibold">{doctorProfile.name}</strong> ({doctorProfile.titles}) is a senior ophthalmic surgeon at{' '}
              <span className="text-cyan-800 font-medium">Mulund Eye Care</span>, specializing in stitchless micro-incision cataract surgery (MICS Phaco), custom LASIK laser vision correction, and pediatric squint alignment.
            </p>

            {/* Core Practice Highlights (Quiet unboxed bullet points) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0" />
                <span>Stitchless & Injection-Free Cataract Phaco</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0" />
                <span>Custom Blade-Free LASIK & Refraction</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0" />
                <span>Pediatric Ophthalmology & Squint Therapy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0" />
                <span>Diabetic Retinopathy & Cornea Care</span>
              </div>
            </div>

            {/* Action Zone */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 active:bg-cyan-900 shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Clinic Consultation</span>
              </button>

              <a
                href="tel:+917777066990"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-cyan-700" />
                <span>+91 77770 66990</span>
              </a>
            </div>

            {/* Location & Schedule Note */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Mulund West, Mumbai 400080
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                Mon–Fri: 10 AM–4 PM & 6 PM–8 PM · Sat: 10 AM–4 PM
              </span>
            </div>

          </div>

          {/* Right Column: Doctor Portrait with Real Photo, SN Logo & Clinical Eye Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Image Frame with Real Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
                
                {/* Official Monogram Badge on top right of photo */}
                <div className="absolute top-4 right-4 z-20 w-14 h-14 bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-lg border border-slate-200/90 flex items-center justify-center">
                  <img
                    src="/assets/aistudio/S_7deb4b1d.jpg"
                    alt="Dr. Shailendra Nanaware Official SN Monogram"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="relative aspect-[3/3.8] overflow-hidden bg-slate-100">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2025-01-06_at_20.30.09_0aea704c_f1419338.jpg"
                    alt="Dr. Shailendra Nanaware, Senior Ophthalmologist at Mulund Eye Care consulting suite"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider block">
                      In Consultation · Mulund Eye Care
                    </span>
                    <p className="text-xs text-slate-200 font-medium">
                      With computerized phoropter & slit-lamp biomicroscopy unit
                    </p>
                  </div>
                </div>
                
                {/* Doctor Caption Card Overlay */}
                <div className="p-5 bg-white border-t border-slate-100">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-display">
                        Dr. Shailendra Nanaware
                      </h3>
                      <p className="text-xs font-semibold text-cyan-800">
                        MBBS (JJ Hospital) · DOMS (KEM Hospital)
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Senior Eye Surgeon · Head of Ophthalmology, Mulund Eye Care
                      </p>
                    </div>
                    <div className="p-2 bg-cyan-50 rounded-lg text-cyan-800 shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span>Active Member: <strong>Bombay Ophthalmologists Association</strong></span>
                    <span className="text-emerald-700 font-medium">MMC Reg. Verified</span>
                  </div>
                </div>
              </div>

              {/* Clinical Eye Image Highlight Card */}
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-3.5">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-900">
                  <img
                    src="/src/assets/images/macro_human_eye_cornea_1793053206418.jpg"
                    alt="Clinical high-magnification human cornea and iris biomicroscopy"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-slate-900 block font-display">
                    Sub-Millimeter Corneal & Optical Precision
                  </span>
                  <p className="text-slate-500 text-[11px] leading-tight">
                    Micro-incision phaco cataract, custom wavefront LASIK, and pediatric squint realignment.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column KPI / Trust Strip below the Hero Split */}
        <div className="mt-16 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tabular-nums">
              26+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600">
              Years Clinical Experience
            </div>
            <div className="text-xs text-slate-400">
              Across Mumbai & Indian Hospitals
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tabular-nums">
              18,500+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600">
              Microsurgical Procedures
            </div>
            <div className="text-xs text-slate-400">
              Cataract, LASIK & Pediatric Squint
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600">
              Verified Medical Registration
            </div>
            <div className="text-xs text-slate-400">
              Maharashtra Medical Council
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tabular-nums">
              2
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600">
              Premier Training Alma Maters
            </div>
            <div className="text-xs text-slate-400">
              Sir JJ Hospital & KEM Hospital
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
