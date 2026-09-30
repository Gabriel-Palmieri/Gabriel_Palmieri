import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from './contexts/LanguageContext';
import { InitialLoading } from './components/InitialLoading';

export const metadata: Metadata = {
  title: 'Gabriel Palmieri - Portfolio',
  description:
    'Portfolio pessoal de Gabriel Palmieri, desenvolvedor web full-stack.',
  icons: {
    icon: [
      { url: '/palmieri-icon.svg', type: 'image/svg+xml' },
      { url: '/palmieri-icon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/palmieri-apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#17191c',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <LanguageProvider>
          <InitialLoading>{children}</InitialLoading>
        </LanguageProvider>
      </body>
    </html>
  );
}
