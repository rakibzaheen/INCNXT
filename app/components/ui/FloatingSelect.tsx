// components/ui/FloatingSelect.tsx
import React from 'react';

interface FloatingSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: { value: string; label: string }[];
}

export const FloatingSelect: React.FC<FloatingSelectProps> = ({ label, id, options, className = '', ...props }) => {
  return (
    <div className="relative">
      <select
        id={id}
        {...props}
        // Use an empty value for the placeholder effect
        defaultValue=""
        className={`peer block w-full h-14 pt-6 pb-1 px-4 rounded-lg border border-gray-300 bg-transparent text-[#0F395D] shadow-sm transition-all focus:border-[#D51F27] focus:outline-none focus:ring-2 focus:ring-[#D51F27] appearance-none ${className}`}
      >
        <option value="" disabled hidden></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* Custom Dropdown Arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.575 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.533 0.481-1.408 0.481-1.942 0l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z" />
        </svg>
      </div>

      <label
        htmlFor={id}
        className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#D51F27]"
      >
        {label}
      </label>
    </div>
  );
};