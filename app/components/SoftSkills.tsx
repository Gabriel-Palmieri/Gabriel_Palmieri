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
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    )
  },
  {
    nameKey: "softSkills.problemSolving.title",
    descriptionKey: "softSkills.problemSolving.description",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  {
    nameKey: "softSkills.teamwork.title",
    descriptionKey: "softSkills.teamwork.description",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  {
    nameKey: "softSkills.criticalThinking.title",
    descriptionKey: "softSkills.criticalThinking.description",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function SoftSkills() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#8A6FE8] to-[#4A3AFF]">
            {t('softSkills.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('softSkills.description')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 30px rgba(138, 111, 232, 0.1)"
              }}
              className="group relative bg-gradient-to-br from-[#1a123b]/60 to-[#1a123b]/40 backdrop-blur-sm border border-[#8A6FE8]/10 rounded-xl p-6 hover:border-[#8A6FE8]/30 transition-all duration-300"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A6FE8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative flex items-start space-x-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#8A6FE8]/10 to-[#4A3AFF]/10 rounded-lg flex items-center justify-center border border-[#8A6FE8]/20 group-hover:border-[#8A6FE8]/30 transition-colors">
                  <div className="text-[#8A6FE8] group-hover:text-[#8A6FE8] transition-colors">
                    {skill.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#8A6FE8] transition-colors">
                    {t(skill.nameKey)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {t(skill.descriptionKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 