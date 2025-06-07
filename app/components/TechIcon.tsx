'use client';

import { motion, useAnimation } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

interface TechIconProps {
  name: string;
  color: string;
  children: ReactNode;
  index: number;
}

export function TechIcon({ name, color, children, index }: TechIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Animação automática
  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        y: [0, -10, 0],
        rotate: [0, 5, 0],
        transition: {
          duration: 4,
          ease: "easeInOut",
          delay: index * 0.2, // Delay baseado no índice para criar um efeito cascata
          repeat: Infinity,
          repeatDelay: 2
        }
      });
    };

    startAnimation();
  }, [controls, index]);

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className="relative"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      animate={controls}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Efeito de Glow */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{ 
          background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
          filter: 'blur(10px)'
        }}
        variants={glowVariants}
      />

      <div className="relative flex flex-col items-center gap-3">
        <motion.div
          className="w-20 h-20 rounded-xl flex items-center justify-center backdrop-blur-sm"
          style={{ 
            backgroundColor: `${color}10`,
            border: `1px solid ${color}30`
          }}
        >
          <motion.div 
            className="w-12 h-12" 
            style={{ color }}
            variants={iconVariants}
          >
            {children}
          </motion.div>
        </motion.div>

        <motion.span 
          className="text-sm font-medium"
          style={{ 
            color: isHovered ? color : '#6b7280',
            textShadow: isHovered ? `0 0 10px ${color}40` : 'none'
          }}
          animate={{ 
            y: isHovered ? -2 : 0,
            transition: { duration: 0.2 }
          }}
        >
          {name}
        </motion.span>
      </div>
    </motion.div>
  );
} 