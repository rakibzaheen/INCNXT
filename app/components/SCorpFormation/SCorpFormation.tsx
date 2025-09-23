"use client"

import React from 'react';
import SCorpHeroSection from './SCorpHeroSection';

// Example usage with S-Corp data
const SCorpFormation: React.FC = () => {
  const handleStartNow = () => {
    console.log('Start S-Corp formation process');
    // Handle navigation or form submission
  };

  return (
    <div className="mbg-white">
      <SCorpHeroSection
        rating={4.6}
        totalRating={5}
        platform="Trustpilot"
        title="Start Your S-Corp for $0 (+State Fees)"
        description="Stress-free S Corp formation to save money on your taxes as your business grows."
        buttonText="START NOW"
        buttonAction={handleStartNow}
        imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        imageAlt="Professional woman working on laptop"
      />
    </div>
  );
};

export default SCorpFormation;