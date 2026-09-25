import type { Metadata } from "next";
import WorkflowTimeline from "@/components/WorkflowTimeline";
import CertifiedBadges from "@/components/CertifiedBadges";
import { ShieldCheck, CheckCircle2, DollarSign, FileCheck, Headphones, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Full-Spectrum Truck Dispatch Services & Back-Office Logistics",
  description:
    "Explore Reha Dispatch services: aggressive broker rate negotiations, 100% back-office carrier packets, detention/layover recovery, and 24/7 dedicated dispatchers.",
  alternates: {
    canonical: "https://rehadispatch.com/services",
  },
};

const serviceMatrix = [
  {
    icon: DollarSign,
    title: "Direct Broker Negotiation",
    desc: "We skip lowball posted rates on public load boards. Our dispatchers speak directly with freight managers to push rates up by $0.40 to $0.85 per mile on premium lanes.",
    highlights: ["DAT One spot rate benchmarking", "Direct phone broker escalation", "Fuel surcharges & tarp/strap pay audits"],
  },
  {
    icon: FileCheck,
    title: "100% Back-Office Automation",
    desc: "Never stop your truck to fill out paperwork. We handle carrier setup packets, W-9 submissions, Certificate of Insurance (COI) requests, and Notice of Assignment clearance.",
    highlights: ["Completed in under 5 minutes", "Zero driver paperwork stress", "Legal & FMCSA compliance check"],
  },
  {
    icon: ShieldCheck,
    title: "Detention & Layover Claims",
    desc: "Shippers holding your truck hostage? We track loading dock timers and immediately file detention claims ($50-$75/hr) and TONU (Truck Ordered Not Used) charges.",
    highlights: ["Automated dock wait timing", "Direct broker rate con amendment", "100% payout passed to carrier"],
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Logistics Desk",
    desc: "No random call center reps who don't know your name. You are paired with a Senior Logistics Strategist who manages your load cycle from pickup to delivery.",
    highlights: ["Direct cell & WhatsApp line", "Weather & port bottleneck alerts", "Receiver appointment rescheduling"],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-10 pb-12 bg-white">
      {/* Page Header */}
      <section className="relative pt-6 pb-6 text-center bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-6 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-slate-900 tracking-tight">
            End-to-End Freight <span className="text-gradient-cyan">Orchestration.</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Explore our comprehensive suite of high-RPM dispatch services designed exclusively for professional US owner-operators and fleet managers.
          </p>
        </div>
      </section>

      {/* CERTIFIED BADGES BAR */}
      <CertifiedBadges />

      {/* SERVICE MATRIX GRID */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceMatrix.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-semibold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="space-y-1.5 pt-3 border-t border-slate-100 font-mono text-xs text-slate-700">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW PROTOCOL TIMELINE */}
      <WorkflowTimeline />

      {/* NO-FORCED-DISPATCH GUARANTEE CARD */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 border border-slate-800 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xl">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white tracking-tight">
              Our No-Forced-Dispatch Pledge.
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We work for YOU, not the brokers. You hold final veto authority over every load, rate confirmation, lane, and weekend schedule. If a load doesn't meet your gross revenue target, we move to the next option.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-emerald-400">
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-emerald-500/30">✓ Zero Penalty Declines</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-emerald-500/30">✓ Preferred Home Time</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-emerald-500/30">✓ Full Rate Transparency</span>
            </div>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold font-display text-xs shadow-md transition-all"
            >
              <span>Get Started With Freedom</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
