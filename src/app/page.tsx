"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CertificationCard } from "@/components/CertificationCard";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PublicationCard } from "@/components/PublicationCard";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { site } from "@/content/site";

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#002147]/55">{eyebrow}</p>
      <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-[#002147] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-[#002147]/75">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#002147]">
        <Hero />

        <section
          id="research"
          className="scroll-mt-24 border-b border-[#002147]/10 bg-[#fafbfc] py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <SectionTitle
              eyebrow="Research"
              title="Peer review & publications"
              subtitle="ACM TALLIP reviewing, verification, and full-text access to each paper via ResearchGate (with arXiv/DOI where applicable)."
            />

            <div id="research-peer-review" className="scroll-mt-28">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mx-auto mt-14 max-w-3xl text-center font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#002147] sm:text-left"
              >
                Peer review
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="mx-auto mt-6 max-w-3xl rounded-2xl border border-[#002147]/12 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#002147]">
                    ACM TALLIP
                  </h4>
                  <VerifiedBadge />
                </div>
                <p className="mt-2 text-sm font-semibold text-[#002147]/80">{site.journal.role}</p>
                <p className="mt-1 text-sm text-[#002147]/65">{site.journal.venue}</p>
                <p className="mt-5 leading-relaxed text-[#002147]/80">{site.journal.detail}</p>
                <a
                  href={site.journal.peerReviewVerificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#002147] underline decoration-[#002147]/30 underline-offset-4 transition-colors hover:text-[#001a38] hover:decoration-[#002147]"
                >
                  Peer review verification (PDF)
                  <span aria-hidden>↗</span>
                </a>
              </motion.div>
            </div>

            <div id="research-publications" className="scroll-mt-28">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mx-auto mt-16 max-w-3xl text-center font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#002147] sm:text-left md:mt-20"
              >
                Publications
              </motion.h3>
              <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-6">
                {site.publications.map((pub, i) => (
                  <PublicationCard key={pub.id} pub={{ ...pub }} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience-volunteer"
          className="scroll-mt-24 border-y border-[#002147]/10 bg-[#fafbfc] py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <SectionTitle
              eyebrow="Experience"
              title="Volunteering"
              subtitle="Building pathways into competitive programming and algorithms for the next cohort."
            />
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              {site.volunteering.map((v, i) => (
                <motion.div
                  key={v.org}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-[#002147]/12 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#002147]">
                    {v.org}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#002147]/70">{v.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#002147]/80">{v.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience-work" className="scroll-mt-24 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <SectionTitle
              eyebrow="Experience"
              title="Work experience"
              subtitle="Translating technical depth into thoughtful hiring and team growth."
            />
            <div className="mx-auto mt-12 max-w-3xl space-y-6">
              {site.work.map((w, i) => (
                <motion.div
                  key={w.company}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-[#002147]/12 bg-white p-8 shadow-sm"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#002147]">
                      {w.company}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#002147]/50">
                      {w.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-[#002147]/75">{w.role}</p>
                  <p className="mt-4 leading-relaxed text-[#002147]/80">{w.detail}</p>
                  {"imageSrc" in w && w.imageSrc ? (
                    <div className="mx-auto mt-6 flex w-full max-w-lg justify-center rounded-xl border border-[#002147]/10 bg-[#fafbfc] px-4 py-8 sm:px-6 sm:py-10">
                      <Image
                        src={w.imageSrc}
                        alt={`${w.company} — certified partner certificate`}
                        width={420}
                        height={600}
                        className="h-auto max-h-[min(480px,65vh)] w-auto max-w-full object-contain"
                        sizes="(max-width: 768px) 90vw, 420px"
                      />
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          className="scroll-mt-24 border-y border-[#002147]/10 bg-[#fafbfc] py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <SectionTitle
              eyebrow="Education"
              title="Academic timeline"
              subtitle="Undergraduate degree at Daffodil International University with CGPA, capstone thesis, and secondary milestones in Dinajpur."
            />
            <div className="mt-14">
              <ExperienceTimeline items={site.education} />
            </div>
          </div>
        </section>

        <section id="certifications" className="scroll-mt-24 py-20 md:pb-28 md:pt-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <SectionTitle
              eyebrow="Credentials"
              title="Licenses & certifications"
              subtitle="IBM, Google, DeepLearning.AI, and University of Michigan on Coursera—each card links to a public verify page."
            />
            <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {site.certifications.map((c, i) => (
                <CertificationCard key={c.id} cert={c} index={i} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection
          links={site.contact.links}
          email={site.contact.email}
          whatsapp={site.contact.whatsapp}
        />

        <footer className="border-t border-[#002147]/10 bg-[#002147] py-10 text-center text-sm text-white/85">
          <p className="font-[family-name:var(--font-playfair)] text-base font-medium text-white">
            {site.name}
          </p>
          <p className="mt-2 text-white/70">{site.title}</p>
          <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} · Built with Next.js</p>
        </footer>
      </main>
    </>
  );
}
