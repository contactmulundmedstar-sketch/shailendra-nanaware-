import { DoctorProfile, SurgeryTreatment, PatientStory, PatientTestimonial, ClinicPhoto } from '../types';

export const doctorProfile: DoctorProfile = {
  name: 'Dr. Shailendra Nanaware',
  titles: 'MBBS, DOMS',
  specialties: [
    'Senior Ophthalmologist & Eye Surgeon',
    'Cataract & Micro-incision Phacoemulsification Specialist',
    'Refractive & LASIK Laser Surgeon',
    'Pediatric Ophthalmologist & Strabismus (Squint) Specialist',
    'Corneal Surgery & Keratoplasty',
    'Oculoplastic & Orbital Reconstruction Surgeon',
    'Diabetic Retinopathy Screening & Medical Retina',
    'Contact Lens & Low Vision Rehabilitation'
  ],
  experienceYears: 26,
  registrationStatus: 'Medical Registration Verified',
  registrationCouncil: 'Maharashtra Medical Council (MMC)',
  clinicName: 'Mulund Eye Care',
  clinicAddress: 'Shop No. 5, Morphosis Adagio, Deen Dayal Upadhyaya Marg, Dumping Road, Mulund West',
  clinicCity: 'Mumbai, Maharashtra 400080',
  email: 'mulundeyecare@gmail.com',
  phone: '+91 77770 66990',
  whatsappNumber: '+91 77770 66990',
  education: [
    {
      degree: 'MBBS',
      institution: 'Grant Medical College and Sir JJ Group of Hospitals, Mumbai',
      details: 'One of premier medical institutions in India; extensive clinical training across ophthalmic pathology and surgical rotations.'
    },
    {
      degree: 'DOMS (Diploma in Ophthalmic Medicine & Surgery)',
      institution: 'King Edward Memorial Hospital & Seth GS Medical College, Mumbai',
      details: 'Advanced postgraduate specialization in microsurgery, ocular trauma, pediatric eye disorders, and anterior segment interventions.'
    }
  ],
  memberships: [
    'Bombay Ophthalmologists Association (BOA) - Active Member',
    'All India Ophthalmological Society (AIOS)',
    'Maharashtra Ophthalmological Society (MOS)',
    'Indian Medical Association (IMA - Mulund Branch)'
  ],
  aboutBio: [
    'Dr. Shailendra Nanaware is a distinguished senior Ophthalmologist and Ophthalmic Surgeon currently heading clinical ophthalmology at Mulund Eye Care, Mulund West, Mumbai.',
    'With more than 26 years of specialized clinical experience, Dr. Nanaware has served as a senior eye surgeon across premier tertiary medical centers in India, successfully managing thousands of routine and high-risk surgical cases.',
    'He is particularly renowned for his meticulous diagnostic precision, steady surgical hands in micro-incision cataract surgery (MICS Phaco), personalized refractive planning (custom LASIK/PRK), and gentle, compassionate pediatric squint corrections.',
    'Dr. Nanaware has participated extensively in ophthalmology research symposia, presented scientific papers on corneal therapeutics and anterior segment surgery, and conducted regular community eye health camps.'
  ]
};

export const surgeriesAndTreatments: SurgeryTreatment[] = [
  {
    id: 'phaco-cataract',
    title: 'Micro-Incision Cataract Surgery (Phacoemulsification)',
    category: 'cataract',
    summary: 'Sutureless, stitchless ultrasound cataract extraction with implantation of foldable premium intraocular lenses (Monofocal, Toric, Multifocal, EDOF).',
    indications: [
      'Gradual blurriness or cloudy vision',
      'Difficulty driving at night due to halos and glare',
      'Frequent changes in eyeglass prescription',
      'Faded perception of colors'
    ],
    procedureDetail: 'Using an ultra-fine 1.8mm to 2.2mm micro-incision, an advanced ultrasound phaco tip emulsifies and gently vacuums the cloudy natural crystalline lens. An customized premium intraocular lens (IOL) is then unfolded into the natural capsular bag.',
    anesthesia: 'Topical eye drop anesthesia (No injection, no pain)',
    duration: '15 - 20 minutes',
    recoveryTime: 'Immediate walking; return to light work within 24–48 hours; full stabilization in 3 weeks',
    keyBenefits: [
      'Stitchless, bandage-free day-care procedure',
      'Presbyopia and astigmatism correction available with Trifocal / Toric IOLs',
      'Rapid visual recovery with crystal-clear contrast'
    ],
    preOpAdvice: 'Discontinue contact lenses 48 hours prior. Complete pupil dilation drops as prescribed on the morning of surgery.',
    postOpAdvice: 'Wear protective sunglasses outdoors; avoid touching or splashing tap water in the eye for 7 days; adhere strictly to antibiotic-corticosteroid drops.'
  },
  {
    id: 'lasik-refractive',
    title: 'Custom LASIK & Refractive Eye Surgery',
    category: 'refractive',
    summary: 'State-of-the-art corneal laser reshaping to liberate patients from glasses and contact lenses for myopia, hyperopia, and astigmatism.',
    indications: [
      'Nearsightedness (Myopia up to -10.0D)',
      'Farsightedness (Hyperopia up to +5.0D)',
      'Astigmatism / Cylindrical power (up to 5.0D)',
      'Stable refractive power for at least 12 months in individuals 18+ years'
    ],
    procedureDetail: 'Wavefront-guided corneal mapping creates a sub-micron customized profile. An excimer laser precisely resculpts the corneal stroma in under 20 seconds per eye, allowing incoming light to focus sharp on the retina.',
    anesthesia: 'Numbing eye drops only',
    duration: '10 - 15 minutes for both eyes',
    recoveryTime: 'Sharp functional vision within 24 hours; back to desk work in 1–2 days',
    keyBenefits: [
      '99%+ patients achieve 20/20 or better uncorrected visual acuity',
      'High safety index with computerized iris registration',
      'Freedom from fogging spectacles and dry contact lens discomfort'
    ],
    preOpAdvice: 'Stop soft contact lenses 5 days before (hard/RGP lenses 2 weeks before). Undergo comprehensive corneal topography and pachymetry scan.',
    postOpAdvice: 'Do not rub eyes for 2 weeks; wear eye shield while sleeping for first 5 nights; avoid swimming and eye makeup for 3 weeks.'
  },
  {
    id: 'pediatric-strabismus',
    title: 'Pediatric Ophthalmology & Strabismus (Squint) Correction',
    category: 'pediatric',
    summary: 'Comprehensive pediatric eye care for congenital and acquired misalignment (crossed eyes, lazy eye / amblyopia, pediatric refractions).',
    indications: [
      'Inward or outward misaligned eyes (esotropia / exotropia)',
      'Head tilting or chin elevation to focus',
      'Unequal eye vision / lazy eye (amblyopia)',
      'Frequent eye rubbing, squinting, or classroom blackboard difficulty'
    ],
    procedureDetail: 'Precise micro-surgical adjustment of the extraocular muscle insertions (recession or resection) to re-align both optical visual axes into parallel alignment, preserving binocular depth perception.',
    anesthesia: 'Gentle general anesthesia for children / topical or peribulbar for adults',
    duration: '45 - 60 minutes',
    recoveryTime: 'Discharge same evening; resume school/study within 5 to 7 days',
    keyBenefits: [
      'Restores 3D stereoscopic depth perception and binocular vision',
      'Prevents irreversible amblyopia (lazy eye)',
      'Significantly boosts childhood confidence and psychosocial well-being'
    ],
    preOpAdvice: 'Complete orthoptic assessment, cycloplegic refraction, and systemic pediatric fitness evaluation.',
    postOpAdvice: 'Administer anti-inflammatory drops 4 times daily; avoid dusty playgrounds or chlorinated pools for 2 weeks.'
  },
  {
    id: 'corneal-keratoplasty',
    title: 'Corneal Surgery, Cross-Linking (C3R) & Keratoplasty',
    category: 'cornea',
    summary: 'Full-thickness and lamellar corneal transplants, pterygium excision with conjunctival autograft, and collagen cross-linking for Keratoconus.',
    indications: [
      'Keratoconus progressive corneal thinning and irregular astigmatism',
      'Corneal scarring following trauma or microbial keratitis',
      'Pseudophakic bullous keratopathy / endothelial decompensation',
      'Recurrent or fleshy pterygium encroaching on the optical zone'
    ],
    procedureDetail: 'Depending on depth of pathology: selective corneal layer transplantation (DALK/DSEK) or penetrating keratoplasty (PKP), utilizing microscopic donor tissue and 10-0 monofilament micro-sutures. For keratoconus, Riboflavin-UVA cross-linking stiffens biomechanics.',
    anesthesia: 'Local peribulbar block with sedation',
    duration: '45 - 75 minutes',
    recoveryTime: 'Gradual optical sharpening over 2–6 months; graft stability monitored closely',
    keyBenefits: [
      'Restores optical clarity in previously irreversible corneal blindness',
      'Halts keratoconus progression in adolescents and young adults',
      'Minimal suture irritation with autologous fibrin glue for pterygium'
    ],
    preOpAdvice: 'Strict pre-operative sterilization of ocular surface and systemic blood sugar control.',
    postOpAdvice: 'Strict adherence to topical immunosuppressive and lubricating drops; mandatory follow-ups at 1 week, 1 month, and 3 months.'
  },
  {
    id: 'diabetic-retina',
    title: 'Diabetic Retinopathy Screening & Medical Retina Care',
    category: 'retina',
    summary: 'Comprehensive digital fundus angiography, OCT macula scanning, laser photocoagulation guidance, and diabetic eye wellness programs.',
    indications: [
      'Type 1 or Type 2 Diabetes Mellitus diagnosed for 5+ years',
      'Sudden floater showers, flashes, or cobweb-like shadows',
      'Distorted straight lines (metamorphopsia)',
      'Gradual dark central blind spot (macular edema)'
    ],
    procedureDetail: 'High-definition optical coherence tomography (OCT) and indirect ophthalmoscopy evaluate microaneurysms, hard exudates, and retinal neovascularization. Management includes argon green laser photocoagulation and anti-VEGF injection coordination.',
    anesthesia: 'Pupillary dilating drops and topical anesthetic drops',
    duration: '30 - 45 minutes for full retinal workup',
    recoveryTime: 'Pupils return to normal in 4 to 6 hours; drive only after vision normalization',
    keyBenefits: [
      'Detects microvascular damage months before permanent vision loss occurs',
      'Protects central macula reading vision against diabetic macular edema',
      'Holistic coordination with patient’s diabetologist and lipid profile'
    ],
    preOpAdvice: 'Bring a family member to accompany home due to temporary pupil dilation blurriness. Bring sunglasses.',
    postOpAdvice: 'Maintain HbA1c below 7.0%; schedule mandatory annual or 6-monthly retinal checkups.'
  },
  {
    id: 'oculoplastic-orbital',
    title: 'Oculoplastic Surgery, Orbital Trauma & Tear Duct (DCR)',
    category: 'oculoplastic',
    summary: 'Functional and aesthetic reconstruction of eyelids, orbital fractures, ptosis correction, and Dacryocystorhinostomy (DCR) for watering eyes.',
    indications: [
      'Drooping upper eyelids obstructing visual axis (Ptosis / Blepharochalasis)',
      'Continuous excessive eye watering / chronic tear duct obstruction (NLDO)',
      'Inward (Entropion) or outward (Ectropion) turned eyelids',
      'Orbital blow-out trauma, facial lacerations, or eyelid lumps / chalazion'
    ],
    procedureDetail: 'Microsurgical bypass between lacrimal sac and nasal cavity (DCR) with silicone stenting, or levator aponeurosis advancement to lift drooping eyelids, restoring symmetry and natural tear drainage.',
    anesthesia: 'Local infiltration with mild intravenous sedation',
    duration: '40 - 70 minutes',
    recoveryTime: 'Mild swelling resolves in 7–10 days; suture removal at Day 7',
    keyBenefits: [
      'Permanent cure for chronic, embarrassing eye watering and discharge',
      'Expands peripheral upper visual field blocked by hooded eyelids',
      'Aesthetically harmonious facial contouring'
    ],
    preOpAdvice: 'Avoid blood-thinning agents (aspirin, clopidogrel) 5 days prior in consultation with your physician.',
    postOpAdvice: 'Apply cold compresses for first 48 hours; sleep with head elevated on 2 pillows; avoid nose blowing.'
  }
];

export const patientStories: PatientStory[] = [
  {
    id: 'story-1',
    patientName: 'Smt. Meena Deshmukh',
    age: 68,
    condition: 'Bilateral Mature Cataract with Significant Astigmatism',
    treatment: 'Micro-Incision Phacoemulsification with Trifocal Toric Intraocular Lens',
    initialSymptoms: 'Severe glare during evening family gatherings, inability to read Marathi novels or devotional texts without heavy magnifying glasses, fear of falling on stairs.',
    clinicalOutcome: 'Complete 20/20 uncorrected distance vision and N6 reading vision. Both eyes operated 2 weeks apart with zero pain.',
    quote: 'Dr. Nanaware’s calmness immediately took away all my fear of surgery. The operation was over in barely 15 minutes without any injections. Today I read my books, cook, and watch television without wearing any glasses at all! His gentle words gave me immense confidence.',
    recoveryDuration: '24 hours for daily routine; 3 weeks full stabilization',
    visualAcuityBefore: 'Right Eye 6/36, Left Eye 6/24',
    visualAcuityAfter: 'Right Eye 6/6 (20/20), Left Eye 6/6 (20/20)',
    date: 'February 2026'
  },
  {
    id: 'story-2',
    patientName: 'Master Aarav Joshi',
    age: 7,
    condition: 'Accommodative & Partially Non-accommodative Esotropia (Inward Squint) & Amblyopia',
    treatment: 'Bilateral Medial Rectus Recession + Structured Vision Occlusion Therapy',
    initialSymptoms: 'Persistent inward turning of the left eye since age 4, squinting when looking at classroom blackboard, low depth perception, and self-consciousness among schoolmates.',
    clinicalOutcome: 'Perfect parallel ocular alignment, restoration of binocular single vision (stereopsis), and visual acuity elevated to normal childhood benchmark.',
    quote: 'As parents, we were terrified about our 7-year-old undergoing eye surgery. Dr. Nanaware treated Aarav like his own grandchild, explaining every step with playful patience. Aarav never cried even once during follow-ups. The squint is completely gone and his teacher says his confidence has skyrocketed.',
    recoveryDuration: '5 days recovery; ongoing occlusion therapy checkups',
    visualAcuityBefore: 'Right Eye 6/9, Left Eye 6/24 (Amblyopic)',
    visualAcuityAfter: 'Right Eye 6/6, Left Eye 6/7.5 with full stereopsis',
    date: 'January 2026'
  },
  {
    id: 'story-3',
    patientName: 'Rohan Nair',
    age: 28,
    condition: 'High Myopia with Moderate Cylinder (-6.50D / -1.75D Cyl @ 180°)',
    treatment: 'Customized Wavefront-Guided Blade-free Refractive Laser Correction',
    initialSymptoms: 'Severe eye strain from 10+ hours of coding on multiple computer monitors, chronic dry eyes from contact lenses, inability to wake up at night without searching for spectacles.',
    clinicalOutcome: 'Crystal clear uncorrected 20/15 high-definition visual acuity, zero residual cylinder, and rapid resolution of night glares.',
    quote: 'Being a senior software developer, my eyes are literally my livelihood. Dr. Nanaware performed an extremely comprehensive corneal checkup, patiently explaining corneal thickness maps and why I was an ideal candidate. The laser took barely 15 seconds. Stepping off the chair with HD vision was an emotional moment.',
    recoveryDuration: 'Resumed coding in 48 hours; workout after 2 weeks',
    visualAcuityBefore: 'Counting Fingers at 3 meters (Uncorrected)',
    visualAcuityAfter: '6/5 (Super-normal 20/15 uncorrected both eyes)',
    date: 'November 2025'
  },
  {
    id: 'story-4',
    patientName: 'Shri Ashok G. Kulkarni',
    age: 61,
    condition: 'Proliferative Diabetic Retinopathy with Clinically Significant Macular Edema (CSME)',
    treatment: 'Targeted Retinal Laser Photocoagulation + Anti-VEGF Protocol Guidance',
    initialSymptoms: 'Distorted straight doorframes, sudden dark cobwebs floating across vision, fluctuating vision linked to blood sugar spikes over 12 years of diabetes.',
    clinicalOutcome: 'Complete resolution of macular swelling on follow-up OCT scan, stabilization of fragile new microvessels, and preservation of driving vision.',
    quote: 'I had almost accepted that diabetes would slowly take my eyesight away. Dr. Shailendra Nanaware caught the bleeding vessels in the nick of time during a routine checkup at Mulund Eye Care. His timely laser treatment saved my retina. He also coordinated closely with my diabetologist to get my sugars stabilized.',
    recoveryDuration: 'Immediate normal activities; 6-monthly monitoring',
    visualAcuityBefore: 'Right Eye 6/18 with metamorphopsia',
    visualAcuityAfter: 'Right Eye 6/9 with clear central grid',
    date: 'August 2025'
  }
];

export const patientTestimonials: PatientTestimonial[] = [
  {
    id: 't-1',
    patientName: 'Smt. Meena Deshmukh',
    age: 68,
    location: 'Mulund West, Mumbai',
    profession: 'Retired School Principal',
    specialtyCategory: 'cataract',
    procedure: 'Micro-Incision Phacoemulsification with Trifocal Toric IOL',
    condition: 'Bilateral Grade 3 Nuclear Cataract & Astigmatism',
    preOpVision: '6/36 Right Eye, 6/24 Left Eye',
    postOpVision: '6/6 (20/20) Distance · N6 Sharp Near Reading',
    recoveryTime: '24 Hours to light daily tasks',
    treatmentOutcome: '100% Spectacle Independence for both distance and reading; zero glare or halos.',
    quote: 'Dr. Nanaware is a true artist in the OT. The surgery took under 15 minutes per eye with just numbing drops. Today I read my daily newspapers and Marathi books without touching a single pair of glasses.',
    rating: 5,
    verifiedDate: 'February 2026',
    highlightBenefit: 'Stitchless Cataract with Trifocal Lens'
  },
  {
    id: 't-2',
    patientName: 'Dr. Sunita K. Rao',
    age: 52,
    location: 'Mulund East, Mumbai',
    profession: 'Consultant Dermatologist',
    specialtyCategory: 'cataract',
    procedure: 'MICS Phaco with Extended Depth of Focus (EDOF) IOL',
    condition: 'Presbyopia & Early Cortical Cataract in Dominant Eye',
    preOpVision: '6/18 with severe contrast drop in clinic lights',
    postOpVision: '6/5 Distance · N5 Intermediate Dermoscopy Vision',
    recoveryTime: '48 Hours to clinical outpatient consultations',
    treatmentOutcome: 'Superb depth perception and contrast clarity during clinical dermatosurgeries.',
    quote: 'As a practicing physician myself, I was extraordinarily picky about choosing an eye surgeon. Dr. Shailendra Nanaware’s anatomical precision, transparent explanation of EDOF optical curves, and aseptic OT protocols at Mulund Eye Care made my decision easy. My surgical vision is flawless.',
    rating: 5,
    verifiedDate: 'December 2025',
    highlightBenefit: 'Doctor-to-Doctor Recommendation'
  },
  {
    id: 't-3',
    patientName: 'Rohan Nair',
    age: 28,
    location: 'Powai, Mumbai',
    profession: 'Senior Software Engineer',
    specialtyCategory: 'refractive',
    procedure: 'Wavefront-Guided Custom Bladeless LASIK',
    condition: 'High Myopia (-6.50D) & Irregular Astigmatism (-1.75D Cyl)',
    preOpVision: 'Counting Fingers at 3m (Uncorrected)',
    postOpVision: '6/5 (Super-normal 20/15 uncorrected)',
    recoveryTime: 'Back to dual-monitor coding in 48 hours',
    treatmentOutcome: 'Crystal clear uncorrected HD vision; resolved contact-lens chronic dry eye.',
    quote: 'I spent 12 years trapped in thick glasses that fogged constantly and dry contacts that stung after 8 hours of coding. Dr. Nanaware checked corneal topography meticulously. The laser was over in 15 seconds. Waking up the next day seeing individual leaves on distant trees was life-changing.',
    rating: 5,
    verifiedDate: 'November 2025',
    highlightBenefit: 'Zero Glasses for Myopia (-6.5D)'
  },
  {
    id: 't-4',
    patientName: 'Master Aarav Joshi (Parents: Mr. & Mrs. Joshi)',
    age: 7,
    location: 'Thane West, MMR',
    profession: 'Class 2 Student',
    specialtyCategory: 'pediatric',
    procedure: 'Bilateral Medial Rectus Recession + Orthoptic Therapy',
    condition: 'Partially Accommodative Esotropia (Inward Squint) & Amblyopia',
    preOpVision: 'Left Eye 6/24 (Amblyopic), 25 Diopter Deviation',
    postOpVision: 'Orthophoric (0° Deviation) · 6/6 Both Eyes with 3D Stereopsis',
    recoveryTime: '5 Days to resume school with full comfort',
    treatmentOutcome: 'Perfect parallel ocular alignment and restoration of normal childhood binocular depth perception.',
    quote: 'We consulted three different doctors before finding Dr. Nanaware. His warmth with children is unmatched; Aarav felt he was visiting a favorite uncle rather than a doctor. The squint is totally cured, his eyes align straight, and his school performance has flourished.',
    rating: 5,
    verifiedDate: 'January 2026',
    highlightBenefit: 'Pediatric Squint Alignment Restored'
  },
  {
    id: 't-5',
    patientName: 'Shri Ashok G. Kulkarni',
    age: 61,
    location: 'Bhandup West, Mumbai',
    profession: 'Retired Senior Banking Manager',
    specialtyCategory: 'retina',
    procedure: 'Frequency-Doubled Argon Laser Photocoagulation & OCT Monitoring',
    condition: 'Proliferative Diabetic Retinopathy with Clinically Significant Macular Edema',
    preOpVision: '6/18 with wavy doorframes (Metamorphopsia)',
    postOpVision: '6/9 with stabilized macular contour and no active leakage',
    recoveryTime: 'Immediate continuation of daily walking routine',
    treatmentOutcome: 'Stopped active retinal micro-hemorrhages; protected central driving and reading vision.',
    quote: 'When you are told diabetes is bleeding into your retina, fear sets in fast. Dr. Nanaware sat with my son and me, displaying the OCT retinal cross-section on the screen and explaining how laser spots seal the leaks. His timely expertise saved my sight from diabetic blindness.',
    rating: 5,
    verifiedDate: 'August 2025',
    highlightBenefit: 'Retinal Salvage from Diabetic Bleeding'
  },
  {
    id: 't-6',
    patientName: 'Rajesh M. Patil',
    age: 39,
    location: 'Vikhroli, Mumbai',
    profession: 'Quality Assurance Lead',
    specialtyCategory: 'oculoplastic',
    procedure: 'External Dacryocystorhinostomy (DCR) with Bicanalicular Silicone Stenting',
    condition: 'Chronic Nasolacrimal Duct Obstruction (Constant Eye Watering & Mucoceles)',
    preOpVision: 'Continuous tearing & blurred tear-film film on computer',
    postOpVision: '100% Dry, clear ocular surface without discharge',
    recoveryTime: '7 Days to suture removal, minimal bruising',
    treatmentOutcome: 'Permanent patent tear drainage bypass; completely eliminated chronic eye discharge.',
    quote: 'For two years, my left eye wept tears constantly, forcing me to carry a handkerchief in every business meeting. Eye drops did nothing. Dr. Nanaware diagnosed the blocked lacrimal duct and performed DCR surgery. The chronic watering vanished completely. Truly grateful for his skill.',
    rating: 5,
    verifiedDate: 'October 2025',
    highlightBenefit: 'Tear Duct Blockage Permanently Cured'
  },
  {
    id: 't-7',
    patientName: 'Mrs. Farida Merchant',
    age: 46,
    location: 'Ghatkopar East, Mumbai',
    profession: 'Educator & Homemaker',
    specialtyCategory: 'cornea',
    procedure: 'Pterygium Excision with Conjunctival Autograft & Autologous Fibrin Glue',
    condition: 'Recurrent Nasal Pterygium encroaching on Optical Cornea',
    preOpVision: 'Severe redness, foreign-body grittiness & induced cylinder',
    postOpVision: 'Crystal-clear white sclera · 6/6 corrected vision',
    recoveryTime: '3 Days; zero stitch irritation due to biological tissue glue',
    treatmentOutcome: 'Seamless cosmetic and anatomical corneal surface restoration with zero recurrence.',
    quote: 'I had heard horror stories about pterygium surgeries where painful stitches poke for weeks. Dr. Nanaware used tissue glue instead of stitches. I felt no pain at all, and within three days my eye looked completely normal and clear white. His surgical finesse is exceptional.',
    rating: 5,
    verifiedDate: 'September 2025',
    highlightBenefit: 'Stitch-Free Corneal Pterygium Surgery'
  },
  {
    id: 't-8',
    patientName: 'Ananya Sen',
    age: 24,
    location: 'Mulund West, Mumbai',
    profession: 'Architecture Student',
    specialtyCategory: 'cornea',
    procedure: 'Corneal Collagen Cross-Linking (C3R) + Scleral Contact Lens Fitting',
    condition: 'Progressive Keratoconus with Steep Keratometry (>54D)',
    preOpVision: 'Distorted architectural lines, ghosting, 6/24 spectacle vision',
    postOpVision: 'Progression halted · 6/6 Pin-sharp with customized scleral lens',
    recoveryTime: 'Corneal biomechanics stabilized; active drafting in 1 week',
    treatmentOutcome: 'Permanently arrested progressive keratoconus and avoided corneal transplant surgery.',
    quote: 'When my vision started warping drafting lines on AutoCAD, I was devastated to learn I had keratoconus. Dr. Nanaware performed C3R to halt the disease and custom-fitted scleral lenses. Now I can work on complex architectural plans with 20/20 clarity.',
    rating: 5,
    verifiedDate: 'July 2025',
    highlightBenefit: 'Saved from Corneal Transplant via C3R'
  }
];


export const clinicPhotos: ClinicPhoto[] = [
  {
    id: 'photo-1',
    title: 'Dr. Shailendra Nanaware in Consultation',
    caption: 'Official OPD consulting suite at Mulund Eye Care with Dr. Nanaware, featuring the computerized phoropter, trial lens system, and slit-lamp biomicroscopy.',
    category: 'consultation',
    imagePath: '/assets/aistudio/WhatsApp_Image_2025-01-06_at_20.30.09_0aea704c_f1419338.jpg',
    highlights: ['Senior Ophthalmologist Consultation', 'Trial frame & computerized phoropter', 'Empathetic, unhurried care']
  },
  {
    id: 'photo-2',
    title: 'Anterior Segment & Cornea High-Magnification Biomicroscopy',
    caption: 'Microscopic examination of the corneal endothelial architecture, clear ocular media, and pupil dynamics to ensure surgical precision.',
    category: 'diagnostics',
    imagePath: '/src/assets/images/macro_human_eye_cornea_1793053206418.jpg',
    highlights: ['Micro-detail corneal evaluation', 'Iris architecture & depth inspection', 'Tear-film stability assessment']
  },
  {
    id: 'photo-3',
    title: 'Digital Retinal Angiography & Macular OCT Scan',
    caption: 'Ultra-widefield retinal fundus imaging visualizing microvascular integrity, optic nerve head, and foveal contour for diabetic retinopathy and glaucoma.',
    category: 'diagnostics',
    imagePath: '/src/assets/images/retina_fundus_macula_scan_1793053207056.jpg',
    highlights: ['Diabetic retinopathy grading', 'Macular edema detection', 'Optic disc cup-to-disc ratio analysis']
  },
  {
    id: 'photo-4',
    title: 'Modular Ophthalmic Microsurgical Theatre',
    caption: 'Dedicated sterile eye surgery suite featuring high-magnification Leica surgical ceiling microscope and Alcon Centurion phacoemulsification system.',
    category: 'operating_theatre',
    imagePath: '/src/assets/images/cataract_microscope_surgery_1793052118052.jpg',
    highlights: ['Class-100 HEPA air filtration', 'Sub-millimeter micro-incision precision', 'Topical zero-injection anesthesia setup']
  },
  {
    id: 'photo-5',
    title: 'Wavefront Refractive Laser & Corneal Topography Unit',
    caption: 'Advanced excimer laser workstation and Pentacam corneal topography station for customized blade-free LASIK and keratoconus mapping.',
    category: 'refractive_laser',
    imagePath: '/src/assets/images/lasik_refractive_technology_1793052117167.jpg',
    highlights: ['High-speed eye tracking technology', 'Sub-micron corneal contour mapping', 'Customized treatment algorithms']
  },
  {
    id: 'photo-6',
    title: 'Digital Refraction & Advanced Diagnostics Suite',
    caption: 'State-of-the-art diagnostic room equipped with computerized auto-refractometer, digital phoropter, non-contact tonometer, and OCT analyzer.',
    category: 'diagnostics',
    imagePath: '/src/assets/images/clinic_eye_care_suite_1793052117126.jpg',
    highlights: ['Micro-precise refraction measurement', 'Glaucoma corneal pachymetry', 'Pediatric-friendly ergonomic seating']
  }
];

export const clinicTimings = [
  { days: 'Monday – Friday (Morning)', time: '10:00 AM – 4:00 PM' },
  { days: 'Monday – Friday (Evening)', time: '6:00 PM – 8:00 PM' },
  { days: 'Saturday (Morning)', time: '10:00 AM – 4:00 PM' },
  { days: 'Sunday', time: 'Prior Appointment / Emergency On-Call Only' }
];

export const faqList = [
  {
    q: 'How long does Cataract surgery take, and is it painful?',
    a: 'Micro-Incision Cataract Surgery (Phacoemulsification) performed by Dr. Nanaware takes approximately 15 to 20 minutes. It is performed under topical eye drop anesthesia—meaning there are no needles, no stitches, and no bandages required. Most patients experience zero pain and report seeing brighter colors the very next morning.'
  },
  {
    q: 'Who is an ideal candidate for LASIK eye surgery?',
    a: 'You are generally a prime candidate if you are at least 18 years old, have had a stable eye prescription for at least 1 year, have healthy corneas with adequate thickness, and are free from uncontrolled autoimmune disorders or corneal diseases. Dr. Nanaware conducts a rigorous 90-minute pre-LASIK corneal evaluation to guarantee 100% safety before recommending the procedure.'
  },
  {
    q: 'At what age can childhood squint (Strabismus) be corrected?',
    a: 'Squint should be evaluated as early as it is noticed—even in infants under 1 year of age. It does NOT get better on its own. Early surgical realignment or optical management ensures the child’s brain learns to use both eyes together (binocular 3D vision) and prevents irreversible lazy eye (amblyopia).'
  },
  {
    q: 'Why is regular eye checkup critical for diabetic patients?',
    a: 'Diabetic Retinopathy frequently causes zero pain or noticeable vision drop in its initial stages while fragile blood vessels are already leaking in the retina. By the time symptoms appear, significant irreversible damage may have occurred. Annual dilated retinal examination allows early intervention with laser or medication.'
  },
  {
    q: 'Does Mulund Eye Care accept cashless medical insurance?',
    a: 'Yes, Mulund Eye Care assists with cashless mediclaim processing and reimbursement paperwork for all major health insurance providers (TPAs) including Star Health, HDFC ERGO, ICICI Lombard, Care Health, Medi Assist, Paramount, and more for eligible surgical procedures like Cataract, Glaucoma, and Keratoplasty.'
  }
];
