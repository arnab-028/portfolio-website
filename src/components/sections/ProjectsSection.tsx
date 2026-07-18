"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import Image from "next/image";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Autonomous Network Troubleshooting Agent",
      description: "An Agentic AI network diagnostics system that ingests device logs/telemetry, uses LangGraph for workflow orchestration (Observe -> Think -> Analyze -> Diagnose -> Recommend), and runs an offline local LLM (TinyLlama via Ollama) to identify network root-causes and recommend remediation steps.",
      header: (
        <div className="relative h-48 w-full rounded-lg overflow-hidden bg-neutral-950 border border-neutral-900 group">
          <div className="absolute inset-0 bg-neutral-950/40 z-10 group-hover:bg-transparent transition duration-300" />
          <Image
            src="/images/troubleshooting_agent.svg"
            alt="Autonomous Network Troubleshooting Agent"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ),
      icon: (
        <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
          ⚙️
        </div>
      ),
      href: "https://github.com/arnab-028/ai-network-agent",
      tags: ["Python", "LangGraph", "Ollama", "Streamlit", "Local LLMs", "AIOps"],
      className: "md:col-span-2",
    },
    {
      title: "SOHO Network Design & Implementation",
      description: "Enterprise-grade SOHO network design utilizing Cisco ASR-9000 series routers, configuring Layer 2/3 switching, OSPF area mapping, VLAN trunking, RSTP convergence, IPSec VPN tunnels, and Zone-Based Firewall policies.",
      header: (
        <div className="relative h-48 w-full rounded-lg overflow-hidden bg-neutral-950 border border-neutral-900 group">
          <div className="absolute inset-0 bg-neutral-950/40 z-10 group-hover:bg-transparent transition duration-300" />
          <Image
            src="/images/soho_network_topo.svg"
            alt="SOHO Network Design"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ),
      icon: (
        <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
          🌐
        </div>
      ),
      href: "https://github.com/arnab-028/soho-network-design",
      tags: ["Cisco ASR-9000", "OSPF", "Packet Tracer", "IPSec", "Zone-Based Firewall"],
      className: "md:col-span-1",
    },
    {
      title: "Python NetConfig Automation Engine",
      description: "An automated inventory scripting tool designed to batch backup configurations, push interface adjustments, validate MTUs, and verify routing tables across multibrand switches using Netmiko, NAPALM, and PyEZ APIs.",
      header: (
        <div className="relative h-48 w-full rounded-lg overflow-hidden bg-neutral-950 border border-neutral-900 group">
          <div className="absolute inset-0 bg-neutral-950/40 z-10 group-hover:bg-transparent transition duration-300" />
          <Image
            src="/images/network_automation.svg"
            alt="Network Configuration Automation"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ),
      icon: (
        <div className="h-8 w-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
          🐍
        </div>
      ),
      href: "https://github.com/arnab-028/netconfig-automation",
      tags: ["Python", "Netmiko", "NAPALM", "YAML", "Configuration Validation"],
      className: "md:col-span-1",
    },
    {
      title: "Realtime Syslog Parser & Visualizer",
      description: "A lightweight dashboard that hooks up to syslog streams, filters link flaps and OSPF adjacency drops, runs an anomaly checking heuristic, and pushes immediate alerting webhooks to Slack/Discord NOC channels.",
      header: (
        <div className="relative h-48 w-full rounded-lg overflow-hidden bg-neutral-950 border border-neutral-900 group">
          <div className="absolute inset-0 bg-neutral-950/40 z-10 group-hover:bg-transparent transition duration-300" />
          <Image
            src="/images/syslog_parser.svg"
            alt="Syslog Parser Visualizer"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ),
      icon: (
        <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
          📊
        </div>
      ),
      href: "https://github.com/arnab-028/syslog-visualizer",
      tags: ["Go", "React", "Syslog", "TailwindCSS", "Webhooks"],
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-950 relative border-b border-neutral-900">
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 relative z-10">
        <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto text-center">
          A showcase of recent implementations bridging automation, networking topologies, and AI-driven troubleshooting agents.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <BentoGrid>
          {projects.map((project, i) => (
            <BentoGridItem
              key={i}
              title={project.title}
              description={project.description}
              header={project.header}
              icon={project.icon}
              href={project.href}
              tags={project.tags}
              className={project.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
