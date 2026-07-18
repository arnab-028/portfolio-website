import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arnab Kumar Ghosh | L2 Network Solution Architect & AI Developer",
  description: "Enterprise networking portfolio of Arnab Kumar Ghosh. Designing resilient telco-scale LAN/WAN architectures and deploying LLM-based autonomous troubleshooting agents to reduce MTTR.",
  keywords: [
    "Arnab Kumar Ghosh",
    "Network Engineer",
    "Solution Architect",
    "Cisco ACI",
    "Cisco Nexus",
    "Network Automation",
    "Python",
    "LangGraph",
    "AIOps",
    "CCNA",
    "SD-WAN",
    "L2 Solution Architect",
  ],
  authors: [{ name: "Arnab Kumar Ghosh" }],
  openGraph: {
    title: "Arnab Kumar Ghosh | L2 Network Solution Architect & AI Developer",
    description: "Enterprise networking portfolio. Designing resilient telco-scale LAN/WAN architectures and deploying LLM-based autonomous troubleshooting agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
