'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    };
    if (open) document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  return (
    <header className="sticky top-0 z-20 bg-background">
      <div
        className={`mx-auto w-[min(1240px,calc(100%-112px))] max-[1100px]:w-[calc(100%-64px)] max-[760px]:w-[calc(100%-40px)] flex h-[88px] items-center justify-between gap-6 max-[760px]:h-[72px] max-[760px]:gap-4`}
      >
        <a
          className="inline-flex min-h-11 items-center text-[20px] font-semibold tracking-[-0.04em] leading-none max-[760px]:text-[19px]"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label={
            language === 'pt'
              ? 'Gabriel Palmieri — início'
              : 'Gabriel Palmieri — home'
          }
        >
          Palmieri
        </a>
        <nav
          id="navigation"
          aria-label={
            language === 'pt' ? 'Navegação principal' : 'Main navigation'
          }
          className={`ml-auto flex items-center gap-8 [&_a]:py-3 [&_a]:text-[13px] [&_a]:text-muted [&_a]:transition-colors [&_a]:duration-[160ms] [&_a:hover]:text-foreground max-[760px]:hidden max-[760px]:absolute max-[760px]:top-[72px] max-[760px]:inset-x-0 max-[760px]:px-5 max-[760px]:pt-4 max-[760px]:pb-6 max-[760px]:bg-background max-[760px]:border-b max-[760px]:border-line max-[760px]:[&_a]:text-[16px] ${open ? 'mobile-nav-open max-[760px]:!flex max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0' : ''}`}
        >
          {['projects', 'about', 'tech', 'contact'].map((key) => (
            <a key={key} className="nav-link" href={`#${key}`} onClick={() => setOpen(false)}>
              {t(`navigation.${key}`)}
            </a>
          ))}
        </nav>
        <div className="ml-6 flex items-center gap-5 max-[760px]:ml-0 max-[760px]:gap-4">
          <button
            className="flex gap-[9px] border-0 bg-transparent px-0 py-3 text-[12px] text-muted"
            type="button"
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            aria-label={
              language === 'pt' ? 'Switch to English' : 'Mudar para português'
            }
          >
            <span
              className={
                language === 'pt'
                  ? 'text-foreground underline underline-offset-[6px]'
                  : ''
              }
            >
              PT
            </span>
            <span aria-hidden="true">/</span>
            <span
              className={
                language === 'en'
                  ? 'text-foreground underline underline-offset-[6px]'
                  : ''
              }
            >
              EN
            </span>
          </button>
          <button
            id="menu-toggle"
            type="button"
            className="hidden rounded-[5px] border border-line bg-transparent px-3 py-2 max-[760px]:block max-[760px]:text-[12px]"
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? (language === 'pt' ? 'Fechar' : 'Close') : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  );
}
