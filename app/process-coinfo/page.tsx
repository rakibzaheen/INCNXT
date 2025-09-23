// app/company-form/page.tsx (or wherever your page is)
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FloatingInput } from '../components/ui/FloatingInput';
import { FloatingSelect } from '../components/ui/FloatingSelect';
import { FloatingDatePicker } from '../components/ui/FloatingDatePicker';
import { AccordionItem } from '../components/ui/AccordionItem';

// --- Constants & Helpers ---

const ID_TYPE_OPTIONS = [
    { value: 'passport', label: 'Passport' },
    { value: 'national_id', label: 'National ID' },
    { value: 'driving_license', label: 'Driving License' },
    { value: 'birth_certificate', label: 'Birth Certificate' },
];

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

interface FileInputFieldProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileName?: string;
}

const FileInputField: React.FC<FileInputFieldProps> = ({ label, name, onChange, fileName }) => (
    <div>
        <span className="block text-sm font-medium text-gray-700 mb-2">{label}</span>
        <label
            htmlFor={name}
            className="relative cursor-pointer flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-5 text-center hover:border-[#D51F27] transition-colors"
        >
            <div className="space-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <div className="flex text-sm text-gray-600">
                    <span className="font-medium text-[#D51F27] hover:text-[#b81a21]">
                        {fileName ? 'Change file' : 'Upload a file'}
                    </span>
                    <input id={name} name={name} type="file" className="sr-only" onChange={onChange} />
                </div>
                {fileName && (
                    <p className="text-xs text-gray-500 truncate max-w-[200px] mx-auto">{fileName}</p>
                )}
            </div>
        </label>
    </div>
);

interface SummaryItemProps {
  label: string;
  value: string | React.ReactNode;
}

const SummaryItem: React.FC<SummaryItemProps> = ({ label, value }) => (
    <div className="flex justify-between items-center py-2">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium text-[#0F395D]">{value}</span>
    </div>
);

// --- Main Form Component ---

const CompanyFormPage = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>('q1');

    // Use Date | null for the date picker
    const [formData, setFormData] = useState({
        company_name: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        date_of_birth: null as Date | null,
        email: '',
        phone: '',
        address: '',
        id_type: '',
        id_number: '',
        id_scan_copy: null as File | null,
        id_holding_photo: null as File | null,
    });

    // Handle Text, Select, and Textarea
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle Date
    const handleDateChange = (date: Date | null) => {
        setFormData(prev => ({ ...prev, date_of_birth: date }));
    };

    // Handle Files
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        }
    };

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    // Framer Motion Variants for the main form entrance
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
            <motion.main
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >

                {/* --- Left Side: Main Form & Info --- */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Form Card */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-6 sm:p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-center text-[#0F395D] mb-10 tracking-tight">
                            Company Information
                        </h2>

                        <form className="space-y-6">
                            {/* Row 1: Company Name */}
                            <FloatingInput
                                label="Company Name"
                                id="company_name"
                                name="company_name"
                                value={formData.company_name}
                                onChange={handleChange}
                            />

                            {/* Row 2: First, Middle, Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <FloatingInput
                                    label="First Name"
                                    id="first_name"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                />
                                <FloatingInput
                                    label="Middle Name (Optional)"
                                    id="middle_name"
                                    name="middle_name"
                                    value={formData.middle_name}
                                    onChange={handleChange}
                                />
                                <FloatingInput
                                    label="Last Name"
                                    id="last_name"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Row 3: DOB, Email, Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <FloatingDatePicker
                                    label="Date of Birth"
                                    id="date_of_birth"
                                    selectedDate={formData.date_of_birth}
                                    onChange={handleDateChange}
                                />
                                <FloatingInput
                                    label="Email Address"
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <FloatingInput
                                    label="Phone Number"
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Row 4: ID Type & ID Number */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FloatingSelect
                                    label="ID Type"
                                    id="id_type"
                                    name="id_type"
                                    options={ID_TYPE_OPTIONS}
                                    value={formData.id_type}
                                    onChange={handleChange}
                                />
                                <FloatingInput
                                    label="ID Number"
                                    id="id_number"
                                    name="id_number"
                                    value={formData.id_number}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Row 5: Address (Textarea) */}
                            <FloatingInput
                                label="Residential Address"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                isTextArea
                            />

                            {/* Row 6: File Uploads */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <FileInputField
                                    label="Upload ID Scan Copy"
                                    name="id_scan_copy"
                                    onChange={handleFileChange}
                                    fileName={formData.id_scan_copy?.name}
                                />
                                <FileInputField
                                    label="Upload Photo Holding ID"
                                    name="id_holding_photo"
                                    onChange={handleFileChange}
                                    fileName={formData.id_holding_photo?.name}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex items-center justify-end pt-8">
                                <motion.button
                                    type="submit"
                                    className="px-10 py-4 bg-gradient-to-r from-[#D51F27] to-[#b81a21] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Submit Application
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Additional Explanation Card */}
                    <motion.div
                        className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold text-[#0F395D] mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-1">
                            <AccordionItem
                                question="What if the company name is unavailable?&quot;"
                                isOpen={openAccordion === 'q1'}
                                toggle={() => toggleAccordion('q1')}
                            >
                                In the event the company name is unavailable, we will contact you to request an alternative. We will work with you until we find a name accepted by the state.
                            </AccordionItem>
                            <AccordionItem
                                question="Does the company name require &quot;LLC&quot; or &quot;INC&quot;?"
                                isOpen={openAccordion === 'q2'}
                                toggle={() => toggleAccordion('q2')}
                            >
                                Yes, incorporated entities require a designator. The most typical designator for a Limited Liability Company is &quot;LLC&quot; and for Corporations it is &quot;INC&quot; or &quot;Corp.&quot;.
                            </AccordionItem>
                        </div>
                    </motion.div>
                </div>

                {/* --- Right Side: Order Summary --- */}
                <motion.div
                    className="lg:col-span-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 sticky top-8">
                        <h3 className="text-xl font-semibold text-[#0F395D] mb-6">Order Summary</h3>
                        <div className="space-y-3 text-sm">
                            <SummaryItem label="Entity Type" value="LLC Formation" />
                            <SummaryItem label="Filing Service" value="$199.00" />
                            <SummaryItem label="State Filing Fee (Estimate)" value="$236.00" />

                            <div className="border-t border-gray-100 my-4 pt-4 space-y-3">
                                <p className="font-medium text-gray-700 mb-2">Included in your package:</p>
                                <SummaryItem label="Banking Resolution" value={<CheckIcon />} />
                                <SummaryItem label="Operating Agreement" value={<CheckIcon />} />
                                <SummaryItem label="EIN / Tax ID Filing" value={<CheckIcon />} />
                                <SummaryItem label="Digital Document Delivery" value={<CheckIcon />} />
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-600">Lifetime Phone Support</span>
                                <CheckIcon />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9 AM - 6 PM CST</p>
                        </div>

                        <hr className="my-6 border-gray-200" />

                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-[#0F395D]">Total Due Today</span>
                            <span className="text-2xl font-bold text-[#0F395D]">$435.00</span>
                        </div>
                    </div>
                </motion.div>

            </motion.main>
        </div>
    );
}

export default CompanyFormPage;