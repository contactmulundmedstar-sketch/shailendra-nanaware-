import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageSquare, Download, AlertCircle, ShieldCheck } from 'lucide-react';
import { doctorProfile } from '../data/doctorData';
import { AppointmentFormData } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  prefilledNotes?: string;
}

export const AppointmentModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  prefilledNotes = ''
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    serviceCategory: preselectedService || 'Cataract & Phaco Consultation',
    preferredDate: '',
    preferredSlot: 'Morning (10:00 AM – 4:00 PM)',
    notes: prefilledNotes || '',
    isSecondOpinion: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceCategory: preselectedService }));
    }
    if (prefilledNotes) {
      setFormData((prev) => ({ ...prev, notes: prefilledNotes }));
    }
  }, [preselectedService, prefilledNotes]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `MEC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  // Generate .ics calendar download
  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Mulund Eye Care//Appointment Calendar//EN',
      'BEGIN:VEVENT',
      `UID:${bookingRef}@mulundeyecare.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `SUMMARY:Eye Appointment with Dr. Shailendra Nanaware`,
      `DESCRIPTION:Patient: ${formData.fullName}\\nService: ${formData.serviceCategory}\\nSlot: ${formData.preferredSlot}\\nClinic: Mulund Eye Care, Mulund West, Mumbai`,
      `LOCATION:Mulund Eye Care, Shop No. 5, Morphosis Adagio, Deen Dayal Upadhyaya Marg, Dumping Road, Mulund West, Mumbai 400080`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Eye_Consultation_${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // WhatsApp formatted direct link
  const whatsappText = encodeURIComponent(
    `Hello Dr. Nanaware's Clinic (Mulund Eye Care),\nI have submitted an appointment request:\n\n*Reference ID:* ${bookingRef}\n*Patient Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Preferred Date:* ${formData.preferredDate}\n*Slot:* ${formData.preferredSlot}\n*Consultation:* ${formData.serviceCategory}\n${formData.isSecondOpinion ? '*Type:* Second Opinion\n' : ''}${formData.notes ? `*Notes:* ${formData.notes}\n` : ''}\nPlease confirm my appointment slot.`
  );
  const whatsappUrl = `https://wa.me/917777066990?text=${whatsappText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Mulund Eye Care · Outpatient Department
            </span>
            <h3 className="text-lg font-bold font-display mt-0.5">
              Consultation with Dr. Shailendra Nanaware
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            <div className="p-3 bg-cyan-50/70 rounded-xl border border-cyan-200/80 text-xs text-cyan-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-700 shrink-0" />
              <span>Direct priority scheduling. No advance payment required for OPD consultations.</span>
            </div>

            {/* Patient Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Patient Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Ramesh Kulkarni"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Phone & Age */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 98200 12345"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
                />
                {errors.phone && (
                  <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Age
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="e.g. 58"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="patient@example.com"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
              />
            </div>

            {/* Service Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Service or Treatment Concern *
              </label>
              <select
                value={formData.serviceCategory}
                onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 cursor-pointer"
              >
                <option value="Cataract & Phaco Consultation">Cataract & Phacoemulsification Evaluation</option>
                <option value="Refractive / LASIK Evaluation">Custom Blade-free LASIK / PRK Evaluation</option>
                <option value="Pediatric Eye Checkup & Squint">Pediatric Ophthalmology & Squint / Strabismus</option>
                <option value="Diabetic Retinopathy Screening">Diabetic Retinopathy & Macular Scan</option>
                <option value="Corneal Disorders & Keratoconus">Corneal Disease & Keratoplasty / C3R</option>
                <option value="Watering Eyes / Oculoplastics">Tear Duct Blockage (DCR) & Oculoplastics</option>
                <option value="Comprehensive General Eye Exam">Routine Eye Exam & Refraction (Spectacles/Contacts)</option>
                <option value="Second Surgical Opinion">Second Surgical Opinion (Prior Reports Available)</option>
              </select>
            </div>

            {/* Date and Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
                />
                {errors.preferredDate && (
                  <p className="text-xs text-rose-600 mt-1">{errors.preferredDate}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredSlot}
                  onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 cursor-pointer"
                >
                  <option value="Morning (10:00 AM – 4:00 PM)">Morning (10:00 AM – 4:00 PM)</option>
                  <option value="Evening (6:00 PM – 8:00 PM, Mon–Fri)">Evening (6:00 PM – 8:00 PM, Mon–Fri)</option>
                </select>
              </div>
            </div>

            {/* Second opinion toggle */}
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 pt-1">
              <input
                type="checkbox"
                checked={formData.isSecondOpinion}
                onChange={(e) => setFormData({ ...formData, isSecondOpinion: e.target.checked })}
                className="rounded text-cyan-700 focus:ring-cyan-600 w-4 h-4 cursor-pointer"
              />
              <span className="font-medium">This is a request for a Second Opinion on existing surgery recommendation</span>
            </label>

            {/* Clinical Notes / Symptoms */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Symptoms or Prior Eye History
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention any existing conditions (e.g. Diabetes, high eye pressure, reading strain)..."
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Confirm Appointment Request
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Ticket */
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Booking Request Registered
              </span>
              <h4 className="text-2xl font-bold text-slate-900 font-display">
                Thank You, {formData.fullName}
              </h4>
              <p className="text-xs text-slate-500">
                Reference ID: <strong className="font-mono text-slate-900 font-bold">{bookingRef}</strong>
              </p>
            </div>

            {/* Ticket Summary Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 text-slate-700">
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Consultant:</span>
                <span className="font-semibold text-slate-900">Dr. Shailendra Nanaware</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-slate-900">{formData.serviceCategory}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Appointment Date:</span>
                <span className="font-semibold text-slate-900">{formData.preferredDate}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Scheduled Slot:</span>
                <span className="font-semibold text-slate-900">{formData.preferredSlot}</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-slate-500">Clinic Location:</span>
                <span className="font-semibold text-slate-900">Shop No. 5, Morphosis Adagio, Mulund (W)</span>
              </div>
            </div>

            {/* Next Steps: WhatsApp & Calendar Download */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                Notify Clinic via WhatsApp (+91 77770 66990)
              </a>

              <button
                onClick={handleDownloadICS}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-700" />
                Download Calendar Reminder (.ics)
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Done / Return to Practice Page
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
