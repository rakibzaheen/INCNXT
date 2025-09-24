// BizeeLandingPage.tsx
import React from 'react';
import { Star, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

// SECTION: TypeScript Interfaces
interface Feature {
  title: string;
  description: string;
  tag?: string;
}

interface FAQLink {
  text: string;
  href: string;
}

// SECTION: Data
// It's better to manage content in data structures for easier updates.
const featuresData: Feature[] = [
  {
    title: '100% State-Compliant - File in Minutes',
    description: '650k+ Annual Reports Filed',
  },
  {
    title: 'Transparent Flat Fee – No Surprises',
    description: 'No subscription is required',
  },
  {
    title: 'Real Human Support (Chat, Phone, Email)',
    description: 'Trust Pilot Rating: 4.7 stars',
  },
  {
    title: 'Automated Deadline Reminders',
    description: 'Friendly email reminders are included in your purchase',
  },
];

const faqLinksData: FAQLink[] = [
  { text: 'What Happens If You Don’t File an Annual Report (All Business Entities Covered)', href: '#' },
  { text: 'An Annual Report: Is It Mandatory?', href: '#' },
  { text: 'Why Do You Need to File an Annual Report?', href: '#' },
  { text: 'What Happens to Businesses That Don’t File Annual Reports?', href: '#' },
  { text: 'What Other Issues May Come from Not Filing an Annual Report?', href: '#' },
  { text: 'Avoid Issues from Filing Annual Reports Late.', href: '#' },
];

// SECTION: SVG Icons for Cards (as simple components)
const EntityTypeIcon = () => (
  <svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <rect x="15" y="12" width="50" height="40" rx="4" fill="#F3F4F6"/>
    <rect x="19" y="16" width="42" height="32" rx="2" fill="white"/>
    <path d="M52 4H28L24 12H56L52 4Z" fill="#F97316"/>
    <path d="M32 28H48V32H32V28Z" fill="#FDBA74"/>
    <path d="M32 36H44V40H32V36Z" fill="#FDE68A"/>
  </svg>
);

const StateFormationIcon = () => (
    <svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
        <rect x="12" y="8" width="56" height="48" rx="4" fill="#F3F4F6" />
        <path d="M49.2,18.3l-5.3-4.1l-6,4.6l-2.6-4.5l-5.6,2l-3.3,4.4l2.1,5.2l-3.3,3.7l1.7,4.8l4.4,2.5l2-5.7l5.4,0.1 l2.8,4.1l6.1-2.1l2.5-5.3l-3.6-4.1L49.2,18.3z" fill="#F97316"/>
    </svg>
);


// SECTION: Reusable Sub-components
const FeatureCard = ({ number, feature }: { number: number; feature: Feature }) => (
  <div className="flex gap-4 items-start p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-orange-500 font-bold rounded-full">
      {number}
    </div>
    <div>
      <h3 className="font-semibold text-gray-800">{feature.title}</h3>
      <p className="text-sm text-gray-500">{feature.description}</p>
    </div>
  </div>
);

const StateSelectorCard = ({ title, icon, options }: { title: string; icon: React.ReactNode; options: string[] }) => (
  <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</p>
    <div className="my-4 h-16 flex items-center justify-center">
      {icon}
    </div>
    <div className="relative">
      <select className="w-full appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-3 pr-10">
        {options.map(option => <option key={option}>{option}</option>)}
      </select>
      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none rotate-90" />
    </div>
  </div>
);


// SECTION: Main Component
export const BizeeLandingPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold">Excellent 4.7 out of 5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-green-500 fill-current" />)}
                </div>
                <span>★ Trustpilot</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4 !leading-tight">
                File My Annual Report – Fast, Easy & 100% State-Compliant
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Avoid late fees and protect your business standing — we’ll file your Annual Report in just minutes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#" className="group inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  File Your Annual Report <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#" className="group inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                  When is my due date? <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://i.ibb.co/68vD84T/phone-mockup.png" alt="Phone showing a success checkmark for a filed report" className="max-w-xs md:max-w-sm w-full" />
            </div>
          </div>
          <div className="text-center mt-16 text-sm text-gray-600">
            <p>Bootstrapped, Founder Led, Independently Owned <span className="text-orange-500">since 2004</span> With <span className="font-bold">Over 1,000,000 Entrepreneurs</span> Served!</p>
          </div>
        </section>
        
        {/* Why File With Bizee? Section */}
        <section className="px-6 py-16 md:py-24 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Why File With Bizee?</h2>
          <div className="mt-12 max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <img src="https://i.ibb.co/D8G3Ww9/bizee-person.png" alt="Friendly Bizee representative" className="rounded-lg w-full max-w-md mx-auto" />
            <div className="space-y-4">
              {featuresData.map((feature, index) => (
                <FeatureCard key={index} number={index + 1} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Choose Entity & State Section */}
        <section className="px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Choose your Entity Type and State</h2>
          <div className="mt-12 max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-8">
            <StateSelectorCard 
              title="Entity Type" 
              icon={<EntityTypeIcon />}
              options={['Select Entity Type', 'LLC', 'S-Corporation', 'C-Corporation', 'Nonprofit']} 
            />
            <StateSelectorCard 
              title="State of Formation" 
              icon={<StateFormationIcon />}
              options={['Select State', 'Texas', 'California', 'Florida', 'Delaware', 'Wyoming']} 
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                    <h3 className="font-bold text-gray-800 mb-4">Table of Contents</h3>
                    <ul className="space-y-3">
                        {faqLinksData.map(link => (
                            <li key={link.text}>
                                <a href={link.href} className="group flex gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                                    <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-orange-500"/>
                                    <span>{link.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:col-span-2 prose prose-lg max-w-none text-gray-700">
                    <h2 className="text-3xl !mb-6 font-bold text-gray-900">What Happens If You Don’t File an Annual Report (All Business Entities Covered)</h2>
                    <p>
                        The must-know details about who files one, and the risks of failing to.
                    </p>
                    <p>
                        There's a lot of paperwork you need to complete and file when you're running a business, and one of the most important is the annual report. The process of completing, filing and returning these reports do vary between states. If you're legally required to file one, you must always do so. Failing to file an annual report can cause serious problems for your business.
                    </p>
                    <p>
                        We'll explain the penalties for not filing your annual report, let you know how to avoid them and ensure your business stays in good standing.
                    </p>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};