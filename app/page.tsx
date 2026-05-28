'use client';

import { useEffect, useState } from 'react';
import { AboutMe } from './components/AboutMe';
import { TechStack } from './components/TechStack';
import { HeroIllustration } from './components/HeroIllustration';
import { Navbar } from './components/Navbar';
import { PortfolioLoading } from './components/PortfolioLoading';
import { motion } from 'framer-motion';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SoftSkills from './components/SoftSkills';
import { useLanguage } from './contexts/LanguageContext';
import { ModernProjects } from './components/ModernProjects';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || loading) {
    return <PortfolioLoading />;
  }

  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.16
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      id: 1,
      titleKey: 'projects.rimac.title',
      descriptionKey: 'projects.rimac.description',
      image: ['/assets/mobilia1.png', '/assets/mobilia2.png', '/assets/mobilia3.png'],
      githubUrl: 'https://github.com/Guimenn/MobiliAI',
      year: '2025',
      features: [
        'projects.rimac.feature1',
        'projects.rimac.feature2',
        'projects.rimac.feature3',
        'projects.rimac.feature4'
      ],
      technologies: [
        { name: 'Next.js', icon: (<svg></svg>) },
        { name: 'Tailwind CSS', icon: (<svg></svg>) },
        { name: 'NestJS', icon: (<svg></svg>) },
        { name: 'PostgreSQL', icon: (<svg></svg>) },
        { name: 'Prisma ORM', icon: (<svg></svg>) },
        { name: 'OpenAI API', icon: (<svg></svg>) }
      ]
    },
    {
      id: 2,
      titleKey: 'projects.thornfield.title',
      descriptionKey: 'projects.thornfield.description',
      image: '/assets/thornfield.png',
      liveUrl: 'https://thornfield-a.vercel.app',
      githubUrl: 'https://github.com/Guimenn/Thornfield-a',
      year: '2025',
      features: [
        'projects.thornfield.feature1',
        'projects.thornfield.feature2',
        'projects.thornfield.feature3',
        'projects.thornfield.feature4'
      ],
      technologies: [
        { name: 'Next.js', icon: (<svg></svg>) },
        { name: 'Tailwind CSS', icon: (<svg></svg>) },
        { name: 'TypeScript', icon: (<svg></svg>) },
        { name: 'Firebase', icon: (<svg></svg>) }
      ]
    },
    {
      id: 3,
      titleKey: 'projects.saldoverde.title',
      descriptionKey: 'projects.saldoverde.description',
      image: '/assets/saldo.png',
      liveUrl: 'https://projeto-financias.vercel.app/',
      githubUrl: 'https://github.com/Gabriel-Palmieri/Saldo_Verde',
      year: '2024',
      features: [
        'projects.saldoverde.feature1',
        'projects.saldoverde.feature2',
        'projects.saldoverde.feature3',
        'projects.saldoverde.feature4'
      ],
      technologies: [
        { name: 'Next.js', icon: (<svg></svg>) },
        { name: 'Node.js', icon: (<svg></svg>) },
        { name: 'MySQL', icon: (<svg></svg>) }
      ]
    },
    {
      id: 4,
      titleKey: 'projects.neobank.title',
      descriptionKey: 'projects.neobank.description',
      image: '/assets/neobank.jpeg',
      githubUrl: 'https://github.com/Gabriel-Palmieri/NeoBank',
      year: '2024',
      features: [
        'projects.neobank.feature1',
        'projects.neobank.feature2',
        'projects.neobank.feature3',
        'projects.neobank.feature4'
      ],
      technologies: [
        { name: 'HTML5', icon: (<svg></svg>) },
        { name: 'CSS3', icon: (<svg></svg>) },
        { name: 'PHP', icon: (<svg></svg>) }
      ]
    }
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030405] text-[#f4f1ea]">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_72%_18%,rgba(143,180,190,0.045),transparent_32%),linear-gradient(180deg,#040506_0%,#030405_62%)]" />

      <Navbar />

      <section id="home" className="relative flex min-h-screen items-center px-6 pb-16 pt-28 sm:px-8">
        <div className="container relative z-10 mx-auto grid items-center gap-12 px-0 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.span
              variants={itemAnimation}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-[#b8c7c9]"
            >
              Gabriel Palmieri | Full Stack Developer
            </motion.span>

            <motion.div variants={itemAnimation}>
              <h1 className="mb-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal text-[#f4f1ea] md:text-7xl">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="inline-block"
                >
                  {t('hero.role')}
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemAnimation}
              className="max-w-xl text-lg leading-8 text-[#b7b2a8] md:text-xl"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={itemAnimation}
              className="flex flex-wrap gap-3"
            >
              {["ReactJS", "Javascript", "NodeJs", "Tailwind"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -2 }}
                  className="cursor-default rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-medium text-[#c9c4bb] transition-all hover:border-[#8fb4be]/35 hover:text-[#d9eef2]"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={itemAnimation}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center rounded-md bg-[#e8e2d6] px-6 py-3 text-base font-medium text-[#101211] transition-all duration-200 ease-out hover:bg-white"
              >
                {t('projects.title')}
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-6 py-3 text-base font-medium text-[#f4f1ea] transition-all duration-200 ease-out hover:border-[#8fb4be]/45 hover:text-[#d9eef2]"
              >
                {t('contact.title')}
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative h-[460px] w-full md:h-[640px]"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-[#050607]/85 shadow-[0_24px_90px_rgba(0,0,0,0.45)]" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
              <HeroIllustration />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        <section id="about" className="border-y border-white/10 bg-[#141715]/80 px-6 py-24 sm:px-8">
          <div className="container mx-auto">
            <AboutMe />
          </div>
        </section>

        <section id="tech" className="relative px-6 py-24 sm:px-8">
          <div className="container mx-auto relative z-10">
            <TechStack />
          </div>
        </section>

        <section id="softskills" className="border-y border-white/10 bg-[#030405] px-6 py-24 sm:px-8">
          <div className="container mx-auto">
            <SoftSkills />
          </div>
        </section>

        <section id="projects" className="relative px-6 py-24 sm:px-8">
          <div className="container mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mb-16 text-center text-4xl font-semibold text-[#f4f1ea]"
            >
              {t('projects.title')}
            </motion.h2>
            <ModernProjects projects={projects} />
          </div>
        </section>

        <section id="contact" className="relative border-t border-white/10 bg-[#030405] px-6 py-24 text-white sm:px-8">
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-4xl font-semibold">{t('contact.title')}</h2>
              <p className="mx-auto max-w-2xl text-[#c9c4bb]">
                {t('contact.description')}
              </p>
            </motion.div>

            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
