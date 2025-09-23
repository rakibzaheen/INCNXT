"use client"

import VisionFocusCTA from "./VisionFocusCTA";

const VisionFocusExamples: React.FC = () => {
  const handleLLCFormation = () => {
    console.log('LLC Formation clicked');
  }

  return (
    <div className="">

      {/* Default LLC Formation CTA */}
      <VisionFocusCTA
        title="You Focus on Your Vision, We Handle the Details"
        description="Launching a startup is a journey, and forming an LLC can provide the legal protection and tax benefits you need to succeed. If you're ready to take the next step, Incnxt is here to help. Join over 1,000,000 entrepreneurs who have chosen us to streamline their business formation process."
        onButtonClick={handleLLCFormation}
        buttonText="FORM YOUR LLC NOW"
        backgroundColor="white"
      />

    </div>
  );
};

export default VisionFocusExamples;