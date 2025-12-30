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
    image: "/lovable-uploads/discord-bot.png",
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
    image: "/lovable-uploads/roblox-management.png",
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
    image: "/lovable-uploads/tickets.png",
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
    image: "/lovable-uploads/dashboard.png",
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
    image: "/lovable-uploads/automation.png",
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
    image: "/lovable-uploads/stats.png",
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
      <h2 className="section-title mb-8">Projects</h2>

      {/* Section Description */}
      <motion.div
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          A collection of <span className="gradient-highlight">Discord bots</span> and{" "}
          <span className="gradient-highlight">Roblox management systems</span> designed to
          automate moderation, manage staff, support large communities, and power
          real-world game ecosystems. These projects focus on{" "}
          <strong>scalability</strong>, <strong>reliability</strong>, and{" "}
          <strong>clean system design</strong>.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects */}
      <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects & Utilities</h3>
        <GlowingEffectDemo />
      </div>
    </section>
  );
};

export default Projects;
