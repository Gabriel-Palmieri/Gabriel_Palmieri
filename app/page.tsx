'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Navbar } from './components/Navbar';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Skills } from './components/Skills';
import ContactForm from './components/ContactForm';
import { useLanguage } from './contexts/LanguageContext';
import { projects, socialLinks } from './data/projects';

const projectYears = projects.map(({ year }) => Number(year));

export default function Home() {
  const { t, language } = useLanguage();
  const english = language === 'en';

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const elements = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('scroll-reveal-hidden', !entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove('scroll-reveal-hidden'));
    };
  }, []);

  return (
    <>
      <a
        className="fixed -top-[100px] left-5 z-[100] bg-foreground px-5 py-3 text-background focus:top-3"
        href="#main"
      >
        {english ? 'Skip to content' : 'Pular para o conteúdo'}
      </a>
      <Navbar />
      <main
        id="main"
        className="mx-auto w-[min(1240px,calc(100%-112px))] max-[1100px]:w-[calc(100%-64px)] max-[760px]:w-[calc(100%-40px)]"
      >
        <section
          id="home"
          className="border-b border-line pt-[92px] pb-16 min-[1600px]:pt-[100px] [&_h1]:text-[clamp(56px,7.2vw,96px)] [&_h1]:font-medium [&_h1]:leading-[1.1] [&_h1]:tracking-[-0.04em] max-[760px]:pt-14 max-[760px]:pb-9 max-[760px]:[&_h1]:max-w-[9ch] max-[760px]:[&_h1]:text-[clamp(44px,11vw,72px)]"
          aria-labelledby="hero-title"
        >
          <h1 id="hero-title" className="hero-reveal">
            Gabriel Palmieri
          </h1>
          <div className="hero-support mt-8 flex items-end justify-between gap-8 max-[760px]:mt-6 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-6">
            <div>
              <p className="mb-1.5 text-[18px] font-medium max-[760px]:text-[16px]">
                {t('hero.role')}
              </p>
              <p className="max-w-[42ch] text-[15px] leading-[1.7] text-muted max-[760px]:text-[14px]">
                {t('hero.description')}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-7 [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a]:text-[13px] [&>a:last-child]:text-muted [&>a:last-child:hover]:text-foreground">
              <a
                className="group inline-flex items-center gap-[18px] text-[13px] font-semibold underline decoration-line transition-colors duration-[160ms] hover:decoration-accent"
                href="#projects"
              >
                {t('hero.cta')}
                <svg
                  className="text-[20px] transition-transform duration-[250ms] ease-out-expo group-hover:translate-y-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M12 4v16m-6-6 6 6 6-6" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="pt-[46px] max-[760px]:pt-8"
          aria-labelledby="projects-title"
        >
          <div data-scroll-reveal className="scroll-reveal mb-[26px] flex items-baseline justify-between gap-5 [&_h2]:text-[25px] [&_h2]:font-medium [&_h2]:tracking-[-0.025em] [&>span]:text-[12px] [&>span]:tabular-nums max-[760px]:mb-5 max-[760px]:[&_h2]:text-[21px] max-[760px]:[&>span]:text-[10px] max-[380px]:gap-2 max-[380px]:[&_h2]:text-[19px]">
            <h2 id="projects-title">{t('projects.title')}</h2>
            <span className="text-muted">
              {Math.min(...projectYears)} — {Math.max(...projectYears)}
            </span>
          </div>
          <div data-scroll-reveal className="scroll-reveal">
            <ProjectShowcase />
          </div>
        </section>
        <section
          id="about"
          className="mt-[90px] grid grid-cols-[minmax(240px,0.8fr)_minmax(0,1.65fr)] items-start gap-[clamp(48px,7vw,100px)] border-t border-line pt-20 max-[1100px]:gap-[50px] max-[760px]:mt-16 max-[760px]:pt-12 max-[760px]:grid-cols-1 max-[760px]:gap-8"
          aria-labelledby="about-title"
        >
          <div data-scroll-reveal className="scroll-reveal max-w-[300px] max-[760px]:w-60 max-[760px]:max-w-full">
            <Image
              src="/me.jpeg"
              alt="Gabriel Palmieri"
              width={600}
              height={750}
              className="h-auto w-full aspect-[4/5] rounded-xl object-cover object-[center_70%]"
              sizes="(max-width: 760px) 240px, 300px"
            />
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[13px] [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a]:gap-2 [&_a]:underline [&_a]:decoration-line [&_svg]:shrink-0 [&_a:hover]:decoration-accent max-[760px]:mt-2 max-[760px]:gap-x-[22px]">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    {link.label === 'GitHub' ? (
                      <path d="M12 .297C5.37.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.51 11.51 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    ) : (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div data-scroll-reveal className="scroll-reveal [&_h2]:mb-6 [&_h2]:text-[clamp(30px,3vw,40px)] [&_h2]:font-medium [&_h2]:tracking-[-0.025em] [&_h2]:leading-[1.2] [&>p]:max-w-[65ch] [&>p]:text-muted [&>p]:leading-[1.8] [&>p]:text-[15px] [&>p+p]:mt-[18px] max-[760px]:[&_h2]:text-[30px] max-[760px]:[&_h2]:mb-5">
            <h2 id="about-title">{t('about.title')}</h2>
            <p className="!text-foreground !text-[21px] tracking-[-0.02em] !leading-[1.6] !max-w-[46ch] max-[760px]:!text-[20px]">
              {t('about.intro')}
            </p>
            <p>{t('about.description')}</p>
            <p>{t('about.education')}</p>
            <p>{t('about.approach')}</p>
            <details className="mt-7 border-t border-line [&_dl]:grid [&_dl]:grid-cols-2 [&_dl]:gap-6 [&_dl]:pt-3.5 [&_dt]:mb-1.5 [&_dt]:text-[13px] [&_dd]:text-[12px] [&_dd]:text-muted max-[760px]:[&_dl]:grid-cols-1 [&_summary]:flex [&_summary]:justify-between [&_summary]:items-center [&_summary]:gap-5 [&_summary]:py-[13px] [&_summary]:text-[12px] [&_summary_span]:text-[22px] [&_summary_span]:leading-none [&_summary_span]:text-muted [&_summary_span]:transition-transform [&_summary_span]:duration-200 [&[open]_summary_span]:rotate-45">
              <summary>
                {t('softSkills.title')}
                <span aria-hidden="true">+</span>
              </summary>
              <dl>
                {[
                  'communication',
                  'problemSolving',
                  'teamwork',
                  'adaptability',
                  'timeManagement',
                  'criticalThinking',
                ].map((key) => (
                  <div key={key}>
                    <dt>{t(`softSkills.${key}.title`)}</dt>
                    <dd>{t(`softSkills.${key}.description`)}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </div>
        </section>
        <Skills />
        <section
          id="contact"
          className="grid grid-cols-[1fr_1.3fr] gap-[100px] border-t border-line pt-[82px] pb-[100px] max-[1100px]:gap-[50px] max-[760px]:grid-cols-1 max-[760px]:pt-12 max-[760px]:pb-16 max-[760px]:gap-9"
          aria-labelledby="contact-title"
        >
          <div data-scroll-reveal className="scroll-reveal [&_h2]:max-w-[10ch] [&_h2]:text-[clamp(32px,3.5vw,48px)] [&_h2]:font-medium [&_h2]:tracking-[-0.03em] [&_h2]:leading-[1.15] [&_p]:my-6 [&_p]:max-w-[35ch] [&_p]:text-[14px] [&_p]:text-muted max-[760px]:[&_h2]:max-w-[15ch] max-[760px]:[&_h2]:text-[38px] max-[760px]:[&_p]:max-w-[42ch] max-[760px]:[&_p]:my-[18px]">
            <h2 id="contact-title">
              {t('contact.title')}
              <span className="text-accent">.</span>
            </h2>
            <p>{t('contact.description')}</p>
            <a
              className="group inline-flex items-center gap-[18px] text-[13px] font-semibold underline decoration-line transition-colors duration-[160ms] hover:decoration-accent"
              href="https://www.linkedin.com/in/gabriel-palmieri12/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {english ? 'Talk on LinkedIn' : 'Conversar pelo LinkedIn'}
            </a>
          </div>
          <div data-scroll-reveal className="scroll-reveal">
            <ContactForm />
          </div>
        </section>
      </main>
      <footer
        className={`mx-auto w-[min(1240px,calc(100%-112px))] max-[1100px]:w-[calc(100%-64px)] max-[760px]:w-[calc(100%-40px)] flex flex-wrap justify-between gap-5 border-t border-line pt-7 pb-9 text-[11px] text-muted max-[760px]:gap-4 max-[760px]:text-[10px] max-[760px]:[&>span:nth-child(2)]:hidden`}
      >
        <span>© {new Date().getFullYear()} Gabriel Palmieri</span>
        <span>{t('hero.role')}</span>
      </footer>
    </>
  );
}
