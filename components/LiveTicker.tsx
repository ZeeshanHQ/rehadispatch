"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, ShieldCheck, Clock, Zap } from "lucide-react";

const tickerItems = [
  { icon: DollarSign, label: "Average Carrier Rate", value: "$3.42 / Mile", note: "+38% vs US Nat Avg" },
  { icon: TrendingUp, label: "Target Weekly Gross", value: "$12,800+", note: "Per Dry Van / Reefer" },
  { icon: ShieldCheck, label: "Broker Transparency", value: "100%", note: "Direct Rate Con Audits" },
  { icon: Clock, label: "Dispatch Response Time", value: "< 2 Minutes", note: "Dedicated Single Desk" },
  { icon: Zap, label: "Factoring Payout Speed", value: "Same-Day", note: "0% Vanguard Cut" },
];

export default function LiveTicker() {
  return (
    <div className="w-full bg-slate-50 border-y border-slate-200/80 py-4 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {tickerItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    {item.label}
                  </span>
                  <div className="p-1 rounded-lg bg-slate-100 text-blue-600 group-hover:scale-110 transition-transform">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="font-mono text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                  {item.value}
                </div>
                <div className="text-[10px] text-emerald-600 font-mono font-bold mt-0.5">
                  {item.note}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
