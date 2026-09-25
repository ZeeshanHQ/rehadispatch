"use client";

const brokers = [
  { name: "DAT ONE", badge: "Premium Load Board" },
  { name: "TRUCKSTOP.COM", badge: "Rate Benchmarking" },
  { name: "TQL (Total Quality)", badge: "Direct Tier 1 Broker" },
  { name: "C.H. ROBINSON", badge: "Enterprise Freight" },
  { name: "LANDSTAR", badge: "High-RPM Specialized" },
  { name: "COYOTE LOGISTICS", badge: "UPS Network" },
  { name: "RXO FREIGHT", badge: "Digital Marketplace" },
  { name: "ECHO LOGISTICS", badge: "Priority Freight Desk" },
  { name: "RTS FINANCIAL", badge: "Integrated Factoring" },
  { name: "TRIUMPH PAY", badge: "Instant Express Pay" },
];

export default function BrokerMarquee() {
  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-5 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">
          Direct Integrations & Verified Premium Broker Networks
        </span>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 animate-marquee items-center gap-4">
          {[...brokers, ...brokers].map((b, i) => (
            <div
              key={i}
              className="bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-slate-300 flex items-center gap-3 transition-colors shrink-0 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <div className="flex flex-col">
                <span className="font-mono font-bold text-xs text-slate-900 tracking-wider">
                  {b.name}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  {b.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
