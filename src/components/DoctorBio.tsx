import React from 'react';
import { GraduationCap, Award, Stethoscope, HeartHandshake, BookOpen, Building2 } from 'lucide-react';
import { doctorProfile } from '../data/doctorData';

export const DoctorBio: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-cyan-800 tracking-wider uppercase mb-2">
            Clinical Background & Alma Mater
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            A Quarter Century of Dedicated Ophthalmology Practice
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From the historic lecture halls of Sir JJ Hospital to advanced ophthalmic microsurgical suites in Mulund West, Dr. Shailendra Nanaware has dedicated his career to delivering accurate diagnoses and compassionate eye care.
          </p>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Clinical Philosophy & Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4 text-base leading-relaxed">
              {doctorProfile.aboutBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Doctor's Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-3 mb-2 text-cyan-800 font-semibold text-sm">
                  <Stethoscope className="w-5 h-5 text-cyan-700" />
                  <span>Diagnostic Precision</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Refusing rushed consultations. Every patient undergoes an in-depth ocular examination, anterior segment scan, and fundus inspection before recommending surgical intervention.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-3 mb-2 text-cyan-800 font-semibold text-sm">
                  <HeartHandshake className="w-5 h-5 text-cyan-700" />
                  <span>Empathetic Care</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Recognizing that eye ailments create high anxiety. Dr. Nanaware prioritizes unhurried patient counseling, transparent surgical risks/options, and gentle reassurance.
                </p>
              </div>
            </div>

            {/* Professional Memberships */}
            <div className="pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Professional Societies & Memberships
              </h4>
              <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-slate-700">
                {doctorProfile.memberships.map((membership, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                    {membership}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Credentials & Career Timeline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Credentials Card with Official SN Logo */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-700" />
                  Medical Qualifications
                </h3>
                
                {/* Official Monogram Logo */}
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 bg-white p-0.5 shadow-2xs">
                  <img
                    src="/assets/aistudio/S_7deb4b1d.jpg"
                    alt="Official SN Monogram"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            {/* Degree 1: MBBS */}
            <div className="relative pl-6 pb-6 border-l-2 border-cyan-700/40 space-y-1.5">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-700 ring-4 ring-white" />
              <div>
                <span className="text-sm font-bold text-slate-900">MBBS</span>
              </div>
              <div className="text-xs font-medium text-slate-800 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                Grant Medical College & Sir JJ Group of Hospitals, Mumbai
              </div>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                Completed undergraduate medical training at one of Asia's most historic medical academies with rigorous exposure to ophthalmology inpatient and emergency departments.
              </p>
            </div>

            {/* Degree 2: DOMS */}
            <div className="relative pl-6 pb-6 border-l-2 border-cyan-700/40 space-y-1.5">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-700 ring-4 ring-white" />
              <div>
                <span className="text-sm font-bold text-slate-900">DOMS (Ophthalmology)</span>
              </div>
              <div className="text-xs font-medium text-slate-800 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                King Edward Memorial (KEM) Hospital & Seth GS Medical College, Mumbai
              </div>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                Postgraduate specialization in Ophthalmic Medicine & Surgery with hands-on surgical training under renowned Indian academic ophthalmologists.
              </p>
            </div>

            {/* 26 Years of Clinical Career */}
            <div className="relative pl-6 space-y-1.5">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">26+ Years Clinical Excellence</span>
                <span className="text-xs font-semibold text-emerald-700 font-mono">Present</span>
              </div>
              <div className="text-xs font-medium text-slate-800">
                Mulund Eye Care & Reputed Tertiary Hospitals across India
              </div>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                Senior consultant managing complex anterior segment trauma, advanced cataracts, refractive correction, pediatric strabismus realignment, and diabetic retinopathy.
              </p>
            </div>

            {/* Academic papers note */}
            <div className="pt-4 border-t border-slate-200/80 flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular presenter and panelist in national ophthalmic workshops, continuing medical education (CME) seminars, and peer-reviewed clinical research papers.
              </p>
            </div>

          </div>

          {/* Clinical Eye Imaging Highlight: Retinal Fundus & Macula */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
              <img
                src="/src/assets/images/retina_fundus_macula_scan_1793053207056.jpg"
                alt="High definition fundus retinal scan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-xs space-y-1">
              <span className="text-[11px] font-semibold text-cyan-800 uppercase tracking-wider block">
                Digital Retinal Biomarkers
              </span>
              <div className="font-bold text-slate-900 font-display">
                In-Depth Diabetic & Macular Evaluation
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Early detection of microvascular leaking, foveal contour changes, and glaucoma optic cup changes.
              </p>
            </div>
          </div>

        </div>

        </div>

      </div>
    </section>
  );
};
