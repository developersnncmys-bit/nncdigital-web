const links: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "CRM Development", href: "#services" },
    { label: "Website Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-3 text-sm font-bold text-slate-900">NNC Digital</p>
            <p className="text-xs leading-relaxed text-slate-400">Custom software for Canadian businesses. Powered by Nakshatra Namaha Creations.</p>
            <div className="mt-3 flex gap-2 text-xs text-slate-400">
              <span>🇨🇦 Canada</span>
              <span>&middot;</span>
              <span>🇮🇳 India</span>
            </div>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</p>
              <ul className="space-y-2">
                {items.map((l) => (
                  <li key={l.label}><a href={l.href} className="text-sm text-slate-500 transition hover:text-slate-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} NNC Digital. All rights reserved.</p>
          <p className="text-xs text-slate-400">Engineering by Nakshatra Namaha Creations</p>
        </div>
      </div>
    </footer>
  );
}
