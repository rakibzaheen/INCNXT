"use client";

import React from "react";
import SCorpHeroSection from "@/app/components/SCorpFormation/SCorpHeroSection";
import { VirtualAddressHero } from "@/app/components/VirtualAddressHero/VirtualAddressHero";
import FaqComponent from "@/app/components/FaqComponent/FqaComponet";
import DynamicHeroBanner from "@/app/components/DynamicHeroBanner/DynamicHeroBanner";

const TaxIdEin = () => {
  const bannerData = {
    id: 3,
    backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "LAUNCH YOUR NEXT IDEA",
    subtitle: "Turn your vision into reality with expert support and powerful tools for growth.",
    buttonText: "START NOW",
    overlayOpacity: 0.6
  }
  return (
    <div>
      <SCorpHeroSection
        rating={4.8}
        totalRating={5}
        platform="Google Reviews"
        title="Start a Tax with INCNXT"
        description="Complete business formation with lifetime support and no monthly fees. Get started today."
        buttonText="GET STARTED"
        buttonAction={() => console.log("LLC formation clicked")}
        imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Entrepreneur at modern workspace"
        className="bg-white"
      />

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
        // onBusinessClick={handleBusinessClick}
        // onPersonalClick={handlePersonalClick}
      />

      <FaqComponent />

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

export default TaxIdEin;
