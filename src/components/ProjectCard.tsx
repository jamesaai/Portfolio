import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: string;
  statusColor?: string;
  statusGlow?: string;
  caseStudy?: {
    problem?: string;
    solution?: string;
    result?: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoading, setImageLoading] = React.useState(true);
  
  // Fallback placeholder image (gradient background)
  const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234F46E5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%237C3AED;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3E" + encodeURIComponent(project.title) + "%3C/text%3E%3C/svg%3E";
  
  // small icon map for common tech tags (grayscale/minimized)
  const techIconMap: Record<string, string> = {
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    Stripe: 'https://seeklogo.com/images/S/stripe-logo-4C3A1E4C67-seeklogo.com.png'
  };
  
  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };
  
  const handleImageLoad = () => {
    setImageLoading(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full group relative"
    >
      <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col bg-white/5 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 relative backdrop-blur-sm">
        
        <div className="overflow-hidden h-48 relative main-project-card__image">
          {imageLoading && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse flex items-center justify-center">
              <div className="text-gray-600 text-sm">Loading...</div>
            </div>
          )}
          <img 
            src={imageError ? placeholderImage : project.image} 
            alt={project.title} 
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        {/* Status badge */}
        {project.statusGlow === 'in-progress' && (
          <div className="main-project-card__badge">In Progress</div>
        )}
        
        <CardHeader className="p-6">
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
              {project.title}
              {project.statusGlow === 'in-progress' && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              )}
            </CardTitle>
          </div>
          {/* tech logos (subtle grayscale) */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-2">
              {project.tags.slice(0, 6).map((tag, i) => (
                techIconMap[tag] ? (
                  <img
                    key={i}
                    src={techIconMap[tag]}
                    alt={tag}
                    loading="lazy"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain opacity-70 grayscale"
                    aria-hidden="true"
                  />
                ) : (
                  <Badge key={i} variant="outline" className="text-xs bg-gray-800/50 text-blue-300 border-blue-500/20">
                    {tag}
                  </Badge>
                )
              ))}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow p-6 pt-0">
          <CardDescription 
            className="text-sm text-gray-400 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />

          {/* Case study: Problem / Solution / Result */}
          {project.caseStudy && (
            <div className="mt-4 text-sm text-gray-300 space-y-3">
              {project.caseStudy.problem && (
                <div>
                  <div className="text-xs text-blue-400 font-semibold">Problem</div>
                  <div className="text-muted-foreground">{project.caseStudy.problem}</div>
                </div>
              )}
              {project.caseStudy.solution && (
                <div>
                  <div className="text-xs text-blue-400 font-semibold">Solution</div>
                  <div className="text-muted-foreground">{project.caseStudy.solution}</div>
                </div>
              )}
              {project.caseStudy.result && (
                <div>
                  <div className="text-xs text-blue-400 font-semibold">Result</div>
                  <div className="text-muted-foreground">{project.caseStudy.result}</div>
                </div>
              )}
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-between gap-4 p-6 pt-0">
          {project.demoUrl && (
            <Button asChild className="w-full px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors text-sm font-medium">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                {project.status ? project.status : 'View Demo'}
              </a>
            </Button>
          )}
          
          {project.githubUrl && (
            <Button asChild className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all text-sm font-medium">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
