import { AlertCircle, Building, Clock, Users } from 'lucide-react';
import React, { useState } from 'react';

interface FormData {
    businessName: string;
    entityType: string;
}

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    iconColor: string;
}

const SCorpFormationPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        businessName: '',
        entityType: 'S Corp'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEntityTypeChange = (entityType: string) => {
        setFormData(prev => ({ ...prev, entityType }));
    };

    const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, iconColor }) => (
        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className={`flex-shrink-0 w-10 h-10 rounded-full ${iconColor} flex items-center justify-center`}>
                {icon}
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-[#0F395D] mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Banner */}
            <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center text-sm text-gray-600">
                        <span className="font-medium">Bootstrapped. Founder Led. Independently Owned</span>
                        <span className="text-[#0F395D] font-semibold mx-1">Since 2004</span>
                        <span>With</span>
                        <span className="text-[#0F395D] font-semibold mx-1">Over 1,000,000 Entrepreneurs</span>
                        <span>Served!</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column - Information */}
                    <div className="space-y-8">

                        {/* Main Title */}
                        <div>
                            <h1 className="text-4xl font-bold text-[#0F395D] mb-6 leading-tight">
                                Effortless S Corp Formation with<br />
                                No Fees, No Hassles
                            </h1>
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-6">
                            <InfoCard
                                icon={<AlertCircle className="w-5 h-5 text-white" />}
                                iconColor="bg-[#0F395D]"
                                title="Forming an S Corp Can Be Complicated and Expensive"
                                description="S Corp registration is a complex process as federal and state governments require you to meet various conditions, rules and regulations. And your request can be rejected due to one simple mistake."
                            />

                            <InfoCard
                                icon={<Clock className="w-5 h-5 text-white" />}
                                iconColor="bg-[#0F395D]"
                                title="Save Money & Time With Incnxt's Free S Corp Formation"
                                description="While some providers charge $149+, we don't charge a thing. Incnxt can pass the savings back to you. S corp costs can also for fee and spend your valuable time and money on what really matters - growing your business."
                            />
                        </div>

                        {/* Additional Info Below Form */}
                        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
                            <div className="flex items-start space-x-3">
                                <Building className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-blue-900 mb-2">Why Choose S Corp?</h3>
                                    <ul className="text-sm text-blue-800 space-y-1">
                                        <li>• Tax savings on self-employment taxes</li>
                                        <li>• Pass-through taxation benefits</li>
                                        <li>• Enhanced credibility with customers</li>
                                        <li>• Limited liability protection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Process Steps */}
                        <div className="mt-8 bg-gray-100 rounded-lg p-6">
                            <h3 className="font-semibold text-[#0F395D] mb-4 flex items-center">
                                <Users className="w-5 h-5 mr-2 text-gray-600" />
                                Simple 3-Step Process
                            </h3>
                            <div className="space-y-3 text-sm text-gray-700">
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-[#0F395D] text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                                    <span>Fill out your business information</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-[#0F395D] text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                                    <span>We prepare and file your documents</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-[#0F395D] text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                                    <span>Receive your official business documents</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:pl-8">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sticky  top-8">

                            {/* Incnxt Logo/Brand */}
                            <div className="text-right mb-6">
                                <span className="text-2xl font-bold text-[#0F395D]">Incnxt</span>
                            </div>

                            {/* Form Title */}
                            <h2 className="text-2xl font-bold text-[#0F395D] mb-8 text-center">
                                Form Your Business
                            </h2>

                            <div className="space-y-6">

                                {/* Business Name Input */}
                                <div>
                                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Business Name
                                    </label>
                                    <input
                                        type="text"
                                        id="businessName"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleInputChange}
                                        placeholder="Acme Design"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F395D] focus:border-[#0F395D] transition-colors"
                                        required
                                    />
                                </div>

                                {/* Entity Type Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-4">
                                        Entity Type
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {['C Corp', 'S Corp', 'Nonprofit', 'LLC'].map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => handleEntityTypeChange(type)}
                                                className={`px-4 py-3 text-sm font-medium rounded-lg border-2 transition-all duration-200 ${formData.entityType === type
                                                        ? 'border-[#0F395D] bg-orange-50 text-orange-700'
                                                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-[#0F395D] hover:bg-[#ab0f16] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#ab0f16]"
                                >
                                    Start Your S Corp Formation
                                </button>

                                {/* Trust Indicators */}
                                <div className="text-center pt-4">
                                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>SSL Secured</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>No Hidden Fees</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>Fast Processing</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default SCorpFormationPage;