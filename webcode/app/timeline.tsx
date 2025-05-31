'use client';
import Image from "next/image";
import React, { useState, type ReactNode } from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from 'framer-motion';
import Modal from "../components/myComponents/modal/modal";
import { siNextdotjs } from "simple-icons";

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

export function TimelineDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const close = () => setModalOpen(false);
  const open = (content: ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const svgsUsed = {
    nextjs: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ pointerEvents: 'none' }}
      >
        <title>{siNextdotjs.title}</title>
        <path d={siNextdotjs.path} />
      </svg>
    ),
    tailwind: (
      <img
        src="/tailwindcss-mark.svg"
        alt="Tailwind CSS Logo"
        style={{ pointerEvents: 'none' }}
      />
    ),
    linux: (
      <img
        src="/linux-mark.svg"
        alt="Linux Logo"
        style={{ pointerEvents: 'none' }}
      />
    ),
    nginx: (
      <img
        src="./nginx-svgrepo-com.svg"
        alt="Nginx Logo"
        style={{ pointerEvents: 'none' }}
      />
    ),
    sqlsvg: (
      <img
        src="./postgresql-logo-svgrepo-com.svg"
        alt="PostgreSQL Logo"
        style={{ pointerEvents: 'none' }}
      />
    )
  };

  const modalContents = {
    heatherGlen: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Embedded Systems Intern</h1>
        <p><b>Heather Glen Village</b> – Milton, Ontario</p>
        <ul className="list-disc ml-5 mt-3">
          <li>Engineered embedded software for 12+ industrial devices using Modbus RTU over RS-485</li>
          <li>Implemented I²C and UART drivers on ESP32/Arduino boards for real-time data collection from 20+ sensors</li>
          <li>Debugged HVAC control logic, improving system response time by 30%</li>
          <li>Developed internal tooling that automated 90% of firmware deployment</li>
        </ul>
      </div>
    ),
    aerialRobotics: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Software Team Lead</h1>
        <p><b>McMaster Aerial Robotics Team</b> – Hamilton, Ontario</p>
        <ul className="list-disc ml-5 mt-3">
          <li>Interviewed over 100 candidates and onboarded 10 new team members</li>
          <li>Developing object detection algorithms using OpenCV and TensorFlow</li>
          <li>Led PCB design workshops using Altium Designer</li>
          <li>Built team website with Next.js and planned AWS EC2 deployment via Docker</li>
        </ul>
      </div>
    ),
    ieee: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">WebMaster</h1>
        <p><b>IEEE McMaster Student Branch</b> – Hamilton, Ontario</p>
        <ul className="list-disc ml-5 mt-3">
          <li>Built dynamic frontend UI using Next.js and Tailwind</li>
          <li>Used Docker and Kubernetes for local Raspberry Pi cluster deployment</li>
          <li>Developed authentication system with Prisma, PostgreSQL, OAuth, and Bcrypt</li>
        </ul>
      </div>
    ),
    bjic: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Frontend Developer</h1>
        <p><b>Baitul Jannah Islamic Center (BJIC)</b> – Scarborough, Ontario</p>
        <ul className="list-disc ml-5 mt-3">
          <li>Built and launched a responsive community website using vanilla JS and modular CSS</li>
          <li>Improved accessibility and boosted engagement by 40%</li>
        </ul>
      </div>
    )
  };

  const data: TimelineItem[] = [
    {
      title: "May 2025 - Aug 2025",
      content: (
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>Embedded Systems Intern</b>
              <button onClick={() => open(modalContents.heatherGlen)} className="text-sm text-neutral-500 underline">click me</button>
            </div>
            <p className="mb-4"><b>Heather Glen Village</b></p>
            <p>Engineered embedded software for industrial devices, implemented low-level drivers, and automated firmware deployment tasks.</p>
          </div>
        </motion.div>
      )
    },
    {
      title: "Jan 2025 - Present",
      content: (
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>Software Team Lead</b>
              <button onClick={() => open(modalContents.aerialRobotics)} className="text-sm text-neutral-500 underline">click me</button>
            </div>
            <p className="mb-4"><b>McMaster Aerial Robotics Team</b></p>
            <p>Led the software team, conducted technical onboarding, and built AI and PCB workflows for autonomous navigation.</p>
          </div>
        </motion.div>
      )
    },
    {
      title: "Nov 2024 - Present",
      content: (
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>WebMaster</b>
              <button onClick={() => open(modalContents.ieee)} className="text-sm text-neutral-500 underline">click me</button>
            </div>
            <p className="mb-4"><b>IEEE McMaster Student Branch</b></p>
            <p>Specialized in frontend development and secure deployments using Next.js, Tailwind, Docker, and PostgreSQL.</p>
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
      )
    },
    {
      title: "Jun 2024 - Sep 2024",
      content: (
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="my-20">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>Frontend Developer</b>
              <button onClick={() => open(modalContents.bjic)} className="text-sm text-neutral-500 underline">click me</button>
            </div>
            <p className="mb-4"><b>Baitul Jannah Islamic Center (BJIC)</b></p>
            <p>Built and launched a responsive community site using vanilla JS and modular CSS, increasing engagement by 40%.</p>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 my-5 gap-4">
              <Image
  src={bjic01}
  width={500}
  height={500}
  alt="BJIC01"
  draggable={false}
  className="border-4 border-gray-300 rounded-xl shadow-sm"
/>
<Image
  src={bjic02}
  width={500}
  height={500}
  alt="BJIC02"
  draggable={false}
  className="border-4 border-gray-300 rounded-xl shadow-sm"
/>
<Image
  src={bjic03}
  width={500}
  height={500}
  alt="BJIC03"
  draggable={false}
  className="border-4 border-gray-300 rounded-xl shadow-sm"
/>
<Image
  src={bjic04}
  width={500}
  height={500}
  alt="BJIC04"
  draggable={false}
  className="border-4 border-gray-300 rounded-xl shadow-sm"
/>

            </div>
          </div>
        </motion.div>
      )
    }
  ];

  return (
    <div className="w-full">
      {modalOpen && <Modal modalOpen={modalOpen} contentdiv={modalContent} handleClose={close} />}
      <Timeline data={data} />
    </div>
  );
}
