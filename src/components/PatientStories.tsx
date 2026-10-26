import React, { useState } from 'react';
import { Quote, ArrowRight, CheckCircle2, Clock, Calendar, Sparkles } from 'lucide-react';
import { patientStories } from '../data/doctorData';

export const PatientStories: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const activeStory = patientStories[activeStoryIndex];

  return (
    <section id="stories" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-cyan-800 tracking-wider uppercase mb-2">
            Clinical Case Journeys · Patient Stories (4)
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Real Clinical Outcomes, Restored Lives
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Behind every surgical procedure is a life given back its vibrancy. Read 4 in-depth clinical recovery journeys under the care of Dr. Shailendra Nanaware at Mulund Eye Care.
          </p>
        </div>

        {/* Story Selector Tabs (Functional segmented buttons) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-slate-100 rounded-xl mb-8">
          {patientStories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryIndex(idx)}
              className={`p-3 text-left rounded-lg transition-all cursor-pointer ${
                activeStoryIndex === idx
                  ? 'bg-white shadow-sm text-slate-900 ring-1 ring-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <div className="text-xs font-bold truncate">
                {idx + 1}. {story.patientName}
              </div>
              <div className="text-[11px] text-slate-500 truncate mt-0.5">
                Age {story.age} · {story.treatment.split(' ')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Featured Case Study Display */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Testimonial & Patient Voice */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="font-semibold text-cyan-800 uppercase tracking-wide">
                  Case Review 0{activeStoryIndex + 1}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeStory.date}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Case Outcome
                </span>
              </div>

              {/* Quote block */}
              <div className="relative">
                <Quote className="w-10 h-10 text-cyan-200 absolute -top-4 -left-2 -z-0" />
                <p className="relative z-10 text-base sm:text-lg text-slate-800 font-medium italic leading-relaxed">
                  "{activeStory.quote}"
                </p>
              </div>

              {/* Patient Attribution & Condition */}
              <div className="pt-4 border-t border-slate-200/80">
                <h4 className="text-base font-bold text-slate-900 font-display">
                  {activeStory.patientName}, <span className="text-slate-500 font-normal">Age {activeStory.age}</span>
                </h4>
                <div className="text-xs font-semibold text-cyan-800 mt-0.5">
                  Diagnosis: {activeStory.condition}
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Procedure: <strong className="text-slate-800">{activeStory.treatment}</strong>
                </div>
              </div>

              {/* Initial Symptoms */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 leading-relaxed space-y-1">
                <strong className="text-slate-900 block font-semibold">Initial Patient Complaint:</strong>
                <p>{activeStory.initialSymptoms}</p>
              </div>

            </div>

            {/* Right 5 cols: Quantitative Clinical Measurements & Outcomes */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl border border-slate-200 space-y-6 shadow-xs">
              
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-700" />
                  Clinical Metrics & Recovery
                </h5>
                <span className="text-[11px] text-slate-400">Snellen Acuity</span>
              </div>

              {/* Before vs After Visual Acuity */}
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-100 text-xs">
                  <div className="text-rose-800 font-semibold mb-1">Pre-Operative Visual Acuity:</div>
                  <div className="font-mono text-sm font-bold text-slate-800 tabular-nums">
                    {activeStory.visualAcuityBefore}
                  </div>
                </div>

                <div className="flex items-center justify-center text-slate-400">
                  <ArrowRight className="w-4 h-4 rotate-90 sm:rotate-0" />
                </div>

                <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-100 text-xs">
                  <div className="text-emerald-800 font-semibold mb-1">Post-Operative Stabilized Acuity:</div>
                  <div className="font-mono text-sm font-bold text-emerald-950 tabular-nums">
                    {activeStory.visualAcuityAfter}
                  </div>
                </div>
              </div>

              {/* Clinical outcome notes */}
              <div className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <div>
                  <span className="text-slate-400 font-semibold uppercase tracking-wider block text-[10px]">
                    Surgical Outcome
                  </span>
                  <p className="font-medium text-slate-800 mt-0.5 leading-relaxed">
                    {activeStory.clinicalOutcome}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                  <span>Recovery time: <strong>{activeStory.recoveryDuration}</strong></span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* All 4 Stories Quick Index Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {patientStories.map((story, i) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryIndex(i)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeStoryIndex === i
                  ? 'border-cyan-700 bg-cyan-50/40 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="text-xs font-bold text-slate-900 truncate">
                {story.patientName} ({story.age}y)
              </div>
              <p className="text-[11px] text-cyan-800 font-medium truncate mt-1">
                {story.treatment}
              </p>
              <p className="text-[11px] text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                "{story.quote}"
              </p>
              <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-emerald-700 font-medium">
                Post: {story.visualAcuityAfter.split(',')[0]}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
