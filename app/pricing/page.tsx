import type { Metadata } from "next";
import PricingCalculator from "@/components/PricingCalculator";
import FaqAccordion from "@/components/FaqAccordion";
import CertifiedBadges from "@/components/CertifiedBadges";

export const metadata: Metadata = {
  title: "Transparent Dispatch Pricing & Fee Calculator",
  description:
    "Explore transparent freight dispatch pricing starting at 5% per load. Zero hidden fees, no long-term contracts, and 100% detention passed directly to carriers.",
  alternates: {
    canonical: "https://rehadispatch.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="space-y-8 pb-12 bg-white">
      {/* Page Header */}
      <section className="relative pt-6 pb-4 text-center bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-6 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-slate-900 tracking-tight">
            Simple Rates. <span className="text-gradient-cyan">Maximum Return.</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Choose the dispatch structure that fits your fleet. We charge a flat percentage model only when you get paid on delivered loads.
          </p>
        </div>
      </section>

      {/* CERTIFIED BADGES BAR */}
      <CertifiedBadges />

      {/* PRICING PLANS & ROI CALCULATOR */}
      <PricingCalculator />

      {/* FAQ ACCORDION */}
      <FaqAccordion />
    </div>
  );
}
