'use client';
import Image from "next/image";
import React, { useState, type ReactNode } from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from 'framer-motion';
import Modal from "../components/myComponents/modal/modal";
import {
  siNextdotjs,
  siPython,
  siApachekafka,
  siPostgresql,
  siOpentelemetry,
  siGrafana,
  siJenkins,
  siDocker,
  siApachespark,
  siAmazonwebservices,
  siAmazons3,
  siPytorch,
  siOpencv,
  siR,
  siCplusplus,
  siArduino,
  siRaspberrypi,
  siPrometheus,
  siMqtt,
  siTypescript,
  siAngular,
  siPytest,
  siTailwindcss,
  siGit,
  siNodedotjs,
} from "simple-icons";

// Images
import ieeescreen01 from "../images/IEEEscreen01.png";
import ieeescreen02 from "../images/IEEEscreen02.png";
import bjic01 from "../images/BJIC_overview.png";
import bjic02 from "../images/BJIC_overview02.png";
import bjic03 from "../images/BJIC_overview03.png";
import bjic04 from "../images/BJIC_payment.png";
import ericssonLogo from "../images/ericsson-logo.jpeg";
import pccLogo from "../images/pointclickcare-logo.jpg";

// Type for each timeline item
interface TimelineItem {
  title: string;
  content: ReactNode;
}

interface SimpleIcon {
  title: string;
  path: string;
  hex: string;
}

const TechIcon = ({ icon, label }: { icon: SimpleIcon; label?: string }) => (
  <div
    title={label ?? icon.title}
    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium"
  >
    <svg
      role="img"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={`#${icon.hex}`}
      style={{ pointerEvents: 'none' }}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
    <span>{label ?? icon.title}</span>
  </div>
);

const TechRow = ({ items }: { items: { icon: SimpleIcon; label?: string }[] }) => (
  <div className="flex flex-wrap gap-2 mt-5">
    {items.map((it, idx) => (
      <TechIcon key={idx} icon={it.icon} label={it.label} />
    ))}
  </div>
);

const EricssonLogo = () => (
  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
    <Image
      src={ericssonLogo}
      alt="Ericsson logo"
      width={56}
      height={56}
      className="object-cover w-full h-full"
    />
  </div>
);

const PointClickCareLogo = () => (
  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
    <Image
      src={pccLogo}
      alt="PointClickCare logo"
      width={56}
      height={56}
      className="object-cover w-full h-full"
    />
  </div>
);

type DetailProps = {
  role: string;
  company: string;
  location: string;
  dates: string;
  accent: string;
  logo?: ReactNode;
  highlights: ReactNode[];
  stack?: string[];
  onClose: () => void;
};

const DetailContent = ({ role, company, location, dates, accent, logo, highlights, stack, onClose }: DetailProps) => (
  <div className="relative bg-white w-[92vw] max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
    <div className={`h-1.5 bg-gradient-to-r ${accent}`} />

    <button
      onClick={onClose}
      aria-label="Close"
      className="absolute top-4 right-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-400 bg-slate-100 hover:bg-slate-200 hover:text-slate-700 transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>

    <div className="p-8 sm:p-10">
      <div className="flex items-start gap-4 mb-6">
        {logo && <div className="shrink-0">{logo}</div>}
        <div className="min-w-0 pr-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
            {role}
          </h2>
          <p className={`mt-1.5 text-sm font-semibold uppercase tracking-wider bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
            {company}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {dates}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {location}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-4">
          Highlights
        </h3>
        <ul className="space-y-3.5">
          {highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-slate-700 leading-relaxed">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-emerald-500">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {stack && stack.length > 0 && (
        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
            Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

type EntryProps = {
  role: string;
  company: string;
  badge?: { label: string; tone: "emerald" | "indigo" | "amber" };
  blurb: string;
  onOpenDetails: () => void;
  accent: string;
  logo?: ReactNode;
  children?: ReactNode;
};

const badgeStyles: Record<NonNullable<EntryProps["badge"]>["tone"], string> = {
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
};

const EntryCard = ({ role, company, badge, blurb, onOpenDetails, accent, logo, children }: EntryProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative my-10"
  >
    <div className="group relative">
      <div
        className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r ${accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
      />
      <div className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-shadow duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">{role}</h3>
            {badge && (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeStyles[badge.tone]}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {badge.label}
              </span>
            )}
          </div>
          {logo && <div className="shrink-0">{logo}</div>}
        </div>
        <p
          className={`mb-4 text-sm font-semibold uppercase tracking-wider bg-gradient-to-r ${accent} bg-clip-text text-transparent`}
        >
          {company}
        </p>
        <p className="text-slate-600 leading-relaxed">{blurb}</p>
        {children}
        <button
          onClick={onOpenDetails}
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          View full details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </motion.div>
);

export function TimelineDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const close = () => setModalOpen(false);
  const open = (content: ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const modalContents = {
    pointClickCare: (
      <DetailContent
        role="Software Engineering Intern"
        company="PointClickCare"
        location="Mississauga, Ontario"
        dates="May 2026 – Aug 2026"
        accent="from-emerald-400 via-teal-400 to-cyan-400"
        logo={<PointClickCareLogo />}
        onClose={close}
        highlights={[
          <>Incoming intern, joining North America&apos;s leading <strong>senior-care SaaS platform</strong> for Summer 2026.</>,
          <>Will be working on <strong>backend services and data pipelines</strong> serving thousands of long-term and post-acute care providers.</>,
        ]}
        stack={["Python", "Node.js", "PostgreSQL", "AWS", "Docker"]}
      />
    ),

    ericssonAiMl: (
      <DetailContent
        role="Software Engineering Intern, AI/ML Systems"
        company="Ericsson"
        location="Ottawa, Ontario"
        dates="Jan 2026 – Apr 2026"
        accent="from-purple-400 via-violet-400 to-pink-400"
        logo={<EricssonLogo />}
        onClose={close}
        highlights={[
          <>Built a dual-engine (Python <code className="px-1 py-0.5 rounded bg-slate-100 text-slate-800 text-xs font-mono">hashlib</code> / R <code className="px-1 py-0.5 rounded bg-slate-100 text-slate-800 text-xs font-mono">digest</code>) hash-based <strong>caching layer</strong> for the telecom KPI pipeline, deduplicating S3 parquet queries and cutting execution time by <strong>75% (8 min → 2 min)</strong> across 50+ operators.</>,
          <>Built an integration test suite using <strong>pytest, WireMock, and AWS LocalStack</strong>, enabling full pipeline testing with local S3 emulation and increasing code coverage from <strong>12% to 64%</strong>.</>,
          <>Built an S3 parquet query pipeline using <strong>PySpark and boto3</strong> with parallel file discovery (50 threads), schema-based dispatch, and multi-level PM counter aggregation, processing <strong>1M+ parquet files</strong> across 50+ operators daily.</>,
        ]}
        stack={["Python", "R", "PySpark", "AWS S3", "pytest", "WireMock", "Docker"]}
      />
    ),

    ericssonObservability: (
      <DetailContent
        role="Software Engineering Intern, Observability & Data Platform"
        company="Ericsson"
        location="Ottawa, Ontario"
        dates="Sep 2025 – Dec 2025"
        accent="from-indigo-400 via-blue-400 to-cyan-400"
        logo={<EricssonLogo />}
        onClose={close}
        highlights={[
          <>Developed and deployed a distributed <strong>OpenTelemetry pipeline</strong> consuming Kafka streams and exporting data to <strong>VictoriaMetrics, OpenSearch, and PostgreSQL</strong>, improving data polling rates from <strong>15 min to under 3 min</strong>.</>,
          <>Built internal observability dashboards using <strong>AngularJS</strong>, enabling real-time visualization and improving fault analysis speed by <strong>30%</strong> for the Cloud RAN team.</>,
          <>Developed CI/CD pipelines in <strong>Jenkins and Spinnaker</strong> to build, validate, and deploy CSAR packages, improving release efficiency by <strong>15%</strong>.</>,
        ]}
        stack={["OpenTelemetry", "Kafka", "PostgreSQL", "VictoriaMetrics", "OpenSearch", "AngularJS", "Jenkins", "Spinnaker"]}
      />
    ),

    taylorSystems: (
      <DetailContent
        role="Embedded Systems Intern"
        company="Taylor Systems"
        location="Mississauga, Ontario"
        dates="May 2025 – Aug 2025"
        accent="from-orange-400 via-amber-400 to-yellow-400"
        onClose={close}
        highlights={[
          <>Built firmware to control <strong>12+ industrial devices via Modbus RTU over RS-485</strong>, extending communication range to <strong>1.2 km</strong> and reducing packet loss by <strong>40%</strong>.</>,
          <>Wrote <strong>I²C and UART drivers for ESP32 microcontrollers</strong> to stream sensor data with latency under <strong>50 ms</strong>.</>,
          <>Built a modular WebSocket-heavy backend to relay sensor data from IoT devices, with real-time alerting and historical metrics via <strong>Prometheus and Grafana</strong>.</>,
          <>Scripted a deployment pipeline that automated <strong>90% of flashing and validation</strong>, reducing technician setup time from <strong>45 minutes to under 5 minutes</strong>.</>,
        ]}
        stack={["C++", "ESP32", "Modbus RTU", "RS-485", "Python", "WebSocket", "Prometheus", "Grafana"]}
      />
    ),

    aerialRobotics: (
      <DetailContent
        role="Software Team Lead"
        company="McMaster Aerial Robotics Team"
        location="Hamilton, Ontario"
        dates="Jan 2025 – Aug 2025"
        accent="from-rose-400 via-fuchsia-400 to-violet-400"
        onClose={close}
        highlights={[
          <>Led a cross-functional <strong>team of 16</strong> to develop an object detection and autonomous navigation system using <strong>OpenCV and YOLO (PyTorch)</strong>, enabling real-time drone obstacle avoidance and flight autonomy.</>,
          <>Organized and instructed <strong>PCB design workshops in Altium</strong>, upskilling team members and reducing hardware integration errors by <strong>40%</strong>.</>,
          <>Oversaw development and deployment of the team&apos;s <strong>Next.js website</strong>, managing the migration to <strong>AWS</strong>.</>,
        ]}
        stack={["PyTorch", "OpenCV", "Python", "Next.js", "AWS", "Altium", "Git"]}
      />
    ),

    ieee: (
      <DetailContent
        role="WebMaster"
        company="IEEE McMaster Student Branch"
        location="Hamilton, Ontario"
        dates="Nov 2024 – Present"
        accent="from-sky-400 via-cyan-400 to-teal-400"
        onClose={close}
        highlights={[
          <>Built a dynamic frontend UI using <strong>Next.js and Tailwind</strong> for the student branch&apos;s public-facing site.</>,
          <>Used <strong>Docker and Kubernetes</strong> for local Raspberry Pi cluster deployment.</>,
          <>Developed an authentication system with <strong>Prisma, PostgreSQL, OAuth, and Bcrypt</strong>.</>,
        ]}
        stack={["Next.js", "Tailwind", "Docker", "Kubernetes", "PostgreSQL", "Prisma"]}
      />
    ),

    bjic: (
      <DetailContent
        role="Frontend Developer"
        company="Baitul Jannah Islamic Center (BJIC)"
        location="Scarborough, Ontario"
        dates="May 2024 – Aug 2024"
        accent="from-emerald-400 via-green-400 to-lime-400"
        onClose={close}
        highlights={[
          <>Built and launched a <strong>responsive community website</strong> for BJIC with <strong>React</strong>, improving accessibility on mobile devices and increasing engagement by <strong>40%</strong>.</>,
        ]}
        stack={["React", "JavaScript", "CSS"]}
      />
    ),
  };

  const data: TimelineItem[] = [
    {
      title: "May 2026 - Aug 2026",
      content: (
        <EntryCard
          role="Software Engineering Intern"
          company="PointClickCare"
          badge={{ label: "Upcoming", tone: "emerald" }}
          blurb="Joining the SaaS platform serving North America's senior-care providers. Backend and data work, starting Summer 2026."
          onOpenDetails={() => open(modalContents.pointClickCare)}
          accent="from-emerald-400 via-teal-400 to-cyan-400"
          logo={<PointClickCareLogo />}
        >
          <TechRow
            items={[
              { icon: siPython, label: "Python" },
              { icon: siNodedotjs, label: "Node.js" },
              { icon: siPostgresql, label: "PostgreSQL" },
              { icon: siAmazonwebservices, label: "AWS" },
              { icon: siDocker, label: "Docker" },
            ]}
          />
        </EntryCard>
      ),
    },
    {
      title: "Jan 2026 - Apr 2026",
      content: (
        <EntryCard
          role="SWE Intern, AI/ML Systems"
          company="Ericsson"
          blurb="Built a dual-engine (Python / R) hash-based caching layer that cut a telecom KPI pipeline's execution time by 75% (8 min to 2 min) across 1M+ parquet files daily, plus a full integration test harness using pytest, WireMock, and AWS LocalStack that took coverage from 12% to 64%."
          onOpenDetails={() => open(modalContents.ericssonAiMl)}
          accent="from-purple-400 via-violet-400 to-pink-400"
          logo={<EricssonLogo />}
        >
          <TechRow
            items={[
              { icon: siPython, label: "Python" },
              { icon: siR, label: "R" },
              { icon: siApachespark, label: "PySpark" },
              { icon: siAmazons3, label: "AWS S3" },
              { icon: siPytest, label: "pytest" },
              { icon: siDocker, label: "Docker" },
            ]}
          />
        </EntryCard>
      ),
    },
    {
      title: "Sep 2025 - Dec 2025",
      content: (
        <EntryCard
          role="SWE Intern, Observability and Data Platform"
          company="Ericsson"
          blurb="Built a distributed OpenTelemetry pipeline over Kafka exporting to PostgreSQL and VictoriaMetrics (10M+ logs/day, 80% latency reduction), real-time AngularJS/TypeScript dashboards for the Cloud RAN team, and Jenkins / Spinnaker CI/CD for CSAR packaging."
          onOpenDetails={() => open(modalContents.ericssonObservability)}
          accent="from-indigo-400 via-blue-400 to-cyan-400"
          logo={<EricssonLogo />}
        >
          <TechRow
            items={[
              { icon: siOpentelemetry, label: "OpenTelemetry" },
              { icon: siApachekafka, label: "Kafka" },
              { icon: siPostgresql, label: "PostgreSQL" },
              { icon: siTypescript, label: "TypeScript" },
              { icon: siAngular, label: "AngularJS" },
              { icon: siJenkins, label: "Jenkins" },
              { icon: siGrafana, label: "Grafana" },
            ]}
          />
        </EntryCard>
      ),
    },
    {
      title: "May 2025 - Aug 2025",
      content: (
        <EntryCard
          role="Embedded Systems Intern"
          company="Taylor Systems"
          blurb="Firmware for 12+ industrial devices over Modbus RTU / RS-485 (1.2 km range, 40% packet-loss reduction), I²C and UART drivers for ESP32 with sub-50 ms latency, plus a WebSocket backend with Prometheus / Grafana observability. Cut technician setup from 45 min to under 5 min."
          onOpenDetails={() => open(modalContents.taylorSystems)}
          accent="from-orange-400 via-amber-400 to-yellow-400"
        >
          <TechRow
            items={[
              { icon: siCplusplus, label: "C++" },
              { icon: siPython, label: "Python" },
              { icon: siArduino, label: "Arduino" },
              { icon: siRaspberrypi, label: "Raspberry Pi" },
              { icon: siMqtt, label: "MQTT" },
              { icon: siPrometheus, label: "Prometheus" },
            ]}
          />
        </EntryCard>
      ),
    },
    {
      title: "Jan 2025 - Aug 2025",
      content: (
        <EntryCard
          role="Software Team Lead"
          company="McMaster Aerial Robotics Team"
          blurb="Led a cross-functional team of 16 to build an autonomous drone navigation system using YOLO (PyTorch) and OpenCV, deployed the team's Next.js site, and managed the AWS migration."
          onOpenDetails={() => open(modalContents.aerialRobotics)}
          accent="from-rose-400 via-fuchsia-400 to-violet-400"
        >
          <TechRow
            items={[
              { icon: siPytorch, label: "PyTorch" },
              { icon: siOpencv, label: "OpenCV" },
              { icon: siPython, label: "Python" },
              { icon: siNextdotjs, label: "Next.js" },
              { icon: siAmazonwebservices, label: "AWS" },
              { icon: siGit, label: "Git" },
            ]}
          />
        </EntryCard>
      ),
    },
    {
      title: "Nov 2024 - Present",
      content: (
        <EntryCard
          role="WebMaster"
          company="IEEE McMaster Student Branch"
          badge={{ label: "Ongoing", tone: "indigo" }}
          blurb="Specialized in frontend development and secure deployments using Next.js, Tailwind, Docker, and PostgreSQL."
          onOpenDetails={() => open(modalContents.ieee)}
          accent="from-sky-400 via-cyan-400 to-teal-400"
        >
          <TechRow
            items={[
              { icon: siNextdotjs, label: "Next.js" },
              { icon: siTailwindcss, label: "Tailwind" },
              { icon: siDocker, label: "Docker" },
              { icon: siPostgresql, label: "PostgreSQL" },
            ]}
          />
          <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-5 gap-4">
            <Image
              src={ieeescreen01}
              width={500}
              height={500}
              alt="IEEE site screenshot 1"
              draggable={false}
              className="rounded-xl border border-slate-200"
            />
            <Image
              src={ieeescreen02}
              width={500}
              height={500}
              alt="IEEE site screenshot 2"
              draggable={false}
              className="rounded-xl border border-slate-200"
            />
          </div>
        </EntryCard>
      ),
    },
    {
      title: "Jun 2024 - Sep 2024",
      content: (
        <EntryCard
          role="Frontend Developer"
          company="Baitul Jannah Islamic Center (BJIC)"
          blurb="Built and launched a responsive community site with React, improving accessibility on mobile and increasing engagement by 40%."
          onOpenDetails={() => open(modalContents.bjic)}
          accent="from-emerald-400 via-green-400 to-lime-400"
        >
          <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-5 gap-4">
            <Image src={bjic01} width={500} height={500} alt="BJIC site screenshot 1" draggable={false} className="rounded-xl border border-slate-200" />
            <Image src={bjic02} width={500} height={500} alt="BJIC site screenshot 2" draggable={false} className="rounded-xl border border-slate-200" />
            <Image src={bjic03} width={500} height={500} alt="BJIC site screenshot 3" draggable={false} className="rounded-xl border border-slate-200" />
            <Image src={bjic04} width={500} height={500} alt="BJIC payment screenshot" draggable={false} className="rounded-xl border border-slate-200" />
          </div>
        </EntryCard>
      ),
    },
  ];

  return (
    <div className="w-full">
      {modalOpen && <Modal modalOpen={modalOpen} contentdiv={modalContent} handleClose={close} />}
      <Timeline data={data} />
    </div>
  );
}
