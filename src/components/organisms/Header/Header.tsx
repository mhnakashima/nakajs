import { forwardRef } from 'react';
import { Logo } from '@atoms/Logo';
import { StatusBadge } from '@atoms/StatusBadge';
import { LocaleSwitcher } from '@atoms/LocaleSwitcher';
import { NavLinks } from '@molecules/NavLinks';
import { HeaderInfo } from '@molecules/HeaderInfo';
import { useScrollPosition } from '@hooks/useScrollPosition';
import type { SiteConfig } from '@/types/navigation';
import type { Locale, TranslationKeys } from '@/types/i18n';
import { Outer, TopStrip, Container, ExpandedView, CompactBar, DesktopNav } from './styles';

interface HeaderProps {
  config: SiteConfig;
  t: (key: keyof TranslationKeys) => string;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const SCROLL_THRESHOLD = 120;

export const Header = forwardRef<HTMLElement, HeaderProps>(
  function Header({ config, t, locale, onLocaleChange }, ref) {
  const isScrolled = useScrollPosition(SCROLL_THRESHOLD);

  const { navigation, availability, owner } = config;
  const availLabel = t(availability.labelKey as keyof TranslationKeys);
  const roleLabel = t('header.role');

  return (
    <Outer $scrolled={isScrolled} role="banner" ref={ref}>
      <TopStrip>
        <LocaleSwitcher current={locale} onChange={onLocaleChange} compact={isScrolled} />
        {availability.visible && (
          <StatusBadge label={availLabel} status={availability.status} compact={isScrolled} />
        )}
      </TopStrip>

      <Container>
        <ExpandedView $visible={!isScrolled}>
          <HeaderInfo
            name={owner.name}
            role={roleLabel}
            avatarUrl={owner.avatarUrl}
          />
          <NavLinks items={navigation} t={t} />
        </ExpandedView>

        <CompactBar $visible={isScrolled}>
          <Logo
            name={owner.name}
            role={roleLabel}
            avatarUrl={owner.avatarUrl}
            compact
          />

          <DesktopNav>
            <NavLinks items={navigation} t={t} />
          </DesktopNav>
        </CompactBar>
      </Container>
    </Outer>
  );
});
