'use client';

import { useLanguage } from '../contexts/LanguageContext';

export function PageLoading() {
  const { language } = useLanguage();
  return (
    <div
      className="fixed inset-0 z-[90] grid place-items-center bg-background text-foreground"
      role="status"
      aria-live="polite"
    >
      <div className="flex w-full max-w-[360px] flex-col items-center p-6 [&_p]:text-[clamp(20px,5vw,24px)] [&_p]:font-medium [&_p]:tracking-[-0.03em] [&_p]:leading-[1.4] [&_p]:text-center">
        <div
          className="mb-7 flex h-20 w-[88px] flex-col justify-center gap-2 [&_span]:block [&_span]:h-1.5 [&_span]:w-full [&_span]:rounded-[3px] [&_span]:bg-accent [&_span]:origin-left [&_span]:animate-compose [&_span:nth-child(2)]:bg-foreground [&_span:nth-child(2)]:[animation-delay:-1400ms] [&_span:nth-child(2)]:origin-right [&_span:nth-child(3)]:bg-muted [&_span:nth-child(3)]:[animation-delay:-1200ms] motion-reduce:[&_span:nth-child(2)]:w-[70%] motion-reduce:[&_span:nth-child(2)]:self-end motion-reduce:[&_span:nth-child(3)]:w-[45%]"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>
        <p>
          {language === 'en' ? 'Loading portfolio' : 'Carregando portfólio'}
        </p>
        <span className="mt-2.5 text-[13px] text-muted">
          {language === 'en' ? 'Just a moment' : 'Só um instante'}
        </span>
      </div>
    </div>
  );
}
