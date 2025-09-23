// components/LLCDissolutionGuide.tsx
import AccordionItem from '@/app/components/AccordionItem/AccordionItem';
import { dissolutionSteps } from '@/data/llc-dissolution';
import Image from 'next/image';

const LLCDissolutionGuide = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How to Dissolve an LLC
          </h1>
          <p className="text-xl text-gray-600">
            Dissolving an LLC involves several key steps.
          </p>
        </div>

        {/* Steps Container */}
        <div className="space-y-20 lg:space-y-28">
          {dissolutionSteps.map((step, index) => {
            // Alternate layout: Even index = image left, Odd index = image right
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={step.id}
                className={`flex flex-col items-center gap-12 lg:gap-16 ${
                  isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Column */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2">
                  <h2 className="flex items-start text-2xl font-bold text-gray-900 mb-6">
                    <span className="text-[#0F395D] mr-2">{step.id}.</span>
                    {step.title}
                  </h2>
                  <div className="mt-4">
                    {step.accordionItems.map((itemTitle, itemIndex) => (
                      <AccordionItem key={itemIndex} title={itemTitle} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LLCDissolutionGuide;