import Link from "next/link";

import { FeatureCard } from "@/components/feature-card";

const principles = [
  {
    title: "Visual and interactive",
    description:
      "Every tool is designed to be visual first, with drag and drop or live previews.",
  },
  {
    title: "Learn by doing",
    description:
      "Students explore simulations, builders, and calculators instead of long text pages.",
  },
  {
    title: "Student-first focus",
    description:
      "Designed for school and competitive exams with reusable workflows and planner tools.",
  },
];

const coreModules = [
  {
    title: "Smart Timetable Builder",
    description:
      "Plan daily, weekly, and exam-focused schedules with flexible templates.",
    items: [
      "Drag and drop subjects with color coding.",
      "AI-assisted balance for study time and breaks.",
      "Export to PDF or image for quick sharing.",
      "Study streak mode with a consistency heatmap.",
    ],
  },
  {
    title: "Chemistry Learning Zone",
    description:
      "Explore elements, trends, and bonding with visual interactions.",
    items: [
      "Interactive periodic table with hover properties.",
      "Filters for metals, non-metals, and key trends.",
      "Chemical bond visualizer with step-by-step formation.",
      "3D molecule previews for ionic and covalent bonds.",
    ],
  },
  {
    title: "Math Tools",
    description:
      "Make formulas and graphs feel intuitive with guided exploration.",
    items: [
      "Formula visualizer, including trigonometry circles.",
      "Graph plotter with quick parameter tweaking.",
      "Step-by-step equation solver and hints.",
      "Geometry construction workspace for proofs.",
    ],
  },
  {
    title: "Physics Simulations",
    description:
      "A PhET-like lab experience, simplified for students and exams.",
    items: [
      "Projectile motion with adjustable launch conditions.",
      "Ohm's law simulator for voltage and resistance.",
      "Wave interference previews and explanations.",
      "Electric field visualizer for charges and vectors.",
    ],
  },
  {
    title: "Memory and Revision Tools",
    description:
      "Build fast recall through structured practice and summaries.",
    items: [
      "Spaced repetition flashcards and quick review modes.",
      "Formula wall with subject-based tagging.",
      "Mind map builder for visual revision paths.",
      "One-page revision sheets for exam week.",
    ],
  },
];

const creativeFeatures = [
  {
    title: "Gamification",
    description:
      "XP points, badges, and levels keep students motivated.",
    items: [
      "Points for completed sessions and tool usage.",
      "Badges for streaks and topic mastery.",
      "Level-based unlocks for advanced tools.",
    ],
  },
  {
    title: "Visual Themes",
    description: "Adjust the workspace to match focus or exam prep.",
    items: [
      "Dark, light, and exam-focused themes.",
      "Subject-based color palettes.",
      "Minimal distraction mode for deep work.",
    ],
  },
  {
    title: "AI-Powered Assistance",
    description:
      "Optional intelligence for fast explanations and planning.",
    items: [
      "Explain like I'm 12 mode for tough topics.",
      "Auto timetable generation from goals.",
      "Topic-wise study plan suggestions.",
      "Limited scope doubt explanation chatbot.",
    ],
  },
  {
    title: "Personal Dashboard",
    description:
      "Track progress, detect weak areas, and plan ahead.",
    items: [
      "Study time analytics and trends.",
      "Weak subject detection with follow-up tasks.",
      "Upcoming exams and syllabus coverage.",
    ],
  },
];

const navigationStructure = [
  {
    title: "Tools",
    links: [
      { label: "Timetable Builder", href: "/tools/timetable-builder" },
      { label: "Flashcards", href: "/tools/flashcards" },
      { label: "Formula Sheets", href: "/tools/formula-sheets" },
    ],
  },
  {
    title: "Science Lab",
    links: [
      { label: "Periodic Table", href: "/science-lab/periodic-table" },
      { label: "Chemical Bonds", href: "/science-lab/chemical-bonds" },
      { label: "Physics Simulations", href: "/science-lab/physics-simulations" },
    ],
  },
  {
    title: "Math Zone",
    links: [
      { label: "Graph Plotter", href: "/math-zone/graph-plotter" },
      { label: "Geometry Tools", href: "/math-zone/geometry-tools" },
    ],
  },
  {
    title: "Dashboard",
    links: [
      { label: "Progress", href: "/dashboard/progress" },
      { label: "Streaks", href: "/dashboard/streaks" },
    ],
  },
];

const techStack = [
  {
    title: "Frontend",
    items: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Three Fiber for 3D molecules",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js APIs (Next routes)",
      "MongoDB for user data",
      "Redis for streaks and sessions",
    ],
  },
  {
    title: "Extras",
    items: [
      "PWA for offline support",
      "Google and email authentication",
      "Deployment on Vercel or Cloudflare",
    ],
  },
];

const roadmap = [
  {
    phase: "Phase 1 - Launch Fast",
    items: [
      "Timetable Builder",
      "Interactive Periodic Table",
      "Flashcards",
      "User accounts",
      "Clean UI system",
    ],
  },
  {
    phase: "Phase 2 - Expand Tools",
    items: [
      "Chemical bond visualizer",
      "Math tools suite",
      "Gamification and XP",
      "Analytics dashboard",
    ],
  },
  {
    phase: "Phase 3 - Intelligent Growth",
    items: [
      "AI study planner",
      "Community sharing",
      "Mobile app (Expo)",
    ],
  },
];

const timetablePreview = [
  {
    day: "Mon",
    sessions: [
      { subject: "Math", topic: "Quadratic drills" },
      { subject: "Chemistry", topic: "Periodic trends" },
    ],
  },
  {
    day: "Tue",
    sessions: [
      { subject: "Physics", topic: "Projectile practice" },
      { subject: "Biology", topic: "Diagrams recap" },
    ],
  },
  {
    day: "Wed",
    sessions: [
      { subject: "English", topic: "Comprehension" },
      { subject: "Math", topic: "Trigonometry" },
    ],
  },
];

const subjectStyles: Record<string, string> = {
  Math: "border-indigo-400/40 bg-indigo-500/10 text-indigo-200",
  Chemistry: "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
  Physics: "border-sky-400/40 bg-sky-500/10 text-sky-200",
  Biology: "border-lime-400/40 bg-lime-500/10 text-lime-200",
  English: "border-rose-400/40 bg-rose-500/10 text-rose-200",
};

const streakLevels = [
  "bg-slate-800",
  "bg-emerald-500/20",
  "bg-emerald-500/40",
  "bg-emerald-500/60",
  "bg-emerald-400",
];

const streakData = [
  0, 1, 2, 1, 3, 2, 0, 1, 2, 3, 4, 1, 0, 2,
  1, 1, 2, 3, 0, 1, 2, 3, 2, 4, 3, 1, 0, 2,
  1, 2, 0, 1, 3, 2, 1, 0, 2, 3, 4, 2, 1, 0,
  1, 2, 3, 2, 1, 0, 2, 3, 1, 2, 4, 3,
];

const elementPreview = [
  { symbol: "H", name: "Hydrogen", type: "nonmetal" },
  { symbol: "C", name: "Carbon", type: "nonmetal" },
  { symbol: "O", name: "Oxygen", type: "nonmetal" },
  { symbol: "Na", name: "Sodium", type: "metal" },
  { symbol: "Mg", name: "Magnesium", type: "metal" },
  { symbol: "Si", name: "Silicon", type: "metalloid" },
  { symbol: "Cl", name: "Chlorine", type: "nonmetal" },
  { symbol: "Fe", name: "Iron", type: "metal" },
  { symbol: "Cu", name: "Copper", type: "metal" },
  { symbol: "Zn", name: "Zinc", type: "metal" },
  { symbol: "Ag", name: "Silver", type: "metal" },
  { symbol: "Au", name: "Gold", type: "metal" },
];

const elementStyles: Record<string, string> = {
  metal: "border-amber-400/40 bg-amber-500/10 text-amber-200",
  nonmetal: "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
  metalloid: "border-indigo-400/40 bg-indigo-500/10 text-indigo-200",
};

type SectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

function SectionHeading({ eyebrow, title, description }: SectionProps) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-base text-slate-300">{description}</p>
    </div>
  );
}

function TimetablePreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Timetable Builder
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Drag, drop, and balance study blocks
          </h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
          Weekly View
        </span>
      </div>
      <div className="mt-6 grid gap-3">
        {timetablePreview.map((day) => (
          <div
            key={day.day}
            className="rounded-xl border border-white/10 bg-slate-950/80 p-4"
          >
            <p className="text-sm font-semibold text-white">{day.day}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {day.sessions.map((session) => (
                <span
                  key={session.topic}
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                    subjectStyles[session.subject]
                  }`}
                >
                  {session.subject}: {session.topic}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StreakHeatmap() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Study Streak Mode
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Consistency heatmap for motivation
          </h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
          Last 8 Weeks
        </span>
      </div>
      <div className="mt-6 grid grid-cols-14 gap-2">
        {streakData.map((level, index) => (
          <div
            key={`streak-${index}`}
            className={`h-3 w-3 rounded ${streakLevels[level]}`}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
        <span>Low</span>
        {streakLevels.map((className, index) => (
          <span
            key={`legend-${index}`}
            className={`h-3 w-3 rounded ${className}`}
          />
        ))}
        <span>High</span>
      </div>
    </div>
  );
}

function PeriodicTablePreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Chemistry Learning Zone
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Interactive periodic table preview
          </h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
          Hover to explore
        </span>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-6">
        {elementPreview.map((element) => (
          <div
            key={element.symbol}
            className={`rounded-xl border px-3 py-2 text-xs font-semibold ${
              elementStyles[element.type]
            }`}
          >
            <p className="text-base font-semibold">{element.symbol}</p>
            <p className="mt-1 text-[11px] text-slate-100/80">
              {element.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <section className="mx-auto w-full max-w-6xl px-6 pt-16">
        <div className="grid gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Student Productivity + Learning Playground
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              A visual, interactive workspace built for real study routines.
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Blend smart planning, interactive science and math tools, and
              gamified study habits into one student-first platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/tools"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200"
              >
                Explore tools
              </Link>
              <Link
                href="#roadmap"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-100"
              >
                View MVP roadmap
              </Link>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <TimetablePreview />
            <StreakHeatmap />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Core Vision"
          title="What makes it special"
          description="This is not another study site. It is a student productivity and learning playground that puts interactive tools first."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Core Modules"
          title="Must-have tools for the MVP"
          description="Each module is designed to be reusable across subjects, so students can plan, learn, and revise in one place."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {coreModules.map((module) => (
            <FeatureCard
              key={module.title}
              title={module.title}
              description={module.description}
              items={module.items}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <PeriodicTablePreview />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Creative Features"
          title="Delight students while building momentum"
          description="Gamified progress, focus-first themes, and intelligent helpers turn study time into a habit."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {creativeFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              items={feature.items}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Pages and Navigation"
          title="Clear paths for every study goal"
          description="Organize the app into tool-focused zones that are easy to find and quick to explore."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {navigationStructure.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <h3 className="text-base font-semibold text-white">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Built on a modern, student-ready stack"
          description="A scalable foundation for interactive tools, realtime analytics, and future AI features."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {techStack.map((stack) => (
            <div
              key={stack.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {stack.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {stack.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="roadmap" className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="MVP Roadmap"
          title="Launch quickly, then scale"
          description="Focus on the highest-impact tools first, then grow into analytics, gamification, and AI-driven planning."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {roadmap.map((phase) => (
            <div
              key={phase.phase}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{phase.phase}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-12">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Ready to build the student learning playground?
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Start with the timetable builder, interactive science tools, and
            flashcards. Expand into analytics and AI planning next.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/timetable-builder"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200"
            >
              Open timetable builder
            </Link>
            <Link
              href="/science-lab/periodic-table"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-100"
            >
              Explore science lab
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
