"use client";
// RegisteredAgentPage.tsx
import React, { useState } from "react";
import { Star, ArrowRight, ChevronDown, PlayCircle } from "lucide-react";

// SECTION: TypeScript Interfaces & Data
// Defining types and data separately makes the component cleaner and easier to update.

interface PricingPlan {
  title: string;
  price: string;
  ctaText: string;
  isPrimary: boolean;
}

interface Feature {
  text: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Free LLC Formation',
    price: 'Get Started',
    ctaText: 'Get Started',
    isPrimary: true,
  },
  {
    title: 'Registered Agent Standalone Service',
    price: '$119/year',
    ctaText: 'Get Started',
    isPrimary: false,
  },
];

const features: Feature[] = [
  { text: 'Founded in Houston, Bizee has helped entrepreneurs incorporate over 1,000,000 companies since 2004.' },
  { text: 'We are a TRUE national registered agent service. We have physical addresses (not P.O. boxes) in all 50 states. We do not outsource our service.' },
  { text: 'Receive instant notifications for any Service of Process (SOP) or state compliance notice via text and email.' },
  { text: 'All Service of Process (SOP) are mailed via FedEx with tracking.' },
  { text: 'All documents we receive are promptly uploaded and processed by Bizee employees and promptly uploaded to your client portal.' },
  { text: 'Our service includes FREE lifetime compliance notifications, so you\'re always reminded of important state requirements.' },
];

const faqItems: FaqItem[] = [
  {
    question: 'Does My Business Need a Registered Agent?',
    answer: 'Yes, virtually all states require LLCs, Corporations, and other formal business entities to appoint a registered agent. This ensures you have a reliable point of contact for receiving legal and official documents.',
  },
  {
    question: 'Why Use a Registered Agent Service?',
    answer: 'A professional service ensures that you never miss a critical notice. It also protects your privacy by keeping your personal address off public records and saves you the embarrassment of being served legal papers in front of clients.',
  },
  {
    question: 'Why Does Bizee Offer a Free Registered Agent?',
    answer: 'We offer a free first year of our Registered Agent service with any of our business formation packages. It\'s our way of providing comprehensive value and helping new businesses start on the right foot with compliance covered.',
  },
  {
    question: 'Reduce Your Workload Using a Registered Agent Service',
    answer: 'By handling all your state and legal mail, we free you up to focus on what you do best: growing your business. We scan, upload, and notify you of all documents, keeping you organized and compliant without the administrative hassle.',
  },
];


// SECTION: Reusable Sub-components

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const cardClasses = plan.isPrimary
    ? 'bg-orange-500 text-white'
    : 'bg-gray-800 text-white';
  const buttonClasses = plan.isPrimary
    ? 'bg-white text-orange-500'
    : 'bg-gray-700 hover:bg-gray-600';
  
  return (
    <a href="#" className={`group rounded-lg p-6 flex flex-col justify-between transition-transform hover:scale-105 ${cardClasses}`}>
      <div>
        <p className="font-semibold">{plan.title}</p>
        <p className="text-3xl font-bold mt-2">{plan.price}</p>
      </div>
      <div className={`mt-4 w-full text-center font-semibold py-3 rounded-md transition-colors ${buttonClasses}`}>
        {plan.ctaText}
      </div>
    </a>
  );
};

const AccordionItem = ({ item, isOpen, onClick }: { item: FaqItem; isOpen: boolean; onClick: () => void; }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left py-4 font-semibold text-gray-800 hover:text-orange-500 transition-colors"
    >
      <span>{item.question}</span>
      <ChevronDown
        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <p className="pb-4 pr-4 text-gray-600">{item.answer}</p>
    </div>
  </div>
);


// SECTION: Main Component

export const RegisteredAgentPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-sans">
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
                Receive a Free First Year of Registered Agent
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                A registered agent is required by law to maintain your business's compliance. Our service is fast, affordable, and helps ensure your state compliance.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {pricingPlans.map((plan, index) => <PricingCard key={index} plan={plan} />)}
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img src="https://i.ibb.co/68vD84T/phone-mockup.png" alt="Phone showing the Bizee app interface" className="max-w-xs md:max-w-sm w-full" />
            </div>
          </div>
        </section>
        
        {/* Startup Central Section */}
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto bg-slate-50 rounded-2xl grid md:grid-cols-2 items-center gap-8 p-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900">Bizee's Startup Central</h2>
              <p className="mt-2 text-gray-600">The media center. Guts, grit, and a game plan for launching your business.</p>
              <a href="#" className="mt-6 group inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors">
                Visit Bizee's Startup Central <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
             <img src="https://i.ibb.co/3k5fT9V/startup-central-assets.png" alt="Cards showing Business Ideas" className="w-full max-w-sm mx-auto"/>
          </div>
        </section>
        
        {/* Why Choose Bizee Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why choose Bizee Registered Agent?</h2>
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-orange-100 text-orange-600 font-bold rounded-full">
                    {index + 1}
                  </div>
                  <p className="text-gray-600 pt-1">{feature.text}</p>
                </div>
              ))}
            </div>
            <img src="https://i.ibb.co/q9P5wDq/bizee-woman-representative.png" alt="A friendly Bizee representative" className="rounded-lg w-full max-w-md mx-auto" />
          </div>
        </section>

        {/* Why You Need a Registered Agent Section */}
        <section className="px-6 py-16 md:py-24 bg-gray-50">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why You Need A Registered Agent</h2>
            <p className="mt-4 text-lg text-gray-600">A registered agent ensures you never miss crucial legal documents and compliance notices.</p>
          </div>
          <div className="mt-12 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Key questions and answers about Registered Agents</h3>
              <div className="border-t border-gray-200">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    item={item}
                    isOpen={openFaqIndex === index}
                    onClick={() => handleFaqClick(index)}
                  />
                ))}
              </div>
            </div>
            <a href="#" className="group relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <img src="https://i.ibb.co/N6BvyyM/video-thumbnail.png" alt="Video thumbnail for Registered Agent services" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"/>
              </div>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};