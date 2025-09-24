// src/components/ArticlesOfAmendment.tsx

import type { FC, SVGProps } from 'react';
import { Star, Building2, FileText, UserCheck, ShieldCheck, FileBadge, Library } from 'lucide-react';

// A simple phone mockup component to display images
const PhoneMockup: FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[550px] w-[270px] shadow-xl ${className}`}>
    <div className="w-[120px] h-[15px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[13px] top-[72px] rounded-s-lg"></div>
    <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
    <div className="h-[50px] w-[3px] bg-gray-800 absolute -end-[13px] top-[100px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
      {children}
    </div>
  </div>
);

// Define types for our data structures for better code quality
type FeatureInfo = {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  description: string;
};

// Data for the "When to File" section
const whenToFileFeatures: FeatureInfo[] = [
  {
    icon: Building2,
    title: 'Business Address, Name, or Member Info',
    description: 'Update your official records when your core business details change.',
  },
  {
    icon: FileText,
    title: 'Stated Business Purposes',
    description: 'Modify the scope of your business activities or purpose as your company evolves.',
  },
  {
    icon: UserCheck,
    title: 'Registered Agent or Authorized Shares',
    description: 'Change your registered agent or adjust the number of authorized shares.',
  },
];

// Data for the "Why It's Important" section
const whyToFileBenefits: FeatureInfo[] = [
  {
    icon: FileBadge,
    title: 'Maintain Legal Compliance',
    description: 'Keeping your LLC’s official records current ensures you remain in good standing with the state.',
  },
  {
    icon: ShieldCheck,
    title: 'Protect Liability Status',
    description: 'Accurate records help maintain your LLC’s limited liability protection by keeping business and personal affairs separate.',
  },
  {
    icon: Library,
    title: 'Ensure Accurate Public Records',
    description: 'Public records must reflect your current business information for legal and contractual accuracy.',
  },
];


export const ArticlesOfAmendment: FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-600 mb-4">
              <Star className="text-green-500 fill-current" />
              <span className="font-semibold">Excellent 4.7 out of 5</span>
              <span>•</span>
              <span>Trustpilot</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              File Articles of Amendment
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Here's how to change your LLC's name, address, or member information seamlessly.
            </p>
            <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              ARTICLES OF AMENDMENT
            </button>
          </div>
          <div>
            <PhoneMockup>
              <div className="p-6 bg-gray-50 h-full flex flex-col justify-center items-center text-center">
                <ShieldCheck className="w-20 h-20 text-green-500 mb-4" />
                <h3 className="font-bold text-xl mb-2">UPDATED</h3>
                <p className="text-gray-500 mb-4">Company Address</p>
                <div className="bg-white p-4 rounded-lg shadow-md w-full">
                  <p className="font-mono text-sm text-gray-700">123 Business Rd.<br/>Suite 100<br/>Anytown, USA 12345</p>
                </div>
              </div>
            </PhoneMockup>
          </div>
        </section>

      </div>
      
      {/* Social Proof Banner */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-gray-600">
          <p>
            Bootstrapped, Founder-Led, Independently Owned
            <span className="font-bold text-orange-500 mx-2">Since 2004</span>
            With Over
            <span className="font-bold text-orange-500 mx-2">1,000,000 Entrepreneurs</span>
            Served!
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">

        {/* What Are Articles of Amendment? Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="bg-white rounded-xl shadow-2xl p-4 max-w-sm mx-auto">
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-4">Company Changes</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                      <span className="font-semibold">Articles</span>
                      <span className="text-sm text-green-600 font-bold bg-green-100 px-2 py-1 rounded-full">Updated</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                      <span className="font-semibold">Bizee</span>
                      <span className="text-sm text-gray-500">No change</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">What Are Articles of Amendment?</h2>
            <p className="text-gray-600 leading-relaxed">
              Articles of Amendment are filed when a company makes a significant change to its founding documents, like the Articles of Organization, that were created when the business first formed. As your organization evolves, it's almost inevitable that you'll need to change some of the important parameters of your business. That’s where Articles of Amendment come in.
            </p>
          </div>
        </section>

        {/* When to File Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">When Do I Need to File Articles of Amendment?</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            You need to file Articles of Amendment with your Secretary of State when your LLC, C Corp, S Corp or nonprofit changes or modifies its:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {whenToFileFeatures.map((feature) => (
              <div key={feature.title} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-orange-100 text-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why It's Important Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-8">Why Is It Important to File?</h2>
            <ul className="space-y-6">
              {whyToFileBenefits.map((benefit) => (
                <li key={benefit.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-full p-2">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <PhoneMockup>
               <div className="p-6 bg-gray-50 h-full flex flex-col justify-center items-center text-center">
                <FileBadge className="w-20 h-20 text-blue-500 mb-4" />
                <h3 className="font-bold text-xl mb-2">RECORDS UPDATED</h3>
                <p className="text-gray-500 mb-4">Legal Compliance Maintained</p>
                 <div className="bg-green-100 p-4 rounded-lg shadow-md w-full text-center">
                  <p className="font-semibold text-green-800">Your entity is in good standing.</p>
                </div>
              </div>
            </PhoneMockup>
          </div>
        </section>

      </div>
    </div>
  );
};