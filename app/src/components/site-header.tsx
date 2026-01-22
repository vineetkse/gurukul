import Link from "next/link";

const navItems = [
  { href: "/tools", label: "Tools" },
  { href: "/science-lab", label: "Science Lab" },
  { href: "/math-zone", label: "Math Zone" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/community", label: "Community" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-semibold text-white sm:text-lg"
        >
          Learning Playground
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-emerald-200 sm:text-sm"
          >
            Open Dashboard
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-3 md:hidden">
        <div className="flex flex-wrap gap-3 text-xs text-slate-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
