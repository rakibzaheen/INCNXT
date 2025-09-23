"use client"

import React from 'react';
import { Star } from "lucide-react";
import { useState } from "react";
import PackagesSection from "@/app/components/FormOrder/PackagesSection";
import CustomSelect from "@/app/components/FormOrder/CustomSelect";
import VideoSection from "@/app/components/FormOrder/VideoSection";
import Testimonials from '@/app/components/FormOrder/Testimonials';
import FAQSection from '@/app/components/FAQSection/FAQSection';

const statesData = [
  { name: "Louisiana", fee: 105 },
  { name: "Illinois", fee: 150 },
  { name: "California", fee: 70 },
  { name: "Florida", fee: 125 },
  { name: "New York", fee: 200 },
  { name: "Texas", fee: 300 },
];

const entityTypes = ["LLC", "S Corporation", "C Corporation", "Nonprofit"];


export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FormOrder = () => {

  const [selectedEntityType, setSelectedEntityType] = useState(entityTypes[0]);
  const [selectedState, setSelectedState] = useState(statesData[0]);


  const handleStateChange = (newStateName: string) => {
    const newState = statesData.find(s => s.name === newStateName) || statesData[0];
    setSelectedState(newState);
  };

  const stateNameOptions = statesData.map(s => s.name);



  //FQA
  const pageTitle = "Frequently Asked Questions";

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Is the package price ongoing or a one-time fee?",
      answer: "The prices referenced in all of our formation packages are a one-time fee unlike some of our more unsavory competitors our goal is not to trap our clients into a perpetual never-ending subscription but rather to provide fair upfront transparent pricing. While other companies attempt to build their businesses on the idea that the consumer is an idiot our business has been built over decades on the premise of always providing value-driven affordable solutions for entrepreneurs."
    },
    {
      id: 2,
      question: "Do I need to pay extra for compliance notifications?",
      answer: "No, compliance notifications are included in our Standard and Premium packages at no additional cost. These notifications help keep your business in good standing with state requirements and deadlines."
    },
    {
      id: 3,
      question: "Will I have the option to act as my own registered agent?",
      answer: "Yes, you can choose to act as your own registered agent. However, we recommend using our registered agent service for privacy, convenience, and to ensure you never miss important legal documents."
    },
    {
      id: 4,
      question: "Will I need to sign anything?",
      answer: "Yes, you'll need to electronically sign the formation documents and authorize us to file on your behalf with the state. This is a secure digital process that can be completed online."
    }
  ];

  const contactInfo = (
    <p className="text-gray-600">
      Didn&apos;t find the answer here? Don&apos;t hesitate to{' '}
      <a
        href="#contact"
        className="text-green-500 hover:text-green-600 font-medium underline decoration-2 underline-offset-2 transition-colors"
      >
        Contact Us
      </a>{' '}
      and we&apos;ll be more than happy to help you!
    </p>
  );
  return (
    <>
      {/* <BusinessTypeSelector /> */}
      <div className="min-h-screen max-w-7xl mx-auto bg-gray-50 font-sans mt-5">
        {/* --- Top Section --- */}
        <div className="bg-white p-8 sm:p-12 md:p-16 rounded-b-3xl shadow-lg border-b border-gray-100">
          <div className="max-w-4xl w-full mx-auto">
            <div className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm mx-auto mb-8 w-fit">
              <span className="font-semibold">Excellent 4.7 out of 5</span>
              <Star className="text-[#0F395D] fill-current h-5 w-5" />
              <span className="font-bold">Trustpilot</span>
            </div>
            <h1 className="text-6xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F395D] text-center tracking-tight leading-tight">
              START YOUR BUSINESS
              <br />
              WITH <span className="text-[#0F395D]">CONFIDENCE</span>
            </h1>
            <p className="text-center mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Join over 1,000,000 happy business owners. Get started by choosing your entity type and state of formation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
              <CustomSelect id="1" label="Entity Type" value={selectedEntityType} options={entityTypes} onChange={setSelectedEntityType} />
              <CustomSelect id="2" label="State" value={selectedState.name} options={stateNameOptions} onChange={handleStateChange} />
            </div>
          </div>
        </div>

        {/* --- Package Section --- */}

        <PackagesSection stateName={selectedState.name} stateFee={selectedState.fee} />

        {/* FQA Section */}

        <FAQSection
          title={pageTitle}
          faqData={faqs}
          contactCta={contactInfo}
        />

        {/* Video Section  */}

        <VideoSection />

        {/* Testimonials Section*/}

        <Testimonials />

        

      </div>
    </>
  )
}

export default FormOrder
