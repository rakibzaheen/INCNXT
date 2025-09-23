// /components/ClientReviewsSection.tsx

import type { FC } from 'react';
// import { StarIcon } from '@heroicons/react/20/solid'; // Using Heroicons for stars and chevron

// import { StarIcon } from "react-icons/ci";

import { StarIcon } from 'lucide-react';


// --- 1. Sub-component: ReviewCard ---
interface ReviewCardProps {
  initials: string;
  rating: number; // e.g., 5 for 5 stars
  text: string;
  trustpilotLogo?: boolean; // If true, shows Trustpilot branding
}

const ReviewCard: FC<ReviewCardProps> = ({ initials, rating, text, trustpilotLogo = false }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 min-w-[300px] max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-gray-100 text-gray-800 font-semibold text-sm px-3 py-1 rounded-full">
          {initials}
        </span>
        <div className="flex text-green-500">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${i < rating ? 'text-green-500' : 'text-gray-300'}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">
        {text}
      </p>
      {trustpilotLogo && (
        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <div className="flex items-center text-green-600 font-semibold">
            <StarIcon className="h-4 w-4 mr-1" aria-hidden="true" />
            Trustpilot
          </div>
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-50">
              <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            <button className="p-2 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-50">
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- 2. Icons (if not using Heroicons, define them here) ---
// If you don't want to install @heroicons/react, you can use simple SVG icons:
const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);


// --- 3. Main Component ---
const ClientReviewsSection: FC = () => {
  return (
    <section className="bg-white py-16 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Content Area */}
        <div className="flex-shrink-0 lg:w-1/3 text-center lg:text-left mb-10 lg:mb-0">
          <div className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <StarIcon className="h-4 w-4 mr-1 text-green-500" aria-hidden="true" />
            Excellent 4.6 out of 5 (22,253 Reviews)
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            See What Our Clients Have to Say...
          </h2>
          <button className="mt-8 bg-[#0F395D] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#ab0f16] transition duration-300 ease-in-out">
            CHECK OUT MORE REVIEWS
          </button>
        </div>

        {/* Right Reviews Carousel Area */}
        <div className="relative w-full lg:w-2/3 flex justify-center lg:justify-end">
          {/* This div creates the 'stacked' background cards effect */}
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
            <div className="bg-gray-50 h-full w-full max-w-sm rounded-xl -rotate-6 translate-x-10 translate-y-10 scale-95 opacity-50 hidden lg:block"></div>
            <div className="bg-gray-100 h-full w-full max-w-sm rounded-xl rotate-3 -translate-x-10 -translate-y-5 scale-98 opacity-75 hidden lg:block"></div>
          </div>

          {/* The main review card always visible */}
          <ReviewCard
            initials="PR"
            rating={5}
            text="The process was easy to understand and straight forward. I would recommend to anyone who wants to establish a company to use your service. The pricing for the services is good also."
            trustpilotLogo={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsSection;