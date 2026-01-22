import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const bondTypes = [
  {
    title: "Ionic Bonds",
    description: "Transfer electrons and visualize charge balance.",
  },
  {
    title: "Covalent Bonds",
    description: "Share electron pairs with step-by-step animation.",
  },
  {
    title: "Hydrogen Bonds",
    description: "See weaker attractions between molecules.",
  },
];

const visualizationTools = [
  "3D rotating molecule previews.",
  "Step-by-step bond formation sequence.",
  "Bond strength comparisons and notes.",
  "Real-world compound examples.",
];

export default function ChemicalBondsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Science Lab"
        title="Chemical Bond Visualizer"
        description="Learn bonding by watching atoms connect, share electrons, and form stable compounds."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Bond types</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-300">
            {bondTypes.map((bond) => (
              <div key={bond.title}>
                <p className="font-semibold text-white">{bond.title}</p>
                <p className="mt-1 text-slate-300">{bond.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">
            Visualization tools
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {visualizationTools.map((item) => (
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
