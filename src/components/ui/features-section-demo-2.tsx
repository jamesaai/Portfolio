import React from 'react';

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Discord Bot Development",
      description: "Building scalable Discord bots with moderation, automation, ticketing, and community management features using Discord.js and Node.js.",
    },
    {
      title: "Roblox Management Systems",
      description: "Creating custom Roblox group management infrastructure for staff ranks, permissions, moderation, and in-game automation with Lua.",
    },
    {
      title: "Server Automation",
      description: "Designing automated systems for Discord servers including autoroles, scheduled messages, giveaways, and join-to-create voice channels.",
    },
    {
      title: "Database Integration",
      description: "Expert in MongoDB and PostgreSQL for persistent storage, logging moderation actions, and managing complex server configurations.",
    },
    {
      title: "Discord API Integration",
      description: "Leveraging Discord's API for slash commands, embeds, webhooks, OAuth, and real-time server statistics tracking.",
    },
    {
      title: "Community Management Tools",
      description: "Building ticket systems, suggestion boards, welcome messages, and analytics dashboards to improve server engagement and organization.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="glass">
          <div className="content">
            <span className="title">{title}</span>
            <span className="text">{description}</span>
          </div>
        </div>
        
        <div className="logo">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5">
            <svg className="svg" viewBox="0 0 24 24">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" fill="currentColor"/>
              <path d="M2 12L12 17L22 12" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}; 