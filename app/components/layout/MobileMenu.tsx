
'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface SubItem {
  readonly title: string;
  readonly href: string;
}

interface Category {
  readonly [key: string]: readonly SubItem[];
}

interface MenuItems {
  readonly [key: string]: Category;
}

interface MobileMenuProps {
  menuItems: MenuItems;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, isOpen, setIsOpen }) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          className="fixed top-0 left-0 w-full h-full bg-white z-50 p-6 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold">INCNXT</Link>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div>
            {Object.keys(menuItems).map((item) => (
              <div key={item} className="py-4 border-b">
                <button onClick={() => handleCategoryClick(item)} className="flex justify-between items-center w-full font-bold text-lg">
                  {item}
                  <ChevronDown size={16} className={`transition-transform ${openCategory === item ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openCategory === item && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 grid grid-cols-1 gap-2"
                    >
                      {Object.keys(menuItems[item]).map((category) => (
                        <div key={category}>
                          <h4 className="font-semibold text-gray-500 text-sm uppercase tracking-wide mt-2">{category}</h4>
                          <ul className="mt-1 space-y-1">
                            {menuItems[item][category].map((subItem) => (
                              <li key={subItem.title}>
                                <Link href={subItem.href} className="text-gray-700 hover:text-orange" onClick={() => setIsOpen(false)}>{subItem.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <Link href="/login" className="font-semibold text-lg" onClick={() => setIsOpen(false)}>Log in</Link>
            <Link href="/register" className="rounded-md bg-orange px-6 py-3 font-bold text-white text-lg text-center" onClick={() => setIsOpen(false)}>Get Started</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
