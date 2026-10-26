import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronDown, ChevronUp, AlertTriangle, ExternalLink } from 'lucide-react';
import { doctorProfile, clinicTimings, faqList } from '../data/doctorData';

interface ContactProps {
  onOpenBooking: () => void;
}

export const ContactLocation: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="location" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-cyan-800 tracking-wider uppercase mb-2">
            Practice Location & Patient Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Mulund Eye Care · Clinic Hours & Directions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Conveniently situated in the heart of Mulund West, minutes from Mulund Railway Station, with dedicated parking and full wheelchair accessibility.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Card / Hours; Right: Map & Emergency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Hours, Contact details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {doctorProfile.clinicName}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Consulting Suite of Dr. Shailendra Nanaware (MBBS, DOMS)
                </p>
              </div>

              {/* Address with Google Maps link */}
              <div className="flex items-start gap-3.5 text-sm text-slate-700">
                <MapPin className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">{doctorProfile.clinicAddress}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{doctorProfile.clinicCity}</div>
                  <a
                    href="https://maps.google.com/?q=Shop+No+5+Morphosis+Adagio+Deen+Dayal+Upadhaya+Marg+Dumping+Road+Mulund+West+Mumbai+400080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-800 hover:text-cyan-900 mt-2"
                  >
                    Open in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  <Clock className="w-4 h-4 text-cyan-700" />
                  OPD Consultation Hours
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  {clinicTimings.map((timing, i) => (
                    <div key={i} className="flex items-center justify-between py-1 border-b border-slate-50">
                      <span className="font-medium text-slate-800">{timing.days}</span>
                      <span className="font-semibold text-cyan-900">{timing.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Channels */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-700" />
                    Reception / Enquiries:
                  </span>
                  <a href={`tel:${doctorProfile.phone}`} className="font-bold text-slate-900 hover:text-cyan-700">
                    {doctorProfile.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-700" />
                    Official Email:
                  </span>
                  <a href={`mailto:${doctorProfile.email}`} className="font-bold text-cyan-800 hover:underline">
                    {doctorProfile.email}
                  </a>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  Book Appointment with Dr. Nanaware
                </button>
              </div>

            </div>

            {/* Cashless Insurance Desk */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Cashless Mediclaim & Insurance Desk
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We provide complete cashless hospital claim processing for major health insurers and Third-Party Administrators (TPAs) for day-care surgical procedures including Cataract, Glaucoma filtration, and Keratoplasty.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium text-slate-600">
                <span className="bg-slate-100 px-2.5 py-1 rounded">Star Health</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">HDFC ERGO</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">ICICI Lombard</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Care Health</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Medi Assist</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Paramount TPA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Emergency protocol + Interactive FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Ophthalmic Emergency Protocol Box */}
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200/90 text-rose-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-rose-900">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                Emergency Ophthalmic Care Protocol
              </div>
              <p className="text-xs leading-relaxed text-rose-900/90">
                In cases of acute ocular trauma, chemical splash/burn, sudden complete vision blackout, or severe unbearable eye pain with vomiting, proceed immediately to the emergency triage or call our priority on-call line:
              </p>
              <div className="pt-1 flex items-center gap-3">
                <a
                  href={`tel:${doctorProfile.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 text-white font-bold rounded-lg text-xs hover:bg-rose-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Emergency Desk
                </a>
                <span className="text-xs text-rose-800">Available during active clinic hours</span>
              </div>
            </div>

            {/* Interactive FAQ Accordion */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Key answers regarding cataract recovery, LASIK eligibility, and pediatric care.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {faqList.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200/90 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100/70 cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {faq.q}
                      </span>
                      {openFaqIndex === idx ? (
                        <ChevronUp className="w-4 h-4 text-cyan-700 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {openFaqIndex === idx && (
                      <div className="p-4 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
