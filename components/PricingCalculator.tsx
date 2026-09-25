"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingCalculator() {
  const [weeklyRevenue, setWeeklyRevenue] = useState<number>(12000);
  const [feeRate, setFeeRate] = useState<number>(6);

  // Calculations
  const dispatchFee = Math.round(weeklyRevenue * (feeRate / 100));
  const estimatedRpmUplift = Math.round(weeklyRevenue * 0.22);
  const netWeeklyProfitBump = estimatedRpmUplift - dispatchFee;

  return (
    <section className="py-10 relative overflow-hidden bg-white" id="pricing-plans">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-slate-900">
            Zero Contracts. Pure Performance.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We only earn when you earn. No hidden setup fees, zero long-term lock-ins, and 100% no-forced-dispatch control.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          
          {/* Card 1: Solo Operator Plan */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 relative">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700 font-bold uppercase">
                    1 - 4 Power Units
                  </span>
                  <h3 className="text-xl font-display font-semibold text-slate-900 tracking-tight mt-1.5">
                    Solo Operator Dispatch
                  </h3>
                </div>
                <div className="text-right font-mono">
                  <div className="text-2xl font-bold text-blue-600">5% - 7%</div>
                  <div className="text-[10px] text-slate-500 font-semibold">per load gross</div>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Ideal for independent owner-operators and small carrier fleets looking for a dedicated logistics partner to maximize weekly gross revenue.
              </p>

              {/* Checklist */}
              <div className="space-y-2.5 pt-3 border-t border-slate-200 font-sans text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded bg-blue-50 text-blue-600"><Check className="w-3 h-3" /></div>
                  <span>Dedicated Senior Dispatcher (Direct Cell Line)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded bg-blue-50 text-blue-600"><Check className="w-3 h-3" /></div>
                  <span>100% No Forced Dispatch — Complete Control</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded bg-blue-50 text-blue-600"><Check className="w-3 h-3" /></div>
                  <span>Broker Setup Packets & COI Certificate Handling</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded bg-blue-50 text-blue-600"><Check className="w-3 h-3" /></div>
                  <span>Full Invoicing, BOL Verification & Factoring Setup</span>
                </div>
              </div>
            </div>

            <Link
              href="/onboarding"
              className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold font-display text-xs text-center border border-slate-200 transition-all"
            >
              Start Solo Carrier Setup
            </Link>
          </div>

          {/* Card 2: Fleet Scale Plan */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 font-mono text-[11px] text-sky-400 font-bold uppercase">
                    5+ Power Units
                  </span>
                  <h3 className="text-xl font-display font-semibold text-white tracking-tight mt-1.5">
                    Fleet Scale Orchestration
                  </h3>
                </div>
                <div className="text-right font-mono">
                  <div className="text-2xl font-bold text-white">Custom Tier</div>
                  <div className="text-[10px] text-sky-400 font-bold">Dedicated Team</div>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Custom dedicated dispatch desk for growing fleet owners. Includes shift rotation coverage, centralized rate negotiation, and fleet lane optimization.
              </p>

              {/* Checklist */}
              <div className="space-y-2.5 pt-3 border-t border-slate-800 font-sans text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded bg-blue-600 text-white"><Check className="w-3 h-3" /></div>
                  <span className="font-semibold text-white">Dedicated 2-Dispatcher Team with 24/7 Coverage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded bg-blue-600 text-white"><Check className="w-3 h-3" /></div>
                  <span>Volume Tier Fee Discounts (4% - 5% Flat Rates)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded bg-blue-600 text-white"><Check className="w-3 h-3" /></div>
                  <span>Weekly Fleet Gross Revenue & Driver Mileage Analytics</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold font-display text-xs text-center shadow-md transition-all"
            >
              Consult Fleet Dispatch Manager
            </Link>
          </div>
        </div>

        {/* Interactive ROI Calculator Sub-Section */}
        <div className="bg-slate-50/80 rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs" id="roi">
          <div className="max-w-2xl mb-6 space-y-1">
            <h3 className="text-xl font-display font-semibold text-slate-900">
              Dispatch ROI Calculator
            </h3>
            <p className="text-slate-600 text-xs">
              See how Reha Dispatch's rate negotiation protocol pays for itself while putting extra dollars into your bank account.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Current Target Weekly Gross</span>
                  <span className="font-mono text-blue-600 text-sm">${weeklyRevenue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={6000}
                  max={20000}
                  step={500}
                  value={weeklyRevenue}
                  onChange={(e) => setWeeklyRevenue(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Dispatch Fee Percent</span>
                  <span className="font-mono text-slate-900">{feeRate}%</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={7}
                  step={0.5}
                  value={feeRate}
                  onChange={(e) => setFeeRate(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>
            </div>

            {/* Output Display Box */}
            <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 font-mono">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Reha Dispatch Fee ({feeRate}%):</span>
                <span className="text-rose-600 font-bold">-${dispatchFee.toLocaleString()} / wk</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Est. Rate Con Uplift (+22% vs Cheap Boards):</span>
                <span className="text-blue-600 font-bold">+${estimatedRpmUplift.toLocaleString()} / wk</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                <span className="text-xs text-slate-900 font-sans font-semibold">Net Weekly Extra Profit:</span>
                <span className="text-xl font-bold text-emerald-600">+${netWeeklyProfitBump.toLocaleString()} / wk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
