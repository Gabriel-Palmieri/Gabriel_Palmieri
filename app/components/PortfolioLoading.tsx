'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function PortfolioLoading() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Inicializando');

  useEffect(() => {
    const texts = [
      'Inicializando',
      'Carregando componentes',
      'Preparando projetos',
      'Otimizando experiência',
      'Quase pronto'
    ];
    
    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0F] overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8A6FE8]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4A3AFF]/20 rounded-full blur-3xl"
          />

          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[linear-gradient(90deg,#8A6FE8_1px,transparent_1px),linear-gradient(0deg,#8A6FE8_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => {
            // Use index-based values for consistent SSR/client rendering
            const xStart = (i * 73) % 100;
            const yStart = (i * 47) % 100;
            const xEnd = ((i + 10) * 83) % 100;
            const yEnd = ((i + 10) * 59) % 100;
            const duration = 2 + (i % 3);
            const delay = (i % 4) * 0.5;
            
            return (
              <motion.div
                key={i}
                initial={{
                  x: `${xStart}%`,
                  y: `${yStart}%`,
                  scale: 0,
                }}
                animate={{
                  y: [`${yStart}%`, `${yEnd}%`],
                  x: [`${xStart}%`, `${xEnd}%`],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                }}
                className="absolute w-1 h-1 bg-[#8A6FE8] rounded-full"
              />
            );
          })}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center gap-12 px-4">
          {/* Logo Container with Multiple Rotating Rings */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="relative"
          >
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-32 h-32 rounded-full border-2 border-[#8A6FE8]/30 border-t-[#8A6FE8]"
            />
            
            {/* Middle Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 w-28 h-28 rounded-full border-2 border-[#4A3AFF]/30 border-b-[#4A3AFF]"
            />

            {/* Inner Circle with Icon */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#8A6FE8] via-[#7559D1] to-[#4A3AFF] flex items-center justify-center shadow-2xl">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-white"
              >
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </motion.div>
            </div>

            {/* Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 w-32 h-32 rounded-full bg-[#8A6FE8]/40 blur-2xl"
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8A6FE8] via-[#7559D1] to-[#4A3AFF] bg-clip-text text-transparent"
            >
              Gabriel Palmieri
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-8"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={loadingText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 text-lg"
                >
                  {loadingText}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-md space-y-3"
          >
            {/* Bar Container */}
            <div className="relative h-3 bg-[#1a123b] rounded-full overflow-hidden border border-[#8A6FE8]/20">
              {/* Progress Fill */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[#8A6FE8] via-[#7559D1] to-[#4A3AFF] rounded-full relative"
                transition={{ duration: 0.3 }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  animate={{ x: [-100, 400] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </motion.div>

              {/* Glow on progress */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-[#8A6FE8]/50 to-[#4A3AFF]/50 blur-md"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Progress Info */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Carregando recursos</span>
              <motion.span
                key={progress}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-[#8A6FE8] font-bold"
              >
                {progress}%
              </motion.span>
            </div>
          </motion.div>

          {/* Loading Indicators */}
          <div className="flex gap-3">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                className="w-3 h-3 bg-gradient-to-br from-[#8A6FE8] to-[#4A3AFF] rounded-full"
              />
            ))}
          </div>

          {/* Fun Fact */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-600 text-xs max-w-md text-center"
          >
            💡 Dica: Cada linha de código é uma oportunidade de criar algo incrível
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
