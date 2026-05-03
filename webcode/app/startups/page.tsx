'use client';

import Header from "@/components/myComponents/header";
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import minihabitsLogo from "@/images/minihabits-logo.png";

type Startup = {
  name: string;
  tagline: string;
  description: string;
  status: "Live" | "In Beta" | "In Development";
  role: string;
  year: string;
  metrics?: { label: string; value: string }[];
  stack: string[];
  primaryCta?: { label: string; href: string };
  secondaryCtas?: { label: string; href: string }[];
  logo?: StaticImageData;
};

const startups: Startup[] = [
  {
    name: "miniHabits",
    tagline: "A minimalist habit tracker that respects your time and attention.",
    description:
      "Web app is live and shipped — track daily habits, log completions, see streaks on a calendar, and pull up analytics on your consistency over time. A native SwiftUI iOS companion is in active development, backed by the same Supabase schema and auth layer. Built solo end-to-end.",
    status: "Live",
    role: "Founder & Engineer",
    year: "2026",
    metrics: [
      { label: "Web", value: "Live" },
      { label: "iOS", value: "In dev" },
      { label: "Backend", value: "Supabase" },
    ],
    stack: ["Next.js", "SwiftUI", "Supabase", "Postgres", "Vercel"],
    logo: minihabitsLogo,
    primaryCta: { label: "Visit web app", href: "https://habit-tracking-beige.vercel.app/" },
    secondaryCtas: [
      { label: "GitHub", href: "https://github.com/MinhazCodes-R/HabitTracking-IOS-" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/minhazur-rakin/" },
    ],
  },
];

const StatusBadge = ({ status }: { status: Startup["status"] }) => {
  const styles: Record<Startup["status"], string> = {
    Live: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    "In Beta": "bg-amber-50 text-amber-700 ring-amber-600/20",
    "In Development": "bg-slate-50 text-slate-600 ring-slate-500/20",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
};

const StartupCard = ({ startup, index }: { startup: Startup; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
  >
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
      <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <StatusBadge status={startup.status} />
          <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
            {startup.year} · {startup.role}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
          {startup.name}
        </h2>
        <p className="text-lg text-slate-600 mb-6 leading-snug">{startup.tagline}</p>
        <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-xl">
          {startup.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {startup.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {startup.primaryCta && (
              <Link
                href={startup.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700"
              >
                {startup.primaryCta.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </Link>
            )}
            {startup.secondaryCtas?.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 sm:p-10 lg:p-12 flex flex-col justify-center gap-10">
        {startup.logo && (
          <div className="flex justify-center">
            <div className="relative aspect-square w-40 sm:w-48 rounded-3xl bg-slate-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] ring-1 ring-slate-800 flex items-center justify-center overflow-hidden">
              <Image
                src={startup.logo}
                alt={`${startup.name} logo`}
                className="object-contain p-4"
                fill
                sizes="(min-width: 640px) 192px, 160px"
              />
            </div>
          </div>
        )}
        {startup.metrics && (
          <dl className="grid grid-cols-3 gap-6">
            {startup.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-1">
                  {metric.label}
                </dt>
                <dd className="text-2xl font-semibold text-slate-900 tracking-tight">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  </motion.article>
);

const StartupsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <Header />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(15,23,42,0.04),_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 sm:pt-32 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 font-medium mb-6">
              Portfolio · Ventures
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.05] max-w-4xl">
              Startups &amp; deployed apps.
            </h1>
            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Products I&apos;ve built, shipped, and operated. Each one is live in the wild — used by real people, with real uptime and real lessons learned.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        <div className="space-y-8">
          {startups.map((startup, i) => (
            <StartupCard key={startup.name} startup={startup} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                Want to build something together?
              </h3>
              <p className="mt-2 text-slate-600">
                I&apos;m always open to interesting collaborations and conversations.
              </p>
            </div>
            <Link
              href="/contactme"
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 whitespace-nowrap"
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupsPage;
