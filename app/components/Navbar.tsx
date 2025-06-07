'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0225]/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Portfólio
          </Link>

          {/* Links de Navegação */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            >
              Sobre mim
            </Link>
            <Link
              href="#tech"
              className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            >
             Tecnologias
            </Link>
            <Link
              href="#projects"
              className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            >
              Projetos
            </Link>
            <Link
              href="#competencies"
              className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            >
              Competências
            </Link>
            <Link
              href="#contact"
              className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 