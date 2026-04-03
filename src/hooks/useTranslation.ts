import { useState, useCallback } from 'react';
import { translations } from '@/config/i18n';
import type { Locale, TranslationKeys } from '@/types/i18n';

export function useTranslation(initialLocale: Locale = 'en') {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const t = useCallback(
    (key: keyof TranslationKeys): string => {
      return translations[locale][key] ?? key;
    },
    [locale],
  );

  return { t, locale, setLocale };
}
