'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Technology {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string | string[]; // Support single or multiple images
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
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: number]: number }>({});
  const { t } = useLanguage();

  // Auto-rotate carousel for projects with multiple images
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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [projects]);

  const toggleProject = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Project Header - Always Visible */}
            <div
              onClick={() => toggleProject(project.id)}
              className="w-full cursor-pointer bg-gradient-to-br from-[#1a123b]/50 to-[#0B0B0F]/50 backdrop-blur-sm border border-[#8A6FE8]/20 rounded-lg overflow-hidden hover:border-[#8A6FE8]/50 transition-all group"
            >
              <div className="grid md:grid-cols-[200px_1fr_auto] gap-4 items-center p-4">
                {/* Thumbnail Image */}
                <div className="relative h-24 rounded-lg overflow-hidden border border-[#8A6FE8]/10">
                  <img
                    src={Array.isArray(project.image) ? project.image[0] : project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/60 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#8A6FE8] to-[#4A3AFF] bg-clip-text text-transparent">
                      {t(project.titleKey)}
                    </h3>
                    <span className="text-xs text-gray-400 bg-[#8A6FE8]/10 px-2 py-1 rounded-full whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {t(project.descriptionKey)}
                  </p>
                  
                  {/* Technology Tags Preview */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-[#8A6FE8]/10 text-[#8A6FE8] rounded border border-[#8A6FE8]/20"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-1 text-gray-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expand Icon */}
                <motion.div
                  animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 px-4"
                >
                  <svg
                    className="w-6 h-6 text-[#8A6FE8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 bg-[#0B0B0F]/80 backdrop-blur-sm border border-[#8A6FE8]/20 rounded-lg p-6">
                    <div className="grid md:grid-cols-[500px_1fr] gap-8">
                      {/* Image Section - Left */}
                      <div className="relative">
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-[#8A6FE8]/20">
                          {Array.isArray(project.image) ? (
                            // Carousel for multiple images
                            <div className="relative w-full h-full">
                              <AnimatePresence mode="wait">
                                <motion.img
                                  key={carouselIndexes[project.id] || 0}
                                  src={project.image[carouselIndexes[project.id] || 0]}
                                  alt={`${t(project.titleKey)} - ${(carouselIndexes[project.id] || 0) + 1}`}
                                  className="w-full h-full object-cover"
                                  initial={{ opacity: 0, x: 100 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -100 }}
                                  transition={{ duration: 0.5 }}
                                />
                              </AnimatePresence>
                              {/* Carousel indicators */}
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {project.image.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setCarouselIndexes(prev => ({ ...prev, [project.id]: idx }))}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                      (carouselIndexes[project.id] || 0) === idx
                                        ? 'bg-[#8A6FE8] w-6'
                                        : 'bg-gray-500'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          ) : (
                            // Single image
                            <img
                              src={project.image}
                              alt={t(project.titleKey)}
                              className="w-full h-full object-cover"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 to-transparent" />
                        </div>
                      </div>

                      {/* Content Section - Right */}
                      <div className="space-y-6">
                        {/* Description */}
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            {t(project.titleKey)}
                          </h4>
                          <p className="text-gray-300 leading-relaxed text-sm">
                            {t(project.descriptionKey)}
                          </p>
                        </div>

                        {/* Features and Technologies Side by Side */}
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Features - Left Column */}
                          <div>
                            <h5 className="text-base font-semibold text-[#8A6FE8] mb-3">
                              Características
                            </h5>
                            <ul className="space-y-2">
                              {project.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-gray-300"
                                >
                                  <svg
                                    className="w-4 h-4 text-[#8A6FE8] mt-0.5 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  <span className="text-xs">{t(feature)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies - Right Column */}
                          <div>
                            <h5 className="text-base font-semibold text-[#8A6FE8] mb-3">
                              {t('projects.technologies')}
                            </h5>
                            <ul className="space-y-2">
                              {project.technologies.map((tech, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-gray-300"
                                >
                                  <span className="text-[#8A6FE8] mt-0.5">•</span>
                                  <span className="text-xs font-medium">
                                    {tech.name}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-2 bg-[#8A6FE8] text-white rounded-lg hover:bg-[#7559D1] transition-all flex items-center justify-center gap-2 text-sm"
                            >
                              {t('projects.viewProject')}
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-2 bg-transparent border-2 border-[#8A6FE8] text-[#8A6FE8] rounded-lg hover:bg-[#8A6FE8]/10 transition-all flex items-center justify-center gap-2 text-sm"
                            >
                              {t('projects.viewCode')}
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
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
