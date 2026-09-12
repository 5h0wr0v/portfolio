"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AcademicSidebar } from "@/components/AcademicSidebar";
import { CertificationCard } from "@/components/CertificationCard";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PublicationCard } from "@/components/PublicationCard";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-slate-200">
      {/* Fixed Left Sidebar for Academic Layout */}
      <AcademicSidebar />

      {/* Main Content Pane (Left margin on desktop to accommodate fixed sidebar) */}
      <main className="lg:pl-64 xl:pl-72">
        <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10 lg:px-12 xl:px-14">
          
          {/* Header Section (Classic US University Professor Style) */}
          <header id="about" className="scroll-mt-8 pt-4 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-academic-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                {site.name}
              </h1>

              {/* Academic Metadata Block */}
              <div className="mt-4 space-y-1.5 text-sm sm:text-base text-slate-600">
                <p className="font-medium text-slate-800">
                  {site.title}
                </p>
                <p>
                  Department of Computer Science and Engineering, Daffodil International University, Dhaka, Bangladesh
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-sm">
                  <span>
                    <strong className="font-semibold text-slate-700">Email: </strong>
                    <a
                      href={`mailto:${site.contact.email.address}`}
                      className="text-[#002147] underline underline-offset-2 hover:text-blue-800"
                    >
                      {site.contact.email.address}
                    </a>
                  </span>
                  <span>·</span>
                  <span>
                    <strong className="font-semibold text-slate-700">Phone: </strong>
                    {site.contact.whatsapp.display}
                  </span>
                  <span>·</span>
                  <span>
                    <strong className="font-semibold text-slate-700">Location: </strong>
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>

              {/* Quick Academic Profile Links */}
              <div className="mt-5 flex flex-wrap items-center gap-2 pt-2 text-xs font-semibold">
                <a
                  href={site.resume.href}
                  download={site.resume.downloadFileName}
                  className="inline-flex items-center gap-1.5 rounded-md bg-[#002147] px-3 py-1.5 text-white transition hover:bg-[#001733]"
                >
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV (PDF)
                </a>
                <a
                  href={site.resume.googleDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-slate-700 transition hover:bg-slate-50 hover:text-[#002147]"
                >
                  Google Drive ↗
                </a>
                {site.contact.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-slate-700 transition hover:bg-slate-50 hover:text-[#002147]"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>

              {/* Bio / Summary Paragraphs */}
              <div className="mt-8 space-y-4 text-base sm:text-[17px] leading-relaxed text-slate-700 border-t border-slate-200 pt-6">
                {site.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          </header>

          {/* Research Interests Section */}
          <section id="interests" className="scroll-mt-8 border-t border-slate-200 py-10">
            <h2 className="font-academic-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Research Interests
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-[#002147]" />
                <div>
                  <strong className="font-semibold text-slate-900">
                    Low-Resource NLP &amp; Dialectal Speech Processing:
                  </strong>{" "}
                  Building transformer-based pipelines that combine fine-tuned ASR with sequence-to-sequence text normalization to convert dialectal and regional speech into standardized text. Resolving register and standardization inconsistencies across low-resource, dialect-rich languages.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-[#002147]" />
                <div>
                  <strong className="font-semibold text-slate-900">
                    Endangered and Minority Language Preservation:
                  </strong>{" "}
                  Developing data curation, annotation, and modeling approaches for underrepresented and minority languages that lack large-scale digital resources, with the goal of extending NLP and speech technologies to communities currently excluded from mainstream language tools.
                </div>
              </li>
            </ul>
          </section>

          {/* Research Publications Section */}
          <section id="publications" className="scroll-mt-8 border-t border-slate-200 py-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-academic-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Research Publications
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                {site.publications.length} Papers (Conference &amp; Preprints)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Full-text access available on ResearchGate, arXiv, and publisher DOI links.
            </p>

            <div className="mt-6 space-y-5">
              {site.publications.map((pub, i) => (
                <PublicationCard key={pub.id} pub={pub} index={i} />
              ))}
            </div>
          </section>

          {/* Peer Review & Academic Service Section */}
          <section id="peer-review" className="scroll-mt-8 border-t border-slate-200 py-10">
            <h2 className="font-academic-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Peer Review &amp; Academic Service
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Invited peer reviewer evaluating scientific soundness and methodology for international NLP journals and IEEE conferences.
            </p>

            <div className="mt-6 space-y-4">
              {site.peerReviews.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-academic-heading text-lg sm:text-xl font-bold text-slate-900">
                        {review.name}
                      </h3>
                      <VerifiedBadge />
                    </div>
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#002147]/80">
                    {review.role} · <span className="text-slate-500 font-normal">{review.venue}</span>
                  </p>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    {review.detail}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <a
                      href={review.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#002147] underline underline-offset-4 hover:text-blue-800"
                    >
                      <span>Official Peer Review Verification (PDF)</span>
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-8 border-t border-slate-200 py-10">
            <h2 className="font-academic-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Education &amp; Academic Timeline
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Undergraduate degree at Daffodil International University with CGPA, academic honors, and thesis.
            </p>
            <div className="mt-8">
              <ExperienceTimeline items={site.education} />
            </div>
          </section>

          {/* Undergraduate Thesis Section */}
          <section id="thesis" className="scroll-mt-8 border-t border-slate-200 py-10">
            <h2 className="font-academic-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Undergraduate Thesis
            </h2>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs sm:p-8">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 flex-1 space-y-5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#002147]/60">
                      {site.thesis.heading}
                    </p>
                    <h3 className="mt-1 font-academic-heading text-xl sm:text-2xl font-bold text-slate-900">
                      A Two-Stage Framework for Dialectal Bengali ASR and Standardization using Whisper and BanglaT5
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                      {site.thesis.summary}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Thesis Supervisor
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">{site.thesis.supervisor.name}</p>
                    <p className="text-xs text-slate-600">{site.thesis.supervisor.role}</p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                      <a
                        href={site.thesis.supervisor.facultyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#002147] underline underline-offset-4 hover:text-blue-800"
                      >
                        Faculty Profile ↗
                      </a>
                      <a
                        href={site.thesis.supervisor.scholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#002147] underline underline-offset-4 hover:text-blue-800"
                      >
                        Google Scholar ↗
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Full Report Access
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={site.thesis.report.href}
                        download={site.thesis.report.downloadFileName}
                        className="inline-flex items-center gap-1.5 rounded-md bg-[#002147] px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-[#001733]"
                      >
                        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Thesis PDF
                      </a>
                      <a
                        href={site.thesis.report.googleDriveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-600 underline underline-offset-4 hover:text-[#002147]"
                      >
                        Open on Google Drive ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Thesis Presentation Photo */}
                {"imageSrc" in site.thesis && site.thesis.imageSrc ? (
                  <div className="shrink-0 self-center md:self-start md:w-56 lg:w-64">
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-1 shadow-sm">
                      <Image
                        src={site.thesis.imageSrc}
                        alt="Undergraduate Thesis Presentation at Convocation"
                        width={300}
                        height={400}
                        className="aspect-[3/4] w-full rounded-lg object-cover object-center"
                      />
                    </div>
                    <p className="mt-2 text-center text-[11px] text-slate-400">
                      Convocation Thesis Milestone
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section id="work" className="scroll-mt-8 border-t border-slate-200 py-10">
            <h2 className="font-academic-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Work Experience
            </h2>
            <div className="mt-6 space-y-6">
              {site.work.map((w) => (
                <div
                  key={w.company}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-academic-heading text-xl font-bold text-slate-900">
                      {w.company}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {w.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#002147]">{w.role}</p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">{w.detail}</p>
                  {"imageSrc" in w && w.imageSrc ? (
                    <div className="mt-6 flex justify-center rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <Image
                        src={w.imageSrc}
                        alt={`${w.company} certified partner`}
                        width={360}
                        height={500}
                        className="max-h-[380px] w-auto object-contain"
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          {/* Volunteering Experience Section */}
          <section id="volunteering" className="scroll-mt-8 border-t border-slate-200 py-10">
            <h2 className="font-academic-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Volunteering &amp; Mentorship
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {site.volunteering.map((v) => (
                <div
                  key={v.org}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs"
                >
                  <h3 className="font-academic-heading text-lg font-bold text-slate-900">
                    {v.org}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#002147]/80">
                    {v.role}
                  </p>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    {v.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Licenses & Certifications Section */}
          <section id="certifications" className="scroll-mt-8 border-t border-slate-200 py-10">
            <h2 className="font-academic-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Licenses &amp; Certifications
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Verified professional credentials in Machine Learning, Deep Learning, and NLP.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {site.certifications.map((c, i) => (
                <CertificationCard key={c.id} cert={c} index={i} />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-8 border-t border-slate-200 py-10">
            <h2 className="font-academic-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Contact &amp; Academic References
            </h2>

            {/* Academic References */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Reference / Thesis Supervisor
                </p>
                <h3 className="mt-1 font-academic-heading text-lg font-bold text-slate-900">
                  Mr. Amit Chakraborty
                </h3>
                <p className="text-xs text-slate-600">Assistant Professor</p>
                <p className="text-xs text-slate-500">Department of Computer Science and Engineering, DIU</p>
                <p className="mt-3 text-xs text-slate-700">
                  <strong>Email: </strong>
                  <a href="mailto:amit.cse@diu.edu.bd" className="text-[#002147] underline underline-offset-2">
                    amit.cse@diu.edu.bd
                  </a>
                </p>
                <p className="text-xs text-slate-700">
                  <strong>Phone: </strong>+880 1718 384336
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Reference / Co-author
                </p>
                <h3 className="mt-1 font-academic-heading text-lg font-bold text-slate-900">
                  Md. Abdullah Al Kafi
                </h3>
                <p className="text-xs text-slate-600">Lecturer</p>
                <p className="text-xs text-slate-500">Department of Computer Science and Engineering, DIU</p>
                <p className="mt-3 text-xs text-slate-700">
                  <strong>Email: </strong>
                  <a href="mailto:kafi.cse@diu.edu.bd" className="text-[#002147] underline underline-offset-2">
                    kafi.cse@diu.edu.bd
                  </a>
                </p>
                <p className="text-xs text-slate-700">
                  <strong>Phone: </strong>+880 1776 026693
                </p>
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="mt-8">
              <ContactSection
                links={site.contact.links}
                email={site.contact.email}
                whatsapp={site.contact.whatsapp}
              />
            </div>
          </section>

          {/* Academic Footer */}
          <footer className="mt-12 border-t border-slate-200 pt-8 pb-12 text-center text-xs text-slate-500">
            <p className="font-academic-heading text-base font-semibold text-slate-800">
              {site.name}
            </p>
            <p className="mt-1 text-slate-500">
              Department of Computer Science and Engineering · Daffodil International University
            </p>
            <p className="mt-4 text-slate-400">
              © {new Date().getFullYear()} Showrov Azam · Personal Academic Webpage
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
}
