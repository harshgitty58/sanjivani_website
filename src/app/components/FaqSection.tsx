'use client';

import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept credit/debit cards, UPI, wallets, and net banking.',
  },
  {
    question: 'What are the advantages of online cabs booking?',
    answer: 'Convenience, real-time tracking, safe payments, and 24/7 service.',
  },
  {
    question: 'What kind of cabs can you book from Sanjivani ?',
    answer: 'Choose from sedans, SUVs, tempo travellers, and luxury cars.',
  },
  {
    question: 'Why should you book cabs from Sanjivani?',
    answer: 'Trusted by corporates, professional drivers, and transparent pricing.',
  },
  {
    question: 'Do I need to register on Sanjivani to book a cab online?',
    answer: 'Registration helps in secure booking, tracking, and easy cancellations.',
  },
  {
    question: 'How are tolls & taxes calculated?',
    answer: 'Tolls are automatically added based on your route and trip duration.',
  },
  {
    question: 'What if I need to cancel my trip?',
    answer: 'Free cancellation up to 1 hour before pickup time. After that, minimal charges may apply.',
  },
  {
    question: 'How can I make a booking?',
    answer: 'Just login, choose route and cab, and pay securely to confirm your ride.',
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
}

type FaqItemProps = {
  item: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  toggle: () => void;
};

const FaqItem = memo(({ item, index, isOpen, toggle }: FaqItemProps) => {
  return (
    <motion.div 
      layout 
      initial={false}
      className="mb-6 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition duration-300"
    >
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-indigo-50 rounded-2xl transition"
      >
        <span className="text-gray-900 font-medium text-lg">{item.question}</span>
        {isOpen ? <Minus className="text-indigo-600" /> : <Plus className="text-indigo-600" />}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-6 pb-5 text-gray-600 text-sm"
          >
            <div>{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqsToShow = isMobile ? faqData.slice(0, 3) : faqData;

  return (
    <section className="bg-[#f2f1f9] pt-0 pb-2 px-5 md:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 mb-6">
        Frequently Asked Questions (FAQ’s)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
        {faqsToShow.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            index={index}
            isOpen={openIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
