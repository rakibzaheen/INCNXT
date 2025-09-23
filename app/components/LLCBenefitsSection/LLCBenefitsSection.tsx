import React from 'react';
import { Plus, Minus, Shield, DollarSign, Users, FileText, Clock, AlertTriangle, Calculator, Building } from 'lucide-react';

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const LLCBenefitsSection: React.FC = () => {
  const prosData: BenefitItem[] = [
    {
      id: 'liability-protection',
      title: 'Limited Liability Protection',
      description: 'Protects personal assets from business debts and liabilities, providing a legal shield between personal and business finances.',
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 'pass-through-taxation',
      title: 'Pass-Through Taxation',
      description: 'Profits and losses flow directly to owners\' personal tax returns, avoiding double taxation that corporations face.',
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      id: 'flexible-management',
      title: 'Flexible Management',
      description: 'No required board of directors or formal meetings. Owners can structure management however works best for their business.',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 'no-ownership-restrictions',
      title: 'No Ownership Restrictions',
      description: 'Unlimited number of members with no restrictions on types of owners (individuals, corporations, other LLCs).',
      icon: <Building className="w-5 h-5" />
    },
    {
      id: 'enhanced-credibility',
      title: 'Enhanced Business Credibility',
      description: 'LLC designation adds legitimacy and professionalism, making it easier to work with vendors, customers, and lenders.',
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 'perpetual-existence',
      title: 'Perpetual Life Status',
      description: 'LLC continues to exist even if ownership changes, providing stability and continuity for long-term business planning.',
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const consData: BenefitItem[] = [
    {
      id: 'self-employment-taxes',
      title: 'Self-Employment Taxes',
      description: 'LLC members typically pay self-employment taxes on their share of profits, which can be higher than corporate tax rates.',
      icon: <Calculator className="w-5 h-5" />
    },
    {
      id: 'limited-record-keeping',
      title: 'Limited Record Keeping',
      description: 'Requires maintaining separate business records and bank accounts, plus annual state filings and potential fees.',
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 'dissolved-on-termination',
      title: 'Dissolved on Termination',
      description: 'In some states, LLC may dissolve when a member leaves unless operating agreement specifies otherwise.',
      icon: <AlertTriangle className="w-5 h-5" />
    }
  ];

  const BenefitCard: React.FC<{ item: BenefitItem; type: 'pro' | 'con' }> = ({ item, type }) => (
    <div className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        type === 'pro' ? 'bg-orange-100 text-[#D51F27]' : 'bg-gray-100 text-gray-600'
      }`}>
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-[#0F395D] mb-1">
          {item.title}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Card Container */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0F395D] mb-3">
              Benefits of an LLC (Pros vs. Cons)
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Every savvy entrepreneur knows that weighing the pros and cons is essential. 
              Let&apos;s dive into why an LLC could be your startup&apos;s best friend.
            </p>
          </div>

          {/* Pros vs Cons Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Pros Column */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              
              {/* Pros Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-[#D51F27] rounded-full flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F395D]">Pros</h3>
              </div>

              {/* Pros List */}
              <div className="space-y-2">
                {prosData.map((item) => (
                  <BenefitCard key={item.id} item={item} type="pro" />
                ))}
              </div>

            </div>

            {/* Cons Column */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              
              {/* Cons Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                  <Minus className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F395D]">Cons</h3>
              </div>

              {/* Cons List */}
              <div className="space-y-2">
                {consData.map((item) => (
                  <BenefitCard key={item.id} item={item} type="con" />
                ))}
              </div>

              {/* Note for fewer cons */}
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-700 text-center font-medium">
                  The benefits typically outweigh the drawbacks for most small businesses
                </p>
              </div>

            </div>

          </div>

          {/* Bottom CTA Section */}
          {/* <div className="mt-10 text-center">
            <h3 className="text-xl font-bold text-[#0F395D] mb-4">
              You Focus on Your Vision, We Handle the Formation
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ready to protect your personal assets and establish your business? 
              Let our experts guide you through the LLC formation process.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-[#D51F27] hover:bg-[#ab0f16] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#ab0f16]">
              Start Your LLC Today
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default LLCBenefitsSection;