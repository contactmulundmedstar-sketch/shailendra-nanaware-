import React, { useState } from 'react';
import { Eye, Clock, Shield, Sparkles, Check, ChevronRight, X, Info, Activity } from 'lucide-react';
import { surgeriesAndTreatments } from '../data/doctorData';
import { SurgeryTreatment } from '../types';

interface SurgeriesProps {
  onSelectSurgeryForBooking: (surgeryTitle: string) => void;
}

export const SurgeriesAndTreatments: React.FC<SurgeriesProps> = ({ onSelectSurgeryForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSurgery, setSelectedSurgery] = useState<SurgeryTreatment | null>(null);

  // IOL Guide interactive state
  const [selectedLifestyle, setSelectedLifestyle] = useState<'driving' | 'screens' | 'reading' | 'active'>('driving');

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'cataract', label: 'Cataract & Phaco' },
    { id: 'refractive', label: 'LASIK & Refraction' },
    { id: 'pediatric', label: 'Pediatric & Squint' },
    { id: 'cornea', label: 'Cornea & Keratoplasty' },
    { id: 'retina', label: 'Diabetic Retina' },
    { id: 'oculoplastic', label: 'Oculoplastics & Tear Duct' }
  ];

  const filteredSurgeries = activeCategory === 'all'
    ? surgeriesAndTreatments
    : surgeriesAndTreatments.filter(s => s.category === activeCategory);

  const iolRecommendations = {
    driving: {
      type: 'Monofocal Toric or High-Contrast Monofocal IOL',
      badge: 'Best for Night Drivers & Astigmatism',
      desc: 'Provides unparalleled contrast sensitivity and sharp distance clarity with zero halos or glare rings around streetlights and headlights.',
      glassDependency: 'Minimal distance glasses; low reading glasses for near text'
    },
    screens: {
      type: 'Extended Depth of Focus (EDOF) Premium IOL',
      badge: 'Ideal for Professionals & Computer Users',
      desc: 'Creates a seamless continuous channel of vision from distance right into intermediate screen distance (60–80 cm) without optical drop-offs.',
      glassDependency: 'Glasses-free for computer and driving; occasional reading glasses for fine micro-print'
    },
    reading: {
      type: 'Trifocal / Quadrifocal Diffractive IOL',
      badge: 'Maximum Spectacle Independence',
      desc: 'Split optical zones focus light simultaneously for reading books/mobile phones, intermediate laptop distance, and distant signboards.',
      glassDependency: '95%+ freedom from spectacles for both distance, screen, and reading'
    },
    active: {
      type: 'Toric Aspheric Monofocal Plus IOL',
      badge: 'Active Outdoor Lifestyle & Sports',
      desc: 'Corrects corneal astigmatism with high-definition aspheric aberration control, giving crisp stability during tennis, golf, gym, and travel.',
      glassDependency: 'Sharp distance vision without glasses; light reading glasses for small print'
    }
  };

  const surgeryImages: Record<string, { src: string; caption: string }> = {
    'phaco-cataract': {
      src: '/src/assets/images/cataract_microscope_surgery_1793052118052.jpg',
      caption: 'Centurion Phaco & Leica OT Suite'
    },
    'lasik-refractive': {
      src: '/src/assets/images/lasik_refractive_technology_1793052117167.jpg',
      caption: 'Wavefront Pentacam Topography'
    },
    'pediatric-strabismus': {
      src: '/src/assets/images/clinic_eye_care_suite_1793052117126.jpg',
      caption: 'Pediatric Eye & Phoropter Suite'
    },
    'corneal-keratoplasty': {
      src: '/src/assets/images/macro_human_eye_cornea_1793053206418.jpg',
      caption: 'Anterior Cornea & Limbal Grafting'
    },
    'diabetic-retina': {
      src: '/src/assets/images/retina_fundus_macula_scan_1793053207056.jpg',
      caption: 'Digital Angiography & Macular OCT'
    },
    'oculoplastic-orbital': {
      src: '/assets/aistudio/WhatsApp_Image_2025-01-06_at_20.30.09_0aea704c_f1419338.jpg',
      caption: 'Consulting Suite & Phoropter'
    }
  };

  return (
    <section id="surgeries" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-cyan-800 tracking-wider uppercase mb-2">
              Surgical Repertoire & Advanced Procedures
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Precision Ophthalmic Surgeries & Eye Treatments
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Dr. Shailendra Nanaware combines micro-incision surgical technique with state-of-the-art diagnostic technology for optimal visual restoration.
            </p>
          </div>

          {/* Interactive filter tabs (Segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Surgery Cards Grid with Eye Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSurgeries.map((surgery) => (
            <div
              key={surgery.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
            >
              {/* Ophthalmic Eye Image Banner */}
              <div className="relative aspect-[16/8] bg-slate-900 overflow-hidden">
                <img
                  src={surgeryImages[surgery.id]?.src || '/src/assets/images/macro_human_eye_cornea_1793053206418.jpg'}
                  alt={surgery.title}
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 text-[11px] font-semibold text-white/90">
                  {surgeryImages[surgery.id]?.caption}
                </span>
              </div>

              <div className="p-6">
                {/* Quiet unboxed category label */}
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-2">
                  {surgery.category.toUpperCase()} SPECIALTY
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display leading-snug">
                  {surgery.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {surgery.summary}
                </p>

                {/* Key clinical metrics */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-700" />
                      Procedure Duration:
                    </span>
                    <span className="font-semibold text-slate-800">{surgery.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-cyan-700" />
                      Anesthesia:
                    </span>
                    <span className="font-semibold text-slate-800 truncate max-w-[180px] text-right" title={surgery.anesthesia}>
                      {surgery.anesthesia}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-cyan-700" />
                      Recovery:
                    </span>
                    <span className="font-semibold text-slate-800 truncate max-w-[180px] text-right" title={surgery.recoveryTime}>
                      {surgery.recoveryTime}
                    </span>
                  </div>
                </div>

                {/* Clinical indications snapshot */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Common Clinical Indications
                  </div>
                  <ul className="space-y-1">
                    {surgery.indications.slice(0, 2).map((ind, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedSurgery(surgery)}
                  className="text-xs font-semibold text-cyan-800 hover:text-cyan-900 flex items-center gap-1 py-1 cursor-pointer"
                >
                  Clinical Protocol
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectSurgeryForBooking(surgery.title)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 transition-colors shadow-xs cursor-pointer whitespace-nowrap"
                >
                  Book Evaluation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive IOL Selection Assistant (For Cataract Patients) */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-1">
              <Sparkles className="w-4 h-4 text-cyan-700" />
              Patient Decision Guide
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Intraocular Lens (IOL) Navigator for Cataract Surgery
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select your primary everyday visual requirement to see the lens profile Dr. Nanaware evaluates during your biometric workup:
            </p>
          </div>

          {/* Lifestyle Option Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            <button
              onClick={() => setSelectedLifestyle('driving')}
              className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                selectedLifestyle === 'driving'
                  ? 'border-cyan-700 bg-cyan-50/70 text-cyan-900 font-semibold ring-1 ring-cyan-700'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              🚗 Night Driving & Distance
            </button>
            <button
              onClick={() => setSelectedLifestyle('screens')}
              className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                selectedLifestyle === 'screens'
                  ? 'border-cyan-700 bg-cyan-50/70 text-cyan-900 font-semibold ring-1 ring-cyan-700'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              💻 Screens & Laptop Work
            </button>
            <button
              onClick={() => setSelectedLifestyle('reading')}
              className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                selectedLifestyle === 'reading'
                  ? 'border-cyan-700 bg-cyan-50/70 text-cyan-900 font-semibold ring-1 ring-cyan-700'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              📖 Reading & Close Work
            </button>
            <button
              onClick={() => setSelectedLifestyle('active')}
              className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                selectedLifestyle === 'active'
                  ? 'border-cyan-700 bg-cyan-50/70 text-cyan-900 font-semibold ring-1 ring-cyan-700'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              🏃 Sports & Active Outdoor
            </button>
          </div>

          {/* Result Card for Selected Lifestyle */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-cyan-800">
                {iolRecommendations[selectedLifestyle].badge}
              </div>
              <div className="text-base font-bold text-slate-900">
                {iolRecommendations[selectedLifestyle].type}
              </div>
              <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                {iolRecommendations[selectedLifestyle].desc}
              </p>
              <div className="text-xs text-emerald-800 font-medium pt-1">
                Spectacle dependency: {iolRecommendations[selectedLifestyle].glassDependency}
              </div>
            </div>

            <button
              onClick={() => onSelectSurgeryForBooking(`Cataract Consultation - ${iolRecommendations[selectedLifestyle].type}`)}
              className="px-4 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              Discuss with Dr. Nanaware
            </button>
          </div>

        </div>

      </div>

      {/* Surgery Clinical Protocol Modal / Drawer */}
      {selectedSurgery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-800">
                  Clinical Surgical Overview
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-0.5">
                  {selectedSurgery.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSurgery(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6 text-sm text-slate-600">
              {/* Surgical procedure mechanism */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Procedure Mechanism & Technique
                </h4>
                <p className="leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  {selectedSurgery.procedureDetail}
                </p>
              </div>

              {/* Indications & Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Clinical Indications
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedSurgery.indications.map((ind, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Key Clinical Benefits
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedSurgery.keyBenefits.map((ben, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pre & Post-op Advice */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900">
                  <strong className="font-semibold block mb-1">Pre-Operative Care:</strong>
                  {selectedSurgery.preOpAdvice}
                </div>
                <div className="p-3.5 rounded-lg bg-cyan-50/70 border border-cyan-200/80 text-xs text-cyan-900">
                  <strong className="font-semibold block mb-1">Post-Operative Recovery Instructions:</strong>
                  {selectedSurgery.postOpAdvice}
                </div>
              </div>

              {/* Parameters Summary */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700 pt-2 border-t border-slate-100">
                <span>Duration: <strong>{selectedSurgery.duration}</strong></span>
                <span aria-hidden="true">·</span>
                <span>Anesthesia: <strong>{selectedSurgery.anesthesia}</strong></span>
                <span aria-hidden="true">·</span>
                <span>Recovery: <strong>{selectedSurgery.recoveryTime}</strong></span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedSurgery(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedSurgery.title;
                  setSelectedSurgery(null);
                  onSelectSurgeryForBooking(title);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg shadow-sm cursor-pointer"
              >
                Schedule Consultation for {selectedSurgery.title}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
