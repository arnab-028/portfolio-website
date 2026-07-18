"use client";
import React from "react";
import { Timeline, TimelineEntry } from "../ui/Timeline";
import Image from "next/image";

export const JourneySection = () => {
  const timelineData: TimelineEntry[] = [
    {
      title: "Reliance Jio",
      content: (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              {/* Reliance Jio Logo Badge */}
              <div className="h-12 w-12 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center p-1.5 shrink-0 shadow-lg">
                <svg viewBox="0 0 40 40" className="h-full w-full">
                  <circle cx="20" cy="20" r="20" fill="#0f3cc9" />
                  <text x="20" y="25" fontFamily="sans-serif" fontWeight="bold" fill="white" fontSize="12" textAnchor="middle">Jio</text>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-neutral-200">
                  Reliance Jio Infocomm Limited
                </h4>
                <p className="text-sm text-neutral-400">
                  Network Engineer (L2 Solution Architect)
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 border border-neutral-800 text-blue-400">
                May 2026 - Present
              </span>
              <p className="text-xs text-neutral-500 mt-1">Mumbai, Maharashtra</p>
            </div>
          </div>
          
          <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-neutral-300">
            <li>
              Provide L2 solution support in TELCO LAN group for large-scale enterprise data center networks built on Cisco ACI and Cisco Nexus (NX-OS) platforms, ensuring high availability.
            </li>
            <li>
              Configure, troubleshoot, and validate Bridge Domains (BDs), Endpoint Groups (EPGs), VRFs, Application Profiles, Contracts, Tenants, and ACI policies for network segmentation.
            </li>
            <li>
              Perform end-to-end provisioning of VLANs, Interface Policy Groups (IPGs), AAEP mappings, VLAN Pools, Domain Associations, and Static Path Bindings.
            </li>
            <li>
              Troubleshoot production issues related to VXLAN EVPN, endpoint learning, interface policies, leaf-spine connectivity, fabric health, and policy enforcement.
            </li>
            <li>
              Develop and maintain Python automation scripts to automate repetitive operational tasks, perform configuration validation, analyze logs, and improve efficiency.
            </li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="relative aspect-video rounded-xl bg-neutral-900 overflow-hidden border border-neutral-800 group">
              <div className="absolute inset-0 bg-neutral-950/60 z-10 group-hover:bg-transparent transition duration-300" />
              <Image
                src="/images/jio_experience.svg"
                alt="Jio Data Center Network"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-video rounded-xl bg-neutral-900 overflow-hidden border border-neutral-800 group">
              <div className="absolute inset-0 bg-neutral-950/60 z-10 group-hover:bg-transparent transition duration-300" />
              <Image
                src="/images/jio_automation.svg"
                alt="Network Automation Scripts"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Cisco Systems",
      content: (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              {/* Cisco Logo Badge */}
              <div className="h-12 w-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center p-1.5 shrink-0 shadow-lg">
                <svg viewBox="0 0 40 40" className="h-full w-full">
                  <path
                    d="M 12,23 L 12,17 M 14,25 L 14,15 M 16,27 L 16,13 M 18,29 L 18,11 M 20,31 L 20,9 M 22,29 L 22,11 M 24,27 L 24,13 M 26,25 L 26,15 M 28,23 L 28,17"
                    stroke="#00b0ed"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-neutral-200">
                  Cisco Systems India Private Limited
                </h4>
                <p className="text-sm text-neutral-400">
                  Technical Consulting Engineer (Apprentice)
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 border border-neutral-800 text-purple-400">
                Nov 2024 - Nov 2025
              </span>
              <p className="text-xs text-neutral-500 mt-1">Bengaluru, Karnataka</p>
            </div>
          </div>

          <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-neutral-300">
            <li>
              Worked within the Cisco TAC SP (Service Provider) team, delivering technical support for large-scale Service Provider networks while meeting strict SLA commitments.
            </li>
            <li>
              Diagnosed and resolved complex issues across Layer 2/Layer 3 technologies, including OSPF, BGP, MPLS, VLAN, STP, and DHCP, improving network stability.
            </li>
            <li>
              Performed packet-level troubleshooting using Wireshark, identifying root causes of routing anomalies, latency issues, and forwarding inconsistencies on Cisco ASR and NCS platforms.
            </li>
            <li>
              Reproduced and isolated defects in simulated Cisco IOS-XR environments, collaborating with engineering teams to validate fixes and provide accurate root cause analysis.
            </li>
            <li>
              Achieved CCNA Global Certification during structured training across core networking domains and hands-on labs on routing, switching, and troubleshooting.
            </li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="relative aspect-video rounded-xl bg-neutral-900 overflow-hidden border border-neutral-800 group">
              <div className="absolute inset-0 bg-neutral-950/60 z-10 group-hover:bg-transparent transition duration-300" />
              <Image
                src="/images/cisco_experience.svg"
                alt="Cisco SP Lab"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-video rounded-xl bg-neutral-900 overflow-hidden border border-neutral-800 group">
              <div className="absolute inset-0 bg-neutral-950/60 z-10 group-hover:bg-transparent transition duration-300" />
              <Image
                src="/images/cisco_triage.svg"
                alt="Packet Capture Analysis"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h4 className="text-xl font-bold text-neutral-200">
                Academy Of Technology
              </h4>
              <p className="text-sm text-neutral-400">
                B.Tech in Computer Science & Engineering
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 border border-neutral-800 text-teal-400">
                Nov 2020 - May 2024
              </span>
              <p className="text-xs text-neutral-500 mt-1">Hooghly, West Bengal</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-neutral-300">
            <div>
              Grade: <span className="font-semibold text-neutral-200">CGPA 8.71</span>
            </div>
            <div className="h-4 w-px bg-neutral-800" />
            <div>
              Activity: <span className="font-semibold text-neutral-200">CSE IEI Chapter Content Lead (2 Years)</span>
            </div>
          </div>

          <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-neutral-300">
            <li>
              Focused on core computer science domains including Data Structures & Algorithms, Computer Networks, Database Management Systems, and Software Engineering.
            </li>
            <li>
              Acted as CSE Content Lead, writing and structuring newsletters, event materials, and organizing coding contests.
            </li>
            <li>
              Solved 400+ coding problems on LeetCode and GeeksforGeeks, reinforcing core algorithms and programming proficiency in Python and C++.
            </li>
          </ul>
          
        </div>
      ),
    },
  ];

  return (
    <section id="journey" className="bg-black border-y border-neutral-950 py-10 relative">
      <div className="absolute inset-0 bg-dot-white/[0.05] pointer-events-none" />
      <Timeline data={timelineData} />
    </section>
  );
};
