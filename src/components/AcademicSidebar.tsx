"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/content/site";

const NAV_LINKS = [
  { label: "About Me", href: "about" },
  { label: "Research Interests", href: "interests" },
  { label: "Publications", href: "publications" },
  { label: "Peer Review", href: "peer-review" },
  { label: "Education", href: "education" },
  { label: "Undergraduate Thesis", href: "thesis" },
  { label: "Work Experience", href: "work" },
  { label: "Volunteering", href: "volunteering" },
  { label: "Certifications", href: "certifications" },
  { label: "Contact", href: "contact" },
];

export function AcademicSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    const isMobile = window.innerWidth < 1024;
    const offset = isMobile ? 76 : 24;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Mobile Top Header */}
      <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur-md lg:hidden">
        <button
          type="button"
          onClick={() => scrollTo("about")}
          className="flex items-center gap-3 text-left"
        >
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-slate-300">
            <Image
              src="/showrov-azam.JPG"
              alt={site.name}
              width={40}
              height={40}
              className="size-full object-cover object-center"
            />
          </div>
          <div>
            <p className="font-academic-heading text-base font-bold text-slate-900 leading-tight">
              {site.name}
            </p>
            <p className="text-[11px] text-slate-500">NLP Researcher</p>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={site.resume.href}
            download={site.resume.downloadFileName}
            className="rounded-md bg-[#002147] px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800"
          >
            CV
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex size-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 z-30 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-slate-200 bg-[#f8fafc] px-6 py-6 shadow-xl lg:hidden">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollTo(item.href)}
                className="text-left py-2 text-sm font-medium text-slate-700 hover:text-[#002147] border-b border-slate-100"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-2 pt-4 border-t border-slate-200">
            <a
              href={site.resume.href}
              download={site.resume.downloadFileName}
              className="flex items-center justify-center rounded-lg bg-[#002147] py-2.5 text-xs font-semibold text-white shadow-sm"
            >
              Download CV (PDF)
            </a>
            <a
              href={site.resume.googleDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-1.5 text-xs font-medium text-slate-600 underline underline-offset-4 hover:text-[#002147]"
            >
              Open CV on Google Drive ↗
            </a>
          </div>
          <div className="mt-6 text-center text-[11px] text-slate-400">
            Last updated March 2026
          </div>
        </div>
      )}

      {/* Desktop Left Fixed Sidebar (Classic US Professor Style) */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:flex lg:w-64 xl:w-72 lg:flex-col lg:justify-between lg:overflow-y-auto lg:border-r lg:border-slate-200 lg:bg-[#f8fafc] px-6 py-8">
        <div>
          {/* Circular Headshot Photo */}
          <div className="flex flex-col items-center text-center">
            <div className="relative size-36 xl:size-40 overflow-hidden rounded-full border-2 border-slate-300/80 bg-white p-1 shadow-sm">
              <Image
                src="/showrov-azam.JPG"
                alt={`Portrait of ${site.name}`}
                width={160}
                height={160}
                priority
                className="size-full rounded-full object-cover object-center"
              />
            </div>
            <h2 className="mt-4 font-academic-heading text-xl font-bold tracking-tight text-slate-900">
              {site.name}
            </h2>
            <p className="mt-1 text-xs text-slate-500 font-medium leading-snug">
              NLP &amp; Speech Researcher
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollTo(item.href)}
                className="group flex w-full items-center rounded-md px-3 py-2 text-left text-xs font-semibold text-slate-700 transition hover:bg-white hover:text-[#002147] hover:shadow-xs"
              >
                <span className="size-1.5 rounded-full bg-slate-300 mr-2.5 transition group-hover:bg-[#002147]" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick Academic Document Links */}
          <div className="mt-8 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Curriculum Vitae
            </p>
            <div className="mt-2.5 flex flex-col gap-1.5">
              <a
                href={site.resume.href}
                download={site.resume.downloadFileName}
                className="flex items-center justify-between rounded-md bg-[#002147] px-3 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-[#001833]"
              >
                <span>Download CV</span>
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href={site.resume.googleDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 text-[11px] font-medium text-slate-500 underline decoration-slate-300 underline-offset-4 hover:text-[#002147]"
              >
                Google Drive mirror ↗
              </a>
            </div>
          </div>
        </div>

        {/* Footer / Timestamp */}
        <div className="mt-8 border-t border-slate-200 pt-4 text-center">
          <p className="text-[11px] text-slate-400">
            Last updated March, 2026
          </p>
        </div>
      </aside>
    </>
  );
}
