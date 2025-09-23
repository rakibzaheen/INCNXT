interface Benefit {
    title: string;
    description: string;
}

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

const PlusCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
);
// --- NEW ICONS for BenefitsSection ---
const LocationPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const physicalAddressBenefits: Benefit[] = [
    { title: 'Credibility', description: 'Boost credibility with a real U.S. street address at a premium, professional location.' },
    { title: 'Privacy', description: 'Keep your home address off the internet and out of the public record.' },
    { title: 'Compliance', description: 'Many states require a physical address to form. With Bizee, you can meet this requirement using a Business Virtual Address.' },
];

const mailHandlingBenefits: Benefit[] = [
    { title: 'Remote Access', description: 'View and organize your mail from anywhere.' },
    { title: 'Never Lose a Document Again', description: 'Have a digital record of all your mail, ready whenever you need it.' },
    { title: 'Save Time and Headaches', description: 'Let us open, scan, upload and shred your mail.' },
];

 const BenefitsSection: React.FC = () => {
    return (
        <div className="bg-white py-12 md:py-20">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <span className="text-sm font-bold text-orange-600 bg-orange-100 rounded-full px-4 py-2">
                    BENEFITS OF VIRTUAL ADDRESS
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Why Use a Virtual Address?</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    There are endless ways to use it, depending on who you are and how you work. But at its core, Bizee’s Virtual Address service comes down to two main features each with plenty of flexibility built in.
                </p>
            </div>
            <div className="max-w-5xl mx-auto px-4 mt-12">
                <h3 className="text-center font-semibold text-gray-800 mb-6 text-lg">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="border border-gray-200 rounded-2xl p-6 bg-rose-50/50 h-full">
                        <div className="text-center mb-6">
                             <div className="inline-block border border-orange-200 rounded-lg p-3 bg-white shadow-sm">
                                <LocationPinIcon />
                            </div>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 text-center mb-6">A physical street address where you don’t live or work:</h4>
                        <ul className="space-y-5">
                            {physicalAddressBenefits.map(benefit => (
                                <li key={benefit.title} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 mt-1"><PlusCircleIcon /></div>
                                    <div>
                                        <h5 className="font-semibold text-gray-800">{benefit.title}</h5>
                                        <p className="text-gray-600">{benefit.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Card 2 */}
                    <div className="border border-gray-200 rounded-2xl p-6 bg-rose-50/50 h-full">
                        <div className="text-center mb-6">
                             <div className="inline-block border border-orange-200 rounded-lg p-3 bg-white shadow-sm">
                                <MailIcon />
                            </div>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 text-center mb-6">Mail handling with digital scans and recordkeeping:</h4>
                        <ul className="space-y-5">
                            {mailHandlingBenefits.map(benefit => (
                                <li key={benefit.title} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 mt-1"><PlusCircleIcon /></div>
                                    <div>
                                        <h5 className="font-semibold text-gray-800">{benefit.title}</h5>
                                        <p className="text-gray-600">{benefit.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;