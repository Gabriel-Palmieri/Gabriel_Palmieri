'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ReactNode } from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiGit,
  SiFirebase,
  SiFlutter,
  SiDocker,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiNestjs
} from 'react-icons/si';

interface TechItem {
  nameKey: string;
  icon: ReactNode;
}

export function TechStack() {
  const { t } = useLanguage();

  const categories = {
    frontend: [
      { nameKey: 'tech.react', icon: <SiReact /> },
      { nameKey: 'tech.nextjs', icon: <SiNextdotjs /> },
      { nameKey: 'tech.typescript', icon: <SiTypescript /> },
      { nameKey: 'tech.javascript', icon: <SiJavascript /> },
      { nameKey: 'tech.html', icon: <SiHtml5 /> },
      { nameKey: 'tech.css', icon: <SiCss3 /> },
      { nameKey: 'tech.tailwind', icon: <SiTailwindcss /> },
    ],
    backend: [
      { nameKey: 'tech.nodejs', icon: <SiNodedotjs /> },
      { nameKey: 'tech.nestjs', icon: <SiNestjs /> },
      { nameKey: 'tech.php', icon: <SiPhp /> },
    ],
    database: [
      { nameKey: 'tech.postgresql', icon: <SiPostgresql /> },
      { nameKey: 'tech.mysql', icon: <SiMysql /> },
      { nameKey: 'tech.prisma', icon: <SiPrisma /> },
    ],
    mobile: [
      { nameKey: 'tech.reactnative', icon: <SiReact /> },
      { nameKey: 'tech.flutter', icon: <SiFlutter /> },
    ],
    tools: [
      { nameKey: 'tech.git', icon: <SiGit /> },
      { nameKey: 'tech.docker', icon: <SiDocker /> },
      { nameKey: 'tech.firebase', icon: <SiFirebase /> },
    ]
  };

  const renderTechCard = (tech: TechItem, index: number) => (
    <motion.div
      key={tech.nameKey}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative bg-[#1a0f2e]/60 backdrop-blur-sm border border-[#8A6FE8]/20 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#8A6FE8]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,111,232,0.3)]"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8A6FE8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      {/* Icon */}
      <div className="relative text-[#8A6FE8] text-5xl group-hover:scale-110 transition-transform duration-300">
        {tech.icon}
      </div>
      
      {/* Name */}
      <span className="relative text-sm font-medium text-gray-300 group-hover:text-[#8A6FE8] transition-colors duration-300">
        {t(tech.nameKey)}
      </span>
    </motion.div>
  );

  const renderCategory = (categoryKey: keyof typeof categories, index: number) => {
    const techs = categories[categoryKey];
    
    return (
      <motion.div
        key={categoryKey}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="space-y-6"
      >
        {/* Category Title */}
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-[#8A6FE8] rounded-full" />
          <h3 className="text-xl font-semibold text-white">
            {t(`techstack.${categoryKey}`)}
          </h3>
        </div>
        
        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techs.map((tech, techIndex) => renderTechCard(tech, techIndex))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="tech" className="py-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8A6FE8] to-[#B794F6] bg-clip-text text-transparent">
            {t('techstack.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('techstack.subtitle')}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {(Object.keys(categories) as Array<keyof typeof categories>).map((category, index) => 
            renderCategory(category, index)
          )}
        </div>
      </div>
    </section>
  );
}
