"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, FileCheck, Headphones, DollarSign, ArrowRight } from "lucide-react";

interface ProtocolStep {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: any;
  deliverables: string[];
}

const steps: ProtocolStep[] = [
  {
    step: "01",
    title: "Rate Analysis & Lane Optimization",
    subtitle: "Spot Market Intelligence",
    desc: "Before your truck hits empty status, your dedicated dispatcher runs real-time DAT & Truckstop rate analytics across your preferred lanes to identify peak demand clusters.",
    icon: Search,
    deliverables: ["Spot rate benchmarking", "Backhaul chain mapping", "Fuel-cost optimized selection"],
  },
  {
    step: "02",
    title: "High-RPM Load Securing",
    subtitle: "Direct Broker Negotiation",
    desc: "We speak directly with top-tier brokers to negotiate rate bumps above posted averages. We push for detention terms, layover clauses, and expedited unloading commitments.",
    icon: DollarSign,
    deliverables: ["Direct phone broker escalation", "Tarp/strap fee additions", "Zero cheap volume loads"],
  },
  {
    step: "03",
    title: "Rate Con & Packet Automation",
    subtitle: "100% Back-Office Execution",
    desc: "Our back-office team completes the carrier setup packet, submits W9, Insurance COI, and verifies the Rate Confirmation to ensure every detail is legally binding and accurate.",
    icon: FileCheck,
    deliverables: ["5-minute setup packet completion", "Rate confirmation rate audit", "NOA & Factoring pre-approval"],
  },
  {
    step: "04",
    title: "24/7 Route Tracking & Support",
    subtitle: "Driver-First Operations",
    desc: "Your dispatcher monitors weather, port bottlenecks, scale status, and receiver appointment shifts. Should delays occur, we immediately file detention claims.",
    icon: Headphones,
    deliverables: ["24/7 dispatch phone line", "Detention timer tracking", "Receiver appointment rescheduling"],
  },
  {
    step: "05",
    title: "Express Invoicing & Payout",
    subtitle: "Immediate Cashflow Settlement",
    desc: "The moment the signed BOL is uploaded, we process the invoice and submit it directly to your factoring company for same-day ACH or fuel card funding.",
    icon: ShieldCheck,
    deliverables: ["Same-day BOL invoicing", "0% Vanguard commission cut", "Clean accounting audit trail"],
  },
];

export default function WorkflowTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-10 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-slate-900">
            Precision Dispatch Execution.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            From pre-trip market analysis to same-day factoring payout, our step-by-step dispatch architecture guarantees maximum efficiency.
          </p>
        </div>

        {/* Step Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
          {steps.map((s, index) => {
            const Icon = s.icon;
            const isActive = activeStep === index;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(index)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-36 ${
                  isActive
                    ? "bg-slate-900 border-slate-900 shadow-md text-white"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xl font-bold ${isActive ? "text-sky-400" : "text-blue-600"}`}>
                    {s.step}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div>
                  <h4 className={`font-display font-semibold text-xs line-clamp-2 ${isActive ? "text-white" : "text-slate-900"}`}>
                    {s.title}
                  </h4>
                  <p className={`text-[10px] font-mono mt-0.5 ${isActive ? "text-slate-400" : "text-slate-500"}`}>
                    {s.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed View */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-slate-900 text-white font-mono font-bold text-[11px]">
                PHASE {steps[activeStep].step}
              </span>
              <span className="text-xs font-mono text-slate-500 font-bold">
                {steps[activeStep].subtitle}
              </span>
            </div>

            <h3 className="text-2xl font-display font-semibold text-slate-900 tracking-tight">
              {steps[activeStep].title}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {steps[activeStep].desc}
            </p>

            <div className="space-y-2 pt-3 border-t border-slate-200">
              <div className="text-[11px] font-mono uppercase text-blue-600 font-bold">
                Standard Operational Deliverables
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {steps[activeStep].deliverables.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-xs text-slate-800 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mx-auto">
              {(() => {
                const Icon = steps[activeStep].icon;
                return <Icon className="w-6 h-6" />;
              })()}
            </div>
            <div className="font-mono text-xs text-slate-500 font-bold">
              Protocol Step {activeStep + 1} of {steps.length}
            </div>
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="w-full py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
