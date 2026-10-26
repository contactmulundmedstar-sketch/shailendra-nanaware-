import React from 'react';
import { Eye, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { doctorProfile } from '../data/doctorData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Doctor Credentials (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-0.5 overflow-hidden flex items-center justify-center shrink-0 border border-slate-700 shadow-2xs">
                <img
                  src="/assets/aistudio/S_7deb4b1d.jpg"
                  alt="Dr. Shailendra Nanaware SN Monogram Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white font-display block">
                  {doctorProfile.name}
                </span>
                <span className="text-xs text-cyan-400 font-medium">
                  {doctorProfile.titles} · Senior Ophthalmologist & Eye Surgeon
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Providing precision ophthalmic surgical care at {doctorProfile.clinicName}, Mulund West. With 26+ years of clinical excellence in sutureless cataract surgery, laser vision correction, and pediatric ophthalmology.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Medical Registration Verified · Maharashtra Medical Council (MMC)</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Clinical Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Doctor Profile & Qualifications
                </a>
              </li>
              <li>
                <a href="#surgeries" className="hover:text-white transition-colors">
                  Surgeries & Treatments
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Patient Testimonials & Outcomes
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  Clinical Case Studies (4)
                </a>
              </li>
              <li>
                <a href="#interactive-tools" className="hover:text-white transition-colors">
                  Interactive Vision Screeners
                </a>
              </li>
              <li>
                <a href="#clinic-photos" className="hover:text-white transition-colors">
                  Facility & Operating Theatre
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Clinic Hours & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Mulund Eye Care
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  {doctorProfile.clinicAddress}, {doctorProfile.clinicCity}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${doctorProfile.phone}`} className="hover:text-white">
                  {doctorProfile.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${doctorProfile.email}`} className="text-cyan-300 hover:underline">
                  {doctorProfile.email}
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              Active Member: Bombay Ophthalmologists Association (BOA) · All India Ophthalmological Society (AIOS)
            </div>
          </div>

        </div>

        {/* Medical Legal Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-4xl">
            <strong>Medical Disclaimer:</strong> The ophthalmic information and interactive screening modules (including the digital Amsler grid and Tumbling E acuity screener) presented on this portal are for informational and educational reference only. They are not intended as a substitute for professional medical advice, clinical diagnosis, or treatment by a licensed eye specialist. Always seek the advice of Dr. Shailendra Nanaware or another qualified ophthalmic physician for any symptoms regarding your ocular health.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 pt-2">
            <div>
              © {new Date().getFullYear()} Dr. Shailendra Nanaware · Mulund Eye Care. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>MBBS (Grant Medical College)</span>
              <span aria-hidden="true">·</span>
              <span>DOMS (KEM Hospital)</span>
              <span aria-hidden="true">·</span>
              <span>Mulund West, Mumbai</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
