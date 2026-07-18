"use client";
import React from "react";
import Image from "next/image";
import { Award, Calendar, CheckCircle, ExternalLink } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "CCNA (200-301) - Cisco Certified Network Associate",
      issuer: "Cisco Systems",
      date: "March 2025",
      id: "CSCO14869900",
      description: "Validated fundamental competencies in network access, IP connectivity, IP services, security fundamentals, and programmatic automation principles on Cisco platforms.",
      badge: "/images/cert_ccna.svg",
      skills: ["Routing Protocols (OSPF)", "VLANS & Trunking", "IP Subnetting", "Access Control Lists", "Network Automation Basics"],
      link: "https://www.credly.com/badges/4c5902a4-6344-44ae-a971-0146ed8cbb27/linked_in_profile",
    },
    {
      title: "Cisco Gen AI Blue Belt",
      issuer: "Cisco Systems",
      date: "Sept 2025",
      id: "Cisco-GenAI-Blue",
      description: "Advanced specialization validating competencies in agentic design patterns, orchestrating multi-agent LLM systems with LangGraph, and integrating local model triages into incident pipelines.",
      badge: "/images/cert_cisco_blue.svg",
      skills: ["Agentic AI Workflows", "LangGraph Orchestration", "Local LLM Integration", "L3 Network Triaging"],
      link: "https://www.credly.com/badges/9e973597-de62-4f48-a2e5-909dce7b41b8/linked_in_profile",
    },
    {
      title: "Cisco Gen AI Green Belt",
      issuer: "Cisco Systems",
      date: "Aug 2025",
      id: "Cisco-GenAI-Green",
      description: "Intermediate specialization validating prompt engineering, Context Injection through RAG (Retrieval-Augmented Generation), and parsing network logs using vector stores.",
      badge: "/images/cert_cisco_green.svg",
      skills: ["Prompt Engineering", "RAG Systems", "Vector DB Integration", "Network Log Parsing"],
      link: "https://www.credly.com/badges/bbf945f7-32bf-4c14-a287-0b3c16615be0/linked_in_profile",
    },
    {
      title: "Cisco Gen AI White Belt",
      issuer: "Cisco Systems",
      date: "Aug 2025",
      id: "Cisco-GenAI-White",
      description: "Foundational track validating core generative AI concepts, LLM mechanics, API queries, and using code-generation tools to assist network scripting workloads.",
      badge: "/images/cert_cisco_white.svg",
      skills: ["GenAI Foundations", "LLM APIs", "Python Scripting Assistance", "AI Productivity Tools"],
      link: "https://www.credly.com/badges/804739ab-9abf-4b4e-97a7-a0b4e13151ff/linked_in_profile",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-neutral-950 relative border-b border-neutral-900">
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 border border-neutral-800 text-purple-400 mb-4">
          Accreditation & Badges
        </div>
        <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-4">
          Certifications
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto">
          Professional accreditations and internal technical specializations verifying routing, switching, and AI capabilities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl p-6 flex flex-col justify-between transition duration-300 backdrop-blur-sm overflow-hidden border bg-neutral-950/40 border-neutral-900 hover:border-neutral-800"
          >
            {/* Glowing effect */}
            <div className="absolute -inset-px bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl" />

            <div className="relative space-y-6">
              {/* Badge Icon / Image placeholder */}
              <div className="relative h-24 w-24 mx-auto rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-neutral-700 transition duration-300">
                <Image
                  src={cert.badge}
                  alt={cert.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              {/* Title & Issuer */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-neutral-200 group-hover:text-white transition duration-200 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-neutral-500 mt-1 flex items-center justify-center gap-1">
                  <Award className="h-3 w-3 text-neutral-600" />
                  {cert.issuer}
                </p>
              </div>

              {/* Date & ID info */}
              <div className="flex justify-between items-center bg-neutral-900/50 rounded-lg p-2.5 border border-neutral-900/80 text-[11px] text-neutral-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-neutral-500" />
                  {cert.date}
                </span>
                <span>ID: {cert.id}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-400 leading-relaxed text-center">
                {cert.description}
              </p>

              {/* Skills covered */}
              <div className="space-y-2 pt-2">
                <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider text-center">
                  Verified Capabilities:
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-neutral-900/80 border border-neutral-900 text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom button / action */}
            <div className="pt-6 mt-6 border-t border-neutral-900 text-center relative">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition duration-200"
              >
                Verify Credentials
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
