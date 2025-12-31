import React from 'react';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-2';

const Features = () => {
  return (
    <section id="features" className="section-container relative">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="section-title mb-4">Capabilities</h2>
        <p className="text-lg text-gray-400 max-w-2xl">
          Core features and capabilities for building robust Discord bots and Roblox management systems.
        </p>
      </div>
      <FeaturesSectionDemo />
    </section>
  );
};

export default Features; 