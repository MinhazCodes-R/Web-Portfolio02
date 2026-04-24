'use client';
import React, { useState, useEffect, type ReactNode } from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from 'framer-motion';
import Modal from "../components/myComponents/modal/modal";

export function TimelineDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [experiences, setExperiences] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(data => {
        setExperiences(data.experiences || []);
      })
      .catch(err => console.error(err));
  }, []);

  const close = () => setModalOpen(false);
  const open = (content: ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const data = experiences.map((exp: any) => ({
    title: exp.date,
    content: (
      <motion.div 
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="my-10 text-black dark:text-white">
          <div className="text-neutral-500 text-3xl mb-1 flex gap-3 items-center">
            <b>{exp.title}</b>
            <button onClick={() => open(
              <div className="bg-white w-[90vw] md:w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll text-black" style={{ maxHeight: '80vh' }}>
                <h1 className="text-blue-400 text-3xl font-bold">{exp.title}</h1>
                <p><b>{exp.company}</b> – {exp.date}</p>
                <div className="mt-4 whitespace-pre-wrap">{exp.description}</div>
              </div>
            )} className="text-sm text-neutral-500 underline">
              More Info
            </button>
          </div>
          <p className="mb-4"><b>{exp.company}</b></p>
          <div className="whitespace-pre-wrap">{exp.description}</div>
        </div>
      </motion.div>
    )
  }));

  if (experiences.length === 0) return <div className="text-center p-10">Loading timeline...</div>;

  return (
    <div className="w-full">
      {modalOpen && <Modal modalOpen={modalOpen} contentdiv={modalContent} handleClose={close} />}
      <Timeline data={data} />
    </div>
  );
}
