"use client";

import ScrollReveal from "@/components/parallax/ScrollReveal";

const logos = [
  "SOC 2 Compliant",
  "NDA Protected",
  "PIPEDA Compliant",
  "Agile Certified",
  "24/7 Support",
];

export default function TrustBar() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal distance={20}>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Trusted &amp; Certified
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((l) => (
              <div key={l} className="flex items-center gap-2 text-slate-400">
                <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-sm font-medium text-slate-600">{l}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
