import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const builderFeatures = [
  "Drag and drop subjects into daily slots.",
  "Color-coded blocks for quick scanning.",
  "Daily, weekly, and exam prep modes.",
  "AI-assisted balance across subjects.",
  "Export schedules as PDF or image.",
];

const planningFlow = [
  "Pick your exam date and available hours.",
  "Set subject priorities and weekly targets.",
  "Auto-fill the draft plan and adjust manually.",
  "Save as templates for reuse each term.",
];

export default function TimetableBuilderPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Tools"
        title="Smart Timetable Builder"
        description="Build flexible study schedules with drag and drop blocks, smart suggestions, and reusable templates."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Core features</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {builderFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">
            Suggested planning flow
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-300">
            {planningFlow.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400/60 text-xs font-semibold text-emerald-200">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Study streak mode
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Visualize consistency with a GitHub-style heatmap.
            </p>
          </div>
          <Link
            href="/dashboard/streaks"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-100"
          >
            See streaks
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
