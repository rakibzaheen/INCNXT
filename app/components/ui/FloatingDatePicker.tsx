// components/ui/FloatingDatePicker.tsx
'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';

interface FloatingDatePickerProps {
  label: string;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  id: string;
}

export const FloatingDatePicker: React.FC<FloatingDatePickerProps> = ({ label, selectedDate, onChange, id }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = !!selectedDate;

  const shouldFloat = isFocused || hasValue;

  return (
    <div className="relative">
      <DatePicker
        id={id}
        selected={selectedDate}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        dateFormat="MMMM d, yyyy"
        className="peer block w-full h-14 pt-6 pb-1 px-4 rounded-lg border border-gray-300 bg-transparent text-[#0F395D] shadow-sm transition-all focus:border-[#D51F27] focus:outline-none focus:ring-2 focus:ring-[#D51F27]"
        wrapperClassName="w-full"
        showPopperArrow={false}
      />

      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          top: shouldFloat ? '8px' : '50%',
          y: shouldFloat ? '-50%' : '-50%',
          scale: shouldFloat ? 0.75 : 1,
          x: shouldFloat ? '-8px' : '0px',
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className={`absolute left-4 z-10 origin-[0] transform bg-white px-2 text-sm duration-300 ${
          shouldFloat ? 'text-[#D51F27]' : 'text-gray-500'
        } pointer-events-none`}
      >
        {label}
      </motion.label>
    </div>
  );
};