"use client";

import ScrollReveal from "@/components/parallax/ScrollReveal";

const stack: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "PHP", "Laravel", ".NET", "Java"],
  Mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  Cloud: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  Data: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  Platforms: ["Salesforce", "HubSpot", "Zoho", "Shopify", "WordPress"],
};

export default function TechStack() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal distance={30}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Technology</p>
          <h2 className="mb-16 text-3xl font-extrabold leading-snug text-slate-900 md:text-[2.5rem]">
            Built with modern tools
          </h2>
        </ScrollReveal>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(stack).map(([cat, techs], i) => (
            <ScrollReveal key={cat} distance={25} delay={i * 0.04}>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-700">{t}</span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
