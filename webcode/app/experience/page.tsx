'use client';

import Header from "@/components/myComponents/header";
import { TimelineDemo } from "../timeline";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <div className="sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-slate-200/60">
        <Header />
      </div>

      <BackgroundBeamsWithCollision className="min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-20 text-center px-6"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-slate-500 font-medium mb-6">
            2024 — Present · 4 internships · 2 lead roles
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-slate-900">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Experience.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From observability pipelines and AI/ML systems at Ericsson, to embedded C++ for industrial IoT,
            to healthcare SaaS at PointClickCare — here&apos;s where I&apos;ve learned, built, and shipped.
          </p>
        </motion.div>
      </BackgroundBeamsWithCollision>

      <div className="relative">
        <TimelineDemo />
      </div>
    </div>
  );
};

export default ExperiencePage;
