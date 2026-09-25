"use client";

import { motion } from "framer-motion";
import { 
  UserCheck, 
  FileCheck, 
  Zap, 
  BarChart3, 
  CheckCircle
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-10 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-slate-900">
            Engineered For Elite Fleet Growth.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Every load booked by Reha Dispatch is backed by spot rate intelligence, direct broker escalation, and 100% back-office automation.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Bento Item 1: Precision Rate Negotiation (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 tracking-tight">
                Precision Broker Rate Negotiation
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We leverage DAT One, Truckstop Pro, and private lane data to benchmark broker offer rates before making a single call. We never take standard posted rate cons.
              </p>
            </div>

            {/* Feature Mockup Graphic */}
            <div className="mt-6 p-3.5 rounded-xl bg-slate-900 font-mono text-xs space-y-1.5 relative z-10 text-white shadow-md">
              <div className="flex justify-between text-slate-400 pb-1.5 border-b border-slate-800">
                <span>Broker Offer: <s className="text-slate-500">$2,400</s></span>
                <span className="text-emerald-400 font-bold">Reha Negotiated: $3,250</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 text-[11px]">
                <span>Lane: Atlanta, GA ➔ Chicago, IL</span>
                <span className="text-sky-400 font-bold">+$3.82/mi</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2: Dedicated Single Dispatcher (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-5 bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 tracking-tight">
                Dedicated Senior Dispatcher
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Zero call centers. Direct cell line to your assigned Senior Logistics Strategist who knows your equipment, preferred lanes, and target gross.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-mono font-bold text-xs">
                RD
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900 font-display">Marcus Vance</div>
                <div className="text-[10px] text-slate-500 font-mono">Senior Reha Dispatch Partner</div>
              </div>
              <div className="ml-auto flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 3: Automated Back-Office & Packet Setup (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-5 bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 tracking-tight">
                Automated Carrier Packets
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Carrier setups, W9, Insurance COI certificates, Rate Confirmation verification, Detention claims, and NOA handling in under 5 minutes.
              </p>
            </div>

            <div className="mt-6 space-y-1.5 text-xs font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Broker Setup Packets Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Rate Confirmation Verification</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 4: Factoring & Fast-Pay Integration (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 tracking-tight">
                Direct Factoring & Same-Day Payout
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Direct integration with RTS Financial, OTR Capital, Apex Capital, and Triumph Pay. BOLs submitted immediately for same-day bank deposits.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between font-mono text-xs">
              <div>
                <span className="text-slate-500 text-[10px] block">Direct Payout Speed</span>
                <span className="text-slate-900 font-bold">Same-Day ACH / Fuel Card Load</span>
              </div>
              <div className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-[11px]">
                0% Reha Cut
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
