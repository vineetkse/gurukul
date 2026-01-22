import { FeatureCard } from "@/components/feature-card";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const mathTools = [
  {
    title: "Graph Plotter",
    description:
      "Plot functions, adjust parameters, and view intersections quickly.",
    href: "/math-zone/graph-plotter",
    items: [
      "Multi-function comparisons.",
      "Zoom, pan, and reset presets.",
      "Highlight intercepts and turning points.",
    ],
  },
  {
    title: "Geometry Tools",
    description:
      "Construct figures, measure angles, and explore proofs visually.",
    href: "/math-zone/geometry-tools",
    items: [
      "Snap-to-grid construction.",
      "Angle and length measurements.",
      "Save steps for revision.",
    ],
  },
];

export default function MathZonePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Math Zone"
        title="Math tools for visual learning"
        description="Turn formulas into visuals and practice geometry with guided tools."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {mathTools.map((tool) => (
          <FeatureCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            items={tool.items}
            href={tool.href}
            cta="Open tool"
          />
        ))}
      </div>
    </PageShell>
  );
}
