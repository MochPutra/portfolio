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
  title: "Moch Putra's Portfolio",
  description:
    "Portofolio Putra, mahasiswa Teknik Informatika yang berfokus pada data analytics, AI automation, dan LLM. Temukan proyek, pengalaman, dan sertifikasi saya di bidang data dan AI.",
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
    title: "Moch Putra's Portfolio",
    description:
      "Portofolio Putra, mahasiswa Teknik Informatika yang berfokus pada data analytics, AI automation, dan LLM. Temukan proyek, pengalaman, dan sertifikasi saya di bidang data dan AI.",
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
            <div className="relative w-full overflow-x-hidden" />
            <div className="gradient-orbit" />
            <div className="grid-pattern" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

