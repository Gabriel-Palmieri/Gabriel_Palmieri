'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function PortfolioLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0B0B0F] via-[#1a0f2e] to-[#0B0B0F] overflow-hidden"
      >
        {/* Animated Background Orbs */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8A6FE8] rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.3, 0.2],
              x: [0, -50, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#4A3AFF] rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#B794F6] rounded-full blur-[100px]"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center gap-16 px-4">
          {/* Animated Logo/Icon */}
          <div className="relative">
            {/* Outer rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-40 h-40"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="0.5"
                  strokeDasharray="10 5"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8A6FE8" />
                    <stop offset="100%" stopColor="#4A3AFF" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-40 h-40"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="0.5"
                  strokeDasharray="5 10"
                  opacity="0.4"
                />
                <defs>
                  <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#B794F6" />
                    <stop offset="100%" stopColor="#8A6FE8" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Center icon with pulse */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-40 h-40 rounded-full bg-gradient-to-br from-[#8A6FE8]/20 via-[#7559D1]/10 to-[#4A3AFF]/20 backdrop-blur-xl flex items-center justify-center border border-[#8A6FE8]/30"
            >
              {/* Code brackets icon */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-20 h-20 text-[#8A6FE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </motion.div>

              {/* Inner glow */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-[#8A6FE8]/30 blur-2xl"
              />
            </motion.div>

            {/* Orbiting particles */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3,
                }}
                className="absolute inset-0 w-40 h-40"
                style={{
                  transformOrigin: 'center',
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0.3, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute top-0 left-1/2 w-2 h-2 bg-[#8A6FE8] rounded-full -translate-x-1/2"
                  style={{
                    boxShadow: '0 0 10px #8A6FE8',
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-3"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-[#8A6FE8] via-[#B794F6] to-[#8A6FE8] bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Gabriel Palmieri
              </motion.span>
            </h1>
            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 text-sm tracking-[0.3em] uppercase"
            >
              Loading Experience
            </motion.p>
          </motion.div>

          {/* Modern Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-sm space-y-4"
          >
            {/* Circular progress indicators */}
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: progress > i * 20 ? [1, 1.3, 1] : 1,
                    opacity: progress > i * 20 ? 1 : 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: progress > i * 20 ? Infinity : 0,
                    repeatDelay: 0.5,
                  }}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8A6FE8] to-[#B794F6]"
                  style={{
                    boxShadow: progress > i * 20 ? '0 0 10px #8A6FE8' : 'none',
                  }}
                />
              ))}
            </div>

            {/* Sleek progress bar */}
            <div className="relative h-1 bg-[#1a0f2e]/50 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[#8A6FE8] via-[#B794F6] to-[#8A6FE8] rounded-full relative"
                transition={{ duration: 0.3 }}
              >
                {/* Animated shimmer */}
                <motion.div
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              </motion.div>
            </div>

            {/* Progress percentage */}
            <motion.div
              key={progress}
              initial={{ scale: 1.1, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-[#8A6FE8] to-[#B794F6] bg-clip-text text-transparent">
                {progress}%
              </span>
            </motion.div>
          </motion.div>

          {/* Animated dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 bg-[#8A6FE8] rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Floating code snippets effect */}
        {[...Array(8)].map((_, i) => {
          const symbols = ['</', '/>', '{', '}', '( )', '=>', '[ ]', '< >'];
          return (
            <motion.div
              key={i}
              initial={{
                x: `${(i * 12.5)}%`,
                y: '100%',
                opacity: 0,
              }}
              animate={{
                y: ['-100%', '-200%'],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "linear",
              }}
              className="absolute text-[#8A6FE8]/20 text-2xl font-mono"
            >
              {symbols[i]}
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
