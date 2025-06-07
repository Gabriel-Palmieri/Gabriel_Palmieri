import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import { ClientLayout } from './components/ClientLayout';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gabriel Palmieri - Full Stack Developer',
  description: 'Portfólio profissional de Gabriel Palmieri, desenvolvedor Full Stack com experiência em React, Next.js, Node.js e mais.',
  icons: {
    icon: '/logo-me.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
