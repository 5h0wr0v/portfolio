import type { Metadata } from "next";
import { DM_Sans, Roboto_Slab } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Showrov Azam — NLP Research",
  description:
    "NLP researcher and ACM TALLIP peer reviewer. Bridging machine intelligence with regional Bangla dialects. PhD/Master's (Fall 2027).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${robotoSlab.variable} h-full scroll-smooth antialiased`}>
      <body className={`${dmSans.className} min-h-full bg-white text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
