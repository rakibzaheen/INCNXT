"use client"

import { useState , useEffect , useRef } from "react";
import React from 'react';

import { ChevronDown, } from "lucide-react";

const CustomSelect = ({
    id,
    label,
    value,
    options,
    onChange, 
}: {
    id: string,
    label: string,
    value: string,
    options: string[],
    onChange: (newValue: string) => void, 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) =>{
            if(selectRef.current && !selectRef.current.contains(event.target as Node)){
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown" , handleClickOutside);
        return () => {
            document.removeEventListener("mousedown" , handleClickOutside);
        };
    },[])
    return (
        <div ref={selectRef} className="relative w-full sm:w-72">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center w-full bg-white border-2 border-gray-300 rounded-xl h-20 text-left hover:border-[#D51F27] focus:outline-none focus:ring-2 focus:ring-[#D51F27] transition-all duration-300 ease-in-out shadow-sm"
            >
                <div className="flex items-center justify-center h-full w-16 bg-[#D51F27] text-white font-bold text-2xl rounded-l-lg">
                    {id}
                </div>
                <div className="pl-4 flex-grow">
                    <p className="text-xs text-gray-500 font-medium">{label}</p>
                    <p className="font-semibold text-gray-800 text-lg">{value}</p>
                </div>
                <ChevronDown
                    className={`mr-4 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                            className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-700"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;