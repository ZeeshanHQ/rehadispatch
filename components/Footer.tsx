import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="relative bg-[#090B10] text-slate-400 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Brand & Market Status */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <BrandLogo className="w-8 h-8 group-hover:scale-105 transition-transform" />
              <span className="font-display font-bold text-lg text-white tracking-tight">
                REHA DISPATCH<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Reha Dispatch is a premier boutique US freight orchestration firm. We engineer high-RPM gross revenue for premier owner-operators and fleet managers across all 48 continental states.
            </p>
          </div>

          {/* Minimalist Market Status Pill (Refined / Anti-Cheap) */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/70 border border-slate-700/80 w-fit text-slate-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[11px] font-mono font-medium tracking-wide">
              US Freight Markets Open • 24/7 Operations Desk
            </span>
          </div>
        </div>

        {/* Quick Links Column 1 */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 font-bold">
            Dispatch Protocols
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/services" className="hover:text-sky-400 transition-colors">Dry Van Division</Link></li>
            <li><Link href="/services" className="hover:text-sky-400 transition-colors">Reefer Operations</Link></li>
            <li><Link href="/services" className="hover:text-sky-400 transition-colors">Flatbed & Stepdeck</Link></li>
            <li><Link href="/services" className="hover:text-sky-400 transition-colors">Power Only Strategy</Link></li>
            <li><Link href="/services" className="hover:text-sky-400 transition-colors">Detention Claims</Link></li>
          </ul>
        </div>

        {/* Quick Links Column 2 */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 font-bold">
            Carrier Portal
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/onboarding" className="hover:text-sky-400 transition-colors">Fast Onboarding</Link></li>
            <li><Link href="/pricing" className="hover:text-sky-400 transition-colors">Dispatch Plans</Link></li>
            <li><Link href="/pricing#roi" className="hover:text-sky-400 transition-colors">RPM Calculator</Link></li>
            <li><Link href="/pricing#faq" className="hover:text-sky-400 transition-colors">Carrier FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-sky-400 transition-colors">24/7 Desk Hotline</Link></li>
          </ul>
        </div>

        {/* Contact info Column 3 */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 font-bold">
            Direct Dispatch Hub
          </h4>
          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
              <span>1900 Victory Park Lane, Suite 1400, Dallas, TX 75201</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <a href="tel:+19255040101" className="font-mono text-white font-bold hover:text-sky-400 transition-colors">+1 925 504 0101</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <a href="mailto:contact@rehadispatch.com" className="font-mono text-slate-300 hover:text-white transition-colors">contact@rehadispatch.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-5 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
        <p>© {new Date().getFullYear()} Reha Dispatch LLC. All Rights Reserved. FMCSA compliant carrier representative.</p>
        <div className="flex items-center gap-5 font-mono">
          <span className="hover:text-slate-300 cursor-pointer">Privacy Protocol</span>
          <span className="hover:text-slate-300 cursor-pointer">Terms of Dispatch</span>
          <span className="hover:text-slate-300 cursor-pointer">FMCSA Compliance</span>
        </div>
      </div>
    </footer>
  );
}
