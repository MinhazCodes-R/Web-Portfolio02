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
    className="flex items-center gap-1 px-2 py-1 rounded-md bg-neutral-800/60 border border-neutral-700 text-neutral-200 text-xs"
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
  <div className="flex flex-wrap gap-2 mt-3">
    {items.map((it, idx) => (
      <TechIcon key={idx} icon={it.icon} label={it.label} />
    ))}
  </div>
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
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Software Engineering Intern</h1>
        <p><b>PointClickCare</b> – Mississauga, Ontario</p>
        <ul className="list-disc ml-5 mt-3 space-y-2">
          <li>Incoming intern starting Summer 2026.</li>
          <li>
            Will be working on backend services and data pipelines for North America&apos;s leading senior-care
            cloud platform.
          </li>
        </ul>
      </div>
    ),

    ericssonAiMl: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Software Engineering Intern, AI/ML Systems</h1>
        <p><b>Ericsson</b> – Ottawa, Ontario</p>
        <ul className="list-disc ml-5 mt-3 space-y-2">
          <li>
            Built a dual-engine (Python <code>hashlib</code> / R <code>digest</code>) hash-based caching layer for the
            telecom KPI pipeline, deduplicating S3 parquet queries and cutting execution time by 75% (from 8 minutes
            to 2 minutes) across 50+ operators.
          </li>
          <li>
            Built an integration test suite using pytest, WireMock, and AWS LocalStack, enabling full pipeline testing
            with local S3 emulation and increasing code coverage from 12% to 64%.
          </li>
          <li>
            Built an S3 parquet query pipeline using PySpark and boto3 with parallel file discovery (50 threads),
            schema-based dispatch, and multi-level PM counter aggregation, processing 1M+ parquet files across 50+
            operators daily.
          </li>
        </ul>
      </div>
    ),

    ericssonObservability: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Software Engineering Intern, Observability and Data Platform</h1>
        <p><b>Ericsson</b> – Ottawa, Ontario</p>
        <ul className="list-disc ml-5 mt-3 space-y-2">
          <li>
            Reduced data polling latency by 80% (from 15 min to 3 min) by building a distributed OpenTelemetry pipeline
            consuming Kafka streams and exporting to PostgreSQL and VictoriaMetrics, processing 10M+ logs/day.
          </li>
          <li>
            Built observability dashboards using TypeScript and AngularJS, enabling real-time visualization and
            improving fault analysis speed by 30% for the Cloud RAN team.
          </li>
          <li>
            Developed CI/CD pipelines in Jenkins and Spinnaker to build, validate, and deploy CSAR packages, improving
            release efficiency by 15%.
          </li>
        </ul>
      </div>
    ),

    taylorSystems: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Software Engineering Intern</h1>
        <p><b>Taylor Systems</b> (smart-home IoT for a residential village) – Mississauga, Ontario</p>
        <ul className="list-disc ml-5 mt-3 space-y-2">
          <li>
            Architected a real-time backend using WebSockets to stream IoT sensor data with live alerting and Prometheus
            metrics, improving data throughput by 300%.
          </li>
          <li>
            Designed reusable C++ communication libraries to control 12+ industrial devices via Modbus RTU over RS-485,
            extending communication range to 1.2 km and reducing packet loss by 40%.
          </li>
          <li>
            Scripted a deployment pipeline in Python and Bash that automated 90% of flashing and validation, reducing
            technician setup time.
          </li>
        </ul>
      </div>
    ),

    aerialRobotics: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Software Team Lead</h1>
        <p><b>McMaster Aerial Robotics Team</b> – Hamilton, Ontario</p>
        <ul className="list-disc ml-5 mt-3 space-y-2">
          <li>
            Led a cross-functional team of 16 to build an object detection and autonomous navigation system using OpenCV
            and YOLO (PyTorch), enabling real-time drone obstacle avoidance and flight autonomy.
          </li>
          <li>Developed and deployed the team&apos;s Next.js website and managed the migration to AWS.</li>
          <li>Interviewed 100+ candidates and onboarded 10 new team members.</li>
        </ul>
      </div>
    ),

    ieee: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">WebMaster</h1>
        <p><b>IEEE McMaster Student Branch</b> – Hamilton, Ontario</p>
        <ul className="list-disc ml-5 mt-3">
          <li>Built a dynamic frontend UI using Next.js and Tailwind.</li>
          <li>Used Docker and Kubernetes for local Raspberry Pi cluster deployment.</li>
          <li>Developed an authentication system with Prisma, PostgreSQL, OAuth, and Bcrypt.</li>
        </ul>
      </div>
    ),

    bjic: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Frontend Developer</h1>
        <p><b>Baitul Jannah Islamic Center (BJIC)</b> – Scarborough, Ontario</p>
        <ul className="list-disc ml-5 mt-3">
          <li>Built and launched a responsive community website using vanilla JS and modular CSS.</li>
          <li>Improved accessibility and boosted engagement by 40%.</li>
        </ul>
      </div>
    ),
  };

  const data: TimelineItem[] = [
    {
      title: "May 2026 - Aug 2026",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>Software Engineering Intern</b>
              <button onClick={() => open(modalContents.pointClickCare)} className="text-sm text-neutral-500 underline">
                click me
              </button>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-700/40 text-emerald-300 border border-emerald-700">
                Upcoming
              </span>
            </div>
            <p className="mb-4"><b>PointClickCare</b></p>
            <p>
              Joining the SaaS platform serving North America&apos;s senior-care providers. Backend and data work,
              starting Summer 2026.
            </p>
            <TechRow
              items={[
                { icon: siPython, label: "Python" },
                { icon: siNodedotjs, label: "Node.js" },
                { icon: siPostgresql, label: "PostgreSQL" },
                { icon: siAmazonwebservices, label: "AWS" },
                { icon: siDocker, label: "Docker" },
              ]}
            />
          </div>
        </motion.div>
      ),
    },
    {
      title: "Jan 2026 - Apr 2026",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>SWE Intern, AI/ML Systems</b>
              <button onClick={() => open(modalContents.ericssonAiMl)} className="text-sm text-neutral-500 underline">
                click me
              </button>
            </div>
            <p className="mb-4"><b>Ericsson</b></p>
            <p>
              Built a dual-engine (Python / R) hash-based caching layer that cut a telecom KPI pipeline&apos;s execution
              time by 75% (8 min to 2 min) across 1M+ parquet files daily, plus a full integration test harness using
              pytest, WireMock, and AWS LocalStack that took coverage from 12% to 64%.
            </p>
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
          </div>
        </motion.div>
      ),
    },
    {
      title: "Sep 2025 - Dec 2025",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>SWE Intern, Observability and Data Platform</b>
              <button onClick={() => open(modalContents.ericssonObservability)} className="text-sm text-neutral-500 underline">
                click me
              </button>
            </div>
            <p className="mb-4"><b>Ericsson</b></p>
            <p>
              Built a distributed OpenTelemetry pipeline over Kafka exporting to PostgreSQL and VictoriaMetrics
              (10M+ logs/day, 80% latency reduction), real-time AngularJS/TypeScript dashboards for the Cloud RAN team,
              and Jenkins / Spinnaker CI/CD for CSAR packaging.
            </p>
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
          </div>
        </motion.div>
      ),
    },
    {
      title: "May 2025 - Aug 2025",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>Software Engineering Intern</b>
              <button onClick={() => open(modalContents.taylorSystems)} className="text-sm text-neutral-500 underline">
                click me
              </button>
            </div>
            <p className="mb-4"><b>Taylor Systems</b></p>
            <p>
              Real-time WebSockets backend for IoT sensor streams (300% throughput improvement), reusable C++
              Modbus RTU / RS-485 libraries (1.2 km range, 40% packet-loss reduction), and Python/Bash automation
              that took 90% of flashing and validation off technicians&apos; plates.
            </p>
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
          </div>
        </motion.div>
      ),
    },
    {
      title: "Jan 2025 - Aug 2025",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>Software Team Lead</b>
              <button onClick={() => open(modalContents.aerialRobotics)} className="text-sm text-neutral-500 underline">
                click me
              </button>
            </div>
            <p className="mb-4"><b>McMaster Aerial Robotics Team</b></p>
            <p>
              Led a cross-functional team of 16 to build an autonomous drone navigation system using YOLO (PyTorch)
              and OpenCV, deployed the team&apos;s Next.js site, and managed the AWS migration.
            </p>
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
          </div>
        </motion.div>
      ),
    },
    {
      title: "Nov 2024 - Present",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>WebMaster</b>
              <button onClick={() => open(modalContents.ieee)} className="text-sm text-neutral-500 underline">click me</button>
            </div>
            <p className="mb-4"><b>IEEE McMaster Student Branch</b></p>
            <p>Specialized in frontend development and secure deployments using Next.js, Tailwind, Docker, and PostgreSQL.</p>
            <TechRow
              items={[
                { icon: siNextdotjs, label: "Next.js" },
                { icon: siTailwindcss, label: "Tailwind" },
                { icon: siDocker, label: "Docker" },
                { icon: siPostgresql, label: "PostgreSQL" },
              ]}
            />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 my-5 gap-4">
              <Image
                src={ieeescreen01}
                width={500}
                height={500}
                alt="IEEEscreen01"
                draggable={false}
                className="border-4 border-gray-300 rounded-xl"
              />
              <Image
                src={ieeescreen02}
                width={500}
                height={500}
                alt="IEEEscreen02"
                draggable={false}
                className="border-4 border-gray-300 rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Jun 2024 - Sep 2024",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="my-20">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>Frontend Developer</b>
              <button onClick={() => open(modalContents.bjic)} className="text-sm text-neutral-500 underline">click me</button>
            </div>
            <p className="mb-4"><b>Baitul Jannah Islamic Center (BJIC)</b></p>
            <p>Built and launched a responsive community site using vanilla JS and modular CSS, increasing engagement by 40%.</p>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 my-5 gap-4">
              <Image src={bjic01} width={500} height={500} alt="BJIC01" draggable={false} className="border-4 border-gray-300 rounded-xl shadow-sm" />
              <Image src={bjic02} width={500} height={500} alt="BJIC02" draggable={false} className="border-4 border-gray-300 rounded-xl shadow-sm" />
              <Image src={bjic03} width={500} height={500} alt="BJIC03" draggable={false} className="border-4 border-gray-300 rounded-xl shadow-sm" />
              <Image src={bjic04} width={500} height={500} alt="BJIC04" draggable={false} className="border-4 border-gray-300 rounded-xl shadow-sm" />
            </div>
          </div>
        </motion.div>
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
