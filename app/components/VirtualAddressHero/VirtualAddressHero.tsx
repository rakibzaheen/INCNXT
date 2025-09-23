import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface RatingBadgeProps {
  rating: number;
  totalRatings: number;
  platform: string;
  platformIcon?: string;
}

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

interface VirtualAddressHeroProps {
  title: string;
  subtitle: string;
  description: string;
  businessRating: {
    score: number;
    totalRatings: number;
    platform: string;
  };
  personalRating: {
    score: number;
    totalRatings: number;
    platform: string;
  };
  onBusinessClick?: () => void;
  onPersonalClick?: () => void;
  className?: string;
}

const RatingBadge: React.FC<RatingBadgeProps> = ({ 
  rating, 
  totalRatings, 
  platform, 
  platformIcon 
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center space-x-0.5">
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-${index}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <Star key={`empty-${index}`} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
      <span className="text-sm font-medium text-gray-700">
        {totalRatings.toLocaleString()} ratings
      </span>
      {renderStars(rating)}
      <div className="flex items-center space-x-2">
        {platformIcon && (
          <Image 
            src={platformIcon} 
            alt={platform} 
            className="w-4 h-4"
            width={16}
            height={16}
          />
        )}
        <span className="text-sm font-medium text-gray-700">
          {platform}
        </span>
      </div>
    </div>
  );
};

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary' 
}) => {
  const baseClasses = "px-8 py-4 font-semibold rounded-full text-sm uppercase tracking-wide transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 shadow-lg hover:shadow-xl";
  
  const variantClasses = {
    primary: "bg-[#D51F27] hover:bg-[#D51F27] text-white focus:ring-[#D51F27]",
    secondary: "bg-[#D51F27] hover:bg-[#D51F27] text-white focus:ring-[#D51F27]"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {text}
    </button>
  );
};

export const VirtualAddressHero: React.FC<VirtualAddressHeroProps> = ({
  title,
  subtitle,
  description,
  businessRating,
  personalRating,
  onBusinessClick,
  onPersonalClick,
  className = ""
}) => {
  return (
    <section className={`bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Main Content */}
        <div className="space-y-8">
          
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0c3961] leading-tight">
              {title.split('SMARTER WAY').map((part, index) => (
                <span key={index}>
                  {part}
                </span>
              ))}
            </h1>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F395D]">
              {subtitle}
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* Rating Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
            <RatingBadge
              rating={businessRating.score}
              totalRatings={businessRating.totalRatings}
              platform={businessRating.platform}
              platformIcon="/api/placeholder/16/16" // ShopperApproved icon placeholder
            />
            <RatingBadge
              rating={personalRating.score}
              totalRatings={personalRating.totalRatings}
              platform={personalRating.platform}
              platformIcon="/api/placeholder/16/16" // Trustpilot icon placeholder
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <CTAButton
              text="GET BUSINESS VIRTUAL ADDRESS"
              onClick={onBusinessClick}
              variant="primary"
            />
            <CTAButton
              text="GET PERSONAL VIRTUAL ADDRESS"
              onClick={onPersonalClick}
              variant="secondary"
            />
          </div>

          {/* Additional Features */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Setup in Minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Professional Mail Handling</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No Long-term Contracts</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};