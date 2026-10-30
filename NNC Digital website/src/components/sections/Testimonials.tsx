"use client";

import ScrollReveal from "@/components/parallax/ScrollReveal";

const items = [
  { quote: "NNC Digital transformed our legacy CRM into a modern platform that our sales team actually loves. The custom dashboards alone saved us hours every week.", name: "Sarah M.", title: "VP Sales — Toronto" },
  { quote: "They delivered a polished iOS and Android app in 12 weeks on a tight budget. The quality rivaled agencies charging three times more.", name: "David C.", title: "CEO — Vancouver" },
  { quote: "Nakshatra Namaha Creations has incredibly skilled engineers. Combined with Canadian project management, it was the best outsourcing experience we've had.", name: "Michelle P.", title: "CTO — Calgary" },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal distance={30}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Testimonials</p>
          <h2 className="mb-16 text-3xl font-extrabold leading-snug text-slate-900 md:text-[2.5rem]">
            Trusted by businesses across Canada
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <ScrollReveal key={t.name} distance={40} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-2xl bg-slate-50 p-7">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <blockquote className="mb-6 flex-1 text-[15px] leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</blockquote>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.title}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
