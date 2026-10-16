"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type PublicationLink = { label: string; href: string };

export type PublicationFigure = {
  id: string;
  title: string;
  shortTitle?: string;
  category?: string;
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type Publication = {
  id: string;
  title: string;
  venue: string;
  description: string;
  license?: string;
  researchGateUrl: string;
  arxivUrl?: string;
  doiUrl?: string;
  links?: readonly PublicationLink[];
  figures?: readonly PublicationFigure[];
};

type PublicationCardProps = {
  pub: Publication;
  index?: number;
};

export function PublicationCard({ pub, index = 0 }: PublicationCardProps) {
  const [activeFigureIndex, setActiveFigureIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"featured" | "grid">("featured");

  const figures = pub.figures ?? [];
  const hasFigures = figures.length > 0;
  const currentFigure = hasFigures ? figures[activeFigureIndex] : null;

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + figures.length) % figures.length : 0
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % figures.length : 0
        );
      }
    },
    [lightboxIndex, figures.length]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handleKeyDown]);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
  };

  const nextFigure = () => {
    if (!hasFigures) return;
    setActiveFigureIndex((prev) => (prev + 1) % figures.length);
  };

  const prevFigure = () => {
    if (!hasFigures) return;
    setActiveFigureIndex((prev) => (prev - 1 + figures.length) % figures.length);
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        className="group rounded-2xl border border-[#002147]/12 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-academic-heading text-xl font-bold tracking-tight text-[#002147]">
              {pub.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#002147]/70">{pub.venue}</p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-[#002147]/80">
              {pub.description}
            </p>
            {pub.license ? (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#002147]/15 bg-[#002147]/[0.04] px-3 py-1 text-xs font-semibold text-[#002147]/80">
                <span className="text-[#002147]/50">License</span>
                {pub.license}
              </p>
            ) : null}
          </div>
        </div>

        {/* Primary Publication Action Buttons */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={pub.researchGateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#00d0af] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <span className="font-bold">RG</span>
            View on ResearchGate
          </a>
          {pub.arxivUrl ? (
            <a
              href={pub.arxivUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#002147]/20 bg-[#002147]/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#002147] transition-colors hover:bg-[#002147]/10"
            >
              arXiv
            </a>
          ) : null}
          {pub.doiUrl ? (
            <a
              href={pub.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#002147]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#002147] transition-colors hover:bg-[#002147]/5"
            >
              DOI
            </a>
          ) : null}
          {pub.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#002147]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#002147] transition-colors hover:bg-[#002147]/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Methodology & Empirical Analysis Figures Showcase */}
        {hasFigures && currentFigure ? (
          <div className="mt-8 border-t border-slate-200/90 pt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-lg bg-[#002147]/10 text-[#002147]">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-academic-heading text-sm sm:text-base font-bold text-slate-900">
                    Methodology &amp; Empirical Findings
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Key figures, annotation reliability metrics, and algorithmic benchmarks from the paper.
                  </p>
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setViewMode("featured")}
                  className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition ${
                    viewMode === "featured"
                      ? "bg-white text-[#002147] shadow-2xs font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Interactive Featured View"
                >
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Featured</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition ${
                    viewMode === "grid"
                      ? "bg-white text-[#002147] shadow-2xs font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Grid View (All Figures)"
                >
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span>All ({figures.length})</span>
                </button>
              </div>
            </div>

            {/* Quick Switcher Pills */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {figures.map((fig, idx) => {
                const isActive = activeFigureIndex === idx && viewMode === "featured";
                return (
                  <button
                    key={fig.id}
                    type="button"
                    onClick={() => {
                      setActiveFigureIndex(idx);
                      setViewMode("featured");
                    }}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs transition ${
                      isActive
                        ? "bg-[#002147] text-white font-semibold shadow-2xs"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <span
                      className={`flex size-4 items-center justify-center rounded-full text-[10px] font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-300 text-slate-800"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="truncate max-w-[170px] sm:max-w-none">
                      {fig.shortTitle || fig.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* FEATURED / SLIDESHOW MODE */}
            {viewMode === "featured" ? (
              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-2xs">
                {/* Figure Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-[#002147]/8 px-2 py-0.5 text-xs font-bold text-[#002147]">
                      Figure {activeFigureIndex + 1} of {figures.length}
                    </span>
                    {currentFigure.category ? (
                      <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[11px] font-semibold text-emerald-800">
                        {currentFigure.category}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={prevFigure}
                      aria-label="Previous figure"
                      className="inline-flex size-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={nextFigure}
                      aria-label="Next figure"
                      className="inline-flex size-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Figure Title */}
                <h5 className="mt-3 font-academic-heading text-base sm:text-lg font-bold text-slate-900">
                  {currentFigure.title}
                </h5>

                {/* Image Stage Container */}
                <div
                  onClick={() => openLightbox(activeFigureIndex)}
                  className="group/stage relative mt-3 flex min-h-[260px] sm:min-h-[340px] max-h-[440px] cursor-zoom-in items-center justify-center overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/70 p-3 sm:p-5 transition hover:border-[#002147]/40"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFigure.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center justify-center size-full"
                    >
                      <Image
                        src={currentFigure.src}
                        alt={currentFigure.alt}
                        width={currentFigure.width || 800}
                        height={currentFigure.height || 600}
                        className="max-h-[380px] w-auto h-auto max-w-full object-contain transition-transform duration-300 group-hover/stage:scale-[1.01]"
                        priority={activeFigureIndex === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Expand Hint Overlay Badge */}
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-slate-900/80 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-sm transition opacity-80 group-hover/stage:opacity-100">
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>Click to enlarge</span>
                  </div>
                </div>

                {/* Figure Caption */}
                {currentFigure.caption ? (
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-l-2 border-[#002147] pl-3 py-0.5 bg-slate-50/50 rounded-r">
                    {currentFigure.caption}
                  </p>
                ) : null}

                {/* Thumbnail Strip */}
                <div className="mt-5 border-t border-slate-100 pt-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Quick Switch Figure
                  </p>
                  <div className="grid grid-cols-5 gap-2">
                    {figures.map((fig, idx) => {
                      const isSelected = activeFigureIndex === idx;
                      return (
                        <button
                          key={fig.id}
                          type="button"
                          onClick={() => setActiveFigureIndex(idx)}
                          className={`group/thumb relative flex flex-col items-center overflow-hidden rounded-lg border p-1 text-left transition ${
                            isSelected
                              ? "border-[#002147] bg-[#002147]/5 ring-2 ring-[#002147]/20"
                              : "border-slate-200 bg-white hover:border-slate-400"
                          }`}
                        >
                          <div className="relative h-12 sm:h-16 w-full overflow-hidden rounded bg-slate-50 flex items-center justify-center">
                            <Image
                              src={fig.src}
                              alt={fig.alt}
                              width={160}
                              height={100}
                              className="size-full object-contain p-1"
                            />
                            <span className="absolute bottom-1 right-1 rounded bg-black/75 px-1 text-[9px] font-bold text-white">
                              #{idx + 1}
                            </span>
                          </div>
                          <span
                            className={`mt-1 line-clamp-1 w-full text-center text-[10px] font-medium ${
                              isSelected ? "text-[#002147] font-bold" : "text-slate-600"
                            }`}
                          >
                            {fig.shortTitle || fig.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              /* GRID MODE - ALL 5 FIGURES VISIBLE */
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {figures.map((fig, idx) => (
                  <div
                    key={fig.id}
                    onClick={() => openLightbox(idx)}
                    className="group/grid relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:border-[#002147]/50 hover:shadow-sm cursor-zoom-in"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2 mb-2.5">
                        <span className="rounded bg-[#002147]/8 px-2 py-0.5 text-[11px] font-bold text-[#002147]">
                          Figure {idx + 1}
                        </span>
                        {fig.category ? (
                          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                            {fig.category}
                          </span>
                        ) : null}
                      </div>
                      <h5 className="font-academic-heading text-sm font-bold text-slate-900 line-clamp-2">
                        {fig.title}
                      </h5>
                      <div className="relative mt-3 flex h-48 w-full items-center justify-center overflow-hidden rounded-lg border border-slate-100 bg-slate-50/70 p-2">
                        <Image
                          src={fig.src}
                          alt={fig.alt}
                          width={fig.width || 400}
                          height={fig.height || 300}
                          className="size-full object-contain transition-transform duration-200 group-hover/grid:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/grid:bg-black/5 transition flex items-center justify-center">
                          <span className="opacity-0 group-hover/grid:opacity-100 transition rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
                            Enlarge 🔍
                          </span>
                        </div>
                      </div>
                    </div>
                    {fig.caption ? (
                      <p className="mt-2.5 text-xs text-slate-600 line-clamp-2">
                        {fig.caption}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}
      </motion.article>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && figures[lightboxIndex] ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/92 p-4 sm:p-6 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-white/15 px-2.5 py-1 text-xs font-bold">
                  Figure {lightboxIndex + 1} of {figures.length}
                </span>
                <span className="font-academic-heading text-sm sm:text-base font-bold text-white/95 truncate max-w-[200px] sm:max-w-md">
                  {figures[lightboxIndex].title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Close fullscreen view"
              >
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main Fullscreen Image Area with Prev/Next Controls */}
            <div
              className="relative flex flex-1 items-center justify-center py-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (prev) =>
                      prev !== null
                        ? (prev - 1 + figures.length) % figures.length
                        : 0
                  );
                }}
                className="absolute left-2 sm:left-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30"
                aria-label="Previous figure"
              >
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="relative max-h-[75vh] max-w-[90vw] overflow-hidden rounded-xl bg-white/5 p-2 sm:p-4">
                <Image
                  src={figures[lightboxIndex].src}
                  alt={figures[lightboxIndex].alt}
                  width={figures[lightboxIndex].width || 1200}
                  height={figures[lightboxIndex].height || 800}
                  className="max-h-[72vh] w-auto h-auto max-w-full object-contain mx-auto rounded"
                />
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (prev) =>
                      prev !== null ? (prev + 1) % figures.length : 0
                  );
                }}
                className="absolute right-2 sm:right-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30"
                aria-label="Next figure"
              >
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Bottom Caption & Thumbnail Indicators */}
            <div
              className="mx-auto max-w-3xl text-center text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {figures[lightboxIndex].caption ? (
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {figures[lightboxIndex].caption}
                </p>
              ) : null}
              <div className="mt-3 flex items-center justify-center gap-2">
                {figures.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className={`size-2.5 rounded-full transition ${
                      lightboxIndex === idx ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Jump to figure ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
