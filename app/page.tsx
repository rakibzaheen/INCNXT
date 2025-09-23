'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import LLCSearch from './components/LLCSearch';
import ShortPackage from './components/packages/packageShortList';
import ShortServiceList from './components/packages/shortServiceList';
import ShortLearn from './components/packages/shortLearn';
import Image from "next/image";
import Link from 'next/link';
import HeroSection from './components/HeroSection/HeroSection';

const entityData = {
  llc: {
    title: 'Limited Liability Companies (LLCs)',
    description: "An LLC is the most popular business structure. It's easy to set up and provides liability protection by separating your personal assets from your company's debts.",
    benefits: [
      'Personal liability protection',
      'Less formal than a corporation',
      'Pass-through taxation',
      'Credibility',
    ],
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  scorp: {
    title: 'S-Corporations',
    description: 'An S Corp is a tax election that can be made by either an LLC or a C Corp. It allows profits to be passed through to the owners without being taxed at the corporate level.',
    benefits: [
      'Pass-through taxation',
      'Protection from personal liability',
      'Can reduce self-employment tax liability',
      'Enhanced credibility',
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  ccorp: {
    title: 'C-Corporations',
    description: 'A C Corp is a legal entity that is separate from its owners. It can be taxed separately, and it provides the highest level of liability protection.',
    benefits: [
      'Strongest liability protection',
      'Can issue stock to raise capital',
      'No limit on the number of shareholders',
      'Tax-deductible business expenses',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  nonprofit: {
    title: 'Nonprofits',
    description: 'A nonprofit corporation is an organization formed to serve a public benefit other than for the financial gain of its members. They are generally tax-exempt.',
    benefits: [
      'Eligible for tax exemption',
      'Limited liability protection for directors',
      'Access to grants and public funding',
      'Positive community impact',
    ],
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
} as const;

type EntityType = keyof typeof entityData;

const reviews = [
  {
    name: 'Leslie Dayana Saavedra',
    stars: 5,
    text: 'Excelente atencion, me Brindo Nara con mi solicitud y no tardo mas de 24h',
  },
  {
    name: 'John Doe',
    stars: 5,
    text: 'Amazing service! They helped me set up my LLC in no time. Highly recommended.',
  },
  {
    name: 'Jane Smith',
    stars: 5,
    text: 'The best customer support I have ever experienced. They are always there to help.',
  },
];

const faqs = [
    {
      question: 'Is Bizee a Reputable Company?',
      answer: 'Yes, Bizee is a highly reputable company with over 1,000,000 businesses served since 2004. We have thousands of positive reviews and an A+ rating from the Better Business Bureau.',
    },
    {
      question: 'How Long Has Bizee Been Around?',
      answer: 'Bizee has been helping entrepreneurs start and grow their businesses since 2004.',
    },
    {
      question: 'Does Bizee Have a Monthly Fee?',
      answer: 'No, Bizee does not have any monthly fees. Our pricing is transparent, and you only pay for the services you need.',
    },
    {
      question: 'How Much Does Bizee Cost?',
      answer: 'Our basic package starts at $0 + state fees. We offer different packages to suit your needs and budget. You can compare our packages on our pricing page.',
    },
    {
      question: 'Which Bizee Package Should I Get?',
      answer: "Whether you’re looking for some quick assistance with starting your LLC or a full suite of supportive services, there’s a Bizee package for you. No matter which package you choose, you’ll love how easy Bizee makes it to start and manage your business.",
    },
  ];

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [activeTab, setActiveTab] = useState<EntityType>('llc');
  const [activeTabLLC, setActiveTabLLC] = useState('formation');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
      setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <motion.section className="py-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="container mx-auto px-6">
          <div className="border-b border-gray-200">
            <ul className="flex flex-wrap mb-px text-sm font-medium text-left">
              {[ 
                { key: 'formation', label: 'Formation', icon: 'formation.svg' },
                { key: 'packages', label: 'Packages', icon: 'packages.svg' },
                { key: 'services', label: 'Services', icon: 'services.svg' },
                { key: 'learn', label: 'Learn', icon: 'learn.svg' },
              ].map(tab => (
                <a
                  key={tab.key}
                  href="#"
                  className={`inline-flex items-center text-left text-lg p-2 md:pb-4 border-b-2  rounded-t-lg group ${activeTabLLC === tab.key ? 'text-gray-600 border-[#D51F27] dark:text-[#D51F27]' : 'text-gray-500 border-transparent'}`}
                  onClick={e => {
                    e.preventDefault();
                    setActiveTabLLC(tab.key);
                  }}
                >
                  <span className="mr-2"></span> {tab.label}
                </a>
              ))}
            </ul>
          </div>
          <div className="border border-gray-300 rounded-lg p-8 my-4">
            {activeTabLLC === 'formation' && (
              <LLCSearch />
            )}
            {activeTabLLC === 'packages' && (
              <ShortPackage />
            )}
            {activeTabLLC === 'services' && (
              <ShortServiceList />
            )}
            {activeTabLLC === 'learn' && (
              <ShortLearn />
            )}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="container mx-auto px-6 text-center">
            <div
              className="text-center text-base font-medium md:text-[21px]"
              id="pstrongbootstrapped-founder-led-independently-owned-since-2004-with-over-1000000-entrepreneurs-servedstrongp"
            >
              {/* Top divider */}
              <div className="mx-auto flex max-w-[978px] px-4">
                <div className="mt-1 h-[1px] w-full bg-gray-300"></div>
                <div className="mx-2 h-2 w-4 rounded-full bg-gray-300"></div>
                <div className="mt-1 h-[1px] w-full bg-gray-300"></div>
              </div>

              {/* Dynamic text */}
              <p className="px-8 py-3 text-gray-800">
                <span className='text-primary-600 bg-primary-200 font-bold'>
                  Bootstrapped, Founder Led, Independently Owned <span className='text-[#D51F27] bg-red-100 px-2'>Since 2004</span> With <span className='text-[#D51F27] bg-red-100 px-2'>Over 1,000,000 Entrepreneurs</span> Served!
                </span>
              </p>

              {/* Bottom divider */}
              <div className="mx-auto flex max-w-[978px] px-4">
                <div className="mt-1 h-[1px] w-full bg-gray-300"></div>
                <div className="mx-2 h-2 w-4 rounded-full bg-gray-300"></div>
                <div className="mt-1 h-[1px] w-full bg-gray-300"></div>
              </div>
            </div>
         
        </div>
      </motion.section>

      <motion.section className="py-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="container mx-auto px-2 text-center">
          <section className="rounded-3xl border border-gray-300 bg-white p-6 md:pl-10 md:pr-2 flex flex-col md:flex-row md:gap-4 items-center">
          {/* Left Content */}
          <div className="mt-8 md:mt-0">
            {/* Heading */}
            <div className="text-center text-2xl font-semibold text-black md:text-start md:text-[32px] md:leading-10">
              <h2>
                INCNTX <br />
                Startup Central
              </h2>
            </div>

            {/* Subtext */}
            <div className="text-center text-base font-medium text-gray-600 md:text-start my-6 md:mt-4">
              <p>
                The media center. Guts, grit, and a game plan <br />
                for launching your business.
              </p>
            </div>

            {/* Button */}
            <div className="max-w-[252px] md:max-w-none mx-auto">
              <div className="mx-auto md:ml-0 md:mr-auto w-full flex">
                <a
                  href="/articles"
                  aria-label="Visit INCNTX Startup Central"
                  className="uppercase p-3 lg:p-4 text-[14px] lg:text-[16px] rounded-full text-center flex w-full items-center justify-center font-extrabold text-white bg-gradient-to-br from-[#D51F27] to-[#D51F38] hover:opacity-90 transition"
                >
                  Visit INCNTX Startup Central
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-auto ml-auto flex justify-end mt-8 md:mt-0">
            <Image
              className="object-cover w-full h-full max-w-[495px]"
              style={{ objectPosition: "50% 50%" }}
              src="/img/startup-central-banner.webp?p=lg&fm=webp"
              alt="Focused founder exploring startup resources on Bizee"
              width={495}
              height={288}
            />
          </div>
        </section>
        </div>
      </motion.section>

      {/* Find the Entity Section */}
      <motion.section className="py-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col self-center gap-4">
            <div className="flex flex-col gap-6">
              <h2 className="self-center text-center text-2xl font-semibold text-black lg:!w-[783px] lg:text-5xl lg:leading-[56px]">
                <p>Find the Entity That&apos;s Right For You</p>
              </h2>
              <div className="self-center text-center text-[15px] font-medium leading-6 !text-gray-700 lg:!w-[600px] lg:text-[21px] lg:leading-8">
                <p>Bizee will guide you through the process. Use our resources to select a business formation type.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center lg:mx-auto lg:w-full lg:max-w-[633px] lg:items-start lg:gap-4 lg:self-center lg:rounded-full lg:border lg:border-gray-300 lg:bg-white lg:shadow-sm lg:py-1 lg-px-1">
            <button onClick={() => setActiveTab('llc')} className={`px-10 py-2 rounded-full font-semibold hover:bg-[#D51F27] hover:text-white ${activeTab === 'llc' ? 'bg-[#D51F27] text-white' : ''}`}>LLC</button>
            <button onClick={() => setActiveTab('scorp')} className={`px-10 py-2 rounded-full font-semibold hover:bg-[#D51F27] hover:text-white ${activeTab === 'scorp' ? 'bg-[#D51F27] text-white' : ''}`}>S-Corp</button>
            <button onClick={() => setActiveTab('ccorp')} className={`px-10 py-2 rounded-full font-semibold hover:bg-[#D51F27] hover:text-white ${activeTab === 'ccorp' ? 'bg-[#D51F27] text-white' : ''}`}>C-Corp</button>
            <button onClick={() => setActiveTab('nonprofit')} className={`px-10 py-2 rounded-full font-semibold hover:bg-[#D51F27] hover:text-white ${activeTab === 'nonprofit' ? 'bg-[#D51F27] text-white' : ''}`}>Non-Profit</button>
          </div>
          <div className="mt-12 flex flex-col md:flex-row gap-8 text-left items-center">
            <div className="w-full md:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold">{entityData[activeTab]?.title}</h3>
                  <p className="mt-4 text-gray-600">{entityData[activeTab]?.description}</p>
                  <ul className="mt-6 space-y-2">
                    {entityData[activeTab]?.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="w-full md:w-1/2">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={entityData[activeTab]?.image}
                  alt={entityData[activeTab]?.title}
                  className="rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="mt-10">
              <Link href="/articles" className="mt-6 inline-block px-6 py-3 bg-[#D51F27] text-white font-semibold rounded-full hover:bg-[#ab0f16] transition uppercase text-lg">
                Start Your {activeTab}
              </Link>
            </div>
        </div>
      </motion.section>

      {/* Choose Your Package Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-gray-800 to-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Choose Your Package
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Choose from our 3 packages. You pick the one that works best for your
            business formation period.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Basic Package */}
            <div className="bg-gray-800 rounded-lg p-8 flex flex-col shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <span className="text-lg font-semibold">Basic</span>
              </div>
              <p className="text-5xl font-extrabold">
                $0 <span className="text-lg font-normal text-gray-400">+ state fee</span>
              </p>
              <p className="mt-2 text-gray-400">One-time payment</p>
              <p className="mt-6 text-gray-300 flex-grow">
                Our core features for the lowest price
              </p>
            </div>

            {/* Standard Package */}
            <div className="border-2 border-yellow-400 rounded-lg p-8 flex flex-col relative bg-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-yellow-400 text-[#0F395D] text-sm font-bold px-4 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
              <div className="flex items-center mb-4">
                <span className="text-lg font-semibold text-yellow-400">Standard</span>
              </div>
              <p className="text-5xl font-extrabold">
                $199 <span className="text-lg font-normal text-gray-400">+ state fee</span>
              </p>
              <p className="mt-2 text-gray-400">One-time payment</p>
              <p className="mt-6 text-gray-300 flex-grow">
                Comprehensive features to get your business started
              </p>
            </div>

            {/* Premium Package */}
            <div className="bg-gray-800 rounded-lg p-8 flex flex-col shadow-lg transform hover:scale-105 transition-transform duration-300 relative">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-sm font-bold px-4 py-1 rounded-bl-lg">
                BEST VALUE
              </div>
              <div className="flex items-center mb-4">
                <span className="text-lg font-semibold">Premium</span>
              </div>
              <p className="text-5xl font-extrabold">
                $299 <span className="text-lg font-normal text-gray-400">+ state fee</span>
              </p>
              <p className="mt-2 text-gray-400">One-time payment</p>
              <p className="mt-6 text-gray-300 flex-grow">
                Full-service features at the best value
              </p>
            </div>
          </div>
          <div className="mt-16">
            <Link
              href="/compare-packages"
              className="inline-block px-10 py-4 bg-[#D51F27] text-white font-bold rounded-full hover:bg-[#ab0f16] transition-colors duration-300 uppercase text-lg shadow-lg"
            >
              Compare Packages
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Business Without Barriers Section */}
      <motion.section
        className="py-20 bg-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#0F395D]">
            Business without barriers
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            To the side-hustlers, founders, learners, innovators, action-takers, move-makers, first-timers, and serial starters - Welcome. This community is for you.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-[#D51F27] text-white font-bold rounded-full hover:bg-[#ab0f16] transition-colors duration-300 uppercase text-lg shadow-lg"
            >
              About Bizee
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Video Section */}
      <motion.section
        className="py-12 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                src="/videos/business-intro.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Destination for Your Journey Section */}
      <motion.section
        className="py-20 bg-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#0F395D]">
            A Destination for Your Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you&apos;re starting or growing, we&apos;ll guide you through the process.
          </p>
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-orange-100 rounded-full p-4">
                  <svg className="w-8 h-8 text-[#D51F27]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="mt-6 text-xl font-bold">Form Your Business</h3>
                <p className="mt-2 text-gray-600">Let us guide you through the whole formation process.</p>
                <Link href="#" className="mt-6 text-[#D51F27] font-semibold hover:underline">Learn More &gt;</Link>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-orange-100 rounded-full p-4">
                  <svg className="w-8 h-8 text-[#D51F27]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"></path></svg>
                </div>
                <h3 className="mt-6 text-xl font-bold">Free Business Tax Consult</h3>
                <p className="mt-2 text-gray-600">Our specialist accountant will review your finances with you to highlight where you can save money and offer practical advice.</p>
                <Link href="#" className="mt-6 text-[#D51F27] font-semibold hover:underline">Learn More &gt;</Link>
              </div>
              {/* Card 3 */}
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-orange-100 rounded-full p-4">
                  <svg className="w-8 h-8 text-[#D51F27]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </div>
                <h3 className="mt-6 text-xl font-bold">Lifetime Compliance Alerts</h3>
                <p className="mt-2 text-gray-600">Sit back and relax as we help you navigate through the crooks and crannies of ongoing state and IRS requirements.</p>
                <Link href="#" className="mt-6 text-[#D51F27] font-semibold hover:underline">Learn More &gt;</Link>
              </div>
              {/* Card 4 */}
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-orange-100 rounded-full p-4">
                  <svg className="w-8 h-8 text-[#D51F27]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="mt-6 text-xl font-bold">Free Registered Agent</h3>
                <p className="mt-2 text-gray-600">Professional registered age safeguards small businesse missed filings or lawsuits.</p>
                <Link href="#" className="mt-6 text-[#D51F27] font-semibold hover:underline">Learn More &gt;</Link>
              </div>
            </div>
            <div className="mt-12 flex justify-center gap-4">
              <button className="bg-gray-200 text-gray-800 rounded-full p-3 transform hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="bg-gray-200 text-gray-800 rounded-full p-3 transform hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Support Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#0F395D]">
                Customer support is our priority
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We put customers first. That means when you need to talk to a human, you can reach a human.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#D51F27] text-white font-bold rounded-full hover:bg-[#ab0f16] transition-colors duration-300 uppercase text-lg shadow-lg transform hover:scale-105"
                >
                  Contact Our Customer Support
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-6 transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="bg-orange-100 text-[#D51F27] rounded-full p-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Real help from real people</h3>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-6 transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="bg-orange-100 text-[#D51F27] rounded-full p-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Industry Leading Service</h3>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-6 transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="bg-orange-100 text-[#D51F27] rounded-full p-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">English and Spanish-speaking</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Client Review Section */}
      <motion.section
        className="py-20 bg-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-green-500 font-semibold">★ Excellent 4.6 out of 5 (22,253 Reviews)</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
                Why do over 1,000,000 businesses trust Bizee?
              </h2>
            </div>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-lg p-8 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">{reviews[activeReview].name}</h3>
                    <div className="flex items-center">
                      {[...Array(reviews[activeReview].stars)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{reviews[activeReview].text}</p>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="font-semibold">Trustpilot</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={prevReview} className="bg-gray-200 text-gray-800 rounded-full p-2 transform hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      <button onClick={nextReview} className="bg-gray-200 text-gray-800 rounded-full p-2 transform hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center text-[#0F395D]">
            FAQs
          </h2>
          <div className="mt-12 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-6">
                <button
                  className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-800"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
