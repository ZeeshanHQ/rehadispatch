"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What documents are required to start dispatching with Reha Dispatch?",
    answer: "You only need 4 standard documents to start: (1) Active MC/DOT Authority Letter with at least 30-90 days active status, (2) Signed W-9 Form, (3) Insurance COI listing minimum $100,000 Cargo and $1,000,000 Auto Liability, and (4) Factoring NOA (Notice of Assignment) if you factor your invoices.",
  },
  {
    question: "Is there any long-term contract or forced dispatch?",
    answer: "Absolutely not. Reha Dispatch operates on a 100% no-forced-dispatch model. You retain complete authority to approve or decline any load, lane, or rate con. Our agreements are pay-as-you-go with zero long-term cancellation penalties.",
  },
  {
    question: "How do you negotiate rates with brokers?",
    answer: "We utilize real-time spot market rate intelligence tools (DAT One, Truckstop Pro, and private lane data) to benchmark rates before contacting brokers. We negotiate directly with senior freight brokers to lock in top-tier rate confirmations, including tarp pay, detention guarantees, and layover clauses.",
  },
  {
    question: "Can I use my existing factoring company?",
    answer: "Yes. We integrate seamlessly with all major US factoring companies (including RTS Financial, OTR Capital, Apex Capital, Triumph Pay, and WEX). We handle all rate con and BOL submissions directly to your factor so you receive same-day payouts.",
  },
  {
    question: "What equipment classes do you dispatch?",
    answer: "We specialize in 53' Dry Vans, Temperature-Controlled Reefers, Flatbeds, Stepdecks, Heavy Haul, and Power Only units running regional or long-haul nationwide routes across all continental 48 US states.",
  },
  {
    question: "How do you handle detention and layover claims?",
    answer: "Your dedicated dispatcher tracks loading/unloading times in real time. If a shipper delays your truck beyond the 2-hour free time window, we immediately file formal detention billing ($50-$75/hr) and ensure it is added directly to your updated rate confirmation.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 relative overflow-hidden bg-slate-50/50" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-slate-900">
            Clear Answers. Zero Ambiguity.
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about Reha Dispatch operations.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-blue-300 shadow-md ring-1 ring-blue-500/20" : "border-slate-200/80 hover:border-slate-300 shadow-2xs"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-semibold text-sm text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1.5 rounded-full text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-50" : "bg-slate-100"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed font-sans border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
