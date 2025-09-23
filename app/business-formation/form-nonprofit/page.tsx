"use client"
import ClientReviewsSection from '@/app/components/ClientReviewsSection/ClientReviewsSection'
// import FAQSection from '@/app/components/FAQSection/FAQSection'
import IncnxtBenefits from '@/app/components/IncnxtBenefits/IncnxtBenefits'
import SCorpFormation from '@/app/components/SCorpFormation/SCorpFormation'
import SCorpFormationPage from '@/app/components/SCorpFormation/SCorpFormationPage'
import SCorpHeroSection from '@/app/components/SCorpFormation/SCorpHeroSection'
import SCorpFormationProcess from '@/app/components/SCorpFormationProcess/SCorpFormationProcess'
import VisionFocusExamples from '@/app/components/VisionFocusExamples/VisionFocusExamples'
import React from 'react'

const FormNonProfit = () => {
  return (
    <>
      <div className="">
        <SCorpHeroSection
          rating={4.8}
          totalRating={5}
          platform="Google Reviews"
          title="Start a Nonprofit with INCNXT"
          description="Complete business formation with lifetime support and no monthly fees. Get started today."
          buttonText="GET STARTED"
          buttonAction={() => console.log('LLC formation clicked')}
          imageUrl="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Entrepreneur at modern workspace"
          className="bg-white"
        />

        <SCorpFormation />
        <SCorpFormationPage />
        <SCorpFormationProcess />
        <VisionFocusExamples />
        <ClientReviewsSection />
        <IncnxtBenefits />
      </div>
    </>
  )
}

export default FormNonProfit
