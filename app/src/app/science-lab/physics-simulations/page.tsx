import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const simulations = [
  {
    title: "Projectile Motion",
    description: "Adjust angle, velocity, and gravity to see trajectories.",
  },
  {
    title: "Ohm's Law",
    description: "Tune voltage and resistance to understand current flow.",
  },
  {
    title: "Wave Interference",
    description: "Combine waves and study constructive patterns.",
  },
  {
    title: "Electric Field",
    description: "Visualize field lines around charges.",
  },
];

const learningSupport = [
  "Step-by-step hints beside each simulator.",
  "Exam-style questions after each scenario.",
  "Quick reset and parameter presets.",
];

export default function PhysicsSimulationsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Science Lab"
        title="Physics Simulations"
        description="Simple, student-first simulations inspired by PhET-style labs."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Core simulations</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-300">
            {simulations.map((simulation) => (
              <div key={simulation.title}>
                <p className="font-semibold text-white">{simulation.title}</p>
                <p className="mt-1 text-slate-300">
                  {simulation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Learning support</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {learningSupport.map((item) => (
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
