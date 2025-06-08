'use client';

import { LoadingProvider } from '../contexts/LoadingContext';
import { Navbar } from './Navbar';
import { LoadingScreen } from './LoadingScreen';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <LoadingScreen />
      <Navbar />
      {children}
    </LoadingProvider>
  );
} 