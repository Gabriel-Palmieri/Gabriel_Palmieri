import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from './contexts/LanguageContext';

export const metadata: Metadata = {
  title: 'Gabriel Palmieri - Portfolio',
  description: 'Portfolio pessoal de Gabriel Palmieri, desenvolvedor web full-stack.',
  icons: {
    icon: '/logo-me.png',
    apple: '/logo-me.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#030405',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" style={{ backgroundColor: '#030405' }}>
      <head>
        <meta name="theme-color" content="#030405" />
      </head>
      <body style={{ backgroundColor: '#030405' }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
