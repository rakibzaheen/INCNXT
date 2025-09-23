// /components/SCorpFormationProcess.tsx

import type { FC, ReactNode } from 'react';

// Define the props for our reusable StepCard component
interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
  children: ReactNode; // This allows us to pass custom content for the right side
}

// A reusable card component for each step in the process
const StepCard: FC<StepCardProps> = ({ stepNumber, title, description, children }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-8">
      {/* Left side: Step details */}
      <div className="md:w-1/2 space-y-3 text-center md:text-left">
        <h3 className="text-5xl font-bold text-[#D51F27]">{stepNumber}</h3>
        <h4 className="text-2xl font-bold text-[#0F395D]">{title}</h4>
        <p className="text-gray-500">{description}</p>
      </div>
      {/* Right side: Visual content */}
      <div className="md:w-1/2 flex items-center justify-center min-h-[200px]">
        {children}
      </div>
    </div>
  );
};

// Main component that assembles the steps
const SCorpFormationProcess: FC = () => {
  return (
    <section className="bg-gray-50 font-sans p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          How to Form a S Corporation with incnxt in 3 Simple Steps
        </h2>

        <div className="space-y-8">
          {/* Step 01 */}
          <StepCard
            stepNumber="01"
            title="Choose Your Incorporation State"
            description="Rules and regulations vary by state, so make sure you know the state in which you want your business to be located. You don't have to choose the state you live in."
          >
            <div className="w-full max-w-xs bg-white rounded-lg p-4 space-y-2 border">
                {['LLC', 'C Corporation', 'S Corporation', 'Non Profit'].map((type) => (
                    <div 
                        key={type}
                        className={`flex items-center justify-between p-3 rounded-md ${
                            type === 'S Corporation'
                                ? 'bg-gray-800 text-white shadow-lg scale-105'
                                : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                        <span className="font-semibold">
                            {type}
                            {type === 'S Corporation' && <p className="text-xs font-normal text-gray-300">Save money on taxes</p>}
                        </span>
                        <span className={`flex items-center justify-center w-7 h-7 font-bold rounded ${
                             type === 'LLC' ? 'bg-[#0F395D] text-white' :
                             type === 'C Corporation' ? 'bg-yellow-400 text-white' :
                             type === 'S Corporation' ? 'bg-gray-600 text-white' :
                             'bg-blue-500 text-white'
                        }`}>
                           {type.charAt(0)}
                        </span>
                    </div>
                ))}
            </div>
          </StepCard>

          {/* Step 02 */}
          <StepCard
            stepNumber="02"
            title="Choose the Package"
            description="Whether you only need the basics or want more extensive business support, Bizee has the ideal business formation package to help you start and grow your corporation."
          >
            <div className="relative w-64 h-40">
                {/* Background cards */}
                <div className="absolute top-0 left-0 w-full h-full bg-white border rounded-lg transform -rotate-6 shadow-md"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-white border rounded-lg transform rotate-6 shadow-md"></div>
                {/* Foreground card */}
                <div className="absolute top-0 left-0 w-full h-full bg-white border-2 border-red-500 rounded-lg flex flex-col justify-between p-4 shadow-xl">
                    <div>
                        <p className="text-xs font-bold text-red-500">BEST VALUE</p>
                        <h5 className="text-xl font-bold text-gray-800">PREMIUM</h5>
                    </div>
                    <p className="text-sm text-gray-500">Full service to cover all the best...</p>
                </div>
            </div>
          </StepCard>

          {/* Step 03 */}
          <StepCard
            stepNumber="03"
            title="Tell Us About Your S Corporation"
            description="Complete an online order form with the details of your S Corp. You'll need to supply information about the roster of directors and information regarding stock, including the value of shares and number of shareholders."
          >
             <div className="relative w-64 h-40">
                {/* Background cards */}
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-lg transform -rotate-3 scale-95"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-lg transform rotate-3 scale-90"></div>
                {/* Foreground card */}
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white rounded-lg flex flex-col items-center justify-center p-4 shadow-2xl space-y-4">
                    <h5 className="text-3xl font-bold tracking-widest">ACME</h5>
                    <button className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-8 rounded-md transition-colors">
                        START
                    </button>
                </div>
             </div>
          </StepCard>
        </div>
      </div>
    </section>
  );
};

export default SCorpFormationProcess;