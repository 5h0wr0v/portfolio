"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export type ThesisSupervisor = {
  name: string;
  role: string;
  facultyUrl: string;
  scholarUrl: string;
};

export type TimelineItem = {
  degree: string;
  school: string;
  period: string;
  location?: string;
  grade?: string;
  detail: string;
  imageSrc?: string;
  imageAlt?: string;
  thesis?: string;
  thesisSupervisor?: ThesisSupervisor;
};

type ExperienceTimelineProps = {
  items: readonly TimelineItem[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div
        className="absolute start-3 top-2 bottom-2 w-px bg-[#002147]/20 md:start-4"
        aria-hidden
      />
      <ul className="space-y-12">
        {items.map((item, i) => (
          <motion.li
            key={`${item.school}-${item.period}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative ps-12 md:ps-14"
          >
            <span
              className="absolute start-1.5 top-2 flex size-3.5 items-center justify-center rounded-full border-2 border-[#002147] bg-white md:start-2.5 md:size-4"
              aria-hidden
            />
            <div className={item.imageSrc ? "flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8" : ""}>
              <div className={item.imageSrc ? "min-w-0 flex-1" : ""}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#002147]/55">
                  {item.period}
                </p>
                <h3 className="mt-1 font-academic-heading text-lg font-bold text-[#002147] sm:text-xl">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#002147]/80">
                  {item.school}
                  {item.location ? <span className="text-[#002147]/60"> · {item.location}</span> : null}
                </p>
                {item.grade ? (
                  <p className="mt-2 inline-flex rounded-full border border-[#002147]/18 bg-[#002147]/[0.05] px-3 py-1 text-xs font-bold tracking-wide text-[#002147]">
                    {item.grade}
                  </p>
                ) : null}
                <p className="mt-3 text-sm leading-relaxed text-[#002147]/80">{item.detail}</p>
                {item.thesis ? (
                  <div className="mt-4 rounded-xl border border-[#002147]/10 bg-white/80 px-4 py-3 text-sm leading-relaxed text-[#002147]/85 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#002147]/45">
                      Thesis / capstone
                    </p>
                    <p className="mt-1.5 font-medium text-[#002147]">{item.thesis}</p>
                    {item.thesisSupervisor ? (
                      <div className="mt-4 border-t border-[#002147]/10 pt-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#002147]/45">
                          Thesis supervisor
                        </p>
                        <p className="mt-1 font-semibold text-[#002147]">{item.thesisSupervisor.name}</p>
                        <p className="mt-0.5 text-xs text-[#002147]/70">{item.thesisSupervisor.role}</p>
                        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
                          <a
                            href={item.thesisSupervisor.facultyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-[#002147] underline decoration-[#002147]/30 underline-offset-4 transition-colors hover:text-[#001a38] hover:decoration-[#002147]"
                          >
                            Faculty profile
                            <span aria-hidden> ↗</span>
                          </a>
                          <a
                            href={item.thesisSupervisor.scholarUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-[#002147] underline decoration-[#002147]/30 underline-offset-4 transition-colors hover:text-[#001a38] hover:decoration-[#002147]"
                          >
                            Google Scholar
                            <span aria-hidden> ↗</span>
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>

              {item.imageSrc ? (
                <div className="shrink-0 self-center md:self-start md:w-64 lg:w-72 xl:w-[310px]">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#002147]/15 bg-white p-1.5 shadow-[0_14px_32px_-10px_rgba(0,33,71,0.2)] transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt || `${item.degree} — ${item.school}`}
                      width={620}
                      height={827}
                      className="aspect-[3/4] w-full rounded-xl object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 310px"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
