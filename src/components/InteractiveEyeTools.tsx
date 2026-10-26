import React, { useState } from 'react';
import { Eye, AlertCircle, CheckCircle, RefreshCw, HelpCircle, ArrowRight } from 'lucide-react';

interface EyeToolsProps {
  onOpenBookingWithNotes: (notes: string) => void;
}

export const InteractiveEyeTools: React.FC<EyeToolsProps> = ({ onOpenBookingWithNotes }) => {
  const [activeTab, setActiveTab] = useState<'amsler' | 'acuity' | 'cataractQuiz'>('amsler');

  // Amsler Grid state
  const [testedEye, setTestedEye] = useState<'left' | 'right'>('right');
  const [amslerDistortion, setAmslerDistortion] = useState(false);
  const [amslerBlurryPatch, setAmslerBlurryPatch] = useState(false);
  const [amslerSubmitted, setAmslerSubmitted] = useState(false);

  // Tumbling E Acuity state
  const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT'] as const;
  type Direction = typeof directions[number];

  const [currentLevel, setCurrentLevel] = useState(1); // 1 to 4
  const [targetDir, setTargetDir] = useState<Direction>('RIGHT');
  const [testScore, setTestScore] = useState(0);
  const [testFinished, setTestFinished] = useState(false);

  const resetAcuityTest = () => {
    setCurrentLevel(1);
    setTestScore(0);
    setTestFinished(false);
    setTargetDir(directions[Math.floor(Math.random() * directions.length)]);
  };

  const handleDirectionGuess = (guess: Direction) => {
    const isCorrect = guess === targetDir;
    const newScore = isCorrect ? testScore + 1 : testScore;
    setTestScore(newScore);

    if (currentLevel >= 4) {
      setTestFinished(true);
    } else {
      setCurrentLevel(currentLevel + 1);
      setTargetDir(directions[Math.floor(Math.random() * directions.length)]);
    }
  };

  // Cataract symptom quiz
  const [quizAnswers, setQuizAnswers] = useState({
    glare: false,
    fadedColors: false,
    powerChange: false,
    cloudy: false
  });
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizCount = Object.values(quizAnswers).filter(Boolean).length;

  return (
    <section id="interactive-tools" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-cyan-800 tracking-wider uppercase mb-2">
            Self-Assessment Diagnostic Suite
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Interactive Eye Health & Screening Tools
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Perform preliminary vision checks right from your screen. Note: While helpful, online screeners do not replace a comprehensive slit-lamp examination by Dr. Shailendra Nanaware.
          </p>
        </div>

        {/* Tab Controls (Segmented functional buttons) */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/80 rounded-xl mb-8 max-w-xl">
          <button
            onClick={() => setActiveTab('amsler')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'amsler'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Amsler Grid (Macular & Retina)
          </button>
          <button
            onClick={() => setActiveTab('acuity')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'acuity'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tumbling E Acuity Check
          </button>
          <button
            onClick={() => setActiveTab('cataractQuiz')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'cataractQuiz'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Cataract & Glaucoma Screener
          </button>
        </div>

        {/* Tool 1: Amsler Grid */}
        {activeTab === 'amsler' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: The Interactive Grid */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="text-xs font-semibold text-slate-500 mb-3 flex items-center gap-2">
                  <span>Testing:</span>
                  <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
                    <button
                      onClick={() => { setTestedEye('right'); setAmslerSubmitted(false); }}
                      className={`px-2.5 py-1 text-xs rounded-md font-semibold cursor-pointer ${
                        testedEye === 'right' ? 'bg-cyan-700 text-white' : 'text-slate-600'
                      }`}
                    >
                      Right Eye (Cover Left)
                    </button>
                    <button
                      onClick={() => { setTestedEye('left'); setAmslerSubmitted(false); }}
                      className={`px-2.5 py-1 text-xs rounded-md font-semibold cursor-pointer ${
                        testedEye === 'left' ? 'bg-cyan-700 text-white' : 'text-slate-600'
                      }`}
                    >
                      Left Eye (Cover Right)
                    </button>
                  </div>
                </div>

                {/* 10x10 Amsler Grid Graphic */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-white border-2 border-slate-900 p-1 flex items-center justify-center shadow-md">
                  <div className="w-full h-full grid grid-cols-10 grid-rows-10 border border-slate-900">
                    {Array.from({ length: 100 }).map((_, i) => (
                      <div key={i} className="border border-slate-800/40" />
                    ))}
                  </div>
                  {/* High contrast center fixation dot */}
                  <div className="absolute w-3.5 h-3.5 bg-slate-950 rounded-full ring-2 ring-white shadow-xs" />
                </div>

                <p className="text-[11px] text-slate-400 mt-3 text-center max-w-xs">
                  Sit at arm's length (approx. 14–16 inches). Keep your spectacles on if you use reading glasses.
                </p>
              </div>

              {/* Right Column: Instructions & Observation Checklist */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    Amsler Grid Macular Degeneration Test
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Stare directly at the black central dot with your <strong>{testedEye} eye</strong> while covering the other. Check for any abnormalities in the grid:
                  </p>
                </div>

                <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <label className="flex items-start gap-3 cursor-pointer text-xs sm:text-sm text-slate-800">
                    <input
                      type="checkbox"
                      checked={amslerDistortion}
                      onChange={(e) => { setAmslerDistortion(e.target.checked); setAmslerSubmitted(false); }}
                      className="mt-0.5 rounded text-cyan-700 focus:ring-cyan-600 w-4 h-4 cursor-pointer"
                    />
                    <span>Lines appear wavy, bent, or distorted (Metamorphopsia)</span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer text-xs sm:text-sm text-slate-800">
                    <input
                      type="checkbox"
                      checked={amslerBlurryPatch}
                      onChange={(e) => { setAmslerBlurryPatch(e.target.checked); setAmslerSubmitted(false); }}
                      className="mt-0.5 rounded text-cyan-700 focus:ring-cyan-600 w-4 h-4 cursor-pointer"
                    />
                    <span>There are blurry spots, dark holes, or missing areas in the grid</span>
                  </label>
                </div>

                <button
                  onClick={() => setAmslerSubmitted(true)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Analyze My Observations
                </button>

                {amslerSubmitted && (
                  <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-2 ${
                    amslerDistortion || amslerBlurryPatch
                      ? 'bg-amber-50 border-amber-200 text-amber-900'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  }`}>
                    {amslerDistortion || amslerBlurryPatch ? (
                      <>
                        <div className="font-bold flex items-center gap-1.5 text-amber-950">
                          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                          Retinal Distortion Detected ({testedEye.toUpperCase()} Eye)
                        </div>
                        <p>
                          Wavy lines or dark spots on the Amsler grid indicate possible macular pathology (such as Age-related Macular Degeneration or Diabetic Macular Edema).
                        </p>
                        <button
                          onClick={() => onOpenBookingWithNotes(`Amsler Grid self-check reported wavy/distorted lines in ${testedEye} eye.`)}
                          className="mt-2 inline-flex items-center gap-1.5 font-bold text-cyan-900 underline underline-offset-2 hover:text-cyan-950 cursor-pointer"
                        >
                          Schedule urgent retinal examination with Dr. Nanaware →
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="font-bold flex items-center gap-1.5 text-emerald-950">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          Normal Central Grid Symmetry ({testedEye.toUpperCase()} Eye)
                        </div>
                        <p>
                          All lines appear straight and continuous with no central blind spots reported. If you have diabetes or high blood pressure, continue routine annual screening.
                        </p>
                      </>
                    )}
                  </div>
                )}

              </div>

            </div>
          </div>
        )}

        {/* Tool 2: Tumbling E Acuity */}
        {activeTab === 'acuity' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Tumbling 'E' Visual Acuity Screener
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Which direction do the three prongs of the letter 'E' point? Sit 1 meter away from your screen.
                </p>
              </div>

              {/* Progress counter */}
              <div className="text-xs font-semibold text-slate-500">
                Step {currentLevel} of 4 · Difficulty: {['6/36 Large', '6/18 Medium', '6/9 Small', '6/6 Fine'][currentLevel - 1]}
              </div>

              {!testFinished ? (
                <div className="space-y-8">
                  {/* The Tumbling E Character */}
                  <div className="h-44 flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-200">
                    <div
                      style={{
                        transform:
                          targetDir === 'RIGHT'
                            ? 'rotate(0deg)'
                            : targetDir === 'DOWN'
                            ? 'rotate(90deg)'
                            : targetDir === 'LEFT'
                            ? 'rotate(180deg)'
                            : 'rotate(270deg)'
                      }}
                      className={`font-mono font-black text-slate-900 select-none transition-transform duration-200 ${
                        currentLevel === 1
                          ? 'text-8xl'
                          : currentLevel === 2
                          ? 'text-6xl'
                          : currentLevel === 3
                          ? 'text-4xl'
                          : 'text-2xl'
                      }`}
                    >
                      E
                    </div>
                  </div>

                  {/* Direction buttons */}
                  <div className="flex items-center justify-center gap-3">
                    {directions.map((dir) => (
                      <button
                        key={dir}
                        onClick={() => handleDirectionGuess(dir)}
                        className="px-5 py-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-cyan-700 hover:text-white rounded-xl transition-colors cursor-pointer border border-slate-200"
                      >
                        {dir}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Results screen */
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
                  <div className="text-2xl font-bold text-slate-900 font-display">
                    Score: {testScore} / 4 Correct
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {testScore >= 3
                      ? 'Excellent acuity! You were able to identify the finer 6/6 and 6/9 optical orientations.'
                      : 'Difficulty with smaller orientations may indicate refractive error (myopia, astigmatism) or early cataract.'}
                  </p>
                  
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={resetAcuityTest}
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg cursor-pointer flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Retest
                    </button>
                    <button
                      onClick={() => onOpenBookingWithNotes(`Tumbling E Screener score: ${testScore}/4. Patient requests full refraction/checkup.`)}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg shadow-sm cursor-pointer"
                    >
                      Book In-Clinic Refraction
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Tool 3: Cataract & Glaucoma Symptom Quiz */}
        {activeTab === 'cataractQuiz' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="max-w-3xl mx-auto space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Cataract & Glaucoma Clinical Risk Check
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Answer 4 quick questions regarding recent changes in your vision to receive targeted clinical recommendations:
                </p>
              </div>

              <div className="space-y-3">
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    Do you experience halos or starbursts around oncoming headlights while night driving?
                  </span>
                  <input
                    type="checkbox"
                    checked={quizAnswers.glare}
                    onChange={(e) => {
                      setQuizAnswers({ ...quizAnswers, glare: e.target.checked });
                      setQuizSubmitted(false);
                    }}
                    className="rounded text-cyan-700 focus:ring-cyan-600 w-4 h-4 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    Do colors appear less vivid, slightly yellowish, or faded?
                  </span>
                  <input
                    type="checkbox"
                    checked={quizAnswers.fadedColors}
                    onChange={(e) => {
                      setQuizAnswers({ ...quizAnswers, fadedColors: e.target.checked });
                      setQuizSubmitted(false);
                    }}
                    className="rounded text-cyan-700 focus:ring-cyan-600 w-4 h-4 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    Have you needed frequent changes in your spectacle prescription over the last 12 months?
                  </span>
                  <input
                    type="checkbox"
                    checked={quizAnswers.powerChange}
                    onChange={(e) => {
                      setQuizAnswers({ ...quizAnswers, powerChange: e.target.checked });
                      setQuizSubmitted(false);
                    }}
                    className="rounded text-cyan-700 focus:ring-cyan-600 w-4 h-4 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    Does your vision feel cloudy, misty, or like looking through frosted glass?
                  </span>
                  <input
                    type="checkbox"
                    checked={quizAnswers.cloudy}
                    onChange={(e) => {
                      setQuizAnswers({ ...quizAnswers, cloudy: e.target.checked });
                      setQuizSubmitted(false);
                    }}
                    className="rounded text-cyan-700 focus:ring-cyan-600 w-4 h-4 cursor-pointer"
                  />
                </label>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setQuizSubmitted(true)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Generate Recommendation ({quizCount} Positive Indicators)
                </button>
              </div>

              {quizSubmitted && (
                <div className="p-5 rounded-xl border bg-slate-50 border-slate-200 space-y-3">
                  <div className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-cyan-700" />
                    Assessment Summary:
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {quizCount >= 2
                      ? `You answered YES to ${quizCount} classic symptoms commonly associated with crystalline lens opacity (cataract) or ocular hypertension. Modern stitchless MICS Phaco surgery can swiftly restore crystal-clear sight.`
                      : `You reported ${quizCount} positive indicator. An annual dilated slit-lamp checkup is recommended to monitor your eye pressure and natural lens transparency.`}
                  </p>

                  <button
                    onClick={() => onOpenBookingWithNotes(`Cataract Symptom Screener: ${quizCount}/4 symptoms reported (glare=${quizAnswers.glare}, faded=${quizAnswers.fadedColors}, powerChange=${quizAnswers.powerChange}, cloudy=${quizAnswers.cloudy}).`)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 px-4 py-2 rounded-lg cursor-pointer"
                  >
                    Schedule Cataract Biometry with Dr. Nanaware
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
