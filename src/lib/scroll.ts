export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navOffset = 88;
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top, behavior: "smooth" });
}
