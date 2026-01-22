import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const flashcardFeatures = [
  "Spaced repetition scheduling to maximize recall.",
  "Quick review mode for last-minute prep.",
  "Subject and topic tagging for focused sessions.",
  "Import formulas or definitions with bulk add.",
];

const reviewModes = [
  {
    title: "Focus Sprint",
    description: "Short 10-15 minute sessions for daily revision.",
  },
  {
    title: "Exam Booster",
    description: "Prioritize weak cards during final week review.",
  },
  {
    title: "Mixed Practice",
    description: "Shuffle across subjects to build mental switching skills.",
  },
];

export default function FlashcardsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Tools"
        title="Flashcards"
        description="Spaced repetition flashcards with fast revision modes and subject tagging."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Key features</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {flashcardFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Review modes</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-300">
            {reviewModes.map((mode) => (
              <div key={mode.title}>
                <p className="font-semibold text-white">{mode.title}</p>
                <p className="mt-1 text-slate-300">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
