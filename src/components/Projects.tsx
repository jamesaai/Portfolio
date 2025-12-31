import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Projects data – Discord Bots & Roblox Management
const projectsData: Project[] = [
  {
    id: 1,
    title: "All-In-One Discord Management Bot",
    description:
      "A powerful <span class='gradient-highlight'>multi-purpose Discord bot</span> built for <span class='gradient-highlight'>moderation</span>, <span class='gradient-highlight'>tickets</span>, <span class='gradient-highlight'>autoroles</span>, logging, music, join-to-create VCs, and server automation.",
    caseStudy: {
      problem:
        "Servers relied on multiple bots that conflicted with each other and were difficult to manage at scale.",
      solution:
        "Developed a single modular Discord bot using slash commands, MongoDB persistence, and role-based permissions.",
      result:
        "Reduced moderation overhead, improved response times, and simplified server management across multiple communities."
    },
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Discord.js",
      "Node.js",
      "MongoDB",
      "Slash Commands",
      "Moderation",
      "Automation"
    ],
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: 2,
    title: "Roblox Staff & Game Management System",
    description:
      "Custom <span class='gradient-highlight'>Roblox management infrastructure</span> for handling <span class='gradient-highlight'>staff ranks</span>, permissions, moderation actions, and in-game automation.",
    caseStudy: {
      problem:
        "Manual staff management and in-game moderation caused delays and inconsistency.",
      solution:
        "Created a centralized Roblox management system synced with Discord for real-time permissions and logging.",
      result:
        "Improved staff efficiency, reduced abuse cases, and enabled scalable role control."
    },
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Roblox",
      "Lua",
      "Discord Integration",
      "Automation",
      "Game Management"
    ],
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: 3,
    title: "Discord Ticket & Support System",
    description:
      "Advanced <span class='gradient-highlight'>ticket system</span> with auto-setup, embedded messages, role-restricted access, and full logging for support teams.",
    caseStudy: {
      problem:
        "Support requests were lost in chat channels with no tracking or ownership.",
      solution:
        "Built a slash-command driven ticket system with auto-generated embeds and persistent ticket logs.",
      result:
        "Improved response organization and reduced unresolved tickets."
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Discord.js",
      "MongoDB",
      "Embeds",
      "Permissions",
      "Support Automation"
    ],
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: 4,
    title: "Custom Discord Web Dashboard",
    description:
      "A full <span class='gradient-highlight'>web dashboard</span> to manage Discord bot features including tickets, moderation, autoroles, giveaways, and scheduled messages.",
    caseStudy: {
      problem:
        "Server owners needed an easier way to control bot features without commands.",
      solution:
        "Built a React + Next.js dashboard with Discord OAuth and real-time configuration syncing.",
      result:
        "Enabled non-technical admins to manage bots visually and safely."
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "React",
      "Next.js",
      "Discord OAuth",
      "Vercel",
      "Dashboard"
    ],
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: 5,
    title: "Giveaways, QOTD & Automation Suite",
    description:
      "Automation tools including <span class='gradient-highlight'>giveaways with rerolls</span>, <span class='gradient-highlight'>question-of-the-day</span> posting, scheduled announcements, and engagement utilities.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Discord.js",
      "Scheduling",
      "Automation",
      "Community Engagement"
    ],
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: 6,
    title: "Server Analytics & Statistics Bot",
    description:
      "Real-time <span class='gradient-highlight'>server statistics</span> showing member counts, bot counts, activity tracking, and growth insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Discord.js",
      "Analytics",
      "MongoDB",
      "Data Tracking"
    ],
    demoUrl: "",
    githubUrl: "",
    status: "Active Development",
    statusGlow: "in-progress"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-4">Projects</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl">
          A collection of Discord bots and Roblox management systems designed to automate moderation, manage staff, and support large communities.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects */}
      <div className="mt-24">
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="section-title mb-4">Micro Projects & Utilities</h3>
          <p className="text-lg text-gray-400 max-w-2xl">
            Smaller utilities and tools built to solve specific community management challenges.
          </p>
        </div>
        <GlowingEffectDemo />
      </div>
    </section>
  );
};

export default Projects;
