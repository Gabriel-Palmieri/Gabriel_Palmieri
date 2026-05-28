'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

interface Technology {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string | string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  features: string[];
  technologies: Technology[];
}

interface ModernProjectsProps {
  projects: Project[];
}

export function ModernProjects({ projects }: ModernProjectsProps) {
  const [expandedId, setExpandedId] = useState<number | null>(projects[0]?.id ?? null);
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: number]: number }>({});
  const { t } = useLanguage();
  const MotionImage = motion(Image);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndexes(prev => {
        const newIndexes = { ...prev };
        projects.forEach(project => {
          if (Array.isArray(project.image)) {
            const currentIndex = newIndexes[project.id] || 0;
            newIndexes[project.id] = (currentIndex + 1) % project.image.length;
          }
        });
        return newIndexes;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [projects]);

  const toggleProject = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full">
      <div className="space-y-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <button
              type="button"
              onClick={() => toggleProject(project.id)}
              className="group w-full overflow-hidden rounded-lg border border-white/10 bg-[#070809] text-left transition-all hover:border-[#8fb4be]/35 hover:bg-[#0a0c0d]"
            >
              <div className="grid items-center gap-5 p-4 md:grid-cols-[220px_1fr_auto]">
                <div className="relative h-28 overflow-hidden rounded-md border border-white/10 bg-[#030405]">
                  <Image
                    src={Array.isArray(project.image) ? project.image[0] : project.image}
                    alt={t(project.titleKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, 220px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030405]/45 to-transparent" />
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-[#f4f1ea]">
                      {t(project.titleKey)}
                    </h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-[#aaa59b]">
                      {project.year}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-6 text-[#aaa59b]">
                    {t(project.descriptionKey)}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-[#c9c4bb]"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs text-[#8e8981]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-4 text-[#8fb4be]"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
            </button>

            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 rounded-lg border border-white/10 bg-[#141715]/90 p-6">
                    <div className="grid gap-8 md:grid-cols-[minmax(280px,500px)_1fr]">
                      <div className="relative">
                        <div className="relative h-[320px] w-full overflow-hidden rounded-lg border border-white/10 bg-[#030405] md:h-[400px]">
                          {Array.isArray(project.image) ? (
                            <div className="relative h-full w-full">
                              <AnimatePresence mode="wait">
                                <MotionImage
                                  key={carouselIndexes[project.id] || 0}
                                  src={project.image[carouselIndexes[project.id] || 0]}
                                  alt={`${t(project.titleKey)} - ${(carouselIndexes[project.id] || 0) + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 500px"
                                  className="object-cover"
                                  initial={{ opacity: 0, x: 80 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -80 }}
                                  transition={{ duration: 0.45 }}
                                />
                              </AnimatePresence>
                              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                                {project.image.map((_, idx) => (
                                  <button
                                    type="button"
                                    key={idx}
                                    onClick={() => setCarouselIndexes(prev => ({ ...prev, [project.id]: idx }))}
                                    className={`h-2 rounded-full transition-all ${
                                      (carouselIndexes[project.id] || 0) === idx
                                        ? 'w-6 bg-[#8fb4be]'
                                        : 'w-2 bg-white/70'
                                    }`}
                                    aria-label={`Imagem ${idx + 1}`}
                                  />
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Image
                              src={project.image}
                              alt={t(project.titleKey)}
                              fill
                              sizes="(max-width: 768px) 100vw, 500px"
                              className="object-cover"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#030405]/60 to-transparent" />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-[#f4f1ea]">
                            {t(project.titleKey)}
                          </h4>
                          <p className="text-sm leading-relaxed text-[#aaa59b]">
                            {t(project.descriptionKey)}
                          </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h5 className="mb-3 text-base font-semibold text-[#8fb4be]">
                              Caracteristicas
                            </h5>
                            <ul className="space-y-2">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[#c9c4bb]">
                                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#b08a57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-xs">{t(feature)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="mb-3 text-base font-semibold text-[#8fb4be]">
                              {t('projects.technologies')}
                            </h5>
                            <ul className="space-y-2">
                              {project.technologies.map((tech, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[#c9c4bb]">
                                  <span className="mt-0.5 text-[#b08a57]">-</span>
                                  <span className="text-xs font-medium">
                                    {tech.name}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#e8e2d6] px-4 py-2 text-sm text-[#101211] transition-all hover:bg-white"
                            >
                              {t('projects.viewProject')}
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-[#f4f1ea] transition-all hover:border-[#8fb4be]/35"
                            >
                              {t('projects.viewCode')}
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
