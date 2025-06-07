'use client';

import { motion } from 'framer-motion';

interface Competencia {
  icon: React.ReactNode;
  titulo: string;
  descricao: string;
  habilidades: string[];
}

interface CompetenciasProps {
  competencias: Competencia[];
}

export function Competencias({ competencias }: CompetenciasProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="grid md:grid-cols-3 gap-8"
    >
      {competencias.map((competencia, index) => (
        <motion.div
          key={competencia.titulo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-[#1a123b]/20 backdrop-blur-sm p-6 rounded-xl border border-[#8A6FE8]/20 hover:border-[#8A6FE8]/40 transition-all duration-300"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="text-[#8A6FE8] mb-4"
          >
            {competencia.icon}
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="text-xl font-semibold mb-2"
          >
            {competencia.titulo}
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            className="text-gray-400 mb-4"
          >
            {competencia.descricao}
          </motion.p>
          
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
            className="space-y-2"
          >
            {competencia.habilidades.map((habilidade, hIndex) => (
              <motion.li
                key={habilidade}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3, delay: index * 0.2 + hIndex * 0.1 + 0.6 }}
                className="flex items-center text-gray-300"
              >
                <svg className="w-4 h-4 mr-2 text-[#8A6FE8]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {habilidade}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </motion.div>
  );
} 