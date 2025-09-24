"use client";
import React from 'react';
import { FloatingInput } from '../components/ui/FloatingInput';
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row">
      {/* Left Side: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-10">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <Image src="/logo.svg" alt="INCNXT Logo" width={28} height={28} className="h-7 ml-3" />
            </Link>
          </div>

          <h2 className="text-3xl font-bold mb-2 text-[#0F395D]">Sign in to INCNXT</h2>
          <p className="text-gray-600 mb-8">Start your journey with INCNXT.</p>
          
          <form className="space-y-6">
            <FloatingInput label="Email" id="email" type="email" className="text-black" />
            <FloatingInput label="Password" id="password" type="password" className="text-black" />
            
            <button 
              type="submit" 
              className="w-full bg-[#D51F27] hover:bg-[#D51F27] text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
            >
              Sign In
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Don&apos;t have an account yet? <Link href="/signup" className="text-[#0F395D] hover:underline font-semibold">Launch your business today</Link>.
          </p>
        </div>
      </div>

      {/* Right Side: Image and Marketing Text */}
      <div className="hidden md:block w-1/2 bg-gray-100 relative">
        <Image 
          src="/img/startup-central-banner.webp
          " 
          alt="INCNXT Dashboard"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 p-12 text-white bg-gradient-to-t from-black to-transparent w-full">
          <h1 className="text-4xl font-bold">Manage Your Compliance, Finances, Taxes, and Marketing</h1>
          <p className="text-2xl mt-2 text-[#D51F27]">All in One Place</p>
          <p className="mt-4">Your INCNXT Business Dashboard, the Services You Need, When You Need it</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
