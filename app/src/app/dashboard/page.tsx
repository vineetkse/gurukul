import { FeatureCard } from "@/components/feature-card";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";

const dashboardPanels = [
  {
    title: "Progress",
    description: "Study analytics, weak topic detection, and exam readiness.",
    href: "/dashboard/progress",
    items: [
      "Weekly study time trends.",
      "Weak subject alerts and reminders.",
      "Upcoming exam checklist.",
    ],
  },
  {
    title: "Streaks",
    description: "Consistency heatmaps and streak-based achievements.",
    href: "/dashboard/streaks",
    items: [
      "Daily study heatmap view.",
      "7-day and 30-day streak tracking.",
      "Badge milestones for momentum.",
    ],
  },
];

export default function DashboardPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Dashboard"
        title="Your study command center"
        description="Track time spent, detect weak subjects, and keep streaks alive."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {dashboardPanels.map((panel) => (
          <FeatureCard
            key={panel.title}
            title={panel.title}
            description={panel.description}
            items={panel.items}
            href={panel.href}
            cta="View dashboard"
          />
        ))}
      </div>
    </PageShell>
  );
}
