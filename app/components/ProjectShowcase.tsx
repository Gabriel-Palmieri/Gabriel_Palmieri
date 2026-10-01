'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';

const imageDimensions: Record<string, { width: number; height: number }> = {
  '/assets/mobilia1.png': { width: 1340, height: 761 },
  '/assets/mobilia2.png': { width: 1336, height: 760 },
  '/assets/mobilia3.png': { width: 1340, height: 760 },
  '/assets/thornfield.png': { width: 1312, height: 604 },
  '/assets/Celular.png': { width: 1909, height: 911 },
  '/assets/image.png': { width: 1907, height: 903 },
  '/assets/saldo.png': { width: 1337, height: 643 },
  '/assets/neobank.jpeg': { width: 1893, height: 841 },
};

export function ProjectShowcase() {
  const { t, language } = useLanguage();
  const [selected, setSelected] = useState(0);
  const [slide, setSlide] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const project = projects[selected];
  function select(index: number) {
    setSelected(index);
    setSlide(0);
  }
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % projects.length;
    else if (event.key === 'ArrowLeft')
      next = (index - 1 + projects.length) % projects.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = projects.length - 1;
    else return;
    event.preventDefault();
    select(next);
    tabs.current[next]?.focus();
  }
  return (
    <div>
      <div
        role="tablist"
        aria-label={t('projects.title')}
        className="mb-[30px] flex gap-1 border-b border-line [&_button]:flex [&_button]:flex-1 [&_button]:justify-between [&_button]:gap-3 [&_button]:px-[18px] [&_button]:py-4 [&_button]:border-0 [&_button]:border-b-2 [&_button]:border-transparent [&_button]:bg-transparent [&_button]:text-left [&_button]:text-[14px] [&_button]:text-muted [&_button]:transition-colors [&_button]:duration-[180ms] [&_button_span]:self-center [&_button_span]:text-[11px] [&_button_span]:tabular-nums [&_button:hover]:bg-surface [&_button:hover]:text-foreground [&_button[aria-selected=true]]:text-foreground [&_button[aria-selected=true]]:bg-surface max-[760px]:gap-0 max-[760px]:mb-[22px] max-[760px]:[&_button]:px-1.5 max-[760px]:[&_button]:py-3.5 max-[760px]:[&_button]:text-[11px] max-[760px]:[&_button]:justify-center max-[760px]:[&_button]:whitespace-nowrap max-[760px]:[&_button_span]:hidden"
      >
        {projects.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`tab-${item.id}`}
            aria-controls="project-panel"
            aria-selected={index === selected}
            tabIndex={index === selected ? 0 : -1}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            onClick={() => select(index)}
            onKeyDown={(event) => navigate(event, index)}
            className="project-tab"
          >
            {item.title}
            {item.year && <span>{item.year}</span>}
          </button>
        ))}
      </div>
      <div
        key={project.id}
        id="project-panel"
        role="tabpanel"
        aria-labelledby={`tab-${project.id}`}
        tabIndex={0}
        className="grid min-h-[455px] grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start gap-10 animate-change-project max-[1100px]:gap-7 max-[1100px]:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] max-[760px]:grid-cols-1 max-[760px]:gap-5 max-[760px]:min-h-0"
      >
        <div className="min-w-0">
          <div className="overflow-hidden rounded-lg">
            <Image
              key={project.images[slide]}
              src={project.images[slide]}
              alt={
                project.id === 'camera-jovi'
                  ? slide === 0
                    ? language === 'pt'
                      ? 'Camera Jovi — tela da câmera'
                      : 'Camera Jovi — camera screen'
                    : 'Camera Jovi — landing page'
                  : `${project.title} — ${language === 'pt' ? 'tela' : 'screen'} ${slide + 1}`
              }
              width={imageDimensions[project.images[slide]].width}
              height={imageDimensions[project.images[slide]].height}
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 58vw, 740px"
              className="h-auto w-full animate-change-image"
              priority={selected === 0 && slide === 0}
            />
          </div>
          <div className="flex min-h-[54px] items-center justify-between gap-3 text-[11px] text-muted">
            <span>
              {project.title} /{' '}
              {project.id === 'camera-jovi'
                ? slide === 0
                  ? language === 'pt'
                    ? 'Aplicação'
                    : 'Application'
                  : 'Landing page'
                : language === 'pt'
                  ? 'Interface web'
                  : 'Web interface'}
            </span>
            {project.images.length > 1 ? (
              <div
                className="flex gap-1 [&_button]:size-9 [&_button]:border-0 [&_button]:bg-transparent [&_button]:text-muted [&_button]:text-[11px] [&_button]:tabular-nums [&_button]:rounded [&_button[aria-pressed=true]]:text-foreground [&_button[aria-pressed=true]]:bg-surface [&_button:hover]:text-accent"
                aria-label={
                  language === 'pt' ? 'Telas do projeto' : 'Project screens'
                }
              >
                {project.images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`${language === 'pt' ? 'Ver tela' : 'View screen'} ${index + 1}`}
                    aria-pressed={slide === index}
                    onClick={() => setSlide(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            ) : (
              project.year && <span>{project.year}</span>
            )}
          </div>
        </div>
        <div className="pt-[3px] [&_h3]:mb-[18px] [&_h3]:text-[28px] [&_h3]:font-medium [&_h3]:tracking-[-0.025em] [&_h3]:leading-[1.2] [&>p]:text-[13px] [&>p]:leading-[1.85] [&>p]:text-muted max-[760px]:[&_h3]:text-[26px] max-[760px]:[&>p]:text-[14px]">
          <h3>{t(`projects.${project.key}.title`)}</h3>
          <p>{t(`projects.${project.key}.description`)}</p>
          {project.stack.length > 0 && (
            <ul
              className="my-[22px] flex list-none flex-wrap gap-x-4 gap-y-1.5 p-0 [&_li]:text-[11px] [&_li]:text-foreground max-[760px]:[&_li]:text-[12px]"
              aria-label={t('projects.technologies')}
            >
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          )}
          <details className="mb-6 border-y border-line [&_ul]:list-disc [&_ul]:pl-[18px] [&_ul]:mb-[18px] [&_ul]:text-[12px] [&_ul]:text-muted [&_li+li]:mt-2 [&_summary]:flex [&_summary]:justify-between [&_summary]:items-center [&_summary]:gap-5 [&_summary]:py-[13px] [&_summary]:text-[12px] [&_summary_span]:text-[22px] [&_summary_span]:leading-none [&_summary_span]:text-muted [&_summary_span]:transition-transform [&_summary_span]:duration-200 [&[open]_summary_span]:rotate-45">
            <summary>
              {language === 'pt' ? 'Funcionalidades' : 'Features'}
              <span aria-hidden="true">+</span>
            </summary>
            <ul>
              {[1, 2, 3, 4].map((index) => (
                <li key={index}>
                  {t(`projects.${project.key}.feature${index}`)}
                </li>
              ))}
            </ul>
          </details>
          <div className="flex flex-wrap items-center gap-[22px] max-[760px]:gap-[26px]">
            <a
              className="inline-flex min-h-[46px] items-center justify-center gap-6 rounded-[5px] border-0 bg-foreground px-[18px] py-3 text-[12px] font-semibold text-background transition-colors duration-[160ms] hover:bg-accent hover:text-background [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-[220ms] [&_svg]:ease-out-expo [&:hover_svg]:translate-x-0.5"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('projects.viewCode')}
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
            {project.live && (
              <a
                className="group inline-flex items-center gap-[18px] text-[13px] font-semibold underline decoration-line transition-colors duration-[160ms] hover:decoration-accent"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('projects.viewProject')}
              </a>
            )}
            {'landingLive' in project && (
              <a
                className="group inline-flex items-center gap-[18px] text-[13px] font-semibold underline decoration-line transition-colors duration-[160ms] hover:decoration-accent"
                href={project.landingLive}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('projects.viewLanding')}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
