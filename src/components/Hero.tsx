"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/content/site";

const PROFILE_IMAGE_SRC = "/showrov-azam.JPG";
const PROFILE_SIZE = 250;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#002147]/10 bg-white pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,33,71,0.08),transparent)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 md:flex-row md:items-center md:gap-12 lg:gap-16 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full flex-1 text-center md:text-left"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#002147]/60"
          >
            Portfolio
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-3 font-[family-name:var(--font-playfair)] text-4xl font-semibold tracking-tight text-[#002147] sm:text-5xl"
          >
            {site.name}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-3 text-lg font-semibold tracking-tight text-[#002147] sm:text-xl"
          >
            {site.title}
          </motion.p>
          <motion.div variants={item} className="mt-6 space-y-4 text-base leading-relaxed text-[#002147]/80">
            {site.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex shrink-0 justify-center md:justify-end md:ps-2 lg:ps-4"
        >
          <div
            className="relative shrink-0 overflow-hidden rounded-full border-[3px] border-[#002147] bg-[#002147]/[0.04] p-1 shadow-[0_22px_48px_-14px_rgba(0,33,71,0.45),0_8px_24px_-8px_rgba(0,33,71,0.2)]"
            style={{ width: PROFILE_SIZE, height: PROFILE_SIZE }}
          >
            <Image
              src={PROFILE_IMAGE_SRC}
              alt={`Professional portrait of ${site.name}`}
              width={PROFILE_SIZE}
              height={PROFILE_SIZE}
              priority
              className="size-full rounded-full object-cover object-center"
              sizes="250px"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="relative mx-auto mt-12 max-w-6xl px-5 md:mt-16 lg:mt-20 lg:px-8"
      >
        <div className="flex flex-col divide-y divide-[#002147]/10 rounded-2xl border border-[#002147]/12 bg-[#002147]/[0.03] sm:flex-row sm:divide-x sm:divide-y-0">
          {site.stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-1 flex-col items-center justify-center gap-1.5 px-4 py-6 sm:py-7"
            >
              <span className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tabular-nums text-[#002147] sm:text-[2rem]">
                {s.value}
              </span>
              <span className="max-w-[12rem] text-center text-[11px] font-medium uppercase leading-snug tracking-widest text-[#002147]/55 sm:text-xs">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
