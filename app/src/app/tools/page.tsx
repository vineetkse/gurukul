import Link from "next/link";

import { FeatureCard } from "@/components/feature-card";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const tools = [
  {
    title: "Timetable Builder",
    description:
      "Drag and drop subjects, set daily and weekly targets, and export study plans.",
    href: "/tools/timetable-builder",
    items: [
      "Color-coded subjects with focus tags.",
      "Daily, weekly, and exam prep views.",
      "Auto balance study and rest blocks.",
    ],
  },
  {
    title: "Flashcards",
    description:
      "Spaced repetition decks for formulas, definitions, and quick recall.",
    href: "/tools/flashcards",
    items: [
      "Smart review scheduling.",
      "Quick quiz and revision modes.",
      "Topic grouping for exams.",
    ],
  },
  {
    title: "Formula Sheets",
    description:
      "Build and share compact formula walls for each subject.",
    href: "/tools/formula-sheets",
    items: [
      "Subject-based tags and filters.",
      "One-page printable layouts.",
      "Highlight high-frequency formulas.",
    ],
  },
];

export default function ToolsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Tools"
        title="Reusable study utilities"
        description="Plan your week, revise faster, and keep key formulas in one place."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {tools.map((tool) => (
          <FeatureCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            items={tool.items}
            href={tool.href}
            cta="Open tool"
          />
        ))}
      </div>
      <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Study streak mode
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              Track consistency with a heatmap and unlock streak badges.
            </p>
          </div>
          <Link
            href="/dashboard/streaks"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-100"
          >
            View streaks
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
