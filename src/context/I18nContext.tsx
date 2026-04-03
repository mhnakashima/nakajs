import { createContext, useContext, type ReactNode } from 'react';
import type { Locale, TranslationKeys } from '@/types/i18n';

interface I18nContextValue {
  t: (key: keyof TranslationKeys) => string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  children: ReactNode;
  value: I18nContextValue;
}

export function I18nProvider({ children, value }: I18nProviderProps) {
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return ctx;
}
