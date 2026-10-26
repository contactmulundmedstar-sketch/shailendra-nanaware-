import React, { useState } from 'react';
import { Camera, Maximize2, X, Check, ShieldCheck } from 'lucide-react';
import { clinicPhotos } from '../data/doctorData';
import { ClinicPhoto } from '../types';

export const ClinicPhotos: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<ClinicPhoto | null>(null);

  return (
    <section id="clinic-photos" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-cyan-800 tracking-wider uppercase mb-2">
            Facility Infrastructure & Sterility
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Mulund Eye Care Facility & Technology
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A look inside our modern clinical suites, diagnostic rooms, and class-100 sterile operating theatre in Mulund West, Mumbai.
          </p>
        </div>

        {/* 6-Image Clinical Facility & Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img
                  src={photo.imagePath}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Scrim Overlay & Zoom Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <button
                  onClick={() => setActivePhoto(photo)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-lg bg-white/90 text-slate-800 hover:bg-white shadow-md cursor-pointer transition-all hover:scale-105"
                  aria-label={`Enlarge photo of ${photo.title}`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-4 right-16">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300 block">
                    {photo.category.replace('_', ' ').toUpperCase()}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display leading-tight truncate">
                    {photo.title}
                  </h3>
                </div>
              </div>

              {/* Photo Description and Equipment Highlights */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {photo.caption}
                </p>

                <div className="pt-2 border-t border-slate-200/80">
                  <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                    {photo.highlights.map((h, i) => (
                      <span key={i} className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 text-[11px] font-medium text-slate-700">
                        <Check className="w-3 h-3 text-cyan-700" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sterility & Standards Guarantee */}
        <div className="mt-12 p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-cyan-700 text-white rounded-xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 font-display">
                Stringent Class-100 Ophthalmic Infection Control
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Our surgical operating theatre adheres to international sterilization standards, laminar air flow HEPA filtration, disposable micro-consumables, and zero-compromise post-surgical disinfection protocols.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Photo Lightbox Dialog */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden border border-slate-200 shadow-2xl">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 cursor-pointer transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activePhoto.imagePath}
                alt={activePhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-white space-y-3">
              <h3 className="text-xl font-bold text-slate-900 font-display">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activePhoto.caption}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {activePhoto.highlights.map((h, i) => (
                  <span key={i} className="text-xs bg-slate-100 px-3 py-1 rounded-md text-slate-800 font-medium">
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
