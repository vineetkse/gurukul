import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const tableFeatures = [
  "Hover for atomic number, mass, and valence.",
  "Click to animate electron configurations.",
  "Filter metals, non-metals, and metalloids.",
  "Compare atomic radius and boiling points.",
  "Surface real-life usage for each element.",
];

const filters = [
  "Metals vs non-metals",
  "Atomic radius",
  "Boiling and melting points",
  "Electronegativity",
  "Everyday usage tags",
];

export default function PeriodicTablePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Science Lab"
        title="Interactive Periodic Table"
        description="Explore element properties with hover cards, animated electron shells, and smart filters."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Core interactions</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {tableFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Filter set</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {filters.map((item) => (
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
