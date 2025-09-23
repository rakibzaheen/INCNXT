"use client";
import DynamicHeroBanner from "@/app/components/DynamicHeroBanner/DynamicHeroBanner";
import FaqComponent from "@/app/components/FaqComponent/FqaComponet";
import FAQSection from "@/app/components/FAQSection/FAQSection";
import BenefitsSection from "@/app/components/VirtualAddressHero/BenefitsSection";
import LearningSection from "@/app/components/VirtualAddressHero/LearningSection";
import ServiceChooser from "@/app/components/VirtualAddressHero/ServiceChooser";
import { VirtualAddressHero } from "@/app/components/VirtualAddressHero/VirtualAddressHero";
import React from "react";


export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
const VirtualAddress = () => {

  const bannerData = {
    id: 3,
    backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "LAUNCH YOUR NEXT IDEA",
    subtitle: "Turn your vision into reality with expert support and powerful tools for growth.",
    buttonText: "START NOW",
    overlayOpacity: 0.6
  }
   const pageTitle = "Virtual Address FAQs";

    const faqs: FAQItem[] = [
      {
        id: 1,
        question: "What is a virtual business address?",
        answer:
          "A virtual address is a professional mailing address you can use for your business without needing a physical office. It allows you to receive mail, protect your privacy, and project a professional image.",
      },
      {
        id: 2,
        question: "Can I use a virtual address to register my business?",
        answer:
          "Yes, in most states a virtual address can be used as your business address when registering your company, except when a physical registered agent address is specifically required by law.",
      },
      {
        id: 3,
        question: "Will I be able to receive packages at my virtual address?",
        answer:
          "Yes, most virtual address services accept business mail and packages on your behalf. You’ll be notified and can choose to pick them up, forward them, or scan them digitally.",
      },
      {
        id: 4,
        question: "How do I access my mail with a virtual address?",
        answer:
          "Mail received at your virtual address is logged and managed through a secure online portal. You can view, request scanning, or forward your mail anytime from anywhere.",
      },
      {
        id: 5,
        question: "Is a virtual address the same as a registered agent?",
        answer:
          "No, a virtual address provides you with a professional mailing address, while a registered agent is a legal requirement in many states for receiving service of process and compliance documents.",
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

    // Handle navigation or action

  const handleBusinessClick = () => {
    console.log("Business virtual address clicked");
    // Handle navigation or action
  };

  const handlePersonalClick = () => {
    console.log("Personal virtual address clicked");
  };
  return (
    <div>
      <div className="bg-white">
        <VirtualAddressHero
          title="Get a Business or Personal "
          subtitle="Virtual Address?"
          description="Choose your virtual address in minutes. Start receiving mail like a pro."
          businessRating={{
            score: 4.8,
            totalRatings: 140867,
            platform: "ShopperApproved",
          }}
          personalRating={{
            score: 4.7,
            totalRatings: 22176,
            platform: "Trustpilot",
          }}
          onBusinessClick={handleBusinessClick}
          onPersonalClick={handlePersonalClick}
        />
         <BenefitsSection />

        {/* Additional sections would go here */}
        <FaqComponent />
        <div className="my-10">
          <ServiceChooser />
          <LearningSection />
        </div>
        <FAQSection
        title={pageTitle}
        faqData={faqs}
        contactCta={contactInfo}
      />
      </div>


      <div className="bg-gray-50 p-4 sm:p-6 lg:p-2">
        <div className="max-w-7xl mx-auto space-y-8 ">
          <DynamicHeroBanner
            key={bannerData?.id}
            backgroundImage={bannerData?.backgroundImage}
            title={bannerData?.title}
            subtitle={bannerData?.subtitle}
            buttonText={bannerData?.buttonText}
            // buttonAction={() => handleButtonClick(bannerData?.id)}
            overlayOpacity={bannerData?.overlayOpacity}
            className="min-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualAddress;
