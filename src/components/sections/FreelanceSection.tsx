"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle2, CreditCard, Users, FileText, Phone, Globe } from "lucide-react";

export const FreelanceSection = () => {
  const freelanceProjects = [
    {
      title: "Payment Automation Portal",
      client: "Serene Smile Studio",
      location: "Chandannagar, West Bengal",
      phone: "6289721324",
      description: "Designed and implemented a secure web payment automation portal combining a Next.js interface with a robust Python backend. Integrated automated transaction verification, patient billing schedules, and direct reconciliation hooks.",
      highlights: [
        "Built a Next.js client interface with real-time bill calculations",
        "Integrated Python automation scripts for transaction reporting and verification",
        "Reduced manual client transaction audits and accelerated checkout cycles"
      ],
      icon: <CreditCard className="h-6 w-6 text-blue-400" />,
      image: "/images/freelance_payment.svg",
    },
    {
      title: "CRM Software",
      client: "A Pal & Company",
      location: "Chandannagar, West Bengal",
      phone: "9804984698",
      description: "Developed a comprehensive CRM suite for client operations management. The platform uses Next.js for high-speed dashboard telemetry and a Python-powered database logic handler to automate customer tracking, quotes, and work assignments.",
      highlights: [
        "Created dynamic customer profiling, interaction histories, and service pipelines",
        "Built Python analytics module generating weekly client acquisition graphs",
        "Secured role-based administration permissions for sales and operations personnel"
      ],
      icon: <Users className="h-6 w-6 text-purple-400" />,
      image: "/images/freelance_crm.svg",
    },
    {
      title: "Bill Generated Software",
      client: "The Next Gen Store",
      location: "Chandannagar, West Bengal",
      phone: "7003510551",
      description: "Engineered an automated billing software system for product retail. The solution provides a responsive Next.js point-of-sale checkout layout synchronized with Python backend inventory controllers that generate customized PDF invoices instantly.",
      highlights: [
        "Implemented dynamic barcode input scanners and stock availability checks",
        "Wrote a Python service for PDF generation, compression, and automated email dispatches",
        "Processed thousands of checkout bills with minimal latency"
      ],
      icon: <FileText className="h-6 w-6 text-teal-400" />,
      image: "/images/freelance_billing.svg",
    },
  ];

  return (
    <section id="freelance" className="py-20 bg-black relative border-b border-neutral-900">
      <div className="absolute inset-0 bg-dot-white/[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 border border-neutral-800 text-teal-400 mb-4">
          Independent Consulting
        </div>
        <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-4">
          Freelance Portfolio
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-lg">
          Helping enterprises optimize latency, automate configurations, and migrate legacy networking fabrics to cloud-ready designs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {freelanceProjects.map((project, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl bg-neutral-950/40 border border-neutral-900 p-6 flex flex-col justify-between hover:border-neutral-800 transition duration-300 backdrop-blur-sm overflow-hidden"
          >
            {/* Hover subtle glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl" />
            
            <div className="relative space-y-6">
              {/* Header Image */}
              <div className="relative aspect-video w-full rounded-xl bg-neutral-950 border border-neutral-900 overflow-hidden group-hover:border-neutral-800 transition duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title & Icon */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-200 group-hover:text-white transition duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 font-semibold">
                    {project.client}
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-1 flex flex-wrap items-center gap-1.5">
                    <span>{project.location}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-0.5 text-neutral-400">
                      <Phone className="h-3 w-3 inline" /> {project.phone}
                    </span>
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                  {project.icon}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Key Achievements:
                </p>
                <ul className="space-y-1.5">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-neutral-400">
                      <CheckCircle2 className="h-4.5 w-4.5 text-teal-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-900 relative">
              <span className="text-xs text-neutral-500 font-semibold group-hover:text-neutral-300 transition duration-200">
                Completed &bull; Production Active
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Separate Company Contract Experience */}
      <div className="max-w-7xl mx-auto px-4 mt-12 relative z-10">
        <div className="group relative rounded-2xl bg-neutral-950/40 border border-neutral-900 p-6 md:p-8 hover:border-neutral-800 transition duration-300 backdrop-blur-sm overflow-hidden flex flex-col lg:flex-row items-center gap-8">
          {/* Hover subtle glow */}
          <div className="absolute -inset-px bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl" />

          {/* Graphic mockup */}
          <div className="relative aspect-video w-full lg:w-80 rounded-xl bg-neutral-950 border border-neutral-900 overflow-hidden shrink-0 group-hover:border-neutral-800 transition duration-300">
            <Image
              src="/images/freelance_iveora.png"
              alt="enmmey.com"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Description & metadata */}
          <div className="flex-1 space-y-4 w-full">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-900 border border-neutral-800 text-pink-400 mb-2">
                  Company Experience
                </span>
                <h3 className="text-2xl font-bold text-neutral-200 group-hover:text-white transition duration-200">
                  enmmey.com (Influencer Management App)
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Company: <span className="text-neutral-300 font-semibold">Iveora (iveora.com)</span>
                </p>
                <p className="text-[11px] text-neutral-500 mt-1 flex flex-wrap items-center gap-1.5">
                  <span>March 2026 - May 2026</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1 text-pink-400">
                    <Globe className="h-3.5 w-3.5" />
                    <a href="https://enmmey.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">
                      enmmey.com
                    </a>
                  </span>
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                <Globe className="h-6 w-6 text-pink-400" />
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Handled backend services and engineered the database architecture using PostgreSQL. Authored optimized Stored Procedures (SPs) to manage influencer relations, campaign allocations, and payout distributions.
            </p>

            <div className="space-y-2 pt-2">
              <p className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                Key Achievements:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-neutral-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-pink-500 shrink-0 mt-0.5" />
                  <span>Designed complete PostgreSQL database schema and relations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-pink-500 shrink-0 mt-0.5" />
                  <span>Wrote complex, optimized Stored Procedures (SPs) for transaction validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-pink-500 shrink-0 mt-0.5" />
                  <span>Integrated backend services supporting influencer management pipelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
