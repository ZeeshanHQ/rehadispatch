import type { Metadata } from "next";
import OnboardingWizard from "@/components/OnboardingWizard";
import CertifiedBadges from "@/components/CertifiedBadges";

export const metadata: Metadata = {
  title: "Fast Carrier Onboarding (15-Min Setup)",
  description:
    "Onboard your semi-truck or fleet in under 15 minutes. Pair with a dedicated senior freight dispatcher, verify your MC Authority, and start hauling high-RPM loads today.",
  alternates: {
    canonical: "https://rehadispatch.com/onboarding",
  },
};

export default function OnboardingPage() {
  return (
    <div className="space-y-6 pb-12 bg-white">
      {/* Header */}
      <section className="relative pt-6 pb-2 text-center bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-6 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-slate-900 tracking-tight">
            Start Dispatching In <span className="text-gradient-cyan">15 Minutes.</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Complete the 4-step carrier profile below. Upload your MC Authority, W-9, and COI to be paired with your dedicated Senior Dispatcher today.
          </p>
        </div>
      </section>

      {/* CERTIFIED BADGES BAR */}
      <CertifiedBadges />

      {/* MULTI-STEP WIZARD */}
      <OnboardingWizard />
    </div>
  );
}
