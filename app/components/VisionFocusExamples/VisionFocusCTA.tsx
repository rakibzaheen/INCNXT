"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface VisionFocusCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const VisionFocusCTA: React.FC<VisionFocusCTAProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  // ...existing code...
}) => {
  
  // ...existing code...

  return (
    <section className={`py-5 px-4 sm:px-6 lg:px-8 `}>
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0F395D] mb-6 leading-tight w-2/3 mx-auto">
          {title}
        </h2>
        
        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
          {description}
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={onButtonClick}
            className="group inline-flex items-center px-8 py-4 bg-[#D51F27] hover:bg-[#D51F27] text-white font-bold rounded-full text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#ab0f16]"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Trusted by 1M+ Entrepreneurs</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Expert Legal Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Fast & Reliable Service</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionFocusCTA;