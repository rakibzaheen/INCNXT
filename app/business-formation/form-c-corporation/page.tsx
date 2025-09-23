"use client";
import React from "react";
import ClientReviewsSection from "@/app/components/ClientReviewsSection/ClientReviewsSection";
import IncnxtBenefits from "@/app/components/IncnxtBenefits/IncnxtBenefits";
import SCorpFormationPage from "@/app/components/SCorpFormation/SCorpFormationPage";
import SCorpHeroSection from "@/app/components/SCorpFormation/SCorpHeroSection";
import SCorpFormationProcess from "@/app/components/SCorpFormationProcess/SCorpFormationProcess";
import VisionFocusExamples from "@/app/components/VisionFocusExamples/VisionFocusExamples";
import FAQSection from "@/app/components/FAQSection/FAQSection";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FormCCorporation = () => {

  const pageTitle = "C Corporation Formation FAQs";

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How long does it take to form a C Corporation?",
      answer:
        "Formation times vary by state, but most C Corporations are approved within 1–2 weeks. Many states also offer expedited filing services for an additional fee.",
    },
    {
      id: 2,
      question: "Do I need a business address to start a C Corporation?",
      answer:
        "Yes, every C Corporation must list a physical address for official state and federal correspondence. If you don’t have one, our registered agent service can provide a business address.",
    },
    {
      id: 3,
      question: "What’s included in your C Corporation formation packages?",
      answer:
        "Our packages include a name availability search, preparation and filing of incorporation documents, digital copies of state-approved paperwork, and optional registered agent services.",
    },
    {
      id: 4,
      question: "Can I use my C Corporation to open a business bank account?",
      answer:
        "Yes. After your C Corporation is approved and you’ve received your EIN (Employer Identification Number), you can open a dedicated business bank account for your company.",
    },
  ];

  const contactInfo = (
    <p className="text-gray-600">
      Didn&apos;t find the answer here? Don&apos;t hesitate to{" "}
      <a
        href="#contact"
        className="text-green-500 hover:text-green-600 font-medium underline decoration-2 underline-offset-2 transition-colors"
      >
        Contact Us
      </a>{" "}
      and we&apos;ll be more than happy to help you!
    </p>
  );

  return (
    <>
      <div className="">
        <SCorpHeroSection
          rating={4.8}
          totalRating={5}
          platform="Google Reviews"
          title="Launch Your LLC in Minutes"
          description="Complete business formation with lifetime support and no monthly fees. Get started today."
          buttonText="GET STARTED"
          buttonAction={() => console.log("LLC formation clicked")}
          imageUrl="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          imageAlt="Entrepreneur at modern workspace"
          className="bg-white"
        />

        <SCorpFormationPage />
        <SCorpFormationProcess />
        <VisionFocusExamples />
        <ClientReviewsSection />
        <IncnxtBenefits />
        <FAQSection title={pageTitle} faqData={faqs} contactCta={contactInfo} />
      </div>
    </>
  );
};

export default FormCCorporation;
