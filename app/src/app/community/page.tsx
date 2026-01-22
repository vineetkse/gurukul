import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const communityIdeas = [
  "Share study templates and schedules.",
  "Browse student-made flashcard decks.",
  "Find subject-specific study challenges.",
  "Collaborate on revision sheets.",
];

export default function CommunityPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Community"
        title="Community features"
        description="A future space for sharing study plans, resources, and challenges."
      />
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h2 className="text-lg font-semibold text-white">Planned ideas</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          {communityIdeas.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
