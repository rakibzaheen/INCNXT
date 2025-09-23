// components/AccordionItem.tsx
'use client';

import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';


interface AccordionItemProps {
  title: string;
}

const AccordionItem = ({ title }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm mb-3">
      <button
        className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {/* You can add hidden content here that appears when isOpen is true */}
    </div>
  );
};

export default AccordionItem;