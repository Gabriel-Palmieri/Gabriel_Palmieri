'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface Skill {
  nameKey: string;
  descriptionKey: string;
  icon: ReactNode;
}

const softSkills: Skill[] = [
  {
    nameKey: "softSkills.communication.title",
    descriptionKey: "softSkills.communication.description",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    )
  },
  {
    nameKey: "softSkills.problemSolving.title",
    descriptionKey: "softSkills.problemSolving.description",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  {
    nameKey: "softSkills.teamwork.title",
    descriptionKey: "softSkills.teamwork.description",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    nameKey: "softSkills.adaptability.title",
    descriptionKey: "softSkills.adaptability.description",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2v6h-6"/>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
        <path d="M3 22v-6h6"/>
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
      </svg>
    )
  },
  {
    nameKey: "softSkills.timeManagement.title",
    descriptionKey: "softSkills.timeManagement.description",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  {
    nameKey: "softSkills.criticalThinking.title",
    descriptionKey: "softSkills.criticalThinking.description",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    )
  }
];

export default function SoftSkills() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"
      >
        <div>
          <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#b08a57]">
            Forma de trabalho
          </span>
          <h2 className="text-4xl font-semibold leading-tight text-[#f4f1ea] md:text-5xl">
            {t('softSkills.title')}
          </h2>
        </div>
        <p className="max-w-3xl self-end text-lg leading-8 text-[#b7b2a8]">
          {t('softSkills.description')}
        </p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-6">
        {softSkills.map((skill, index) => (
          <motion.article
            key={skill.nameKey}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className={`group min-h-[260px] rounded-xl border border-white/10 bg-[#050607]/90 p-5 transition-colors hover:border-[#8fb4be]/35 hover:bg-[#08090a] ${
              index === 0 || index === 1 ? 'lg:col-span-3' : 'lg:col-span-2'
            }`}
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="font-mono text-sm text-[#8fb4be]">
                0{index + 1}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#d9eef2] transition-colors group-hover:border-[#8fb4be]/35">
                {skill.icon}
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-[#f4f1ea]">
              {t(skill.nameKey)}
            </h3>
            <p className="max-w-xl text-sm leading-7 text-[#aaa59b]">
              {t(skill.descriptionKey)}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
