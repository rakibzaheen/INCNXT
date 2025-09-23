// components/ui/Accordion.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  question: string;
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, isOpen, toggle, children }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
      >
        <span className="font-medium text-gray-800 group-hover:text-[#D51F27] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-sm text-gray-600 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};