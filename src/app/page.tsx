"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FreelanceSection } from "@/components/sections/FreelanceSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FloatingDock, DockItem } from "@/components/ui/FloatingDock";
import {
  Home,
  Briefcase,
  Code,
  Network,
  Award,
  Cpu,
  Mail,
} from "lucide-react";

export default function Page() {
  const [entered, setEntered] = useState(false);

  const dockItems: DockItem[] = [
    {
      title: "Home",
      icon: <Home className="h-full w-full" />,
      href: "#home",
    },
    {
      title: "Journey",
      icon: <Briefcase className="h-full w-full" />,
      href: "#journey",
    },
    {
      title: "Projects",
      icon: <Code className="h-full w-full" />,
      href: "#projects",
    },
    {
      title: "Freelance",
      icon: <Network className="h-full w-full" />,
      href: "#freelance",
    },
    {
      title: "Certifications",
      icon: <Award className="h-full w-full" />,
      href: "#certifications",
    },
    {
      title: "Skills",
      icon: <Cpu className="h-full w-full" />,
      href: "#skills",
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full" />,
      href: "#contact",
    },
    {
      title: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-full w-full"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: "https://www.linkedin.com/in/arnab-kumar-ghosh-3318a520b/",
    },
    {
      title: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-full w-full"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      href: "https://github.com/arnab-028",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={() => setEntered(true)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black cursor-pointer select-none"
          >
            {/* Ambient animated backdrop */}
            <div className="absolute inset-0 bg-dot-white/[0.03] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[100px] animate-pulse" />

            <div className="relative flex flex-col items-center max-w-xl px-6 text-center space-y-8">
              {/* Spinning glowing ring */}
              <motion.div
                initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
                animate={{ rotate: 360, scale: 1, opacity: 1 }}
                transition={{
                  scale: { duration: 1.2, ease: "easeOut" },
                  opacity: { duration: 1.2 },
                  rotate: { repeat: Infinity, duration: 25, ease: "linear" }
                }}
                className="w-24 h-24 rounded-full border border-neutral-800 flex items-center justify-center p-2 bg-neutral-950/50"
              >
                <div className="w-full h-full rounded-full border border-blue-500/20 flex items-center justify-center">
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">AKG</span>
                </div>
              </motion.div>

              <div className="space-y-4">
                {/* Text reveal animation */}
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >
                  Welcome to the Portfolio
                </motion.h1>
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="text-2xl sm:text-4xl font-extrabold text-blue-400 tracking-wider uppercase font-sans"
                >
                  of Arnab
                </motion.h2>
              </div>

              {/* Pulsating click visual */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  delay: 1.2,
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex flex-col items-center gap-2 pt-6"
              >
                <span className="text-xs text-neutral-500 tracking-[0.25em] uppercase font-semibold">
                  Tap / Click anywhere to enter
                </span>
                <svg
                  className="w-4 h-4 text-neutral-600 animate-bounce mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 13l-7 7-7-7m14-6l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            {/* Page Sections */}
            <HeroSection />
            <JourneySection />
            <ProjectsSection />
            <FreelanceSection />
            <CertificationsSection />
            <SkillsSection />
            <ContactSection />

            {/* Floating Bottom Navigation Dock */}
            <div className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-full max-w-fit px-4">
              <FloatingDock items={dockItems} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
