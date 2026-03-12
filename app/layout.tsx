import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gabriel Palmieri - Portfolio',
  description: 'Portfolio pessoal de Gabriel Palmieri, desenvolvedor web full-stack.',
  icons: {
    icon: '/logo-me.png',
    apple: '/logo-me.png',
  },
  themeColor: '#0B0B0F',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" style={{ backgroundColor: '#0B0B0F' }}>
      <head>
        <meta name="theme-color" content="#0B0B0F" />
      </head>
      <body className={inter.className} style={{ backgroundColor: '#0B0B0F' }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
