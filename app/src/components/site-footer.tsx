import Link from "next/link";

const quickLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/science-lab", label: "Science Lab" },
  { href: "/math-zone", label: "Math Zone" },
  { href: "/dashboard", label: "Dashboard" },
];

const toolsLinks = [
  { href: "/tools/timetable-builder", label: "Timetable Builder" },
  { href: "/tools/flashcards", label: "Flashcards" },
  { href: "/tools/formula-sheets", label: "Formula Sheets" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">
              Learning Playground
            </p>
            <p className="mt-3 text-sm text-slate-300">
              A student-first workspace for study planning, visual learning, and
              focused exam prep.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Explore</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Student Tools</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
              {toolsLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-400">
          Built for students preparing for school and competitive exams.
        </div>
      </div>
    </footer>
  );
}
