'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8A6FE8]/10 hover:bg-[#8A6FE8]/20 text-[#8A6FE8] transition-all duration-300 border border-[#8A6FE8]/20 hover:border-[#8A6FE8]/40"
      aria-label={`Change language to ${language === 'pt' ? 'English' : 'Portuguese'}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <Image
        src={`/flags/${language}.svg`}
        alt={language.toUpperCase()}
        width={24}
        height={24}
        className="rounded-sm"
      />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </motion.button>
  );
}
