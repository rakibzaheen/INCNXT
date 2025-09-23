"use client"
import React from 'react'
import LlcHeroSection from '@/app/components/FormLLC/LlcHeroSection';
import TypesOfLLCsSection from '@/app/components/TypesOfLLCsSection/TypesOfLLCsSection';
import LLCBenefitsSection from '@/app/components/LLCBenefitsSection/LLCBenefitsSection';
import FAQSection from '@/app/components/FAQSection/FAQSection';
import VisionFocusExamples from '@/app/components/VisionFocusExamples/VisionFocusExamples';
import DynamicHeroBanner from '@/app/components/DynamicHeroBanner/DynamicHeroBanner';


export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}


const FromLLC = () => {
  const bannerData = {
    id: 3,
    backgroundImage: "https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "LAUNCH YOUR NEXT BIG IDEA",
    subtitle: "Turn your vision into reality with expert support and powerful tools for growth.",
    buttonText: "START NOW",
    overlayOpacity: 0.6
  }


  const handleButtonClick = (bannerId: number) => {
    console.log(`Button clicked for banner ${bannerId}`);
  };

  const pageTitle = "LLC Formation FAQs";

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How long does it take to form an LLC?",
      answer:
        "Most LLCs are approved within 1–2 weeks depending on the state. Some states also offer expedited filing for an additional fee if you need it faster.",
    },
    {
      id: 2,
      question: "Do I need a business address to start an LLC?",
      answer:
        "Yes, every LLC must list a physical address for official state correspondence. If you don’t have one, our registered agent service can provide a business address.",
    },
    {
      id: 3,
      question: "What’s included in your LLC formation packages?",
      answer:
        "Our packages include name availability search, preparation and filing of formation documents, and digital copies of your state-approved paperwork. Premium plans also include registered agent services and compliance alerts.",
    },
    {
      id: 4,
      question: "Can I use my LLC to open a business bank account?",
      answer:
        "Yes. Once your LLC is approved, you’ll receive an EIN (Employer Identification Number) that allows you to open a dedicated business bank account and separate personal from business finances.",
    },
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
      <LlcHeroSection />
      <TypesOfLLCsSection />
      <LLCBenefitsSection />
      <VisionFocusExamples />
      <FAQSection
        title={pageTitle}
        faqData={faqs}
        contactCta={contactInfo}
      />
      <div className="bg-gray-50 p-4 sm:p-6 lg:p-2">
        <div className="max-w-7xl mx-auto space-y-8 ">
          <DynamicHeroBanner
            key={bannerData?.id}
            backgroundImage={bannerData?.backgroundImage}
            title={bannerData?.title}
            subtitle={bannerData?.subtitle}
            buttonText={bannerData?.buttonText}
            buttonAction={() => handleButtonClick(bannerData?.id)}
            overlayOpacity={bannerData?.overlayOpacity}
            className="min-h-[400px]"
          />
        </div>
      </div>
    </>
  )
}

export default FromLLC
