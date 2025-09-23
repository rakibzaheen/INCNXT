"use client"

import React from 'react';
import { ArrowRight } from 'lucide-react';



interface HeroBannerProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonAction?: () => void;
  overlayOpacity?: number;
  textColor?: 'white' | 'black';
  buttonColor?: 'orange' | 'blue' | 'green' | 'red' | 'purple';
  className?: string;
}

const DynamicHeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonAction,
  overlayOpacity = 0.6,
  textColor = 'white',
  className = ''
}) => {
  
  // const buttonColorClasses = {
  //   orange: 'bg-[#D51F27] hover:bg-[#ab0f16] focus:ring-[#ab0f16]',
  //   blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-200',
  //   green: 'bg-green-500 hover:bg-green-600 focus:ring-green-200',
  //   red: 'bg-red-500 hover:bg-red-600 focus:ring-red-200',
  //   purple: 'bg-purple-500 hover:bg-purple-600 focus:ring-purple-200'
  // };

  const textColorClasses = {
    white: 'text-white',
    black: 'text-[#0F395D]'
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-lg ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Content */}
      <div className="relative z-10 px-8 py-12 lg:py-16">
        <div className="max-w-2xl">
          
          {/* Title */}
          <h1 className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight ${textColorClasses[textColor]}`}>
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className={`text-lg lg:text-xl mb-8 leading-relaxed ${
            textColor === 'white' ? 'text-gray-200' : 'text-gray-600'
          }`}>
            {subtitle}
          </p>
          
          {/* CTA Button */}
          <button
            onClick={buttonAction}
            className={`group inline-flex items-center px-6 py-3 bg-[#D51F27] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4`}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
        </div>
      </div>
    </div>
  );
};


export default DynamicHeroBanner; 