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
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
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
    <div className="flex flex-wrap justify-center gap-8 py-10 max-w-7xl mx-auto">
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
    <div className="parent">
      <div className="card">
        {/* Background image */}
        {image && !imageError && (
          <div 
            className="absolute inset-0 opacity-20 z-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
          </div>
        )}
        {imageError && image && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 z-0"></div>
        )}
        
        <div className="glass relative z-10">
          <div className="content">
            {icon && (
              <div className="text-4xl mb-2">{icon}</div>
            )}
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
            {image && !imageError && (
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover rounded-full"
                onError={() => setImageError(true)}
                loading="lazy"
              />
            )}
            {(!image || imageError) && (
              <svg className="svg" viewBox="0 0 24 24">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                <path d="M2 17L12 22L22 17" fill="currentColor"/>
                <path d="M2 12L12 17L22 12" fill="currentColor"/>
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 