'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { useState } from 'react';

export function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0225]/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Portfolio
          </Link>

          {/* Botão do Menu Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Links de Navegação Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            >
              {t('navigation.about')}
            </Link>
            <Link
              href="#tech"
              className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            >
              {t('navigation.tech')}
            </Link>
            <Link
              href="#projects"
              className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            >
              {t('navigation.projects')}
            </Link>
            <Link
              href="#competencias"
              className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            >
              {t('navigation.competencies')}
            </Link>
            <Link
              href="#softskills"
              className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            >
              {t('navigation.softSkills')}
            </Link>
            <Link
              href="#contact"
              className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            >
              {t('navigation.contact')}
            </Link>

            {/* Seletor de idioma */}
            <div className="flex items-center">
              <LanguageToggle />
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:hidden flex-col gap-4 pt-4 pb-6 border-t border-gray-700 mt-4`}
        >
          <Link
            href="#about"
            className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.about')}
          </Link>
          <Link
            href="#tech"
            className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.tech')}
          </Link>
          <Link
            href="#projects"
            className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.projects')}
          </Link>
          <Link
            href="#competencias"
            className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.competencies')}
          </Link>
          <Link
            href="#softskills"
            className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.softSkills')}
          </Link>
          <Link
            href="#contact"
            className="text-gray-400 hover:text-[#8A6FE8] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.contact')}
          </Link>

          {/* Seletor de idioma no menu mobile */}
          <div className="flex items-center pt-4 border-t border-gray-700 mt-2">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 