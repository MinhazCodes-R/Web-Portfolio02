'use client';

import { ReactNode, useState } from "react";
import Header from "@/components/myComponents/header";
import { motion, AnimatePresence } from "framer-motion";
import { LampDemo } from "../lampdisplay";
import Image, { StaticImageData } from "next/image";

import siemsic01 from "@/images/SeismicImage01.jpeg";
import aslimage from "@/images/asl-translator-image.png";
import travelagent from "@/images/travel-agent.png";
import minihabitsLogo from "@/images/minihabits-logo.png";

type Mode = "projects" | "startups";

type Project = {
  id: string;
  name: string;
  blurb: string;
  description: string;
  tags: string[];
  year: string;
  links: { label: string; href: string; primary?: boolean }[];
  media: ReactNode;
  accent: string;
};

const projects: Project[] = [
  {
    id: "asltranslator",
    name: "ASL Translator",
    blurb: "Real-time American Sign Language to English letter translation.",
    description:
      "A web tool that captures live camera input and translates ASL hand signals into the corresponding English letter using a trained classification model.",
    tags: ["Computer Vision", "Python", "MediaPipe", "Web"],
    year: "2024",
    links: [
      { label: "GitHub", href: "https://github.com/MinhazCodes-R/SignDetector", primary: true },
      { label: "LinkedIn demo", href: "#" },
    ],
    media: <ProjectImage src={aslimage} alt="ASL Translator interface" />,
    accent: "from-blue-500 via-purple-500 to-pink-500",
  },
  {
    id: "travelassistant",
    name: "Travel Planning Assistant",
    blurb: "AI agent that plans your next vacation.",
    description:
      "Built at a hackathon. Takes custom messages, budgets, and locations and suggests the perfect tourist attractions and itineraries through a conversational interface.",
    tags: ["AI Agent", "Hackathon", "LLM", "Travel"],
    year: "2024",
    links: [{ label: "GitHub", href: "#", primary: true }],
    media: <ProjectImage src={travelagent} alt="Travel agent interface" />,
    accent: "from-cyan-400 via-sky-500 to-indigo-500",
  },
  {
    id: "siesmicdetector",
    name: "Seismic Detector",
    blurb: "Detecting moonquakes from 100GB+ of NASA lunar data.",
    description:
      "Built at NASA Space Apps with Bacem. Used large-scale data analysis techniques to construct an algorithm that accurately detects seismic activity from over 100GB of lunar mission data.",
    tags: ["Data Analysis", "NASA Space Apps", "Python", "Signal Processing"],
    year: "2024",
    links: [
      { label: "Visit project site", href: "https://bitsnotbytesnasa2024.netlify.app/", primary: true },
    ],
    media: (
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <Image
          alt="Seismic team photo"
          className="rounded-xl shadow-2xl"
          style={{ maxWidth: "320px", width: "100%", height: "auto" }}
          src={siemsic01}
        />
      </div>
    ),
    accent: "from-amber-400 via-orange-500 to-rose-500",
  },
  {
    id: "rubiksolver",
    name: "Rubik's Cube Solver",
    blurb: "Hardware + software that solves a Rubik's cube end-to-end.",
    description:
      "A Python Tkinter GUI lets the user enter the cube's color state. On start, a coordinated motor assembly takes over and physically solves the cube.",
    tags: ["Hardware", "Python", "Tkinter", "Robotics"],
    year: "2023",
    links: [
      { label: "Watch the demo", href: "https://www.youtube.com/watch?v=9DItpDXlWFA", primary: true },
    ],
    media: (
      <div className="relative w-full h-full p-8 flex items-center justify-center">
        <iframe
          className="w-full aspect-video rounded-xl shadow-2xl"
          src="https://www.youtube.com/embed/9DItpDXlWFA?si=cGKhmg9wRjLFhtvK"
          title="Rubik's Cube Solver demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    ),
    accent: "from-rose-400 via-fuchsia-500 to-violet-500",
  },
];

const startups: Project[] = [
  {
    id: "minihabits",
    name: "miniHabits",
    blurb: "A minimalist habit tracker that respects your time and attention.",
    description:
      "Web app is live and shipped — track daily habits, log completions, see streaks on a calendar, and pull up analytics on your consistency over time. A native SwiftUI iOS companion is in active development, backed by the same Supabase schema and auth layer. Built solo end-to-end.",
    tags: ["Next.js", "SwiftUI", "Supabase", "Postgres", "Vercel"],
    year: "2026",
    links: [
      { label: "Visit web app", href: "https://habit-tracking-beige.vercel.app/", primary: true },
      { label: "GitHub", href: "https://github.com/MinhazCodes-R/HabitTracking-IOS-" },
    ],
    media: (
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <div className="relative aspect-square w-48 sm:w-56 rounded-3xl bg-slate-950 shadow-[0_20px_50px_-12px_rgba(16,185,129,0.35)] ring-1 ring-emerald-500/30 flex items-center justify-center overflow-hidden">
          <Image
            src={minihabitsLogo}
            alt="miniHabits logo"
            className="object-contain p-4"
            fill
            sizes="(min-width: 640px) 224px, 192px"
          />
        </div>
      </div>
    ),
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
  },
];

type FunProject = {
  name: string;
  blurb: string;
  emoji: string;
  href?: string;
  accent: string;
};

const funProjects: FunProject[] = [
  {
    name: "Valentines App",
    blurb: "A silly little Valentine's Day app — built for fun, not for production.",
    emoji: "💌",
    accent: "from-pink-400 to-rose-500",
  },
  {
    name: "More chaos coming",
    blurb: "Other ridiculous side projects landing here soon.",
    emoji: "✨",
    accent: "from-amber-300 to-orange-400",
  },
];

function ProjectImage({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <Image
        src={src}
        alt={alt}
        className="rounded-xl shadow-2xl object-cover"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}

function ProjectCard({
  project,
  index,
  kindLabel = "Project",
}: {
  project: Project;
  index: number;
  kindLabel?: string;
}) {
  const reversed = index % 2 === 1;
  return (
    <motion.section
      id={project.id}
      style={{ scrollMarginTop: "100px" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      <div className="group relative mx-auto w-[92vw] max-w-6xl">
        <div
          className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r ${project.accent} opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-60`}
        />
        <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl overflow-hidden">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs uppercase tracking-[0.18em] text-slate-400 font-medium">
                  {project.year}
                </span>
                <span className="h-px w-8 bg-slate-700" />
                <span
                  className={`text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
                >
                  {kindLabel}
                </span>
              </div>

              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br ${project.accent} bg-clip-text text-transparent leading-tight mb-4`}
              >
                {project.name}
              </h2>
              <p className="text-lg text-slate-200 mb-4 leading-snug font-medium">
                {project.blurb}
              </p>
              <p className="text-base text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.links.map((link) =>
                  link.primary ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r ${project.accent} px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]`}
                    >
                      {link.label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-t lg:border-t-0 lg:border-l border-white/10 min-h-[260px] lg:min-h-[420px] flex items-center justify-center">
              {project.media}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function FunProjectCard({ project, index }: { project: FunProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} p-[1px]`}
    >
      <div className="relative h-full rounded-2xl bg-slate-900 p-8 transition-colors duration-300 group-hover:bg-slate-900/80">
        <div className="text-5xl mb-5">{project.emoji}</div>
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{project.name}</h3>
        <p className="text-slate-400 leading-relaxed">{project.blurb}</p>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
          >
            Open <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ModeToggle({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  const options: { value: Mode; label: string }[] = [
    { value: "projects", label: "Projects" },
    { value: "startups", label: "Startups" },
  ];
  return (
    <div className="flex justify-center">
      <div
        role="tablist"
        aria-label="Toggle between projects and startups"
        className="relative inline-flex items-center gap-1 rounded-full border border-white/10 bg-slate-900/80 p-1 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(56,189,248,0.25)]"
      >
        {options.map((opt) => {
          const active = mode === opt.value;
          return (
            <button
              key={opt.value}
              role="tab"
              aria-selected={active}
              onClick={() => onChange(opt.value)}
              className={`relative z-10 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                active ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="mode-toggle-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 shadow-[0_4px_20px_rgba(56,189,248,0.45)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const ProjectsPage = () => {
  const [mode, setMode] = useState<Mode>("projects");
  const showProjects = mode === "projects";
  const activeList = showProjects ? projects : startups;
  const kindLabel = showProjects ? "Project" : "Startup";

  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
        <Header />
      </div>

      <div className="h-[80vh]" style={{ overflow: "hidden" }}>
        <LampDemo key={mode} word={showProjects ? "Projects" : "Startups"} />
      </div>

      <div className="relative pt-4 pb-16">
        <ModeToggle mode={mode} onChange={setMode} />
      </div>

      <div className="relative pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-16 sm:space-y-20"
          >
            {activeList.map((item, i) => (
              <ProjectCard key={item.id} project={item} index={i} kindLabel={kindLabel} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {showProjects && (
        <section id="funprojects" style={{ scrollMarginTop: "100px" }} className="relative pb-32">
          <div className="mx-auto w-[92vw] max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 font-medium mb-4">
                For fun
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent inline-block leading-[1.15] pb-2">
                Fun Side Projects
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                Silly stuff I built because I wanted to. No roadmap, no users, no shame.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {funProjects.map((p, i) => (
                <FunProjectCard key={p.name} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectsPage;
