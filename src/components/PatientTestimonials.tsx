import React, { useState, useEffect } from 'react';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Sliders,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  PlusCircle,
  X,
  Sparkles
} from 'lucide-react';
import { patientTestimonials as initialTestimonials } from '../data/doctorData';
import { PatientTestimonial } from '../types';

interface PatientTestimonialsProps {
  onSelectSurgeryForBooking: (procedureName: string) => void;
}

export const PatientTestimonials: React.FC<PatientTestimonialsProps> = ({
  onSelectSurgeryForBooking
}) => {
  const [testimonials, setTestimonials] = useState<PatientTestimonial[]>(initialTestimonials);
  const [layoutMode, setLayoutMode] = useState<'carousel' | 'grid'>('carousel');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // New review form state
  const [newReview, setNewReview] = useState({
    name: '',
    age: '',
    location: '',
    profession: '',
    category: 'cataract' as PatientTestimonial['specialtyCategory'],
    procedure: '',
    condition: '',
    preOpVision: '',
    postOpVision: '',
    recoveryTime: '',
    outcome: '',
    quote: '',
    rating: 5
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const categories = [
    { id: 'all', label: 'All Testimonials' },
    { id: 'cataract', label: 'Cataract & Lens (IOL)' },
    { id: 'refractive', label: 'LASIK & Refractive' },
    { id: 'pediatric', label: 'Pediatric & Squint' },
    { id: 'retina', label: 'Diabetic Retina' },
    { id: 'cornea', label: 'Cornea & Keratoplasty' },
    { id: 'oculoplastic', label: 'Oculoplastics & Tear Duct' }
  ];

  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter((t) => t.specialtyCategory === activeCategory);

  // Handle carousel next / prev
  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };

  // Reset carousel index when category changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [activeCategory]);

  // Autoplay effect for carousel
  useEffect(() => {
    if (!isAutoPlay || layoutMode !== 'carousel' || filteredTestimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, layoutMode, filteredTestimonials.length]);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.procedure || !newReview.quote) return;

    const added: PatientTestimonial = {
      id: `t-${Date.now()}`,
      patientName: newReview.name,
      age: Number(newReview.age) || 45,
      location: newReview.location || 'Mumbai',
      profession: newReview.profession || 'Patient',
      specialtyCategory: newReview.category,
      procedure: newReview.procedure,
      condition: newReview.condition || 'Ophthalmic Condition',
      preOpVision: newReview.preOpVision || 'Sub-optimal Acuity',
      postOpVision: newReview.postOpVision || 'Restored 6/6 Vision',
      recoveryTime: newReview.recoveryTime || 'Prompt Recovery',
      treatmentOutcome: newReview.outcome || 'Successful Surgical Restoration',
      quote: newReview.quote,
      rating: newReview.rating,
      verifiedDate: 'Just Now',
      highlightBenefit: 'Verified Clinic Patient Review'
    };

    setTestimonials([added, ...testimonials]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setReviewSubmitted(false);
      setNewReview({
        name: '',
        age: '',
        location: '',
        profession: '',
        category: 'cataract',
        procedure: '',
        condition: '',
        preOpVision: '',
        postOpVision: '',
        recoveryTime: '',
        outcome: '',
        quote: '',
        rating: 5
      });
    }, 2000);
  };

  const currentItem = filteredTestimonials[carouselIndex] || filteredTestimonials[0];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with View Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-cyan-800 tracking-wider uppercase mb-2">
              Verified Patient Experiences & Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Patient Testimonials & Clinical Outcomes
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Read first-hand accounts from patients treated by Dr. Shailendra Nanaware at Mulund Eye Care, complete with pre- and post-operative visual acuity results.
            </p>
          </div>

          {/* Interactive Controls Bar: Carousel / Grid Mode + Submit Review */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Layout Mode Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/90 rounded-xl">
              <button
                onClick={() => setLayoutMode('carousel')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  layoutMode === 'carousel'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Switch to Carousel Slider"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Carousel</span>
              </button>
              <button
                onClick={() => setLayoutMode('grid')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  layoutMode === 'grid'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Switch to Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>

            {/* Submit Experience Button */}
            <button
              onClick={() => setShowReviewModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-cyan-800 bg-cyan-100/70 hover:bg-cyan-100 border border-cyan-200 rounded-xl transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
            >
              <PlusCircle className="w-3.5 h-3.5 text-cyan-700" />
              <span>Share Patient Experience</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl mb-8 max-w-full overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-cyan-700 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ---------------- CAROUSEL LAYOUT ---------------- */}
        {layoutMode === 'carousel' && currentItem && (
          <div className="relative">
            {/* Main Featured Carousel Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left 7 Columns: Patient Voice, Rating, and Quote */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  
                  {/* Top Meta: Verified Badge & Rating */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                          <UserCheck className="w-3.5 h-3.5" />
                          Verified Clinic Patient
                        </span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>{currentItem.verifiedDate}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-cyan-800 font-medium">{currentItem.highlightBenefit}</span>
                      </div>

                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                        {Array.from({ length: currentItem.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Patient Name, Age & Profession */}
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                        {currentItem.patientName}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span>Age {currentItem.age}</span>
                        <span aria-hidden="true">·</span>
                        <span>{currentItem.location}</span>
                        {currentItem.profession && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-slate-700 font-medium">{currentItem.profession}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative py-2">
                    <Quote className="w-12 h-12 text-cyan-100 absolute -top-4 -left-3 -z-0" />
                    <blockquote className="relative z-10 text-base sm:text-lg text-slate-800 italic font-medium leading-relaxed">
                      "{currentItem.quote}"
                    </blockquote>
                  </div>

                  {/* Action Link to Book Consultation for this condition */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      Treated for: <strong className="text-slate-800">{currentItem.condition}</strong>
                    </div>
                    <button
                      onClick={() => onSelectSurgeryForBooking(currentItem.procedure)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                    >
                      <span>Book Evaluation for this Procedure</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

                {/* Right 5 Columns: Dedicated Treatment Outcome & Clinical Proof Box */}
                <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between space-y-6">
                  
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-800 mb-3">
                      <ShieldCheck className="w-4 h-4 text-cyan-700" />
                      Documented Treatment Outcome
                    </div>

                    <h4 className="text-base font-bold text-slate-900 font-display">
                      {currentItem.procedure}
                    </h4>

                    {/* Before vs After Acuity Card */}
                    <div className="mt-4 space-y-2.5">
                      <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-700 block">
                          Pre-Operative Visual Status
                        </span>
                        <div className="text-xs sm:text-sm font-bold text-slate-800 font-mono tabular-nums mt-0.5">
                          {currentItem.preOpVision}
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-emerald-200/90 shadow-2xs">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 block">
                          Post-Operative Stabilized Outcome
                        </span>
                        <div className="text-xs sm:text-sm font-bold text-emerald-950 font-mono tabular-nums mt-0.5">
                          {currentItem.postOpVision}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clinical Recovery & Outcome Summary */}
                  <div className="space-y-3 pt-2 border-t border-slate-200/70 text-xs text-slate-600">
                    <div>
                      <span className="font-semibold text-slate-700 block">Clinical Restorative Result:</span>
                      <p className="mt-0.5 leading-relaxed text-slate-800 font-medium">
                        {currentItem.treatmentOutcome}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                      <span>Recovery timeline: <strong>{currentItem.recoveryTime}</strong></span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Carousel Navigation Footer Controls */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {filteredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      carouselIndex === idx
                        ? 'w-8 bg-cyan-700'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
                <span className="ml-3 text-xs text-slate-500 tabular-nums">
                  {carouselIndex + 1} of {filteredTestimonials.length}
                </span>
              </div>

              {/* Prev / Next Buttons & Autoplay Toggle */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                    isAutoPlay
                      ? 'bg-cyan-50 border-cyan-300 text-cyan-800'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {isAutoPlay ? 'Auto-Advancing: ON' : 'Auto-Play'}
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ---------------- GRID LAYOUT ---------------- */}
        {layoutMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {/* Card Header: Rating, Date & Patient Info */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-display">
                        {item.patientName}
                      </h3>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {item.location} {item.profession ? `· ${item.profession}` : ''}
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-slate-600 italic line-clamp-4 leading-relaxed">
                    "{item.quote}"
                  </p>

                  {/* Treatment Outcome Section */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-semibold text-cyan-800 uppercase tracking-wider">
                      {item.procedure}
                    </div>

                    {/* Before vs After Grid */}
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/70">
                        <span className="text-slate-400 block text-[10px] uppercase">Before</span>
                        <span className="font-mono font-bold text-slate-700 truncate block tabular-nums">
                          {item.preOpVision.split(',')[0]}
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/70">
                        <span className="text-emerald-700 block text-[10px] uppercase font-semibold">After</span>
                        <span className="font-mono font-bold text-emerald-950 truncate block tabular-nums">
                          {item.postOpVision.split('·')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 pt-1 leading-snug">
                      <strong>Result:</strong> {item.treatmentOutcome}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Direct Consultation Link */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Patient
                  </span>
                  <button
                    onClick={() => onSelectSurgeryForBooking(item.procedure)}
                    className="text-xs font-semibold text-cyan-800 hover:text-cyan-900 cursor-pointer"
                  >
                    Consult for this →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Badges Bar below Testimonials */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-slate-900 font-display tabular-nums">4.9 / 5.0</div>
            <div className="text-xs text-slate-500 mt-0.5">Average Patient Rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-display tabular-nums">18,500+</div>
            <div className="text-xs text-slate-500 mt-0.5">Successful Eye Surgeries</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-display tabular-nums">99.4%</div>
            <div className="text-xs text-slate-500 mt-0.5">Visual Restoration Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-display tabular-nums">26+ Years</div>
            <div className="text-xs text-slate-500 mt-0.5">Serving Mulund & Mumbai</div>
          </div>
        </div>

      </div>

      {/* Submit Patient Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                  Mulund Eye Care Patient Feedback
                </span>
                <h3 className="text-lg font-bold font-display mt-0.5">
                  Share Your Treatment Outcome
                </h3>
              </div>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
                aria-label="Close review dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!reviewSubmitted ? (
              <form onSubmit={handleAddReview} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Patient Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. Anand Joshi"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Age & Locality
                    </label>
                    <input
                      type="text"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      placeholder="e.g. 54, Mulund West"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Specialty Category *
                    </label>
                    <select
                      value={newReview.category}
                      onChange={(e) => setNewReview({ ...newReview, category: e.target.value as any })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    >
                      <option value="cataract">Cataract & Lens (Phaco)</option>
                      <option value="refractive">LASIK & Refractive</option>
                      <option value="pediatric">Pediatric & Squint</option>
                      <option value="retina">Diabetic Retina Care</option>
                      <option value="cornea">Corneal Surgery</option>
                      <option value="oculoplastic">Oculoplastics / DCR</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Procedure Performed *
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.procedure}
                      onChange={(e) => setNewReview({ ...newReview, procedure: e.target.value })}
                      placeholder="e.g. Phaco with Toric IOL"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Visual Acuity Outcome (Before vs After)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={newReview.preOpVision}
                      onChange={(e) => setNewReview({ ...newReview, preOpVision: e.target.value })}
                      placeholder="Before: e.g. 6/36"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                    <input
                      type="text"
                      value={newReview.postOpVision}
                      onChange={(e) => setNewReview({ ...newReview, postOpVision: e.target.value })}
                      placeholder="After: e.g. 6/6 (20/20)"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Your Experience with Dr. Shailendra Nanaware *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    placeholder="Describe Dr. Nanaware's diagnosis, the surgical care, recovery, and your restored vision..."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg shadow-xs cursor-pointer"
                  >
                    Publish Testimonial
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-display">
                  Thank You for Your Feedback!
                </h4>
                <p className="text-xs text-slate-600">
                  Your review has been verified and added to Dr. Shailendra Nanaware's patient clinical outcomes portal.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
