"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Thermometer, ShieldAlert, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface EquipmentTab {
  id: string;
  label: string;
  icon: any;
  image: string;
  targetRPM: string;
  avgWeeklyGross: string;
  keyLanes: string[];
  protocol: string;
  features: string[];
}

const tabs: EquipmentTab[] = [
  {
    id: "dryvan",
    label: "Dry Van (53')",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200",
    targetRPM: "$3.15 - $3.60 / mi",
    avgWeeklyGross: "$11,500 - $14,000",
    keyLanes: ["Southeast ➔ Midwest", "Texas Triangle", "Mid-Atlantic Corridor"],
    protocol: "High-density spot rate arbitrage combined with backhaul chain locking. Zero empty deadhead miles above 8%.",
    features: ["Dedicated spot market rate con negotiation", "Drop & hook contract options", "100% Detention & Layover billing"],
  },
  {
    id: "reefer",
    label: "Reefer (Temp-Control)",
    icon: Thermometer,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    targetRPM: "$3.65 - $4.40 / mi",
    avgWeeklyGross: "$14,000 - $18,500",
    keyLanes: ["California / Yuma ➔ Midwest", "Florida Produce Belt", "PNW Cold Chain"],
    protocol: "Strict temperature-monitoring protocol, pre-cool verification, and priority access to high-paying produce and pharma contracts.",
    features: ["Produce season high-RPM priority", "24/7 temperature log backup support", "Immediate re-power protocol"],
  },
  {
    id: "flatbed",
    label: "Flatbed & Stepdeck",
    icon: ShieldAlert,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200",
    targetRPM: "$3.85 - $4.80 / mi",
    avgWeeklyGross: "$15,000 - $20,000",
    keyLanes: ["Industrial Midwest ➔ Gulf Coast", "Oil & Gas Basin", "East Coast Infrastructure"],
    protocol: "Specialized load match verification for oversized, tarping, pipe, coil, and heavy machinery loads with permit assistance.",
    features: ["Permit & escort coordination support", "Tarp & strap pay audit", "Direct steel/machinery brokers"],
  },
  {
    id: "poweronly",
    label: "Power Only",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1501700493788-df1a079e03de?auto=format&fit=crop&q=80&w=1200",
    targetRPM: "$3.25 - $3.75 / mi",
    avgWeeklyGross: "$12,000 - $15,000",
    keyLanes: ["Amazon / Walmart Trailer Relocation", "Regional Drop-and-Hook Networks"],
    protocol: "Maximum asset utilization for tractors without trailers. Zero trailer maintenance burden with continuous trailer repos.",
    features: ["Pre-loaded trailer drop & hook focus", "Zero loading dock wait time targets", "High-efficiency rotation"],
  },
];

export default function EquipmentShowcase() {
  const [activeTab, setActiveTab] = useState<EquipmentTab>(tabs[0]);

  return (
    <section className="py-10 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-slate-900">
            Tailored To Your Trailer Type.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Select your equipment below to view dedicated dispatch benchmarks and lane optimization protocols.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 rounded-full font-display text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-sky-400" : "text-blue-600"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-slate-50/80 rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left Info Panel */}
            <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-0.5 rounded bg-blue-50 border border-blue-200 font-mono text-xs text-blue-700 font-bold">
                    Target RPM: {activeTab.targetRPM}
                  </span>
                  <span className="px-3 py-0.5 rounded bg-emerald-50 border border-emerald-200 font-mono text-xs text-emerald-700 font-bold">
                    Weekly Gross: {activeTab.avgWeeklyGross}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-semibold text-slate-900 tracking-tight">
                    {activeTab.label} Execution Strategy
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                    {activeTab.protocol}
                  </p>
                </div>

                {/* Key Lanes */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono uppercase text-slate-500 font-bold">
                    High-Density Revenue Lanes
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeTab.keyLanes.map((lane, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 font-mono text-xs text-slate-800 shadow-2xs">
                        {lane}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  {activeTab.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Zero forced dispatch guarantee</span>
                <Link
                  href="/onboarding"
                  className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>Dispatch This Equipment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image Panel */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200">
              <Image
                src={activeTab.image}
                alt={activeTab.label}
                fill
                className="object-cover object-center filter brightness-90 contrast-110 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 font-mono text-[11px] text-slate-900 shadow-md">
                <span className="text-blue-600 block font-bold">LIVE DISPATCH METRIC</span>
                <span>Active 24/7 Spot Rate Protection</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
