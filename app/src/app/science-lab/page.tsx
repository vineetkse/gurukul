import { FeatureCard } from "@/components/feature-card";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const labModules = [
  {
    title: "Periodic Table",
    description:
      "Interactive elements with filters, properties, and real-life usage.",
    href: "/science-lab/periodic-table",
    items: [
      "Hover for atomic properties.",
      "Click for electron configurations.",
      "Filter by metals, non-metals, and trends.",
    ],
  },
  {
    title: "Chemical Bonds",
    description:
      "Visualize ionic, covalent, and hydrogen bonding step by step.",
    href: "/science-lab/chemical-bonds",
    items: [
      "3D rotating molecules.",
      "Bond formation animation sequence.",
      "Compare bond strengths visually.",
    ],
  },
  {
    title: "Physics Simulations",
    description:
      "Student-friendly simulations for core physics concepts.",
    href: "/science-lab/physics-simulations",
    items: [
      "Projectile motion and vectors.",
      "Ohm's law and circuit analysis.",
      "Wave interference visualizer.",
    ],
  },
];

export default function ScienceLabPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Science Lab"
        title="Interactive science tools"
        description="Build intuition for chemistry and physics with visual, hands-on simulations."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {labModules.map((module) => (
          <FeatureCard
            key={module.title}
            title={module.title}
            description={module.description}
            items={module.items}
            href={module.href}
            cta="Open lab tool"
          />
        ))}
      </div>
    </PageShell>
  );
}
