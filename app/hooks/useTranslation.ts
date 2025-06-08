'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../i18n';

export function useTranslation() {
  const [mounted, setMounted] = useState(false);
  const context = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Retorna uma versão padrão das traduções durante a montagem
    return {
      t: getTranslations('pt'),
      language: 'pt',
      changeLanguage: () => {},
    };
  }

  return context;
} 