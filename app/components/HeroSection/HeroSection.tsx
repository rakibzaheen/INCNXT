import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:pt-20">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="text-[#0F395D]">Start Your Business</span>
              <br />
              <span className="text-[#D51F27]">With Confidence</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
              Your big idea deserves a bold execution. Say goodbye to stress and
              hello to your new business.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="inline-block bg-[#D51F27] text-white font-semibold px-8 py-3 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-block text-[#0F395D] font-semibold px-8 py-3 rounded-md border border-[#0F395D] hover:bg-gray-100 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-200 rounded-full"
                animate={{
                  y: [0, 20, 0],
                  x: [0, -20, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 right-1/4 w-12 h-12 bg-red-200 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 20, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
              <motion.div
                className="absolute bottom-1/4 left-1/2 w-8 h-8 bg-gray-200 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  x: [0, -10, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <RocketLaunchIcon className="h-64 w-64 text-[#0F395D]" />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-red-200 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;