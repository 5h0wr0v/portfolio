"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IssuerLogo } from "@/components/IssuerLogo";
import type { Certification } from "@/content/site";

type CertificationCardProps = {
  cert: Certification;
  index?: number;
};

export function CertificationCard({ cert, index = 0 }: CertificationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex h-full flex-col rounded-2xl border border-[#002147]/12 bg-white p-5 shadow-sm transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <IssuerLogo brand={cert.brand} />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#002147]/45">
            {cert.issuerLine}
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-base font-semibold leading-snug text-[#002147] sm:text-lg">
            {cert.name}
          </h3>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#002147]/8 pt-4">
        <span className="rounded-full bg-[#002147]/[0.06] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#002147]/70">
          Coursera
        </span>
        <Link
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[#002147] underline-offset-4 transition-colors hover:text-[#001a38] hover:underline"
        >
          Verify credential
        </Link>
      </div>
    </motion.article>
  );
}
