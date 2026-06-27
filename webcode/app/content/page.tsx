'use client';

import Header from "@/components/myComponents/header";
import { motion } from "framer-motion";
import Link from "next/link";

const ContentPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <Header />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(15,23,42,0.04),_transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 sm:pt-32 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 font-medium mb-6">
              Portfolio · Content
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.05] max-w-4xl">
              Engineering content.
            </h1>
            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Videos, posts, and notes on the engineering work I do across the web. This shelf will fill up as I publish.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="px-8 py-20 sm:px-12 sm:py-28 text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              In progress
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Coming soon.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              I&apos;m putting together a feed of social media content tied to my engineering work. Check back here as posts go live.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                Want to know when something drops?
              </h3>
              <p className="mt-2 text-slate-600">
                Reach out and I&apos;ll point you to the latest piece.
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

export default ContentPage;
