import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const formulaFeatures = [
  "Organize formulas by chapter or exam topic.",
  "Highlight high-frequency formulas for quick recall.",
  "Generate compact one-page revision sheets.",
  "Share printable PDFs with classmates.",
];

const layouts = [
  {
    title: "Wall View",
    description: "Pin formulas in a grid for a quick scan.",
  },
  {
    title: "Exam Pack",
    description: "Condense a subject into a single printable page.",
  },
  {
    title: "Daily Refresh",
    description: "Surface a short list of formulas every morning.",
  },
];

export default function FormulaSheetsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Tools"
        title="Formula Sheets"
        description="Create a formula wall that updates as you learn and export it when exams arrive."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">What you can do</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {formulaFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Layouts</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-300">
            {layouts.map((layout) => (
              <div key={layout.title}>
                <p className="font-semibold text-white">{layout.title}</p>
                <p className="mt-1 text-slate-300">{layout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
