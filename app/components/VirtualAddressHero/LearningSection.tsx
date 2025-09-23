'use client';

import React from 'react';

// Icon for Checkmark
const CheckIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

// Icon for X
const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

 const LearningSection: React.FC = () => {
    return (
        <div className="bg-sky-50 rounded-xl p-6 md:p-8 max-w-4xl mx-auto m-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Still Learning about Virtual Addresses?</h2>
            <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-white border-2 border-sky-200 rounded-lg p-4">
                    <div className="flex-shrink-0 bg-sky-100 p-2 rounded-full">
                        <CheckIcon />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">What it is:</h3>
                        <p className="text-gray-600 mt-1">A real street address with a unique suite number where your mail gets received, scanned, and uploaded to your virtual mailbox. You can view everything online. We hold the physical mail for 1-2 weeks, then securely shred it.</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4 bg-white border-2 border-sky-200 rounded-lg p-4">
                    <div className="flex-shrink-0 bg-sky-100 p-2 rounded-full">
                        <XIcon />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">What a virtual address isnt&rsquo;</h3>
                        <p className="text-gray-600 mt-1">Its not a PO Box or a physical address you can visit. It&apos;s also not for accepting packages.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearningSection;