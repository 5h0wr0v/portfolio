"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { scrollToSection } from "@/lib/scroll";
import { site } from "@/content/site";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type DropdownKey = "research" | "experience" | null;

export function Navbar() {
  const [open, setOpen] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeDropdowns = useCallback(() => setOpen(null), []);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!navRef.current?.contains(e.target as Node)) closeDropdowns();
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [closeDropdowns]);

  function go(id: string) {
    closeDropdowns();
    setMobileOpen(false);
    scrollToSection(id);
  }

  const linkBase =
    "block rounded-lg px-3 py-2 text-sm font-medium text-[#002147]/90 transition-colors hover:bg-[#002147]/8 hover:text-[#002147]";

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#002147]/10 bg-white/90 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 lg:px-8">
        <button
          type="button"
          onClick={() => go("home")}
          className="font-[family-name:var(--font-playfair)] text-lg font-semibold tracking-tight text-[#002147] transition-opacity hover:opacity-80"
        >
          {site.name.split(" ")[0]}
          <span className="text-[#002147]/50">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          <button type="button" onClick={() => go("home")} className={linkBase}>
            Home
          </button>

          <div className="relative">
            <button
              type="button"
              className={`${linkBase} inline-flex items-center gap-1`}
              aria-expanded={open === "research"}
              onClick={() => setOpen(open === "research" ? null : "research")}
            >
              Research
              <Chevron open={open === "research"} />
            </button>
            <AnimatePresence>
              {open === "research" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute start-0 top-full z-50 mt-2 w-56 rounded-xl border border-[#002147]/12 bg-white py-2 shadow-lg"
                >
                  <button type="button" className={linkBase} onClick={() => go("research-peer-review")}>
                    Peer review
                  </button>
                  <button type="button" className={linkBase} onClick={() => go("research-publications")}>
                    Publications
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button
              type="button"
              className={`${linkBase} inline-flex items-center gap-1`}
              aria-expanded={open === "experience"}
              onClick={() => setOpen(open === "experience" ? null : "experience")}
            >
              Experience
              <Chevron open={open === "experience"} />
            </button>
            <AnimatePresence>
              {open === "experience" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute start-0 top-full z-50 mt-2 w-56 rounded-xl border border-[#002147]/12 bg-white py-2 shadow-lg"
                >
                  <button type="button" className={linkBase} onClick={() => go("experience-volunteer")}>
                    Volunteering
                  </button>
                  <button type="button" className={linkBase} onClick={() => go("experience-work")}>
                    Work experience
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button type="button" onClick={() => go("education")} className={linkBase}>
            Education
          </button>
          <button type="button" onClick={() => go("certifications")} className={linkBase}>
            Licenses &amp; certifications
          </button>
          <button type="button" onClick={() => go("contact")} className={linkBase}>
            Contact
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/resume.pdf"
            className="inline-flex items-center rounded-full bg-[#002147] px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#001a38] hover:shadow-md sm:px-4 sm:py-2.5 sm:text-sm"
            target="_blank"
            rel="noopener noreferrer"
            title="Download resume"
          >
            <span className="hidden sm:inline">Download resume</span>
            <span className="sm:hidden">Resume</span>
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-[#002147]/15 p-2 text-[#002147] md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#002147]/10 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              <button type="button" className={linkBase} onClick={() => go("home")}>
                Home
              </button>
              <p className="px-3 pt-2 text-xs font-bold uppercase tracking-widest text-[#002147]/45">
                Research
              </p>
              <button type="button" className={linkBase} onClick={() => go("research-peer-review")}>
                Peer review
              </button>
              <button type="button" className={linkBase} onClick={() => go("research-publications")}>
                Publications
              </button>
              <p className="px-3 pt-2 text-xs font-bold uppercase tracking-widest text-[#002147]/45">
                Experience
              </p>
              <button type="button" className={linkBase} onClick={() => go("experience-volunteer")}>
                Volunteering
              </button>
              <button type="button" className={linkBase} onClick={() => go("experience-work")}>
                Work experience
              </button>
              <button type="button" className={linkBase} onClick={() => go("education")}>
                Education
              </button>
              <button type="button" className={linkBase} onClick={() => go("certifications")}>
                Licenses &amp; certifications
              </button>
              <button type="button" className={linkBase} onClick={() => go("contact")}>
                Contact
              </button>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#002147] px-4 py-3 text-sm font-semibold text-white"
              >
                Download resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
