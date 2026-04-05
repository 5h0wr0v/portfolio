"use client";

import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ContactLink } from "@/content/site";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.481 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.833.092-.647.35-1.086.636-1.337-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
      />
    </svg>
  );
}

function ScholarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3a7 7 0 100 14 7 7 0 000-14z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4.5 20.5c1.2-3.2 4.2-5 7.5-5s6.3 1.8 7.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ResearchGateIcon({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex size-7 items-center justify-center rounded-md bg-[#00ceb4] text-[10px] font-black leading-none text-white ${className ?? ""}`}
      aria-hidden
    >
      RG
    </span>
  );
}

function OrcidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#A6CE39" />
      <path
        fill="#fff"
        d="M8.5 8.25h1.35v7.5H8.5v-7.5zm2.7 0h1.2c2.1 0 3.45 1.35 3.45 3.75s-1.35 3.75-3.45 3.75h-1.2v-7.5zm1.2 1.2v5.1h.15c1.35 0 2.1-.9 2.1-2.55 0-1.65-.75-2.55-2.1-2.55h-.15z"
      />
    </svg>
  );
}

function WebOfScienceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const profileIconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  scholar: ScholarIcon,
  researchgate: ResearchGateIcon,
  orcid: OrcidIcon,
  webofscience: WebOfScienceIcon,
} as const;

type ContactSectionProps = {
  links: readonly ContactLink[];
  email: { address: string; href: string };
  whatsapp: { display: string; href: string };
};

function contactCard(
  key: string,
  href: string,
  label: string,
  sublabel: string | undefined,
  Icon: ComponentType<{ className?: string }>,
  i: number,
  external: boolean,
) {
  return (
    <motion.li
      key={key}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: i * 0.04 }}
    >
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-2xl border border-[#002147]/12 bg-[#fafbfc] px-3 py-5 text-center transition-all hover:-translate-y-0.5 hover:border-[#002147]/25 hover:bg-white hover:shadow-md sm:min-h-[152px]"
      >
        <span className="flex size-14 items-center justify-center rounded-2xl border border-[#002147]/10 bg-white text-[#002147] shadow-sm transition-colors group-hover:border-[#002147]/20 group-hover:text-[#001a38]">
          <Icon className="size-7" />
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-[#002147]/55">{label}</span>
        {sublabel ? (
          <span className="max-w-full break-all text-[11px] font-medium leading-snug text-[#002147]/70">{sublabel}</span>
        ) : null}
      </Link>
    </motion.li>
  );
}

export function ContactSection({ links, email, whatsapp }: ContactSectionProps) {
  let index = 0;
  const items: ReactNode[] = [];

  links.forEach((item) => {
    const Icon = profileIconMap[item.icon];
    items.push(
      contactCard(item.id, item.href, item.label, undefined, Icon, index, true),
    );
    index += 1;
  });

  items.push(
    contactCard("whatsapp", whatsapp.href, "WhatsApp", whatsapp.display, WhatsAppIcon, index, true),
  );
  index += 1;
  items.push(
    contactCard("email", email.href, "Email", email.address, MailIcon, index, false),
  );

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[#002147]/10 bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#002147]/55">Contact</p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-[#002147] sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#002147]/75">
            Connect on academic profiles, message on WhatsApp, or write to my university email.
          </p>
        </motion.div>

        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
          {items}
        </ul>
      </div>
    </section>
  );
}
