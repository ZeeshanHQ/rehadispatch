import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle, PhoneCall, Mail } from "lucide-react";
import LiveTicker from "@/components/LiveTicker";
import CertifiedBadges from "@/components/CertifiedBadges";
import RateEstimator from "@/components/RateEstimator";
import BentoGrid from "@/components/BentoGrid";
import EquipmentShowcase from "@/components/EquipmentShowcase";
import BrokerMarquee from "@/components/BrokerMarquee";

export default function HomePage() {
  return (
    <div className="space-y-4 bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-6 pb-10 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight leading-[1.08] text-slate-900">
              We Don't Find Loads.<br />
              <span className="font-semibold text-gradient-cyan">We Engineer Maximum Gross Revenue.</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              Reha Dispatch is a premier boutique US logistics partner for owner-operators and fleet owners running Dry Vans, Reefers, Flatbeds, and Power Only units. Dedicated dispatchers, zero forced dispatch, 24/7 broker negotiation, and automated back-office precision.
            </p>

            {/* Direct Contact Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <a href="tel:+19255040101" className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-900 font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                +1 925 504 0101
              </a>
              <a href="mailto:contact@rehadispatch.com" className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-900 font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                contact@rehadispatch.com
              </a>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <Link
                href="#estimator"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold font-display text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate Your RPM Uplift</span>
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-semibold font-display text-xs flex items-center justify-center gap-2 shadow-2xs transition-all"
              >
                <span>View Dispatch Plans</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
            </div>

            {/* Quick Trust Signals */}
            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% No Forced Dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dedicated Senior Dispatcher</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual (Clean Luxury Semi Truck Image) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[16/10] group">
              <Image
                src="/hero_truck.jpg"
                alt="Reha Dispatch Luxury Semi Truck Fleet"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* CERTIFIED ACCREDITATION BADGES BAR */}
      <CertifiedBadges />

      {/* LIVE METRICS TICKER */}
      <LiveTicker />

      {/* DASHBOARD PREVIEW & OPERATIONAL UI SECTION */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[16/9] group">
              <Image
                src="/dashboard_ui.jpg"
                alt="Reha Live Dispatch Dashboard"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-slate-900 tracking-tight">
              Real-Time Freight Analytics & Spot Rate Command
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every driver under Reha Dispatch receives 24/7 route optimization, spot market rate con auditing, and direct broker escalation using DAT One and Truckstop Pro analytics.
            </p>
            <div className="space-y-2 font-mono text-xs text-slate-700 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Live US Map Route Tracking & Weather Bottleneck Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Automated Detention Billing & Rate Con Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Same-Day Invoice Clearance to RTS & Triumph Pay</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE RATE & REVENUE ESTIMATOR WIDGET */}
      <div id="estimator">
        <RateEstimator />
      </div>

      {/* THE ELITE ADVANTAGE BENTO GRID */}
      <BentoGrid />

      {/* EQUIPMENT SHOWCASE PROTOCOL */}
      <EquipmentShowcase />

      {/* COMMAND HQ OFFICE SECTION */}
      <section className="py-10 bg-slate-50/80 border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-slate-900 tracking-tight">
              State-Of-The-Art US Logistics Command Headquarters
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Headquartered in Dallas, Texas with regional desks in Chicago and Atlanta. We operate 24 hours a day, 365 days a year to keep your wheels turning at peak RPMs.
            </p>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-500 font-bold uppercase">Reha HQ Dispatch Desk</span>
                <span className="text-emerald-600 font-bold">● ACTIVE 24/7</span>
              </div>
              <p className="text-xs text-slate-700 font-sans">
                Direct Hotline: <strong className="text-slate-900 font-mono">+1 925 504 0101</strong> | Email: <strong className="text-slate-900 font-mono">contact@rehadispatch.com</strong>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[16/9] group">
              <Image
                src="/dispatch_hq.jpg"
                alt="Reha Dispatch Corporate HQ Office"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* BROKER NETWORK MARQUEE */}
      <BrokerMarquee />

      {/* CALL TO ACTION BANNER */}
      <section className="py-10 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden text-center space-y-5 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight max-w-2xl mx-auto">
              Ready To Upgrade Your Weekly Gross Revenue?
            </h2>

            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
              Join America's premier owner-operators earning $3.40+ average rate per mile with Reha Dispatch. Call us directly at +1 925 504 0101 or email contact@rehadispatch.com.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/onboarding"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Start Carrier Onboarding</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-all"
              >
                Speak To Senior Dispatcher
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
