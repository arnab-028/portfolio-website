"use client";
import React from "react";
import Image from "next/image";
import { Spotlight } from "../ui/Spotlight";
import { ArrowRight, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen z-10 w-full rounded-md flex items-center justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden pt-20 px-4"
    >
      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 py-10 md:py-20">
        
        {/* Left column: Typography and CTAs */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 border border-neutral-800 text-blue-400">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
            L2 Solution Architect
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Arnab Kumar Ghosh</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-300">
            Network Engineer & AI Developer
          </h2>
          
          <p className="font-normal text-sm md:text-base text-neutral-400 max-w-2xl leading-relaxed">
            I engineer secure, automated, and highly resilient data center and WAN network fabrics at telecom scale. I also design autonomous, LLM-powered troubleshooting agents to minimize MTTR and automate first-level incident diagnostics.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <a
              href="/resume.pdf"
              download="Arnab_Kumar_Ghosh_CV.pdf"
              className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-800 bg-[linear-gradient(110deg,#000,45%,#1e2631,55%,#000)] bg-[length:200%_100%] px-6 font-medium text-neutral-300 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-700 animate-shimmer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
            
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-900 border border-neutral-800 px-6 font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right column: Image container with animated border and company logos */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl group-hover:opacity-30 transition duration-500" />
            
            {/* Animated border container */}
            <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-2xl p-[3px] overflow-hidden bg-neutral-950 shadow-2xl flex items-center justify-center">
              {/* Spinning gradient border inside */}
              <div className="absolute inset-[-1000%] animate-border-spin bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#8b5cf6_50%,#3b82f6_100%)]" />
              
              {/* Inner content (image) */}
              <div className="relative h-full w-full rounded-[13px] bg-neutral-950 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/profile.jpg"
                  alt="Arnab Kumar Ghosh"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
};
