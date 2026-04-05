"use client";

import { motion } from "framer-motion";

export type PublicationLink = { label: string; href: string };

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
};

type PublicationCardProps = {
  pub: Publication;
  index?: number;
};

export function PublicationCard({ pub, index = 0 }: PublicationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group rounded-2xl border border-[#002147]/12 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-tight text-[#002147]">
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
    </motion.article>
  );
}
