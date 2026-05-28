'use client';

import { useLoading } from '../contexts/LoadingContext';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SparkleProps {
  left: string;
  top: string;
  moveX: string;
  moveY: string;
  finalX: string;
  finalY: string;
  opacity: number;
  delay: string;
  size: number;
  color: string;
}

export function LoadingScreen() {
  const { isLoading } = useLoading();
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    const colors = ['#0b1114', '#11191d', '#8fb4be', '#b08a57'];
    const newSparkles = Array(50).fill(null).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      moveX: `${(Math.random() - 0.5) * 300}px`,
      moveY: `${(Math.random() - 0.5) * 300}px`,
      finalX: `${(Math.random() - 0.5) * 500}px`,
      finalY: `${(Math.random() - 0.5) * 500}px`,
      opacity: 0.3 + Math.random() * 0.5,
      delay: `${Math.random() * 8}s`,
      size: 2 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setSparkles(newSparkles);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050607] overflow-hidden">
      {/* Efeito de Nebulosa */}
      <div className="nebula-effect">
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
      </div>

      {/* Ondas de Energia */}
      <div className="energy-waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>

      {/* Partículas Brilhantes */}
      <div className="sparkles">
        {sparkles.map((sparkle, i) => (
          <motion.div
            key={i}
            className="sparkle"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: sparkle.opacity }}
            style={{
              left: sparkle.left,
              top: sparkle.top,
              '--moveX': sparkle.moveX,
              '--moveY': sparkle.moveY,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              backgroundColor: sparkle.color,
              boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
              animationDelay: sparkle.delay
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Logo animado */}
        <motion.div 
          className="relative w-32 h-32 mb-8"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="#8fb4be"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.path
              d="M2 17L12 22L22 17"
              stroke="#11191d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.path
              d="M2 12L12 17L22 12"
              stroke="#8fb4be"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </svg>

          {/* Círculos de loading */}
          <div className="absolute inset-0">
            <div className="loading-spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>
          </div>
        </motion.div>

        {/* Texto de loading com efeito de digitação */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl font-bold mb-4 text-[#f4f1ea] typing-text"
          >
            Carregando seu portfólio...
          </motion.h2>
          
          {/* Barra de progresso */}
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-[#11191d]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
