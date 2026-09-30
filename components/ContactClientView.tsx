"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import CertifiedBadges from "@/components/CertifiedBadges";
import { supabase } from "@/lib/supabaseClient";

export default function ContactClientView() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    mcNumber: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        await supabase.from("contact_inquiries").insert([
          {
            name: form.name,
            email: form.email,
            phone: form.phone,
            mc_dot: form.mcNumber,
            message: form.message,
            status: "new"
          }
        ]);
      }
    } catch (err) {
      console.error("Contact notice:", err);
    } finally {
      setSubmitted(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 pb-12 bg-white">
      {/* Header */}
      <section className="relative pt-6 pb-2 text-center bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-6 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-slate-900 tracking-tight">
            Direct Contact & <span className="text-gradient-cyan">Dispatch Desk.</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Need immediate load assistance, rate quote audits, or emergency broker escalation? Speak directly with our active operational command center at Reha Dispatch.
          </p>
        </div>
      </section>

      {/* CERTIFIED BADGES BAR */}
      <CertifiedBadges />

      {/* Main Hub Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 space-y-5 shadow-xl">
              <h3 className="text-lg font-display font-semibold text-white">Emergency Dispatch Hotline</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Active drivers under load receive 24/7 direct phone support. Our dispatch desk never sleeps.
              </p>

              <div className="space-y-3.5 font-mono text-xs pt-3 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-600 text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Direct Toll-Free Hotline</div>
                    <a href="tel:+15732295394" className="text-white font-bold text-sm hover:text-sky-400 transition-colors">+1 (573) 229-5394</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-600 text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Direct Email Desk</div>
                    <a href="mailto:contact@rehadispatch.com" className="text-slate-200 font-bold text-xs hover:text-white transition-colors">contact@rehadispatch.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-600 text-white">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Operating Hours</div>
                    <div className="text-emerald-400 font-bold text-xs">24 Hours / 7 Days a Week</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-3">
              <h4 className="font-mono text-[11px] text-slate-700 uppercase tracking-wider font-bold">
                US Regional Command Hubs
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" /> Dallas HQ (Texas Triangle)
                  </div>
                  <div className="text-slate-600 text-[11px]">1900 Victory Park Lane, Suite 1400, Dallas, TX 75201</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" /> Chicago Cold Chain Desk
                  </div>
                  <div className="text-slate-600 text-[11px]">300 N LaSalle St, Suite 2200, Chicago, IL 60654</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-semibold text-slate-900">Inquiry Transmitted</h3>
                <p className="text-slate-600 text-xs max-w-sm mx-auto">
                  Thank you! Your message has been sent to <strong className="text-slate-900 font-mono">contact@rehadispatch.com</strong>. A Senior Logistics Strategist will call you back within 10 minutes at +1 (573) 229-5394.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-full bg-slate-900 text-white font-mono text-xs hover:bg-blue-600 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-display font-semibold text-slate-900">Send Direct Message to Reha Desk</h3>
                <p className="text-xs text-slate-500">Fill out your carrier info below to request a callback or load quote audit.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Cell Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (573) 229-5394"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="contact@rehadispatch.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">MC / DOT Number (Optional)</label>
                    <input
                      type="text"
                      placeholder="MC-XXXXXX"
                      value={form.mcNumber}
                      onChange={(e) => setForm({ ...form, mcNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Message / Equipment Details *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about your equipment, preferred lanes, or questions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold font-display text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message To Reha Dispatch</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
