'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const loadingSteps = ['Interface', 'Projetos', 'Experiencia'];

export function PortfolioLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 28);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-hidden bg-[#050607] text-[#f4f1ea]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(143,180,190,0.06),transparent_34%),radial-gradient(circle_at_20%_15%,rgba(176,138,87,0.04),transparent_28%),linear-gradient(180deg,#07090a_0%,#050607_70%)]" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-7 sm:px-10 lg:px-14">
          <header className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#8e8981]">
            <span>Gabriel Palmieri</span>
            <span>{progress}%</span>
          </header>

          <main className="mx-auto grid w-full max-w-6xl items-end gap-12 lg:grid-cols-[1fr_360px]">
            <section>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-[#b8c7c9]"
              >
                Preparando portfolio
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-normal text-[#f4f1ea] sm:text-7xl lg:text-8xl"
              >
                Full-stack com foco em produto.
              </motion.h1>
            </section>

            <aside className="rounded-2xl border border-white/10 bg-[#050607]/92 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#aaa59b]">Carregando</p>
                  <p className="mt-1 text-2xl font-semibold text-[#f4f1ea]">
                    Experiencia
                  </p>
                </div>
                <div className="relative h-14 w-14 rounded-full border border-white/10">
                  <motion.div
                    className="absolute inset-2 rounded-full border border-[#1a252a]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="absolute inset-[18px] rounded-full bg-[#11191d]" />
                </div>
              </div>

              <div className="space-y-4">
                {loadingSteps.map((step, index) => {
                  const isActive = progress >= (index + 1) * 28;

                  return (
                    <div key={step} className="flex items-center gap-3">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs transition-colors ${
                          isActive
                            ? 'border-[#1a252a] bg-[#0b1114] text-[#d9eef2]'
                            : 'border-white/10 text-[#6f6a63]'
                        }`}
                      >
                        {index + 1}
                      </span>
                      <div className="h-px flex-1 bg-white/10">
                        <motion.div
                          className="h-px bg-[#1a252a]"
                          initial={{ width: 0 }}
                          animate={{ width: isActive ? '100%' : '0%' }}
                          transition={{ duration: 0.45 }}
                        />
                      </div>
                      <span className={isActive ? 'text-sm text-[#c9c4bb]' : 'text-sm text-[#6f6a63]'}>
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </aside>
          </main>

          <footer>
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-full bg-[#11191d]"
              />
            </div>
          </footer>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
