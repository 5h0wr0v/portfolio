export function VerifiedBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-[#002147]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#002147] ${className}`}
      title="Verified reviewer status"
    >
      <svg className="size-3.5 text-[#002147]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1.06 13.06l-2.12-2.12 1.41-1.41 1.41 1.41 4.24-4.24 1.41 1.41-5.35 5.35z" />
      </svg>
      Verified
    </span>
  );
}
