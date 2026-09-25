"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Protocol" },
  { href: "/pricing", label: "Pricing & ROI" },
  { href: "/onboarding", label: "Driver Setup" },
  { href: "/contact", label: "Dispatch Hub" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
      <nav className="bg-white/95 backdrop-blur-md rounded-full px-5 py-2.5 flex items-center justify-between shadow-lg border border-slate-200/90">
        {/* Custom Unique Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <BrandLogo className="w-8 h-8 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-none">
              REHA DISPATCH<span className="text-blue-600">.</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-slate-500 font-mono font-semibold mt-0.5">
              Elite US Logistics
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200/70 rounded-full px-2 py-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-semibold transition-colors rounded-full ${
                  isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-white rounded-full border border-slate-200 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+19255040101"
            className="flex items-center gap-1.5 text-xs text-slate-700 hover:text-blue-600 px-3 py-1.5 rounded-full transition-colors font-mono font-semibold"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            +1 925 504 0101
          </a>
          <Link
            href="/onboarding"
            className="rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs px-4 py-2 flex items-center gap-1.5 shadow-sm transition-all"
          >
            <span>Get Onboarded</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="md:hidden mt-2 p-4 bg-white rounded-2xl border border-slate-200 shadow-xl flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 px-3 rounded-lg font-semibold text-xs transition-colors ${
                  pathname === link.href
                    ? "bg-slate-100 text-blue-600 font-bold border border-blue-200"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+19255040101"
                className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-900 font-mono text-center text-xs font-bold block"
              >
                Call: +1 925 504 0101
              </a>
              <Link
                href="/onboarding"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-center text-xs shadow-md block"
              >
                Start Carrier Onboarding
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
