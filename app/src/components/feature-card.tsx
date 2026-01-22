import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  items?: string[];
  href?: string;
  eyebrow?: string;
  cta?: string;
};

export function FeatureCard({
  title,
  description,
  items = [],
  href,
  eyebrow,
  cta,
}: FeatureCardProps) {
  const content = (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-emerald-400/60">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
          {eyebrow}
        </p>
      ) : null}
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-300">{description}</p>
      </div>
      {items.length > 0 ? (
        <ul className="space-y-2 text-sm text-slate-200">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {cta ? (
        <span className="mt-auto text-sm font-semibold text-emerald-300">
          {cta}
        </span>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
