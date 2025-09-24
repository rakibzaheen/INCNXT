"use client";

// SupportPage.tsx
import React, { useState, FormEvent, FC } from 'react';
import { FiChevronRight, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

// Type definitions for form state and errors
interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  orderNumber: string;
  message: string;
  agreeToTerms: boolean;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

// A simple SVG component for the Texas map graphic
const TexasMap: FC = () => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-sm mx-auto text-brand-orange"
    aria-label="Map of Texas"
  >
    <path
      fill="currentColor"
      d="M86.1,43.2L77,38.5l-4.2-9.7l-4-9.2L60,11.3l-10.2,1l-8.5-4L29,11.8l-7.7,6.8L12.9,23l-3,6.2l-3,10.6l-2.4,12.4 l3.7,11.3l8,6.8l8,2.7l13.5-1.9l11.6-4.5l6.5,2.4l7.1,7.2l4.8,3.7l6.7-5.4l2.5-9.4L86.1,43.2z"
    />
    <circle cx="55" cy="65" r="5" fill="#FFFFFF" />
    <circle cx="55" cy="65" r="3" fill="currentColor" />
  </svg>
);

// Main component
export const SupportPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    reason: '',
    orderNumber: '',
    message: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.reason) newErrors.reason = 'Please select a reason.';
    if (!formData.message) newErrors.message = 'Message is required.';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms.';
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      console.log('Form data submitted:', formData);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Your message has been sent!');
        // Reset form if needed
      }, 2000);
    }
  };
  
  const SupportLink = ({ children }: { children: React.ReactNode }) => (
    <a
      href="#"
      className="flex items-center justify-between w-full p-4 text-left bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-colors"
    >
      <span className="font-medium text-gray-800">{children}</span>
      <FiChevronRight className="w-5 h-5 text-gray-500" />
    </a>
  );

  const ContactInfoItem = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => (
     <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
      <div className="text-brand-orange">{icon}</div>
      <div className="text-gray-700">{children}</div>
    </div>
  );

  return (
    <div className="bg-gray-50 font-sans">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* --- Top Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column: Support Info & Links */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Exceptional Support for Your Success
            </h1>
            <p className="text-gray-600 text-lg">
              No AI bots, only real people. Our US-based dedicated support team is here to
              assist you in both English and Spanish, ensuring you get the personalized
              help you need. Reach out to us Monday through Friday, from 9 a.m. to 6 p.m. CST.
            </p>
            <div className="space-y-3 pt-4">
              <SupportLink>View my business documents</SupportLink>
              <SupportLink>View my receipts</SupportLink>
              <SupportLink>View my CIN</SupportLink>
              <SupportLink>View my Registered Agent information</SupportLink>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 border border-gray-200 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                  <input type="text" id="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-orange/50`} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/50" />
                </div>
              </div>
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <input type="email" id="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-orange/50`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Contact Reason*</label>
                <select id="reason" value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})} className={`w-full px-3 py-2 border bg-white rounded-md ${errors.reason ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-orange/50`}>
                  <option value="">Select</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                </select>
                {errors.reason && <p className="text-red-500 text-xs mt-1">{errors.reason}</p>}
              </div>
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-1">Order number</label>
                <input type="text" id="orderNumber" value={formData.orderNumber} onChange={e => setFormData({...formData, orderNumber: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                <textarea id="message" rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className={`w-full px-3 py-2 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-orange/50`}></textarea>
                 {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="agreeToTerms" type="checkbox" checked={formData.agreeToTerms} onChange={e => setFormData({...formData, agreeToTerms: e.target.checked})} className={`w-4 h-4 text-brand-orange border-gray-300 rounded focus:ring-brand-orange ${errors.agreeToTerms ? 'border-red-500' : ''}`} />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="text-gray-600">
                    I agree to the <a href="#" className="font-medium text-brand-orange hover:underline">Terms of Service</a> and <a href="#" className="font-medium text-brand-orange hover:underline">Privacy Policy</a>.
                  </label>
                   {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="bg-white p-8 md:p-12 border border-gray-200 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
             {/* Left Column: Map */}
             <div className="text-center">
                <TexasMap />
                <h3 className="mt-4 text-2xl font-bold text-gray-800">BIZEE LLC</h3>
             </div>

            {/* Right Column: Contact Details */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Contact Bizee</h2>
                <p className="text-gray-600">
                    You can expect a real person to answer your questions and provide the help you need. 
                    Bizee's entire customer support team is fluent in both English and Spanish.
                </p>
                <div className="text-sm font-semibold text-gray-500 bg-gray-100 p-2 rounded-md inline-block">
                    Monday - Friday from 9 a.m. to 6 p.m. CST
                </div>
                <div className="space-y-4 pt-2">
                    <ContactInfoItem icon={<FiPhone size={24} />}>
                        <a href="tel:844-830-8267" className="font-semibold text-lg hover:text-brand-orange transition-colors">844-830-8267</a>
                    </ContactInfoItem>
                    <ContactInfoItem icon={<FiMail size={24} />}>
                        <a href="mailto:support@incfile.com" className="font-semibold text-lg hover:text-brand-orange transition-colors">support@incfile.com</a>
                    </ContactInfoItem>
                    <ContactInfoItem icon={<FiMapPin size={24} />}>
                       <div>
                         <p className="font-semibold text-lg">17350 State Highway 249, Suite 220</p>
                         <p>Houston, TX 77064</p>
                       </div>
                    </ContactInfoItem>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};