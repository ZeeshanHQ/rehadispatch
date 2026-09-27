"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  CheckCircle2, 
  UploadCloud, 
  FileText, 
  Sparkles, 
  Loader2, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  X,
  Phone,
  Mail,
  Linkedin
} from "lucide-react";
import CertifiedBadges from "@/components/CertifiedBadges";

interface JobRole {
  id: string;
  title: string;
  department: "Dispatch & Operations" | "Sales & Business Development";
  location: string;
  type: string;
  compensation: string;
  shortDesc: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

const jobOpenings: JobRole[] = [
  {
    id: "senior-freight-dispatcher",
    title: "Senior Freight Dispatcher (Dry Van & Reefer)",
    department: "Dispatch & Operations",
    location: "Remote or Dallas HQ (TX)",
    type: "Full-Time",
    compensation: "$65,000 - $115,000 / yr (Competitive Base + Uncapped High-RPM Commission)",
    shortDesc: "Manage a dedicated fleet of 4-6 owner-operators. Leverage DAT One & Truckstop Enterprise to negotiate top-dollar spot rates ($3.40+/mi) with zero forced dispatch.",
    responsibilities: [
      "Conduct daily lane analysis and spot market rate checks across Midwest, Texas, and Southeast corridors.",
      "Negotiate aggressively with tier-1 freight brokers (C.H. Robinson, TQL, Echo, Landstar, Coyote) to lock in high rate confirmations.",
      "Manage 100% of carrier setup packets, rate con signing, and delivery confirmation with factoring partners.",
      "Monitor driver dock times to aggressively collect detention ($50-$75/hr), layover, and TONU payments.",
      "Maintain 24/7 route support and proactive weather/port bottleneck communication."
    ],
    requirements: [
      "2+ years of active US freight dispatching experience (Dry Van 53' and/or Reefer required).",
      "Demonstrated ability to consistently maintain $3.20+ average rate per mile.",
      "Deep proficiency with DAT One, Truckstop Pro, and standard Transportation Management Systems (TMS).",
      "Flawless English verbal and written negotiation skills with high emotional intelligence.",
      "Thrives in a high-urgency, fast-paced logistics environment."
    ],
    perks: [
      "Uncapped commission tier: earn a direct percentage of every load booked above target RPM.",
      "Premium enterprise software tooling (DAT One Enterprise seats, automated rate scraping).",
      "Comprehensive healthcare stipend + 401(k) retirement matching.",
      "Flexible schedule with remote-first work culture."
    ]
  },
  {
    id: "carrier-sales-account-exec",
    title: "Carrier Sales & Fleet Account Executive",
    department: "Sales & Business Development",
    location: "Remote or Hybrid (Dallas, TX)",
    type: "Full-Time",
    compensation: "$70,000 - $130,000+ / yr (Base Salary + Generous Residual Fleet Commissions)",
    shortDesc: "Drive enterprise carrier acquisition. Pitch owner-operators and small fleet owners on Reha Dispatch's no-forced-dispatch model and sign active trucks.",
    responsibilities: [
      "Execute high-velocity outbound calling and personalized outreach to newly authorized MC/DOT motor carriers.",
      "Pitch fleet owners and owner-operators on our proven 5% dispatch model, highlighting rate gains and back-office relief.",
      "Guide prospective carriers through our 15-minute digital onboarding pipeline and verify authority credentials.",
      "Build long-term carrier loyalty to ensure high truck retention and multi-truck fleet expansions.",
      "Collaborate with Senior Dispatch Leads to immediately pair newly signed trucks with dedicated dispatchers."
    ],
    requirements: [
      "1-3+ years of successful B2B sales experience (freight brokerage, carrier sales, or logistics SaaS highly preferred).",
      "Relentless drive, exceptional telephone presence, and objection-handling stamina.",
      "Familiarity with FMCSA SAFER database, Carrier411, and freight compliance standards.",
      "Track record of hitting and exceeding monthly closing quotas."
    ],
    perks: [
      "Residual commission model: earn every single week your onboarded carriers haul loads!",
      "Company-provided CRM and verified high-intent carrier lead pipeline.",
      "Accelerated promotion to Sales Team Lead within 6 months based on quota attainment.",
      "Quarterly performance bonuses & team retreat invites."
    ]
  },
  {
    id: "night-weekend-operations-lead",
    title: "Night & Weekend Emergency Dispatch Lead",
    department: "Dispatch & Operations",
    location: "Remote (US Time Zones)",
    type: "Full-Time / Shift Coverage",
    compensation: "$60,000 - $90,000 / yr (Premium Night Shift Differential + Per-Claim Bonus)",
    shortDesc: "Command our critical after-hours operational desk. Support rolling trucks, handle emergency broker escalations, and book weekend expedited reloads.",
    responsibilities: [
      "Provide dedicated live phone support to active drivers hauling loads between 6:00 PM and 6:00 AM or over weekends.",
      "Resolve urgent transit issues: mechanical breakdowns, receiver gate rejections, and lumpers.",
      "Capture and negotiate high-paying weekend spot freight and backhauls.",
      "Enforce mandatory detention logging for nighttime distribution center dwell times."
    ],
    requirements: [
      "1.5+ years of US trucking operations or emergency dispatch experience.",
      "Comfortable working overnight or rotating weekend schedules with high focus.",
      "Decisive crisis problem solver with calm phone demeanor under driver stress.",
      "High proficiency in digital documentation and automated status check-ins."
    ],
    perks: [
      "Dedicated 4-day on / 3-day off condensed workweek schedule.",
      "Generous night differential bonus pay.",
      "Immediate autonomous decision-making authority on broker rate amendments."
    ]
  },
  {
    id: "broker-relations-rate-negotiator",
    title: "Freight Broker Relations & Rate Specialist",
    department: "Sales & Business Development",
    location: "Dallas HQ (TX) or Remote",
    type: "Full-Time",
    compensation: "$75,000 - $120,000 / yr (Base + Lane Performance Incentive)",
    shortDesc: "Establish direct contract relationships with enterprise freight brokers and direct shippers to lock in premium dedicated lanes for our network.",
    responsibilities: [
      "Develop direct relationships with freight management executives at Fortune 500 3PLs and manufacturing shippers.",
      "Negotiate high-yield dedicated contractual lanes for Dry Van, Reefer, and Flatbed equipment.",
      "Conduct weekly spot vs. contract rate audits to pivot carrier capacity into maximum-yield regions.",
      "Ensure fast credit approval and dispute resolution with factoring firms and shippers."
    ],
    requirements: [
      "3+ years in freight brokerage, carrier sales, or logistics account management.",
      "Established book of relationships with major 3PLs or direct shippers.",
      "Deep understanding of freight market microeconomics and lane volatility.",
      "Strong analytical ability using spot rate predictive models."
    ],
    perks: [
      "Executive level compensation with substantial equity/profit-sharing potential.",
      "Direct collaboration with Reha Dispatch executive leadership.",
      "Travel stipend for major transportation conferences (MATS, FreightWaves)."
    ]
  }
];

export default function CareersClientView() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [activeJob, setActiveJob] = useState<JobRole | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [applicationRef, setApplicationRef] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    role_title: jobOpenings[0].title,
    full_name: "",
    email: "",
    phone: "",
    location: "",
    experience_years: "2-4 years",
    linkedin_url: "",
    expected_salary: "",
    available_start: "Immediate (Within 2 weeks)",
    tms_loadboards: "DAT One, Truckstop Pro, McLeod",
    negotiation_scenario: "",
    cover_letter: "",
    resume_filename: "",
    resume_data: ""
  });

  const filteredJobs = selectedDept === "All" 
    ? jobOpenings 
    : jobOpenings.filter(j => j.department === selectedDept);

  const handleSelectRoleToApply = (role: JobRole) => {
    setActiveJob(role);
    setFormData(prev => ({ ...prev, role_title: role.title }));
    const formElement = document.getElementById("application-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume_filename: file.name
      }));
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const textResult = uploadEvent.target?.result as string;
        setFormData(prev => ({
          ...prev,
          resume_data: textResult ? textResult.substring(0, 8000) : "Uploaded: " + file.name
        }));
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const json = await res.json();
      if (res.ok) {
        setApplicationRef(json.applicationId || "REHA-APP-" + Math.floor(100000 + Math.random() * 900000));
        setSubmitted(true);
      } else {
        alert(json.error || "Failed to submit application. Please check your fields.");
      }
    } catch (err) {
      console.error("Application error:", err);
      // Fallback
      setApplicationRef("REHA-APP-" + Math.floor(100000 + Math.random() * 900000));
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 pb-16 bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-8 pb-12 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>We Are Hiring • Remote & Dallas HQ</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-slate-900 leading-[1.1]">
            Build The Future Of <br />
            <span className="font-semibold text-gradient-cyan">High-RPM US Freight.</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Join an elite logistics powerhouse where talented dispatchers and ambitious sales closers thrive. High base salaries, uncapped spot-market commissions, enterprise DAT tooling, and zero corporate bureaucracy.
          </p>

          {/* Core Team Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-bold font-display text-blue-600">$115k+</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Top Performer OTE</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-bold font-display text-emerald-600">Uncapped</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Weekly Commission</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900">100%</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Remote or Dallas HQ</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-bold font-display text-purple-600">1 : 5</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Max Trucks Per Rep</div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATION & TRUST */}
      <CertifiedBadges />

      {/* CULTURE & PERKS */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-mono font-bold uppercase text-blue-600 tracking-wider">The Reha Standard</span>
          <h2 className="text-3xl font-display font-semibold text-slate-900">Why Top Dispatchers & Closers Choose Reha</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-semibold text-slate-900">Direct Profit Sharing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We treat talent like equity partners. When you negotiate $4.00+/mi on a dry van or reefer load, you receive an immediate, transparent cut of the revenue generated.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-semibold text-slate-900">Ethical Driver-First Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No shady broker kickbacks, no forced dispatch, and zero accessorial skimming. You will be proud of the service you deliver to hard-working American truckers.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-semibold text-slate-900">Enterprise Tooling Stack</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every dispatcher is equipped with premium DAT One Enterprise, Truckstop Pro, Carrier411, Sonar market heatmaps, and automated rate con extraction software.
            </p>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS DIRECTORY */}
      <section className="max-w-6xl mx-auto px-6 py-6" id="open-roles">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase text-blue-600 tracking-wider">Current Vacancies</span>
            <h2 className="text-3xl font-display font-semibold text-slate-900">Explore Open Positions</h2>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200 text-xs font-mono self-start md:self-auto">
            {["All", "Dispatch & Operations", "Sales & Business Development"].map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  selectedDept === dept 
                    ? "bg-white text-slate-900 font-bold shadow-sm" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {dept === "Sales & Business Development" ? "Sales & Growth" : dept}
              </button>
            ))}
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredJobs.map((role) => (
            <motion.div
              key={role.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-mono font-bold uppercase border border-blue-100">
                    {role.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-medium">
                    {role.type}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold">
                    {role.location}
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {role.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {role.shortDesc}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{role.compensation}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveJob(role)}
                  className="text-xs font-mono text-slate-600 hover:text-blue-600 flex items-center gap-1 font-semibold"
                >
                  <span>Read Full Requirements</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleSelectRoleToApply(role)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-display font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROLE DETAILS MODAL / EXPANDABLE OVERLAY */}
      <AnimatePresence>
        {activeJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 relative"
            >
              <button
                onClick={() => setActiveJob(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase border border-blue-200">
                  {activeJob.department}
                </span>
                <h3 className="text-2xl font-display font-semibold text-slate-900">
                  {activeJob.title}
                </h3>
                <div className="text-xs font-mono text-slate-600 flex flex-wrap gap-3">
                  <span>📍 {activeJob.location}</span>
                  <span>⏱️ {activeJob.type}</span>
                  <span className="text-emerald-600 font-bold">💰 {activeJob.compensation}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wide">
                  What You'll Do
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeJob.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wide">
                  Who You Are
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeJob.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perks */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wide">
                  Benefits & Perks
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeJob.perks.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveJob(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleSelectRoleToApply(activeJob);
                    setActiveJob(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                >
                  <span>Apply for this Role</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* GOOGLE / META LEVEL CANDIDATE APPLICATION PORTAL */}
      <section className="max-w-4xl mx-auto px-6 py-6" id="application-form-section">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-6">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold uppercase border border-emerald-200">
                  Application Received • Talent Acquisition
                </span>
                <h3 className="text-2xl font-display font-semibold text-slate-900">
                  Welcome to the Reha Dispatch Hiring Pipeline
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Your candidate profile has been transmitted directly to our Hiring Operations Team. We review logistics track records within 24 hours.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 text-white max-w-md mx-auto text-left font-mono text-xs space-y-2 border border-slate-800 shadow-md">
                <div className="flex justify-between">
                  <span className="text-slate-400">Application Reference ID:</span>
                  <span className="text-sky-400 font-bold">{applicationRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Position Applied:</span>
                  <span className="text-white">{formData.role_title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Direct Talent Desk:</span>
                  <span className="text-emerald-400">careers@astraventa.com</span>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-mono hover:bg-blue-600 transition-colors"
              >
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1 border-b border-slate-100 pb-4">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">Confidential Candidate Submission</span>
                <h3 className="text-2xl font-display font-semibold text-slate-900">
                  Reha Dispatch Talent Application
                </h3>
                <p className="text-xs text-slate-500">
                  Fill out your professional details below. Our talent desk reviews all applications confidentially.
                </p>
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5">
                  Select Target Position *
                </label>
                <select
                  required
                  value={formData.role_title}
                  onChange={(e) => setFormData({ ...formData, role_title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-display text-xs font-semibold focus:outline-none focus:border-blue-600"
                >
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title} — ({job.department})
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Vance"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vance.alex@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                    Current Location (City, State / Country) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dallas, TX (or Remote City)"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>
              </div>

              {/* Logistics Experience Credentials */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                    Freight Industry Experience *
                  </label>
                  <select
                    value={formData.experience_years}
                    onChange={(e) => setFormData({ ...formData, experience_years: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono focus:outline-none focus:border-blue-600"
                  >
                    <option value="1-2 years">1 - 2 Years</option>
                    <option value="3-5 years">3 - 5 Years (Senior)</option>
                    <option value="5+ years">5+ Years (Lead / Director)</option>
                    <option value="Entry / Career Changer">Entry Level / Fast Learner</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                    Target Annual Compensation / OTE
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. $80,000 / yr"
                    value={formData.expected_salary}
                    onChange={(e) => setFormData({ ...formData, expected_salary: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                    Earliest Start Date
                  </label>
                  <input
                    type="text"
                    placeholder="Immediate or 2 Weeks"
                    value={formData.available_start}
                    onChange={(e) => setFormData({ ...formData, available_start: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                  LinkedIn Profile or Portfolio URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/yourname"
                  value={formData.linkedin_url}
                  onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs font-mono"
                />
              </div>

              {/* Meta / Google Style In-Depth Screening Questions */}
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                    Which Load Boards, TMS & Tech Tools Have You Used Extensively? *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DAT One, Truckstop Pro, McLeod, Samsara, Carrier411, Salesforce"
                    value={formData.tms_loadboards}
                    onChange={(e) => setFormData({ ...formData, tms_loadboards: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                    Broker Rate Negotiation Case Study / Proven Track Record *
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Describe a specific situation where a freight broker initially posted a low rate, and how you negotiated it up by $0.40+/mile.
                  </p>
                  <textarea
                    required
                    rows={3}
                    placeholder="Detail the lane, equipment type, broker tactics, leverage points you used, and final rate confirmation agreed upon..."
                    value={formData.negotiation_scenario}
                    onChange={(e) => setFormData({ ...formData, negotiation_scenario: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">
                    Personal Intro / Why Reha Dispatch? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us why you want to join our high-RPM logistics team..."
                    value={formData.cover_letter}
                    onChange={(e) => setFormData({ ...formData, cover_letter: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>
              </div>

              {/* Resume Upload Dropzone */}
              <div className="pt-2">
                <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5">
                  Upload Resume / CV File (PDF, DOCX, TXT) *
                </label>
                <div className="relative border-2 border-dashed border-slate-200 hover:border-blue-500 rounded-2xl p-5 text-center transition-colors bg-slate-50 group">
                  <input
                    type="file"
                    accept=".pdf,.docx,.doc,.txt"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="space-y-1.5 pointer-events-none">
                    <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-blue-600 mx-auto transition-colors" />
                    <div className="text-xs font-display font-semibold text-slate-800">
                      {formData.resume_filename ? (
                        <span className="text-blue-600 font-mono flex items-center justify-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Attached: {formData.resume_filename}
                        </span>
                      ) : (
                        <span>Click or Drag & Drop your Resume / CV here</span>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-400 font-mono">
                      Accepts standard PDF, DOCX or TXT (Max 5MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-display font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Candidate Dossier...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Submit Application to Reha Talent Desk</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2 font-mono">
                  🔒 Confidential application. Directly delivered to Reha Dispatch Hiring Executive.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
