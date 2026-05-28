'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutMe() {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col md:flex-row gap-12 items-center"
    >
      {/* Foto à esquerda */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
      >
        <div className="absolute inset-0 rounded-full bg-[#8fb4be]/8 blur-2xl" />
        <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-[#050607] shadow-[0_18px_70px_rgba(0,0,0,0.45)]">
          <Image
            src="/me.jpeg"
            alt={t('about.title')}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 192px, 256px"
            priority
          />
        </div>
      </motion.div>

      {/* Conteúdo à direita */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl font-semibold text-[#f4f1ea] mb-2"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[#8fb4be] text-xl font-medium"
          >
            {t('hero.role')}
          </motion.p>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[#b7b2a8] leading-relaxed"
        >
          {t('about.description')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center md:justify-start gap-6"
        >
          <a
            href="https://github.com/Gabriel-Palmieri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aaa59b] hover:text-[#d9eef2] transition-colors"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 22V18.109C10.438 18.109 9.875 18.109 9.156 18.109C7.992 18.109 7.008 17.531 6.633 16.578C6.258 15.625 6.258 14.391 5.508 13.672C5.258 13.422 5.508 13.172 5.883 13.172C6.633 13.297 7.258 13.984 7.758 14.766C8.258 15.547 8.758 16.016 9.883 16.016C10.883 16.016 11.508 15.953 11.883 15.828C12.133 14.953 12.633 14.141 13.383 13.734C9.883 13.328 7.883 11.703 7.883 9.016C7.883 8.016 8.258 7.016 8.883 6.141C8.758 5.891 8.508 4.891 8.883 3.766C8.883 3.766 10.383 3.766 11.883 5.016C12.508 4.766 13.383 4.641 14.258 4.641C15.133 4.641 16.008 4.766 16.633 5.016C18.133 3.766 19.633 3.766 19.633 3.766C20.008 4.891 19.758 5.891 19.633 6.141C20.258 7.016 20.633 8.016 20.633 9.016C20.633 11.703 18.633 13.328 15.133 13.734C16.133 14.266 16.883 15.516 16.883 16.766V22C21.664 21.128 25.321 16.991 25.321 12C25.321 6.477 20.844 2 15.321 2H12Z"/>
            </svg>
          </a>
          
          <a
            href="https://www.linkedin.com/in/gabriel-palmieri12/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aaa59b] hover:text-[#d9eef2] transition-colors"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/palmieri_012/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aaa59b] hover:text-[#d9eef2] transition-colors"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
        
      </motion.div>

      {/* Partículas decorativas */}
      <div className="absolute -top-8 -left-8 w-16 h-16 opacity-20">
        <svg className="w-full h-full animate-spin-reverse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="#11191d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="#11191d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="#11191d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute -bottom-8 -right-8 w-20 h-20 opacity-20">
        <svg className="w-full h-full animate-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 16V8C21 6.9 20.1 6 19 6H17V4C17 2.9 16.1 2 15 2H9C7.9 2 7 2.9 7 4V6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H7V20C7 21.1 7.9 22 9 22H15C16.1 22 17 21.1 17 20V18H19C20.1 18 21 17.1 21 16Z"
            stroke="#b08a57"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
} 
