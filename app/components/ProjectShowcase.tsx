'use client';

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type CSSProperties,
} from 'react';
import Image from 'next/image';
import { projects } from '../data/projects';
import { technologyIcons } from '../data/technologyIcons';
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
  const [direction, setDirection] = useState(1);
  const [drag, setDrag] = useState(0);
  const dragStart = useRef<number | null>(null);
  const dragged = useRef(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const preview = useRef<HTMLButtonElement>(null);
  const galleryStage = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0, scale: 1 });
  const [expanded, setExpanded] = useState(false);
  const english = language === 'en';
  function changeSlide(index: number) {
    setSlide((index + project.images.length) % project.images.length);
  }
  function openGallery() {
    if (dragged.current) {
      dragged.current = false;
      return;
    }
    const box = preview.current?.getBoundingClientRect();
    if (box)
      setOrigin({
        x: box.left + box.width / 2 - window.innerWidth / 2,
        y: box.top + box.height / 2 - window.innerHeight / 2,
        scale: box.width / Math.min(window.innerWidth * 0.9, 1280),
      });
    setExpanded(true);
    dialog.current?.showModal();
  }
  function closeGallery() {
    const element = galleryStage.current;
    if (
      element &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      const animation = element.animate(
        [
          { transform: 'translate(0,0) scale(1)', opacity: 1 },
          {
            transform: `translate(${origin.x}px,${origin.y}px) scale(${origin.scale})`,
            opacity: 0,
          },
        ],
        { duration: 240, easing: 'cubic-bezier(.16,1,.3,1)' },
      );
      animation.onfinish = () => dialog.current?.close();
    } else dialog.current?.close();
  }
  useEffect(() => {
    if (!expanded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.querySelector('button')?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [expanded]);
  function select(index: number) {
    if (index === selected) return;
    setDirection(index > selected ? 1 : -1);
    setSelected(index);
    setSlide(0);
    setDrag(0);
    dragStart.current = null;
    dragged.current = false;
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
    <div style={{ '--project-direction': direction } as CSSProperties}>
      <dialog
        ref={dialog}
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none overflow-auto border-0 bg-transparent p-8 text-foreground open:grid open:items-center open:justify-items-center backdrop:bg-[rgba(23,25,28,0.78)] backdrop:backdrop-blur-xl max-[760px]:p-4"
        aria-label={`${project.title} — ${english ? 'screenshots' : 'telas'}`}
        onCancel={(event) => {
          event.preventDefault();
          closeGallery();
        }}
        onClose={() => {
          setExpanded(false);
          preview.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeGallery();
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            changeSlide(slide + 1);
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            changeSlide(slide - 1);
          }
        }}
      >
        {expanded && (
          <div
            ref={galleryStage}
            className="grid h-[min(900px,calc(100dvh-64px))] w-[min(90vw,1280px)] grid-rows-[auto_minmax(0,1fr)_auto] gap-6 animate-gallery-expand max-[760px]:h-[calc(100dvh-32px)] max-[760px]:w-full max-[760px]:gap-4"
            style={
              {
                '--gallery-x': `${origin.x}px`,
                '--gallery-y': `${origin.y}px`,
                '--gallery-scale': origin.scale,
              } as CSSProperties
            }
          >
            <div className="flex items-center justify-between gap-6 border-b border-line pb-4">
              <div className="min-w-0">
                <h2 className="text-xl font-medium tracking-tight max-[760px]:text-lg">
                  {project.title}
                </h2>
                <p className="mt-1 text-xs text-muted">
                  {english ? 'Project screens' : 'Telas do projeto'}{' '}
                  <span className="mx-2" aria-hidden="true">
                    /
                  </span>
                  <span aria-live="polite" className="tabular-nums">
                    {String(slide + 1).padStart(2, '0')} /{' '}
                    {String(project.images.length).padStart(2, '0')}
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={closeGallery}
                className="flex min-h-11 shrink-0 items-center gap-3 rounded-[5px] border border-line bg-transparent px-3 text-xs transition-colors duration-200 hover:bg-surface"
              >
                {english ? 'Close' : 'Fechar'}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <div className="flex min-h-0 items-center justify-center overflow-hidden">
              <Image
                key={project.images[slide]}
                src={project.images[slide]}
                alt={`${project.title} — ${slide + 1}`}
                width={imageDimensions[project.images[slide]].width}
                height={imageDimensions[project.images[slide]].height}
                className="h-auto max-h-full w-auto max-w-full rounded-lg object-contain animate-change-image"
                sizes="90vw"
              />
            </div>
            <div className="grid grid-cols-[44px_minmax(0,1fr)_44px] items-center gap-4 border-t border-line pt-4 max-[760px]:gap-2">
              <button
                type="button"
                onClick={() => changeSlide(slide - 1)}
                disabled={project.images.length < 2}
                aria-label={english ? 'Previous' : 'Anterior'}
                className="flex size-11 items-center justify-center rounded-[5px] border border-line bg-transparent transition-colors duration-200 hover:bg-surface disabled:!cursor-default disabled:!opacity-25"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="m14 6-6 6 6 6" />
                </svg>
              </button>
              <div
                className="flex min-w-0 justify-center gap-3 overflow-x-auto py-1 max-[760px]:gap-2"
                aria-label={english ? 'Choose a screen' : 'Escolher tela'}
              >
                {project.images.map((src, index) => (
                  <button
                    type="button"
                    key={src}
                    aria-label={
                      (english ? 'View screen' : 'Ver tela') + ' ' + (index + 1)
                    }
                    aria-pressed={slide === index}
                    onClick={() => changeSlide(index)}
                    className="group/thumb relative w-24 shrink-0 overflow-hidden rounded-[5px] border border-transparent bg-transparent opacity-[0.45] transition-[opacity,border-color] duration-200 hover:opacity-100 aria-pressed:border-accent aria-pressed:opacity-100 max-[760px]:w-16"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={96}
                      height={56}
                      className="aspect-[12/7] w-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 rounded-tl bg-background px-1.5 py-0.5 text-[10px] tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => changeSlide(slide + 1)}
                disabled={project.images.length < 2}
                aria-label={english ? 'Next' : 'Próxima'}
                className="flex size-11 items-center justify-center rounded-[5px] border border-line bg-transparent transition-colors duration-200 hover:bg-surface disabled:!cursor-default disabled:!opacity-25"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="m10 6 6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </dialog>
      <div
        role="tablist"
        aria-label={t('projects.title')}
        className="relative mb-[30px] flex gap-0 [&_button]:basis-0 [&_button]:min-w-0 border-b border-line [&_button]:flex [&_button]:flex-1 [&_button]:justify-between [&_button]:gap-3 [&_button]:px-[18px] [&_button]:py-4 [&_button]:border-0 [&_button]:border-b-2 [&_button]:border-transparent [&_button]:bg-transparent [&_button]:text-left [&_button]:text-[14px] [&_button]:text-muted [&_button]:transition-colors [&_button]:duration-[180ms] [&_button_span]:self-center [&_button_span]:text-[11px] [&_button_span]:tabular-nums [&_button:hover]:bg-surface [&_button:hover]:text-foreground [&_button[aria-selected=true]]:text-foreground [&_button[aria-selected=true]]:bg-surface max-[760px]:gap-0 max-[760px]:mb-[22px] max-[760px]:[&_button]:px-1.5 max-[760px]:[&_button]:py-3.5 max-[760px]:[&_button]:text-[11px] max-[760px]:[&_button]:justify-center max-[760px]:[&_button]:whitespace-nowrap max-[760px]:[&_button_span]:hidden"
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
            className="relative"
          >
            {item.title}
            {item.year && <span>{item.year}</span>}
          </button>
        ))}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px left-0 h-0.5 bg-accent transition-transform duration-[420ms] ease-out-expo"
          style={{
            transform: `translateX(${selected * 100}%)`,
            width: `${100 / projects.length}%`,
          }}
        />
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
          <button
            type="button"
            ref={preview}
            className="group/preview relative block w-full touch-pan-y cursor-zoom-in overflow-hidden rounded-lg border-0 bg-surface p-0"
            aria-label={`${english ? 'Expand' : 'Ampliar'} ${project.title}`}
            onClick={openGallery}
            onPointerDown={(event) => {
              if (event.button !== 0 || project.images.length < 2) return;
              dragStart.current = event.clientX;
              dragged.current = false;
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (dragStart.current === null) return;
              const delta = event.clientX - dragStart.current;
              if (Math.abs(delta) > 8) dragged.current = true;
              setDrag(Math.max(-120, Math.min(120, delta)));
            }}
            onPointerUp={(event) => {
              if (dragStart.current === null) return;
              const delta = event.clientX - dragStart.current;
              if (Math.abs(delta) > 45)
                changeSlide(slide + (delta < 0 ? 1 : -1));
              dragStart.current = null;
              setDrag(0);
              if (event.currentTarget.hasPointerCapture(event.pointerId))
                event.currentTarget.releasePointerCapture(event.pointerId);
            }}
            onPointerCancel={() => {
              dragStart.current = null;
              dragged.current = false;
              setDrag(0);
            }}
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                event.preventDefault();
                changeSlide(slide + (event.key === 'ArrowRight' ? 1 : -1));
              }
            }}
          >
            {drag !== 0 && (
              <Image
                src={
                  project.images[
                    (slide + (drag < 0 ? 1 : -1) + project.images.length) %
                      project.images.length
                  ]
                }
                alt=""
                fill
                sizes="740px"
                className="object-contain"
                draggable={false}
              />
            )}
            <span
              className="relative block transition-transform duration-[350ms] ease-out-expo motion-reduce:!transform-none"
              style={{
                transform: `translateX(${drag}px)`,
                transition: drag ? 'none' : undefined,
              }}
            >
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
                className={`h-auto w-full ${slide > 0 ? 'animate-change-image' : ''}`}
                priority={selected === 0 && slide === 0}
                draggable={false}
              />
            </span>
            <span className="absolute bottom-3 right-3 flex translate-y-1 gap-4 rounded-[5px] border border-line bg-background px-3 py-2 text-xs text-foreground opacity-0 transition-[opacity,transform] duration-[250ms] ease-out-expo group-hover/preview:translate-y-0 group-hover/preview:opacity-100 group-focus-visible/preview:translate-y-0 group-focus-visible/preview:opacity-100 max-[760px]:translate-y-0 max-[760px]:text-[11px] max-[760px]:opacity-100">
              {english ? 'Explore screens' : 'Explorar telas'}{' '}
              <span aria-hidden="true">↗</span>
            </span>
          </button>
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
              className="my-[22px] flex list-none flex-wrap gap-x-4 gap-y-3 p-0 [&_li]:text-[11px] [&_li]:text-foreground max-[760px]:[&_li]:text-[12px]"
              aria-label={t('projects.technologies')}
            >
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <Image
                    src={`/icons/${technologyIcons[tech].file}`}
                    alt=""
                    width={18}
                    height={18}
                    className={`size-[18px] shrink-0 object-contain grayscale ${technologyIcons[tech].invert ? 'invert' : ''}`}
                  />
                  {tech}
                </li>
              ))}
            </ul>
          )}
          <details className="[&[open]>ul]:animate-detail-reveal mb-6 border-y border-line [&_ul]:list-disc [&_ul]:pl-[18px] [&_ul]:mb-[18px] [&_ul]:text-[12px] [&_ul]:text-muted [&_li+li]:mt-2 [&_summary]:flex [&_summary]:justify-between [&_summary]:items-center [&_summary]:gap-5 [&_summary]:py-[13px] [&_summary]:text-[12px] [&_summary_span]:text-[22px] [&_summary_span]:leading-none [&_summary_span]:text-muted [&_summary_span]:transition-transform [&_summary_span]:duration-200 [&[open]_summary_span]:rotate-45">
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
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {[
              ...(project.live
                ? [
                    {
                      label: t('projects.viewProject'),
                      href: project.live,
                      primary: true,
                    },
                  ]
                : []),
              {
                label: t('projects.viewCode'),
                href: project.github,
                primary: !project.live,
              },
              ...('landingLive' in project
                ? [
                    {
                      label: t('projects.viewLanding'),
                      href: project.landingLive,
                      primary: false,
                    },
                  ]
                : []),
            ].map((action) => (
              <a
                key={action.href}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex min-h-11 items-center gap-2.5 text-[13px] transition-colors duration-200 ease-out-expo hover:text-foreground ${action.primary ? 'font-semibold text-foreground' : 'font-normal text-muted'}`}
              >
                <span className="relative py-1 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 after:ease-out-expo after:content-[''] group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100">
                  {action.label}
                </span>
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="shrink-0 transition-transform duration-200 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
