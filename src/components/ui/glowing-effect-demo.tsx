"use client";

import React from "react";
import { Box, Lock, Search, Settings, Sparkles, Github, ExternalLink } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Tech icon mapping (from Technologies.tsx)
const techIconMap: Record<string, string> = {
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'Tailwind CSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  Redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Material UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  jQuery: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  Django: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  FastAPI: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  GraphQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  REST: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original-wordmark.svg',
  Supabase: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  Postgres: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  SQLite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  Redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  AWS: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  Azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  Vercel: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
  Netlify: 'https://www.netlify.com/v3/img/components/logomark.png',
  Jenkins: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  Linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  LLM: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  OpenAI: 'https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png',
  Agents: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Timer: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Productivity: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Stats: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  IoT: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'WebSocket': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'D3.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Weather API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Forecast': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Discord.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  'Lavalink': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Music': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Canvas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Leveling': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Embeds': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  'Autoroles': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  'Welcome': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  'Reactions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  'Roles': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  'Permissions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  'Moderation': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  'Automation': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  'Filter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Builder': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Analytics': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Stats': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Slash Commands': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  'Handler': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Webhooks': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
  'Logging': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
};

// Micro projects data - Discord-related utilities
const microProjectsData = [
  {
    title: "Discord Music Bot",
    description: "Advanced <span class='gradient-highlight'>music playback bot</span> with <span class='gradient-highlight'>queue management</span>, <span class='gradient-highlight'>playlist support</span>, and high-quality audio streaming.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    tags: ["Discord.js", "Node.js", "Lavalink", "Music"],
    demoUrl: undefined,
    githubUrl: ""
  },
  {
    title: "Discord Leveling System",
    description: "XP-based <span class='gradient-highlight'>leveling system</span> with <span class='gradient-highlight'>rank cards</span>, <span class='gradient-highlight'>leaderboards</span>, and customizable rewards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Discord.js", "MongoDB", "Canvas", "Leveling"],
    demoUrl: undefined,
    githubUrl: ""
  },
  {
    title: "Discord Welcome Bot",
    description: "Customizable <span class='gradient-highlight'>welcome messages</span> with <span class='gradient-highlight'>embed templates</span>, <span class='gradient-highlight'>auto-roles</span>, and member verification.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Discord.js", "Embeds", "Autoroles", "Welcome"],
    demoUrl: undefined,
    githubUrl: ""
  },
  {
    title: "Discord Reaction Roles",
    description: "Interactive <span class='gradient-highlight'>reaction role system</span> with <span class='gradient-highlight'>role menus</span>, <span class='gradient-highlight'>multi-select</span>, and role persistence.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    tags: ["Discord.js", "Reactions", "Roles", "Permissions"],
    demoUrl: undefined,
    githubUrl: ""
  },
  {
    title: "Discord Auto-Moderation",
    description: "Intelligent <span class='gradient-highlight'>auto-moderation</span> with <span class='gradient-highlight'>spam detection</span>, <span class='gradient-highlight'>filter system</span>, and automated actions.",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=800&q=80",
    tags: ["Discord.js", "Moderation", "Automation", "Filter"],
    demoUrl: undefined,
    githubUrl: ""
  },
  {
    title: "Discord Embed Builder",
    description: "Web-based <span class='gradient-highlight'>embed builder</span> with <span class='gradient-highlight'>live preview</span>, <span class='gradient-highlight'>JSON export</span>, and template library.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Discord.js", "Embeds", "Builder"],
    demoUrl: undefined,
    githubUrl: ""
  },
  {
    title: "Discord Server Stats",
    description: "Real-time <span class='gradient-highlight'>server statistics</span> with <span class='gradient-highlight'>member tracking</span>, <span class='gradient-highlight'>growth charts</span>, and activity metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Discord.js", "Analytics", "MongoDB", "Stats"],
    demoUrl: undefined,
    githubUrl: ""
  },
  {
    title: "Discord Command Handler",
    description: "Modular <span class='gradient-highlight'>command system</span> with <span class='gradient-highlight'>slash commands</span>, <span class='gradient-highlight'>cooldowns</span>, and permission checks.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Discord.js", "Slash Commands", "Node.js", "Handler"],
    demoUrl: undefined,
    githubUrl: ""
  },
  {
    title: "Discord Logging System",
    description: "Comprehensive <span class='gradient-highlight'>logging system</span> with <span class='gradient-highlight'>webhook integration</span>, <span class='gradient-highlight'>event tracking</span>, and audit logs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Discord.js", "Webhooks", "Logging", "MongoDB"],
    demoUrl: undefined,
    githubUrl: ""
  }
];

export default function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {microProjectsData.map((project, idx) => (
        <GridItem key={project.title} project={project} />
      ))}
    </ul>
  );
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface GridItemProps {
  project: Project;
}

const GridItem = ({ project }: GridItemProps) => {
  return (
    <li className="min-h-[16rem] list-none">
      <div className="micro-project-card">
        <div
          className="micro-project-card-inner relative h-full rounded-2xl border-2 border-white/30 hover:border-blue-400 transition-colors duration-300 p-4 overflow-hidden shadow-2xl group card-shadow-effect project-card-hover input-shadow-effect"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
        <GlowingEffect
          spread={20}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/50 pointer-events-none z-0" />
        <div className="relative flex h-full flex-col justify-between gap-2 rounded-lg p-3 z-10">
          <div className="flex flex-row items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-sans text-xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p 
                className="font-sans text-sm text-gray-200 mb-2"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
            {/* Tech stack logos - vertical column, glassmorphism style */}
            <div className="flex flex-col gap-1 items-end justify-start min-w-[2rem]">
              {project.tags.map((tag) => (
                techIconMap[tag] ? (
                  <div
                    key={tag}
                    className="w-7 h-7 flex items-center justify-center rounded bg-black/30 backdrop-blur-md border border-white/10 shadow-md"
                    title={tag}
                  >
                    <img
                      src={techIconMap[tag]}
                      alt={tag}
                      className="w-5 h-5 object-contain"
                      style={{ filter: 'none' }}
                    />
                  </div>
                ) : null
              ))}
            </div>
          </div>
          {/* GitHub and Live buttons */}
          <div className="flex flex-row items-center justify-end gap-2 mt-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-black/70 border border-white/20 hover:bg-gray-900 hover:border-blue-400 transition-colors"
                title="View on GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-black/70 border border-white/20 hover:bg-gray-900 hover:border-blue-400 transition-colors"
                title="View Live"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
        </div>
      </div>
    </li>
  );
}; 