'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandInstagram,
  IconMailOpened,
  IconPhone,
} from '@tabler/icons-react';

import Header from '@/components/myComponents/header';
import { FlipWords } from '@/components/ui/flip-words';
import ProfilePic from './IMG_5635.jpg';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/minhazur-rakin/', Icon: IconBrandLinkedin },
  { label: 'GitHub', href: 'https://github.com/MinhazCodes-R', Icon: IconBrandGithub },
  { label: 'YouTube', href: 'https://www.youtube.com/@MinhazsVideos', Icon: IconBrandYoutube },
  { label: 'Instagram', href: '#', Icon: IconBrandInstagram },
  { label: 'Email', href: '#emailandphone', Icon: IconMailOpened },
  { label: 'Phone', href: '#emailandphone', Icon: IconPhone },
];

const stack = [
  'Python',
  'C / C++',
  'TypeScript',
  'SwiftUI',
  'PyTorch',
  'OpenCV',
  'PostgreSQL',
  'Kafka',
  'AWS',
  'Docker',
];

const flipWords = ['JavaScript', 'C / C++', 'Python', 'SwiftUI', 'PyTorch'];

const featured = [
  {
    label: 'Experience',
    title: 'Where I have worked',
    blurb: 'Internships at Ericsson, PointClickCare, and Taylor Systems. Plus team lead at McMaster Aerial Robotics.',
    href: '/experience',
    accent: 'from-purple-500 via-violet-500 to-pink-500',
  },
  {
    label: 'Projects',
    title: 'What I have built',
    blurb: 'ASL translator, AI travel agent, lunar seismic detector, hardware Rubik’s solver, and more.',
    href: '/projectsdone',
    accent: 'from-cyan-500 via-sky-500 to-indigo-500',
  },
  {
    label: 'Startups',
    title: 'What I am shipping',
    blurb: 'miniHabits — a habit tracker live on the web with a SwiftUI iOS companion in active development.',
    href: '/startups',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
];

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef });

  const titleX = useTransform(scrollYProgress, [0, 0.5], ['0%', '-60%']);
  const photoX = useTransform(scrollYProgress, [0, 0.5], ['0%', '70%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const flipY = useTransform(scrollYProgress, [0.25, 0.55], ['80%', '0%']);
  const flipOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.7, 0.85], [0, 1, 1, 0]);

  const storyY = useTransform(scrollYProgress, [0.55, 0.9], ['80%', '0%']);
  const storyOpacity = useTransform(scrollYProgress, [0.55, 0.75, 0.95], [0, 1, 1]);

  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <div className="sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-slate-200/60">
        <Header />
      </div>

      <section ref={heroRef} className="relative h-[300vh]">
        <motion.div
          style={{ y: blobY }}
          className="pointer-events-none absolute -top-32 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-300/40 to-transparent blur-3xl"
        />
        <motion.div
          style={{ y: blob2Y }}
          className="pointer-events-none absolute top-[40vh] -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-pink-300/40 to-transparent blur-3xl"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,1) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              style={{ opacity: titleOpacity }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <motion.div style={{ x: titleX }} className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to Summer 2027 internships
                </div>

                <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                  Hey, I&apos;m{' '}
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Minhaz.
                  </span>
                </h1>

                <p className="mt-6 text-xl sm:text-2xl text-slate-700 leading-snug max-w-2xl">
                  Computer Engineering student at <span className="text-slate-900 font-semibold">McMaster</span>, building AI infrastructure, data pipelines, and the occasional silly side project.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/projectsdone"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                  >
                    See my work
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/contactme"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                  >
                    Get in touch
                  </Link>
                </div>
              </motion.div>

              <motion.div
                style={{ x: photoX }}
                className="lg:col-span-5 flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-indigo-400/30 via-purple-400/20 to-pink-400/30 blur-3xl" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.25)]">
                    <Image
                      src={ProfilePic}
                      alt="Minhaz"
                      placeholder="blur"
                      className="w-64 sm:w-80 h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex items-center pointer-events-none">
          <motion.div
            style={{ y: flipY, opacity: flipOpacity }}
            className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pointer-events-auto"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 font-medium mb-6">
              Tools of the trade
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
              I have worked with{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                <FlipWords words={flipWords} />
              </span>
              <br />
              <span className="text-slate-500">and I&apos;m always looking to learn more.</span>
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="group inline-flex items-center justify-center h-11 w-11 rounded-full border border-slate-300 bg-white text-slate-600 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="sticky top-0 h-screen flex items-center pointer-events-none">
          <motion.div
            style={{ y: storyY, opacity: storyOpacity }}
            className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pointer-events-auto text-center"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 font-medium mb-6">
              The name is misleading
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              Don&apos;t let the title fool you.
            </h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              I&apos;m studying <em className="text-slate-900 font-semibold not-italic">Computer Engineering</em>, but I&apos;ve spent the last few years going deep on the software side — shipping production data pipelines, AI/ML systems, and full-stack apps.
            </p>
            <p className="mt-4 text-lg text-slate-500">
              Scroll to see what I&apos;ve built.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Stack</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-3">Explore</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Where to next?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-slate-200 to-slate-100 hover:from-slate-300 transition-all"
              >
                <Link
                  href={card.href}
                  className="relative block h-full rounded-2xl bg-white p-6 sm:p-8 transition-shadow group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
                >
                  <div
                    className={`text-xs uppercase tracking-wider font-semibold bg-gradient-to-r ${card.accent} bg-clip-text text-transparent mb-4`}
                  >
                    {card.label}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.blurb}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-transform group-hover:translate-x-1">
                    Open
                    <span aria-hidden>→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="emailandphone"
        className="border-t border-slate-200 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-3">
                Get in touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Always up for a good conversation.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
              <a
                href="mailto:Minhazur.rakin101@gmail.com"
                className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:bg-slate-100"
              >
                <IconMailOpened className="h-5 w-5 text-slate-500 group-hover:text-slate-900" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Email</div>
                  <div className="text-slate-800 font-medium">Minhazur.rakin101@gmail.com</div>
                </div>
              </a>
              <a
                href="tel:+16475688365"
                className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:bg-slate-100"
              >
                <IconPhone className="h-5 w-5 text-slate-500 group-hover:text-slate-900" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Phone</div>
                  <div className="text-slate-800 font-medium">647 568 8365</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
