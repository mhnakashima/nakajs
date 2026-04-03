import { useState, useMemo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { useI18n } from '@/context/I18nContext';
import { createContactSchema, COOLDOWN_MS } from '@/schemas/contactSchema';
import type { ContactFormData } from '@/schemas/contactSchema';
import { UserIcon, MessageIcon, SendIcon, DownloadIcon, EmailIcon } from '@/components/icons';
import { ContactLinksGrid } from '@molecules/ContactLinks';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const { t, locale } = useI18n();
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const schema = useMemo(() => createContactSchema(t), [t, locale]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const [lastSentAt, setLastSentAt] = useState(0);

  const onSubmit = useCallback(
    async (data: ContactFormData) => {
      if (data.website_url) return;

      const now = Date.now();
      if (now - lastSentAt < COOLDOWN_MS) {
        setStatus('error');
        return;
      }

      setStatus('sending');

      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
        const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
        window.open(`mailto:mhnakashima@gmail.com?subject=${subject}&body=${body}`, '_blank');
        setStatus('success');
        setLastSentAt(now);
        reset();
        return;
      }

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
          },
          EMAILJS_PUBLIC_KEY,
        );
        setStatus('success');
        setLastSentAt(now);
        reset();
      } catch {
        setStatus('error');
      }
    },
    [reset, lastSentAt],
  );

  return (
    <section
      className="mx-auto max-w-[960px] px-6 space-y-10 md:space-y-14"
      aria-labelledby="contact-heading"
    >
      <div>
        <h2
          id="contact-heading"
          className="mb-4 text-[28px] md:text-[36px] md:mb-6 font-black text-[#0A0A0A] font-['Lato',sans-serif]"
        >
          {t('contact.title')}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="relative rounded-xl bg-[#F9F9F9] p-6 md:p-8 space-y-5"
        >
          <div aria-hidden="true" className="absolute -left-[9999px] -top-[9999px]">
            <label htmlFor="website_url">Website</label>
            <input
              {...register('website_url')}
              id="website_url"
              type="text"
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <div className="space-y-1">
            <div className={`contact-field flex items-center gap-3 pb-3 ${errors.name ? 'contact-field--error' : ''}`}>
              <span className="text-[#888] shrink-0"><UserIcon /></span>
              <input
                {...register('name')}
                type="text"
                placeholder={t('contact.name')}
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full bg-transparent text-base md:text-lg text-[#0A0A0A] placeholder:text-[#BDBDBD] placeholder:italic font-['Lato',sans-serif]"
              />
            </div>
            {errors.name && (
              <p id="name-error" role="alert" className="text-xs text-red-600 font-['Lato',sans-serif] pl-9">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <div className={`contact-field flex items-center gap-3 pb-3 ${errors.email ? 'contact-field--error' : ''}`}>
              <span className="text-[#888] shrink-0"><EmailIcon size={16} /></span>
              <input
                {...register('email')}
                type="email"
                placeholder={t('contact.email')}
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full bg-transparent text-base md:text-lg text-[#0A0A0A] placeholder:text-[#BDBDBD] placeholder:italic font-['Lato',sans-serif]"
              />
            </div>
            {errors.email && (
              <p id="email-error" role="alert" className="text-xs text-red-600 font-['Lato',sans-serif] pl-9">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <div className={`contact-field flex items-start gap-3 pb-3 ${errors.message ? 'contact-field--error' : ''}`}>
              <span className="text-[#888] shrink-0 mt-1"><MessageIcon /></span>
              <textarea
                {...register('message')}
                placeholder={t('contact.message')}
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full bg-transparent text-base md:text-lg text-[#0A0A0A] placeholder:text-[#BDBDBD] placeholder:italic font-['Lato',sans-serif] resize-none"
              />
            </div>
            {errors.message && (
              <p id="message-error" role="alert" className="text-xs text-red-600 font-['Lato',sans-serif] pl-9">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 text-[#888] hover:text-[#0A0A0A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={t('contact.send')}
            >
              {status === 'sending' ? (
                <span className="w-4 h-4 border-2 border-[#888] border-t-transparent rounded-full animate-spin" />
              ) : (
                <SendIcon />
              )}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <p role="status" className="mt-4 text-sm text-green-700 font-['Lato',sans-serif]">
            {t('contact.success')}
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="mt-4 text-sm text-red-600 font-['Lato',sans-serif]">
            {t('contact.error')}
          </p>
        )}
      </div>

      <div>
        <h3 className="text-sm font-black text-[#0A0A0A] mb-5 tracking-wide md:text-base md:mb-6 font-['Lato',sans-serif]">
          {t('contact.findMe')}
        </h3>
        <ContactLinksGrid />
      </div>

      <div>
        <h3 className="text-sm font-black text-[#0A0A0A] mb-5 tracking-wide md:text-base md:mb-6 font-['Lato',sans-serif]">
          {t('contact.cv')}
        </h3>

        <a
          href="/docs/michael-nakashima-cv-2026.docx"
          download
          className="inline-flex items-center gap-3 text-[#0A0A0A] no-underline transition-colors hover:text-[#666] focus-visible:outline-2 focus-visible:outline-[#0A0A0A] focus-visible:outline-offset-4 focus-visible:rounded-sm"
          aria-label={`Download ${t('contact.cvFile')}`}
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded bg-[#F5F5F5] shrink-0">
            <DownloadIcon />
          </span>
          <span className="text-sm md:text-base font-['Lato',sans-serif]">
            {t('contact.cvFile')}
          </span>
        </a>
      </div>
    </section>
  );
}
