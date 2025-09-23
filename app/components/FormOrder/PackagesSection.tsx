"use client"

import { Check, Minus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import React from 'react';

type FeatureId =
    | "filing" | "agent" | "address" | "expedited" | "contracts"
    | "ein" | "agreement" | "domain" | "phone" | "alerts"
    | "support" | "dashboard" | "banking" | "tax" | "form2553";

interface Feature {
    id: FeatureId;
    name: string;
}

interface Package {
    name: string;
    price: number;
    processingTime: string;
    isRecommended: boolean;
    features: {
        [key in FeatureId]: boolean | string;
    };
}

const features: Feature[] = [
    { id: "filing", name: "Preparing & Filing the Articles of Organization" },
    { id: "agent", name: "FREE 1st Year Registered Agent Service" },
    { id: "address", name: "FREE 1st Month of Virtual Address Service" },
    { id: "expedited", name: "Expedited Filing" },
    { id: "contracts", name: "Business Contract Templates" },
    { id: "ein", name: "EIN Business Tax Number" },
    { id: "agreement", name: "Operating Agreement" },
    { id: "domain", name: "Domain Name + Business Email" },
    { id: "phone", name: "FREE 1st Year Business Phone Number" },
    { id: "alerts", name: "Lifetime Compliance Alerts" },
    { id: "support", name: "Unlimited Phone & Email Support" },
    { id: "dashboard", name: "Online Access Dashboard" },
    { id: "banking", name: "Business Banking Account Offer" },
    { id: "tax", name: "Business Tax Consultation" },
    { id: "form2553", name: "IRS Form 2553" },
];

const packages: Package[] = [
    {
        name: "Basic",
        price: 0,
        processingTime: "1 week",
        isRecommended: false,
        features: {
            filing: true, agent: true, address: true, banking: true,
            expedited: "+ $100", contracts: "+ $150", ein: "+ $70",
            agreement: "+ $99", form2553: "+ $50",
            domain: false, phone: false, alerts: false, support: false,
            dashboard: false, tax: false,
        },
    },
    {
        name: "Standard",
        price: 199,
        processingTime: "1 week",
        isRecommended: true,
        features: {
            filing: true, agent: true, address: true, ein: true, agreement: true,
            alerts: true, support: true, dashboard: true, banking: true, tax: true,
            expedited: "+ $100", contracts: "+ $150",
            domain: false, phone: false, form2553: false,
        },
    },
    {
        name: "Premium",
        price: 299,
        processingTime: "2 days",
        isRecommended: false,
        features: {
            filing: true, agent: true, address: true, expedited: true, contracts: true,
            ein: true, agreement: true, domain: true, phone: true, alerts: true,
            support: true, dashboard: true, banking: true, tax: true, form2553: true,
        },
    },
];


// Helper to render feature status
const FeatureStatus = ({ status }: { status: boolean | string }) => {
    if (typeof status === 'string') {
        return <span className="bg-slate-200 text-[#0F395D] text-xs font-bold px-2 py-1 rounded-md">{status}</span>;
    }
    if (status) {
        return <Check className="text-[#0F395D] h-6 w-6" />;
    }
    return <Minus className="text-gray-400 h-6 w-6" />;
};


const PackagesSection = ({ stateName, stateFee }: { stateName: string, stateFee: number }) => {
    const [selectedPackageName, setSelectedPackageName] = useState("Standard");

    const selectedPackage = packages.find(p => p.name === selectedPackageName) || packages[0];
    const total = selectedPackage.price + stateFee;

    return (
        <div className="w-full max-w-7xl mx-auto py-16 px-4 sticky">
            <h2 className="text-center  text-4xl font-bold text-gray-800 mb-2">Business Formation Packages</h2>
            <p className="text-center text-gray-500 mb-12">Choose the best package that suits your needs.</p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="hidden lg:block lg:col-span-3 pt-32">
                    <div className="space-y-4">
                        {features.map((feature) => (
                            <div key={feature.id} className="h-12 flex items-center"><p className="text-gray-600 font-medium text-sm">{feature.name}</p></div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.name}
                            className={`rounded-2xl border-2 p-6 flex flex-col relative cursor-pointer transition-all duration-300 
                                ${selectedPackageName === pkg.name
                                    ? 'border-[#0F395D] shadow-2xl scale-105'
                                    : 'border-gray-200 hover:shadow-lg'
                                }`
                            }
                            onClick={() => setSelectedPackageName(pkg.name)}
                        >
                            {pkg.isRecommended &&
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D51F27]
                             text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    Recommended</div>}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-800">{pkg.name}</h3>
                                <p className="text-4xl font-extrabold text-[#0F395D] my-2">${pkg.price}</p>
                                <p className="text-xs text-gray-500">+ ${stateFee} state fee</p>
                                <p className="text-sm font-semibold text-gray-600 mt-2">{pkg.processingTime}</p>
                            </div>
                            <div className="space-y-4">
                                {features.map((feature) => (
                                    <div key={feature.id} className="h-12 flex justify-between items-center border-t border-gray-100">
                                        <p className="lg:hidden text-xs text-gray-500 font-semibold">{feature.name}</p>
                                        <div className="lg:w-full lg:flex lg:justify-center"><FeatureStatus status={pkg.features[feature.id]} /></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-1 lg:col-span-4 lg:col-start-10">
                    <div className="sticky top-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between"><p className="text-gray-600">{selectedPackage.name} Package</p><p className="font-semibold text-gray-800">${selectedPackage.price.toFixed(2)}</p></div>
                            <div className="flex justify-between"><p className="text-gray-600">{stateName} State Fee</p><p className="font-semibold text-gray-800">${stateFee.toFixed(2)}</p></div>
                            <div className="border-t border-gray-200 my-3"></div>
                            <div className="flex justify-between text-lg"><p className="font-bold text-gray-800">Total:</p><p className="font-extrabold text-[#0F395D]">${total.toFixed(2)}</p></div>
                        </div>
                        <Link href={`/process-coinfo`}>
                            <button className="w-full cursor-pointer bg-[#D51F27] text-white font-bold py-3 rounded-xl mt-6 hover:bg-[#D51F27] transition-colors duration-300 shadow-md">Get Started</button>
                        </Link>
                        <p className="text-xs text-gray-500 text-center mt-3"><span className="font-bold">One-time fee.</span> Unless company details change, annual fees will be the same next year.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackagesSection;
