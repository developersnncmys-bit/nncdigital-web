"use client";

import ScrollReveal from "@/components/parallax/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal distance={30}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Contact</p>
          <h2 className="mb-4 text-3xl font-extrabold leading-snug text-slate-900 md:text-[2.5rem]">
            Let&apos;s talk about your project
          </h2>
          <p className="mb-16 max-w-lg text-[15px] leading-relaxed text-slate-500">
            Tell us what you&apos;re building. We&apos;ll respond within one business day with a tailored plan.
          </p>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <ScrollReveal distance={30}>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-slate-500">Name</label>
                  <input id="name" type="text" placeholder="John Smith" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-500">Email</label>
                  <input id="email" type="email" placeholder="john@company.ca" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-slate-500">Company</label>
                  <input id="company" type="text" placeholder="Company" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10" />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-xs font-semibold text-slate-500">Service</label>
                  <select id="service" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10">
                    <option>Select a service</option>
                    <option>CRM Development</option>
                    <option>Website Development</option>
                    <option>Mobile App Development</option>
                    <option>Google Ads</option>
                    <option>Multiple / Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-500">Project Details</label>
                <textarea id="message" rows={4} placeholder="Describe your project, timeline, and budget..." className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10" />
              </div>
              <button type="submit" className="rounded-lg bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Send Message
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <div className="space-y-5">
              <div className="rounded-xl bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)]">
                <p className="mb-0.5 text-xs font-semibold text-slate-400">🇨🇦 Canada</p>
                <p className="text-sm font-semibold text-slate-900">NNC Digital</p>
                <p className="mt-1.5 text-sm text-slate-500">info@nncdigital.ca</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)]">
                <p className="mb-0.5 text-xs font-semibold text-slate-400">🇮🇳 India</p>
                <p className="text-sm font-semibold text-slate-900">Nakshatra Namaha Creations</p>
                <p className="mt-1.5 text-sm text-slate-500">Development &amp; Engineering Hub</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-5 text-center">
                <p className="mb-1 text-sm font-semibold text-slate-900">Prefer a call?</p>
                <p className="mb-3 text-xs text-slate-500">Book a free 30-minute consultation</p>
                <a href="#contact" className="text-sm font-semibold text-blue-600 transition hover:text-blue-700">Schedule &rarr;</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
