'use client';

import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#8A6FE8]/10 hover:bg-[#8A6FE8]/20 text-[#8A6FE8] transition-colors"
      aria-label={`Change language to ${language === 'pt' ? 'English' : 'Portuguese'}`}
    >
      <Image
        src={`/flags/${language}.svg`}
        alt={language.toUpperCase()}
        width={20}
        height={20}
        className="rounded-sm"
      />
      <span className="font-medium">{language.toUpperCase()}</span>
    </button>
  );
} 