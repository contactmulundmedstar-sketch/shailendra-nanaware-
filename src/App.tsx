import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DoctorBio } from './components/DoctorBio';
import { SurgeriesAndTreatments } from './components/SurgeriesAndTreatments';
import { PatientTestimonials } from './components/PatientTestimonials';
import { PatientStories } from './components/PatientStories';
import { InteractiveEyeTools } from './components/InteractiveEyeTools';
import { ClinicPhotos } from './components/ClinicPhotos';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [prefilledNotes, setPrefilledNotes] = useState('');

  const handleOpenBooking = (service = '', notes = '') => {
    setPreselectedService(service);
    setPrefilledNotes(notes);
    setIsBookingOpen(true);
  };

  const handleSelectSurgeryForBooking = (surgeryTitle: string) => {
    handleOpenBooking(surgeryTitle, `Consultation requested for ${surgeryTitle}.`);
  };

  const handleOpenBookingWithNotes = (notes: string) => {
    handleOpenBooking('Comprehensive General Eye Exam', notes);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Primary Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Doctor Bio & Academic Credentials */}
        <DoctorBio />

        {/* Surgeries & Clinical Directory */}
        <SurgeriesAndTreatments onSelectSurgeryForBooking={handleSelectSurgeryForBooking} />

        {/* Patient Testimonials with Carousel & Grid Layout + Treatment Outcomes */}
        <PatientTestimonials onSelectSurgeryForBooking={handleSelectSurgeryForBooking} />

        {/* In-Depth Patient Recovery Case Studies */}
        <PatientStories />

        {/* Self-Assessment Vision Screening Tools */}
        <InteractiveEyeTools onOpenBookingWithNotes={handleOpenBookingWithNotes} />

        {/* Clinic & Operating Theatre Gallery */}
        <ClinicPhotos />

        {/* Location, Hours, Emergency & FAQ */}
        <ContactLocation onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setPreselectedService('');
          setPrefilledNotes('');
        }}
        preselectedService={preselectedService}
        prefilledNotes={prefilledNotes}
      />
    </div>
  );
}
