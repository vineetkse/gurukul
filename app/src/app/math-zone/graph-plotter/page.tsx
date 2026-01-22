import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const plotterFeatures = [
  "Plot linear, quadratic, trig, and exponential functions.",
  "Adjust parameters with sliders or input fields.",
  "Show intercepts, maxima, and minima instantly.",
  "Overlay multiple graphs for comparison.",
];

const learningIdeas = [
  "Quick compare sine and cosine shifts.",
  "Trace slopes at points for calculus prep.",
  "Generate exam-style graph questions.",
];

export default function GraphPlotterPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Math Zone"
        title="Graph Plotter"
        description="Visualize equations with interactive graphs and instant parameter control."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Plotter features</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {plotterFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">
            Learning use cases
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {learningIdeas.map((item) => (
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
