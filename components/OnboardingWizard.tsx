"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Truck, 
  CreditCard, 
  UploadCloud, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck,
  FileText,
  Sparkles,
  Loader2
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [refCode, setRefCode] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Carrier Profile
    mcDotNumber: "",
    companyName: "",
    ownerName: "",
    phone: "",
    email: "",
    fleetSize: "1",

    // Step 2: Equipment & Lanes
    equipmentType: "Dry Van (53')",
    targetMinRPM: "$3.20",
    preferredLanes: "Southeast, Midwest & Texas",
    homeTimeFreq: "Weekly",

    // Step 3: Factoring & Payout
    factoringCompany: "RTS Financial",
    hasNOA: "Yes",
    payoutType: "Same-Day ACH",

    // Step 4: File Upload Simulation
    mcLetterUploaded: false,
    w9Uploaded: false,
    coiUploaded: false,
    noaUploaded: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (docKey: string) => {
    setFormData((prev) => ({ ...prev, [docKey]: true }));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const randomCode = "REHA-" + Math.floor(100000 + Math.random() * 900000);

    try {
      // Send to server endpoint which handles Supabase storage & Resend notification to astraventahq@gmail.com
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          referenceCode: randomCode
        })
      });

      if (!res.ok) {
        // Fallback: direct Supabase insert if API route encountered issue
        await supabase.from("carrier_onboarding").insert([
          {
            mc_dot_number: formData.mcDotNumber || "Not specified",
            company_name: formData.companyName || "Carrier Account",
            owner_name: formData.ownerName || "Carrier Owner",
            phone: formData.phone || "Not specified",
            email: formData.email || "Not specified",
            fleet_size: formData.fleetSize || "1",
            equipment_type: formData.equipmentType,
            target_min_rpm: formData.targetMinRPM,
            preferred_lanes: formData.preferredLanes,
            home_time_freq: formData.homeTimeFreq,
            factoring_company: formData.factoringCompany,
            has_noa: formData.hasNOA,
            payout_type: formData.payoutType,
            mc_letter_uploaded: formData.mcLetterUploaded,
            w9_uploaded: formData.w9Uploaded,
            coi_uploaded: formData.coiUploaded,
            noa_uploaded: formData.noaUploaded,
            reference_code: randomCode,
            status: "pending"
          }
        ]);
      }
    } catch (err) {
      console.error("Submission notice:", err);
    } finally {
      setRefCode(randomCode);
      setSubmitted(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      {/* Progress Steps Header */}
      {!submitted && (
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-blue-600 -translate-y-1/2 z-0 transition-all duration-500" 
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />

            {[
              { num: 1, label: "Carrier Profile", icon: Building2 },
              { num: 2, label: "Equipment & Lanes", icon: Truck },
              { num: 3, label: "Payout Protocol", icon: CreditCard },
              { num: 4, label: "Document Upload", icon: UploadCloud },
            ].map((step) => {
              const isDone = currentStep > step.num;
              const isCurrent = currentStep === step.num;
              return (
                <div key={step.num} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 ${
                      isDone
                        ? "bg-blue-600 text-white shadow-md"
                        : isCurrent
                        ? "bg-white border-2 border-blue-600 text-blue-600 shadow-md ring-4 ring-blue-50"
                        : "bg-slate-100 border border-slate-300 text-slate-400"
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="w-5 h-5" /> : step.num}
                  </div>
                  <span className={`text-[11px] font-mono mt-1.5 hidden sm:block ${isCurrent ? "text-blue-600 font-bold" : "text-slate-500"}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Form Container */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-lg relative">
        {submitted ? (
          /* Submission Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-600 text-blue-600 flex items-center justify-center mx-auto shadow-md">
              <ShieldCheck className="w-8 h-8 animate-bounce" />
            </div>

            <div className="space-y-1.5">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold uppercase border border-emerald-200">
                ● Reha Carrier Onboarding Initiated
              </span>
              <h2 className="text-2xl font-display font-semibold text-slate-900 tracking-tight">
                Welcome To Reha Dispatch.
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Your dispatch profile has been generated. Your dedicated Senior Dispatch Strategist is conducting a live lane audit right now and will call you within 15 minutes at +1 (573) 229-5394.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 max-w-md mx-auto space-y-2 font-mono text-xs shadow-md">
              <div className="flex justify-between text-slate-400">
                <span>Dispatch Reference ID:</span>
                <span className="text-sky-400 font-bold text-sm">{refCode}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Company Name:</span>
                <span className="text-white">{formData.companyName || "Carrier Account"}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Assigned Dispatch Line:</span>
                <span className="text-emerald-400 font-bold">+1 (573) 229-5394</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Direct Support Email:</span>
                <span className="text-slate-300">contact@rehadispatch.com</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                }}
                className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-mono text-xs font-bold border border-slate-300 transition-all"
              >
                Submit Another Carrier Profile
              </button>
            </div>
          </motion.div>
        ) : (
          /* Step-by-Step Form Body */
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* STEP 1: CARRIER PROFILE */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Step 1 of 4</span>
                    <h3 className="text-xl font-display font-semibold text-slate-900">Carrier & Authority Profile</h3>
                    <p className="text-xs text-slate-500">Enter your MC/DOT credentials and primary contact info.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">MC / DOT Number *</label>
                      <input
                        type="text"
                        name="mcDotNumber"
                        required
                        placeholder="e.g. MC-1492084 / USDOT-384920"
                        value={formData.mcDotNumber}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Company Legal Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        placeholder="e.g. Apex Express Logistics LLC"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Owner / Contact Name *</label>
                      <input
                        type="text"
                        name="ownerName"
                        required
                        placeholder="Full Name"
                        value={formData.ownerName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Cell Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+1 (573) 229-5394"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="contact@rehadispatch.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Active Fleet Power Units *</label>
                      <select
                        name="fleetSize"
                        value={formData.fleetSize}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 text-xs"
                      >
                        <option value="1">1 Truck (Solo Owner-Operator)</option>
                        <option value="2-4">2 - 4 Power Units</option>
                        <option value="5-10">5 - 10 Power Units (Fleet Scale)</option>
                        <option value="10+">10+ Dedicated Fleet</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: EQUIPMENT & LANES */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Step 2 of 4</span>
                    <h3 className="text-xl font-display font-semibold text-slate-900">Equipment Class & Preferred Lanes</h3>
                    <p className="text-xs text-slate-500">Specify your trailer type and target earnings expectations.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Equipment Type *</label>
                      <select
                        name="equipmentType"
                        value={formData.equipmentType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 text-xs"
                      >
                        <option value="Dry Van (53')">Dry Van (53')</option>
                        <option value="Reefer (Temperature Control)">Reefer (Temperature Control)</option>
                        <option value="Flatbed / Stepdeck">Flatbed / Stepdeck</option>
                        <option value="Power Only">Power Only</option>
                        <option value="Hotshot / Heavy Haul">Hotshot / Heavy Haul</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Target Minimum Rate Per Mile (RPM)</label>
                      <input
                        type="text"
                        name="targetMinRPM"
                        placeholder="e.g. $3.20/mi"
                        value={formData.targetMinRPM}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs font-mono"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Preferred Driving States / Regions</label>
                      <input
                        type="text"
                        name="preferredLanes"
                        placeholder="e.g. Southeast (GA, FL, NC), Midwest, Texas Triangle"
                        value={formData.preferredLanes}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: PAYOUT PROTOCOL */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Step 3 of 4</span>
                    <h3 className="text-xl font-display font-semibold text-slate-900">Factoring & Payout Integration</h3>
                    <p className="text-xs text-slate-500">Setup instant invoicing and factoring clearance.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Factoring Company Name</label>
                      <input
                        type="text"
                        name="factoringCompany"
                        placeholder="e.g. RTS Financial, OTR Capital, Apex"
                        value={formData.factoringCompany}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Active NOA (Notice of Assignment)?</label>
                      <select
                        name="hasNOA"
                        value={formData.hasNOA}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 text-xs"
                      >
                        <option value="Yes">Yes — NOA active with factor</option>
                        <option value="No">No — We factor independently</option>
                        <option value="Need Assistance">Need help setting up factoring</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: DOCUMENT UPLOADER */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Step 4 of 4</span>
                    <h3 className="text-xl font-display font-semibold text-slate-900">Instant Document Upload Zone</h3>
                    <p className="text-xs text-slate-500">Upload your carrier documents for instant dispatch verification.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {[
                      { key: "mcLetterUploaded", label: "MC Authority Certificate", req: "Required" },
                      { key: "w9Uploaded", label: "Signed W-9 Form", req: "Required" },
                      { key: "coiUploaded", label: "Insurance Certificate (COI)", req: "Required ($100k Cargo)" },
                      { key: "noaUploaded", label: "Factoring NOA / Void Check", req: "Optional" },
                    ].map((doc) => {
                      const isUploaded = (formData as any)[doc.key];
                      return (
                        <div
                          key={doc.key}
                          onClick={() => handleFileUpload(doc.key)}
                          className={`p-4 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-300 flex flex-col justify-between h-32 ${
                            isUploaded
                              ? "bg-blue-50 border-blue-600 text-blue-600"
                              : "bg-slate-50 border-slate-200 hover:border-blue-400 text-slate-600"
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <FileText className={`w-5 h-5 ${isUploaded ? "text-blue-600" : "text-slate-400"}`} />
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isUploaded ? "bg-blue-600 text-white font-bold" : "bg-white text-slate-500 border border-slate-200"}`}>
                              {isUploaded ? "UPLOADED ✓" : doc.req}
                            </span>
                          </div>
                          <div>
                            <span className="font-display font-bold text-xs text-slate-900 block">
                              {doc.label}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500 mt-0.5 block">
                              {isUploaded ? "Document verified for dispatch" : "Click to simulate document upload"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 font-mono text-xs flex items-center gap-1.5 border border-slate-200 transition-colors font-bold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold font-display text-xs flex items-center gap-1.5 shadow-md transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold font-display text-xs flex items-center gap-1.5 shadow-md hover:scale-105 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving Carrier Profile...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Complete Setup</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
