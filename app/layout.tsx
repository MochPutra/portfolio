import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turning Data Into Intelligent Solutions | Portfolio",
  description:
    "Portfolio of a Computer Science student and aspiring Data Analyst focused on AI automation, LLMs, and data-driven solutions.",
  keywords: [
    "Data Analyst",
    "AI Automation",
    "LLM",
    "Portfolio",
    "Computer Science Student",
    "Data Science",
    "Next.js",
  ],
  openGraph: {
    title: "Turning Data Into Intelligent Solutions",
    description:
      "Modern portfolio for a data and AI-focused Computer Science student.",
    url: "https://example.com",
    siteName: "AI/Data Portfolio",
    type: "website",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-soft dark:bg-none dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-hidden">
        <ThemeProvider>
          <div>
            <div className="overflow-x-hidden" />
            <div className="gradient-orbit" />
            <div className="grid-pattern" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

