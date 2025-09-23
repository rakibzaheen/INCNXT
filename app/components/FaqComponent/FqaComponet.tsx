'use client'; // Add this directive for Next.js App Router

import React, { useState, useEffect, useRef } from 'react';

// Define the type for a single FAQ section
interface FaqSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

// Your FAQ data. This can be fetched from a CMS or API.
const faqData: FaqSection[] = [
  {
    id: 'section-1',
    title: 'Notify the IRS?',
    content: (
      <>
        <h2>Do I Need to Notify the IRS If I Close My Business &apos;</h2>
        <p>Yes, you must inform the IRS about the dissolution by filing the final tax returns and checking the box indicating that it is the final return. This step ensures that the IRS knows the business is no longer operating. Submit the final income tax return for the LLC and any employment tax returns if you had employees. This includes Forms <a href="#">1065</a>, <a href="#">1120</a>, or <a href="#">1120S</a>, depending on your LLC&apos;s tax classification. Your EIN will remain assigned to your business even after it closes. However, the IRS will mark it as closed. This ensures that the EIN cannot be used for future business activities.</p>
      </>
    ),
  },
  {
    id: 'section-2',
    title: 'Cost to Dissolve?',
    content: (
      <>
        <h2>How Much Does It Cost to Dissolve an LLC?</h2>
        <p>The cost to dissolve an LLC varies significantly by state. Key costs include:</p>
        <ul>
            <li><strong>Filing fees.</strong> State filing fees for the Articles of Dissolution typically range from $20 to $200. The exact amount depends on the state where you registered your LLC.</li>
            <li><strong>Additional costs.</strong> You may need professional assistance to ensure all steps are completed correctly. If so, you could incur additional costs such as legal fees, accounting fees, and costs associated with settling debts and distributing assets.</li>
        </ul>
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 rounded-r-lg my-6 not-prose">
            <p className="!my-0">Each state has different requirements and fees for dissolving an LLC. It&#39;s important to research your specific state&#39;s process and fees to budget appropriately.</p>
        </div>
      </>
    ),
  },
  {
    id: 'section-3',
    title: 'Additional Considerations',
    content: (
      <>
        <h2>Additional Considerations for LLC Dissolution</h2>
        <p>Several other factors need to be considered when closing an LLC. These include settling all business debts, notifying creditors, and distributing any remaining assets to the members according to the operating agreement. Proper documentation of these steps is crucial for legal protection.</p>
      </>
    ),
  },
  {
    id: 'section-4',
    title: 'Canceling Licenses',
    content: (
      <>
        <h2>Canceling Licenses and Permits</h2>
        <p>Be sure to cancel all business licenses and permits to avoid future liabilities. This includes state and local business licenses, sales tax permits, and any industry-specific licenses. Failing to do so can result in penalties and fees, even after the business has been dissolved. Contact the issuing agencies to understand the cancellation procedures.</p>
      </>
    ),
  },
  {
    id: 'section-5',
    title: 'Conclusion',
    content: (
      <>
        <h2>Conclusion: Properly Dissolving an LLC</h2>
        <p>Properly dissolving an LLC is a multi-step process that requires careful attention to legal and financial details. By following the state-mandated procedures, notifying the IRS, and settling all obligations, you can ensure a clean and compliant closure of your business. Consulting with legal and tax professionals is highly recommended to navigate the complexities and avoid potential pitfalls. This ensures that your personal assets are protected and that you are not liable for future business debts or taxes.</p>
      </>
    ),
  },
];


// Left-side Table of Contents Component
interface TableOfContentsProps {
  sections: FaqSection[];
  activeSection: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections, activeSection }) => {
  return (
    <aside className="md:col-span-1">
      <nav id="faq-nav" className="sticky top-20">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`nav-link flex items-center justify-between p-3 rounded-lg border-2 border-transparent text-gray-600 hover:bg-gray-100 transition-all duration-200 ${
                  activeSection === section.id ? 'active-link' : ''
                }`}
              >
                <span>{section.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 transition-transform duration-200">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};


// Main FAQ Page Component
const FaqComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(faqData[0]?.id || '');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -65% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const currentRefs = sectionRefs.current.filter((ref): ref is HTMLElement => ref !== null);
    currentRefs.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      currentRefs.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* In a Next.js project, this <style> block should be moved to a global CSS file (e.g., globals.css) 
        and the font import should be handled by next/font.
      */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Inter', sans-serif;
        }
        .active-link {
          border-color: #3b82f6 !important; /* blue-500 */
          background-color: #eff6ff; /* blue-50 */
          color: #2563eb; /* blue-600 */
          font-weight: 600;
        }
        .active-link svg {
          transform: rotate(90deg);
          color: #2563eb; /* blue-600 */
        }
      `}</style>
      
      <div className="bg-gray-50 text-gray-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <header className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Find answers to common questions about our services, processes, and policies in one place.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            <TableOfContents sections={faqData} activeSection={activeSection} />

            <main className="md:col-span-3 prose prose-lg max-w-none prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-800">
              {faqData.map((section, index) => (
                <React.Fragment key={section.id}>
                  <section
                    id={section.id}
                    // ref={(el) => (sectionRefs.current[index] = el)}
                    className="scroll-mt-20"
                  >
                    {section.content}
                  </section>
                  {index < faqData.length - 1 && <hr className="my-12" />}
                </React.Fragment>
              ))}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqComponent;
