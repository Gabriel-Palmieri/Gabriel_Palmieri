'use client';

import { ThemeProvider } from 'next-themes';
import { LoadingProvider } from '../contexts/LoadingContext';
import { LanguageProvider } from '../contexts/LanguageContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
} 