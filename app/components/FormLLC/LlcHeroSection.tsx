// src/components/LlcHeroSection.tsx

import type { NextPage } from 'next';
import Image from 'next/image';

// SVG component for the green star icon
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-green-500 mr-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// SVG component for the Trustpilot text logo
const TrustpilotLogo = () => (
    <span className="flex items-center font-bold text-gray-800">
        <svg fill="#00b67a" className="w-4 h-4 mr-1" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        Trustpilot
    </span>
);


const LlcHeroSection: NextPage = () => {
  return (
    <div className="bg-[#fdfaf6] font-sans">
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* ## Left Column: Text Content */}
          <div className="flex flex-col space-y-6 text-center md:text-left">
            
            {/* Trustpilot Badge */}
            <div className="flex justify-center md:justify-start">
                <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm shadow-sm">
                    <StarIcon />
                    <span className="font-semibold text-gray-700">Excellent 4.6 out of 5</span>
                    <TrustpilotLogo />
                </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F395D] tracking-tight leading-tight">
              Everything You Need to Know About LLCs
            </h1>

            {/* Paragraph */}
            <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Welcome to your ultimate guide to forming an LLC, tailored specifically for aspiring startup founders. If you&apos;re feeling overwhelmed by the intricacies of business structures, you&apos;re not alone. Let&apos;s demystify the process and help you understand why an LLC might be the perfect choice for your startup.
            </p>

            {/* Get Started Button */}
            <div className="pt-4 flex justify-center md:justify-start">
              <button className="bg-[#D51F27] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#ab0f16] transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ab0f16] focus:ring-opacity-50">
                GET STARTED
              </button>
            </div>
          </div>

          {/* ## Right Column: Video Thumbnail */}
          <div className="relative w-full max-w-lg mx-auto cursor-pointer group">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/img/ban.jpg" // IMPORTANT: Place your image here
                alt="A unicorn with a rainbow mane standing in front of a whiteboard"
                width={600}
                height={450}
                className="rounded-2xl object-cover shadow-2xl w-full h-full"
              />
            </div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="flex items-center justify-center w-24 h-24 bg-black bg-opacity-60 rounded-full ring-4 ring-[#0F395D] group-hover:bg-opacity-75 transition-all duration-300"
                aria-label="Play video"
              >
                <svg
                  className="w-10 h-10 text-white ml-1 transform group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LlcHeroSection;
