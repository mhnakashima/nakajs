import type { Locale } from '@/types/i18n';
import { SUPPORTED_LOCALES } from '@/types/i18n';
import { Wrapper, LocaleButton, Separator } from './styles';

interface LocaleSwitcherProps {
  current: Locale;
  onChange: (locale: Locale) => void;
  compact?: boolean;
  className?: string;
}

export function LocaleSwitcher({ current, onChange, compact = false, className }: LocaleSwitcherProps) {
  return (
    <Wrapper className={className} role="group" aria-label="Language selector">
      {SUPPORTED_LOCALES.map((locale, i) => (
        <span key={locale}>
          <LocaleButton
            $active={locale === current}
            $compact={compact}
            onClick={() => onChange(locale)}
            aria-pressed={locale === current}
            aria-label={`Switch language to ${locale.toUpperCase()}`}
          >
            {locale.toUpperCase()}
          </LocaleButton>
          {i < SUPPORTED_LOCALES.length - 1 && <Separator $compact={compact} aria-hidden="true">|</Separator>}
        </span>
      ))}
    </Wrapper>
  );
}
