import { z } from 'zod';
import { sanitize } from '@/utils/sanitize';
import type { TranslationKeys } from '@/types/i18n';

export const COOLDOWN_MS = 30_000;

export function createContactSchema(t: (key: keyof TranslationKeys) => string) {
  return z.object({
    name: z
      .string()
      .min(1, t('contact.validation.nameRequired'))
      .min(2, t('contact.validation.nameMin'))
      .max(100)
      .transform(sanitize),
    email: z
      .string()
      .min(1, t('contact.validation.emailRequired'))
      .email(t('contact.validation.emailInvalid'))
      .max(254)
      .transform((v) => v.trim().toLowerCase()),
    message: z
      .string()
      .min(1, t('contact.validation.messageRequired'))
      .min(10, t('contact.validation.messageMin'))
      .max(5000)
      .transform(sanitize),
    website_url: z.string().max(0).optional(),
  });
}

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
