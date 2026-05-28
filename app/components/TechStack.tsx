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

interface TechGroup {
  key: string;
  labelKey: string;
  description: string;
  techs: TechItem[];
}

export function TechStack() {
  const { t } = useLanguage();

  const groups: TechGroup[] = [
    {
      key: 'interface',
      labelKey: 'techstack.frontend',
      description: 'Experiencias responsivas, componentes reutilizaveis e interfaces com boa leitura visual.',
      techs: [
        { nameKey: 'tech.react', icon: <SiReact /> },
        { nameKey: 'tech.nextjs', icon: <SiNextdotjs /> },
        { nameKey: 'tech.typescript', icon: <SiTypescript /> },
        { nameKey: 'tech.javascript', icon: <SiJavascript /> },
        { nameKey: 'tech.tailwind', icon: <SiTailwindcss /> },
        { nameKey: 'tech.html', icon: <SiHtml5 /> },
        { nameKey: 'tech.css', icon: <SiCss3 /> }
      ]
    },
    {
      key: 'systems',
      labelKey: 'techstack.backend',
      description: 'APIs, regras de negocio e integracoes pensadas para escala.',
      techs: [
        { nameKey: 'tech.nodejs', icon: <SiNodedotjs /> },
        { nameKey: 'tech.nestjs', icon: <SiNestjs /> },
        { nameKey: 'tech.php', icon: <SiPhp /> },
        { nameKey: 'tech.prisma', icon: <SiPrisma /> }
      ]
    },
    {
      key: 'data',
      labelKey: 'techstack.database',
      description: 'Modelagem, persistencia e ferramentas que sustentam produtos de verdade.',
      techs: [
        { nameKey: 'tech.postgresql', icon: <SiPostgresql /> },
        { nameKey: 'tech.mysql', icon: <SiMysql /> },
        { nameKey: 'tech.firebase', icon: <SiFirebase /> },
        { nameKey: 'tech.docker', icon: <SiDocker /> },
        { nameKey: 'tech.git', icon: <SiGit /> }
      ]
    },
    {
      key: 'mobile',
      labelKey: 'techstack.mobile',
      description: 'Base para levar produtos a experiencias mobile com consistencia entre telas.',
      techs: [
        { nameKey: 'tech.reactnative', icon: <SiReact /> },
        { nameKey: 'tech.flutter', icon: <SiFlutter /> }
      ]
    }
  ];

  return (
    <section id="tech" className="px-4 py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#8fb4be]">
              Stack
            </span>
            <h2 className="text-4xl font-semibold leading-tight text-[#f4f1ea] md:text-5xl">
              {t('techstack.title')}
            </h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-8 text-[#b7b2a8]">
            {t('techstack.subtitle')}
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#030405]">
          {groups.map((group, index) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="grid gap-6 border-b border-white/10 p-6 last:border-b-0 md:grid-cols-[240px_1fr]"
            >
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#11191d]" />
                  <h3 className="text-lg font-semibold text-[#f4f1ea]">
                    {t(group.labelKey)}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-[#8e8981]">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {group.techs.map((tech) => (
                  <motion.div
                    key={tech.nameKey}
                    whileHover={{ y: -3 }}
                    className="group flex min-h-20 items-center gap-3 rounded-lg border border-white/10 bg-[#070809] px-4 py-3 transition-colors hover:border-[#8fb4be]/35 hover:bg-[#0a0c0d]"
                  >
                    <span className="text-2xl text-[#8fb4be] transition-colors group-hover:text-[#d9eef2]">
                      {tech.icon}
                    </span>
                    <span className="text-sm font-medium text-[#d4cec3]">
                      {t(tech.nameKey)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
