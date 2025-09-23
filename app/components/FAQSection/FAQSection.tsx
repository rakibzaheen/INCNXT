"use client"

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import React from 'react';
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
interface FAQSectionProps {
  title: string;
  faqData: FAQItem[];
  contactCta: React.ReactNode; 
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, faqData, contactCta }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(faqData?.length > 0 ? faqData[0].id : null);

  const toggleFaq = (faqId: number) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 font-sans">
      {/* Section Title (from props) */}
      <h2 className="text-3xl font-bold text-[#0F395D] mb-8">
        {title}
      </h2>

      {/* FAQ Items (from props) */}
      <div className="space-y-2">
        {faqData?.map((faq) => (
          <div 
            key={faq.id} 
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Question Button */}
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0F395D] focus:ring-inset"
              onClick={() => toggleFaq(faq.id)}
              aria-expanded={openFaq === faq.id}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <div className="flex items-start space-x-4">
                <span className="text-[#0F395D] font-semibold text-lg leading-none pt-0.5">
                  {String(faq.id).padStart(2, '0')}
                </span>
                <span className="font-medium text-[#0F395D] text-left leading-relaxed">
                  {faq.question}
                </span>
              </div>
              <ChevronDown 
                className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                  openFaq === faq.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Answer Panel */}
            <div
              id={`faq-answer-${faq.id}`}
              className={`transition-all duration-300 ease-in-out ${
                openFaq === faq.id 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-6 pb-4 pl-14">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA (from props) */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        {contactCta}
      </div>
    </div>
  );
};

export default FAQSection;
