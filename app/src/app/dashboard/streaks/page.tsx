import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const streakFeatures = [
  "Daily consistency heatmap inspired by GitHub.",
  "Streak milestones for 3, 7, 14, and 30 days.",
  "Badge unlocks for subject streaks.",
  "Session reminders for streak recovery.",
];

const rewardIdeas = [
  "Unlock advanced tools after streak milestones.",
  "Earn XP points for every streak day.",
  "Weekly streak summary with highlights.",
];

export default function StreaksPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Dashboard"
        title="Study streaks"
        description="Keep momentum with a streak heatmap, XP rewards, and gentle reminders."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Streak features</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {streakFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Reward ideas</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {rewardIdeas.map((item) => (
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
