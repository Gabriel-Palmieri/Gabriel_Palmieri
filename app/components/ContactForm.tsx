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
      await emailjs.send(
        'service_ob6muzd',
        'template_jhdpo89',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'qIz9nZFfGP3GNH2tW'
      );

      setStatus({
        type: 'success',
        message: t('contact.success')
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: unknown) {
      console.error('Erro ao enviar email:', error);
      setStatus({
        type: 'error',
        message: t('contact.error')
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            {t('contact.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#1a123b]/20 border border-[#8A6FE8]/20 rounded-lg focus:outline-none focus:border-[#8A6FE8] transition-colors text-white placeholder-gray-400"
            placeholder={t('contact.namePlaceholder')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            {t('contact.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#1a123b]/20 border border-[#8A6FE8]/20 rounded-lg focus:outline-none focus:border-[#8A6FE8] transition-colors text-white placeholder-gray-400"
            placeholder={t('contact.emailPlaceholder')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            {t('contact.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-[#1a123b]/20 border border-[#8A6FE8]/20 rounded-lg focus:outline-none focus:border-[#8A6FE8] transition-colors text-white placeholder-gray-400 resize-none"
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
            className="inline-flex items-center justify-center px-8 py-4 bg-[#8A6FE8] text-white rounded-lg font-medium transition-all duration-200 hover:bg-[#7559D1] hover:shadow-lg hover:shadow-[#8A6FE8]/20 disabled:opacity-50 disabled:cursor-not-allowed"
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