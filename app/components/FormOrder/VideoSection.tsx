'use client';

import React, { useState } from 'react';

const CheckIcon = () => (
    <div className="flex-shrink-0 bg-[#D51F27] rounded-full h-6 w-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);

// The list of features
const features = [
    { name: 'Streamlined Setup' },
    { name: 'Resource-Rich' },
    { name: 'Cost-Effective' },
    { name: 'Ongoing Compliance' },
    { name: 'Comprehensive Support' },
];

const VideoSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <section className="bg-[#352525] text-white font-sans rounded-3xl overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column: Text Content */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                INCNXT simplifies every step, so you can focus on what you do best
                            </h2>
                            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                                It&apos;s easy! INCNXT is your expert guide through each step.
                            </h3>
                            <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                                Filing a new business entity can be straightforward with the right help. INCNXT assists with the filing process, making it quick and ensuring it&apos;s done right—the first time.
                            </p>

                            <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-w-md mx-auto lg:mx-0">
                                {features.map((feature) => (
                                    <div key={feature.name} className="flex items-center gap-3">
                                        <CheckIcon />
                                        <span className="font-medium">{feature.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Video Player */}
                        <div className="relative flex justify-center items-center h-full min-h-[400px]">
                            
                            <div className="relative z-10 w-full max-w-[280px] cursor-pointer group" onClick={() => setIsModalOpen(true)}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        aria-label="Play video"
                                        className="bg-white rounded-full h-20 w-20 md:h-24 md:w-24 flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-110"
                                    >
                                        <svg className="h-8 w-8 md:h-10 md:w-10 text-black ml-1" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden mx-4" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75"
                            aria-label="Close video player"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <video width={"320"} height={"240"} src=""></video>
                    </div>
                </div>
            )}
        </>
    )
}

export default VideoSection;
