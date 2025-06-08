'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

interface Certificate {
  id: number;
  titleKey: string;
  image: string;
}

interface CertificatesProps {
  certificates: Certificate[];
}

export function Certificates({ certificates }: CertificatesProps) {
  const { t } = useLanguage();

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <div
          key={cert.id}
          className="group relative overflow-hidden bg-[#1a123b] rounded-xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer"
          style={{
            animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
            opacity: 0
          }}
        >
          {/* Overlay com efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A6FE8]/0 via-[#8A6FE8]/10 to-[#8A6FE8]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <div className="relative aspect-[4/3]">
            <Image
              src={cert.image}
              alt={t(cert.titleKey)}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          {/* Título com efeito de fade in */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-semibold">{t(cert.titleKey)}</h3>
          </div>
        </div>
      ))}
    </div>
  );
} 