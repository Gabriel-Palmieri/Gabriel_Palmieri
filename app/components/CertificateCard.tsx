'use client';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  credential: string;
}

export function CertificateCard({ title, issuer, date, credential }: CertificateCardProps) {
  return (
    <div className="group relative bg-[#1a123b] rounded-xl p-6 hover:bg-[#8A6FE8]/10 transition-all duration-300">
      {/* Ícone de Certificado */}
      <div className="absolute -top-6 left-6 w-12 h-12 bg-[#8A6FE8] rounded-xl p-3 group-hover:scale-110 transition-transform">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
            fill="white"
          />
          <path
            d="M13 14.2C13 14.2 13.3 14.6 13.5 15C13.7 15.4 14 16 14 16L12 17L10 16C10 16 10.3 15.4 10.5 15C10.7 14.6 11 14.2 11 14.2M19 21V19C19 17.9 18.1 17 17 17H7C5.9 17 5 17.9 5 19V21H19Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Conteúdo */}
      <div className="pt-8">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{issuer}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z"
                fill="currentColor"
              />
            </svg>
            <span>{date}</span>
          </div>

          <a
            href={credential}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#8A6FE8] hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z"
                fill="currentColor"
              />
            </svg>
            <span>Ver Credencial</span>
          </a>
        </div>
      </div>

      {/* Efeito de brilho */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #8A6FE820 0%, transparent 70%)'
        }}
      />
    </div>
  );
} 