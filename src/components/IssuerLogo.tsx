export type IssuerBrand = "ibm" | "google" | "michigan" | "deeplearning";

type IssuerLogoProps = {
  brand: IssuerBrand;
  className?: string;
};

export function IssuerLogo({ brand, className = "" }: IssuerLogoProps) {
  const base = `flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#002147]/10 bg-white shadow-sm ${className}`;

  if (brand === "google") {
    return (
      <div className={base} aria-hidden>
        <svg className="size-7" viewBox="0 0 48 48" fill="none">
          <path
            fill="#FFC107"
            d="M43.6 20.5H42V20H24v8h11.3C33.7 32.5 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.9 6.1 29.7 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-4z"
          />
          <path
            fill="#FF3D00"
            d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.9 6.1 29.7 4 24 4 16.3 4 9.7 8.1 6.3 14.7z"
          />
          <path
            fill="#4CAF50"
            d="M24 44c5.4 0 10.3-2.1 14-5.5l-6.5-5.5C29.3 35.5 26.8 36 24 36c-5.3 0-9.7-3.5-11.3-8.3l-6.6 5.1C9.7 39.9 16.3 44 24 44z"
          />
          <path
            fill="#1976D2"
            d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l.1.1 6.5 5.5c.5-.4 1-0.9 1.4-1.4 4-4 6.4-9.5 6.4-15.7 0-1.3-.1-2.7-.4-4z"
          />
        </svg>
      </div>
    );
  }

  if (brand === "michigan") {
    return (
      <div
        className={`${base} bg-[#00274C] text-lg font-black leading-none text-[#FFCB05]`}
        role="img"
        aria-label="University of Michigan"
      >
        M
      </div>
    );
  }

  if (brand === "deeplearning") {
    return (
      <div
        className={`${base} bg-gradient-to-br from-[#f37626] to-[#d45a12] text-xs font-black leading-tight tracking-tight text-white`}
        role="img"
        aria-label="DeepLearning.AI"
      >
        DL
      </div>
    );
  }

  /* IBM — avoid `bg-white` from `base` winning over blue in Tailwind merge order */
  return (
    <div
      className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#002147]/10 bg-[#0f62fe] px-1.5 shadow-sm"
      aria-hidden
    >
      <svg className="h-6 w-[2.75rem]" viewBox="0 0 94 40" fill="none">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect key={i} x={i * 12} y="0" width="10" height="40" rx="1" fill="#ffffff" />
        ))}
      </svg>
    </div>
  );
}
