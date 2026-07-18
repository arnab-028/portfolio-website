"use client";
import React, { useState } from "react";
import { Cpu, Server, Network, Terminal, Shield, Database, Cloud } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Center Networking",
      icon: <Server className="h-5 w-5 text-blue-400" />,
      skills: [
        "Cisco ACI",
        "Cisco NX-OS",
        "VXLAN EVPN",
        "Cisco APIC",
        "Bridge Domains (BD)",
        "Endpoint Groups (EPG)",
        "VRFs",
        "Tenants",
        "Application Profiles",
        "Contracts",
        "AAEP",
        "Interface Policy Groups (IPG)",
        "VLAN Pools",
        "Static Path Binding",
      ],
    },
    {
      title: "Networking Protocols & WAN",
      icon: <Network className="h-5 w-5 text-purple-400" />,
      skills: [
        "TCP/IP",
        "OSPF",
        "BGP",
        "MPLS",
        "VLAN & Trunking",
        "STP / RSTP",
        "EtherChannel",
        "Cisco SD-WAN",
        "DHCP & DNS",
        "VPNs",
        "DMVPN",
        "Subnetting",
      ],
    },
    {
      title: "Network Automation & AIOps",
      icon: <Cpu className="h-5 w-5 text-teal-400" />,
      skills: [
        "Python Scripting",
        "LangGraph Agent Workflows",
        "Local LLM Orchestration",
        "RAG Systems",
        "Netmiko & NAPALM APIs",
        "Configuration Validation",
        "Log Analysis & Parse",
        "REST API Integration",
      ],
    },
    {
      title: "Monitoring, Tools & OS",
      icon: <Terminal className="h-5 w-5 text-orange-400" />,
      skills: [
        "Cisco APIC CLI",
        "Cisco NX-OS CLI",
        "Wireshark packet capture",
        "Cisco Packet Tracer",
        "Git & Version Control",
        "Linux CLI administration",
        "Docker basics",
      ],
    },
    {
      title: "Programming & Security",
      icon: <Shield className="h-5 w-5 text-red-400" />,
      skills: [
        "Python",
        "Data Structures & Algorithms",
        "Access Control Lists (ACLs)",
        "Zone-Based Firewalls",
      ],
    },
    {
      title: "AI Tools",
      icon: <Cpu className="h-5 w-5 text-indigo-400" />,
      skills: [
        "Antigravity",
        "Codex",
        "Claude Code",
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5 text-cyan-400" />,
      skills: [
        "PostgreSQL Basics",
        "MongoDB",
      ],
    },
    {
      title: "Cloud",
      icon: <Cloud className="h-5 w-5 text-sky-400" />,
      skills: [
        "AWS Basics",
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 bg-black relative border-b border-neutral-900">
      <div className="absolute inset-0 bg-dot-white/[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-950 border border-neutral-900 text-blue-400 mb-4">
          Tech Stack & Capabilities
        </div>
        <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-4">
          Technical Skills
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-lg">
          A breakdown of protocols, automation frameworks, architectures, and tools compiled from enterprise data center and SP roles.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveCategory(idx)}
            onMouseLeave={() => setActiveCategory(null)}
            className={`group rounded-2xl bg-neutral-950/40 border p-6 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between ${
              activeCategory === idx
                ? "border-neutral-700 shadow-2xl scale-[1.01]"
                : "border-neutral-900"
            }`}
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-200 group-hover:text-white transition duration-200">
                  {category.title}
                </h3>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 ${
                      activeCategory === idx
                        ? "bg-neutral-900 border-neutral-750 text-neutral-200"
                        : "bg-neutral-950 border-neutral-900 text-neutral-400"
                    } hover:border-neutral-600 hover:text-white cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-900/60 flex items-center justify-between text-[11px] text-neutral-500 font-semibold uppercase tracking-wider">
              <span>{category.skills.length} Capabilities</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-400">
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
