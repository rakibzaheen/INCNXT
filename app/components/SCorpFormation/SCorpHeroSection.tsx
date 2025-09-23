import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  rating?: number;
  totalRating?: number;
  platform?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonAction?: () => void;
  imageUrl: string;
  imageAlt?: string;
  className?: string;
}

const SCorpHeroSection: React.FC<HeroSectionProps> = ({
  rating = 4.6,
  totalRating = 5,
  platform = "Trustpilot",
  title,
  description,
  buttonText,
  buttonAction,
  imageUrl,
  imageAlt = "Business professional",
  className = ""
}) => {
  
  const renderStars = (rating: number, total: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = total - Math.ceil(rating);

    return (
      <div className="flex items-center space-x-1">
        {/* Full Stars */}
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-${index}`} className="w-4 h-4 fill-green-500 text-green-500" />
        ))}
        
        {/* Half Star */}
        {hasHalfStar && (
          <Star className="w-4 h-4 fill-green-500 text-green-500" />
        )}
        
        {/* Empty Stars */}
        {[...Array(emptyStars)].map((_, index) => (
          <Star key={`empty-${index}`} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <section className={`bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-700">Excellent</span>
              <span className="text-sm font-bold text-[#0F395D]">{rating} out of {totalRating}</span>
              {renderStars(rating, totalRating)}
              <span className="text-sm font-medium text-gray-700">{platform}</span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F395D] leading-tight mb-4">
                {title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={buttonAction}
                className="group inline-flex items-center px-8 py-4 bg-[#D51F27] hover:bg-[#ab0f16] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#ab0f16]"
              >
                {buttonText}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Additional Features */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Expert Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Fast Processing</span>
              </div>
            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  width={500}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Success Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-[#0F395D]">Formation Complete</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SCorpHeroSection;