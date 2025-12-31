import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
}

// FIX 1: Removed the double nested brackets [ [ ] ]
const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "April 2025 – Present",
    title: "Discord Bot – Scalable Server Management & Automation",
    description: `Designed, built, and actively maintaining a production-ready Discord bot for medium to large communities. Implemented core moderation systems including bans, mutes, warnings, and kicks, along with a full ticketing system, suggestions, autoroles, and customizable welcome messages. Integrated MongoDB for persistent storage and logging of moderation actions and deleted messages. Developed advanced features such as join-to-create voice channels, music playback, server statistics, scheduled messages, and bot-authored announcements. Focused on performance, reliability, and modular architecture to reduce moderator workload and improve overall server organization and engagement.`,
    type: "experience"
  }
];

const About = () => {
  return (
    <section id="about" className="section-container relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-4">About</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl">
          Building reliable, scalable systems for Discord communities and Roblox groups.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Tech Stack & Skills */}
        <div className="lg:col-span-1">
          <Card className="h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">Tech Stack</h3>
              
              <div className="space-y-6">
                {/* Simplified Skill Mapper for brevity */}
                {[
                  { label: 'Discord Development', skills: ['Discord.js', 'Slash Commands', 'Webhooks'], color: 'from-blue-400 to-purple-500' },
                  { label: 'Backend & Database', skills: ['Node.js', 'MongoDB', 'Express.js'], color: 'from-green-400 to-blue-500' },
                  { label: 'Roblox & Scripting', skills: ['Lua/Luau', 'Roblox API', 'Game Management'], color: 'from-purple-400 to-pink-500' }
                ].map((group) => (
                  <div key={group.label}>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">{group.label}</h4>
                    <div className="space-y-2">
                      {group.skills.map((skill, index) => (
                        <div key={skill} className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">{skill}</span>
                          <div className="w-20 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${group.color} rounded-full`}
                              style={{ width: `${80 + (index * 5)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-6 top-5 bottom-5 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 opacity-50"></div>
            
            <div className="space-y-12">
              {timelineData.map((item) => (
                <div key={item.id} className="relative pl-16 group">
                  {/* Icon Bubble */}
                  <div className="absolute left-0 top-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-xl group-hover:scale-110 transition-transform">
                    {item.type === 'education' ? <GraduationIcon /> : item.type === 'experience' ? <WorkIcon /> : <AwardIcon />}
                  </div>

                  <Card className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                    <CardContent className="p-6">
                      <div className="text-xs font-mono text-blue-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simplified SVG Components for stability
const WorkIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const GraduationIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const AwardIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export default About;
