import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} — AI Product Builder`;
const description =
  "Portfolio of Devansh Tripathi, an AI product builder and aspiring AI product manager creating practical, AI-powered products such as HelpPilot AI, GoYa AI and the AI Video Creator Kit.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Devansh Tripathi",
    "AI Product Builder",
    "AI Product Manager",
    "AI portfolio",
    "HelpPilot AI",
    "GoYa AI",
    "Prompt Engineering",
    "SaaS Development",
    "AI-assisted Coding",
  ],
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: `${site.name} Portfolio`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#04060f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-void font-sans text-slate-300">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-void"
        >
          Skip to content
        </a>

        {/* Ambient background: aurora blobs + technical grid */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="aurora left-[-10%] top-[-12%] h-[32rem] w-[32rem] animate-drift bg-brand-purple/35" />
          <div className="aurora right-[-12%] top-[6%] h-[30rem] w-[30rem] animate-drift bg-brand-blue/30 [animation-delay:3s]" />
          <div className="aurora bottom-[-18%] left-[35%] h-[26rem] w-[26rem] animate-drift bg-brand-cyan/20 [animation-delay:6s]" />
          <div className="grid-overlay absolute inset-0" />
        </div>

        {children}
      </body>
    </html>
  );
}
