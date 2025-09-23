"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, CreditCard } from 'lucide-react';

interface LLCType {
  id: string;
  title: string;
  description: string;
  isExpanded?: boolean;
}

const TypesOfLLCsSection: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string>('single-member');

  const llcTypes: LLCType[] = [
    {
      id: 'single-member',
      title: 'Single-Member LLC',
      description: 'Perfect for solo entrepreneurs. This type of LLC has one owner, providing the same benefits of liability protection and pass-through taxation as a multi-member LLC but with simplified management and operations.'
    },
    {
      id: 'multiple-member',
      title: 'Multiple-Member LLC',
      description: 'Ideal for partnerships and businesses with multiple owners. Offers shared ownership, flexible profit distribution, and collaborative decision-making while maintaining liability protection for all members.'
    },
    {
      id: 'member-managed',
      title: 'Member-Managed LLC',
      description: 'All members participate in the day-to-day management and decision-making of the business. This is the default management structure for most LLCs and works well for smaller businesses where all owners want to be involved.'
    },
    {
      id: 'manager-managed',
      title: 'Manager-Managed LLC',
      description: 'Designated managers (who may or may not be members) handle daily operations while other members act as passive investors. This structure is ideal for larger LLCs or when some members prefer not to be involved in daily management.'
    },
    {
      id: 'series',
      title: 'Series LLC',
      description: 'A unique structure that allows for multiple "series" or divisions within a single LLC, each with separate assets, liabilities, and business purposes. Only available in certain states and useful for real estate investors or businesses with multiple ventures.'
    },
    {
      id: 'restricted',
      title: 'Restricted LLC',
      description: 'A specialized type of LLC with certain restrictions on transferring membership interests. Often used for estate planning purposes or when members want to limit how ownership can be transferred to maintain control within a specific group.'
    },
    {
      id: 'l3c',
      title: 'L3C (Low-Profit Limited Liability Company)',
      description: 'A hybrid structure that blends the flexibility of an LLC with the social mission of a nonprofit. Designed for businesses that prioritize social or environmental goals while generating modest profits. Available in select states.'
    }
  ];

  const toggleExpansion = (id: string) => {
    setExpandedItem(expandedItem === id ? '' : id);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F395D] mb-4">
            Types of LLCs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding the different types of LLCs can help you choose the right 
            one for your startup.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Accordion */}
          <div className="space-y-3">
            {llcTypes.map((llcType) => {
              const isExpanded = expandedItem === llcType.id;
              
              return (
                <div
                  key={llcType.id}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleExpansion(llcType.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0F395D] focus:ring-inset rounded-lg"
                  >
                    <span className="font-semibold text-[#0F395D] text-sm sm:text-base">
                      {llcType.title}
                    </span>
                    <div className="flex-shrink-0 ml-4">
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {llcType.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] w-80 h-[600px] relative overflow-hidden">
                  
                  {/* Phone Screen Content */}
                  <div className="h-full flex flex-col">
                    
                    {/* Status Bar */}
                    <div className="flex justify-center items-center py-3 bg-white">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 py-4 border-b border-gray-100">
                      <h3 className="text-lg font-semibold text-[#0F395D] text-center">
                        LLC Formation
                      </h3>
                    </div>

                    {/* Success Message */}
                    <div className="px-6 py-6">
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                        <h4 className="text-lg font-semibold text-green-800 mb-2">
                          LLC Successfully Established!
                        </h4>
                        <p className="text-sm text-green-600">
                          Your business formation is complete
                        </p>
                      </div>
                    </div>

                    {/* Company Info Card */}
                    <div className="px-6 py-4">
                      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Company Name</span>
                          <span className="text-sm font-semibold text-[#0F395D]">Acme LLC</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Entity Type</span>
                          <span className="text-sm font-semibold text-[#0F395D]">Single-Member LLC</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">State</span>
                          <span className="text-sm font-semibold text-[#0F395D]">Delaware</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Status</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-semibold text-green-600">Active</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="px-6 py-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                            <CreditCard className="h-3 w-3 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-blue-900">Payment Confirmed</p>
                            <p className="text-xs text-blue-600">•••• •••• •••• 1234</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="px-6 py-4 mt-auto">
                      <button className="w-full bg-[#D51F27] text-white py-3 rounded-lg font-semibold hover:bg-[#ab0f16] transition-colors">
                        Download Documents
                      </button>
                    </div>

                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TypesOfLLCsSection;