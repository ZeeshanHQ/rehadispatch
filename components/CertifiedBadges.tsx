"use client";

import { ShieldCheck, Award, CheckCircle2, Lock, FileText, Star } from "lucide-react";
import { motion } from "framer-motion";

const certifiedBadges = [
  {
    icon: ShieldCheck,
    title: "FMCSA Certified",
    sub: "Licensed Carrier Representative",
    badge: "Verified USDOT",
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    icon: Award,
    title: "DAT One Diamond Desk",
    sub: "Priority Load Arbitrage",
    badge: "5.0 Rating",
    color: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    icon: Star,
    title: "Truckstop Pro Verified",
    sub: "Direct Broker Escalation",
    badge: "Diamond Partner",
    color: "text-sky-600 bg-sky-50 border-sky-200",
  },
  {
    icon: Lock,
    title: "RTS & Triumph Approved",
    sub: "Instant NOA Clearance",
    badge: "Same-Day Payout",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    icon: FileText,
    title: "ISO 9001 Quality Audit",
    sub: "100% Rate Con Accuracy",
    badge: "Audited Protocol",
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
  },
];

export default function CertifiedBadges() {
  return (
    <section className="py-8 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">
            Certified US Freight Accreditation & Compliance Badges
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {certifiedBadges.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl ${item.color} border`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {item.badge}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-slate-900 flex items-center gap-1">
                    <span>{item.title}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  </h4>
                  <p className="text-[10px] font-mono text-slate-500 mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
