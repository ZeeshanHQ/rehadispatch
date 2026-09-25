"use client";

import { useState, useId } from "react";
import { TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface EquipmentOption {
  id: string;
  name: string;
  avgRPM: number;       // Reha average rate per mile
  industryRPM: number;  // Standard cheap broker average rate per mile
  desc: string;
}

const equipmentTypes: EquipmentOption[] = [
  { id: "dryvan", name: "Dry Van (53')", avgRPM: 3.15, industryRPM: 2.35, desc: "High-volume freight with spot market rate optimization." },
  { id: "reefer", name: "Reefer (Temperature Control)", avgRPM: 3.65, industryRPM: 2.75, desc: "Time-sensitive produce & pharmaceutical high-RPM lanes." },
  { id: "flatbed", name: "Flatbed / Stepdeck", avgRPM: 3.85, industryRPM: 2.95, desc: "Heavy machinery, steel coils & specialized oversized loads." },
  { id: "poweronly", name: "Power Only", avgRPM: 3.35, industryRPM: 2.45, desc: "Asset-light drop & hook dedicated fleet orchestration." },
];

export default function RateEstimator() {
  const [selectedEq, setSelectedEq] = useState<EquipmentOption>(equipmentTypes[0]);
  const [miles, setMiles] = useState<number>(2600);
  const [dispatchFeePct, setDispatchFeePct] = useState<number>(6);
  const eqSelectId = useId();

  // Calculations
  const rehaWeeklyGross = Math.round(miles * selectedEq.avgRPM);
  const industryWeeklyGross = Math.round(miles * selectedEq.industryRPM);
  const weeklyUplift = rehaWeeklyGross - industryWeeklyGross;
  const rehaDispatchFee = Math.round(rehaWeeklyGross * (dispatchFeePct / 100));
  const rehaNetGross = rehaWeeklyGross - rehaDispatchFee;
  const annualUplift = weeklyUplift * 50;

  return (
    <section className="py-10 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-slate-900">
            Engineered Revenue vs. Industry Standard
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Adjust your equipment type and weekly miles below to calculate estimated weekly gross earnings with Reha Dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-slate-50/80 rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Equipment Type Selector */}
              <div>
                <label htmlFor={eqSelectId} className="block text-xs font-mono uppercase text-slate-700 mb-2 flex items-center justify-between font-bold">
                  <span>1. Equipment Class</span>
                  <span className="text-blue-600">{selectedEq.name}</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5" id={eqSelectId}>
                  {equipmentTypes.map((eq) => (
                    <button
                      key={eq.id}
                      onClick={() => setSelectedEq(eq)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                        selectedEq.id === eq.id
                          ? "bg-white border-blue-600 text-slate-900 shadow-md ring-2 ring-blue-500/20"
                          : "bg-white border-slate-200/80 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <span className="font-semibold text-xs font-display text-slate-900">{eq.name}</span>
                      <span className="text-[11px] font-mono text-blue-600 font-bold mt-1">Est. ${eq.avgRPM}/mi</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weekly Mileage Slider */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase text-slate-700 font-bold">
                    2. Planned Weekly Mileage
                  </label>
                  <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                    {miles.toLocaleString()} miles/wk
                  </span>
                </div>
                <input
                  type="range"
                  min={1500}
                  max={4000}
                  step={100}
                  value={miles}
                  onChange={(e) => setMiles(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              {/* Dispatch Fee Slider */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase text-slate-700 font-bold">
                    3. Dispatch Fee Percentage
                  </label>
                  <span className="font-mono text-xs font-bold text-slate-900">
                    {dispatchFeePct}% flat fee
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={8}
                  step={0.5}
                  value={dispatchFeePct}
                  onChange={(e) => setDispatchFeePct(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Includes 100% back-office paperwork, rate con audits, and zero forced dispatch.</span>
            </div>
          </div>

          {/* Real-time Calculation Display */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Estimated Gross Revenue Output
                </span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold">
                  High-RPM Guaranteed
                </span>
              </div>

              {/* Main Comparison Numbers */}
              <div className="space-y-3">
                <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Reha Target Gross</div>
                    <div className="text-2xl md:text-3xl font-mono font-bold text-white mt-0.5">
                      ${rehaWeeklyGross.toLocaleString()}<span className="text-xs text-slate-400 font-sans">/wk</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-mono text-sky-400 uppercase">Rate Per Mile</div>
                    <div className="text-xl font-mono font-bold text-sky-400 mt-0.5">
                      ${selectedEq.avgRPM.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-850 border border-slate-800 rounded-2xl p-3.5 flex items-center justify-between text-slate-400">
                  <div>
                    <div className="text-[11px] font-mono uppercase">Standard Load Board Avg</div>
                    <div className="text-base font-mono font-semibold text-slate-400 mt-0.5">
                      ${industryWeeklyGross.toLocaleString()}/wk
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-mono uppercase">Industry RPM</div>
                    <div className="text-sm font-mono">
                      ${selectedEq.industryRPM.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly & Annual Uplift Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 to-sky-900/40 border border-sky-500/30 space-y-1.5">
                <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold uppercase">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Your Reha Revenue Advantage
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-slate-300 text-xs">Weekly Gross Increase:</span>
                  <span className="font-mono text-xl font-bold text-emerald-400">
                    +${weeklyUplift.toLocaleString()} / wk
                  </span>
                </div>
                <div className="flex items-baseline justify-between pt-1 border-t border-slate-700/60">
                  <span className="text-slate-300 text-[11px]">Projected Annual Revenue Uplift:</span>
                  <span className="font-mono text-base font-bold text-white">
                    +${annualUplift.toLocaleString()} / yr
                  </span>
                </div>
              </div>
            </div>

            {/* CTA inside Widget */}
            <div className="pt-4 mt-4 border-t border-slate-800 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-400">
                Net Payout ({dispatchFeePct}% fee): <strong className="text-white font-mono">${rehaNetGross.toLocaleString()}</strong>
              </div>
              <Link
                href="/onboarding"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <span>Lock In High-RPM Loads</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
