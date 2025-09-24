"use client";
// src/components/ForeignQualification.tsx

import type { FC } from 'react';
import { Star, MapPin, CheckCircle } from 'lucide-react'; // Added CheckCircle for potential future use or dynamic lists

// A simple phone mockup component to display images (reused from previous component)
const PhoneMockup: FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[550px] w-[270px] shadow-xl ${className}`}>
    <div className="w-[120px] h-[15px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[13px] top-[72px] rounded-s-lg"></div>
    <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
    <div className="h-[50px] w-[3px] bg-gray-800 absolute -end-[13px] top-[100px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
      {children}
    </div>
  </div>
);

const ForeignQualifications: FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-600 mb-4">
              <Star className="text-green-500 fill-current" />
              <span className="font-semibold">Excellent 4.7 out of 5</span>
              <span>•</span>
              <span>Trustpilot</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Foreign Qualification Made Simple
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Expand your business across state lines with ease. Bizee handles the entire Foreign Qualification process—compliance, paperwork, and registered agent services—so you can focus on growing your business.
            </p>
            <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              START NOW
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            {/* Image for Hero Section - using a placeholder or actual image */}
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col items-center justify-center min-h-[400px]">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">FOREIGN QUALIFICATION</h3>
              <p className="text-gray-600 text-center mb-6">
                Certificate of Authority document example.
              </p>
              {/* This could be an actual image or a stylized representation */}
              <div className="w-48 h-64 bg-white border border-gray-300 flex items-center justify-center rounded-md shadow-inner text-gray-400 text-sm italic">
                [Certificate Image Placeholder]
              </div>
            </div>
          </div>
        </section>

      </div>
      
      {/* Social Proof Banner */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-gray-600">
          <p>
            Bootstrapped, Founder-Led, Independently Owned
            <span className="font-bold text-orange-500 mx-2">Since 2004</span>
            With Over
            <span className="font-bold text-orange-500 mx-2">1,000,000 Entrepreneurs</span>
            Served!
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">

        {/* What Is Foreign Qualification? Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <PhoneMockup>
              <div className="p-6 bg-gray-50 h-full flex flex-col justify-center items-center text-center">
                <MapPin className="w-16 h-16 text-red-500 mb-4" />
                <h3 className="font-bold text-2xl mb-2">2 States</h3>
                <p className="text-gray-500 mb-4">Your business operates in multiple states.</p>
                <div className="bg-white p-4 rounded-lg shadow-md w-full">
                  <p className="font-mono text-sm text-gray-700">Expanding to: <span className="font-bold">California, New York</span></p>
                </div>
              </div>
            </PhoneMockup>
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">What Is Foreign Qualification?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Foreign Qualification is the legal process of registering your business to operate in a state other than where it was formed. Your business is considered <span className="font-semibold text-gray-900">&quot;domestic&quot;</span> in its home state and <span className="font-semibold text-gray-900">&quot;foreign&quot;</span> in any other state.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When you file for Foreign Qualification, you receive a <span className="font-semibold text-gray-900">Certificate of Authority</span> from the new state, granting you legal permission to do business there. Businesses must complete this process in every state where they have significant operations, such as offices, employees, or major contracts.
            </p>
          </div>
        </section>

        {/* Requirements for Foreign Qualification Section (Title Only for now) */}
        <section className="text-center pt-12">
          <h2 className="text-3xl font-bold mb-4">Requirements for Foreign Qualification</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            To obtain a <span className="font-semibold text-gray-900">Certificate of Authority</span>, your business must:
          </p>
          {/* You would typically add a list of requirements here.
              For example, using a simple unordered list: */}
          <ul className="list-none space-y-4 text-left max-w-2xl mx-auto mt-8">
            <li className="flex items-start gap-3">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500 mt-1" />
              <span>
                Be in good standing in your <span className="font-semibold">home state</span> and provide a Certificate of Good Standing.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500 mt-1" />
              <span>
                Have a <span className="font-semibold">registered agent</span> with a physical address in the new state.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500 mt-1" />
              <span>
                Submit the appropriate <span className="font-semibold">Foreign Qualification application</span> and pay the required fees.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500 mt-1" />
              <span>
                Ensure your <span className="font-semibold">business name</span> is available in the new state. If not, you may need to register a &quot;fictitious name&quot; or DBA.
              </span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
};
export default ForeignQualifications;