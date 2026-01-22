import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const geometryFeatures = [
  "Construct triangles, circles, and polygons.",
  "Snap lines to key angles and midpoints.",
  "Measure lengths, angles, and areas.",
  "Save construction steps for revision.",
];

const practiceIdeas = [
  "Build proofs with step-by-step labels.",
  "Explore similarity and congruence rules.",
  "Create coordinate geometry diagrams.",
];

export default function GeometryToolsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Math Zone"
        title="Geometry Tools"
        description="Construct geometric figures and explore properties with visual guidance."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Core toolkit</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {geometryFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">
            Practice workflows
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {practiceIdeas.map((item) => (
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
