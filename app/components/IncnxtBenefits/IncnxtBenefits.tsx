// /components/BizeeBenefits.tsx

import Image from 'next/image'; // Using next/image for optimization
import type { FC } from 'react';
import React from "react";
// --- 1. Data Structure and Types ---
// Define types for our features to ensure data consistency
type Feature = {
  name: string;
  tag?: string; // Optional tag (e.g., "Free")
  description: string;
};

type FeatureCategory = {
  title: string;
  features: Feature[];
};

// The actual data for the benefits section
const benefitsData: FeatureCategory[] = [
  {
    title: 'Registration and formalities',
    features: [
      {
        name: 'Free S Corp Filing',
        tag: 'Free',
        description: 'Low-cost, personalized business formation. Because when you&apos;re starting a business, every dollar counts.',
      },
      {
        name: 'Articles of Organization',
        description: 'Every Bizee formation package includes assistance drafting, preparing & filing Articles of Organization.',
      },
      {
        name: 'Business Contract Templates',
        description: 'Ensure that all your contracts, documents and forms are rock solid without the expense of hiring a lawyer.',
      },
      {
        name: 'EIN Business Tax',
        description: 'Included free in our Gold and Platinum formation packages. Get your EIN within 1 business day.',
      },
    ],
  },
  {
    title: 'Office support and administrative assistance',
    features: [
      {
        name: 'Free 1st Year Registered Agent',
        tag: 'Free',
        description: 'Access your complete & easy-to-use Registered Agent service free for a full year ($119/annually after that).',
      },
      {
        name: 'No Hidden Fees, No Contracts',
        description: 'Get the best user experience and unparalleled value for money. Nobody gives you more for less.',
      },
      {
        name: 'Personalized Dashboard',
        description: 'Your business essentials all in one place. Access everything you need, whenever you need it.',
      },
      {
        name: '24/7 Friendly Customer Service',
        description: 'Talk to a dedicated incorporation specialist and get lifetime customer support.',
      },
      {
        name: 'On-Time Due Date Alerts',
        description: 'Get text and email notifications, order updates and free lifetime compliance alerts within your dashboard.',
      },
    ],
  },
  {
    title: 'Business development and management',
    features: [
      {
        name: 'Entrepreneurship Made Easy',
        description: 'Get a Business Banking Account, domain name and business email fast with the Platinum package.',
      },
      {
        name: 'Customized Business Growth',
        description: 'Get set up with additional business services from within your business dashboard.',
      },
      {
        name: 'Tax Savings with IRS Form 2553',
        description: 'Choose S Corp election so that your LLC is treated as an S Corp for tax filing purposes.',
      },
    ],
  },
];


// --- 2. The React Component ---
const IncnxtBenefits: FC = () => {
  return (
    <section className="bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* --- Hero Section --- */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Discover the Benefits of Forming Your S Corp with Bizee
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Since 2004, we&apos;ve helped 1,000,000+ entrepreneurs and small business owners form and grow their businesses. Get industry leading support (and a host of other benefits) to start your business with confidence.
          </p>
          <button className="mt-6 bg-[#0F395D] text-white font-bold py-3 px-8 rounded-md hover:bg-[#ab0f16] transition-colors duration-300">
            FORM YOUR S CORP NOW
          </button>
        </div>

        {/* --- Dashboard Image --- */}
        <div className="mt-12">
          {/* Placeholder for the image. Replace src with the actual image path. */}
          <Image
            src="/img/admin.png" 
            alt="Dashboard Interface"
            width={1920}
            height={1080}
            className="rounded-lg shadow-xl border"
            quality={90}
          />
        </div>

        {/* --- Features Section --- */}
        <div className="mt-16 space-y-12">
          {benefitsData.map((category) => (
            <div key={category.title}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                {/* Category Title */}
                <div className="md:col-span-1">
                  <h2 className="text-lg font-bold text-gray-800">{category.title}</h2>
                </div>
                
                {/* Empty div for alignment on larger screens */}
                <div className="hidden md:block md:col-span-2"></div>

                {/* Features List */}
                {category.features.map((feature) => (
                    // We use React.Fragment to group elements for the grid
                    // This allows us to place the name and description in separate grid columns
                  <React.Fragment key={feature.name}>
                    <div className="md:col-span-1 text-gray-700 font-medium">
                      {feature.name}
                      {feature.tag && (
                        <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {feature.tag}
                        </span>
                      )}
                    </div>
                    <div className="md:col-span-2 text-gray-600">
                      <p>{feature.description}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// In a real project, you might need to use React.Fragment like this:
// import React from 'react';
// export default IncnxtBenefits;
// But Next.js handles it automatically.
export default IncnxtBenefits;