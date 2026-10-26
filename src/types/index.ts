export interface DoctorProfile {
  name: string;
  titles: string;
  specialties: string[];
  experienceYears: number;
  registrationStatus: string;
  registrationCouncil: string;
  clinicName: string;
  clinicAddress: string;
  clinicCity: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  education: EducationItem[];
  memberships: string[];
  aboutBio: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: number;
  details?: string;
}

export interface SurgeryTreatment {
  id: string;
  title: string;
  category: 'cataract' | 'refractive' | 'pediatric' | 'cornea' | 'retina' | 'oculoplastic';
  summary: string;
  indications: string[];
  procedureDetail: string;
  anesthesia: string;
  duration: string;
  recoveryTime: string;
  keyBenefits: string[];
  preOpAdvice: string;
  postOpAdvice: string;
}

export interface PatientStory {
  id: string;
  patientName: string;
  age: number;
  condition: string;
  treatment: string;
  initialSymptoms: string;
  clinicalOutcome: string;
  quote: string;
  recoveryDuration: string;
  visualAcuityBefore: string;
  visualAcuityAfter: string;
  date: string;
}

export interface PatientTestimonial {
  id: string;
  patientName: string;
  age: number;
  location: string;
  profession?: string;
  specialtyCategory: 'cataract' | 'refractive' | 'pediatric' | 'retina' | 'cornea' | 'oculoplastic';
  procedure: string;
  condition: string;
  preOpVision: string;
  postOpVision: string;
  recoveryTime: string;
  treatmentOutcome: string;
  quote: string;
  rating: number;
  verifiedDate: string;
  highlightBenefit: string;
}

export interface ClinicPhoto {
  id: string;
  title: string;
  caption: string;
  category: 'consultation' | 'diagnostics' | 'operating_theatre' | 'refractive_laser';
  imagePath: string;
  highlights: string[];
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  serviceCategory: string;
  preferredDate: string;
  preferredSlot: string;
  notes: string;
  isSecondOpinion: boolean;
}
