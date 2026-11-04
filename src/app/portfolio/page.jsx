"use client";

import React from "react";
import { motion } from "framer-motion";

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7h6m0 0v6m0-6L10 16m-7 4h4a2 2 0 002-2v-4"
    />
  </svg>
);

const sectionsInOrder = [
  {
    section: "Enterprise AI Platforms",
    description:
      "Production-grade AI systems, workflow automation platforms, and enterprise AI engineering projects.",
    projects: [
      {
        title: "Agentic AI Decision-Support Platform (Sales QBR)",
        subtitle: "Agentic AI Architect • HCL Technologies",
        description:
          "Architected and built an end-to-end multi-agent platform on Gemini and Vertex AI. Synthesis, Analysis and Content agents answer sales managers' questions in plain English, generate executive QBR slides, and email them to leadership on a schedule, with human review before anything is sent.",
        impact:
          "Turned days of manual quarterly reporting into an on-demand, agent-driven workflow.",
        tech: [
          "Gemini",
          "Vertex AI",
          "Multi-Agent Systems",
          "FastAPI",
          "React.js",
          "Cloud Run",
          "Human-in-the-loop",
        ],
        image: "/work/QBR.png",
      },

      {
        title: "BVP Activity Reporting & Portfolio Management Platform",
        subtitle:
          "Freelance Full Stack AI Engineer • Bessemer Venture Partners",
        description:
          "Built an enterprise AI-powered portfolio management and reporting platform for Bessemer Venture Partners (BVP), enabling venture teams to manage portfolio KPIs, financing rounds, activity reporting workflows, and AI-assisted insights through a unified React interface.",
        impact:
          "Portfolio KPIs, financing rounds and partner reporting unified in one platform, with AI-assisted KPI extraction.",
        tech: [
          "React.js",
          "Redux",
          "Node.js",
          "Databricks",
          "Claude AI",
          "PostgreSQL",
          "Okta",
          "MUI Pro",
        ],
        image: "/work/BVP.png",
      },

      {
        title: "AI-Powered Claims Automation Platform",
        subtitle: "Full Stack AI Engineer • HCL Technologies",
        description:
          "Designed and built an AI-powered claims processing system with LangGraph agents for verification, fraud detection and escalation, using React, FastAPI and OpenAI APIs to automate document parsing, workflow orchestration, AI-based decisioning, and email automation.",
        impact:
          "Automated 60% of manual checks and cut claims processing from 4 hours to 45 minutes, with 92% precision in user acceptance testing.",
        tech: [
          "React.js",
          "FastAPI",
          "LangGraph",
          "OpenAI APIs",
          "PostgreSQL",
          "JWT / RBAC",
        ],
        image: "/work/claims-ai.png",
      },

      {
        title: "Intelligent Regulatory Platform (IRP)",
        subtitle: "Frontend React Lead • HCL Technologies",
        description:
          "Led frontend engineering for a large-scale regulatory workflow platform in the Life Sciences & Healthcare domain handling 500K+ document submissions a year, with scalable React architecture, reusable UI systems, and GenAI features on Azure AI Foundry.",
        impact:
          "Reusable enterprise component system adopted across multiple product modules.",
        tech: [
          "React.js",
          "Azure AI Foundry",
          "Redux",
          "MUI",
          "Enterprise Workflows",
          "Reusable Components",
        ],
        image: "/work/IRP.png",
      },
    ],
  },

  {
    section: "Enterprise Product Engineering",
    description:
      "Large-scale enterprise dashboarding, banking systems, and high-performance frontend architectures.",
    projects: [
      {
        title: "Global Banking Platform (Standard Chartered Bank)",
        subtitle: "Technical Lead • HCL Technologies",
        description:
          "Led frontend architecture for a multilingual banking platform deployed across 40+ countries, building scalable enterprise dashboards, reusable component systems, and optimized React workflows.",
        impact:
          "Used by 3,000+ people in 40+ countries. Lighthouse score raised from 61 to 89, page load cut by 35%, and a 12-language component system that cut per-locale effort by 65%.",
        tech: [
          "React.js",
          "Redux",
          "Enterprise Banking",
          "Performance Optimization",
          "Reusable UI",
        ],
        image: "/work/SCB.png",
      },

      {
        title: "Investment Banking Trading Dashboard",
        subtitle: "Software Developer • Deutsche Bank",
        description:
          "Built enterprise trading dashboards handling large-scale financial data visualization and optimized rendering performance for investment banking workflows.",
        impact:
          "Dashboards processing 10,000+ trades a day, with 40% lower render latency and 25% faster trade data loading.",
        tech: [
          "React.js",
          "Redux",
          "Investment Banking",
          "REST APIs",
          "Performance Optimization",
        ],
        image: "/work/DB.png",
      },

      {
        title: "British Telecom Self-Service Portal",
        subtitle: "Software Developer • British Telecom",
        description:
          "Developed customer self-service platforms used by millions of global users with focus on accessibility, performance, responsive UI systems, and API integration.",
        impact:
          "Portal serving 2M+ customers, WCAG 2.1 AA compliant, rated 4.2/5 after launch, with Node.js APIs handling 500K+ monthly sessions under 200 ms.",
        tech: [
          "React.js",
          "Redux",
          "Node.js",
          "Accessibility",
          "Responsive UI",
        ],
        image: "/work/BT.png",
      },

      {
        title: "Engineering Project Management Portal",
        subtitle: "Software Developer • McDermott",
        description:
          "Built enterprise engineering dashboards and workflow systems for global project management operations with focus on scalability and usability.",
        impact:
          "Dashboards used across 15+ countries, with bounce rate cut by 18% on low-bandwidth networks.",
        tech: [
          "React.js",
          "Enterprise Dashboards",
          "Workflow Systems",
          "Responsive Design",
        ],
        image: "/work/Mcdermott.png",
      },
    ],
  },

  {
    section: "Live AI Products & Demos",
    description:
      "Multi-agent AI products I designed and built end to end. Open the live demos to try them.",
    projects: [
      {
        title: "Vantage: AI Board Deck Intelligence (8-Agent Pipeline)",
        subtitle: "Venture Capital • Portfolio Intelligence • Multi-Agent AI",
        description:
          "Partners upload a startup's board deck or investor update as a PDF, and an 8-agent pipeline turns it into a decision-ready review: retrieval over past reports, extraction of 20+ financial fields (revenue, burn, cash, runway, headcount), validation, anomaly detection, six-dimension risk scoring, an approve/flag/escalate recommendation, and an executive summary.",
        impact:
          "Reduced manual board deck analysis effort by 80% and accelerated executive decision-making through AI-generated insights, anomaly detection, and automated scoring.",
        tech: [
          "Multi-Agent AI",
          "OpenAI GPT-4o",
          "FastAPI",
          "React.js",
          "Vector DB",
          "Document AI",
        ],
        image: "/work/Board.png",
        demo: "https://vantage-frontend-sepia.vercel.app",
      },

      {
        title: "AskDesk: Enterprise AI Helpdesk on Google ADK",
        subtitle: "Google ADK • Gemini • Multi-Agent Routing",
        description:
          "A root Router agent hands each request to a Knowledge agent (RAG over the company knowledge base), an Action agent (tickets, VPN resets) or an Escalation agent (sensitive issues to a human). Answers stream to a React UI, and a live Agent Trace panel shows which agent handled each step.",
        impact:
          "Transparent, auditable agent routing, built to swap in Vertex AI Search, Jira via MCP, and Agent Runtime for production.",
        tech: [
          "Google ADK",
          "Gemini",
          "FastAPI",
          "React.js",
          "Cloud Run",
          "Server-Sent Events",
        ],
        image: "/work/AskDesk.png",
        demo: "https://askdesk.vercel.app",
        code: "https://github.com/ankit72630/askdesk",
      },

      {
        title: "AutoCloser: AI Agent for Real-Estate Lead Qualification",
        subtitle: "Real Estate • Conversational AI • Lead Scoring",
        description:
          "An LLM agent chats with buyer enquiries from property portals, asks about budget, location, bedrooms and timeline, and updates a live 0–100 lead score broken down by budget, timeline, intent and engagement. It suggests matching listings, offers inspection slots, and lets a human agent take over at any time.",
        impact:
          "Explainable hot / warm / cool lead scoring, so agents see exactly why a buyer is ready to book.",
        tech: [
          "OpenAI API",
          "LLM Agents",
          "FastAPI",
          "React.js",
          "TanStack Query",
        ],
        image: "/work/AutoCloser.png",
      },

      {
        title: "AI Document Intelligence Platform",
        subtitle: "Life Sciences • Healthcare • Regulatory AI",
        description:
          "Built an AI-powered document intelligence platform for life sciences and healthcare workflows, enabling automated extraction, proofreading, validation, and structured processing of complex scientific and regulatory documents using NLP and intelligent automation.",
        impact:
          "Reduced manual document review effort by 70% and improved regulatory processing accuracy across scientific workflows.",
        tech: ["React.js", "FastAPI", "NLP", "OpenAI", "OCR", "Healthcare AI"],
        image: "/work/Proofreading.png",
      },
    ],
  },
];

// Show live products first, then enterprise work
const portfolioSections = [
  sectionsInOrder[2],
  sectionsInOrder[0],
  sectionsInOrder[1],
];

const PortfolioPage = () => {
  return (
    <motion.div
      className="min-h-screen w-full overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-full">
        <div className="p-6 sm:p-10 md:p-12 lg:p-20 max-w-7xl mx-auto flex flex-col gap-28 pb-48">
          {/* HERO */}
          <div className="text-center flex flex-col gap-6">
            <span className="uppercase tracking-[0.3rem] text-sm text-gray-500">
              AI Architect • Agentic AI • Full Stack
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              AI Products & Enterprise Case Studies
            </h1>

            <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-8">
              Live multi-agent AI products you can try, plus enterprise AI
              platforms and large-scale systems I&apos;ve delivered across
              Banking, Venture Capital, Insurance, Telecom, Engineering, and
              Healthcare.
            </p>
          </div>

          {/* PORTFOLIO SECTIONS */}
          {portfolioSections.map((section, sectionIndex) => (
            <section key={section.section} className="flex flex-col gap-12">
              {/* SECTION HEADER */}
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">{section.section}</h2>

                <p className="text-lg text-gray-600 max-w-3xl">
                  {section.description}
                </p>
              </div>

              {/* PROJECT GRID */}
              <div className="grid gap-10 md:grid-cols-2">
                {section.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {/* IMAGE */}
                    <div className="relative w-full h-72 bg-gradient-to-br from-[#f7f7f7] to-white overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-8 text-center">
                          <span className="text-white text-2xl font-bold">
                            {project.title.split(":")[0]}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 flex flex-col gap-5">
                      {/* TITLE */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-sm font-medium text-gray-500">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-gray-700 leading-8">
                        {project.description}
                      </p>

                      {/* IMPACT */}
                      <div className="bg-black text-white rounded-2xl p-5">
                        <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">
                          Business Impact
                        </p>

                        <p className="leading-7">{project.impact}</p>
                      </div>

                      {/* TECH STACK */}
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-black text-white text-xs rounded-xl"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* LINKS (shown only when a real link exists) */}
                      {(project.demo || project.code) && (
                        <div className="pt-3 flex flex-wrap gap-5">
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-semibold underline"
                            >
                              Live Demo
                              <ExternalLinkIcon />
                            </a>
                          )}
                          {project.code && (
                            <a
                              href={project.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-semibold underline"
                            >
                              Source Code
                              <ExternalLinkIcon />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}

          {/* CTA SECTION */}
          <section className="text-center mt-12 bg-black text-white rounded-[40px] p-14 flex flex-col gap-6">
            <h3 className="text-4xl font-bold">
              Let’s Build Something Intelligent Together
            </h3>

            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-8">
              Open to freelance, contract and consulting work on AI agents,
              multi-agent systems, RAG, conversational BI, and full-stack AI
              products.
            </p>

            <div className="flex flex-wrap gap-5 justify-center pt-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-[1.03] transition-all"
              >
                Contact Me
              </a>

              <a
                href="/Ankit_Kumar_AIArchitect_Resume.pdf"
                target="_blank"
                className="px-8 py-4 border border-white rounded-2xl font-semibold hover:bg-white hover:text-black transition-all"
              >
                Download Resume
              </a>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
