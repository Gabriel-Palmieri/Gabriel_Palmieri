'use client';

import { LoadingProvider } from '../contexts/LoadingContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Navbar } from './Navbar';
import { LoadingScreen } from './LoadingScreen';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <ThemeProvider>
        <LoadingScreen />
        <Navbar />
        {children}
      </ThemeProvider>
    </LoadingProvider>
  );
} 