'use client';

import React from 'react';

// --- SVG Icons ---
// A simple component for the question mark icon
const QuestionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
);

// Icon for "Want both?"
const DocumentDuplicateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>
);

// Icon for Business Address
const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 bg-red-100 p-1 rounded">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <line x1="8" y1="4" x2="8" y2="20"></line>
        <line x1="16" y1="4" x2="16" y2="20"></line>
        <line x1="4" y1="12" x2="20" y2="12"></line>
    </svg>
);

// Icon for Personal Address
const PersonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 bg-red-100 p-1 rounded">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

// Icon for External Link
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-blue-600 transition-colors">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);


// --- Component 1: ServiceChooser ---
 const ServiceChooser: React.FC = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="space-y-6">
                {/* Section 1 */}
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <QuestionIcon />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">Need help choosing the right service?</h3>
                        <p className="text-gray-600 mt-1">If you&apos;re using a business name, go with a Business Virtual Address. If it&apos;s your own name, choose a Personal Virtual Address.</p>
                    </div>
                </div>

                <hr className="border-gray-200" />

                {/* Section 2 */}
                <div className="flex items-start space-x-4">
                     <div className="flex-shrink-0">
                        <DocumentDuplicateIcon />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">Want both?</h3>
                        <p className="text-gray-600 mt-1">No problem—just sign up for each one separately.</p>
                    </div>
                </div>

                 <hr className="border-gray-200" />

                {/* Section 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="#" className="group flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200">
                        <BuildingIcon />
                        <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900">Business Virtual Address</h4>
                            <p className="text-sm text-gray-500">Learn more about Business Virtual Addresses</p>
                        </div>
                        <ExternalLinkIcon />
                    </a>
                     <a href="#" className="group flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200">
                        <PersonIcon />
                        <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900">Personal Virtual Address</h4>
                            <p className="text-sm text-gray-500">Learn more about Personal Virtual Addresses</p>
                        </div>
                        <ExternalLinkIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceChooser;