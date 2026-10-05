'use client';

import { useLanguage } from '../contexts/LanguageContext';

export function PageLoading() {
  const { language } = useLanguage();
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-background px-6 text-foreground"
      role="status"
      aria-live="polite"
    >
      <div className="w-full max-w-[420px]">
        <div
          aria-hidden="true"
          className="text-[clamp(38px,8vw,58px)] font-medium leading-[1.04] tracking-[-0.04em]"
        >
          Gabriel
          <br />
          Palmieri<span className="text-accent">.</span>
        </div>
        <div
          className="mt-9 h-px w-full overflow-hidden bg-line"
          aria-hidden="true"
        >
          <span className="loading-line block h-full w-full origin-left bg-accent" />
        </div>
        <p className="mt-3 text-[12px] text-muted">
          {language === 'en' ? 'Loading portfolio' : 'Carregando portfólio'}
        </p>
      </div>
    </div>
  );
}
