// components/ui/FloatingInput.tsx
import React from 'react';

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  id: string;
  isTextArea?: boolean;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({ label, id, isTextArea = false, className = '', ...props }) => {
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <InputComponent
        id={id}
        placeholder=" "
        {...props}
        className={`peer block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-[#0F395D] placeholder-transparent shadow-sm transition-all focus:border-[#e2ddde] focus:outline-none focus:ring-2 focus:ring-[#e0dada] disabled:cursor-not-allowed disabled:bg-gray-50 ${
          isTextArea ? 'pt-4' : 'h-14 pt-6'
        } ${className}`}
      />
      <label
        htmlFor={id}
        className={`absolute left-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#251314] ${
          isTextArea ? 'peer-placeholder-shown:top-6' : 'peer-placeholder-shown:top-1/2'
        }`}
      >
        {label}
      </label>
    </div>
  );
};