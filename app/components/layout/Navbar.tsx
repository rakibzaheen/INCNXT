
'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search, Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const menuItems = {
    'Business Formation': {
      'Form a Business': [
        { title: 'Form an LLC', href: '/business-formation/form-llc' },
        { title: 'Form an S Corporation', href: '/business-formation/form-s-corporation' },
        { title: 'Form a C Corporation', href: '/business-formation/form-c-corporation' },
        { title: 'Form a Nonprofit', href: '/business-formation/form-nonprofit' },
      ],
      'Services': [
        { title: 'Virtual Address', href: '/business-formation/virtual-address' },
        { title: 'EIN / Tax ID', href: '/business-formation/ein-tax-id' },
        { title: 'Assumed Business Name (DBA)', href: '/business-formation/dba' },
        { title: 'Business License / Permit', href: '/business-formation/business-license' },
        { title: 'Trademark Registration', href: '/business-formation/trademark-registration' },
        { title: 'Corporate LLC Kit', href: '/business-formation/corporate-llc-kit' },
      ],
      'Support': [
        { title: 'Guide to Starting a Business', href: '/business-formation/guide-starting-business' },
        { title: 'Choosing a Business Structure', href: '/business-formation/choosing-business-structure' },
      ],
    },
    'Business Management': {
        'Services': [
            { title: 'Annual Report', href: '/business-management/annual-report' },
            { title: 'Registered Agent Service', href: '/business-management/registered-agent' },
            { title: 'Articles of Amendment', href: '/business-management/articles-of-amendment' },
            { title: 'Foreign Qualification', href: '/business-management/foreign-qualification' },
        ],
        'Support': [
            { title: 'Tax & Accounting Consult (Free)', href: '/tax-consult' },
            { title: 'Contact', href: '/contact' },
        ],
    },
    'About Incnxt': {
        'About Us': [
            { title: 'About Us', href: '/about' },
            { title: 'What Makes Us Different', href: '/what-makes-us-different' },
            { title: 'Incfile Is Now Incnxt', href: '/incfile-is-now-incnxt' },
            { title: 'Contact', href: '/contact' },
        ],
    },
  } as const;

  type MenuItems = typeof menuItems;
  type MenuItemsKeys = keyof MenuItems;


const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<MenuItemsKeys | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCallDropdownOpen, setIsCallDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const callRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (item: MenuItemsKeys) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (callRef.current && !callRef.current.contains(event.target as Node)) {
        setIsCallDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full shadow-sm sticky top-0 bg-white z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-0">
          <nav className="w-full flex justify-between items-center py-2">
            <Link href="/">
              <Image src="/logo.svg" alt="INCNXT Logo" width={100} height={40} />
            </Link>
            <div className="hidden md:flex items-center flex-grow">
              <div className="flex items-center" ref={menuRef}>
                {(Object.keys(menuItems) as MenuItemsKeys[]).map((item) => (
                  <div
                    key={item}
                    className="relative mx-4"
                  >
                    <button onClick={() => handleDropdownToggle(item)} className="font-semibold mt-1 text-sm flex items-center gap-1">
                      {item}
                      <ChevronDown size={14} className={`transition-transform ${openDropdown === item ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          style={{
                            width: `${Math.max(Object.keys(menuItems[item]).length * 280, 280)}px`
                          }}
                          className="absolute left-0 mt-7 bg-white rounded-lg shadow-xl z-10"
                        >
                          <div
                            className={`grid gap-x-4 gap-y-6 p-6`}
                            style={{
                              gridTemplateColumns: `repeat(${Object.keys(menuItems[item]).length}, minmax(0, 1fr))`
                            }}
                          >
                            {Object.entries(menuItems[item]).map(([category, subItems]) => (
                              <div key={category}>
                                {category !== 'About Us' && (
                                  <>
                                    <h3 className="font-semibold text-gray-500 uppercase tracking-wide text-sm border-dash mb-4">{category}</h3>
                                    <hr className="border-dashed border-gray-400"></hr>
                                  </>
                                )}
                                <ul className={`space-y-3 ${category === 'About Us' ? 'mt-0' : 'mt-4'}`}>
                                  {subItems.map((subItem: { title: string; href: string }) => (
                                    <li className={`mt-${category === 'About Us' ? 0 : 2}`} key={subItem.title}>
                                      <Link href={subItem.href} className="text-gray-700 hover:text-orange" onClick={() => setOpenDropdown(null)}>{subItem.title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4 ml-auto">
                <div className="relative w-8 h-8 ml-4 flex items-center justify-center" ref={searchRef}>
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className={`text-gray-500 hover:text-orange transition-opacity ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <Search size={16} />
                  </button>
                  <AnimatePresence>
                    {isSearchOpen && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 240 }}
                        exit={{ opacity: 0, width: 0 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                      >
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Search..."
                            className="border border-[0.1px] border-[#0F395D] rounded-md h-9 px-3 py-2 pl-10 w-full focus:outline-none focus:ring-1 focus:ring-[#0F395D]"
                            autoFocus
                            onBlur={() => setIsSearchOpen(false)}
                          />
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Search size={16} className="text-gray-400" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="relative" ref={callRef}>
                  <button
                    onClick={() => setIsCallDropdownOpen(!isCallDropdownOpen)}
                    className="text-gray-600 hover:text-orange flex items-center gap-1 font-semibold"
                  >
                    <Phone size={16} />
                    <ChevronDown size={14} className={`transition-transform ${isCallDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isCallDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-7 min-w-[16rem] bg-white rounded-lg shadow-xl z-10 text-sm border border-gray-100"
                      >
                        <div className="flex flex-col gap-2 p-5 text-left text-sm leading-4">
                          <div className="font-medium text-gray-700">Phone Support:</div>
                          <a data-testid="autolink-a-tag" href="tel:+1 (888) 462-3453" rel="noopener noreferrer" target="_blank" className="font-semibold text-black">
                            1 (888) 462-3453
                          </a>
                        </div>
                        <hr className="border-dashed border-gray-400"></hr>
                        <div className="flex flex-col gap-2 p-5 text-left text-sm leading-4">
                          <div className="font-medium text-gray-700">Available at:</div>
                          <div className="font-semibold text-black">
                            Monday - Friday: 9 am - 6 pm CST
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link href="/login" className="font-semibold border border-gray-300 rounded py-1 px-2 text-md">Log in</Link>
                <Link href="/register" className="rounded-md bg-[#D51F27] text-white px-2 py-1 font-bold ">Get Started</Link>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)}>
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </div>
      <MobileMenu menuItems={menuItems} isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Navbar;
