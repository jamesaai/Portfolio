import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio with Admin Dashboard",
    description: "Full-stack portfolio with <span class='gradient-highlight'>integrated admin dashboard</span> for <span class='gradient-highlight'>seamless content management</span>. Features <span class='gradient-highlight'>Next-Auth authentication</span> and <span class='gradient-highlight'>real-time updates</span>.",
    image: "/lovable-uploads/Portfolio.png",
    tags: ["React", "Next.js", "Tailwind CSS", "JS", "Node.js", "Express.js", "Next-Auth", "Context API", "Mongo"],
    demoUrl: "https://kalpsenghani1.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/portfolio-admin-dashboard"
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "Comprehensive <span class='gradient-highlight'>Angular & GraphQL</span> solution with <span class='gradient-highlight'>complete CRUD operations</span>, <span class='gradient-highlight'>secure file uploads</span>, and <span class='gradient-highlight'>robust authentication</span>.",
    image: "/lovable-uploads/Ems.png",
    tags: ["Angular", "Node.js", "GraphQL", "Authentication", "Apollo Client","Express.js"],
    demoUrl: "https://emp-hub.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/Employee-Management-System"
  },
  {
    id: 3,
    title: "SpaceX Launch Tracker",
    description: "Real-time <span class='gradient-highlight'>SpaceX API integration</span> with <span class='gradient-highlight'>advanced filtering</span>, <span class='gradient-highlight'>search capabilities</span>, and <span class='gradient-highlight'>mission tracking</span>.",
    image: "/lovable-uploads/Space-X.png",
    tags: ["Angular", "SpaceX API", "TypeScript", "Tailwind"],
    demoUrl: "https://spacexlabtest2.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/SpaceX_API"
  },
  {
    id: 4,
    title: "Crypto Analytics Dashboard",
    description: "Full-stack <span class='gradient-highlight'>real-time crypto tracking</span> with <span class='gradient-highlight'>portfolio management</span>, <span class='gradient-highlight'>price alerts</span>, and <span class='gradient-highlight'>interactive charts</span>.",
    image: "/lovable-uploads/crypto.png",
    tags: ["React.js", "Tailwind CSS", "Recharts", "Axios", "SWR", "Zustand", "FastAPI", "MongoDB", "Python"],
    demoUrl: "https://crypto-analytics-frontend.onrender.com/",
    githubUrl: "https://github.com/kalpsenghani/crypto-analytics-dashboard"
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "Enterprise <span class='gradient-highlight'>microservices architecture</span> with <span class='gradient-highlight'>Docker containerization</span>, <span class='gradient-highlight'>Kafka event streaming</span>, and <span class='gradient-highlight'>secure payment processing</span>.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Java", "Spring Boot", "Docker", "Kafka", "Swagger", "Microservices"],
    demoUrl: "https://example.com/ecommerce-demo",
    githubUrl: "https://github.com/example/ecommerce-platform"
  },
  {
    id: 6,
    title: "YouTube Short VS Long Analyzer",
    description: "Advanced <span class='gradient-highlight'>analytics platform</span> comparing <span class='gradient-highlight'>YouTube performance metrics</span> with <span class='gradient-highlight'>interactive visualizations</span> and <span class='gradient-highlight'>actionable insights</span>.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "React Query", "React Router", "Framer Motion", "Recharts"],
    demoUrl: "https://yt-analyzer-kappa.vercel.app/",
    githubUrl: "https://github.com/kalpsenghani/YT_Analyzer",
    status: "In Progress",
    statusColor: "",
    statusGlow: "in-progress"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects Section */}
      <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects</h3>
        <GlowingEffectDemo />
      </div>
    </section>
  );
};

export default Projects;
