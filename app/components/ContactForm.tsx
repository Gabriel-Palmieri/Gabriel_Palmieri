'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: t('contact.sending') });

    try {
      // Configurações do EmailJS
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Validação das variáveis de ambiente
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error('Variáveis de ambiente EmailJS não encontradas:', {
          temServiceId: !!SERVICE_ID,
          temTemplateId: !!TEMPLATE_ID,
          temPublicKey: !!PUBLIC_KEY,
          todasEnvVars: Object.keys(process.env).filter(k => k.includes('EMAILJS'))
        });
        throw new Error('Configurações do EmailJS não encontradas. Verifique as variáveis de ambiente no Vercel.');
      }

      // Formata a data e hora atual
      const now = new Date();
      const time = now.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      const year = now.getFullYear();

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          from_name: formData.name, // Mantido para compatibilidade
          from_email: formData.email,
          email: formData.email, // Adicionado para referência
          message: formData.message,
          time: time,
          subject: `Mensagem de ${formData.name} - ${time}`, // Assunto da mensagem
          year: year, // Ano atual para o rodapé
        },
        PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: t('contact.success')
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: unknown) {
      console.error('Erro ao enviar email:', error);
      
      // Mensagem de erro mais específica
      let errorMessage = t('contact.error');
      if (error instanceof Error) {
        if (error.message.includes('Configurações')) {
          errorMessage = 'Erro de configuração. Entre em contato com o administrador.';
        } else if (error.message.includes('Invalid')) {
          errorMessage = 'Credenciais inválidas. Verifique as configurações.';
        }
      }
      
      setStatus({
        type: 'error',
        message: errorMessage
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#d8d0c3]">
            {t('contact.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-[#8d8982] transition-colors focus:border-[#c99a4a] focus:outline-none"
            placeholder={t('contact.namePlaceholder')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#d8d0c3]">
            {t('contact.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-[#8d8982] transition-colors focus:border-[#c99a4a] focus:outline-none"
            placeholder={t('contact.emailPlaceholder')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#d8d0c3]">
            {t('contact.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full resize-none rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-[#8d8982] transition-colors focus:border-[#c99a4a] focus:outline-none"
            placeholder={t('contact.messagePlaceholder')}
          />
        </motion.div>

        {status.message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center p-3 rounded-lg ${
              status.type === 'success' ? 'bg-green-500/20 text-green-400' :
              status.type === 'error' ? 'bg-red-500/20 text-red-400' :
              'bg-blue-500/20 text-blue-400'
            }`}
          >
            {status.message}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status.type === 'loading'}
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 font-medium text-[#171717] transition-all duration-200 hover:bg-[#f6f3ee] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status.type === 'loading' ? t('contact.sending') : t('contact.send')}
            {status.type !== 'loading' && (
              <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
} 
