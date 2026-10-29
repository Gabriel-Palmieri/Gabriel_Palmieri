'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { socialLinks } from '../data/projects';

export function Contact() {
  const { t } = useLanguage();
  const email = 'gabriel1208.palmieri@gmail.com';
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-line py-20 max-[760px]:py-14"
    >
      <div
        data-scroll-reveal
        className="transition-[opacity,transform] duration-[440ms] ease-out-expo [&.scroll-reveal-hidden]:translate-y-[var(--scroll-offset,18px)] [&.scroll-reveal-hidden]:opacity-0 motion-reduce:!transform-none motion-reduce:!opacity-100"
      >
        <div className="grid grid-cols-[minmax(240px,0.8fr)_minmax(0,1.65fr)] items-start gap-[clamp(48px,7vw,100px)] max-[1100px]:gap-[50px] max-[760px]:grid-cols-1 max-[760px]:gap-9">
          <div>
            <h2
              id="contact-title"
              className="text-[clamp(30px,3vw,40px)] font-medium leading-tight tracking-[-0.025em]"
            >
              {t('contact.title')}
            </h2>
            <p className="mt-5 max-w-[32ch] text-[14px] leading-7 text-muted">
              {t('contact.description')}
            </p>
          </div>
          <div className="min-w-0">
            <a
              href={'mailto:' + email}
              className="group grid grid-cols-[90px_minmax(0,1fr)_20px] items-center gap-4 border-b border-line py-7 transition-colors duration-200 hover:text-foreground max-[760px]:grid-cols-[minmax(0,1fr)_20px] max-[760px]:gap-3"
            >
              <span className="text-xs text-muted max-[760px]:col-span-2">
                {t('contact.emailLabel')}
              </span>
              <span className="min-w-0 text-[clamp(15px,1.6vw,20px)] leading-7 tracking-tight underline decoration-transparent underline-offset-4 transition-colors duration-200 [overflow-wrap:anywhere] group-hover:decoration-accent">
                {email.split('@')[0]}
                <wbr />@{email.split('@')[1]}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="shrink-0 text-muted transition-[transform,color] duration-200 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transform-none"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
            <div className="grid grid-cols-2 gap-8 max-[380px]:gap-4">
              {socialLinks.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-20 items-center justify-between gap-4 border-b border-line py-5 text-[13px] transition-colors duration-200 hover:text-foreground"
                >
                  <span className="flex items-center gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      className="shrink-0 text-muted"
                    >
                      {channel.label === 'GitHub' ? (
                        <>
                          <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />
                        </>
                      ) : (
                        <>
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" />
                        </>
                      )}
                    </svg>
                    {channel.label}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    className="shrink-0 text-muted transition-[transform,color] duration-200 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transform-none"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
