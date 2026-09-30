'use client';

import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactForm() {
  const { t, language } = useLanguage();
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error' | 'unavailable'
  >('idle');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'loading') return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!service || !template || !publicKey) {
      setStatus('unavailable');
      return;
    }
    setStatus('loading');
    const now = new Date();
    const time = now.toLocaleString('pt-BR');
    try {
      await emailjs.send(
        service,
        template,
        {
          name: data.get('name'),
          from_name: data.get('name'),
          email: data.get('email'),
          from_email: data.get('email'),
          message: data.get('message'),
          time,
          year: now.getFullYear(),
          subject: `Mensagem de ${data.get('name')} - ${time}`,
        },
        publicKey,
      );
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }
  return (
    <form
      onSubmit={submit}
      className="flex flex-col gap-6 [&_label]:block [&_label]:mb-[9px] [&_label]:text-[12px] [&_textarea]:resize-y [&_textarea]:min-h-[132px]"
      aria-busy={status === 'loading'}
    >
      <div className="grid grid-cols-2 gap-6 max-[760px]:gap-4 max-[380px]:grid-cols-1 max-[380px]:gap-6">
        <div>
          <label htmlFor="name">{t('contact.name')}</label>
          <input
            className="w-full min-w-0 rounded-[5px] border border-line bg-surface px-3.5 py-3 text-[13px] text-foreground transition-colors duration-[160ms] hover:border-muted placeholder:text-muted max-[760px]:text-[16px]"
            id="name"
            name="name"
            autoComplete="name"
            placeholder={t('contact.namePlaceholder')}
            required
            maxLength={120}
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label htmlFor="email">{t('contact.email')}</label>
          <input
            className="w-full min-w-0 rounded-[5px] border border-line bg-surface px-3.5 py-3 text-[13px] text-foreground transition-colors duration-[160ms] hover:border-muted placeholder:text-muted max-[760px]:text-[16px]"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t('contact.emailPlaceholder')}
            required
            maxLength={254}
            disabled={status === 'loading'}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message">{t('contact.message')}</label>
        <textarea
          className="w-full min-w-0 rounded-[5px] border border-line bg-surface px-3.5 py-3 text-[13px] text-foreground transition-colors duration-[160ms] hover:border-muted placeholder:text-muted max-[760px]:text-[16px]"
          id="message"
          name="message"
          rows={5}
          placeholder={t('contact.messagePlaceholder')}
          required
          maxLength={5000}
          disabled={status === 'loading'}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex min-h-[46px] items-center justify-center gap-6 rounded-[5px] border-0 bg-foreground px-[18px] py-3 text-[12px] font-semibold text-background transition-colors duration-[160ms] hover:bg-accent hover:text-background [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-[220ms] [&_svg]:ease-out-expo [&:hover_svg]:translate-x-0.5"
          disabled={status === 'loading'}
        >
          {t(status === 'loading' ? 'contact.sending' : 'contact.send')}
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 12h16m-6-6 6 6-6 6" />
          </svg>
        </button>
        <p
          role="status"
          className="max-w-[48ch] text-[12px] text-accent data-[error=true]:text-[#f1b3ae]"
          data-error={status === 'error' || status === 'unavailable'}
        >
          {status === 'success' && t('contact.success')}
          {status === 'error' && t('contact.error')}
          {status === 'unavailable' &&
            (language === 'pt'
              ? 'Envio indisponível no momento. Você pode falar comigo pelo LinkedIn ao lado.'
              : 'Sending is currently unavailable. You can reach me using the LinkedIn link.')}
        </p>
      </div>
    </form>
  );
}
