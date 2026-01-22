import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const progressMetrics = [
  "Total study hours and daily averages.",
  "Subject-wise focus time breakdown.",
  "Weak topics flagged after quizzes.",
  "Upcoming exam timeline view.",
];

const actions = [
  "Generate a focused revision plan for weak topics.",
  "Schedule extra sessions for missed targets.",
  "Export a weekly progress report.",
];

export default function ProgressPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Dashboard"
        title="Progress tracking"
        description="Measure study time, detect weak subjects, and plan the next week quickly."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Metrics to show</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {progressMetrics.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Next actions</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {actions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
