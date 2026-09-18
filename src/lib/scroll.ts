const SECTION_ALIASES: Record<string, string> = {
  "research-peer-review": "peer-review",
  "research-publications": "publications",
  "experience-volunteer": "volunteering",
  "experience-work": "work",
};

export function scrollToSection(id: string) {
  const targetId = SECTION_ALIASES[id] || id;
  const el = document.getElementById(targetId);
  if (!el) return;
  const navOffset = 88;
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top, behavior: "smooth" });
}
