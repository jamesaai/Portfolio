import React from 'react';

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Discord Bot Development",
      description: "Building scalable Discord bots with moderation, automation, ticketing, and community management features using Discord.js and Node.js.",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=800&q=80",
      icon: "🤖"
    },
    {
      title: "Roblox Management Systems",
      description: "Creating custom Roblox group management infrastructure for staff ranks, permissions, moderation, and in-game automation with Lua.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      icon: "🎮"
    },
    {
      title: "Server Automation",
      description: "Designing automated systems for Discord servers including autoroles, scheduled messages, giveaways, and join-to-create voice channels.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      icon: "⚡"
    },
    {
      title: "Database Integration",
      description: "Expert in MongoDB and PostgreSQL for persistent storage, logging moderation actions, and managing complex server configurations.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
      icon: "💾"
    },
    {
      title: "Discord API Integration",
      description: "Leveraging Discord's API for slash commands, embeds, webhooks, OAuth, and real-time server statistics tracking.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      icon: "🔌"
    },
    {
      title: "Community Management Tools",
      description: "Building ticket systems, suggestion boards, welcome messages, and analytics dashboards to improve server engagement and organization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      icon: "👥"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard 
          key={feature.title} 
          title={feature.title}
          description={feature.description}
          image={feature.image}
          icon={feature.icon}
          index={index} 
        />
      ))}
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  image,
  icon,
  index,
}: {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  index: number;
}) => {
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div className="relative group h-full">
      <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-200">
        {icon && (
          <div className="text-3xl mb-4">{icon}</div>
        )}
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}; 